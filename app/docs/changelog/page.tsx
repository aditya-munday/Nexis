import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RELEASES = [
  {
    version: "v0.9.4",
    date: "March 12, 2026",
    title: "Autonomous Enclave Hardening & Universal Gas Oracle",
    summary: "Production security upgrade isolating transaction simulation within hardened WebAssembly enclaves, plus unified cross-chain fee estimation across all 10 supported networks.",
    features: [
      "Hardware enclave isolation for model execution loops",
      "Unified SVM & EVM gas and priority fee estimator",
      "Parallel fork state simulation reduces preflight latency by 45%",
      "Added support for Unichain and Gnosis Chain settlement"
    ]
  },
  {
    version: "v0.9.0",
    date: "February 18, 2026",
    title: "PolicyKit v2 Declarative Boundaries",
    summary: "Complete overhaul of the policy specification DSL. Policies now compile into non-bypassable bytecode verified at the signing edge.",
    features: [
      "Declarative TOML and TypeScript policy definitions",
      "Dynamic multi-sig threshold approvals triggered by spend volume",
      "Recipient allowlists with automatic ENS and Solana Name resolution",
      "Instant rollback triggers on unexpected slippage or liquidity shocks"
    ]
  },
  {
    version: "v0.8.2",
    date: "January 24, 2026",
    title: "NexBench v1 Suite & Leaderboard Intake",
    summary: "Public launch of the NEXBENCH empirical evaluation framework for testing agent financial tool-use on deterministic network forks.",
    features: [
      "Released open-source @nexis/nexbench-cli harness",
      "Added 12 standard DeFi scenarios (swaps, borrows, sweeps, rebalances)",
      "Automated cryptographic run verification and leaderboard intake"
    ]
  },
  {
    version: "v0.7.0",
    date: "November 14, 2025",
    title: "Nexis Control Layer Alpha",
    summary: "Initial public release of the Nexis autonomous execution engine and embedded developer SDK.",
    features: [
      "Initial plan-simulate-approve-reconcile loop",
      "Embedded wallet support with Turnkey and MPC enclave signers",
      "Developer documentation and REST/WebSocket streaming API"
    ]
  }
];

export default function ChangelogPage() {
  return (
    <div className="pi-root min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <div className="pt-20">
        <main role="main">
          <div className="pi-root chivo_mono_2296ff99-module__wnMkSa__variable min-h-screen bg-surface text-foreground antialiased [overflow-x:clip]">
            <div className="max-w-360 mx-auto px-4 md:px-5">
              <div className="min-h-screen pt-24 pb-16 md:pt-28 md:pb-24 xl:pt-32">
                <header className="relative overflow-hidden border border-border">
                  <div className="relative z-10 flex flex-col gap-6 p-5 md:gap-9 md:p-8 lg:min-h-[220px] lg:justify-center">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-favorit text-xs uppercase leading-none tracking-4 text-white/45">
                      <span className="flex items-center gap-2">
                        <a href="/docs" className="hover:text-white transition-colors">Docs</a>
                        <span>/</span>
                        <span className="text-white/70">Changelog</span>
                      </span>
                    </nav>
                    <h1 className="max-w-4xl font-sans text-[28px] leading-[1.14] tracking-tight md:text-[38px] md:leading-[1.08]">
                      <span className="text-white/90">Product Changelog</span>{" "}
                      <span className="text-white/45">— Releases &amp; Runtime Updates</span>
                    </h1>
                    <p className="max-w-2xl text-base leading-relaxed text-text-mute md:text-lg">
                      Chronological log of protocol improvements, runtime updates, SDK changes, and security patches to the Nexis autonomy stack.
                    </p>
                  </div>
                </header>

                <section className="border-t border-border py-12 md:py-16">
                  <div className="flex flex-col gap-12 max-w-4xl">
                    {RELEASES.map((rel) => (
                      <article key={rel.version} className="border border-border p-6 md:p-8 bg-surface">
                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
                          <div className="flex items-center gap-3">
                            <span className="font-favorit text-sm uppercase px-2 py-1 bg-white/10 text-white font-medium">
                              {rel.version}
                            </span>
                            <h2 className="font-sans text-xl text-white font-medium">{rel.title}</h2>
                          </div>
                          <time className="font-favorit text-xs uppercase tracking-4 text-white/45">{rel.date}</time>
                        </div>
                        <p className="mt-4 text-base leading-relaxed text-text-mute">{rel.summary}</p>
                        <div className="mt-6">
                          <h3 className="font-favorit text-xs uppercase tracking-4 text-white/50">Highlights &amp; Fixes</h3>
                          <ul className="mt-3 flex flex-col gap-2 font-sans text-sm text-white/80">
                            {rel.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#85ed75] font-mono">→</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
