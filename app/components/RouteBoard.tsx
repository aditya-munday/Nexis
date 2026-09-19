"use client";

import React, { useState } from "react";

interface RouteQuote {
  pair: string;
  venue: string;
  status: string;
  price: string;
  spot?: string;
  stats: string[];
  active?: boolean;
}

const SWAP_ROUTES: RouteQuote[][] = [
  [
    { pair: "USDC → ETH", venue: "ethereum", status: "Streaming", price: "4.2 BPS", stats: ["0.09% slip", "31s settle", "depth ok"], active: false },
    { pair: "USDC → ETH", venue: "arbitrum", status: "Streaming", price: "3.1 BPS", stats: ["0.07% slip", "19s settle", "depth ok"], active: false },
    { pair: "USDC → ETH", venue: "optimism", status: "Streaming", price: "3.8 BPS", stats: ["0.08% slip", "22s settle", "depth ok"], active: false },
    { pair: "USDC → ETH", venue: "polygon", status: "Streaming", price: "5.0 BPS", stats: ["0.12% slip", "40s settle", "depth low"], active: false },
  ],
  [
    { pair: "USDC → ETH", venue: "base", status: "Best route", price: "1.9 BPS", spot: "Gas 0.4 gwei", stats: ["0.04% slip", "12s settle", "depth deep"], active: true },
    { pair: "ETH → SOL", venue: "wormhole", status: "Best route", price: "2.6 BPS", stats: ["0.06% slip", "48s settle", "depth ok"], active: true },
    { pair: "USDC → BTC", venue: "thorchain", status: "Best route", price: "4.4 BPS", stats: ["0.09% slip", "4m settle", "depth ok"], active: true },
    { pair: "DAI → USDC", venue: "curve", status: "Best route", price: "0.4 BPS", spot: "Spot 0.9998", stats: ["0.01% slip", "14s settle", "depth deep"], active: true },
  ],
  [
    { pair: "SOL → USDC", venue: "jupiter", status: "Streaming", price: "2.2 BPS", stats: ["0.05% slip", "9s settle", "depth deep"], active: false },
    { pair: "ETH → USDT", venue: "uniswap", status: "Streaming", price: "2.9 BPS", stats: ["0.06% slip", "16s settle"], active: false },
    { pair: "WBTC → ETH", venue: "ethereum", status: "Streaming", price: "3.6 BPS", stats: ["0.08% slip", "28s settle"], active: false },
    { pair: "USDC → SUI", venue: "sui bridge", status: "Streaming", price: "6.1 BPS", stats: ["0.14% slip", "2m settle"], active: false },
  ],
];

const BRIDGE_ROUTES: RouteQuote[][] = [
  [
    { pair: "ETH → ARB", venue: "arbitrum bridge", status: "Streaming", price: "1.2 BPS", stats: ["0.01% slip", "10m settle"], active: false },
    { pair: "USDC → OP", venue: "superchain", status: "Streaming", price: "1.5 BPS", stats: ["0.02% slip", "2m settle"], active: false },
  ],
  [
    { pair: "USDC → BASE", venue: "cctp", status: "Best bridge", price: "0.2 BPS", spot: "Native mint", stats: ["0.00% slip", "18s settle"], active: true },
    { pair: "SOL → BASE", venue: "deBridge", status: "Best bridge", price: "2.1 BPS", stats: ["0.04% slip", "45s settle"], active: true },
  ],
  [
    { pair: "AVAX → ETH", venue: "across", status: "Streaming", price: "2.8 BPS", stats: ["0.05% slip", "3m settle"], active: false },
    { pair: "MATIC → POL", venue: "polygon pos", status: "Streaming", price: "3.4 BPS", stats: ["0.08% slip", "15m settle"], active: false },
  ],
];

export default function RouteBoard() {
  const [tab, setTab] = useState<"swap" | "bridge">("swap");
  const columns = tab === "swap" ? SWAP_ROUTES : BRIDGE_ROUTES;

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#090909]">
      <div className="flex items-center justify-between border-b border-border/70 px-5 py-3">
        <p className="text-2xs text-white/25 uppercase font-favorit">FIG.6</p>
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
          <span className="size-1.5 rounded-full bg-[#85ed75] shadow-[0_0_8px_rgba(133,237,117,0.75)]" />
          12 venues live
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-5 pb-5 pt-4">
        {/* Toggle Switch */}
        <div className="mb-4 ml-auto flex w-92 border border-border bg-black/40 p-0.5">
          <button
            type="button"
            onClick={() => setTab("swap")}
            className={`flex flex-1 min-w-0 items-center justify-center gap-2 px-2 py-2 font-mono text-xs uppercase transition-colors cursor-pointer ${
              tab === "swap" ? "bg-white/10 text-white font-medium shadow-sm" : "text-white/40 hover:text-white/70"
            }`}
          >
            <span className={`inline-block size-1.5 rounded-full ${tab === "swap" ? "bg-[#85ed75]" : "bg-transparent"}`} />
            <span>Swap Routes</span>
          </button>
          <button
            type="button"
            onClick={() => setTab("bridge")}
            className={`flex flex-1 min-w-0 items-center justify-center gap-2 px-2 py-2 font-mono text-xs uppercase transition-colors cursor-pointer ${
              tab === "bridge" ? "bg-white/10 text-white font-medium shadow-sm" : "text-white/40 hover:text-white/70"
            }`}
          >
            <span className={`inline-block size-1.5 rounded-full ${tab === "bridge" ? "bg-[#85ed75]" : "bg-transparent"}`} />
            <span>Bridge Routes</span>
          </button>
        </div>

        {/* Route Quotes Matrix */}
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
                      <span>Route {String(routeIdx + 1).padStart(2, "0")}</span>
                      <span className={route.active ? "text-[#85ed75]/80" : "text-white/30"}>{route.active ? "Selected" : "Quote"}</span>
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
