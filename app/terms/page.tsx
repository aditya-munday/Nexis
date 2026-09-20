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
          <p className="utility-lede mt-6">Directioner-OS provides the system for safe autonomous computing. You retain administrator authority, define capability boundaries, and authorize every high-risk mutation.</p>
          <p className="mt-7 font-mono text-xs uppercase tracking-[0.14em] text-white/35">Last updated / September 2026</p>
        </Reveal>

        <Reveal delay={90} className="mt-12 divide-y divide-border border border-border bg-surface">
          <section className="policy-row"><span className="utility-index">01</span><div><h2>Operator authority</h2><p>Directioner-OS provides infrastructure, tooling, and a resident AI Engineer. You retain unilateral control of administrator authority and system mutation authorizations at all times.</p></div></section>
          <section className="policy-row"><span className="utility-index">02</span><div><h2>Autonomous execution</h2><p>AI Engineer actions follow the four autonomy tiers and five-stage verification pipeline configured by the operator. Every mutation includes a blast-radius assessment and compensating rollback step.</p></div></section>
          <section className="policy-row"><span className="utility-index">03</span><div><h2>Risk & availability</h2><p>Directioner-OS is provided as-is without warranties. Hardware compatibility, driver behavior, model availability, and third-party software remain operational risks.</p></div></section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
