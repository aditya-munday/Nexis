"use client";

import React, { useRef, useEffect } from "react";

const RESEARCH_IMAGES = [
  "/assets/nex-landing/figma/workflows-background.png",
  "/assets/backgrounds/compute-bg.png",
  "/assets/backgrounds/lab.png",
];

const PLAYBOOK_IMAGES = [
  "/assets/nex-landing/art/playbook-system.webp",
  "/assets/nex-landing/art/playbook-yield.webp",
];

function dither(
  imgData: ImageData,
  w: number,
  h: number
) {
  const d = imgData.data;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const gray = 0.299 * d[i]! + 0.587 * d[i + 1]! + 0.114 * d[i + 2]!;
      const threshold = 128;
      const newVal = gray > threshold ? 255 : 0;
      const err = gray - newVal;
      d[i] = d[i + 1] = d[i + 2] = newVal;
      d[i + 3] = 255;
      const distribute = (xi: number, yi: number, f: number) => {
        if (xi < 0 || xi >= w || yi < 0 || yi >= h) return;
        const j = (yi * w + xi) * 4;
        d[j]! = Math.min(255, Math.max(0, d[j]! + err * f));
        d[j + 1]! = Math.min(255, Math.max(0, d[j + 1]! + err * f));
        d[j + 2]! = Math.min(255, Math.max(0, d[j + 2]! + err * f));
      };
      distribute(x + 1, y, 7 / 16);
      distribute(x - 1, y + 1, 3 / 16);
      distribute(x, y + 1, 5 / 16);
      distribute(x + 1, y + 1, 1 / 16);
    }
  }
}

interface DitheredCanvasProps {
  src?: string;
  index?: number;
  type?: "research" | "blog" | "playbook";
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

export default function DitheredCanvas({
  src,
  index = 0,
  type = "blog",
  className = "",
  style,
  "aria-label": ariaLabel = "Dithered image",
}: DitheredCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const imageSrc =
      src ||
      (type === "playbook"
        ? PLAYBOOK_IMAGES[index % PLAYBOOK_IMAGES.length]
        : RESEARCH_IMAGES[index % RESEARCH_IMAGES.length]);

    let image: HTMLImageElement | null = null;
    let isVisible = false;
    let resizeFrame = 0;

    const dimensions = () => {
      const width = parent.clientWidth || 400;
      const height = parent.clientHeight || 225;
      const scale = Math.min(1, 640 / Math.max(width, height));
      return { width: Math.max(1, Math.round(width * scale)), height: Math.max(1, Math.round(height * scale)) };
    };

    const drawFallback = () => {
      const { width: w, height: h } = dimensions();
      canvas.width = w;
      canvas.height = h;
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);
      const cols = Math.ceil(w / 6);
      const rows = Math.ceil(h / 6);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const noise = Math.random();
          if (noise > 0.92) {
            ctx.fillStyle = `rgba(255,255,255,${0.3 + Math.random() * 0.4})`;
            ctx.fillRect(x * 6, y * 6, 2, 2);
          } else if (noise > 0.85) {
            ctx.fillStyle = `rgba(255,255,255,${0.05 + Math.random() * 0.1})`;
            ctx.fillRect(x * 6, y * 6, 4, 4);
          }
        }
      }
    };

    const drawImage = () => {
      if (!image?.complete || !image.naturalWidth) return;
      const { width: w, height: h } = dimensions();
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(image, 0, 0, w, h);
      const imgData = ctx.getImageData(0, 0, w, h);
      dither(imgData, w, h);
      ctx.putImageData(imgData, 0, 0);
    };

    const load = () => {
      if (image) return;
      image = new window.Image();
      image.decoding = "async";
      image.onload = drawImage;
      image.onerror = drawFallback;
      image.src = imageSrc!;
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry?.isIntersecting);
        if (isVisible) load();
      },
      { rootMargin: "250px" }
    );
    intersectionObserver.observe(parent);

    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        if (isVisible && image?.complete) drawImage();
      });
    });
    resizeObserver.observe(parent);

    return () => {
      cancelAnimationFrame(resizeFrame);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      if (image) {
        image.onload = null;
        image.onerror = null;
      }
      canvas.width = 1;
      canvas.height = 1;
    };
  }, [src, index, type]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{ imageRendering: "pixelated", ...style }}
      aria-label={ariaLabel}
      role="img"
    />
  );
}
