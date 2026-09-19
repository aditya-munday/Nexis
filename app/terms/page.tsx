import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function TermsPage() {
  return (
    <div className="utility-page pi-root min-h-screen bg-black text-white flex flex-col justify-between">
      <Header />
      <main className="utility-main flex-1 max-w-6xl mx-auto w-full px-5 md:px-8 pt-32 pb-24 font-sans">
        <Reveal className="max-w-3xl">
          <p className="utility-eyebrow">TERMS / 01</p>
          <h1 className="utility-title mt-5">Control stays with the operator.</h1>
          <p className="utility-lede mt-6">Nexis provides the system for governed execution. You retain the keys, decide the policies, and authorize every boundary.</p>
          <p className="mt-7 font-mono text-xs uppercase tracking-[0.14em] text-white/35">Last updated / September 2026</p>
        </Reveal>

        <Reveal delay={90} className="mt-12 divide-y divide-border border border-border bg-surface">
          <section className="policy-row"><span className="utility-index">01</span><div><h2>Non-custodial protocol</h2><p>Nexis provides infrastructure, tooling, and agents for blockchain protocols. You retain unilateral control of private keys, smart-contract wallets, and transaction authorizations at all times.</p></div></section>
          <section className="policy-row"><span className="utility-index">02</span><div><h2>Autonomous execution</h2><p>Agent actions follow the Policy Kit thresholds configured by the operator. Simulations are provided before signing, and the operator remains responsible for each on-chain transaction they authorize.</p></div></section>
          <section className="policy-row"><span className="utility-index">03</span><div><h2>Risk & availability</h2><p>Nexis is provided as-is without warranties. Blockchain congestion, market volatility, and third-party protocol vulnerabilities remain risks of on-chain activity.</p></div></section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
