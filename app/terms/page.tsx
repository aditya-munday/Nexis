import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <div className="pi-root min-h-screen bg-black text-white flex flex-col justify-between">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-32 pb-20 font-sans">
        <h1 className="text-3xl md:text-4xl font-light mb-6 font-favorit tracking-tight">Terms of Service</h1>
        <p className="text-sm font-mono text-white/50 mb-10">Last updated: September 2026</p>
        <div className="space-y-8 text-white/80 leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="text-lg text-white font-medium">1. Non-Custodial Protocol</h2>
            <p>Nexis provides infrastructure, tooling, and agents for interacting with decentralized blockchain protocols. Nexis is non-custodial; you maintain unilateral control over your private keys, smart contract wallets, and transaction authorizations at all times.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg text-white font-medium">2. Autonomous Agent Execution</h2>
            <p>Actions performed by autonomous agents conform strictly to the Policy Kit thresholds configured by the user. Simulations are provided prior to cryptographic signing, and users bear responsibility for all executed on-chain transactions.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg text-white font-medium">3. Limitation of Liability</h2>
            <p>Nexis is provided as-is without warranties of any kind. Nexis shall not be liable for losses resulting from blockchain network congestion, smart contract vulnerabilities, or market volatility.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
