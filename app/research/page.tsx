import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ResearchPage() {
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
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span>/</span>
                        <span className="text-white/70">Research</span>
                      </span>
                    </nav>
                    <h1 className="max-w-4xl font-sans text-[28px] leading-[1.14] tracking-tight md:text-[38px] md:leading-[1.08]">
                      <span className="text-white/90">Formal Verification &amp; Governed Simulation</span>{" "}
                      <span className="text-white/45">for Autonomous On-Chain Systems.</span>
                    </h1>
                    <p className="max-w-2xl text-base leading-relaxed text-text-mute md:text-lg">
                      Nexis Research develops the mathematical foundations, zero-knowledge constraints, and state-simulation runtimes that enable AI agents to safely transact on behalf of institutions.
                    </p>
                  </div>
                </header>

                <section className="border-t border-border py-16 md:py-24 lg:py-28">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3 font-favorit text-xs uppercase tracking-4 text-white/40">
                      <span className="tabular-nums text-white/25">01</span>
                      <span className="h-px w-6 bg-border" aria-hidden="true"></span>
                      <span>Core Research Disciplines</span>
                    </p>
                    <h2 className="max-w-3xl text-balance font-sans text-[26px] leading-[1.12] text-white sm:text-[30px] lg:text-[34px]">
                      Deterministic security guarantees for non-deterministic agents.
                    </h2>
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border md:mt-14 md:grid-cols-2 lg:grid-cols-4">
                    <article className="flex min-h-56 flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-hover md:p-7">
                      <span className="font-favorit text-xs tabular-nums text-white/30">01</span>
                      <h3 className="font-favorit text-sm uppercase tracking-4 text-white">Forked Preflight</h3>
                      <p className="text-sm leading-relaxed text-text-mute">
                        Every planned multi-hop transaction runs on an isolated, state-mirrored virtual machine before signing authority is invoked.
                      </p>
                    </article>
                    <article className="flex min-h-56 flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-hover md:p-7">
                      <span className="font-favorit text-xs tabular-nums text-white/30">02</span>
                      <h3 className="font-favorit text-sm uppercase tracking-4 text-white">Boundary Calculus</h3>
                      <p className="text-sm leading-relaxed text-text-mute">
                        Typed policy specifications compile into immutable constraint boundaries that cannot be bypassed by model hallucinations.
                      </p>
                    </article>
                    <article className="flex min-h-56 flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-hover md:p-7">
                      <span className="font-favorit text-xs tabular-nums text-white/30">03</span>
                      <h3 className="font-favorit text-sm uppercase tracking-4 text-white">Edge Approvals</h3>
                      <p className="text-sm leading-relaxed text-text-mute">
                        Hardware security module (HSM) and MPC signing keys enforce threshold approvals with cryptographic attestation.
                      </p>
                    </article>
                    <article className="flex min-h-56 flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-hover md:p-7">
                      <span className="font-favorit text-xs tabular-nums text-white/30">04</span>
                      <h3 className="font-favorit text-sm uppercase tracking-4 text-white">Receipt Proofs</h3>
                      <p className="text-sm leading-relaxed text-text-mute">
                        Execution traces, slippage metrics, gas deltas, and state updates produce tamper-evident merkle inclusion receipts.
                      </p>
                    </article>
                  </div>
                </section>

                <section className="border-t border-border py-16 md:py-24">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3 font-favorit text-xs uppercase tracking-4 text-white/40">
                      <span className="tabular-nums text-white/25">02</span>
                      <span className="h-px w-6 bg-border" aria-hidden="true"></span>
                      <span>Publications &amp; Technical Papers</span>
                    </p>
                    <h2 className="max-w-3xl text-balance font-sans text-[26px] leading-[1.12] text-white sm:text-[30px] lg:text-[34px]">
                      Open protocols and peer-reviewed architectures.
                    </h2>
                  </div>

                  <div className="mt-10 border border-border bg-border">
                    <div className="grid grid-cols-1 gap-px">
                      <div className="flex flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-card md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col gap-1.5">
                          <span className="font-favorit text-xs uppercase tracking-4 text-white/40">NEXIS-TR-2025-01</span>
                          <h3 className="font-sans text-lg text-white">Deterministic Execution Enclaves for Autonomous On-Chain Agents</h3>
                          <p className="text-sm text-text-mute">A framework for isolating model reasoning from raw cryptographic signing primitives.</p>
                        </div>
                        <a href="/docs" className="font-favorit text-xs uppercase text-white/70 hover:text-white border border-border px-3 py-1.5 shrink-0 self-start md:self-auto">Read Paper →</a>
                      </div>
                      <div className="flex flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-card md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col gap-1.5">
                          <span className="font-favorit text-xs uppercase tracking-4 text-white/40">NEXIS-TR-2025-02</span>
                          <h3 className="font-sans text-lg text-white">NexBench: Empirical Benchmarking of Financial Tool-Use in LLMs</h3>
                          <p className="text-sm text-text-mute">Comprehensive evaluation suite across 10,000 live DeFi and cross-chain execution runs.</p>
                        </div>
                        <a href="/benchmarks" className="font-favorit text-xs uppercase text-white/70 hover:text-white border border-border px-3 py-1.5 shrink-0 self-start md:self-auto">View Benchmarks →</a>
                      </div>
                      <div className="flex flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-card md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col gap-1.5">
                          <span className="font-favorit text-xs uppercase tracking-4 text-white/40">NEXIS-TR-2025-03</span>
                          <h3 className="font-sans text-lg text-white">PolicyKit Specification: Declarative Guardrails for Web3 Workflows</h3>
                          <p className="text-sm text-text-mute">Formal specification of spend limits, recipient allowlists, and time-weighted approvals.</p>
                        </div>
                        <a href="/docs/api" className="font-favorit text-xs uppercase text-white/70 hover:text-white border border-border px-3 py-1.5 shrink-0 self-start md:self-auto">Specification →</a>
                      </div>
                    </div>
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
