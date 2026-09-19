import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="pi-root min-h-screen bg-black text-white flex flex-col justify-between">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-32 pb-20 font-sans">
        <h1 className="text-3xl md:text-4xl font-light mb-4 font-favorit tracking-tight">Contact & Inquiries</h1>
        <p className="text-sm font-mono text-white/50 mb-10">Get in touch with Nexis Research, Engineering, and Partnership teams.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-white/10 p-6 bg-neutral-950 space-y-3">
            <h2 className="text-base text-white font-medium">Developer & Ecosystem</h2>
            <p className="text-xs text-white/60 leading-relaxed">For protocol integrations, Policy Kit technical queries, and RPC node infrastructure.</p>
            <a href="mailto:developers@nex-t1.ai" className="inline-block text-xs font-mono text-emerald-400 hover:underline">developers@nex-t1.ai →</a>
          </div>
          <div className="border border-white/10 p-6 bg-neutral-950 space-y-3">
            <h2 className="text-base text-white font-medium">Security & Audits</h2>
            <p className="text-xs text-white/60 leading-relaxed">Coordinated vulnerability disclosure and formal verification reports.</p>
            <a href="mailto:security@nex-t1.ai" className="inline-block text-xs font-mono text-emerald-400 hover:underline">security@nex-t1.ai →</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
