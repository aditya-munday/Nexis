import Header from "./components/Header";
import Footer from "./components/Footer";
import CopyButton from "./components/CopyButton";
import UnicornHero from "./components/UnicornHero";
import SimFigure from "./components/SimFigure";
import FanOutFigure from "./components/FanOutFigure";
import GlitterGridSeparator from "./components/GlitterGridSeparator";
import MarketsGraph from "./components/MarketsGraph";
import RouteBoard from "./components/RouteBoard";
import AsciiGlitchRipple from "./components/AsciiGlitchRipple";
import OperatorPlaybooks from "./components/OperatorPlaybooks";
import DitheredCanvas from "./components/DitheredCanvas";

const POLICY_KIT_CODE = `import { capability } from "@directioner/os"
export const maintenance = capability({
  scope: "display.driver",
  blastRadius: "0-15",
  rollback: "required",
  approval: "tier-0",
})`;

const NEX_CLI_CODE = `ai-engineer explain \\
  --action update-display-driver \\
  --depth full-diagnostic \\
  --include-rollback-proof`;

export default function Home() {
  return (
    <div className="pi-root chivo_mono_b95da7ba-module__6lSSaG__variable">
      <Header />
      <main className="min-h-screen">
            <section className="relative mx-0 flex w-full min-w-0 flex-col md:-mx-5 md:w-auto">
              <div className="hero-video-edge-blend pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[528px] overflow-hidden bg-surface max-[560px]:h-[680px] md:h-[640px]">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 transform-gpu will-change-transform" style={{ transform: 'translate3d(0, var(--hero-parallax-y, 0px), 0)' } as React.CSSProperties} aria-hidden="true">
                    <UnicornHero projectId="2PvJj4fVH8PXnSKtrEbt" />
                  </div>
                </div>
              </div>
              <div className="relative flex h-[528px] flex-col items-start justify-end px-5 pt-16 pb-10 max-[560px]:h-[680px] md:h-[640px] lg:pt-20">
                <div className="relative z-10 flex w-full flex-col items-start font-sans xl:flex-row xl:items-end xl:justify-between xl:gap-10">
                  <div className="flex flex-1 flex-col items-start">
                    <h1 className="font-sans leading-100 tracking-normal">
                      <span className="block font-favorit text-sm leading-none uppercase text-white/30">                      The AI-Native Operating System
</span>
                      <span className="group/title-glow relative text-white/90 [text-shadow:0_0_44px_rgba(120,231,114,0.2)] mt-2 block text-[36px] leading-[1.1]" style={{ '--glow-x': '50%', '--glow-y': '50%' } as React.CSSProperties}>                                            <span className="relative z-0">                      The Operating System Employs an Engineer
</span>
                      <span className="pointer-events-none absolute inset-0 z-10 animate-[hero-title-wash_9s_ease-in-out_infinite] bg-[linear-gradient(105deg,rgba(255,255,255,0)_0%,rgba(219,255,212,0.34)_42%,rgba(255,255,255,0.68)_50%,rgba(120,231,114,0.28)_58%,rgba(255,255,255,0)_100%)] bg-[length:220%_100%] bg-clip-text text-transparent opacity-28 motion-reduce:animate-none" aria-hidden="true">                      The Operating System Employs an Engineer
</span>
                      <span className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_140px_at_var(--glow-x)_var(--glow-y),rgba(236,255,232,0.72)_0%,rgba(120,231,114,0.28)_34%,rgba(255,255,255,0)_72%)] bg-clip-text text-transparent opacity-0 transition-opacity duration-300 [filter:drop-shadow(0_0_14px_rgba(120,231,114,0.16))] group-hover/title-glow:opacity-55" aria-hidden="true">                      The Operating System Employs an Engineer
</span>
</span>
                    </h1>
                    <p className="mt-3 max-w-120 text-lg leading-normal text-white/45">
                      Directioner-OS combines a resident, capability-scoped AI Engineer with Aria spatial intelligence, self-healing rollback, universal hardware support, and mathematical safety.
                    </p>
                    <div className="mt-6 flex items-center gap-1 font-favorit">
                      <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/app">
                        <AsciiGlitchRipple animateOn="parentHover">LAUNCH DIRECTIONER-OS</AsciiGlitchRipple>
                      <div className="w-3 h-3 overflow-hidden relative">
                        <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                            </path>
                          </svg>
                          <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                      <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                      <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                      <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                      <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                      <a className="group inline-flex h-7 w-fit self-start shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border border-white/16 bg-white/10 px-2.5 font-favorit text-xs leading-none font-medium uppercase text-white/85 shadow-none backdrop-blur-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/docs">
                        <AsciiGlitchRipple animateOn="parentHover">DOCS</AsciiGlitchRipple>
                      <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                      <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                      <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                      <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                      <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                    </div>
                    <p className="mt-6 max-w-full overflow-hidden font-mono text-sm leading-none text-white/46 [text-shadow:0_0_24px_rgba(120,231,114,0.2)]">
                      <span className="text-[#78e772] [text-shadow:0_0_18px_rgba(120,231,114,0.3)]">                      $
</span>
                      <span className="relative inline-block max-w-full whitespace-pre">                                            <span className="invisible">                      ai-health status
</span>
                      <span className="absolute bottom-0 left-0 whitespace-pre" aria-hidden="true">                      <span className="ml-px inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] bg-white/60 animate-[hero-cursor-blink_1.1s_steps(1)_infinite] motion-reduce:animate-none"></span>
</span>
                      <span className="sr-only">                      ai-health status nominal
</span>
</span>
                    </p>
                  </div>
                  <div className="relative mt-12 min-w-0 overflow-visible py-3 pr-4 text-left font-sans text-sm leading-5 text-white/40 max-[560px]:mt-10 xl:mt-0 xl:shrink-0 xl:translate-y-4">
                    <div className="pointer-events-none absolute -inset-y-5 -left-8 right-0 -z-10 bg-[radial-gradient(ellipse_at_82%_50%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.028)_28%,rgba(255,255,255,0.018)_48%,rgba(255,255,255,0)_72%)] blur-xl" aria-hidden="true">
                    </div>
                    <p className="relative mb-2 text-white/54">
                      Runs on
                    </p>
                    <div className="relative flex flex-wrap items-center gap-x-3 gap-y-1.5 xl:flex-nowrap xl:whitespace-nowrap">
                      <span className="flex items-center gap-x-3">                      <span className="text-white/62">                      LAPTOP
</span>
</span>
                      <span className="flex items-center gap-x-3">                      <span className="text-white/30">                      /
</span>
                      <span className="text-white/62">                      DESKTOP
</span>
</span>
                      <span className="flex items-center gap-x-3">                      <span className="text-white/30">                      /
</span>
                      <span className="text-white/62">                      WORKSTATION
</span>
</span>
                      <span className="flex items-center gap-x-3">                      <span className="text-white/30">                      /
</span>
                      <span className="text-white/62">                      VM / QEMU
</span>
</span>
                      <span className="flex items-center gap-x-3">                      <span className="text-white/30">                      /
</span>
                      <span className="text-white/62">                      SERVER
</span>
</span>
                      <span className="flex items-center gap-x-3">                      <span className="text-white/30">                      /
</span>
                      <span className="text-white/62">                      ARM64
</span>
</span>
                      <span className="flex items-center gap-x-3">                      <span className="text-white/30">                      /
</span>
                      <span className="text-white/62">                      X86_64
</span>
</span>
                      <span className="flex items-center gap-x-3">                      <span className="text-white/30">                      /
</span>
                      <span className="text-white/62">                      RECOVERY
</span>
</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 bg-surface px-5">
                <div className="grid grid-cols-2 border border-border sm:grid-cols-5">
                  <a aria-label="Laptop support" className="relative flex h-25 min-w-0 items-center justify-center p-2.5 border-border group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60" href="/downloads">                  <span className="relative flex items-center justify-center gap-2">                  <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" className="object-contain transition-opacity max-h-6" src="/icon.svg" />
                  <span className="hidden font-favorit text-xs uppercase leading-none text-white/70 md:inline">                  LAPTOP
</span>
</span>
                  <span className="pointer-events-none absolute top-0 right-0 z-10 flex items-center gap-1.5 bg-white/4 p-1.5 font-favorit text-xs leading-none font-normal uppercase text-white/50 transition-colors group-hover:bg-white/8 group-hover:text-white">                  <span className="hidden md:inline">                  Live
</span>
                  <svg className="shrink-0 opacity-50" width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                    <path d="M3 8L8 3M8 3H3.5M8 3V7.5" stroke="currentColor" strokeWidth="1.1">
                    </path>
                  </svg>
</span>
</a>
                  <a aria-label="Desktop support" className="relative flex h-25 min-w-0 items-center justify-center p-2.5 border-l border-border group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60" href="/downloads">                  <span className="relative flex items-center justify-center gap-2">                  <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" className="object-contain transition-opacity max-h-6" src="/icon.svg" />
                  <span className="hidden font-favorit text-xs uppercase leading-none text-white/70 md:inline">                  DESKTOP
</span>
</span>
                  <span className="pointer-events-none absolute top-0 right-0 z-10 flex items-center gap-1.5 bg-white/4 p-1.5 font-favorit text-xs leading-none font-normal uppercase text-white/50 transition-colors group-hover:bg-white/8 group-hover:text-white">                  <span className="hidden md:inline">                  Live
</span>
                  <svg className="shrink-0 opacity-50" width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                    <path d="M3 8L8 3M8 3H3.5M8 3V7.5" stroke="currentColor" strokeWidth="1.1">
                    </path>
                  </svg>
</span>
</a>
                  <a aria-label="Workstation support" className="relative flex h-25 min-w-0 items-center justify-center p-2.5 border-l border-border group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60" href="/downloads">                  <span className="relative flex items-center justify-center gap-2">                  <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" className="object-contain transition-opacity max-h-6" src="/icon.svg" />
                  <span className="hidden font-favorit text-xs uppercase leading-none text-white/70 md:inline">                  WORKSTATION
</span>
</span>
                  <span className="pointer-events-none absolute top-0 right-0 z-10 flex items-center gap-1.5 bg-white/4 p-1.5 font-favorit text-xs leading-none font-normal uppercase text-white/50 transition-colors group-hover:bg-white/8 group-hover:text-white">                  <span className="hidden md:inline">                  Live
</span>
                  <svg className="shrink-0 opacity-50" width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                    <path d="M3 8L8 3M8 3H3.5M8 3V7.5" stroke="currentColor" strokeWidth="1.1">
                    </path>
                  </svg>
</span>
</a>
                  <div className="relative flex h-25 min-w-0 items-center justify-center p-2.5 border-l  border-border">
                    <span className="relative flex items-center justify-center gap-2">                    <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" className="object-contain transition-opacity max-h-6" src="/icon.svg" />
                    <span className="hidden font-favorit text-xs uppercase leading-none text-white/70 md:inline">                    VM / QEMU
</span>
</span>
                  </div>
                  <div className="relative flex h-25 min-w-0 items-center justify-center p-2.5 border-l  border-border">
                    <span className="relative flex items-center justify-center gap-2">                    <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" className="object-contain transition-opacity max-h-6" src="/icon.svg" />
                    <span className="hidden font-favorit text-xs uppercase leading-none text-white/70 md:inline">                    SERVER
</span>
</span>
                  </div>
                  <div className="relative flex h-25 min-w-0 items-center justify-center p-2.5  border-t border-border">
                    <span className="relative flex items-center justify-center gap-2">                    <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" className="object-contain transition-opacity max-h-6" src="/icon.svg" />
                    <span className="hidden font-favorit text-xs uppercase leading-none text-white/70 md:inline">                    RECOVERY
</span>
</span>
                  </div>
                  <div className="relative flex h-25 min-w-0 items-center justify-center p-2.5 border-l border-t border-border">
                    <span className="relative flex items-center justify-center gap-2">                    <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" className="object-contain transition-opacity max-h-6" src="/icon.svg" />
                    <span className="hidden font-favorit text-xs uppercase leading-none text-white/70 md:inline">                    LOCAL AI
</span>
</span>
                  </div>
                  <a aria-label="ARM64 support" className="relative flex h-25 min-w-0 items-center justify-center p-2.5 border-l border-t border-border group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60" href="/downloads">                  <span className="relative flex items-center justify-center gap-2">                  <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" className="object-contain transition-opacity max-h-6" src="/icon.svg" />
                  <span className="hidden font-favorit text-xs uppercase leading-none text-white/70 md:inline">                  ARM64
</span>
</span>
                  <span className="pointer-events-none absolute top-0 right-0 z-10 flex items-center gap-1.5 bg-white/4 p-1.5 font-favorit text-xs leading-none font-normal uppercase text-white/50 transition-colors group-hover:bg-white/8 group-hover:text-white">                  <span className="hidden md:inline">                  Read more
</span>
                  <svg className="shrink-0 opacity-50" width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                    <path d="M3 8L8 3M8 3H3.5M8 3V7.5" stroke="currentColor" strokeWidth="1.1">
                    </path>
                  </svg>
</span>
</a>
                  <div className="relative flex h-25 min-w-0 items-center justify-center p-2.5 border-l border-t border-border">
                    <span className="relative flex items-center justify-center gap-2">                    <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" className="object-contain transition-opacity max-h-6" src="/icon.svg" />
                    <span className="hidden font-favorit text-xs uppercase leading-none text-white/70 md:inline">                    X86_64
</span>
</span>
                  </div>
                  <div className="relative flex h-25 min-w-0 items-center justify-center p-2.5 border-l border-t border-border">
                    <span className="relative flex items-center justify-center gap-2">                    <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" className="object-contain transition-opacity max-h-6" src="/icon.svg" />
                    <span className="hidden font-favorit text-xs uppercase leading-none text-white/70 md:inline">                    LIVE IMAGE
</span>
</span>
                  </div>
                </div>
              </div>
            </section>
            <GlitterGridSeparator size="afterHero" />
            <section id="platform" className="flex flex-col scroll-mt-17 xl:scroll-mt-[104px]">
              <div className="border border-border flex flex-col">
                <div className="h-80 border-b border-border flex flex-col gap-8 px-5 py-5 relative overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 bg-surface mix-blend-screen" aria-hidden="true">
                    <img alt="" loading="lazy" decoding="async" className="object-cover object-center opacity-100 saturate-[1.58] brightness-[1.28] contrast-[1.16]" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' } as React.CSSProperties} sizes="100vw" src="/backgrounds/lab.png" />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-87.5 bg-linear-to-b from-surface/70 to-transparent" aria-hidden="true">
                  </div>
                  <p className="relative z-10 font-sans text-7 leading-120">
                    <span className="text-white">                    Platform.
