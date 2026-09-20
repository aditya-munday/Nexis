"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

type ReviewMode = "explain" | "repair";

type Activity = {
  time: string;
  label: string;
  detail: string;
  status: "verified" | "review" | "staged";
};

const SYSTEM_STATE = [
  { name: "System", symbol: "PLAN", color: "#a78bfa", latency: "284ms", health: "nominal", value: "42%" },
  { name: "Memory", symbol: "RECOVER", color: "#4f8cff", latency: "116ms", health: "nominal", value: "38%" },
  { name: "Workspace", symbol: "IO", color: "#a78bfa", latency: "91ms", health: "nominal", value: "91%" },
  { name: "Hardware", symbol: "TMP", color: "#5ba6ff", latency: "138ms", health: "nominal", value: "31°C" },
];

const EXPLANATION_MODELS = [
  { venue: "Planner", route: "driver update → verified", receive: "scope valid", impact: "18 / 100", eta: "12s", score: 98 },
  { venue: "Policy Engine", route: "driver update → verified", receive: "policy pass", impact: "24 / 100", eta: "9s", score: 94 },
  { venue: "Reviewer", route: "driver update → verified", receive: "review ready", impact: "42 / 100", eta: "14s", score: 87 },
];

const RECOVERY_MODELS = [
  { venue: "Implementer", route: "service repair → verified", receive: "rollback ready", impact: "18 / 100", eta: "18s", score: 99 },
  { venue: "Auditor", route: "service repair → verified", receive: "Work Log ready", impact: "42 / 100", eta: "42s", score: 92 },
  { venue: "Watchdog", route: "service repair → verified", receive: "recovery armed", impact: "61 / 100", eta: "35s", score: 88 },
];

const ACTIVITY: Activity[] = [
  { time: "14:32:08", label: "System health check", detail: "SQLite World Model · local snapshot", status: "verified" },
  { time: "14:25:41", label: "Policy update", detail: "tier threshold reviewed", status: "review" },
  { time: "14:18:16", label: "Update preflight", detail: "Kernel update · 3 rollback checks", status: "staged" },
  { time: "13:54:09", label: "Recovery rehearsal", detail: "watchdog · Work Log entry #0048", status: "verified" },
];

function CornerFrame() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
      <span className="absolute left-0 top-0 size-2 border-l border-t border-[#85ed75]" />
      <span className="absolute right-0 top-0 size-2 border-r border-t border-[#85ed75]" />
      <span className="absolute bottom-0 left-0 size-2 border-b border-l border-[#85ed75]" />
      <span className="absolute bottom-0 right-0 size-2 border-b border-r border-[#85ed75]" />
    </span>
  );
}

