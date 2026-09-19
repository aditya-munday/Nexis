"use client";

import React, { useState } from "react";

interface Playbook {
  key: "treasury" | "yield";
  label: string;
  tag: string;
  title: string;
  href: string;
  art: string;
  artPosition: string;
}

const PLAYBOOKS: Playbook[] = [
  {
    key: "treasury",
    label: "PLAYBOOK / 01",
    tag: "Payments",
    title: "Running a treasury on policy-gated stablecoin operations",
    href: "/blog",
    art: "/assets/nex-landing/art/playbook-treasury.webp",
    artPosition: "object-left",
  },
  {
    key: "yield",
    label: "PLAYBOOK / 02",
    tag: "DeFi",
    title: "Risk-adjusted yield without giving up custody",
    href: "/blog",
    art: "/assets/nex-landing/art/playbook-yield.webp",
    artPosition: "object-right",
  },
];

export default function OperatorPlaybooks() {
  const [focusedKey, setFocusedKey] = useState<"treasury" | "yield">("treasury");

  return (
    <section>
      <div className="w-full border border-border flex flex-col">
        <div className="flex items-start px-5 py-5 md:py-8 lg:py-10 overflow-hidden">
          <p className="flex-1 min-w-0 font-sans text-h3-title leading-normal text-white">
            Operator Playbooks
          </p>
        </div>
        <div className="flex flex-col lg:flex-row">
          {PLAYBOOKS.map((item, idx) => {
            const isFocused = focusedKey === item.key;
            return (
              <a
                key={item.key}
                className={`group relative flex flex-col items-start justify-between h-122.5 p-5 overflow-hidden border-t border-border min-w-0 flex-1 lg:shrink-0 transition-[flex-grow,flex-basis] duration-500 ease-in-out bg-[#101010] cursor-pointer ${
                  isFocused
                    ? "lg:grow-3 lg:basis-0 playbook-focused"
                    : "lg:grow-0 lg:basis-92.5 playbook-unfocused"
                } ${idx > 0 ? "lg:border-l" : ""}`}
                href={item.href}
                onMouseEnter={() => setFocusedKey(item.key)}
                onFocus={() => setFocusedKey(item.key)}
                tabIndex={0}
                aria-label={`${item.label} — ${item.title}`}
              >
                {/* Background Artwork */}
                <img
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className={`pointer-events-none object-cover ${
                    item.artPosition
                  } transition-all duration-500 ease-in-out select-none ${
                    isFocused
                      ? "opacity-85 group-hover:scale-[1.03]"
                      : "opacity-55 scale-100"
                  }`}
                  style={
                    {
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    } as React.CSSProperties
                  }
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  src={item.art}
                />

                {/* Grid Scanline Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-60 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_34px)]"
                  aria-hidden="true"
                />

                {/* Bottom Readability Gradient */}
                <div
                  className="customer-story-readable-gradient pointer-events-none absolute inset-x-0 bottom-0 h-41.25"
                  aria-hidden="true"
                />

                {/* Top Label */}
                <div className="relative z-10 flex items-center w-full">
                  <span
                    className={`font-favorit text-xs uppercase leading-none transition-colors duration-500 ${
                      isFocused ? "text-white/80" : "text-white/40"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                {/* Bottom Title & Tag */}
                <div className="relative z-30 flex flex-col gap-3 items-start w-full mt-4 lg:mt-0">
                  <span
                    className={`inline-flex items-center justify-center border text-xs font-favorit leading-none uppercase tracking-[0.24px] p-1 transition-colors duration-500 ${
                      isFocused
                        ? "border-white/28 text-white/70 bg-white/5"
                        : "border-white/15 text-white/40 bg-transparent"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <p
                    className={`font-sans max-w-98.5 text-h3-title leading-normal transition-colors duration-500 ${
                      isFocused ? "text-white" : "text-white/60"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