</span>
                    <span className="text-white/50">                    Run a resident AI Engineer across your system
</span>
                  </p>
                  <div className="relative z-10 flex items-center gap-1">
                    <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/app">
                      <AsciiGlitchRipple animateOn="parentHover">Launch Directioner-OS</AsciiGlitchRipple>
                    <div className="w-3 h-3 overflow-hidden relative">
                      <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                        <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                          </path>
                        </svg>
                        <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                    <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                    <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                    <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                    <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                    <a className="group inline-flex h-7 w-fit self-start shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border border-white/16 bg-white/10 px-2.5 font-favorit text-xs leading-none font-medium uppercase text-white/85 shadow-none backdrop-blur-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/contact">
                      <AsciiGlitchRipple animateOn="parentHover">Book a Demo</AsciiGlitchRipple>
                    <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                    <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                    <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                    <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                    <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="flex-1 flex flex-col border-b lg:border-r border-border">
                    <div className="px-3 py-2 lg:py-3">
                      <p className="text-2xs text-white/25 uppercase font-favorit">
                        FIG.1
                      </p>
                    </div>
                    <div className="h-62.5 md:h-75 lg:h-100.5 relative overflow-hidden">
                      <div className="flex items-center justify-center h-full px-3 md:px-0">
                        <svg width="456" height="313" viewBox="0 0 456 313" fill="none" aria-hidden="true">
                          <line x1="118" y1="58" x2="118" y2="256" stroke="#2a2a2a">
                          </line>
                          <line className="fig-comet" x1="118" y1="58" x2="118" y2="256" pathLength="100">
                          </line>
                          <g className="fig-group">
                            <rect className="fig-node" x="48" y="22" width="140" height="36" stroke="#2a2a2a" fill="#101010">
                            </rect>
                            <text className="font-favorit fig-node-label" x="60" y="38" fontSize="10" fill="rgba(255,255,255,0.8)">
                              PLAN
                            </text>
                            <text x="60" y="51" className="font-favorit" fontSize="8" fill="rgba(255,255,255,0.32)">
                              intent · capability graph
                            </text>
                            <rect x="186" y="38" width="4" height="4" fill="rgba(255,255,255,0.5)">
                            </rect>
                            <line className="fig-dash-flow" x1="190" y1="40" x2="268" y2="40" stroke="#2a2a2a" strokeDasharray="3 3">
                            </line>
                            <text x="276" y="43" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.45)">
                              TYPED
                            </text>
                            <text x="24" y="43" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.25)">
                              01
                            </text>
                          </g>
                          <g className="fig-group">
                            <rect className="fig-node" x="48" y="88" width="140" height="36" stroke="#2a2a2a" fill="#101010">
                            </rect>
                            <text className="font-favorit fig-node-label" x="60" y="104" fontSize="10" fill="rgba(255,255,255,0.8)">
                              GOVERN
                            </text>
                            <text x="60" y="117" className="font-favorit" fontSize="8" fill="rgba(255,255,255,0.32)">
                              capability scopes · approval gates
                            </text>
                            <rect x="186" y="104" width="4" height="4" fill="rgba(255,255,255,0.5)">
                            </rect>
                            <line className="fig-dash-flow" x1="190" y1="106" x2="268" y2="106" stroke="#2a2a2a" strokeDasharray="3 3">
                            </line>
                            <text x="276" y="109" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.45)">
                              PASS
                            </text>
                            <text x="24" y="109" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.25)">
                              02
                            </text>
                          </g>
                          <g className="fig-group">
                            <rect className="fig-node" x="48" y="154" width="140" height="36" stroke="#2a2a2a" fill="#101010">
                            </rect>
                            <text className="font-favorit fig-node-label" x="60" y="170" fontSize="10" fill="rgba(255,255,255,0.8)">
                              SIMULATE
                            </text>
                            <text x="60" y="183" className="font-favorit" fontSize="8" fill="rgba(255,255,255,0.32)">
                              staged state · rollback
                            </text>
                            <rect x="186" y="170" width="4" height="4" fill="rgba(255,255,255,0.5)">
                            </rect>
                            <line className="fig-dash-flow" x1="190" y1="172" x2="268" y2="172" stroke="#2a2a2a" strokeDasharray="3 3">
                            </line>
                            <text x="276" y="175" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.45)">
                              PASS
                            </text>
                            <text x="24" y="175" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.25)">
                              03
                            </text>
                          </g>
                          <g className="fig-group">
                            <rect className="fig-node" x="48" y="220" width="140" height="36" stroke="#373737" fill="#101010">
                            </rect>
                            <text className="font-favorit fig-node-label" x="60" y="236" fontSize="10" fill="rgba(255,255,255,0.8)">
                              EXECUTE
                            </text>
                            <text x="60" y="249" className="font-favorit" fontSize="8" fill="rgba(255,255,255,0.32)">
                              blast radius · rollback proof
                            </text>
                            <rect x="186" y="236" width="4" height="4" fill="rgba(255,255,255,0.5)">
                            </rect>
                            <line className="fig-dash-flow" x1="190" y1="238" x2="268" y2="238" stroke="#2a2a2a" strokeDasharray="3 3">
                            </line>
                            <text x="276" y="241" className="font-favorit fig-pulse-soft" fontSize="9" fill="#85ed75">
                              HELD
                            </text>
                            <text x="24" y="241" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.25)">
                              04
                            </text>
                          </g>
                          <g className="fig-group">
                            <rect className="fig-node" x="330" y="88" width="102" height="138" stroke="#2a2a2a" fill="#0e0e0e">
                            </rect>
                            <text className="font-favorit fig-node-label" x="342" y="110" fontSize="9" fill="rgba(255,255,255,0.7)">
                              CAPABILITY
                            </text>
                            <text x="342" y="132" className="font-favorit" fontSize="8.5" fill="rgba(255,255,255,0.38)">
                              driver → staged
                            </text>
                            <text x="342" y="154" className="font-favorit" fontSize="8.5" fill="rgba(255,255,255,0.38)">
                              score 18 / 100
                            </text>
                            <text x="342" y="176" className="font-favorit" fontSize="8.5" fill="rgba(255,255,255,0.38)">
                              rollback ready
                            </text>
                            <text x="342" y="198" className="font-favorit" fontSize="8.5" fill="rgba(255,255,255,0.38)">
                              Work Log active
                            </text>
                          </g>
                          <line x1="268" y1="172" x2="330" y2="172" stroke="#2a2a2a">
                          </line>
                          <rect className="fig-pulse-strong" x="326" y="170" width="4" height="4" fill="#85ed75">
                          </rect>
                        </svg>
                      </div>
                    </div>
                    <div className="p-4 md:p-5 flex-1 flex flex-col gap-5 lg:gap-8">
                      <div className="flex flex-col gap-5 font-sans leading-normal lg:flex-row lg:items-start lg:gap-8">
                        <div className="flex flex-col gap-1 text-xl leading-normal min-w-0 lg:flex-1 lg:text-h3-title">
                          <div className="flex gap-2 items-start text-white">
                            <span className="opacity-50 whitespace-nowrap">                            01
</span>
                            <span>                            Workflows
</span>
                          </div>
                          <p className="text-white/50">
                            Turn any goal into a governed workflow. Plan, gate, and run with the Direct CLI.
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 text-sm min-w-0 lg:flex-1">
                          <div className="flex gap-2.5">
                            <span className="text-white/20 whitespace-nowrap w-5 z-10">                            1.1
</span>
                            <span className="text-white/50 flex-1">                            Built on typed intents and capability plans
</span>
                          </div>
                          <div className="flex gap-2.5">
                            <span className="text-white/20 whitespace-nowrap w-5 z-10">                            1.2
</span>
                            <span className="text-white/50 flex-1">                            One loop: plan, simulate, approve, execute
</span>
                          </div>
                          <div className="flex gap-2.5">
                            <span className="text-white/20 whitespace-nowrap w-5 z-10">                            1.3
</span>
                            <span className="text-white/50 flex-1">                            Reusable playbooks on the Workflow Hub
</span>
                          </div>
                        </div>
                      </div>
                      <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white mt-1 lg:mt-auto" href="/app">
                        <AsciiGlitchRipple animateOn="parentHover">Create Workflows</AsciiGlitchRipple>
                      <div className="w-3 h-3 overflow-hidden relative">
                        <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                            </path>
                          </svg>
                          <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                      <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                      <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                      <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                      <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col border-b border-border">
                    <div className="px-3 py-2 lg:py-3">
                      <p className="text-2xs text-white/25 uppercase font-favorit">
                        FIG.2
                      </p>
                    </div>
                    <div className="h-62.5 md:h-75 lg:h-100.5 relative overflow-hidden">
                      <div className="flex items-center justify-center h-full px-3 md:px-0">
                        <div className="w-full max-w-121 border border-border bg-[#101010] font-favorit">
                          <div className="flex items-center justify-between border-b border-border px-4 py-3">
                            <span className="text-2xs uppercase text-white/70">                            Policy set / system
</span>
                            <span className="text-2xs uppercase text-white/30">                            v12
</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/3 border-b border-border">
                            <span className="w-6 shrink-0 text-2xs text-white/25 tabular-nums">                            01
</span>
                            <span className="w-26 shrink-0 text-xs text-white/80">                            capability_scope
</span>
                            <span className="flex-1 truncate text-xs text-white/40">                            Tier 0 · score 0–15
</span>
                            <span className="text-2xs uppercase text-white/50">                            ENFORCED
</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/3 border-b border-border">
                            <span className="w-6 shrink-0 text-2xs text-white/25 tabular-nums">                            02
</span>
                            <span className="w-26 shrink-0 text-xs text-white/80">                            autonomy_tier
</span>
                            <span className="flex-1 truncate text-xs text-white/40">                            Tier 2 · score 36–60
</span>
                            <span className="text-2xs uppercase text-white/50">                            ENFORCED
</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/3 border-b border-border">
                            <span className="w-6 shrink-0 text-2xs text-white/25 tabular-nums">                            03
</span>
                            <span className="w-26 shrink-0 text-xs text-white/80">                            approval_gate
</span>
                            <span className="flex-1 truncate text-xs text-white/40">                            reviewer required
</span>
                            <span className="text-2xs uppercase text-white/50">                            ACTIVE
</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/3 border-b border-border">
                            <span className="w-6 shrink-0 text-2xs text-white/25 tabular-nums">                            04
</span>
                            <span className="w-26 shrink-0 text-xs text-white/80">                            work_log
</span>
                            <span className="flex-1 truncate text-xs text-white/40">                            append-only evidence
</span>
                            <span className="text-2xs uppercase text-white/50">                            ACTIVE
</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/3 border-b border-border">
                            <span className="w-6 shrink-0 text-2xs text-white/25 tabular-nums">                            05
</span>
                            <span className="w-26 shrink-0 text-xs text-white/80">                            approvals
</span>
                            <span className="flex-1 truncate text-xs text-white/40">                            Tier 3 · score 61–100
</span>
                            <span className="text-2xs uppercase text-available fig-pulse-soft">                            REQUIRED
</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/3 ">
                            <span className="w-6 shrink-0 text-2xs text-white/25 tabular-nums">                            06
</span>
                            <span className="w-26 shrink-0 text-xs text-white/80">                            preflight
</span>
                            <span className="flex-1 truncate text-xs text-white/40">                            simulation pass
</span>
                            <span className="text-2xs uppercase text-available fig-pulse-soft">                            GATED
</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:p-5 flex-1 flex flex-col gap-5 lg:gap-8">
                      <div className="flex flex-col gap-5 font-sans leading-normal lg:flex-row lg:items-start lg:gap-8">
                        <div className="flex flex-col gap-1 text-xl leading-normal min-w-0 lg:flex-1 lg:text-h3-title">
                          <div className="flex gap-2 items-start text-white">
                            <span className="opacity-50 whitespace-nowrap">                            02
</span>
                            <span>                            Policies
</span>
                          </div>
                          <p className="text-white/50">
                            Boundaries for every capability: scopes, invariants, and approval gates.
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 text-sm min-w-0 lg:flex-1">
                          <div className="flex gap-2.5">
                            <span className="text-white/20 whitespace-nowrap w-5 z-10">                            2.1
</span>
                            <span className="text-white/50 flex-1">                            Spending limits per asset and per day
</span>
                          </div>
                          <div className="flex gap-2.5">
                            <span className="text-white/20 whitespace-nowrap w-5 z-10">                            2.2
</span>
                            <span className="text-white/50 flex-1">                            Capability scopes and approval gates
</span>
                          </div>
                          <div className="flex gap-2.5">
                            <span className="text-white/20 whitespace-nowrap w-5 z-10">                            2.3
</span>
                            <span className="text-white/50 flex-1">                            Approvals enforced at the capability boundary
</span>
                          </div>
                        </div>
                      </div>
                      <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white mt-1 lg:mt-auto" href="/app">
                        <AsciiGlitchRipple animateOn="parentHover">Set your policies</AsciiGlitchRipple>
                      <div className="w-3 h-3 overflow-hidden relative">
                        <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                            </path>
                          </svg>
                          <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                      <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                      <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                      <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                      <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col border-b lg:border-b-0 lg:border-r border-border">
                    <div className="px-3 py-2 lg:py-3">
                      <p className="text-2xs text-white/25 uppercase font-favorit">
                        FIG.3
                      </p>
                    </div>
                    <div className="h-62.5 md:h-75 lg:h-100.5 relative overflow-hidden flex items-center justify-center">
                      <SimFigure />
                    </div>
                    <div className="p-4 md:p-5 flex-1 flex flex-col gap-5 lg:gap-8">
                      <div className="flex flex-col gap-5 font-sans leading-normal lg:flex-row lg:items-start lg:gap-8">
                        <div className="flex flex-col gap-1 text-xl leading-normal min-w-0 lg:flex-1 lg:text-h3-title">
                          <div className="flex gap-2 items-start text-white">
                            <span className="opacity-50 whitespace-nowrap">                            03
</span>
                            <span>                            Simulation
</span>
                          </div>
                          <p className="text-white/50">
                            Preview scope, blast radius, rollback, and outcomes before anything changes.
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 text-sm min-w-0 lg:flex-1">
                          <div className="flex gap-2.5">
                            <span className="text-white/20 whitespace-nowrap w-5 z-10">                            3.1
</span>
                            <span className="text-white/50 flex-1">                            Deterministic preflight on staged system state
</span>
                          </div>
                          <div className="flex gap-2.5">
                            <span className="text-white/20 whitespace-nowrap w-5 z-10">                            3.2
</span>
                            <span className="text-white/50 flex-1">                            Blast radius, dependencies, and rollback paths surfaced
