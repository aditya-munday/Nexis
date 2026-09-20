"use client";

import React, { useState } from "react";

interface CapabilityEvaluation {
  pair: string;
  venue: string;
  status: string;
  price: string;
  spot?: string;
  stats: string[];
  active?: boolean;
}

const MUTATION_PLANS: CapabilityEvaluation[][] = [
  [
    { pair: "driver → staged", venue: "planner", status: "Proposed", price: "TIER 0", stats: ["score 08", "rollback ready", "scope valid"], active: false },
    { pair: "service → reviewed", venue: "policy engine", status: "Proposed", price: "TIER 1", stats: ["score 24", "rollback ready", "scope valid"], active: false },
    { pair: "package → tested", venue: "reviewer", status: "Proposed", price: "TIER 2", stats: ["score 48", "review required", "scope valid"], active: false },
    { pair: "kernel → isolated", venue: "reviewer", status: "Blocked", price: "TIER 3", stats: ["score 78", "expert review", "red line"], active: false },
  ],
  [
    { pair: "update → verified", venue: "implementer", status: "Selected", price: "SCORE 18", spot: "Rollback READY", stats: ["policy pass", "0.4s verify", "scope valid"], active: true },
    { pair: "driver → verified", venue: "sandbox", status: "Selected", price: "SCORE 26", stats: ["policy pass", "1.2s verify", "scope valid"], active: true },
    { pair: "service → verified", venue: "watchdog", status: "Selected", price: "SCORE 42", stats: ["review pass", "2.4s verify", "rollback ready"], active: true },
    { pair: "kernel → held", venue: "reviewer", status: "Selected", price: "SCORE 72", spot: "Expert review", stats: ["red line checked", "no mutation", "audit ready"], active: true },
  ],
  [
    { pair: "health → monitored", venue: "ai-cockpit", status: "Streaming", price: "CPU 42%", stats: ["memory nominal", "thermal nominal", "log active"], active: false },
    { pair: "package → staged", venue: "world model", status: "Streaming", price: "READY", stats: ["snapshot valid", "dependencies clear"], active: false },
    { pair: "workspace → synced", venue: "Aria", status: "Streaming", price: "ONLINE", stats: ["screen local", "voice local"], active: false },
    { pair: "boot slot → pinned", venue: "watchdog", status: "Streaming", price: "A/B GOOD", stats: ["zero loss", "recovery armed"], active: false },
  ],
];

const RECOVERY_PATHS: CapabilityEvaluation[][] = [
  [
    { pair: "snapshot → active", venue: "boot slot A", status: "Streaming", price: "PINNED", stats: ["verified", "watchdog armed"], active: false },
    { pair: "update → sandbox", venue: "boot slot B", status: "Streaming", price: "STAGED", stats: ["isolated", "rollback ready"], active: false },
  ],
  [
    { pair: "active → recovery", venue: "watchdog", status: "Best recovery", price: "0.38ms", spot: "Zero loss", stats: ["A/B pinned", "user-space safe"], active: true },
    { pair: "mutation → rollback", venue: "auditor", status: "Best recovery", price: "READY", stats: ["compensating step", "Work Log entry"], active: true },
  ],
  [
    { pair: "service → safe", venue: "killswitch", status: "Streaming", price: "HALTED", stats: ["SIGKILL", "under 0.4ms"], active: false },
    { pair: "model → explain", venue: "Aria", status: "Streaming", price: "DEPTH 3", stats: ["diff ready", "proof ready"], active: false },
  ],
];

