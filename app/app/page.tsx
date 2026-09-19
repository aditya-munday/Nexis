"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppPage() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [activeTab, setActiveTab] = useState("copilot");

  return (
    <div className="pi-root min-h-screen bg-black text-white flex flex-col justify-between selection:bg-white selection:text-black">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-28 pb-16">
        <div className="w-full max-w-2xl border border-white/10 bg-neutral-950 p-6 md:p-8 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <img src="/assets/logo-new.svg" alt="Nexis" className="h-4 w-auto [filter:invert(1)]" />
              <span className="text-xs font-mono text-white/40 uppercase tracking-wider">Console v1.0</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Mainnet Active
            </span>
          </div>

          <div className="flex gap-2 border-b border-white/10 pb-4 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("copilot")}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                activeTab === "copilot" ? "bg-white text-black font-semibold" : "text-white/60 hover:text-white"
              }`}
            >
              Copilot Interface
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("wallets")}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                activeTab === "wallets" ? "bg-white text-black font-semibold" : "text-white/60 hover:text-white"
              }`}
            >
              Embedded Wallets
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("policies")}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                activeTab === "policies" ? "bg-white text-black font-semibold" : "text-white/60 hover:text-white"
              }`}
            >
              Policy Rules
            </button>
          </div>

          <div className="font-mono text-xs space-y-4">
            <div className="p-4 bg-neutral-900 border border-white/5 space-y-2">
              <p className="text-white/40">[agent-runtime] Initializing governed session...</p>
              <p className="text-white/80">Policy Kit status: ENFORCING (limits: $25k daily, multisig approvals above $1k)</p>
              <p className="text-emerald-400">Connected Chains: 10 (Arbitrum, BNB, Base, BTC, ETH, OP, MATIC, SEI, SOL, SUI)</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setWalletConnected(!walletConnected)}
                className="w-full sm:w-auto px-5 py-2.5 bg-white text-black font-mono text-xs uppercase font-semibold hover:bg-white/90 transition-colors"
              >
                {walletConnected ? "Disconnect Wallet (0x7F...3B9)" : "Connect Passkey / Wallet"}
              </button>

              <a
                href="/docs"
                className="text-xs font-mono text-white/50 hover:text-white underline underline-offset-4"
              >
                View Protocol Documentation →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