</span>
                          </div>
                          <div className="flex gap-2.5">
                            <span className="text-white/20 whitespace-nowrap w-5 z-10">                            3.3
</span>
                            <span className="text-white/50 flex-1">                            Every Work Log entry begins at the simulation
</span>
                          </div>
                        </div>
                      </div>
                      <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white mt-1 lg:mt-auto" href="/app">
                        <AsciiGlitchRipple animateOn="parentHover">Run a simulation</AsciiGlitchRipple>
                      <div className="w-3 h-3 overflow-hidden relative">
                        <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                            </path>
                          </svg>
                          <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                      <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                      <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                      <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                      <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col ">
                    <div className="px-3 py-2 lg:py-3">
                      <p className="text-2xs text-white/25 uppercase font-favorit">
                        FIG.4
                      </p>
                    </div>
                    <div className="h-62.5 md:h-75 lg:h-100.5 relative overflow-hidden flex items-center justify-center">
                      <FanOutFigure />
                    </div>
                    <div className="p-4 md:p-5 flex-1 flex flex-col gap-5 lg:gap-8">
                      <div className="flex flex-col gap-5 font-sans leading-normal lg:flex-row lg:items-start lg:gap-8">
                        <div className="flex flex-col gap-1 text-xl leading-normal min-w-0 lg:flex-1 lg:text-h3-title">
                          <div className="flex gap-2 items-start text-white">
                            <span className="opacity-50 whitespace-nowrap">                            04
</span>
                            <span>                            Execution
</span>
                          </div>
                          <p className="text-white/50">
                            Verify once, execute through typed capabilities, and reconcile every result into durable Work Log entries.
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 text-sm min-w-0 lg:flex-1">
                          <div className="flex gap-2.5">
                            <span className="text-white/20 whitespace-nowrap w-5 z-10">                            4.1
</span>
                            <span className="text-white/50 flex-1">                            One approval promotes the simulated plan
</span>
                          </div>
                          <div className="flex gap-2.5">
                            <span className="text-white/20 whitespace-nowrap w-5 z-10">                            4.2
</span>
                            <span className="text-white/50 flex-1">                            Capability execution with bounded retries
</span>
                          </div>
                          <div className="flex gap-2.5">
                            <span className="text-white/20 whitespace-nowrap w-5 z-10">                            4.3
</span>
                            <span className="text-white/50 flex-1">                            Durable Work Log entries. No arbitrary shell execution.
</span>
                          </div>
                        </div>
                      </div>
                      <a className="group inline-flex h-7 w-fit self-start shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border px-2.5 font-favorit text-xs leading-none font-medium uppercase shadow-none backdrop-blur-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 !px-2 border-white bg-white text-black relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white mt-1 lg:mt-auto" href="/docs">
                        <AsciiGlitchRipple animateOn="parentHover">Docs</AsciiGlitchRipple>
                      <div className="w-3 h-3 overflow-hidden relative">
                        <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                          <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                            </path>
                          </svg>
                          <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                      <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                      <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                      <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                      <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)] mt-6 md:mt-8 lg:mt-10 border border-border">
                <a className="group min-h-75 border-b border-border relative flex flex-col p-5 overflow-hidden gap-8 bg-surface xl:border-r xl:border-b-0 xl:gap-0 xl:justify-between" href="/research">                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-surface">
                </div>
                <p className="relative z-10 max-w-140 font-sans text-[22px] leading-[1.08] text-white">
                  “Every operation ships with its evidence — the intent, the policy decision, the simulation, the approval, and the settled result in one reviewable record.”
                </p>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-5 [&amp;_img]:invert [&amp;_img]:opacity-90">
                    <img alt="" aria-hidden="true" loading="lazy" width="40" height="40" decoding="async" style={{ color: 'transparent' } as React.CSSProperties} src="/assets/logo-new.svg" />
                    <div className="flex flex-col font-sans">
                      <p className="text-18 text-white leading-normal">
                        Direct Work Log
                      </p>
                      <p className="text-base text-white/50 leading-normal">
                        Execution evidence
                      </p>
                    </div>
                  </div>
                </div>
</a>
                <a className="group flex flex-col p-5 overflow-hidden gap-8 bg-[#101010] xl:min-h-75 xl:gap-0 xl:justify-between" href="/research">                <p className="text-24 leading-120 text-white font-sans">
                  “Policies are the foundation of autonomy you can trust. Directioner-OS turns your boundaries into gates the runtime cannot skip.”
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <img alt="" aria-hidden="true" loading="lazy" width="28" height="28" decoding="async" className="[filter:invert(1)] opacity-90" style={{ color: 'transparent' } as React.CSSProperties} src="/assets/logo-new.svg" />
                    <div className="flex flex-col font-sans">
                      <p className="text-18 text-white leading-normal">
                        Directioner-OS Policies
                      </p>
                      <p className="text-base text-white/50 leading-normal">
                        Boundary engine
                      </p>
                    </div>
                  </div>
                  <span className="pointer-events-none flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5 text-white" aria-hidden="true">
                    <path d="M5 12h14">
                    </path>
                    <path d="m12 5 7 7-7 7">
                    </path>
                  </svg>
</span>
                </div>
</a>
              </div>
              <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col">
                <div className="group/spotlight relative border flex flex-col lg:flex-row lg:h-110.75 overflow-hidden rounded-none bg-surface p-0 border-border dark:border-border">
                  <div className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100" style={{ backgroundColor: '#262626', maskImage: 'radial-gradient( 350px circle at 0px 0px, white, transparent 80% )', WebkitMaskImage: 'radial-gradient( 350px circle at 0px 0px, white, transparent 80% )' } as React.CSSProperties}>
                  </div>
                  <div className="relative z-20 lg:w-131 shrink-0 flex flex-col justify-center gap-8 p-5">
                    <div className="flex flex-col gap-1 font-sans text-xl">
                      <p className="text-white leading-122">
                        Workflow Hub
                      </p>
                      <p className="text-white/50 max-w-115 leading-normal">
                        Access and contribute to community playbooks for desktop automation and system operations — versioned, reviewed, and policy-aware.
                      </p>
                    </div>
                    <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white self-start" href="/app">
                      <AsciiGlitchRipple animateOn="parentHover">Explore Workflows</AsciiGlitchRipple>
                    <div className="w-3 h-3 overflow-hidden relative">
                      <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                        <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                          </path>
                        </svg>
                        <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                    <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                    <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                    <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                    <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                  </div>
                  <div className="relative z-20 flex-1 mt-11.5 border-t border-l bg-surface border-border overflow-hidden pl-5 pt-5 flex flex-col gap-5 font-sans">
                    <div className="flex items-center">
                      <div className="flex items-center border-b border-border w-full">
                        <div className="flex items-center gap-1 px-2.5 py-2.5 border-b border-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-compass w-3.5 h-3.5 text-white" aria-hidden="true">
                            <circle cx="12" cy="12" r="10">
                            </circle>
                            <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z">
                            </path>
                          </svg>
                          <span className="text-2xs text-white">                          Explore
</span>
                        </div>
                        <div className="flex items-center gap-1 px-2.5 py-2.5 opacity-50">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 text-white" aria-hidden="true">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                            </path>
                          </svg>
                          <span className="text-2xs text-white">                          My Stars
</span>
                        </div>
                        <div className="flex items-center gap-1 px-2.5 py-2.5 opacity-50">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-3.5 h-3.5 text-white" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2">
                            </rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4">
                            </path>
                          </svg>
                          <span className="text-2xs text-white">                          My Workflows
</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 overflow-hidden">
                      <div className="flex flex-col gap-2 ">
                        <div className="flex items-center gap-3 px-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm text-white">                            Featured
</span>
                            <span className="bg-white/10 text-2xs text-white/50 leading-none px-1 py-0.5">                            9
</span>
                          </div>
                          <span className="text-2xs text-white/50">                          Show All
</span>
                        </div>
                        <div className="flex gap-2.5 overflow-hidden">
                          <div className="w-79.75 shrink-0 bg-surface-card px-4 py-3 flex flex-col gap-5 overflow-hidden transition-colors hover:bg-surface-hover">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <img alt="" aria-hidden="true" loading="lazy" width="10" height="10" decoding="async" className="size-2.5 rounded-full object-cover [filter:invert(1)]" style={{ color: 'transparent' } as React.CSSProperties} src="/assets/logo-new.svg" />
                                <span className="text-2xs text-white/50">                                directioner
</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-2xs text-white">                                7
</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 text-white/60" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-xs text-white leading-none">
                                model-health-watch
                              </p>
                              <p className="text-xs text-white/50 leading-130 line-clamp-3">
                                Stage updates with capability-scoped limits
                              </p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-auto">
                              <div className="flex items-center gap-0.5 flex-wrap">
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                desktop
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                staged
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                +1
</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                    <circle cx="6" cy="6" r="5.4" stroke="#85ed75" strokeWidth="1">
                                    </circle>
                                    <path d="M3.8 6.2L5.3 7.6L8.2 4.6" stroke="#85ed75" strokeWidth="1">
                                    </path>
                                  </svg>
                                  <span className="text-2xs text-white/50">                                  Updated 3 days ago
</span>
                                </div>
                                <span className="text-2xs text-white/50">                                v0.4.2
</span>
                              </div>
                            </div>
                          </div>
                          <div className="w-79.75 shrink-0 bg-surface-card px-4 py-3 flex flex-col gap-5 overflow-hidden transition-colors hover:bg-surface-hover">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <img alt="" aria-hidden="true" loading="lazy" width="10" height="10" decoding="async" className="size-2.5 rounded-full object-cover [filter:invert(1)]" style={{ color: 'transparent' } as React.CSSProperties} src="/assets/logo-new.svg" />
                                <span className="text-2xs text-white/50">                                directioner
</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-2xs text-white">                                6
</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 text-white/60" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-xs text-white leading-none">
                                recovery-rotator
                              </p>
                              <p className="text-xs text-white/50 leading-130 line-clamp-3">
                                Rotate system services across verified boot slots with Work Log entries
                              </p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-auto">
                              <div className="flex items-center gap-0.5 flex-wrap">
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                safety
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                rollback
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                +1
</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                    <circle cx="6" cy="6" r="5.4" stroke="#85ed75" strokeWidth="1">
                                    </circle>
                                    <path d="M3.8 6.2L5.3 7.6L8.2 4.6" stroke="#85ed75" strokeWidth="1">
                                    </path>
                                  </svg>
                                  <span className="text-2xs text-white/50">                                  Updated 8 days ago
</span>
                                </div>
                                <span className="text-2xs text-white/50">                                v0.2.5
</span>
                              </div>
                            </div>
                          </div>
                          <div className="w-79.75 shrink-0 bg-surface-card px-4 py-3 flex flex-col gap-5 overflow-hidden transition-colors hover:bg-surface-hover">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <span className="w-2.5 h-2.5 rounded-full bg-white/50" aria-hidden="true"></span>
                                <span className="text-2xs text-white/50">                                atlasops
</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-2xs text-white">                                3
</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 text-white/60" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-xs text-white leading-none">
                                health-sentinel
                              </p>
                              <p className="text-xs text-white/50 leading-130 line-clamp-3">
                                Watch resource health and blast radius bounds, act only inside policy
                              </p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-auto">
                              <div className="flex items-center gap-0.5 flex-wrap">
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                monitor
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                alerts
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                +2
</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                    <circle cx="6" cy="6" r="5.4" stroke="#85ed75" strokeWidth="1">
                                    </circle>
                                    <path d="M3.8 6.2L5.3 7.6L8.2 4.6" stroke="#85ed75" strokeWidth="1">
                                    </path>
                                  </svg>
                                  <span className="text-2xs text-white/50">                                  Updated 2 weeks ago
</span>
                                </div>
                                <span className="text-2xs text-white/50">                                v0.1.3
</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 opacity-40">
                        <div className="flex items-center gap-3 px-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm text-white">                            System operations
</span>
                            <span className="bg-white/10 text-2xs text-white/50 leading-none px-1 py-0.5">                            3
</span>
                          </div>
                        </div>
                        <div className="flex gap-2.5 overflow-hidden">
                          <div className="w-79.75 shrink-0 bg-surface-card px-4 py-3 flex flex-col gap-5 overflow-hidden transition-colors hover:bg-surface-hover">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <img alt="" aria-hidden="true" loading="lazy" width="10" height="10" decoding="async" className="size-2.5 rounded-full object-cover [filter:invert(1)]" style={{ color: 'transparent' } as React.CSSProperties} src="/assets/logo-new.svg" />
                                <span className="text-2xs text-white/50">                                directioner
</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-2xs text-white">                                8
</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 text-white/60" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-xs text-white leading-none">
                                capability-links
                              </p>
                              <p className="text-xs text-white/50 leading-130 line-clamp-3">
                                Issue auditable capability proposals with expiry and limits
                              </p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-auto">
                              <div className="flex items-center gap-0.5 flex-wrap">
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                safety
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                links
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                +1
</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                    <circle cx="6" cy="6" r="5.4" stroke="#85ed75" strokeWidth="1">
                                    </circle>
                                    <path d="M3.8 6.2L5.3 7.6L8.2 4.6" stroke="#85ed75" strokeWidth="1">
                                    </path>
                                  </svg>
                                  <span className="text-2xs text-white/50">                                  Updated 5 days ago
</span>
                                </div>
                                <span className="text-2xs text-white/50">                                v0.3.1
</span>
                              </div>
                            </div>
                          </div>
                          <div className="w-79.75 shrink-0 bg-surface-card px-4 py-3 flex flex-col gap-5 overflow-hidden transition-colors hover:bg-surface-hover">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <img alt="" aria-hidden="true" loading="lazy" width="10" height="10" decoding="async" className="size-2.5 rounded-full object-cover [filter:invert(1)]" style={{ color: 'transparent' } as React.CSSProperties} src="/assets/logo-new.svg" />
                                <span className="text-2xs text-white/50">                                directioner
</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-2xs text-white">                                6
</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 text-white/60" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-xs text-white leading-none">
                                system-maintenance
                              </p>
                              <p className="text-xs text-white/50 leading-130 line-clamp-3">
                                Apply a reviewed system change with rollback checks
                              </p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-auto">
                              <div className="flex items-center gap-0.5 flex-wrap">
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                operations
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                batch
</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                    <circle cx="6" cy="6" r="5.4" stroke="#85ed75" strokeWidth="1">
                                    </circle>
                                    <path d="M3.8 6.2L5.3 7.6L8.2 4.6" stroke="#85ed75" strokeWidth="1">
                                    </path>
                                  </svg>
                                  <span className="text-2xs text-white/50">                                  Updated 11 days ago
</span>
                                </div>
                                <span className="text-2xs text-white/50">                                v0.2.0
