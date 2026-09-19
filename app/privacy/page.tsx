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
          <p className="utility-lede mt-6">Nexis is built to minimize the information it needs, while keeping the proofs you need to inspect execution.</p>
          <p className="mt-7 font-mono text-xs uppercase tracking-[0.14em] text-white/35">Last updated / September 2026</p>
        </Reveal>

        <Reveal delay={90} className="mt-12 divide-y divide-border border border-border bg-surface">
          <section className="policy-row"><span className="utility-index">01</span><div><h2>Data minimization</h2><p>Nexis does not collect, sell, or monetize personally identifiable information, IP addresses, or wallet history. The system is designed to use only what is necessary to prepare and reconcile an operation.</p></div></section>
          <section className="policy-row"><span className="utility-index">02</span><div><h2>Client-side cryptography</h2><p>Sensitive credentials, session keys, and policy definitions remain encrypted on your device or hardware authenticator. Nexis does not take custody of your signing authority.</p></div></section>
          <section className="policy-row"><span className="utility-index">03</span><div><h2>On-chain transparency</h2><p>Transactions submitted through Nexis are recorded by their respective public networks. That transparency is a property of blockchain settlement, not an additional data product sold by Nexis.</p></div></section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
