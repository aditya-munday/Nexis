import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function PrivacyPage() {
  return (
    <div className="utility-page pi-root min-h-screen bg-black text-white flex flex-col justify-between">
      <Header />
      <main className="utility-main flex-1 max-w-6xl mx-auto w-full px-5 md:px-8 pt-32 pb-24 font-sans">
        <Reveal className="max-w-3xl">
          <p className="utility-eyebrow">PRIVACY / 01</p>
          <h1 className="utility-title mt-5">Privacy by architecture.</h1>
          <p className="utility-lede mt-6">Directioner-OS is local-first by architecture: system health, the SQLite World Model, capability scoring, and the killswitch remain under your control.</p>
          <p className="mt-7 font-mono text-xs uppercase tracking-[0.14em] text-white/35">Last updated / September 2026</p>
        </Reveal>

        <Reveal delay={90} className="mt-12 divide-y divide-border border border-border bg-surface">
          <section className="policy-row"><span className="utility-index">01</span><div><h2>Local-first intelligence</h2><p>Core health checks, blast-radius scoring, the SQLite World Model, and the Work Log run locally. Screen context and voice audio are not uploaded to advertising networks.</p></div></section>
          <section className="policy-row"><span className="utility-index">02</span><div><h2>Capability isolation</h2><p>AI reasoning is separated from privileged mutation through typed, auditable capability RPCs over a local Unix domain socket. Directioner-OS never relies on arbitrary shell execution.</p></div></section>
          <section className="policy-row"><span className="utility-index">03</span><div><h2>Operator sovereignty</h2><p>The physical and file-based ai-killswitch can halt capability pipelines in under 0.4 milliseconds. Advanced cloud models remain optional through the Aria Pro tier.</p></div></section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
