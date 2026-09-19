"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AsciiGlitchRipple from "./AsciiGlitchRipple";

const SLOGAN = "Own your execution.";

/* ─── Dot-text canvas ("Own your execution." in pixel dots) ─── */
function FooterDotCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animFrame = 0;
    let dots: Array<{ x: number; y: number; alpha: number }> = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent || parent.getBoundingClientRect().width === 0) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const offCanvas = document.createElement("canvas");
      offCanvas.width = Math.round(rect.width);
      offCanvas.height = Math.round(rect.height);
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return;

      const fontFamily = getComputedStyle(document.body).fontFamily;
      let fontSize = 0.52 * rect.height;
      offCtx.font = `600 ${fontSize}px ${fontFamily}`;
      const measured = offCtx.measureText(SLOGAN).width;
      if (measured > rect.width - 6) {
        fontSize *= (rect.width - 6) / measured;
        offCtx.font = `600 ${fontSize}px ${fontFamily}`;
      }
      offCtx.textBaseline = "middle";
      offCtx.fillStyle = "#fff";
      offCtx.fillText(SLOGAN, 2, rect.height / 2);

      const imgData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height).data;
      dots = [];
      for (let y = 0; y < offCanvas.height; y += 5) {
        for (let x = 0; x < offCanvas.width; x += 5) {
          const alpha = imgData[(y * offCanvas.width + x) * 4 + 3] ?? 0;
          if (alpha > 96) {
            dots.push({ x, y, alpha: 0.55 + (alpha / 255) * 0.45 });
          }
        }
      }
      render();
    };

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const dot of dots) {
        let drawX = dot.x;
        let drawY = dot.y;
        if (!prefersReducedMotion) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 64 && dist > 0.01) {
            const force = ((64 - dist) / 64) * 14;
            drawX += (dx / dist) * force;
            drawY += (dy / dist) * force;
          }
        }
        ctx.fillStyle = `rgba(244, 244, 244, ${dot.alpha})`;
        ctx.fillRect(drawX, drawY, 3.1, 3.1);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(render);
    };

    const handlePointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(render);
    };

    resize();
    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    if (!prefersReducedMotion) {
      canvas.addEventListener("pointermove", handlePointerMove);
      canvas.addEventListener("pointerleave", handlePointerLeave);
    }

    return () => {
      cancelAnimationFrame(animFrame);
      observer.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="relative hidden h-51.25 w-full max-w-166.5 md:block" aria-label={SLOGAN}>
      <canvas ref={canvasRef} className="absolute inset-0 cursor-crosshair" />
      <span className="sr-only">{SLOGAN}</span>
    </div>
  );
}

