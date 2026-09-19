"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * A route change replaces canvas bounds while React is committing the next
 * screen. A frame later, notify viewport-bound visuals to recompute before
 * they resume. This prevents stale canvas/WebGL dimensions after navigation.
 */
export default function RouteLifecycle() {
  const pathname = usePathname();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      window.dispatchEvent(new Event("routeChange"));
      window.dispatchEvent(new Event("resize"));
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
