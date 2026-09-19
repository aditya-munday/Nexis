"use client";

import { useEffect, useRef } from "react";

interface Props {
  projectId: string;
}

interface UnicornScene {
  destroy?: () => void;
}

let unicornLoader: Promise<void> | null = null;

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
      }) => Promise<UnicornScene>;
      init: () => Promise<unknown>;
      destroy?: () => void;
    };
  }
}

function loadUnicornStudio() {
  if (window.UnicornStudio) return Promise.resolve();
  if (unicornLoader) return unicornLoader;

  unicornLoader = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "/unicornStudio.umd.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Unable to load the hero runtime."));
    document.head.appendChild(script);
  });
  return unicornLoader;
}

export default function UnicornHero({ projectId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const sceneRef = useRef<UnicornScene | null>(null);

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
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    const tryInit = async () => {
      const el = containerRef.current;
      if (!el || !window.UnicornStudio?.addScene) return false;
      initialized.current = true;
      try {
        const scene = await window.UnicornStudio.addScene({
          projectId,
          element: el,
          lazyLoad: true,
          scale: 1,
          dpi: Math.min(1.5, window.devicePixelRatio || 1),
          altText: "",
          ariaLabel: "",
        });
        if (cancelled) {
          scene.destroy?.();
          return false;
        }
        sceneRef.current = scene;
      } catch (err) {
        initialized.current = false;
        console.warn("UnicornStudio scene init fallback:", err);
        return false;
      }
      return true;
    };

    const start = async () => {
      try {
        await loadUnicornStudio();
        if (!cancelled) await tryInit();
      } catch (error) {
        console.warn("UnicornStudio runtime fallback:", error);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        start();
      },
      { rootMargin: "300px" }
    );
    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
      sceneRef.current?.destroy?.();
      sceneRef.current = null;
      initialized.current = false;
      // Unicorn Studio keeps a module-level scene registry. This route owns its
      // only scene, so release the retained WebGL context and global listeners.
      window.UnicornStudio?.destroy?.();
    };
  }, [projectId]);

  return (
    <div
      ref={containerRef}
      data-us-project={projectId}
      data-us-scale="1"
      data-us-dpi="1.5"
      data-us-lazyload="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
