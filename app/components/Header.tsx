"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AsciiGlitchRipple from "./AsciiGlitchRipple";

function CornerBrackets() {
  return (
    <span
      className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
      aria-hidden="true"
    >
      <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white" />
      <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white" />
      <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white" />
      <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white" />
    </span>
  );
}

function ChevronSlide() {
  return (
    <div className="w-3 h-3 overflow-hidden relative">
      <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
        <svg
          className="w-3 h-3 shrink-0"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4.75 9.125L7.875 6L4.75 2.875"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="square"
          />
        </svg>
        <svg
          className="w-3 h-3 shrink-0"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4.75 9.125L7.875 6L4.75 2.875"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </div>
  );
}

interface NavItem {
  label: string;
  index: string;
  href: string;
  description: string;
  external?: boolean;
}

const BENCHMARKS_NAV: NavItem[] = [
  { label: "BENCHMARKS", index: "B1", href: "/benchmarks", description: "Suite & methodology" },
  { label: "LEADERBOARD", index: "B2", href: "/benchmarks/leaderboard", description: "Ranked, verified runs" },
  { label: "COMPARISON", index: "B3", href: "/benchmarks/compare", description: "Safety systems head-to-head" },
  { label: "GUIDE", index: "B4", href: "/benchmarks/guide", description: "Run & submit" },
  { label: "SUBMIT", index: "B5", href: "/benchmarks/submit", description: "Validated run intake" },
];

const DOCS_NAV: NavItem[] = [
  { label: "DEVELOPER DOCS", index: "D1", href: "/docs", description: "Guides & API reference" },
  { label: "CHANGELOG", index: "D2", href: "/docs/changelog", description: "Monthly product updates" },
  { label: "GITHUB", index: "D3", href: "https://github.com/Directioner-OS-AI/Directioner Bench", description: "DIRECTIONER BENCH source & CLI", external: true },
];

const PRODUCT_NAV = [
  { label: "ENGINEER", index: "01", href: "/agent" },
  { label: "ARIA", index: "02", href: "/#aria" },
  { label: "SAFETY", index: "03", href: "/#safety" },
  { label: "PRICING", index: "04", href: "/pricing" },
  { label: "DOWNLOADS", index: "05", href: "/downloads" },
];

