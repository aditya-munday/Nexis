"use client";

import { useEffect, useRef } from "react";

interface Props {
  projectId: string;
}

declare global {
  interface Window {
    UnicornStudio?: {
      addScene: (opts: {
        projectId: string;
        element: HTMLElement;
        lazyLoad?: boolean;
        scale?: number;
        dpi?: number;
        altText?: string;
        ariaLabel?: string;
      }) => Promise<unknown>;
      init: () => Promise<unknown>;
    };
  }
}

export default function UnicornHero({ projectId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    // Parallax scroll handler
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      let rafId = 0;
      const onScroll = () => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const y = (0.35 * window.scrollY).toFixed(1);
          document.documentElement.style.setProperty("--hero-parallax-y", `${y}px`);
        });
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (initialized.current) return;

    const tryInit = () => {
      const el = containerRef.current;
      if (!el || !window.UnicornStudio?.addScene) return false;
      initialized.current = true;
      window.UnicornStudio.addScene({
        projectId,
        element: el,
        lazyLoad: false,
        scale: 1,
        dpi: Math.min(1.5, window.devicePixelRatio || 1),
        altText: "",
        ariaLabel: "",
      }).catch((err) => {
        console.warn("UnicornStudio scene init fallback:", err);
      });
      return true;
    };

    if (!tryInit()) {
      const iv = setInterval(() => {
        if (tryInit()) clearInterval(iv);
      }, 100);
      const timeout = setTimeout(() => clearInterval(iv), 5000);
      return () => {
        clearInterval(iv);
        clearTimeout(timeout);
      };
    }
  }, [projectId]);

  return (
    <div
      ref={containerRef}
      data-us-project={projectId}
      data-us-scale="1"
      data-us-dpi="1.5"
      data-us-lazyload="false"
      className="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
