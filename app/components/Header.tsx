"use client";

import React, { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [benchmarksOpen, setBenchmarksOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-transparent">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 hidden h-24 bg-gradient-to-b from-black/55 via-black/22 to-transparent transition-opacity duration-75 ease-out xl:block"
        style={{ opacity: 1 }}
        aria-hidden="true"
      />
      <a
        className="absolute inset-x-0 top-0 z-[110] hidden h-9 items-center justify-center border-b border-white/[0.045] bg-black/14 px-5 font-favorit text-[0.82rem] leading-none text-white/70 shadow-[0_10px_36px_rgba(0,0,0,0.14)] backdrop-blur-md transition-[opacity,transform,background-color,color] duration-75 ease-out will-change-transform hover:bg-white/[0.055] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 xl:flex"
        href="/blog"
        style={{ opacity: 1, transform: "translateY(-0px)" }}
      >
        <span className="inline-flex items-center gap-1.5">
          Announcing the Nexis agent platform
          <span className="text-current">↗</span>
        </span>
      </a>
      <div
        className="relative z-100 mx-auto flex h-16 max-w-360 items-center justify-between bg-transparent px-4 transition-transform duration-75 ease-out will-change-transform md:px-5 xl:translate-y-[var(--home-nav-offset)]"
        style={{ "--home-nav-offset": "36px" } as React.CSSProperties}
      >
        <a aria-label="Nexis home" className="relative z-[80] flex items-center shrink-0" href="/">
          <img
            alt="Nexis"
            width="190"
            height="32"
            decoding="async"
            className="h-[0.98rem] w-auto [filter:invert(1)] transition-[filter] duration-200"
            style={{ color: "transparent" }}
            src="/assets/logo-dark.svg"
          />
        </a>
        <div className="hidden xl:flex flex-1 items-center justify-between gap-5 ml-8">
          <nav className="flex items-center gap-1 overflow-visible relative z-[80]" aria-label="Product">
            <a
              className="group flex h-7.5 items-center justify-between px-2 font-favorit text-xs uppercase backdrop-blur-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/25 text-white/88 hover:bg-white/33 hover:text-white focus-visible:outline-white/60 w-31"
              href="#platform"
              onClick={(e) => handleNavClick(e, "platform")}
            >
              <span className="uppercase">
                <span className="inline-block min-w-0 max-w-full">
                  <span className="sr-only">PLATFORM</span>
                  <span aria-hidden="true" className="inline-block whitespace-pre select-none transition-colors duration-200">
                    PLATFORM
                  </span>
                </span>
              </span>
              <span className="transition-colors text-white/65 group-hover:text-white/80">01</span>
            </a>
            <a
              className="group flex h-7.5 items-center justify-between px-2 font-favorit text-xs uppercase backdrop-blur-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/25 text-white/88 hover:bg-white/33 hover:text-white focus-visible:outline-white/60 w-31"
              href="#payments"
              onClick={(e) => handleNavClick(e, "payments")}
            >
              <span className="uppercase">
                <span className="inline-block min-w-0 max-w-full">
                  <span className="sr-only">PAYMENTS</span>
                  <span aria-hidden="true" className="inline-block whitespace-pre select-none transition-colors duration-200">
                    PAYMENTS
                  </span>
                </span>
              </span>
              <span className="transition-colors text-white/65 group-hover:text-white/80">02</span>
            </a>
            <a
              className="group flex h-7.5 items-center justify-between px-2 font-favorit text-xs uppercase backdrop-blur-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/25 text-white/88 hover:bg-white/33 hover:text-white focus-visible:outline-white/60 w-31"
              href="#markets"
              onClick={(e) => handleNavClick(e, "markets")}
            >
              <span className="uppercase">
                <span className="inline-block min-w-0 max-w-full">
                  <span className="sr-only">MARKETS</span>
                  <span aria-hidden="true" className="inline-block whitespace-pre select-none transition-colors duration-200">
                    MARKETS
                  </span>
                </span>
              </span>
              <span className="transition-colors text-white/65 group-hover:text-white/80">03</span>
            </a>
            <a
              className="group flex h-7.5 items-center justify-between px-2 font-favorit text-xs uppercase backdrop-blur-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/25 text-white/88 hover:bg-white/33 hover:text-white focus-visible:outline-white/60 w-31"
              href="#research"
              onClick={(e) => handleNavClick(e, "research")}
            >
              <span className="uppercase">
                <span className="inline-block min-w-0 max-w-full">
                  <span className="sr-only">RESEARCH</span>
                  <span aria-hidden="true" className="inline-block whitespace-pre select-none transition-colors duration-200">
                    RESEARCH
                  </span>
                </span>
              </span>
              <span className="transition-colors text-white/65 group-hover:text-white/80">04</span>
            </a>
          </nav>
          <div className="relative z-[80] flex items-center gap-5">
            <nav className="flex items-center overflow-visible gap-6" aria-label="Secondary">
              <div
                className="relative"
                onMouseEnter={() => setBenchmarksOpen(true)}
                onMouseLeave={() => setBenchmarksOpen(false)}
              >
                <button
                  type="button"
                  className="group flex h-7 items-center gap-1.5 whitespace-nowrap font-favorit text-xs uppercase transition-colors duration-150 hover:cursor-pointer hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 text-white/90"
                  aria-expanded={benchmarksOpen}
                  aria-haspopup="true"
                  onClick={() => setBenchmarksOpen(!benchmarksOpen)}
                >
                  <span className="uppercase">
                    <span className="inline-block min-w-0 max-w-full">
                      <span className="sr-only">BENCHMARKS</span>
                      <span aria-hidden="true" className="inline-block whitespace-pre select-none transition-colors duration-200">
                        BENCHMARKS
                      </span>
                    </span>
                  </span>
                  <svg
                    className={`transition-transform duration-150 ${benchmarksOpen ? "rotate-180" : ""}`}
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M1.5 2.75L4 5.25L6.5 2.75" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
                  </svg>
                </button>
                {benchmarksOpen && (
                  <div className="absolute left-0 top-full mt-2 w-48 border border-white/10 bg-black/90 p-2 shadow-xl backdrop-blur-xl z-50">
                    <a
                      href="/benchmarks"
                      className="block px-3 py-2 text-xs font-favorit uppercase text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      Benchmarks
                    </a>
                    <a
                      href="/benchmarks/leaderboard"
                      className="block px-3 py-2 text-xs font-favorit uppercase text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      Leaderboard
                    </a>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setDocsOpen(true)}
                onMouseLeave={() => setDocsOpen(false)}
              >
                <button
                  type="button"
                  className="group flex h-7 items-center gap-1.5 whitespace-nowrap font-favorit text-xs uppercase transition-colors duration-150 hover:cursor-pointer hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 text-white/90"
                  aria-expanded={docsOpen}
                  aria-haspopup="true"
                  onClick={() => setDocsOpen(!docsOpen)}
                >
                  <span className="uppercase">
                    <span className="inline-block min-w-0 max-w-full">
                      <span className="sr-only">DOCS</span>
                      <span aria-hidden="true" className="inline-block whitespace-pre select-none transition-colors duration-200">
                        DOCS
                      </span>
                    </span>
                  </span>
                  <svg
                    className={`transition-transform duration-150 ${docsOpen ? "rotate-180" : ""}`}
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M1.5 2.75L4 5.25L6.5 2.75" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
                  </svg>
                </button>
                {docsOpen && (
                  <div className="absolute left-0 top-full mt-2 w-48 border border-white/10 bg-black/90 p-2 shadow-xl backdrop-blur-xl z-50">
                    <a
                      href="/docs"
                      className="block px-3 py-2 text-xs font-favorit uppercase text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      Documentation
                    </a>
                    <a
                      href="/docs/api"
                      className="block px-3 py-2 text-xs font-favorit uppercase text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      API Reference
                    </a>
                  </div>
                )}
              </div>
              <a
                className="group flex h-7 items-center gap-2 font-favorit text-xs uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 text-white/90 hover:text-white focus-visible:outline-white/60 whitespace-nowrap"
                href="/blog"
              >
                <span className="uppercase">
                  <span className="inline-block min-w-0 max-w-full">
                    <span className="sr-only">BLOG</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre select-none transition-colors duration-200">
                      BLOG
                    </span>
                  </span>
                </span>
              </a>
              <a
                className="group flex h-7 items-center gap-2 font-favorit text-xs uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 text-white/90 hover:text-white focus-visible:outline-white/60 whitespace-nowrap"
                href="https://testflight.apple.com/join/TSb64zQy"
                rel="noreferrer"
                target="_blank"
              >
                <span className="uppercase">
                  <span className="inline-block min-w-0 max-w-full">
                    <span className="sr-only">IOS</span>
                    <span aria-hidden="true" className="inline-block whitespace-pre select-none transition-colors duration-200">
                      IOS
                    </span>
                  </span>
                </span>
              </a>
            </nav>
            <div className="flex items-center gap-1">
              <a
                className="group relative inline-flex h-7 items-center justify-center border px-2 font-favorit text-xs leading-none uppercase shadow-none backdrop-blur-md transition-colors border-white/12 bg-white/10 text-white/80 hover:border-transparent hover:bg-transparent hover:text-white focus-visible:outline-white/60"
                href="/app"
              >
                <span className="inline-block min-w-0 max-w-full">
                  <span className="sr-only">Login</span>
                  <span aria-hidden="true" className="inline-block whitespace-pre select-none transition-colors duration-200">
                    Login
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">
                  <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white" />
                  <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white" />
                  <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white" />
                  <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white" />
                </span>
              </a>
              <a
                className="group relative inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black hover:bg-transparent hover:text-white min-h-7 px-2 py-2 text-xs leading-none"
                href="/app"
              >
                <span className="inline-block min-w-0 max-w-full">
                  <span className="sr-only">Launch Nexis</span>
                  <span aria-hidden="true" className="inline-block whitespace-pre select-none transition-colors duration-200">
                    Launch Nexis
                  </span>
                </span>
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
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 xl:hidden">
          <button
            className="inline-flex items-center justify-center shrink-0 outline-none hover:cursor-pointer w-12 h-12 -mr-2 bg-surface-raised/95 text-white hover:bg-button-container/95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="relative w-6 h-6">
              <span
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-out ${
                  mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-out ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
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
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-black/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between overflow-y-auto border-t border-white/10">
          <nav className="flex flex-col gap-6">
            <a
              href="#platform"
              onClick={(e) => handleNavClick(e, "platform")}
              className="font-favorit text-lg uppercase tracking-wider text-white/80 hover:text-white transition-colors"
            >
              01 Platform
            </a>
            <a
              href="#payments"
              onClick={(e) => handleNavClick(e, "payments")}
              className="font-favorit text-lg uppercase tracking-wider text-white/80 hover:text-white transition-colors"
            >
              02 Payments
            </a>
            <a
              href="#markets"
              onClick={(e) => handleNavClick(e, "markets")}
              className="font-favorit text-lg uppercase tracking-wider text-white/80 hover:text-white transition-colors"
            >
              03 Markets
            </a>
            <a
              href="#research"
              onClick={(e) => handleNavClick(e, "research")}
              className="font-favorit text-lg uppercase tracking-wider text-white/80 hover:text-white transition-colors"
            >
              04 Research
            </a>
            <div className="h-px bg-white/10 my-2" />
            <a href="/benchmarks" className="font-favorit text-sm uppercase text-white/60 hover:text-white">
              Benchmarks
            </a>
            <a href="/docs" className="font-favorit text-sm uppercase text-white/60 hover:text-white">
              Documentation
            </a>
            <a href="/blog" className="font-favorit text-sm uppercase text-white/60 hover:text-white">
              Blog
            </a>
            <a
              href="https://testflight.apple.com/join/TSb64zQy"
              target="_blank"
              rel="noreferrer"
              className="font-favorit text-sm uppercase text-white/60 hover:text-white"
            >
              iOS TestFlight
            </a>
          </nav>
          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <a
              href="/app"
              className="flex items-center justify-center py-3 border border-white/20 bg-white/10 font-favorit text-sm uppercase text-white hover:bg-white/20"
            >
              Login
            </a>
            <a
              href="/app"
              className="flex items-center justify-center py-3 bg-white font-favorit text-sm uppercase text-black hover:bg-white/90"
            >
              Launch Nexis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
