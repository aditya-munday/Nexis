"use client";

import React, { useRef, useEffect } from "react";

interface Props {
  size?: "afterHero" | "chapter" | "beforeStories" | "beforeJoin";
  className?: string;
}

const SIZES = {
  afterHero: "h-6 md:h-10 lg:h-20",
  chapter: "h-5 md:h-8 lg:h-17.5",
  beforeStories: "h-10 md:h-18 lg:h-37.5",
  beforeJoin: "h-11 md:h-20 lg:h-40",
};

interface GridNode {
  x: number;
  y: number;
  col: number;
  row: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  isGreen: boolean;
  flareSize: number;
}

interface DataPulse {
  row: number;
  x: number;
  speed: number;
  length: number;
  color: string;
}

export default function GlitterGridSeparator({ size = "chapter", className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let nodes: GridNode[] = [];
    let pulses: DataPulse[] = [];
    let nextPulseTime = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    let isHovering = false;

    const SPACING_X = 18;
    const SPACING_Y = 12;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = [];
      pulses = [];

      const cols = Math.ceil(width / SPACING_X) + 1;
      const rows = Math.ceil(height / SPACING_Y) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const isGreen = Math.random() < 0.18;
          const hasGlitter = Math.random() < 0.48;

          nodes.push({
            x: c * SPACING_X,
            y: r * SPACING_Y,
            col: c,
            row: r,
            baseAlpha: hasGlitter ? 0.08 + Math.random() * 0.28 : 0.03 + Math.random() * 0.07,
            twinkleSpeed: 0.0018 + Math.random() * 0.0045,
            twinklePhase: Math.random() * Math.PI * 2,
            isGreen,
            flareSize: isGreen ? 2.4 : 1.8 + Math.random() * 0.8,
          });
        }
      }
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Spawn periodic horizontal data comet pulses along grid rows
      if (!prefersReducedMotion && time > nextPulseTime) {
        const rows = Math.ceil(height / SPACING_Y);
        const randomRow = Math.floor(Math.random() * Math.max(1, rows));
        pulses.push({
          row: randomRow,
          x: -60,
          speed: 4 + Math.random() * 6,
          length: 40 + Math.random() * 70,
          color: Math.random() > 0.35 ? "133, 237, 117" : "255, 255, 255",
        });
        nextPulseTime = time + 250 + Math.random() * 600;
      }

      // Update and draw horizontal data pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.x += p.speed;

        if (p.x - p.length > width) {
          pulses.splice(i, 1);
          continue;
        }

        const py = p.row * SPACING_Y;
        const grad = ctx.createLinearGradient(p.x - p.length, py, p.x, py);
        grad.addColorStop(0, `rgba(${p.color}, 0)`);
        grad.addColorStop(0.7, `rgba(${p.color}, 0.28)`);
        grad.addColorStop(1, `rgba(${p.color}, 0.85)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x - p.length, py);
        ctx.lineTo(p.x, py);
        ctx.stroke();

        // Glowing pulse head photon
        ctx.fillStyle = `rgba(${p.color}, 0.95)`;
        ctx.fillRect(p.x - 1.5, py - 1.5, 3, 3);
      }

      // Draw cyber grid matrix nodes with organic shimmer waves & glitter flares
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Diagonal cyber harmonic wave
        const wave = Math.sin(node.x * 0.009 - node.y * 0.024 + time * 0.0028);
        const twinkle = Math.sin(time * node.twinkleSpeed + node.twinklePhase);
        
        let alpha = node.baseAlpha + wave * 0.18 + twinkle * 0.22;
        alpha = Math.max(0.02, Math.min(0.95, alpha));

        let isExcited = false;
        let excitationAlpha = 0;

        // Check proximity to mouse
        if (isHovering && mouseX > -9000) {
          const dx = node.x - mouseX;
          const dy = node.y - mouseY;
          const distSq = dx * dx + dy * dy;
          const maxDist = 90;
          if (distSq < maxDist * maxDist) {
            const factor = 1 - Math.sqrt(distSq) / maxDist;
            isExcited = true;
            excitationAlpha = factor * 0.85;
            alpha = Math.min(1, alpha + excitationAlpha);
          }
        }

        // Check proximity to data pulses passing by
        for (const p of pulses) {
          if (p.row === node.row && node.x >= p.x - p.length && node.x <= p.x + 8) {
            const relPos = (node.x - (p.x - p.length)) / p.length;
            alpha = Math.min(1, alpha + relPos * 0.65);
          }
        }

        const colorStr = node.isGreen || isExcited ? "133, 237, 117" : "255, 255, 255";

        // Draw glitter node
        ctx.fillStyle = `rgba(${colorStr}, ${alpha})`;
        const dotSize = isExcited ? 2.6 : node.isGreen ? 1.8 : 1.2;
        ctx.fillRect(node.x - dotSize / 2, node.y - dotSize / 2, dotSize, dotSize);

        // Twinkle flare for high-energy glitter points
        if (alpha > 0.58) {
          const flareAlpha = (alpha - 0.58) * 1.5;
          const flareLen = node.flareSize * 2.2;

          ctx.fillStyle = `rgba(${colorStr}, ${flareAlpha * 0.35})`;
          // Horizontal flare
          ctx.fillRect(node.x - flareLen, node.y - 0.5, flareLen * 2, 1);
          // Vertical flare
          ctx.fillRect(node.x - 0.5, node.y - flareLen, 1, flareLen * 2);

          // Center bloom
          ctx.fillStyle = `rgba(255, 255, 255, ${flareAlpha * 0.8})`;
          ctx.fillRect(node.x - 1, node.y - 1, 2, 2);
        }
      }

      // Edge fade gradients (soft vignette for seamless blend)
      const edgeGrad = ctx.createLinearGradient(0, 0, width, 0);
      edgeGrad.addColorStop(0, "rgba(14, 14, 14, 0.95)");
      edgeGrad.addColorStop(0.06, "rgba(14, 14, 14, 0)");
      edgeGrad.addColorStop(0.94, "rgba(14, 14, 14, 0)");
      edgeGrad.addColorStop(1, "rgba(14, 14, 14, 0.95)");

      ctx.fillStyle = edgeGrad;
      ctx.fillRect(0, 0, width, height);

      // Top and bottom edge blend
      const vGrad = ctx.createLinearGradient(0, 0, 0, height);
      vGrad.addColorStop(0, "rgba(14, 14, 14, 0.6)");
      vGrad.addColorStop(0.2, "rgba(14, 14, 14, 0)");
      vGrad.addColorStop(0.8, "rgba(14, 14, 14, 0)");
      vGrad.addColorStop(1, "rgba(14, 14, 14, 0.6)");

      ctx.fillStyle = vGrad;
      ctx.fillRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovering = true;
    };

    const handlePointerLeave = () => {
      isHovering = false;
      mouseX = -9999;
      mouseY = -9999;
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(render);
    } else {
      render(0);
    }

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`relative w-full overflow-hidden bg-[#0e0e0e] ${SIZES[size]} ${className}`}
      data-city-grid-separator={size}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />
      {/* Subtle fine horizontal cyber scanline pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_3px,rgba(255,255,255,0.015)_4px)]" />
    </div>
  );
}