function StatusDot({ status }: { status: Activity["status"] }) {
  const color = status === "verified" ? "bg-[#85ed75]" : status === "review" ? "bg-[#ffd36a]" : "bg-[#7cb8ff]";
  return <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${color}`} aria-hidden="true" />;
}

export default function AppPage() {
  const [mode, setMode] = useState<ReviewMode>("explain");
  const [selectedQuote, setSelectedQuote] = useState(0);
  const [activeSystem, setActiveSystem] = useState("Memory");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const quotes = mode === "explain" ? EXPLANATION_MODELS : RECOVERY_MODELS;
  const selected = quotes[selectedQuote] ?? quotes[0];
  const selectedSystem = useMemo(() => SYSTEM_STATE.find((system) => system.name === activeSystem) ?? SYSTEM_STATE[1]!, [activeSystem]);

  return (
    <div className="app-command-page min-h-screen bg-[#070707] text-white">
      <Header />
      <main className="command-main mx-auto w-full px-3 pb-16 sm:px-5 lg:px-7">
        <Reveal>
          <section className="command-hero overflow-hidden border border-border bg-[#0d0d0d]">
            <div className="command-noise" aria-hidden="true" />
            <div className="relative grid gap-10 p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                  <span className="inline-flex items-center gap-2 border border-[#85ed75]/30 bg-[#85ed75]/5 px-2 py-1 text-[#a6f899]"><span className="size-1.5 rounded-full bg-[#85ed75] shadow-[0_0_10px_#85ed75]" /> Runtime ready</span>
                  <span>Control plane / preview</span>
                </div>
                <h1 className="command-title mt-6 max-w-4xl font-sans font-normal text-white">Autonomous maintenance. Zero hallucinations.</h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">Inspect intent, test the capability against current state, and let policy decide exactly where an AI Engineer must stop and ask.</p>
              </div>
              <div className="command-stats grid grid-cols-2 border border-white/10 bg-black/25 font-mono text-[11px]">
                <div className="border-b border-r border-white/10 p-4"><span className="block text-white/35">SYSTEM HEALTH</span><span className="mt-2 block text-xl text-white">06</span></div>
                <div className="border-b border-white/10 p-4"><span className="block text-white/35">PENDING MUTATIONS</span><span className="mt-2 block text-xl text-[#85ed75]">14</span></div>
                <div className="border-r border-white/10 p-4"><span className="block text-white/35">BLAST-RADIUS SCORE</span><span className="mt-2 block text-xl text-white">128</span></div>
                <div className="p-4"><span className="block text-white/35">ROLLBACK READY</span><span className="mt-2 block text-xl text-white">99.2%</span></div>
              </div>
            </div>
          </section>
        </Reveal>

        <div className="command-grid mt-3 grid gap-3">
          <Reveal delay={60}>
            <section className="command-panel h-full p-4 md:p-5">
              <div className="flex items-center justify-between"><p className="command-label">System health</p><span className="font-mono text-[10px] text-white/30">4 / 4 LIVE</span></div>
              <div className="mt-5 space-y-1.5">
                {SYSTEM_STATE.map((system) => (
                  <button key={system.name} type="button" onClick={() => setActiveSystem(system.name)} className={`command-chain group relative flex w-full items-center gap-3 border p-3 text-left transition-all ${system.name === activeSystem ? "command-chain--active" : "border-transparent hover:border-white/14 hover:bg-white/3"}`}>
                    <span className="grid size-9 place-items-center rounded-full border border-white/10 bg-black/30 font-mono text-[10px] font-bold" style={{ color: system.color }}>{system.symbol.slice(0, 2)}</span>
                    <span className="min-w-0 flex-1"><span className="block text-sm text-white">{system.name}</span><span className="mt-0.5 block font-mono text-[10px] text-white/35">{system.latency} · {system.health}</span></span>
                    <span className="font-mono text-xs text-white/60">{system.value}</span><CornerFrame />
                  </button>
                ))}
              </div>
              <div className="mt-6 border-t border-white/8 pt-4"><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">Selected subsystem</p><div className="mt-3 flex items-center justify-between"><span className="text-sm text-white">{selectedSystem.name}</span><span className="flex items-center gap-1.5 font-mono text-[10px] text-[#85ed75]"><span className="size-1 rounded-full bg-[#85ed75]" /> System health nominal</span></div></div>
            </section>
          </Reveal>

          <Reveal delay={120}>
            <section className="command-panel overflow-hidden">
              <div className="flex flex-col gap-4 border-b border-white/8 p-4 md:flex-row md:items-center md:justify-between md:p-5"><div><p className="command-label">Mutation review</p><p className="mt-1 text-sm text-white/45">Policy-adjusted opportunities, ranked continuously.</p></div><div className="flex border border-white/10 bg-black/30 p-0.5"><button type="button" onClick={() => { setMode("explain"); setSelectedQuote(0); }} className={`command-tab ${mode === "explain" ? "command-tab--active" : ""}`}>Explain</button><button type="button" onClick={() => { setMode("repair"); setSelectedQuote(0); }} className={`command-tab ${mode === "repair" ? "command-tab--active" : ""}`}>Repair</button></div></div>
              <div className="command-quote-summary grid gap-px bg-white/8">
                <div className="bg-[#0d0d0d] p-4 md:p-5"><div className="flex items-start justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">Intent</p><p className="mt-2 font-mono text-lg text-white">{selected.route}</p></div><span className="border border-[#85ed75]/30 bg-[#85ed75]/6 px-2 py-1 font-mono text-[10px] text-[#85ed75]">STAGED</span></div><div className="mt-7 grid grid-cols-3 gap-3"><div><p className="command-metric-label">Result</p><p className="mt-1 font-mono text-xs text-white">{selected.receive}</p></div><div><p className="command-metric-label">Blast radius</p><p className="mt-1 font-mono text-xs text-white">{selected.impact}</p></div><div><p className="command-metric-label">Recovery</p><p className="mt-1 font-mono text-xs text-white">{selected.eta}</p></div></div><div className="mt-7 command-route-track"><span className="command-route-node">SYSTEM</span><span className="command-route-line" /><span className="command-route-node command-route-node--active">{mode === "explain" ? "PLAN" : "RECOVER"}</span></div></div>
                <div className="flex flex-col justify-between bg-[#101310] p-4 md:p-5"><div><p className="command-metric-label">Policy evaluation</p><p className="mt-2 text-sm leading-snug text-white">Capability is inside all current boundaries.</p></div><div className="mt-7 border-t border-[#85ed75]/15 pt-3 font-mono text-[10px] leading-relaxed text-[#a6f899]">✓ SCOPE PASS<br />✓ APPROVAL PASS<br />✓ SIMULATION PASS</div></div>
              </div>
              <div className="divide-y divide-white/8">
                {quotes.map((quote, index) => <button key={quote.venue} type="button" onClick={() => setSelectedQuote(index)} className={`group flex w-full items-center gap-3 p-4 text-left transition-colors md:px-5 ${selectedQuote === index ? "bg-white/5" : "hover:bg-white/[0.035]"}`}><span className={`grid size-5 place-items-center border font-mono text-[9px] ${selectedQuote === index ? "border-[#85ed75]/60 text-[#85ed75]" : "border-white/15 text-white/35"}`}>{String(index + 1).padStart(2, "0")}</span><span className="min-w-0 flex-1"><span className="block text-sm text-white">{quote.venue}</span><span className="mt-0.5 block font-mono text-[10px] text-white/35">{quote.impact} impact · {quote.eta} verify</span></span><span className="hidden font-mono text-[10px] text-white/35 sm:block">MODEL SCORE</span><span className="font-mono text-sm text-white">{quote.score}</span></button>)}
              </div>
            </section>
          </Reveal>

          <Reveal delay={180}>
            <section className="command-panel h-full p-4 md:p-5"><div className="flex items-center justify-between"><p className="command-label">Approval queue</p><span className="font-mono text-[10px] text-[#ffd36a]">02 WAITING</span></div><div className="mt-5 space-y-3"><article className="relative overflow-hidden border border-[#ffd36a]/25 bg-[#ffd36a]/[0.035] p-4"><span className="absolute right-3 top-3 size-1.5 rounded-full bg-[#ffd36a] shadow-[0_0_9px_#ffd36a]" /><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#ffd36a]">Approval required</p><p className="mt-3 text-sm leading-snug text-white">Approve the staged driver update after rollback review.</p><p className="mt-3 font-mono text-[10px] text-white/40">BLAST RADIUS 42 · TIER 2</p><button type="button" onClick={() => setIsPreviewOpen(true)} className="mt-5 w-full border border-white/20 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white transition-colors hover:border-[#85ed75] hover:bg-[#85ed75] hover:text-black">Inspect approval</button></article><article className="border border-white/10 bg-black/20 p-4"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">Queued policy</p><p className="mt-3 text-sm text-white/75">Watchdog recovery: armed</p><p className="mt-2 font-mono text-[10px] text-white/35">WILL RUN AT 15:00 UTC</p></article></div><Link href="/auth?mode=signin&next=/app" className="group relative mt-6 flex w-full items-center justify-between border border-white/15 px-3 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/75 transition-colors hover:border-[#85ed75] hover:text-[#85ed75]">Sign in to review <span>↗</span><CornerFrame /></Link></section>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-3">
          <section className="command-panel overflow-hidden"><div className="flex flex-col gap-3 border-b border-white/8 p-4 md:flex-row md:items-center md:justify-between md:p-5"><div><p className="command-label">Receipt stream</p><p className="mt-1 text-sm text-white/45">A reviewable record follows each decision.</p></div><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">UTC / LAST 60 MINUTES</span></div><div className="grid divide-y divide-white/8 md:grid-cols-4 md:divide-x md:divide-y-0">{ACTIVITY.map((item) => <article key={item.time} className="command-activity group relative p-4 transition-colors hover:bg-white/[0.035] md:p-5"><div className="flex gap-3"><StatusDot status={item.status} /><div><p className="font-mono text-[10px] text-white/30">{item.time}</p><p className="mt-2 text-sm text-white">{item.label}</p><p className="mt-1.5 font-mono text-[10px] leading-relaxed text-white/40">{item.detail}</p></div></div><span className="absolute bottom-4 right-4 font-mono text-[10px] uppercase text-white/20 transition-colors group-hover:text-[#85ed75]">view ↗</span></article>)}</div></section>
        </Reveal>
      </main>
      {isPreviewOpen && <div className="command-modal fixed inset-0 grid place-items-center bg-black/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Approval preview"><div className="w-full max-w-xl border border-[#85ed75]/35 bg-[#101010] shadow-[0_24px_100px_rgba(0,0,0,0.7)]"><div className="flex items-center justify-between border-b border-white/10 p-4"><span className="command-label text-[#85ed75]">Approval preview</span><button type="button" onClick={() => setIsPreviewOpen(false)} className="font-mono text-xs text-white/50 hover:text-white" aria-label="Close preview">×</button></div><div className="p-5 md:p-6"><p className="text-2xl leading-tight text-white">Approval would promote this staged mutation.</p><div className="mt-6 grid grid-cols-2 gap-px border border-white/10 bg-white/10 font-mono text-xs"><div className="bg-[#101010] p-4 text-white/50">TARGET<span className="mt-2 block text-white">display.driver</span></div><div className="bg-[#101010] p-4 text-white/50">SCOPE<span className="mt-2 block text-white">typed capability RPC</span></div><div className="bg-[#101010] p-4 text-white/50">ROLLBACK<span className="mt-2 block text-white">READY</span></div><div className="bg-[#101010] p-4 text-white/50">EXPLANATION<span className="mt-2 block text-white">DEPTH 3</span></div></div><p className="mt-5 text-sm leading-relaxed text-white/50">Sign in to authorize the capability and create a durable Work Log entry for the approval decision.</p><Link href="/auth?mode=signin&next=/app" className="mt-6 inline-flex bg-white px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-black transition-transform hover:-translate-y-0.5">Continue to review ↗</Link></div></div></div>}
      <Footer />
    </div>
  );
}