/* ─── Glass Matrix canvas (animated 3D sphere halftone + shader behind footer) ─── */
function FooterGlassMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    let raf = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate fixed grid points
    const COLS = 18;
    const ROWS = 12;
    type GridNode = {
      bx: number; by: number; // base x,y
      phaseX: number; phaseY: number;
      speed: number;
      bright: number;
    };
    const nodes: GridNode[] = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        nodes.push({
          bx: col / (COLS - 1),
          by: row / (ROWS - 1),
          phaseX: Math.random() * Math.PI * 2,
          phaseY: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 0.6,
          bright: 0.04 + Math.random() * 0.1,
        });
      }
    }

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      frame++;

      ctx.clearRect(0, 0, w, h);

      const t = frame * 0.008;

      // 1. Radial glow blobs
      const blobs = [
        { cx: 0.2 + 0.1 * Math.sin(t * 0.7), cy: 0.3 + 0.1 * Math.cos(t * 0.5), r: 0.45, color: "rgba(40, 80, 255, 0.08)" },
        { cx: 0.75 + 0.08 * Math.cos(t * 0.6), cy: 0.6 + 0.08 * Math.sin(t * 0.8), r: 0.5, color: "rgba(20, 60, 200, 0.07)" },
        { cx: 0.5, cy: 0.1 + 0.05 * Math.sin(t * 1.1), r: 0.35, color: "rgba(100, 180, 255, 0.05)" },
      ];
      for (const blob of blobs) {
        const gx = blob.cx * w;
        const gy = blob.cy * h;
        const gr = blob.r * Math.max(w, h);
        const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
        g.addColorStop(0, blob.color);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      // 2. Animated grid lines connecting nodes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const nx = (n.bx + 0.018 * Math.sin(t * n.speed + n.phaseX)) * w;
        const ny = (n.by + 0.018 * Math.cos(t * n.speed + n.phaseY)) * h;

        // Connect to right neighbor
        if (i % COLS < COLS - 1) {
          const m = nodes[i + 1];
          const mx = (m.bx + 0.018 * Math.sin(t * m.speed + m.phaseX)) * w;
          const my = (m.by + 0.018 * Math.cos(t * m.speed + m.phaseY)) * h;
          ctx.strokeStyle = `rgba(255,255,255,${(n.bright + m.bright) * 0.4})`;
          ctx.beginPath();
          ctx.moveTo(nx, ny);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
        // Connect to bottom neighbor
        if (i < nodes.length - COLS) {
          const m = nodes[i + COLS];
          const mx = (m.bx + 0.018 * Math.sin(t * m.speed + m.phaseX)) * w;
          const my = (m.by + 0.018 * Math.cos(t * m.speed + m.phaseY)) * h;
          ctx.strokeStyle = `rgba(255,255,255,${(n.bright + m.bright) * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(nx, ny);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
      }

      // 3. Node dots
      for (const n of nodes) {
        const nx = (n.bx + 0.018 * Math.sin(t * n.speed + n.phaseX)) * w;
        const ny = (n.by + 0.018 * Math.cos(t * n.speed + n.phaseY)) * h;
        ctx.fillStyle = `rgba(255,255,255,${n.bright * 1.5})`;
        ctx.beginPath();
        ctx.arc(nx, ny, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Traveling light pulse on random edges (comet-like)
      const pulseT = (t * 0.25) % 1;
      // horizontal traveling line
      const pulseX = pulseT * w;
      const pGrad = ctx.createLinearGradient(pulseX - 120, 0, pulseX + 20, 0);
      pGrad.addColorStop(0, "transparent");
      pGrad.addColorStop(0.7, "rgba(80, 160, 255, 0.06)");
      pGrad.addColorStop(1, "transparent");
      ctx.fillStyle = pGrad;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate w-full overflow-hidden bg-surface-raised pb-10" aria-label="Footer">
      {/* Glass matrix background shader */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        data-footer-shader-preset="a6ccb6de-4c60-4ef8-8920-5b199cccb207"
      >
        <FooterGlassMatrix />
      </div>

      <div className="relative z-10 px-10 pt-8 pb-5 md:pt-14 md:gap-14 lg:pt-20 flex flex-col gap-10 lg:gap-20 max-w-350 mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-0">
          <div className="w-full flex flex-none flex-col gap-22 items-start lg:w-2/3">
            <Link aria-label="Nexis home" href="/">
              <img
                alt="Nexis"
                loading="lazy"
                width="101"
                height="17"
                decoding="async"
                className="h-auto w-auto [filter:invert(1)]"
                src="/assets/logo-dark.svg"
              />
            </Link>
            <div className="flex flex-col gap-20 w-full">
              <FooterDotCanvas />
              <div className="flex items-center gap-1">
                <Link
                  className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white"
                  href="/app"
                >
                  <AsciiGlitchRipple animateOn="parentHover">Launch Nexis</AsciiGlitchRipple>
                  <div className="w-3 h-3 overflow-hidden relative">
                    <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                      <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
                      </svg>
                      <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
                      </svg>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">
                    <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white" />
                    <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white" />
                    <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white" />
                    <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white" />
                  </span>
                </Link>
                <Link
                  className="group inline-flex h-7 w-fit self-start shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border border-white/16 bg-white/10 px-2.5 font-favorit text-xs leading-none font-medium uppercase text-white/85 shadow-none backdrop-blur-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white"
                  href="/docs"
                >
                  <AsciiGlitchRipple animateOn="parentHover">Docs</AsciiGlitchRipple>
                  <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">
                    <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white" />
                    <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white" />
                    <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white" />
                    <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-20 items-start">
            <div className="flex flex-wrap gap-20 items-start">
              <div className="flex flex-col gap-5 items-start">
                <p className="font-favorit text-xs text-white/60 uppercase leading-none">Platform</p>
                <div className="flex flex-col gap-3 items-start">
                  <a className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/#platform">
                    <AsciiGlitchRipple animateOn="parentHover">Platform</AsciiGlitchRipple>
                  </a>
                  <a className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/#payments">
                    <AsciiGlitchRipple animateOn="parentHover">Payments</AsciiGlitchRipple>
                  </a>
                  <a className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/#markets">
                    <AsciiGlitchRipple animateOn="parentHover">Markets</AsciiGlitchRipple>
                  </a>
                  <a className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/#research">
                    <AsciiGlitchRipple animateOn="parentHover">Research</AsciiGlitchRipple>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start">
                <p className="font-favorit text-xs text-white/60 uppercase leading-none">Company</p>
                <div className="flex flex-col gap-3 items-start">
                  <Link className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/about">
                    <AsciiGlitchRipple animateOn="parentHover">About</AsciiGlitchRipple>
                  </Link>
                  <Link className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/blog">
                    <AsciiGlitchRipple animateOn="parentHover">Blog</AsciiGlitchRipple>
                  </Link>
                  <Link className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/contact">
                    <AsciiGlitchRipple animateOn="parentHover">Contact</AsciiGlitchRipple>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start">
                <p className="font-favorit text-xs text-white/60 uppercase leading-none">Community</p>
                <div className="flex flex-col gap-3 items-start">
                  <a className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" target="_blank" rel="noreferrer" href="https://testflight.apple.com/join/TSb64zQy">
                    <AsciiGlitchRipple animateOn="parentHover">iOS TestFlight</AsciiGlitchRipple>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-20 items-start">
              <div className="flex flex-col gap-5 items-start">
                <p className="font-favorit text-xs text-white/60 uppercase leading-none">Resources</p>
                <div className="flex flex-col gap-3 items-start">
                  <Link className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/docs">
                    <AsciiGlitchRipple animateOn="parentHover">Docs</AsciiGlitchRipple>
                  </Link>
                  <Link className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/blog">
                    <AsciiGlitchRipple animateOn="parentHover">Writings</AsciiGlitchRipple>
                  </Link>
                  <Link className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/benchmarks">
                    <AsciiGlitchRipple animateOn="parentHover">Benchmarks</AsciiGlitchRipple>
                  </Link>
                  <Link className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/benchmarks/leaderboard">
                    <AsciiGlitchRipple animateOn="parentHover">Leaderboard</AsciiGlitchRipple>
                  </Link>
                  <Link className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/app">
                    <AsciiGlitchRipple animateOn="parentHover">Dashboard</AsciiGlitchRipple>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start">
                <p className="font-favorit text-xs text-white/60 uppercase leading-none">Terms</p>
                <div className="flex flex-col gap-3 items-start">
                  <Link className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/terms">
                    <AsciiGlitchRipple animateOn="parentHover">Terms of Service</AsciiGlitchRipple>
                  </Link>
                  <Link className="font-favorit text-xs text-white uppercase hover:opacity-70 transition-opacity leading-none flex items-center gap-1" href="/privacy">
                    <AsciiGlitchRipple animateOn="parentHover">Privacy Policy</AsciiGlitchRipple>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between font-favorit text-sm text-white uppercase">
          <span>© 2026 Nexis, Inc.</span>
        </div>
      </div>
    </footer>
  );
}