function NavDropdown({
  label,
  items,
  activePath,
}: {
  label: string;
  items: NavItem[];
  activePath: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const isActive = pathname === activePath || pathname.startsWith(`${activePath}/`);

  const clearTimer = () => window.clearTimeout(timeoutRef.current);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        clearTimer();
        setOpen(true);
      }}
      onMouseLeave={() => {
        clearTimer();
        timeoutRef.current = window.setTimeout(() => setOpen(false), 150);
      }}
    >
      <button
        type="button"
        className={`group flex h-7 items-center gap-1.5 whitespace-nowrap font-favorit text-xs uppercase transition-colors duration-150 hover:cursor-pointer hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 ${
          isActive || open ? "text-white" : "text-white/90"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {isActive && (
          <span className="w-1 h-1 bg-available" aria-hidden="true" />
        )}
        <span className="uppercase">
          <AsciiGlitchRipple>{label}</AsciiGlitchRipple>
        </span>
        <svg
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1.5 2.75L4 5.25L6.5 2.75"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="square"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-[120] w-72 -translate-x-1/2 pt-3">
          <nav
            className="flex flex-col border border-border bg-[#0e0e0e]/95 shadow-[0_18px_50px_rgba(0,0,0,0.5)] backdrop-blur-md"
            aria-label={label}
          >
            {items.map((item) => {
              const current =
                !item.external &&
                (item.href === activePath
                  ? pathname === item.href
                  : pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  className="group flex items-center justify-between gap-3 border-b border-border px-3.5 py-3 transition-colors last:border-b-0 hover:bg-white/5"
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  {...(item.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : { prefetch: false })}
                >
                  <span className="flex flex-col gap-1.5">
                    <span
                      className={`font-favorit text-xs uppercase leading-none ${
                        current ? "text-available" : "text-white/88 group-hover:text-white"
                      }`}
                    >
                      <AsciiGlitchRipple>{item.label}</AsciiGlitchRipple>
                    </span>
                    <span className="font-favorit text-[10px] uppercase leading-none tracking-wide text-white/35">
                      {item.description}
                    </span>
                  </span>
                  <span className="font-favorit text-[10px] text-white/30 transition-colors group-hover:text-white/60">
                    {item.index}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}

function MobileSection({
  label,
  index,
  items,
  onNavigate,
}: {
  label: string;
  index: string;
  items: NavItem[];
  onNavigate: () => void;
}) {
  const first = items[0];
  if (!first) return null;
  return (
    <>
      <Link
        className="flex min-h-11 items-center justify-between border-b border-border px-5 font-favorit text-xs uppercase text-white/88 hover:bg-white/5 hover:text-white"
        href={first.href}
        onClick={onNavigate}
      >
        <span>
          <AsciiGlitchRipple>{label}</AsciiGlitchRipple>
        </span>
        <span className="text-white/65">{index}</span>
      </Link>
      {items.slice(1).map((item, i) => (
        <Link
          key={item.href}
          className="flex min-h-11 items-center justify-between border-b border-border pl-9 pr-5 font-favorit text-xs uppercase text-white/60 hover:bg-white/5 hover:text-white"
          href={item.href}
          onClick={onNavigate}
          {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <span>
            <AsciiGlitchRipple>{item.label}</AsciiGlitchRipple>
          </span>
          <span className="text-white/30">{`${index}.${i + 1}`}</span>
        </Link>
      ))}
    </>
  );
}

export default function Header() {
  const [scrollFraction, setScrollFraction] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrollFraction(Math.min(Math.max(window.scrollY / 36, 0), 1));
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleResize = () => setMobileOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  const scrolledPastHeader = scrollFraction >= 0.999;
  const navOffset = Math.round((1 - scrollFraction) * 36);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-transparent">
      {/* Top background gradient that appears on scroll */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 hidden h-24 bg-gradient-to-b from-black/55 via-black/22 to-transparent transition-opacity duration-75 ease-out xl:block"
        style={{ opacity: scrollFraction }}
        aria-hidden="true"
      />

      {/* Announcement top bar that translates up and fades out */}
      <Link
        className={`absolute inset-x-0 top-0 z-[110] hidden h-9 items-center justify-center border-b border-white/[0.045] bg-black/14 px-5 font-favorit text-[0.82rem] leading-none text-white/70 shadow-[0_10px_36px_rgba(0,0,0,0.14)] backdrop-blur-md transition-[opacity,transform,background-color,color] duration-75 ease-out will-change-transform hover:bg-white/[0.055] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 xl:flex ${
          scrolledPastHeader ? "pointer-events-none" : ""
        }`}
        href="/blog"
        prefetch={false}
        tabIndex={scrolledPastHeader ? -1 : undefined}
        style={{
          opacity: 1 - scrollFraction,
          transform: `translateY(-${Math.round(36 * scrollFraction)}px)`,
        }}
      >
        <span className="inline-flex items-center gap-1.5">
          Announcing the Directioner-OS AI Engineer platform
          <span className="text-current">↗</span>
        </span>
      </Link>

      {/* Main navigation row */}
      <div
        className="relative z-100 mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between bg-transparent px-4 transition-transform duration-75 ease-out will-change-transform md:px-5"
        style={{
          transform: `translateY(${navOffset}px)`,
        }}
      >
        {/* Logo */}
        <Link
          className="relative z-[80] flex items-center shrink-0"
          href="/"
          aria-label="Directioner-OS home"
        >
          <img
            alt="Directioner-OS"
            width={190}
            height={32}
            decoding="async"
            className="h-[0.98rem] w-auto [filter:invert(1)] transition-[filter] duration-200"
            style={{ color: "transparent" }}
            src="/assets/logo-dark.svg"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex flex-1 items-center justify-between gap-5 ml-8">
          {/* Product Nav */}
          <nav
            className="flex items-center gap-1 overflow-visible relative z-[80] shrink-0"
            aria-label="Product"
          >
            {PRODUCT_NAV.map((p) => (
              <a
                key={p.index}
                className="group flex h-7.5 items-center justify-between px-2 font-favorit text-xs uppercase backdrop-blur-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/25 text-white/88 hover:bg-white/33 hover:text-white focus-visible:outline-white/60 w-31 w-[124px]"
                href={p.href}
              >
                <span className="uppercase">
                  <AsciiGlitchRipple>{p.label}</AsciiGlitchRipple>
                </span>
                <span className="transition-colors text-white/65 group-hover:text-white/80">
                  {p.index}
                </span>
              </a>
            ))}
          </nav>

          {/* Secondary nav and actions */}
          <div className="relative z-[80] flex items-center gap-5">
            <nav className="flex items-center overflow-visible gap-6" aria-label="Secondary">
              <NavDropdown
                label="BENCHMARKS"
                items={BENCHMARKS_NAV}
                activePath="/benchmarks"
              />
              <NavDropdown
                label="DOCS"
                items={DOCS_NAV}
                activePath="/docs"
              />
              <Link
                className="group flex h-7 items-center gap-2 font-favorit text-xs uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 text-white/90 hover:text-white focus-visible:outline-white/60 whitespace-nowrap"
                href="/blog"
                prefetch={false}
              >
                <span className="uppercase">
                  <AsciiGlitchRipple>{`BLOG`}</AsciiGlitchRipple>
                </span>
              </Link>
              <a
                className="group flex h-7 items-center gap-2 font-favorit text-xs uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 text-white/90 hover:text-white focus-visible:outline-white/60 whitespace-nowrap"
                href="https://testflight.apple.com/join/TSb64zQy"
                target="_blank"
                rel="noreferrer"
              >
                <span className="uppercase">
                  <AsciiGlitchRipple>{`IOS`}</AsciiGlitchRipple>
                </span>
              </a>
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-1">
              <Link
                className="group relative inline-flex h-7 items-center justify-center border px-2 font-favorit text-xs leading-none uppercase shadow-none backdrop-blur-md transition-colors border-white/12 bg-white/10 text-white/80 hover:cursor-none hover:border-transparent hover:bg-transparent hover:text-white focus-visible:outline-white/60"
                href="/auth?mode=signin&next=/app"
                prefetch={false}
              >
                <AsciiGlitchRipple>{`Login`}</AsciiGlitchRipple>
                <CornerBrackets />
              </Link>

              <Link
                className="group relative inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors hover:cursor-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black hover:bg-transparent hover:text-white min-h-7 px-2 py-2 text-xs leading-none"
                href="/app"
                prefetch={false}
              >
                <AsciiGlitchRipple>{`Launch Directioner-OS`}</AsciiGlitchRipple>
                <ChevronSlide />
                <CornerBrackets />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-1 xl:hidden">
          <button
            className="inline-flex items-center justify-center shrink-0 outline-none hover:cursor-pointer w-12 h-12 -mr-2 bg-[#121212]/95 text-white hover:bg-[#1a1a1a]/95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="relative w-6 h-6">
              <span
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-out ${
                  mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-out ${
                  mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <line x1="4" y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="4" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <nav
          className="absolute inset-x-0 top-16 z-[105] flex flex-col border-y border-border bg-[#0a0a0a]/98 backdrop-blur-md xl:hidden"
          aria-label="Mobile"
        >
          {PRODUCT_NAV.map((p) => (
            <Link
              key={p.index}
              className="flex min-h-11 items-center justify-between border-b border-border px-5 font-favorit text-xs uppercase text-white/88 last:border-b-0 hover:bg-white/5 hover:text-white"
              href={p.href}
              onClick={() => setMobileOpen(false)}
            >
              <span>
                <AsciiGlitchRipple>{p.label}</AsciiGlitchRipple>
              </span>
              <span className="text-white/65">{p.index}</span>
            </Link>
          ))}
          <MobileSection
            label="BENCHMARKS"
            index="05"
            items={BENCHMARKS_NAV}
            onNavigate={() => setMobileOpen(false)}
          />
          <MobileSection
            label="DOCS"
            index="06"
            items={DOCS_NAV}
            onNavigate={() => setMobileOpen(false)}
          />
          <Link
            className="flex min-h-11 items-center justify-between px-5 font-favorit text-xs uppercase text-white hover:bg-white/5"
            href="/app"
            prefetch={false}
            onClick={() => setMobileOpen(false)}
          >
            <span>
              <AsciiGlitchRipple>{`Launch Directioner-OS`}</AsciiGlitchRipple>
            </span>
            <span className="text-white/65">↗</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
