"use client";

import React, { useRef, useState, useEffect } from "react";

const PARAMS = [
  { key: "blast_radius", value: "18 / 100" },
  { key: "rollback_step", value: "READY" },
  { key: "policy_status", value: "PASS" },
  { key: "explanation_depth", value: "3" },
  { key: "verification_runs", value: "128" },
];

const CURVE_POINTS: [number, number][] = (() => {
  const pts: [number, number][] = [];
  for (let t = 0; t <= 48; t += 1) {
    const a = t / 48;
    const r = Math.min(
      Math.max(
        0.96 * (1 - Math.exp(-3.4 * a)) +
          0.045 * Math.sin(19 * a) * (1 - a) +
          0.03 * Math.sin(7.3 * a + 1.4) * (1 - 0.6 * a),
        0
      ),
      0.985
    );
    pts.push([330 * a, 129 - 129 * r]);
  }
  return pts;
})();

const PATH_D = CURVE_POINTS.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
const AREA_D = `${PATH_D} L330,129 L0,129 Z`;
const Y_TICKS = ["1", "0.8", "0.6", "0.4", "0.2", "0"];
const GRID_X = [65.4, 130.8, 196.2, 261.6];

export default function SimFigure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [hoverCoord, setHoverCoord] = useState<[number, number] | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsActive(true);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 330;
    const closest = CURVE_POINTS.reduce((prev, curr) =>
      Math.abs(curr[0] - x) < Math.abs(prev[0] - x) ? curr : prev
    );
    setHoverCoord(closest);
  };

  const onMouseLeave = () => {
    setHoverCoord(null);
  };

  return (
    <div
      ref={containerRef}
      className="flex h-full select-none items-start gap-3 md:gap-5 bg-[#0e0e0e] font-sans text-white/90 p-4"
    >
      <div className="relative z-10 box-border flex h-full flex-col gap-3 bg-[#0e0e0e] pr-4 flex-1">
        <div className="flex items-start justify-between whitespace-nowrap text-xs font-normal">
          <span className="text-xs font-normal text-white">Confidence</span>
          <span className="capitalize leading-none tabular-nums text-[#85ed75] font-mono">
            {hoverCoord ? (1 - hoverCoord[1] / 129).toFixed(2) : "0.02"}
          </span>
        </div>

        <div className="relative h-[135px] w-full shrink-0 pl-7">
          {/* Y Axis Labels */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-2 flex flex-col justify-between">
            {Y_TICKS.map((tick) => (
              <span key={tick} className="font-mono text-[10px] leading-none text-white/40 tabular-nums">
                {tick}
              </span>
            ))}
          </div>

          {/* SVG Graph */}
          <svg
            className="block h-full w-full cursor-crosshair overflow-visible"
            viewBox="0 0 330 135"
            preserveAspectRatio="none"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            aria-hidden="true"
          >
            {/* Grid Dashes */}
            {GRID_X.map((x) => (
              <path
                key={x}
                d={`M ${x} 0 V 129 M ${x - 3} 64.5 H ${x + 3}`}
                stroke="rgba(255,255,255,0.14)"
                strokeDasharray="2 3"
                fill="none"
              />
            ))}

            {/* Filled Area */}
            <path
              className={isActive ? "fig-area-fade" : ""}
              d={AREA_D}
              fill="rgba(133,237,117,0.1)"
            />

            {/* S-Curve Line */}
            <path
              className={isActive ? "fig-curve-draw" : ""}
              d={PATH_D}
              pathLength={1}
              stroke="rgba(255,255,255,0.72)"
              strokeWidth="1.25"
              fill="none"
            />

            {/* Dynamic Interactive Laser Reticle / Dot */}
            {hoverCoord && (
              <g>
                <line
                  x1={hoverCoord[0]}
                  y1={0}
                  x2={hoverCoord[0]}
                  y2={129}
                  stroke="rgba(255,255,255,0.35)"
                  strokeDasharray="2 2"
                />
                <circle cx={hoverCoord[0]} cy={hoverCoord[1]} r={3.5} fill="#85ed75" />
                <circle cx={hoverCoord[0]} cy={hoverCoord[1]} r={6.5} stroke="#85ed75" strokeWidth={1} fill="none" opacity={0.6} />
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* Parameter Column */}
      <div className="relative z-0 flex w-36 shrink-0 flex-col gap-1.5 pt-1">
        {PARAMS.map((item, idx) => (
          <div
            key={item.key}
            className={`reward-param-row ${isActive ? "reward-param-row-active" : ""} flex h-6 shrink-0 items-center gap-2 text-xs leading-normal whitespace-nowrap`}
            style={{ "--reward-param-delay": `${(idx * 0.18).toFixed(2)}s` } as React.CSSProperties}
          >
            <span className="shrink-0 text-white/50 text-[11px] font-mono">{item.key}</span>
            <svg className="reward-param-divider block h-0.5 min-w-px flex-1 overflow-visible text-white/20" aria-hidden="true">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" />
            </svg>
            <span className="reward-param-value shrink-0 text-white font-mono text-[11px] font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