export default function RouteBoard() {
  const [tab, setTab] = useState<"mutations" | "recovery">("mutations");
  const columns = tab === "mutations" ? MUTATION_PLANS : RECOVERY_PATHS;

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#090909]">
      <div className="flex items-center justify-between border-b border-border/70 px-5 py-3">
        <p className="text-2xs text-white/25 uppercase font-favorit">FIG.6</p>
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
          <span className="size-1.5 rounded-full bg-[#85ed75] shadow-[0_0_8px_rgba(133,237,117,0.75)]" />
          12 capabilities live
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-5 pb-5 pt-4">
        {/* Toggle Switch */}
        <div className="mb-4 ml-auto flex w-92 border border-border bg-black/40 p-0.5">
          <button
            type="button"
            onClick={() => setTab("mutations")}
            className={`flex flex-1 min-w-0 items-center justify-center gap-2 px-2 py-2 font-mono text-xs uppercase transition-colors cursor-pointer ${
              tab === "mutations" ? "bg-white/10 text-white font-medium shadow-sm" : "text-white/40 hover:text-white/70"
            }`}
          >
            <span className={`inline-block size-1.5 rounded-full ${tab === "mutations" ? "bg-[#85ed75]" : "bg-transparent"}`} />
            <span>Mutation Plans</span>
          </button>
          <button
            type="button"
            onClick={() => setTab("recovery")}
            className={`flex flex-1 min-w-0 items-center justify-center gap-2 px-2 py-2 font-mono text-xs uppercase transition-colors cursor-pointer ${
              tab === "recovery" ? "bg-white/10 text-white font-medium shadow-sm" : "text-white/40 hover:text-white/70"
            }`}
          >
            <span className={`inline-block size-1.5 rounded-full ${tab === "recovery" ? "bg-[#85ed75]" : "bg-transparent"}`} />
            <span>Recovery Paths</span>
          </button>
        </div>

        {/* Capability evaluation matrix */}
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden">
          <div className="flex h-full min-h-0 w-full justify-center gap-3 overflow-x-auto pb-0 transition-all duration-300">
            {columns.map((col, colIdx) => (
              <div
                key={colIdx}
                className={`w-72 md:w-80 shrink-0 flex h-full min-h-0 flex-col transition-opacity duration-300 ${
                  colIdx === 1 ? "opacity-100" : "opacity-35 hover:opacity-80"
                }`}
              >
                {col.map((route, routeIdx) => (
                  <div
                    key={routeIdx}
                    className={`relative flex min-h-0 flex-1 flex-col justify-between border -mt-px first:mt-0 p-3.5 font-sans backdrop-blur-sm transition-all ${
                      route.active
                        ? "border-[#85ed75]/45 bg-[linear-gradient(135deg,rgba(133,237,117,0.09),rgba(17,17,17,0.92)_42%)] shadow-[inset_0_0_28px_rgba(133,237,117,0.045)]"
                        : "border-border bg-[#111111]/70 hover:border-white/20 hover:bg-[#151515]"
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-white/25">
                      <span>Evaluation {String(routeIdx + 1).padStart(2, "0")}</span>
                      <span className={route.active ? "text-[#85ed75]/80" : "text-white/30"}>{route.active ? "Selected" : "Evaluated"}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5">
                        <div className="flex flex-col gap-1">
                          <p className="text-xs font-mono font-medium text-white leading-none whitespace-nowrap">
                            {route.pair}
                          </p>
                          <div className="flex items-center gap-1.5 pt-0.5">
                            <span className={`text-[10px] font-mono leading-none ${route.active ? "text-[#85ed75]" : "text-white/40"}`}>
                              {route.status}
                            </span>
                            <span className="text-[10px] text-white/30 leading-none">· {route.venue}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <p className="text-xs font-mono font-semibold text-white leading-none whitespace-nowrap">
                          {route.price}
                        </p>
                        {route.spot && (
                          <p className="text-[10px] font-mono text-[#85ed75] leading-none whitespace-nowrap">
                            {route.spot}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 border-t border-white/8 pt-2.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[10px] font-mono text-white/40">
                      {route.stats.map((s, idx) => (
                        <span key={idx} className="contents">
                          {idx > 0 && <span className="text-white/20">·</span>}
                          <span className={idx === 0 ? "text-white/70" : "text-white/40"}>{s}</span>
                        </span>
                      ))}
                    </div>
                    {route.active && (
                      <div className="mt-2 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wide text-white/30">
                        <span className="h-px flex-1 bg-[#85ed75]/25" />
                        policy verified
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