</span>
                              </div>
                            </div>
                          </div>
                          <div className="w-79.75 shrink-0 bg-surface-card px-4 py-3 flex flex-col gap-5 overflow-hidden transition-colors hover:bg-surface-hover">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <img alt="" aria-hidden="true" loading="lazy" width="10" height="10" decoding="async" className="size-2.5 rounded-full object-cover [filter:invert(1)]" style={{ color: 'transparent' } as React.CSSProperties} src="/assets/logo-new.svg" />
                                <span className="text-2xs text-white/50">                                directioner
</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-2xs text-white">                                4
</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 text-white/60" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-xs text-white leading-none">
                                rollback-guard
                              </p>
                              <p className="text-xs text-white/50 leading-130 line-clamp-3">
                                Updates tested and scored before activation
                              </p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-auto">
                              <div className="flex items-center gap-0.5 flex-wrap">
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                watchdog
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                routing
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                +1
</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                    <circle cx="6" cy="6" r="5.4" stroke="#85ed75" strokeWidth="1">
                                    </circle>
                                    <path d="M3.8 6.2L5.3 7.6L8.2 4.6" stroke="#85ed75" strokeWidth="1">
                                    </path>
                                  </svg>
                                  <span className="text-2xs text-white/50">                                  Updated 2 weeks ago
</span>
                                </div>
                                <span className="text-2xs text-white/50">                                v0.1.9
</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 opacity-40">
                        <div className="flex items-center gap-3 px-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm text-white">                            desktop automation
</span>
                            <span className="bg-white/10 text-2xs text-white/50 leading-none px-1 py-0.5">                            13
</span>
                          </div>
                          <span className="text-2xs text-white/50">                          Show All
</span>
                        </div>
                        <div className="flex gap-2.5 overflow-hidden">
                          <div className="w-79.75 shrink-0 bg-surface-card px-4 py-3 flex flex-col gap-5 overflow-hidden transition-colors hover:bg-surface-hover">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <span className="w-2.5 h-2.5 rounded-full bg-white/50" aria-hidden="true"></span>
                                <span className="text-2xs text-white/50">                                direct-labs
</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-2xs text-white">                                18
</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 text-white/60" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-xs text-white leading-none">
                                model-rebalance
                              </p>
                              <p className="text-xs text-white/50 leading-130 line-clamp-3">
                                Rebalance model workloads when system risk drifts outside policy
                              </p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-auto">
                              <div className="flex items-center gap-0.5 flex-wrap">
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                models
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                runtime
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                +2
</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                    <circle cx="6" cy="6" r="5.4" stroke="#85ed75" strokeWidth="1">
                                    </circle>
                                    <path d="M3.8 6.2L5.3 7.6L8.2 4.6" stroke="#85ed75" strokeWidth="1">
                                    </path>
                                  </svg>
                                  <span className="text-2xs text-white/50">                                  Updated 1 month ago
</span>
                                </div>
                                <span className="text-2xs text-white/50">                                v0.1.0
</span>
                              </div>
                            </div>
                          </div>
                          <div className="w-79.75 shrink-0 bg-surface-card px-4 py-3 flex flex-col gap-5 overflow-hidden transition-colors hover:bg-surface-hover">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <span className="w-2.5 h-2.5 rounded-full bg-white/50" aria-hidden="true"></span>
                                <span className="text-2xs text-white/50">                                direct-labs
</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-2xs text-white">                                12
</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 text-white/60" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-xs text-white leading-none">
                                rollback-unwind
                              </p>
                              <p className="text-xs text-white/50 leading-130 line-clamp-3">
                                Unwind a staged change when its health score dips
                              </p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-auto">
                              <div className="flex items-center gap-0.5 flex-wrap">
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                rollback
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                risk
</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                    <circle cx="6" cy="6" r="5.4" stroke="#85ed75" strokeWidth="1">
                                    </circle>
                                    <path d="M3.8 6.2L5.3 7.6L8.2 4.6" stroke="#85ed75" strokeWidth="1">
                                    </path>
                                  </svg>
                                  <span className="text-2xs text-white/50">                                  Updated 1 month ago
</span>
                                </div>
                                <span className="text-2xs text-white/50">                                v0.1.4
</span>
                              </div>
                            </div>
                          </div>
                          <div className="w-79.75 shrink-0 bg-surface-card px-4 py-3 flex flex-col gap-5 overflow-hidden transition-colors hover:bg-surface-hover">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <img alt="" aria-hidden="true" loading="lazy" width="10" height="10" decoding="async" className="size-2.5 rounded-full object-cover [filter:invert(1)]" style={{ color: 'transparent' } as React.CSSProperties} src="/assets/logo-new.svg" />
                                <span className="text-2xs text-white/50">                                directioner
</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-2xs text-white">                                9
</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 text-white/60" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-xs text-white leading-none">
                                stable-park
                              </p>
                              <p className="text-xs text-white/50 leading-130 line-clamp-3">
                                Stage updates in an isolated slot with a verified rollback path
                              </p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-auto">
                              <div className="flex items-center gap-0.5 flex-wrap">
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                capability
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                system
</span>
                                <span className="px-1 py-0.5 bg-white/6 text-2xs text-white/50 leading-none">                                +1
</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                    <circle cx="6" cy="6" r="5.4" stroke="#85ed75" strokeWidth="1">
                                    </circle>
                                    <path d="M3.8 6.2L5.3 7.6L8.2 4.6" stroke="#85ed75" strokeWidth="1">
                                    </path>
                                  </svg>
                                  <span className="text-2xs text-white/50">                                  Updated 3 weeks ago
</span>
                                </div>
                                <span className="text-2xs text-white/50">                                v0.2.2
</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row border border-t-0 border-border lg:min-h-99.5">
                  <div className="group flex-1 border-b lg:border-b-0 lg:border-r border-border flex flex-col gap-5 p-5">
                    <a className="flex items-center gap-3" href="/research">                    <div className="flex items-center gap-3 text-white/50 group-hover:text-white transition-colors font-sans text-sm leading-normal">
                      Capability Policy
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3" aria-hidden="true">
                        <path d="M5 12h14">
                        </path>
                        <path d="m12 5 7 7-7 7">
                        </path>
                      </svg>
                    </div>
</a>
                    <div className="relative flex-1 min-w-0 max-w-full bg-white/2 p-3 overflow-hidden flex items-center justify-center transition-colors duration-300 group-hover:bg-white/4">
                      <div className="absolute top-2 right-2 z-20">
                        <CopyButton text={POLICY_KIT_CODE} label="Copy Capability Policy code" />
                      </div>
                      <div className="flex gap-3 items-start font-mono text-xs leading-normal">
                        <div className="flex flex-col text-white/12 select-none">
                          <span>                          1
</span>
                          <span>                          2
</span>
                          <span>                          3
</span>
                          <span>                          4
</span>
                          <span>                          5
</span>
                          <span>                          6
</span>
                          <span>                          7
</span>
                          <span>                          8
</span>
                          <span>                          9
</span>
                        </div>
                        <pre className="text-white/44 whitespace-pre-wrap w-84">
                          <span className="text-code-green">                          import
</span>
                          <span>                          {"{ policy }"}
</span>
                          <span className="text-code-green">                          from
</span>
                          <span>                          &#34;@directioner/os&#34;
</span>
                          <span>                          export const maintenance =
</span>
                          <span className="text-white">                          {"policy({"}
</span>
                          <span>                          capability: &#34;display.driver&#34;,
  autonomy: &#34;tier-2&#34;,
  blastRadius: &#34;36-60&#34;,
  rollback: &#34;required&#34;,
</span>
                          <span className="text-white">                          {"})"}
</span>
                        </pre>
                      </div>
                    </div>
                    <p className="text-base text-white/50 font-sans leading-normal">
                      A typed library for defining capability boundaries the runtime can enforce.
                    </p>
                  </div>
                  <div className="group flex-1 border-b lg:border-b-0 lg:border-r border-border flex flex-col gap-5 p-5">
                    <a className="flex items-center gap-3" href="/blog">                    <div className="flex items-center gap-3 text-white/50 group-hover:text-white transition-colors font-sans text-sm leading-normal">
                      Direct CLI
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3" aria-hidden="true">
                        <path d="M5 12h14">
                        </path>
                        <path d="m12 5 7 7-7 7">
                        </path>
                      </svg>
                    </div>
</a>
                    <div className="relative flex-1 bg-white/2 p-3 overflow-hidden flex items-center justify-center transition-colors duration-300 group-hover:bg-white/4">
                      <div className="absolute top-2 right-2 z-20">
                        <CopyButton text={NEX_CLI_CODE} label="Copy Direct CLI command" />
                      </div>
                      <pre className="min-w-0 w-full max-w-full overflow-x-auto text-left font-mono text-xs leading-normal whitespace-pre-wrap break-words">
                        <span className="text-code-green">                        directioner run \
</span>
                        <span className="text-white/50">                        playbooks/system.toml \
  --simulate \
  --require-approval \
  --work-log out/
</span>
                        <span className="fig-cli-cursor" aria-hidden="true"></span>
                      </pre>
                    </div>
                    <p className="text-base text-white/50 font-sans leading-normal">
                      One loop from plan to Work Log entry, in your terminal.
                    </p>
                  </div>
                  <a className="group flex-1 flex flex-col gap-5 p-5" href="/app">                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3 text-white/50 group-hover:text-white transition-colors font-sans text-sm leading-normal">
                      Simulations
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3" aria-hidden="true">
                        <path d="M5 12h14">
                        </path>
                        <path d="m12 5 7 7-7 7">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/2 p-3 overflow-hidden flex items-center justify-center">
                    <div className="flex items-center gap-1">
                      <div className="relative w-31 h-31 shrink-0 overflow-hidden p-3 flex flex-col gap-3 opacity-33 transition-opacity duration-300 hover:opacity-60">
                        <div className="absolute top-1 right-2">
                          <div className="size-1 bg-white/44">
                          </div>
                        </div>
                        <div className="size-5 bg-surface-raised flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes w-3 h-3 text-white/50" aria-hidden="true">
                            <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z">
                            </path>
                            <path d="m7 16.5-4.74-2.85">
                            </path>
                            <path d="m7 16.5 5-3">
                            </path>
                            <path d="M7 16.5v5.17">
                            </path>
                            <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z">
                            </path>
                            <path d="m17 16.5-5-3">
                            </path>
                            <path d="m17 16.5 4.74-2.85">
                            </path>
                            <path d="M17 16.5v5.17">
                            </path>
                            <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z">
                            </path>
                            <path d="M12 8 7.26 5.15">
                            </path>
                            <path d="m12 8 4.74-2.85">
                            </path>
                            <path d="M12 13.5V8">
                            </path>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-px font-favorit uppercase">
                          <p className="text-xs text-white/50 tracking-wider leading-tight">
                            sim-base-1
                          </p>
                          <p className="text-2xs text-white/22 leading-normal">
                            staged:system-a
                          </p>
                        </div>
                      </div>
                      <div className="relative w-31 h-31 shrink-0 overflow-hidden p-3 flex flex-col gap-3 border border-border z-10">
                        <div className="absolute top-1 right-2">
                          <div className="size-1 bg-available fig-pulse-strong">
                          </div>
                        </div>
                        <div className="size-5 bg-surface-raised flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal w-3 h-3 text-white/50" aria-hidden="true">
                            <path d="M12 19h8">
                            </path>
                            <path d="m4 17 6-6-6-6">
                            </path>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-px font-favorit uppercase">
                          <p className="text-xs text-white/50 tracking-wider leading-tight">
                            model-planner-1
                          </p>
                          <p className="text-2xs text-white/22 leading-normal">
                            staged:system-b
                          </p>
                        </div>
                        <div className="bg-white/2 w-full mt-auto">
                          <div className="bg-white/44 h-0.5 w-2/5 fig-progress">
                          </div>
                        </div>
                      </div>
                      <div className="relative w-31 h-31 shrink-0 overflow-hidden p-3 flex flex-col gap-3 opacity-33 transition-opacity duration-300 hover:opacity-60">
                        <div className="absolute top-1 right-2">
                          <div className="size-1 bg-white/44">
                          </div>
                        </div>
                        <div className="size-5 bg-surface-raised flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes w-3 h-3 text-white/50" aria-hidden="true">
                            <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z">
                            </path>
                            <path d="m7 16.5-4.74-2.85">
                            </path>
                            <path d="m7 16.5 5-3">
                            </path>
                            <path d="M7 16.5v5.17">
                            </path>
                            <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z">
                            </path>
                            <path d="m17 16.5-5-3">
                            </path>
                            <path d="m17 16.5 4.74-2.85">
                            </path>
                            <path d="M17 16.5v5.17">
                            </path>
                            <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z">
                            </path>
                            <path d="M12 8 7.26 5.15">
                            </path>
                            <path d="m12 8 4.74-2.85">
                            </path>
                            <path d="M12 13.5V8">
                            </path>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-px font-favorit uppercase">
                          <p className="text-xs text-white/50 tracking-wider leading-tight">
                            model-reviewer-1
                          </p>
                          <p className="text-2xs text-white/22 leading-normal">
                            staged:workspace
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-base text-white/50 font-sans leading-normal">
                    Deterministic preflight for every operation, at scale.
                  </p>
</a>
                </div>
              </div>
            </section>
            <GlitterGridSeparator size="chapter" />
            <section id="capabilities" className="border border-border flex flex-col bg-[linear-gradient(180deg,#111_0%,#0e0e0e_100%)] scroll-mt-17 xl:scroll-mt-[104px]">
              <div className="h-90 border-b border-border flex flex-col items-start p-5 gap-8 relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 mix-blend-lighten" aria-hidden="true">
                  <img alt="" loading="lazy" decoding="async" className="object-cover object-center opacity-100 saturate-[1.58] brightness-[1.28] contrast-[1.16]" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' } as React.CSSProperties} sizes="100vw" src="/backgrounds/compute-bg.png" />
                </div>
                <p className="relative z-10 font-sans text-white text-7 leading-120 max-w-170">
                  <span className="text-white">                  Model Workbench.
</span>
                  <span className="text-white/50">                  Maintain every system surface
                  <br />
                  through the same typed capability interface your AI Engineer plans on.
