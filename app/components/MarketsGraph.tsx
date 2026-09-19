"use client";

import React, { useRef, useEffect, useState } from "react";

interface Gainer {
  id: string;
  name: string;
  symbol: string;
  change24h: number;
  imageUrl: string;
}

const DEFAULT_GAINERS: Gainer[] = [
  { id: "base", name: "Base", symbol: "BASE", change24h: 18.42, imageUrl: "/assets/chains/Base.png" },
  { id: "solana", name: "Solana", symbol: "SOL", change24h: 12.85, imageUrl: "/assets/chains/Solana.png" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH", change24h: 7.64, imageUrl: "/assets/chains/Ethereum.png" },
  { id: "arbitrum", name: "Arbitrum", symbol: "ARB", change24h: 5.19, imageUrl: "/assets/chains/Arbitrum.png" },
];

const ACCENT_COLOR = [133, 237, 117]; // #85ed75

const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
  signDisplay: "always",
});

export default function MarketsGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const badgeRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [gainers] = useState<Gainer[]>(DEFAULT_GAINERS);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let bars: Array<{ x: number; h: number; alpha: number; gainerIndex?: number }> = [];
    let gainerBarIndexes: number[] = [];
    let width = 0;
    let height = 0;
    let rafId = 0;
    let lastFrameTime = 0;
    let isInView = false;
    let isHovered = false;
    let mouseX = -9999;
    let bursts: Array<{ index: number; start: number }> = [];
    let lastBurstTime = 0;

    const buildBars = (w: number, h: number, gainerCount: number) => {
      const barCount = Math.max(16, Math.floor(w / 4));
      const newBars = Array.from({ length: barCount }, (_, i) => {
        const s = i / (barCount - 1);
        const noise = (2 * ((43758.5453 * Math.sin(127.1 * i + 31.7)) % 1) - 1) * 0.06;
        let l = 0.42 + 0.32 * s + 0.14 * Math.sin(3.4 * s - 0.7) + 0.08 * Math.sin(7.5 * s + 1) + 0.05 * Math.sin(14 * s + 0.3);
        l = Math.min(Math.max(Math.min(Math.max(l, 0.22), 1) + noise, 0.03), 1);

        return {
          alpha: 0.24 + 0.5 * l,
          h: l * h * 0.62,
          x: 4 * i + 2,
          gainerIndex: undefined as number | undefined,
        };
      });

      const maxGainers = Math.min(gainerCount, w < 640 ? 2 : w < 1100 ? 3 : 4);
      const chosenIndexes: number[] = [];
      const isMobile = w < 640;

      for (let g = 0; g < maxGainers; g++) {
        const targetRatio = (isMobile ? 0.56 : 0.64) + 0.26 * (maxGainers === 1 ? 1 : g / (maxGainers - 1));
        const idx = Math.round(targetRatio * (barCount - 1));
        const bar = newBars[idx];
        if (bar) {
          if (isMobile) bar.h = Math.min(bar.h, 0.24 * h);
          bar.gainerIndex = g;
          chosenIndexes.push(idx);
        }
      }

      return { bars: newBars, gainerBarIndexes: chosenIndexes };
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent || parent.getBoundingClientRect().width === 0) return;

      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      badgeRefs.current.forEach((el) => {
        if (el) el.hidden = true;
      });

      bursts.length = 0;
      const built = buildBars(width, height, gainers.length);
      bars = built.bars;
      gainerBarIndexes = built.gainerBarIndexes;
    };

    const render = (time: number) => {
      rafId = 0;
      if (!isInView || document.hidden) return;
      if (!prefersReducedMotion && time - lastFrameTime < 32) {
        rafId = requestAnimationFrame(render);
        return;
      }
      lastFrameTime = time;
      ctx.clearRect(0, 0, width, height);

      // Continuous autonomous pulse bursts along the graph (never static!)
      if (!prefersReducedMotion && gainerBarIndexes.length > 0) {
        if (time - lastBurstTime > 420) {
          const randIndex = gainerBarIndexes[Math.floor(Math.random() * gainerBarIndexes.length)];
          if (randIndex !== undefined) {
            bursts.push({ index: randIndex, start: time });
          }
          // Also occasionally trigger random wave ripples
          if (Math.random() > 0.6) {
            const randomBarIndex = Math.floor(Math.random() * bars.length);
            bursts.push({ index: randomBarIndex, start: time });
          }
          lastBurstTime = time;
        }

        for (let i = bursts.length - 1; i >= 0; i--) {
          const b = bursts[i];
          if (b && time - b.start > 650) {
            bursts.splice(i, 1);
          }
        }
      }

      // Draw all vertical spectrum bars
      for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        let currentH = bar.h;
        let currentAlpha = bar.alpha;
        let color: number[] | null = bar.gainerIndex !== undefined ? ACCENT_COLOR : null;

        // Continuous fluid organic harmonic waves
        if (!prefersReducedMotion) {
          const wave1 = 0.06 * Math.sin(0.22 * i - 0.0024 * time);
          const wave2 = 0.04 * Math.sin(0.08 * i + 0.0014 * time);
          const wave3 = 0.02 * Math.sin(0.45 * i - 0.0035 * time);
          currentH *= 1 + (wave1 + wave2 + wave3);
        }

        // Active pulse burst effects propagating through neighbors
        for (const burst of bursts) {
          const dist = Math.abs(i - burst.index);
          if (dist <= 2) {
            const progress = Math.min(Math.max((time - burst.start) / 650, 0), 1);
            const wave = Math.sin(progress * Math.PI) * (dist === 0 ? 1 : dist === 1 ? 0.6 : 0.25);
            currentH *= 1 + 0.55 * wave;
            currentAlpha = Math.min(1, currentAlpha + 0.5 * wave);
            if (dist <= 1) color = ACCENT_COLOR;
          }
        }

        // Interactive mouse hover proximity lifting
        if (isHovered && mouseX > -9000) {
          const mouseDist = Math.abs(bar.x - mouseX);
          if (mouseDist < 52) {
            const factor = 1 - mouseDist / 52;
            currentH *= 1 + 0.28 * factor;
            currentAlpha = Math.min(1, currentAlpha + 0.38 * factor);
          }
        }

        // Render bar rectangle
        ctx.fillStyle = color
          ? `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${Math.min(currentAlpha + 0.2, 1)})`
          : `rgba(236, 240, 236, ${currentAlpha})`;

        ctx.fillRect(bar.x - 0.7, height - currentH, 1.4, currentH);

        // Position floating token gainer badges at the peak of marked bars
        if (bar.gainerIndex !== undefined) {
          const badge = badgeRefs.current[bar.gainerIndex];
          if (badge) {
            badge.hidden = false;
            badge.style.left = `${bar.x}px`;
            badge.style.bottom = `${currentH}px`;
          }
        }
      }

      // Laser crosshair and tip indicator on pointer hover
      if (isHovered && mouseX > -9000 && bars.length > 0) {
        let closestBar = bars[0];
        for (const b of bars) {
          if (Math.abs(b.x - mouseX) < Math.abs(closestBar.x - mouseX)) {
            closestBar = b;
          }
        }

        const topLimit = Math.max(height - 0.62 * height - 10, 0);

        // Vertical laser crosshair line
        ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(closestBar.x, topLimit);
        ctx.lineTo(closestBar.x, height);
        ctx.stroke();

        // Neon coordinate dot at bar tip
        ctx.fillStyle = `rgba(${ACCENT_COLOR[0]}, ${ACCENT_COLOR[1]}, ${ACCENT_COLOR[2]}, 0.95)`;
        ctx.fillRect(closestBar.x - 2.5, height - closestBar.h - 2.5, 5, 5);

        // Glow ring around tip
        ctx.strokeStyle = `rgba(${ACCENT_COLOR[0]}, ${ACCENT_COLOR[1]}, ${ACCENT_COLOR[2]}, 0.45)`;
        ctx.strokeRect(closestBar.x - 4.5, height - closestBar.h - 4.5, 9, 9);
      }

      // Continuous 60fps loop
      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    const handlePointerEnter = () => {
      isHovered = true;
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      isHovered = true;
    };

    const handlePointerLeave = () => {
      isHovered = false;
      mouseX = -9999;
    };

    resize();
    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isInView = Boolean(entry?.isIntersecting);
        if (isInView && !prefersReducedMotion && !rafId && !document.hidden) {
          lastFrameTime = 0;
          rafId = requestAnimationFrame(render);
        }
        if (isInView && prefersReducedMotion) render(0);
      },
      { rootMargin: "200px" }
    );
    visibilityObserver.observe(container);

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      } else if (isInView && !prefersReducedMotion && !rafId) {
        lastFrameTime = 0;
        rafId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    container.addEventListener("pointerenter", handlePointerEnter);
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      container.removeEventListener("pointerenter", handlePointerEnter);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [gainers]);

  return (
    <div ref={containerRef} className="absolute inset-0 h-full w-full pointer-events-auto">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true" />

      {/* Floating Gainers Badges (Exact 1:1 Nexis reference spec) */}
      <div className="pointer-events-none absolute inset-0 z-10" data-market-gainers="true">
        <ol aria-label="CoinGecko 24-hour market gainers">
          {gainers.map((g, idx) => (
            <li
              key={g.id}
              ref={(el) => {
                badgeRefs.current[idx] = el;
              }}
              aria-label={`${g.name} gained ${g.change24h.toFixed(2)} percent in 24 hours`}
              className="absolute flex -translate-x-1/2 -translate-y-2 items-center gap-1.5 whitespace-nowrap text-xs text-available font-mono"
              data-market-gainer={g.id}
              title={`${g.name} (${g.symbol})`}
              hidden
            >
              <img
                alt=""
                aria-hidden="true"
                className="size-7 rounded-full object-cover border border-white/10 shadow-[0_0_10px_rgba(133,237,117,0.25)]"
                decoding="async"
                height={28}
                width={28}
                loading="lazy"
                src={g.imageUrl}
              />
              <span aria-hidden="true" className="font-semibold text-[#85ed75] drop-shadow-[0_0_8px_rgba(133,237,117,0.4)]">
                ({numberFormatter.format(g.change24h)}%)
              </span>
            </li>
          ))}
        </ol>

        {/* CoinGecko attribution link matching reference layout */}
        <a
          className="pointer-events-auto absolute bottom-4 right-5 text-2xs text-white/50 font-favorit uppercase underline-offset-4 hover:text-white hover:underline focus-visible:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2"
          href="https://www.coingecko.com/en/api"
          rel="noreferrer"
          target="_blank"
        >
          Data provided by CoinGecko
        </a>
      </div>
    </div>
  );
}
