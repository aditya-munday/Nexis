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

/* ─── Full-Footer 3D Volumetric Glass Cube & Mosaic Matrix ─── */
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

    // Mouse & interaction state
    const mouse = {
      x: -9999,
      y: -9999,
      prevX: -9999,
      prevY: -9999,
      speed: 0,
      isHovered: false,
      hoverFactor: 0, // lerps 0 (calm) -> 1 (active)
      lastRippleX: -9999,
      lastRippleY: -9999,
    };

    // 3D Parallax & orientation (Isometric initial pose)
    let currentPitch = 0.42;  // ~24 degrees pitch
    let currentYaw = -0.58;   // ~-33 degrees isometric yaw
    let currentRoll = 0.08;
    let targetPitch = 0.42;
    let targetYaw = -0.58;
    let targetRoll = 0.08;

    // Water ripple shocks
    type Ripple = {
      x: number;
      y: number;
      age: number;
      maxAge: number;
      speed: number;
      wavelength: number;
      strength: number;
    };
    const ripples: Ripple[] = [];

    // Resize handling
    let width = 0;
    let height = 0;
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    /* ─── 1. Build 3D Volumetric Rounded Cube Model ─── */
    type CubeVertex = {
      // 3D local coordinate
      x0: number;
      y0: number;
      z0: number;
      // Normal vector
      nx0: number;
      ny0: number;
      nz0: number;
      // Face index (0..5)
      face: number;
      // Calm directional lighting (precomputed)
      calmLight: number;
      // Alternating checkerboard tone flag
      isAlt: boolean;
    };

    const cubeVertices: CubeVertex[] = [];
    const FACE_GRID = 13; // 13x13 grid per face = 169 points * 6 = 1014 vertices
    const CUBE_SIZE = 220; // base cube half-extent in 3D units

    // Directional light vector for calm state (upper-right top light)
    const lx = 0.65;
    const ly = -0.75;
    const lz = 0.35;
    const lLen = Math.hypot(lx, ly, lz);
    const nlx = lx / lLen;
    const nly = ly / lLen;
    const nlz = lz / lLen;

    // Build the 6 faces of the cube with subtle spherical bevel / rounding
    for (let face = 0; face < 6; face++) {
      for (let i = 0; i < FACE_GRID; i++) {
        const u = (i / (FACE_GRID - 1)) * 2 - 1; // -1 .. 1
        for (let j = 0; j < FACE_GRID; j++) {
          const v = (j / (FACE_GRID - 1)) * 2 - 1; // -1 .. 1

          let px = 0;
          let py = 0;
          let pz = 0;
          let fnx = 0;
          let fny = 0;
          let fnz = 0;

          // Face orientations:
          // 0: Front (+Z), 1: Back (-Z), 2: Top (-Y), 3: Bottom (+Y), 4: Right (+X), 5: Left (-X)
          if (face === 0) { px = u; py = v; pz = 1; fnx = 0; fny = 0; fnz = 1; }
          else if (face === 1) { px = -u; py = v; pz = -1; fnx = 0; fny = 0; fnz = -1; }
          else if (face === 2) { px = u; py = -1; pz = -v; fnx = 0; fny = -1; fnz = 0; }
          else if (face === 3) { px = u; py = 1; pz = v; fnx = 0; fny = 1; fnz = 0; }
          else if (face === 4) { px = 1; py = v; pz = -u; fnx = 1; fny = 0; fnz = 0; }
          else if (face === 5) { px = -1; py = v; pz = u; fnx = -1; fny = 0; fnz = 0; }

          // Spherize / round edges slightly for organic glass bevel look
          const r = Math.hypot(px, py, pz);
          const roundBlend = 0.22;
          const rx = px * (1 - roundBlend) + (px / r) * roundBlend;
          const ry = py * (1 - roundBlend) + (py / r) * roundBlend;
          const rz = pz * (1 - roundBlend) + (pz / r) * roundBlend;

          // Normal blend
          const bnx = fnx * (1 - roundBlend) + (px / r) * roundBlend;
          const bny = fny * (1 - roundBlend) + (py / r) * roundBlend;
          const bnz = fnz * (1 - roundBlend) + (pz / r) * roundBlend;
          const bLen = Math.hypot(bnx, bny, bnz);

          const nx0 = bnx / bLen;
          const ny0 = bny / bLen;
          const nz0 = bnz / bLen;

          // Precompute calm directional diffuse + specular highlight
          const diff = Math.max(0, nx0 * nlx + ny0 * nly + nz0 * nlz);
          const hx = nlx;
          const hy = nly;
          const hz = nlz + 1;
          const hLen = Math.hypot(hx, hy, hz);
          const spec = Math.pow(Math.max(0, (nx0 * hx + ny0 * hy + nz0 * hz) / hLen), 12);

          // In calm reference (140845.png), only the upper-right hemisphere is lit
          const topGate = Math.max(0, -ny0 * 0.8 + 0.2);
          const rightGate = Math.max(0, nx0 * 0.7 + 0.3);
          const calmLight = (diff * 0.65 + spec * 0.85) * topGate * rightGate;

          cubeVertices.push({
            x0: rx * CUBE_SIZE,
            y0: ry * CUBE_SIZE,
            z0: rz * CUBE_SIZE,
            nx0,
            ny0,
            nz0,
            face,
            calmLight,
            isAlt: (i + j) % 2 === 1,
          });
        }
      }
    }

    /* ─── 2. Spring-Damper Physics Particle Bank ─── */
    type Particle = {
      // Current simulated positions
      x: number;
      y: number;
      // Rest target positions
      restX: number;
      restY: number;
      // Spring velocities
      vx: number;
      vy: number;
      // Depth
      z: number;
      // Visual properties
      brightness: number;
      calmLight: number;
      isCube: boolean;
      waveAmp: number;
      waveNormX: number;
      waveNormY: number;
      chromatic: number;
      isAlt: boolean;
    };

    const cubeParticles: Particle[] = cubeVertices.map((v) => ({
      x: 0,
      y: 0,
      restX: 0,
      restY: 0,
      vx: 0,
      vy: 0,
      z: 0,
      brightness: v.calmLight,
      calmLight: v.calmLight,
      isCube: true,
      waveAmp: 0,
      waveNormX: 0,
      waveNormY: 0,
      chromatic: 0,
      isAlt: v.isAlt,
    }));

    // Pointer events on footer
    const footerEl = canvas.closest("footer");
    const handlePointerMove = (e: PointerEvent) => {
      if (!footerEl) return;
      const rect = footerEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (mouse.prevX !== -9999) {
        const dx = x - mouse.prevX;
        const dy = y - mouse.prevY;
        mouse.speed = Math.hypot(dx, dy);
      } else {
        mouse.speed = 0;
      }
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = x;
      mouse.y = y;
      mouse.isHovered = true;

      // Spawn water ripple if cursor moved enough distance
      const dRipple = Math.hypot(x - mouse.lastRippleX, y - mouse.lastRippleY);
      if (dRipple > 26 && ripples.length < 9) {
        ripples.push({
          x,
          y,
          age: 0,
          maxAge: 85,
          speed: 4.2,
          wavelength: 36,
          strength: Math.min(1.6, 0.45 + mouse.speed * 0.05),
        });
        mouse.lastRippleX = x;
        mouse.lastRippleY = y;
      }
    };

    const handlePointerLeave = () => {
      mouse.isHovered = false;
      mouse.speed = 0;
    };

    if (footerEl) {
      footerEl.addEventListener("pointermove", handlePointerMove);
      footerEl.addEventListener("pointerleave", handlePointerLeave);
    }

    // Helper to draw rounded square / squircle dots with optional rotation & stretch
    const drawSquircle = (
      x: number,
      y: number,
      w: number,
      h: number,
      r: number,
      angle: number = 0
    ) => {
      const radius = Math.max(0.6, Math.min(r, w * 0.42, h * 0.42));
      ctx.beginPath();
      if (angle !== 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        const hw = w * 0.5;
        const hh = h * 0.5;
        if (typeof ctx.roundRect === "function") {
          ctx.roundRect(-hw, -hh, w, h, radius);
        } else {
          ctx.moveTo(-hw + radius, -hh);
          ctx.arcTo(hw, -hh, hw, hh, radius);
          ctx.arcTo(hw, hh, -hw, hh, radius);
          ctx.arcTo(-hw, hh, -hw, -hh, radius);
          ctx.arcTo(-hw, -hh, hw, -hh, radius);
        }
        ctx.fill();
        ctx.restore();
      } else {
        const x0 = x - w * 0.5;
        const y0 = y - h * 0.5;
        if (typeof ctx.roundRect === "function") {
          ctx.roundRect(x0, y0, w, h, radius);
        } else {
          ctx.moveTo(x0 + radius, y0);
          ctx.arcTo(x0 + w, y0, x0 + w, y0 + h, radius);
          ctx.arcTo(x0 + w, y0 + h, x0, y0 + h, radius);
          ctx.arcTo(x0, y0 + h, x0, y0, radius);
          ctx.arcTo(x0, y0, x0 + w, y0, radius);
        }
        ctx.fill();
      }
    };

    // Palette lookup for multi-tone grayscale halftone rendering with alternating shades & lower opacity
    const getDotStyle = (brightness: number, isCube: boolean, isAlt: boolean = false) => {
      let size = 2.0;
      let alpha = 0.08;
      let fill = "#1c202a";

      if (brightness >= 0.82) {
        size = isCube ? 9.2 + (brightness - 0.82) * 7.5 : 5.8;
        alpha = isAlt ? 0.52 : 0.68; // significantly reduced opacity (down from 1.0)
        fill = isAlt ? "#b2bccd" : "#ffffff"; // Alternating pure white vs cool silver-grey
      } else if (brightness >= 0.62) {
        size = isCube ? 7.2 + (brightness - 0.62) * 6.0 : 4.6;
        alpha = isAlt ? 0.38 : 0.52; // down from 0.95
        fill = isAlt ? "#8692a6" : "#d4d9e4"; // Alternating soft light grey vs subtle off-white
      } else if (brightness >= 0.42) {
        size = isCube ? 5.2 + (brightness - 0.42) * 4.8 : 3.5;
        alpha = isAlt ? 0.26 : 0.38; // down from 0.82
        fill = isAlt ? "#586275" : "#98a2b5"; // Alternating medium slate vs silvery slate
      } else if (brightness >= 0.22) {
        size = isCube ? 3.6 + (brightness - 0.22) * 3.6 : 2.5;
        alpha = isAlt ? 0.16 : 0.24; // down from 0.62
        fill = isAlt ? "#363d4c" : "#545d70"; // Alternating muted deep grey vs mid grey
      } else if (brightness >= 0.08) {
        size = isCube ? 2.2 + (brightness - 0.08) * 2.8 : 1.7;
        alpha = isAlt ? 0.08 : 0.14; // down from 0.38
        fill = isAlt ? "#1d212b" : "#2c3240";
      } else {
        size = 1.4;
        alpha = isAlt ? 0.04 : 0.07; // down from 0.18
        fill = isAlt ? "#13161e" : "#1a1e27";
      }

      return {
        fill,
        size,
        alpha,
        radius: Math.max(1.0, size * 0.28), // rounded corner radius for rounded square dot
      };
    };

    // Render loop
    const render = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      frame++;

      ctx.clearRect(0, 0, w, h);

      // Smooth hover factor lerp: 0 (calm) -> 1 (active)
      const targetHover = mouse.isHovered ? 1 : 0;
      mouse.hoverFactor += (targetHover - mouse.hoverFactor) * 0.055;

      // Parallax target calculation for 3D Cube
      // Cube center on desktop is shifted to ~52% width, ~50% height
      const cx = w * 0.52;
      const cy = h * 0.50;

      if (mouse.isHovered) {
        const nx = (mouse.x - cx) / (w * 0.5);
        const ny = (mouse.y - cy) / (h * 0.5);
        targetPitch = 0.42 + ny * 0.35;
        targetYaw = -0.58 + nx * 0.45;
        targetRoll = 0.08 + nx * ny * 0.15;
      } else {
        // Calm ambient breathing: gentle slow hypnotic wave
        const tCalm = frame * 0.012;
        targetPitch = 0.42 + Math.sin(tCalm) * 0.035;
        targetYaw = -0.58 + Math.cos(tCalm * 0.7) * 0.045;
        targetRoll = 0.08 + Math.sin(tCalm * 0.5) * 0.02;
      }

      currentPitch += (targetPitch - currentPitch) * 0.05;
      currentYaw += (targetYaw - currentYaw) * 0.05;
      currentRoll += (targetRoll - currentRoll) * 0.05;

      const cosP = Math.cos(currentPitch);
      const sinP = Math.sin(currentPitch);
      const cosY = Math.cos(currentYaw);
      const sinY = Math.sin(currentYaw);
      const cosR = Math.cos(currentRoll);
      const sinR = Math.sin(currentRoll);

      // Age and update ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        ripples[r].age++;
        if (ripples[r].age >= ripples[r].maxAge) {
          ripples.splice(r, 1);
        }
      }

      /* ─── 3. Render Mosaic Glass Facet Grid Across Full Footer ─── */
      // Creates the frosted geometric mosaic glass overlay requested
      const mosaicStep = 52;
      const cols = Math.ceil(w / mosaicStep) + 1;
      const rows = Math.ceil(h / mosaicStep) + 1;

      ctx.save();
      const baseMosaicAlpha = 0.02 + mouse.hoverFactor * 0.04;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const mx = c * mosaicStep + ((r % 2) * mosaicStep * 0.5);
          const my = r * mosaicStep * 0.866;

          // Distance from mouse to mosaic tile center
          const dTile = Math.hypot(mx - mouse.x, my - mouse.y);
          const tileHighlight = Math.max(0, 1 - dTile / 240) * mouse.hoverFactor;

          // Facet wireframe
          ctx.beginPath();
          ctx.moveTo(mx, my - mosaicStep * 0.45);
          ctx.lineTo(mx + mosaicStep * 0.45, my);
          ctx.lineTo(mx, my + mosaicStep * 0.45);
          ctx.lineTo(mx - mosaicStep * 0.45, my);
          ctx.closePath();

          if (tileHighlight > 0.02) {
            // Frosted glass specular sheen on hovered mosaic facets
            ctx.fillStyle = `rgba(255, 255, 255, ${tileHighlight * 0.07})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(255, 255, 255, ${baseMosaicAlpha + tileHighlight * 0.16})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          } else {
            ctx.strokeStyle = `rgba(255, 255, 255, ${baseMosaicAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      /* ─── 4. Project & Update 3D Cube Particles ─── */
      const baseScale = Math.min(w / 1280, 1.25) * Math.max(0.75, Math.min(1.15, h / 460));
      const fov = 850;

      for (let i = 0; i < cubeVertices.length; i++) {
        const v = cubeVertices[i];
        const p = cubeParticles[i];

        // 3D rotation: Yaw -> Pitch -> Roll
        // 1. Yaw around Y
        const x1 = v.x0 * cosY + v.z0 * sinY;
        const z1 = -v.x0 * sinY + v.z0 * cosY;

        // 2. Pitch around X
        const y2 = v.y0 * cosP - z1 * sinP;
        const z2 = v.y0 * sinP + z1 * cosP;

        // 3. Roll around Z
        const x3 = x1 * cosR - y2 * sinR;
        const y3 = x1 * sinR + y2 * cosR;

        // Normal rotation
        const npx1 = v.nx0 * cosY + v.nz0 * sinY;
        const npz1 = -v.nx0 * sinY + v.nz0 * cosY;
        const npy2 = v.ny0 * cosP - npz1 * sinP;
        const npz2 = v.ny0 * sinP + npz1 * cosP;
        const npx3 = npx1 * cosR - npy2 * sinR;
        const npy3 = npx1 * sinR + npy2 * cosR;

        // Cull vertices that face deeply away
        if (npz2 < -0.38) {
          p.brightness = 0;
          continue;
        }

        // Perspective projection
        const pz = fov / (fov + z2 * baseScale);
        p.restX = cx + x3 * baseScale * pz;
        p.restY = cy + y3 * baseScale * pz;
        p.z = z2;

        // If particle was freshly initialized, place at rest
        if (p.x === 0 && p.y === 0) {
          p.x = p.restX;
          p.y = p.restY;
        }

        // Dynamic Lighting & Bloom
        let brightness = v.calmLight;
        let totalWaveAmp = 0;
        let wnx = 0;
        let wny = 0;
        let chromatic = 0;

        if (mouse.hoverFactor > 0.01) {
          const dCursor = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          const spotlight = Math.exp(-(dCursor * dCursor) / (2 * 230 * 230)) * 1.45;
          const ambientHover = 0.38 * mouse.hoverFactor * Math.max(0, npz2);

          brightness = (1 - mouse.hoverFactor) * v.calmLight +
                       mouse.hoverFactor * (v.calmLight * 1.35 + spotlight + ambientHover);

          // Repulsion & Jiggle Impulse from Cursor
          if (dCursor < 95 && dCursor > 0.1) {
            const push = ((95 - dCursor) / 95) * 4.8 * mouse.hoverFactor;
            const nx = (p.x - mouse.x) / dCursor;
            const ny = (p.y - mouse.y) / dCursor;
            p.vx += nx * push * 0.45;
            p.vy += ny * push * 0.45;
          }

          // Water Ripple Propagation & Jiggle Kick
          for (let r = 0; r < ripples.length; r++) {
            const rip = ripples[r];
            const dRip = Math.hypot(p.x - rip.x, p.y - rip.y);
            const waveRadius = rip.age * rip.speed;
            const deltaR = dRip - waveRadius;

            if (Math.abs(deltaR) < 95) {
              const progress = rip.age / rip.maxAge;
              const env = Math.exp(-(deltaR * deltaR) / (2 * 28 * 28)) * (1 - progress) * rip.strength;
              const wave = Math.sin(deltaR * 0.16) * env;

              const ux = dRip > 0.1 ? (p.x - rip.x) / dRip : 0;
              const uy = dRip > 0.1 ? (p.y - rip.y) / dRip : 0;

              totalWaveAmp += wave;
              wnx += ux * wave;
              wny += uy * wave;

              // Impart liquid kinetic jiggle velocity to particles!
              p.vx += ux * wave * 5.2;
              p.vy += uy * wave * 5.2;

              if (env > 0.10) {
                chromatic = Math.max(chromatic, env);
              }
            }
          }
        }

        // Spring-Damper Physics Integration
        const springK = 0.082;
        const damping = 0.865;
        const fx = (p.restX - p.x) * springK;
        const fy = (p.restY - p.y) * springK;
        p.vx = (p.vx + fx) * damping;
        p.vy = (p.vy + fy) * damping;
        p.x += p.vx;
        p.y += p.vy;

        p.waveAmp = totalWaveAmp;
        p.waveNormX = wnx;
        p.waveNormY = wny;
        p.chromatic = chromatic;

        // Button Legibility Shield:
        // Lower-left quadrant where "LAUNCH NEXIS", "DOCS", and copyright sit:
        // Soften dots in that zone so buttons stay immaculate and readable!
        if (p.x < 380 && p.y > h - 190) {
          const shieldDist = Math.hypot(p.x - 40, p.y - h);
          const shieldDamp = Math.max(0.18, Math.min(1.0, shieldDist / 340));
          brightness *= shieldDamp;
        }

        p.brightness = Math.max(0, Math.min(1.25, brightness + totalWaveAmp * 0.45));
      }

      /* ─── 5. Full-Footer Ambient Background Dots ─── */
      // Creates the cohesive full-footer presence across the entire canvas
      const bgStep = 38;
      const bgCols = Math.ceil(w / bgStep);
      const bgRows = Math.ceil(h / bgStep);

      for (let r = 0; r < bgRows; r++) {
        for (let c = 0; c < bgCols; c++) {
          const bx = c * bgStep + ((r % 2) * (bgStep * 0.5));
          const by = r * bgStep;

          // Distance from cube center
          const dFromCube = Math.hypot(bx - cx, by - cy);
          if (dFromCube < 260) continue; // let 3D cube take precedence in the center

          // Button shield
          if (bx < 360 && by > h - 180) continue;

          // Ambient lighting
          const dCursor = Math.hypot(bx - mouse.x, by - mouse.y);
          let bgBright = 0.04;
          if (mouse.hoverFactor > 0.01) {
            bgBright += Math.exp(-(dCursor * dCursor) / (2 * 180 * 180)) * 0.7 * mouse.hoverFactor;
          }

          if (bgBright > 0.05) {
            const isAlt = (r + c) % 2 === 1;
            const style = getDotStyle(bgBright, false, isAlt);
            ctx.fillStyle = style.fill;
            ctx.globalAlpha = style.alpha * 0.6;
            drawSquircle(bx, by, style.size, style.size, style.radius, 0);
          }
        }
      }
      ctx.globalAlpha = 1.0;

      /* ─── 6. Render Caustic Water Wave Rings ─── */
      if (ripples.length > 0) {
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        for (const rip of ripples) {
          const progress = rip.age / rip.maxAge;
          const currentR = rip.age * rip.speed;
          const alpha = (1 - progress) * 0.32 * rip.strength;

          const hue = (rip.age * 6 + 190) % 360;
          ctx.strokeStyle = `hsla(${hue}, 80%, 65%, ${alpha})`;
          ctx.lineWidth = 2.4;
          ctx.beginPath();
          ctx.arc(rip.x, rip.y, currentR, 0, Math.PI * 2);
          ctx.stroke();

          // Second inner iridescent ring
          if (currentR > 18) {
            ctx.strokeStyle = `hsla(${(hue + 90) % 360}, 90%, 70%, ${alpha * 0.65})`;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.arc(rip.x, rip.y, currentR - 9, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      /* ─── 7. Render 3D Halftone Dots with Depth & Jiggle ─── */
      // Sort by depth (back to front) for crisp occlusion
      const sortedDots = [...cubeParticles].sort((a, b) => a.z - b.z);

      for (let i = 0; i < sortedDots.length; i++) {
        const dot = sortedDots[i];
        if (dot.brightness < 0.05) continue;

        const style = getDotStyle(dot.brightness, true, dot.isAlt);

        // Chromatic aberration along water wave / jiggle vector:
        if (dot.chromatic > 0.12 && !prefersReducedMotion) {
          const cShift = dot.chromatic * 4.5 + Math.hypot(dot.vx, dot.vy) * 0.35;

          // Red channel offset
          ctx.fillStyle = `rgba(255, 60, 60, ${style.alpha * 0.35})`;
          drawSquircle(
            dot.x + dot.waveNormX * cShift,
            dot.y + dot.waveNormY * cShift,
            style.size * 0.9,
            style.size * 0.9,
            style.radius * 0.9,
            0
          );

          // Cyan channel offset
          ctx.fillStyle = `rgba(45, 195, 255, ${style.alpha * 0.35})`;
          drawSquircle(
            dot.x - dot.waveNormX * cShift,
            dot.y - dot.waveNormY * cShift,
            style.size * 0.9,
            style.size * 0.9,
            style.radius * 0.9,
            0
          );
        }

        // Main dot
        ctx.fillStyle = style.fill;
        ctx.globalAlpha = style.alpha;

        // Liquid stretching along wave crests and spring velocity
        const speed = Math.hypot(dot.vx, dot.vy);
        if (Math.abs(dot.waveAmp) > 0.04 || speed > 0.8) {
          const stretch = 1 + Math.min(1.4, Math.abs(dot.waveAmp) * 0.45 + speed * 0.07);
          const squash = Math.max(0.6, 1 - Math.abs(dot.waveAmp) * 0.22 - speed * 0.035);
          const angle = Math.atan2(dot.vy + dot.waveNormY, dot.vx + dot.waveNormX);
          drawSquircle(dot.x, dot.y, style.size * stretch, style.size * squash, style.radius, angle);
        } else {
          drawSquircle(dot.x, dot.y, style.size, style.size, style.radius, 0);
        }
      }

      ctx.globalAlpha = 1.0;
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      if (footerEl) {
        footerEl.removeEventListener("pointermove", handlePointerMove);
        footerEl.removeEventListener("pointerleave", handlePointerLeave);
      }
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