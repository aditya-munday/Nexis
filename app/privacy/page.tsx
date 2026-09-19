import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="pi-root min-h-screen bg-black text-white flex flex-col justify-between">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-32 pb-20 font-sans">
        <h1 className="text-3xl md:text-4xl font-light mb-6 font-favorit tracking-tight">Privacy Policy</h1>
        <p className="text-sm font-mono text-white/50 mb-10">Last updated: September 2026</p>
        <div className="space-y-8 text-white/80 leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="text-lg text-white font-medium">1. Data Minimization</h2>
            <p>Nexis is architected on data minimization principles. We do not collect, sell, or monetize personally identifiable information, IP addresses, or wallet history.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg text-white font-medium">2. Client-Side Cryptography</h2>
            <p>All sensitive credentials, session keys, and policy definitions are stored encrypted locally on your device or hardware authenticator.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg text-white font-medium">3. On-Chain Transparency</h2>
            <p>Transactions submitted through Nexis are publicly recorded on the respective blockchain ledgers in accordance with the underlying decentralized protocol specifications.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