</span>
                </p>
                <div className="relative z-10 flex items-center gap-1">
                  <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/docs">
                    <AsciiGlitchRipple animateOn="parentHover">Docs</AsciiGlitchRipple>
                  <div className="w-3 h-3 overflow-hidden relative">
                    <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                      <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                        </path>
                      </svg>
                      <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                  <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                  <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                  <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                  <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                  <a className="group inline-flex h-7 w-fit self-start shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border border-white/16 bg-white/10 px-2.5 font-favorit text-xs leading-none font-medium uppercase text-white/85 shadow-none backdrop-blur-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/research">
                    <AsciiGlitchRipple animateOn="parentHover">Learn More</AsciiGlitchRipple>
                  <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                  <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                  <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                  <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                  <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                </div>
              </div>
              <div className="grid min-h-[420px] border-b border-border bg-[#101010] lg:grid-cols-[0.92fr_1.08fr]">
                <div className="flex flex-col justify-center p-5 lg:p-8">
                  <p className="max-w-170 font-sans text-7 leading-120 text-white/50">
                    System updates, driver changes, and workspace automation — one loop that carries your capability policy from intent to verified recovery.
                  </p>
                </div>
                <div className="flex min-h-[420px] items-center justify-center border-t border-border p-5 lg:border-t-0 lg:border-l lg:p-10">
                  <div className="flex aspect-square w-full max-w-[30rem] items-center justify-center bg-[#111] p-8">
                    <svg className="h-full w-full object-contain" viewBox="0 0 429 417" fill="none" aria-hidden="true">
                      <line x1="214.5" y1="24" x2="214.5" y2="393" stroke="#232323">
                      </line>
                      <line className="fig-comet" x1="214.5" y1="24" x2="214.5" y2="393" pathLength="100">
                      </line>
                      <g className="fig-group">
                        <rect className="fig-node" x="54" y="32" width="321" height="54" fill="#0e0e0e" stroke="#2a2a2a">
                        </rect>
                        <text x="72" y="56" className="font-favorit fig-node-label" fontSize="10.5" fill="rgba(255,255,255,0.82)">
                          INTENT
                        </text>
                        <text x="72" y="72" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.34)">
                          repair display.driver → workstation
                        </text>
                        <rect x="356" y="56" width="4" height="4" fill="rgba(255,255,255,0.4)">
                        </rect>
                        <path className="fig-wave" style={{ '--fig-delay': '0s', '--fig-dur': '4s' } as React.CSSProperties} d="M214.5 86 L210 94 M214.5 86 L219 94" stroke="#3a3a3a">
                        </path>
                      </g>
                      <g className="fig-group">
                        <rect className="fig-node" x="54" y="106" width="321" height="54" fill="#0e0e0e" stroke="#2a2a2a">
                        </rect>
                        <text x="72" y="130" className="font-favorit fig-node-label" fontSize="10.5" fill="rgba(255,255,255,0.82)">
                          POLICY
                        </text>
                        <text x="72" y="146" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.34)">
                          scopes · rollback · approvals
                        </text>
                        <rect x="356" y="130" width="4" height="4" fill="rgba(255,255,255,0.4)">
                        </rect>
                        <path className="fig-wave" style={{ '--fig-delay': '0.4s', '--fig-dur': '4s' } as React.CSSProperties} d="M214.5 160 L210 168 M214.5 160 L219 168" stroke="#3a3a3a">
                        </path>
                      </g>
                      <g className="fig-group">
                        <rect className="fig-node" x="54" y="180" width="321" height="54" fill="#0e0e0e" stroke="#2a2a2a">
                        </rect>
                        <text x="72" y="204" className="font-favorit fig-node-label" fontSize="10.5" fill="rgba(255,255,255,0.82)">
                          IMPLEMENT
                        </text>
                        <text x="72" y="220" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.34)">
                          best of 4 model evaluations
                        </text>
                        <rect x="356" y="204" width="4" height="4" fill="rgba(255,255,255,0.4)">
                        </rect>
                        <path className="fig-wave" style={{ '--fig-delay': '0.8s', '--fig-dur': '4s' } as React.CSSProperties} d="M214.5 234 L210 242 M214.5 234 L219 242" stroke="#3a3a3a">
                        </path>
                      </g>
                      <g className="fig-group">
                        <rect className="fig-node" x="54" y="254" width="321" height="54" fill="#0e0e0e" stroke="#2a2a2a">
                        </rect>
                        <text x="72" y="278" className="font-favorit fig-node-label" fontSize="10.5" fill="rgba(255,255,255,0.82)">
                          AUDIT
                        </text>
                        <text x="72" y="294" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.34)">
                          base · 24s
                        </text>
                        <rect x="356" y="278" width="4" height="4" fill="rgba(255,255,255,0.4)">
                        </rect>
                        <path className="fig-wave" style={{ '--fig-delay': '1.2000000000000002s', '--fig-dur': '4s' } as React.CSSProperties} d="M214.5 308 L210 316 M214.5 308 L219 316" stroke="#3a3a3a">
                        </path>
                      </g>
                      <g className="fig-group">
                        <rect className="fig-node fig-node-accent" x="54" y="328" width="321" height="54" fill="#0e0e0e" stroke="#3a4a38">
                        </rect>
                        <text x="72" y="352" className="font-favorit fig-pulse-soft" fontSize="10.5" fill="#85ed75">
                          RECEIPT
                        </text>
                        <text x="72" y="368" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.34)">
                          evidence recorded
                        </text>
                        <rect x="356" y="352" width="4" height="4" fill="rgba(255,255,255,0.4)">
                        </rect>
                      </g>
                      <text x="54" y="20" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.25)">
                        DIRECTIONER-OS CAPABILITY PIPELINE
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid border-b border-border lg:grid-cols-3">
                <div className="text-card-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_24px_60px_rgba(0,0,0,0.18)] relative flex min-h-[34rem] flex-col justify-between overflow-hidden border-0 border-b border-border bg-transparent p-8 last:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0">
                  <div className="relative z-10">
                    <div className="font-sans text-card-foreground text-xl">
                      Capability execution
                    </div>
                    <div className="font-sans text-base text-muted-foreground mt-3 max-w-105 leading-normal">
                      Stage system changes with the target path, blast radius, and rollback proof shown before approval.
                    </div>
                  </div>
                  <div className="mt-10 flex flex-1 items-end justify-center">
                    <div className="w-full opacity-90" style={{ maxWidth: '210px' } as React.CSSProperties}>
                      <svg className="w-full" viewBox="0 0 210 286" fill="none" aria-hidden="true">
                        <g className="fig-group">
                          <rect className="fig-node" x="24" y="18" width="162" height="64" stroke="#2a2a2a" fill="#101010">
                          </rect>
                          <text className="font-favorit fig-node-label" x="40" y="44" fontSize="10" fill="rgba(255,255,255,0.8)">
                            ARIA PLAN
                          </text>
                          <text x="40" y="62" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.34)">
                            display.driver · staged
                          </text>
                        </g>
                        <line x1="105" y1="82" x2="105" y2="140" stroke="#2a2a2a">
                        </line>
                        <line className="fig-comet" x1="105" y1="82" x2="105" y2="196" pathLength="100">
                        </line>
                        <rect x="52" y="112" width="106" height="26" fill="#0e0e0e" stroke="#3a4a38">
                        </rect>
                        <text x="66" y="129" className="font-favorit fig-pulse-soft" fontSize="9.5" fill="#85ed75">
                          score 18 / 100
                        </text>
                        <line x1="105" y1="138" x2="105" y2="196" stroke="#2a2a2a">
                        </line>
                        <path d="M105 196 L100 187 M105 196 L110 187" stroke="#3a3a3a">
                        </path>
                        <g className="fig-group">
                          <rect className="fig-node" x="24" y="196" width="162" height="64" stroke="#2a2a2a" fill="#101010">
                          </rect>
                          <text className="font-favorit fig-node-label" x="40" y="222" fontSize="10" fill="rgba(255,255,255,0.8)">
                            TARGET SURFACE
                          </text>
                          <text x="40" y="240" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.34)">
                            systemd-udevd · protected
                          </text>
                        </g>
                        <text x="24" y="278" className="font-favorit" fontSize="8.5" fill="rgba(255,255,255,0.25)">
                          POLICY: WITHIN TIER 1
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="text-card-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_24px_60px_rgba(0,0,0,0.18)] relative flex min-h-[34rem] flex-col justify-between overflow-hidden border-0 border-b border-border bg-transparent p-8 last:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0">
                  <div className="relative z-10">
                    <div className="font-sans text-card-foreground text-xl">
                      Stage &amp; recover
                    </div>
                    <div className="font-sans text-base text-muted-foreground mt-3 max-w-105 leading-normal">
                      Capability plans compared with blast radius, rollback readiness, and verification latency surfaced. The best passing plan is the one that safely executes.
                    </div>
                  </div>
                  <div className="mt-10 flex flex-1 items-end justify-center">
                    <div className="w-full opacity-90" style={{ maxWidth: '414px' } as React.CSSProperties}>
                      <svg className="w-full" viewBox="0 0 414 350" fill="none" aria-hidden="true">
                        <rect x="24" y="252" width="120" height="56" stroke="#2a2a2a" fill="#101010">
                        </rect>
                        <text x="40" y="276" className="font-favorit" fontSize="10" fill="rgba(255,255,255,0.8)">
                          LOCAL SYSTEM
                        </text>
                        <text x="40" y="292" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.34)">
                          origin
                        </text>
                        <rect x="270" y="252" width="120" height="56" stroke="#2a2a2a" fill="#101010">
                        </rect>
                        <text x="286" y="276" className="font-favorit" fontSize="10" fill="rgba(255,255,255,0.8)">
                          BASE
                        </text>
                        <text x="286" y="292" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.34)">
                          destination
                        </text>
                        <path d="M84 252 C 84 130, 330 130, 330 252" stroke="#3a4a38" fill="none">
                        </path>
                        <path className="fig-comet" d="M84 252 C 84 130, 330 130, 330 252" pathLength="100">
                        </path>
                        <rect className="fig-pulse-strong" x="205" y="128" width="4" height="4" fill="#85ed75">
                        </rect>
                        <text x="164" y="112" className="font-favorit" fontSize="9" fill="rgba(133,237,117,0.9)">
                          MODEL A · 0.8S · PASS
                        </text>
                        <path className="fig-dash-flow-slow" d="M84 252 C 84 190, 330 190, 330 252" stroke="#2a2a2a" strokeDasharray="3 3" fill="none">
                        </path>
                        <text x="168" y="180" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.3)">
                          MODEL B · 2.1S · REVIEW
                        </text>
                        <text x="24" y="336" className="font-favorit" fontSize="8.5" fill="rgba(255,255,255,0.25)">
                          MODELS COMPARED BEFORE APPROVAL
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="text-card-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_24px_60px_rgba(0,0,0,0.18)] relative flex min-h-[34rem] flex-col justify-between overflow-hidden border-0 border-b border-border bg-transparent p-8 last:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0">
                  <div className="relative z-10">
                    <div className="font-sans text-card-foreground text-xl">
                      Capability proposals
                    </div>
                    <div className="font-sans text-base text-muted-foreground mt-3 max-w-105 leading-normal">
                      Issue capability proposals with expiry, limits, and Work Log entries. Operators retain authority at every boundary.
                    </div>
                  </div>
                  <div className="mt-10 flex flex-1 items-end justify-center">
                    <div className="w-full opacity-90" style={{ maxWidth: '273px' } as React.CSSProperties}>
                      <svg className="w-full" viewBox="0 0 273 288" fill="none" aria-hidden="true">
                        <rect x="30" y="34" width="213" height="188" stroke="#2a2a2a" fill="#101010">
                        </rect>
                        <text x="48" y="64" className="font-favorit" fontSize="10" fill="rgba(255,255,255,0.8)">
                          CAPABILITY PROPOSAL
                        </text>
                        <text x="48" y="82" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.34)">
                          aria explain · depth 3
                        </text>
                        <rect className="fig-wave" style={{ '--fig-delay': '0s', '--fig-dur': '5.6s' } as React.CSSProperties} x="48" y="104" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '4.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="84" y="104" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '0.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="96" y="104" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '2s', '--fig-dur': '5.6s' } as React.CSSProperties} x="108" y="104" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '3.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="120" y="104" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '1.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="84" y="116" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '4.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="108" y="116" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '0.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="120" y="116" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="48" y="128" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '1s', '--fig-dur': '5.6s' } as React.CSSProperties} x="60" y="128" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '2.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="72" y="128" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '3s', '--fig-dur': '5.6s' } as React.CSSProperties} x="120" y="128" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '3.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="60" y="140" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '2.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="96" y="140" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '4s', '--fig-dur': '5.6s' } as React.CSSProperties} x="108" y="140" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '2s', '--fig-dur': '5.6s' } as React.CSSProperties} x="72" y="152" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '3.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="84" y="152" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="96" y="152" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '1s', '--fig-dur': '5.6s' } as React.CSSProperties} x="108" y="152" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '1.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="48" y="164" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '4.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="72" y="164" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '2s', '--fig-dur': '5.6s' } as React.CSSProperties} x="96" y="164" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="120" y="164" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '4s', '--fig-dur': '5.6s' } as React.CSSProperties} x="48" y="176" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '0s', '--fig-dur': '5.6s' } as React.CSSProperties} x="60" y="176" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '1.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="72" y="176" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '3s', '--fig-dur': '5.6s' } as React.CSSProperties} x="84" y="176" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '4.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="96" y="176" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '0.5s', '--fig-dur': '5.6s' } as React.CSSProperties} x="108" y="176" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <rect className="fig-wave" style={{ '--fig-delay': '2s', '--fig-dur': '5.6s' } as React.CSSProperties} x="120" y="176" width="6" height="6" fill="rgba(255,255,255,0.42)">
                        </rect>
                        <text x="160" y="132" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.5)">
                          EXPIRES 72H
                        </text>
                        <text x="160" y="150" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.5)">
                          APPROVAL REQUIRED
                        </text>
                        <text x="160" y="168" className="font-favorit fig-pulse-soft" fontSize="9" fill="#85ed75">
                          ROLLBACK ON
                        </text>
                        <text x="30" y="252" className="font-favorit" fontSize="8.5" fill="rgba(255,255,255,0.25)">
                          EXECUTABLE ONLY WITH APPROVAL
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="order-2 flex min-h-96 flex-col justify-between gap-8 border-b border-border bg-[#101010] p-5 lg:order-2 lg:border-b-0 lg:border-l">
                  <div className="flex flex-col gap-1 font-sans">
                    <p className="text-7 leading-120 text-white">
                      Turn Work Log entries into the next capability policy.
                    </p>
                    <p className="max-w-115 text-white/50 leading-normal">
                      Cluster failures and near-misses from system runs, convert them into tighter capabilities and safer rollbacks, then ship the policy update in one review.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-1">
                    <a className="group inline-flex h-7 w-fit self-start shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border px-2.5 font-favorit text-xs leading-none font-medium uppercase shadow-none backdrop-blur-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 !px-2 border-white bg-white text-black relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/docs">
                      <AsciiGlitchRipple animateOn="parentHover">Docs</AsciiGlitchRipple>
                    <div className="w-3 h-3 overflow-hidden relative">
                      <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                        <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                          </path>
                        </svg>
                        <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                    <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                    <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                    <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                    <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                  </div>
                </div>
                <div className="order-1 flex min-h-96 items-center justify-center overflow-hidden lg:order-1">
                  <svg width="700" height="402" viewBox="0 0 700 402" fill="none" aria-hidden="true">
                    <g className="fig-wave" style={{ '--fig-delay': '4.16s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="336" y="84" width="3.4" height="3.4" fill="rgba(255,255,255,0.50)">
                      </rect>
                      <rect x="328.6" y="84" width="3.4" height="3.4" fill="rgba(255,255,255,0.45)">
                      </rect>
                      <rect x="321.2" y="84" width="3.4" height="3.4" fill="rgba(255,255,255,0.40)">
                      </rect>
                      <rect x="364" y="84" width="3.4" height="3.4" fill="rgba(255,255,255,0.50)">
                      </rect>
                      <rect x="371.4" y="84" width="3.4" height="3.4" fill="rgba(255,255,255,0.45)">
                      </rect>
                      <rect x="378.8" y="84" width="3.4" height="3.4" fill="rgba(255,255,255,0.40)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '4s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="330.6" y="93" width="3.4" height="3.4" fill="rgba(255,255,255,0.49)">
                      </rect>
                      <rect x="323.2" y="93" width="3.4" height="3.4" fill="rgba(255,255,255,0.44)">
                      </rect>
                      <rect x="315.8" y="93" width="3.4" height="3.4" fill="rgba(255,255,255,0.39)">
                      </rect>
                      <rect x="369.4" y="93" width="3.4" height="3.4" fill="rgba(255,255,255,0.49)">
                      </rect>
                      <rect x="376.8" y="93" width="3.4" height="3.4" fill="rgba(255,255,255,0.44)">
                      </rect>
                      <rect x="384.2" y="93" width="3.4" height="3.4" fill="rgba(255,255,255,0.39)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '3.84s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="325.2" y="102" width="3.4" height="3.4" fill="rgba(255,255,255,0.47)">
                      </rect>
                      <rect x="317.8" y="102" width="3.4" height="3.4" fill="rgba(255,255,255,0.42)">
                      </rect>
                      <rect x="310.4" y="102" width="3.4" height="3.4" fill="rgba(255,255,255,0.37)">
                      </rect>
                      <rect x="374.8" y="102" width="3.4" height="3.4" fill="rgba(255,255,255,0.47)">
                      </rect>
                      <rect x="382.2" y="102" width="3.4" height="3.4" fill="rgba(255,255,255,0.42)">
                      </rect>
                      <rect x="389.6" y="102" width="3.4" height="3.4" fill="rgba(255,255,255,0.37)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '3.68s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="319.8" y="111" width="3.4" height="3.4" fill="rgba(255,255,255,0.46)">
                      </rect>
                      <rect x="312.4" y="111" width="3.4" height="3.4" fill="rgba(255,255,255,0.41)">
                      </rect>
                      <rect x="305" y="111" width="3.4" height="3.4" fill="rgba(255,255,255,0.36)">
                      </rect>
                      <rect x="380.2" y="111" width="3.4" height="3.4" fill="rgba(255,255,255,0.46)">
                      </rect>
                      <rect x="387.6" y="111" width="3.4" height="3.4" fill="rgba(255,255,255,0.41)">
                      </rect>
                      <rect x="395" y="111" width="3.4" height="3.4" fill="rgba(255,255,255,0.36)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '3.52s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="314.4" y="120" width="3.4" height="3.4" fill="rgba(255,255,255,0.44)">
                      </rect>
                      <rect x="307" y="120" width="3.4" height="3.4" fill="rgba(255,255,255,0.39)">
                      </rect>
                      <rect x="299.6" y="120" width="3.4" height="3.4" fill="rgba(255,255,255,0.34)">
                      </rect>
                      <rect x="385.6" y="120" width="3.4" height="3.4" fill="rgba(255,255,255,0.44)">
                      </rect>
                      <rect x="393" y="120" width="3.4" height="3.4" fill="rgba(255,255,255,0.39)">
                      </rect>
                      <rect x="400.4" y="120" width="3.4" height="3.4" fill="rgba(255,255,255,0.34)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '3.36s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="309" y="129" width="3.4" height="3.4" fill="rgba(255,255,255,0.43)">
                      </rect>
                      <rect x="301.6" y="129" width="3.4" height="3.4" fill="rgba(255,255,255,0.38)">
                      </rect>
                      <rect x="294.2" y="129" width="3.4" height="3.4" fill="rgba(255,255,255,0.33)">
                      </rect>
                      <rect x="391" y="129" width="3.4" height="3.4" fill="rgba(255,255,255,0.43)">
                      </rect>
                      <rect x="398.4" y="129" width="3.4" height="3.4" fill="rgba(255,255,255,0.38)">
                      </rect>
                      <rect x="405.8" y="129" width="3.4" height="3.4" fill="rgba(255,255,255,0.33)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '3.2s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="303.6" y="138" width="3.4" height="3.4" fill="rgba(255,255,255,0.42)">
                      </rect>
                      <rect x="296.2" y="138" width="3.4" height="3.4" fill="rgba(255,255,255,0.37)">
                      </rect>
                      <rect x="288.8" y="138" width="3.4" height="3.4" fill="rgba(255,255,255,0.32)">
                      </rect>
                      <rect x="396.4" y="138" width="3.4" height="3.4" fill="rgba(255,255,255,0.42)">
                      </rect>
                      <rect x="403.8" y="138" width="3.4" height="3.4" fill="rgba(255,255,255,0.37)">
                      </rect>
                      <rect x="411.2" y="138" width="3.4" height="3.4" fill="rgba(255,255,255,0.32)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '3.04s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="298.2" y="147" width="3.4" height="3.4" fill="rgba(255,255,255,0.40)">
                      </rect>
                      <rect x="290.8" y="147" width="3.4" height="3.4" fill="rgba(255,255,255,0.35)">
                      </rect>
                      <rect x="283.4" y="147" width="3.4" height="3.4" fill="rgba(255,255,255,0.30)">
                      </rect>
                      <rect x="401.8" y="147" width="3.4" height="3.4" fill="rgba(255,255,255,0.40)">
                      </rect>
                      <rect x="409.2" y="147" width="3.4" height="3.4" fill="rgba(255,255,255,0.35)">
                      </rect>
                      <rect x="416.6" y="147" width="3.4" height="3.4" fill="rgba(255,255,255,0.30)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '2.88s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="292.8" y="156" width="3.4" height="3.4" fill="rgba(255,255,255,0.39)">
                      </rect>
                      <rect x="285.4" y="156" width="3.4" height="3.4" fill="rgba(255,255,255,0.34)">
                      </rect>
                      <rect x="278" y="156" width="3.4" height="3.4" fill="rgba(255,255,255,0.29)">
                      </rect>
                      <rect x="407.2" y="156" width="3.4" height="3.4" fill="rgba(255,255,255,0.39)">
                      </rect>
                      <rect x="414.6" y="156" width="3.4" height="3.4" fill="rgba(255,255,255,0.34)">
                      </rect>
                      <rect x="422" y="156" width="3.4" height="3.4" fill="rgba(255,255,255,0.29)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '2.72s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="287.4" y="165" width="3.4" height="3.4" fill="rgba(255,255,255,0.38)">
                      </rect>
                      <rect x="280" y="165" width="3.4" height="3.4" fill="rgba(255,255,255,0.33)">
                      </rect>
                      <rect x="272.6" y="165" width="3.4" height="3.4" fill="rgba(255,255,255,0.28)">
                      </rect>
                      <rect x="412.6" y="165" width="3.4" height="3.4" fill="rgba(255,255,255,0.38)">
                      </rect>
                      <rect x="420" y="165" width="3.4" height="3.4" fill="rgba(255,255,255,0.33)">
                      </rect>
                      <rect x="427.4" y="165" width="3.4" height="3.4" fill="rgba(255,255,255,0.28)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '2.56s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="282" y="174" width="3.4" height="3.4" fill="rgba(255,255,255,0.36)">
                      </rect>
                      <rect x="274.6" y="174" width="3.4" height="3.4" fill="rgba(255,255,255,0.31)">
                      </rect>
                      <rect x="267.2" y="174" width="3.4" height="3.4" fill="rgba(255,255,255,0.26)">
                      </rect>
                      <rect x="418" y="174" width="3.4" height="3.4" fill="rgba(255,255,255,0.36)">
                      </rect>
                      <rect x="425.4" y="174" width="3.4" height="3.4" fill="rgba(255,255,255,0.31)">
                      </rect>
                      <rect x="432.8" y="174" width="3.4" height="3.4" fill="rgba(255,255,255,0.26)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '2.4s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="276.6" y="183" width="3.4" height="3.4" fill="rgba(255,255,255,0.35)">
                      </rect>
                      <rect x="269.2" y="183" width="3.4" height="3.4" fill="rgba(255,255,255,0.30)">
                      </rect>
                      <rect x="261.8" y="183" width="3.4" height="3.4" fill="rgba(255,255,255,0.25)">
                      </rect>
                      <rect x="423.4" y="183" width="3.4" height="3.4" fill="rgba(255,255,255,0.35)">
                      </rect>
                      <rect x="430.8" y="183" width="3.4" height="3.4" fill="rgba(255,255,255,0.30)">
                      </rect>
                      <rect x="438.2" y="183" width="3.4" height="3.4" fill="rgba(255,255,255,0.25)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '2.24s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="271.2" y="192" width="3.4" height="3.4" fill="rgba(255,255,255,0.33)">
                      </rect>
                      <rect x="263.79999999999995" y="192" width="3.4" height="3.4" fill="rgba(255,255,255,0.28)">
                      </rect>
                      <rect x="256.4" y="192" width="3.4" height="3.4" fill="rgba(255,255,255,0.23)">
                      </rect>
                      <rect x="428.8" y="192" width="3.4" height="3.4" fill="rgba(255,255,255,0.33)">
                      </rect>
                      <rect x="436.20000000000005" y="192" width="3.4" height="3.4" fill="rgba(255,255,255,0.28)">
                      </rect>
                      <rect x="443.6" y="192" width="3.4" height="3.4" fill="rgba(255,255,255,0.23)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '2.08s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="265.8" y="201" width="3.4" height="3.4" fill="rgba(255,255,255,0.32)">
                      </rect>
                      <rect x="258.4" y="201" width="3.4" height="3.4" fill="rgba(255,255,255,0.27)">
                      </rect>
                      <rect x="251" y="201" width="3.4" height="3.4" fill="rgba(255,255,255,0.22)">
                      </rect>
                      <rect x="434.2" y="201" width="3.4" height="3.4" fill="rgba(255,255,255,0.32)">
                      </rect>
                      <rect x="441.6" y="201" width="3.4" height="3.4" fill="rgba(255,255,255,0.27)">
                      </rect>
                      <rect x="449" y="201" width="3.4" height="3.4" fill="rgba(255,255,255,0.22)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '1.92s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="260.4" y="210" width="3.4" height="3.4" fill="rgba(255,255,255,0.31)">
                      </rect>
                      <rect x="253" y="210" width="3.4" height="3.4" fill="rgba(255,255,255,0.26)">
                      </rect>
                      <rect x="245.6" y="210" width="3.4" height="3.4" fill="rgba(255,255,255,0.21)">
                      </rect>
                      <rect x="439.6" y="210" width="3.4" height="3.4" fill="rgba(255,255,255,0.31)">
                      </rect>
                      <rect x="447" y="210" width="3.4" height="3.4" fill="rgba(255,255,255,0.26)">
                      </rect>
                      <rect x="454.4" y="210" width="3.4" height="3.4" fill="rgba(255,255,255,0.21)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '1.76s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="255" y="219" width="3.4" height="3.4" fill="rgba(255,255,255,0.29)">
                      </rect>
                      <rect x="247.6" y="219" width="3.4" height="3.4" fill="rgba(255,255,255,0.24)">
                      </rect>
                      <rect x="240.2" y="219" width="3.4" height="3.4" fill="rgba(255,255,255,0.19)">
                      </rect>
                      <rect x="445" y="219" width="3.4" height="3.4" fill="rgba(255,255,255,0.29)">
                      </rect>
                      <rect x="452.4" y="219" width="3.4" height="3.4" fill="rgba(255,255,255,0.24)">
                      </rect>
                      <rect x="459.8" y="219" width="3.4" height="3.4" fill="rgba(255,255,255,0.19)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '1.6s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="249.6" y="228" width="3.4" height="3.4" fill="rgba(255,255,255,0.28)">
                      </rect>
                      <rect x="242.2" y="228" width="3.4" height="3.4" fill="rgba(255,255,255,0.23)">
                      </rect>
                      <rect x="234.8" y="228" width="3.4" height="3.4" fill="rgba(255,255,255,0.18)">
                      </rect>
                      <rect x="450.4" y="228" width="3.4" height="3.4" fill="rgba(255,255,255,0.28)">
                      </rect>
                      <rect x="457.8" y="228" width="3.4" height="3.4" fill="rgba(255,255,255,0.23)">
                      </rect>
                      <rect x="465.2" y="228" width="3.4" height="3.4" fill="rgba(255,255,255,0.18)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '1.44s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="244.2" y="237" width="3.4" height="3.4" fill="rgba(255,255,255,0.26)">
                      </rect>
                      <rect x="236.79999999999998" y="237" width="3.4" height="3.4" fill="rgba(255,255,255,0.21)">
                      </rect>
                      <rect x="229.39999999999998" y="237" width="3.4" height="3.4" fill="rgba(255,255,255,0.16)">
                      </rect>
                      <rect x="455.8" y="237" width="3.4" height="3.4" fill="rgba(255,255,255,0.26)">
                      </rect>
                      <rect x="463.20000000000005" y="237" width="3.4" height="3.4" fill="rgba(255,255,255,0.21)">
                      </rect>
                      <rect x="470.6" y="237" width="3.4" height="3.4" fill="rgba(255,255,255,0.16)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '1.28s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="238.8" y="246" width="3.4" height="3.4" fill="rgba(255,255,255,0.25)">
                      </rect>
                      <rect x="231.39999999999998" y="246" width="3.4" height="3.4" fill="rgba(255,255,255,0.20)">
                      </rect>
                      <rect x="224" y="246" width="3.4" height="3.4" fill="rgba(255,255,255,0.15)">
                      </rect>
                      <rect x="461.2" y="246" width="3.4" height="3.4" fill="rgba(255,255,255,0.25)">
                      </rect>
                      <rect x="468.6" y="246" width="3.4" height="3.4" fill="rgba(255,255,255,0.20)">
                      </rect>
                      <rect x="476" y="246" width="3.4" height="3.4" fill="rgba(255,255,255,0.15)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '1.12s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="233.39999999999998" y="255" width="3.4" height="3.4" fill="rgba(255,255,255,0.24)">
                      </rect>
                      <rect x="226" y="255" width="3.4" height="3.4" fill="rgba(255,255,255,0.19)">
                      </rect>
                      <rect x="218.6" y="255" width="3.4" height="3.4" fill="rgba(255,255,255,0.14)">
                      </rect>
                      <rect x="466.6" y="255" width="3.4" height="3.4" fill="rgba(255,255,255,0.24)">
                      </rect>
                      <rect x="474" y="255" width="3.4" height="3.4" fill="rgba(255,255,255,0.19)">
                      </rect>
                      <rect x="481.4" y="255" width="3.4" height="3.4" fill="rgba(255,255,255,0.14)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '0.96s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="228" y="264" width="3.4" height="3.4" fill="rgba(255,255,255,0.22)">
                      </rect>
                      <rect x="220.6" y="264" width="3.4" height="3.4" fill="rgba(255,255,255,0.17)">
                      </rect>
                      <rect x="213.2" y="264" width="3.4" height="3.4" fill="rgba(255,255,255,0.12)">
                      </rect>
                      <rect x="472" y="264" width="3.4" height="3.4" fill="rgba(255,255,255,0.22)">
                      </rect>
                      <rect x="479.4" y="264" width="3.4" height="3.4" fill="rgba(255,255,255,0.17)">
                      </rect>
                      <rect x="486.8" y="264" width="3.4" height="3.4" fill="rgba(255,255,255,0.12)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '0.8s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="222.6" y="273" width="3.4" height="3.4" fill="rgba(255,255,255,0.21)">
                      </rect>
                      <rect x="215.2" y="273" width="3.4" height="3.4" fill="rgba(255,255,255,0.16)">
                      </rect>
                      <rect x="207.79999999999998" y="273" width="3.4" height="3.4" fill="rgba(255,255,255,0.11)">
                      </rect>
                      <rect x="477.4" y="273" width="3.4" height="3.4" fill="rgba(255,255,255,0.21)">
                      </rect>
                      <rect x="484.8" y="273" width="3.4" height="3.4" fill="rgba(255,255,255,0.16)">
                      </rect>
                      <rect x="492.20000000000005" y="273" width="3.4" height="3.4" fill="rgba(255,255,255,0.11)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '0.64s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="217.2" y="282" width="3.4" height="3.4" fill="rgba(255,255,255,0.20)">
                      </rect>
                      <rect x="209.79999999999998" y="282" width="3.4" height="3.4" fill="rgba(255,255,255,0.15)">
                      </rect>
                      <rect x="202.39999999999998" y="282" width="3.4" height="3.4" fill="rgba(255,255,255,0.10)">
                      </rect>
                      <rect x="482.8" y="282" width="3.4" height="3.4" fill="rgba(255,255,255,0.20)">
                      </rect>
                      <rect x="490.20000000000005" y="282" width="3.4" height="3.4" fill="rgba(255,255,255,0.15)">
                      </rect>
                      <rect x="497.6" y="282" width="3.4" height="3.4" fill="rgba(255,255,255,0.10)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '0.48s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="211.8" y="291" width="3.4" height="3.4" fill="rgba(255,255,255,0.18)">
                      </rect>
                      <rect x="204.4" y="291" width="3.4" height="3.4" fill="rgba(255,255,255,0.13)">
                      </rect>
                      <rect x="197" y="291" width="3.4" height="3.4" fill="rgba(255,255,255,0.08)">
                      </rect>
                      <rect x="488.2" y="291" width="3.4" height="3.4" fill="rgba(255,255,255,0.18)">
                      </rect>
                      <rect x="495.6" y="291" width="3.4" height="3.4" fill="rgba(255,255,255,0.13)">
                      </rect>
                      <rect x="503" y="291" width="3.4" height="3.4" fill="rgba(255,255,255,0.08)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '0.32s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="206.39999999999998" y="300" width="3.4" height="3.4" fill="rgba(255,255,255,0.17)">
                      </rect>
                      <rect x="198.99999999999997" y="300" width="3.4" height="3.4" fill="rgba(255,255,255,0.12)">
                      </rect>
                      <rect x="191.59999999999997" y="300" width="3.4" height="3.4" fill="rgba(255,255,255,0.08)">
                      </rect>
                      <rect x="493.6" y="300" width="3.4" height="3.4" fill="rgba(255,255,255,0.17)">
                      </rect>
                      <rect x="501" y="300" width="3.4" height="3.4" fill="rgba(255,255,255,0.12)">
                      </rect>
                      <rect x="508.40000000000003" y="300" width="3.4" height="3.4" fill="rgba(255,255,255,0.08)">
                      </rect>
                    </g>
                    <g className="fig-wave" style={{ '--fig-delay': '0.16s', '--fig-dur': '5s' } as React.CSSProperties}>
                      <rect x="201" y="309" width="3.4" height="3.4" fill="rgba(255,255,255,0.15)">
                      </rect>
                      <rect x="193.6" y="309" width="3.4" height="3.4" fill="rgba(255,255,255,0.10)">
                      </rect>
                      <rect x="186.2" y="309" width="3.4" height="3.4" fill="rgba(255,255,255,0.08)">
                      </rect>
                      <rect x="499" y="309" width="3.4" height="3.4" fill="rgba(255,255,255,0.15)">
                      </rect>
                      <rect x="506.4" y="309" width="3.4" height="3.4" fill="rgba(255,255,255,0.10)">
                      </rect>
                      <rect x="513.8" y="309" width="3.4" height="3.4" fill="rgba(255,255,255,0.08)">
                      </rect>
                    </g>
                    <rect className="fig-pulse-strong" x="347" y="60" width="4" height="4" fill="#85ed75">
                    </rect>
                    <text x="350" y="366" textAnchor="middle" className="font-favorit" fontSize="9" fill="rgba(255,255,255,0.3)">
                      WORK LOG FEEDS THE NEXT RUN
                    </text>
                  </svg>
                </div>
              </div>
            </section>
            <GlitterGridSeparator size="chapter" />
            <section id="models" className="border border-border flex flex-col scroll-mt-17 xl:scroll-mt-[104px]">
              <div className="h-90 border-b border-border flex flex-col items-start p-5 gap-8 relative overflow-hidden bg-surface">
                <MarketsGraph />
                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                  <div className="absolute inset-0 mix-blend-overlay opacity-50 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.045)_0px,rgba(255,255,255,0.045)_1px,transparent_1px,transparent_28px),repeating-linear-gradient(90deg,rgba(255,255,255,0.028)_0px,rgba(255,255,255,0.028)_1px,transparent_1px,transparent_28px)]">
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,14,14,0.94)_0%,rgba(14,14,14,0.62)_30%,rgba(14,14,14,0.12)_62%,transparent_84%)]">
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(0deg,#0e0e0e_1%,rgba(14,14,14,0)_100%)]">
                  </div>
                </div>
                <p className="relative z-10 font-sans text-white text-7 leading-120 max-w-170">
                  <span className="text-white">                  Active models.
</span>
                  <span className="text-white/50">                  Watch health, updates, and resource pressure across machines from a single governed surface.
</span>
                </p>
                <div className="relative z-10 flex items-center gap-1">
                  <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/app">
                    <AsciiGlitchRipple animateOn="parentHover">OPEN MODEL LAB</AsciiGlitchRipple>
                  <div className="w-3 h-3 overflow-hidden relative">
                    <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                      <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                        </path>
                      </svg>
                      <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                  <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                  <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                  <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                  <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                  <a className="group inline-flex h-7 w-fit self-start shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border border-white/16 bg-white/10 px-2.5 font-favorit text-xs leading-none font-medium uppercase text-white/85 shadow-none backdrop-blur-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/contact">
                    <AsciiGlitchRipple animateOn="parentHover">BOOK A DEMO</AsciiGlitchRipple>
                  <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                  <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                  <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                  <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                  <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                </div>
              </div>
              <div className="flex flex-col lg:grid lg:min-h-151.5 lg:grid-cols-2 border-b border-border">
                <div className="border-b lg:border-b-0 lg:border-r border-border p-5 flex flex-col justify-between gap-8 font-sans">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-h3-title leading-122">
                        Live capabilities
                      </p>
                      <p className="text-white/50 text-h3-title max-w-115 leading-122">
                        Streaming evaluations across local models.
                        <br />
                        One surface for every machine and workspace you operate.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <div className="flex gap-2.5 items-start text-sm w-full text-left">
                          <span className="whitespace-nowrap text-white">                          1.1
</span>
                          <span className="flex flex-col flex-1">                          <span className="text-white">                          Smart order routing
</span>
                          <span className="block text-white/50 max-w-80 leading-122 pt-3">                          Proposed actions ranked by quantitative blast radius and system criticality.
</span>
</span>
                        </div>
                      </div>
                      <div>
                        <div className="border-t border-border w-full my-3">
                        </div>
                        <div className="flex gap-2.5 items-start text-sm w-full text-left">
                          <span className="whitespace-nowrap text-white">                          1.2
</span>
                          <span className="flex flex-col flex-1">                          <span className="text-white">                          Model alerts
</span>
                          <span className="block text-white/50 max-w-80 leading-122 pt-3">                          Health and update triggers wake the AI Engineer only inside its capabilities.
</span>
</span>
                        </div>
                      </div>
                      <div>
                        <div className="border-t border-border w-full my-3">
                        </div>
                        <div className="flex gap-2.5 items-start text-sm w-full text-left">
                          <span className="whitespace-nowrap text-white">                          1.3
</span>
                          <span className="flex flex-col flex-1">                          <span className="text-white">                          Run telemetry
</span>
                          <span className="block text-white/50 max-w-80 leading-122 pt-3">                          CPU, memory, storage, and World Model health stream into the same Work Log.
</span>
</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/app">
                    <AsciiGlitchRipple animateOn="parentHover">COMPARE MODELS</AsciiGlitchRipple>
                  <div className="w-3 h-3 overflow-hidden relative">
                    <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                      <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                        </path>
                      </svg>
                      <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                  <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                  <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                  <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                  <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                </div>
                <RouteBoard />
              </div>
              <div className="flex flex-col lg:grid lg:min-h-151.5 lg:grid-cols-2">
                <div className="order-2 lg:order-0 lg:col-start-2 p-5 flex flex-col justify-between gap-8 font-sans">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-h3-title leading-122">
                        System automation
                      </p>
                      <p className="text-white/50 max-w-115 leading-122">
                        Plan system changes against live conditions.
                        <br />
                        Every capability runs inside an explicit policy boundary.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <div className="flex gap-2.5 items-start text-sm">
                          <span className="whitespace-nowrap text-white">                          1.1
</span>
                          <span className="flex flex-col gap-2">                          <span className="text-white">                          Plans scored against live system state before approval
</span>
                          <span className="text-white/35 leading-122 max-w-80">                          Every proposed change carries its blast radius, rollback path, and verification evidence.
</span>
</span>
                        </div>
                      </div>
                      <div>
                        <div className="border-t border-border w-full my-3">
                        </div>
                        <div className="flex gap-2.5 items-start text-sm">
                          <span className="whitespace-nowrap text-white">                          1.2
</span>
                          <span className="flex flex-col gap-2">                          <span className="text-white">                          Updates staged in governed recovery slots
</span>
                          <span className="text-white/35 leading-122 max-w-80">                          Typed capabilities only, with append-only audit trails and rollback triggers.
</span>
</span>
                        </div>
                      </div>
                      <div>
                        <div className="border-t border-border w-full my-3">
                        </div>
                        <div className="flex gap-2.5 items-start text-sm">
                          <span className="whitespace-nowrap text-white">                          1.3
</span>
                          <span className="flex flex-col gap-2">                          <span className="text-white">                          Direct help from the Directioner-OS operations team
</span>
                          <span className="text-white/35 leading-122 max-w-80">                          A resident systems engineer from first diagnosis to steady-state automation.
</span>
</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/app">
                      <AsciiGlitchRipple animateOn="parentHover">PLAN A RUN</AsciiGlitchRipple>
                    <div className="w-3 h-3 overflow-hidden relative">
                      <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                        <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                          </path>
                        </svg>
                        <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                    <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                    <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                    <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                    <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                    <a className="group inline-flex h-7 w-fit self-start shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border border-white/16 bg-white/10 px-2.5 font-favorit text-xs leading-none font-medium uppercase text-white/85 shadow-none backdrop-blur-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/docs">
                      <AsciiGlitchRipple animateOn="parentHover">DOCS</AsciiGlitchRipple>
                    <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                    <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                    <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                    <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                    <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                  </div>
                </div>
                <div className="group/spotlight relative dark:border-neutral-800 order-1 lg:order-0 lg:col-start-1 lg:row-start-1 flex flex-col overflow-hidden border-0 border-b lg:border-b-0 lg:border-r border-border rounded-none bg-surface p-0">
                  <div className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100" style={{ backgroundColor: '#262626', maskImage: 'radial-gradient( 350px circle at 0px 0px, white, transparent 80% )', WebkitMaskImage: 'radial-gradient( 350px circle at 0px 0px, white, transparent 80% )' } as React.CSSProperties}>
                  </div>
                  <div className="relative z-20 px-3 py-3">
                    <p className="text-2xs text-white/25 uppercase font-favorit">
                      FIG.7
                    </p>
                  </div>
                  <div className="relative z-20 flex-1 min-h-90 lg:min-h-0 flex items-center justify-center p-5 overflow-hidden">
                    <div className="relative w-full max-w-124.5 border border-border bg-surface/90 flex flex-col overflow-hidden shadow-2xl font-sans">
                      <div className="border-b border-border px-3 py-3 flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search shrink-0 text-white/60" aria-hidden="true">
                          <path d="m21 21-4.34-4.34">
                          </path>
                          <circle cx="11" cy="11" r="8">
                          </circle>
                        </svg>
                        <p className="text-white/50 text-sm flex-1">
                          Enter model or capability..
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down shrink-0 text-white/50" aria-hidden="true">
                          <path d="m6 9 6 6 6-6">
                          </path>
                        </svg>
                      </div>
                      <div className="p-4 border-b border-border">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex flex-col gap-4">
                            <img alt="" aria-hidden="true" loading="lazy" width="30" height="30" decoding="async" className="[filter:invert(1)] opacity-80" style={{ color: 'transparent' } as React.CSSProperties} src="/assets/logo-new.svg" />
                            <div className="flex flex-col gap-4">
                              <p className="text-white text-xl leading-none">
                                UPDATE → VERIFIED
                              </p>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-white">                                BASE
</span>
                                <div className="border border-border px-1.5 py-1 flex items-center gap-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark opacity-50 text-white" aria-hidden="true">
                                    <path d="M10 18v-7">
                                    </path>
                                    <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z">
                                    </path>
                                    <path d="M14 18v-7">
                                    </path>
                                    <path d="M18 18v-7">
                                    </path>
                                    <path d="M3 22h18">
                                    </path>
                                    <path d="M6 18v-7">
                                    </path>
                                  </svg>
                                  <span className="text-sm text-white">                                  POLICY: DIRECT-CORE-V1
</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1.5">
                            <p className="text-white text-lg leading-none whitespace-nowrap">
                              $1.90
                              <span className="text-white/40">                              /RUN
</span>
                            </p>
                            <p className="text-2xs font-favorit uppercase whitespace-nowrap">
                              <span className="text-white">                              TOTAL
                              
</span>
                              <span className="text-white/50">                              4.75 ms
</span>
                            </p>
                          </div>
                        </div>
                        <div className="mt-5 h-2 flex fig-sheen">
                          <div className="bg-white" style={{ width: '26.40%' } as React.CSSProperties}>
                          </div>
                          <div className="" style={{ width: '19.14%', backgroundColor: '#282828' } as React.CSSProperties}>
                          </div>
                          <div className="bg-white" style={{ width: '0.33%' } as React.CSSProperties}>
                          </div>
                          <div className="" style={{ width: '3.96%', backgroundColor: '#282828' } as React.CSSProperties}>
                          </div>
                          <div className="bg-white" style={{ width: '3.41%' } as React.CSSProperties}>
                          </div>
                          <div className="" style={{ width: '0.33%', backgroundColor: '#282828' } as React.CSSProperties}>
                          </div>
                          <div className="bg-white" style={{ width: '3.63%' } as React.CSSProperties}>
                          </div>
                          <div className="" style={{ width: '16.17%', backgroundColor: '#282828' } as React.CSSProperties}>
                          </div>
                          <div className="bg-white" style={{ width: '26.62%' } as React.CSSProperties}>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border-b border-border opacity-45">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-white/50 whitespace-nowrap">                            Planning latency
</span>
                            <div className="flex-1 border-t border-border">
                            </div>
                            <span className="text-sm text-white whitespace-nowrap">                            $47.50
</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-white/50 whitespace-nowrap">                            Verification latency
</span>
                            <div className="flex-1 border-t border-border">
                            </div>
                            <span className="text-sm text-white whitespace-nowrap">                            $52.10
</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-white/50 whitespace-nowrap">                            Rollback readiness
</span>
                            <div className="flex-1 border-t border-border">
                            </div>
                            <span className="text-sm text-white whitespace-nowrap">                            $18.40 / wk
</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-white/50 whitespace-nowrap">                            Verification latency
</span>
                            <div className="flex-1 border-t border-border">
                            </div>
                            <span className="text-sm text-white whitespace-nowrap">                            240 ms
</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <p className="text-white text-lg">
                          Net edge on plan
                        </p>
                        <p className="text-available text-xl fig-pulse-soft">
                          +$1.30 / wk
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <GlitterGridSeparator size="chapter" />
            <section id="research" className="border border-border flex flex-col scroll-mt-17 xl:scroll-mt-[104px]">
              <div className="border-b border-border p-5 flex flex-col gap-6 lg:min-h-[136px]">
                <p className="font-sans text-7 leading-120 xl:whitespace-nowrap">
                  <span className="text-white">                  Research.
</span>
                  <span className="text-white/50">                  Notes from building governed autonomy
</span>
                </p>
                <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white self-start" href="/research">
                  <AsciiGlitchRipple animateOn="parentHover">DISCOVER</AsciiGlitchRipple>
                <div className="w-3 h-3 overflow-hidden relative">
                  <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                    <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                      </path>
                    </svg>
                    <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                      </path>
                    </svg>
                  </div>
                </div>
                <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
              </div>
              <div className="flex flex-col lg:flex-row border-b border-border">
                <a className="group flex-1 border-b lg:border-b-0 lg:border-r border-border bg-research-bg flex flex-col min-h-95 md:min-h-120 relative overflow-hidden font-sans focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60" href="/research">                <div className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-90">
                  <div className="absolute inset-0 h-full w-full">
                    <DitheredCanvas type="research" index={0} />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-b from-black/10 via-research-bg/35 to-research-bg/90">
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-research-bg/80 via-research-bg/40 to-transparent" aria-hidden="true">
                </div>
                <div className="relative z-10 p-5 flex flex-col gap-5 lg:gap-8 flex-1">
                  <div className="flex flex-col gap-4 lg:gap-5">
                    <p className="w-fit border border-white/22 p-1 font-favorit text-xs leading-none uppercase tracking-[0.24px] text-white/50">
                      Research
                    </p>
                    <p className="text-white text-xl leading-normal lg:text-h3-title underline-offset-4 decoration-white/60 group-hover:underline">
                      Deterministic verification for system operations
                    </p>
                    <p className="text-white/60 text-base leading-6 max-w-100 transition-colors group-hover:text-white/75">
                      How Directioner-OS previews every mutation, scores its blast radius, and proves its rollback before approval.
                    </p>
                  </div>
                  <span className="inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors bg-surface text-text-mute min-h-7 px-2 py-2 text-xs leading-none border border-white/12 self-start group-hover:bg-surface-hover group-hover:text-white">                  READ MORE
</span>
                </div>
</a>
                <div className="flex flex-col lg:w-116.75">
                  <a className="group border-b border-border p-5 flex flex-col gap-3 font-sans focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60" href="/research" style={{ flexGrow: 1.7857142857142856, minHeight: '158px' } as React.CSSProperties}>                  <div className="flex items-start justify-between gap-5">
                    <p className="text-white leading-6 underline-offset-4 decoration-white/60 group-hover:underline">
                      Receipts as a training signal
                    </p>
                    <div className="bg-white/4 p-2 shrink-0 flex items-center justify-center size-7 transition-colors group-hover:bg-surface-hover">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-white/70" aria-hidden="true">
                        <path d="M7 7h10v10">
                        </path>
                        <path d="M7 17 17 7">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm leading-5 text-white/50 max-w-74.5 transition-colors group-hover:text-white/70">
                    Turning audited mutations into safer capabilities and recovery proofs.
                  </p>
</a>
                  <a className="group border-b border-border p-5 flex flex-col gap-3 font-sans focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60" href="/research" style={{ flexGrow: 1.3571428571428572, minHeight: '134px' } as React.CSSProperties}>                  <div className="flex items-start justify-between gap-5">
                    <p className="text-white leading-6 underline-offset-4 decoration-white/60 group-hover:underline">
                      The safety engine behind Directioner-OS
                    </p>
                    <div className="bg-white/4 p-2 shrink-0 flex items-center justify-center size-7 transition-colors group-hover:bg-surface-hover">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-white/70" aria-hidden="true">
                        <path d="M7 7h10v10">
                        </path>
                        <path d="M7 17 17 7">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm leading-5 text-white/50 max-w-74.5 transition-colors group-hover:text-white/70">
                    How boundaries compile into gates the runtime cannot skip.
                  </p>
</a>
                  <a className="group border-b border-border p-5 flex flex-col gap-3 font-sans focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60" href="/research" style={{ flexGrow: 1.3571428571428572, minHeight: '134px' } as React.CSSProperties}>                  <div className="flex items-start justify-between gap-5">
                    <p className="text-white leading-6 underline-offset-4 decoration-white/60 group-hover:underline">
                      Autonomous maintenance under constraints
                    </p>
                    <div className="bg-white/4 p-2 shrink-0 flex items-center justify-center size-7 transition-colors group-hover:bg-surface-hover">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-white/70" aria-hidden="true">
                        <path d="M7 7h10v10">
                        </path>
                        <path d="M7 17 17 7">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm leading-5 text-white/50 max-w-74.5 transition-colors group-hover:text-white/70">
                    Model selection when context, risk, and capability scope all bind.
                  </p>
</a>
                  <a className="group flex-1 min-h-15 lg:min-h-19 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60" href="/blog">                  <div className="flex items-center gap-2 p-2">
                    <span className="text-sm font-favorit text-white uppercase leading-none underline-offset-4 decoration-white/60 group-hover:underline">                    VIEW ALL
</span>
                    <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" className="[filter:invert(1)]" style={{ color: 'transparent' } as React.CSSProperties} src="/assets/logo-new.svg" />
                    <span className="text-sm font-favorit text-white uppercase leading-none underline-offset-4 decoration-white/60 group-hover:underline">                    RESEARCH NOTES
</span>
                  </div>
</a>
                </div>
              </div>
              <div className="flex flex-col mt-5 lg:mt-10">
                <div className="px-5 py-5 lg:py-6 flex items-center justify-between">
                  <p className="text-white text-h3-title font-sans">
                    Latest Research.
                  </p>
                  <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white" href="/blog">
                    <AsciiGlitchRipple animateOn="parentHover">SEE ALL</AsciiGlitchRipple>
                  <div className="w-3 h-3 overflow-hidden relative">
                    <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                      <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                        </path>
                      </svg>
                      <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                  <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                  <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                  <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                  <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <a className="block border-t border-border md:border-r md:last:border-r-0" href="/blog">                  <div className="flex w-full cursor-pointer flex-col overflow-hidden transition-opacity hover:opacity-90 h-[22rem] md:h-[23rem] lg:h-[24rem]">
                    <div className="relative box-border shrink-0 overflow-hidden border-b border-border h-45 md:h-50 lg:h-54">
                      <div className="relative h-full w-full">
                        <DitheredCanvas type="research" index={1} />
                      </div>
                    </div>
                    <div className="flex-1 p-5 flex flex-col gap-4">
                      <div className="flex min-w-0 items-start justify-between gap-3 font-favorit text-xs uppercase leading-none text-white/65">
                        <span className="shrink-0 bg-white/10 px-1.5 py-1 text-white/75">                        Research
</span>
                        <span className="shrink-0 pt-1 text-right tabular-nums">                        JUL 02ND, 2026
</span>
                      </div>
                      <div className="text-white text-base font-normal md:font-350">
                        Verification coverage for desktop and system workflows
                      </div>
                    </div>
                  </div>
</a>
                  <a className="block border-t border-border md:border-r md:last:border-r-0" href="/blog">                  <div className="flex w-full cursor-pointer flex-col overflow-hidden transition-opacity hover:opacity-90 h-[22rem] md:h-[23rem] lg:h-[24rem]">
                    <div className="relative box-border shrink-0 overflow-hidden border-b border-border h-45 md:h-50 lg:h-54">
                      <div className="relative h-full w-full">
                        <DitheredCanvas type="research" index={2} />
                      </div>
                    </div>
                    <div className="flex-1 p-5 flex flex-col gap-4">
                      <div className="flex min-w-0 items-start justify-between gap-3 font-favorit text-xs uppercase leading-none text-white/65">
                        <span className="shrink-0 bg-white/10 px-1.5 py-1 text-white/75">                        Research
</span>
                        <span className="shrink-0 pt-1 text-right tabular-nums">                        JUN 18TH, 2026
</span>
                      </div>
                      <div className="text-white text-base font-normal md:font-350">
                        Policy drift: catching boundary erosion early
                      </div>
                    </div>
                  </div>
</a>
                  <a className="block border-t border-border md:border-r md:last:border-r-0" href="/blog">                  <div className="flex w-full cursor-pointer flex-col overflow-hidden transition-opacity hover:opacity-90 h-[22rem] md:h-[23rem] lg:h-[24rem]">
                    <div className="relative box-border shrink-0 overflow-hidden border-b border-border h-45 md:h-50 lg:h-54">
                      <div className="relative h-full w-full">
                        <DitheredCanvas type="research" index={0} />
                      </div>
                    </div>
                    <div className="flex-1 p-5 flex flex-col gap-4">
                      <div className="flex min-w-0 items-start justify-between gap-3 font-favorit text-xs uppercase leading-none text-white/65">
                        <span className="shrink-0 bg-white/10 px-1.5 py-1 text-white/75">                        Research
</span>
                        <span className="shrink-0 pt-1 text-right tabular-nums">                        JUN 03RD, 2026
</span>
                      </div>
                      <div className="text-white text-base font-normal md:font-350">
                        Receipts, evidence, and the audit trail
                      </div>
                    </div>
                  </div>
</a>
                </div>
              </div>
            </section>
            <GlitterGridSeparator size="beforeStories" />
            <OperatorPlaybooks />
            <GlitterGridSeparator size="beforeJoin" />
            <div className="pb-12 md:pb-16 lg:pb-40">
              <section className="flex flex-col lg:flex-row p-5 justify-between gap-5 lg:gap-0 border border-border">
                <div className="flex flex-col justify-between w-full lg:max-w-135 min-h-50 lg:min-h-94.25">
                  <div>
                    <span className="text-white font-favorit text-xs uppercase tracking-4">                    For Builders
</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-white text-7 leading-122">
                      Build on Directioner-OS
                    </h2>
                    <p className="max-w-100 leading-normal text-white/50 mt-5">
                      Build autonomous workflows inside boundaries you define — with typed capabilities, local explanations, and a Work Log for everything they do.
                    </p>
                  </div>
                  <a className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none relative hover:cursor-none hover:bg-transparent hover:border-transparent hover:text-white uppercase" href="/app">
                    <AsciiGlitchRipple animateOn="parentHover">Start building</AsciiGlitchRipple>
                  <div className="w-3 h-3 overflow-hidden relative">
                    <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                      <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                        </path>
                      </svg>
                      <svg className="w-3 h-3 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">                  <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white"></span>
                  <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white"></span>
                  <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white"></span>
                  <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white"></span>
</span>
</a>
                </div>
                <div className="relative w-full h-50 md:h-70 lg:h-auto lg:max-w-204.75 lg:self-stretch overflow-hidden">
                  <img alt="Directioner-OS platform artwork" loading="lazy" decoding="async" className="object-cover object-center opacity-90 saturate-[1.12]" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' } as React.CSSProperties} sizes="(min-width: 1024px) 55vw, 100vw" src="/assets/nex-landing/figma/workflows-background.png" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(14,14,14,0.9)_0%,rgba(14,14,14,0.25)_40%,rgba(14,14,14,0)_100%)]" aria-hidden="true">
                  </div>
                </div>
              </section>
            </div>
          </main>
      <Footer />
    </div>
  );
}
