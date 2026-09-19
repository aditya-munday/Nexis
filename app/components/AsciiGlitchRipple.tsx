"use client";

import React, { useEffect, useRef } from "react";

interface AsciiGlitchRippleProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
  as?: React.ElementType;
  className?: string;
  parentClassName?: string;
  animateOn?: "hover" | "parentHover" | "view";
  dur?: number;
  chars?: string;
  preserveSpaces?: boolean;
  spread?: number;
}

export default function AsciiGlitchRipple({
  children: text,
  as: Component = "span",
  className,
  parentClassName,
  animateOn = "parentHover",
  dur = 1000,
  chars = '.,·-─~+:;=*π""┐┌┘┴┬╗╔╝╚╬╠╣╩╦║░▒▓█▄▀▌▐■!?&#$@0123456789*',
  preserveSpaces = true,
  spread = 1,
  ...rest
}: AsciiGlitchRippleProps) {
  const textRef = useRef<HTMLElement>(null);
  const stateRef = useRef({
    origTxt: text,
    origChars: text.split(""),
    isAnim: false,
    cursorPos: 0,
    waves: [] as Array<{ startPos: number; startTime: number; id: number }>,
    animId: null as number | null,
    isHover: false,
    origW: null as number | null,
    dur,
    chars,
    preserveSpaces,
    spread,
  });

  useEffect(() => {
    stateRef.current.origTxt = text;
    stateRef.current.origChars = text.split("");
    stateRef.current.dur = dur;
    stateRef.current.chars = chars;
    stateRef.current.preserveSpaces = preserveSpaces;
    stateRef.current.spread = spread;

    if (stateRef.current.origW !== null && textRef.current) {
      textRef.current.style.width = "";
      stateRef.current.origW = null;
    }
    if (!stateRef.current.isAnim && textRef.current) {
      textRef.current.textContent = text;
    }
  }, [text, dur, chars, preserveSpaces, spread]);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    el.textContent = text;

    const calcCursorPos = (clientX: number) => {
      const rect = el.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const len = stateRef.current.origTxt.length;
      const pos = Math.round((offsetX / (rect.width || 1)) * len);
      stateRef.current.cursorPos = Math.max(0, Math.min(pos, len - 1));
    };

    const animate = () => {
      const now = Date.now();
      stateRef.current.waves = stateRef.current.waves.filter(
        (w) => now - w.startTime < stateRef.current.dur
      );

      if (stateRef.current.waves.length === 0) {
        el.textContent = stateRef.current.origTxt;
        el.classList.remove("as");
        if (stateRef.current.origW !== null) {
          el.style.width = "";
          stateRef.current.origW = null;
        }
        stateRef.current.isAnim = false;
        if (stateRef.current.animId) {
          cancelAnimationFrame(stateRef.current.animId);
          stateRef.current.animId = null;
        }
      } else {
        el.textContent = stateRef.current.origChars
          .map((char, charIdx) => {
            if (stateRef.current.preserveSpaces && char === " ") return " ";
            let shouldAnim = false;
            let finalChar = stateRef.current.origChars[charIdx];

            for (const wave of stateRef.current.waves) {
              const elapsed = now - wave.startTime;
              const progress = Math.min(elapsed / stateRef.current.dur, 1);
              const dist = Math.abs(charIdx - wave.startPos);
              const maxDist =
                Math.max(
                  wave.startPos,
                  stateRef.current.origChars.length - wave.startPos - 1
                ) + 5;
              const radius = (progress * maxDist) / stateRef.current.spread;

              if (dist <= radius) {
                shouldAnim = true;
                const lead = Math.max(0, radius - dist);
                if (lead <= 3 && lead > 0) {
                  const chIdx =
                    (3 * dist + Math.floor(elapsed / 40)) %
                    stateRef.current.chars.length;
                  finalChar = stateRef.current.chars[chIdx];
                }
              }
            }
            return shouldAnim ? finalChar : char;
          })
          .join("");

        stateRef.current.animId = requestAnimationFrame(animate);
      }
    };

    const triggerWave = () => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        stateRef.current.origTxt.length === 0
      ) {
        return;
      }
      stateRef.current.waves.push({
        startPos: stateRef.current.cursorPos,
        startTime: Date.now(),
        id: Math.random(),
      });

      if (!stateRef.current.isAnim) {
        if (stateRef.current.origW === null) {
          stateRef.current.origW = el.getBoundingClientRect().width;
          el.style.width = `${stateRef.current.origW}px`;
        }
        stateRef.current.isAnim = true;
        el.classList.add("as");
        stateRef.current.animId = requestAnimationFrame(animate);
      }
    };

    const onMouseEnter = (e: MouseEvent) => {
      stateRef.current.isHover = true;
      calcCursorPos(e.clientX);
      triggerWave();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!stateRef.current.isHover) return;
      const prevPos = stateRef.current.cursorPos;
      calcCursorPos(e.clientX);
      if (stateRef.current.cursorPos !== prevPos) {
        triggerWave();
      }
    };

    const onMouseLeave = () => {
      stateRef.current.isHover = false;
    };

    const parentEl =
      animateOn === "parentHover"
        ? (el.closest('a,button,[role="button"],label') as HTMLElement | null)
        : null;

    const onParentEnter = (e: MouseEvent) => {
      calcCursorPos(e.clientX);
      triggerWave();
    };

    if (animateOn === "hover") {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mousemove", onMouseMove);
      el.addEventListener("mouseleave", onMouseLeave);
    } else if (animateOn === "parentHover" && parentEl) {
      parentEl.addEventListener("mouseenter", onParentEnter);
    }

    let observer: IntersectionObserver | null = null;
    if (animateOn === "view") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              stateRef.current.cursorPos = 0;
              triggerWave();
              observer?.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    }

    return () => {
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
      parentEl?.removeEventListener("mouseenter", onParentEnter);
      observer?.disconnect();
      if (stateRef.current.animId) {
        cancelAnimationFrame(stateRef.current.animId);
      }
    };
  }, [text, animateOn]);

  return (
    <span
      className={`inline-block min-w-0 max-w-full ${parentClassName || ""}`}
      {...rest}
    >
      <span className="sr-only">{text}</span>
      <Component
        ref={textRef}
        aria-hidden="true"
        className={`inline-block whitespace-pre select-none transition-colors duration-200 ${
          className || ""
        }`}
      >
        {text}
      </Component>
    </span>
  );
}
