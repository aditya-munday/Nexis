import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="utility-page pi-root min-h-screen bg-black text-white flex flex-col justify-between">
      <Header />
      <main className="utility-main flex-1 max-w-6xl mx-auto w-full px-5 md:px-8 pt-32 pb-24 font-sans">
        <Reveal className="max-w-3xl">
          <p className="utility-eyebrow">CONTACT / 01</p>
          <h1 className="utility-title mt-5">Start with the operating context.</h1>
          <p className="utility-lede mt-6">Bring us the hardware, system workflow, or Aria capability you want to explore. We will route your note to the team that can actually help.</p>
        </Reveal>

        <Reveal delay={90} className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          <article className="interactive-card flex min-h-64 flex-col bg-surface p-6 md:p-7">
            <span className="utility-index">01 / BUILD</span>
            <h2 className="mt-7 text-xl text-white">Developer & ecosystem</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/55">AI Engineer capabilities, typed RPCs, desktop workflows, and platform questions.</p>
            <a href="mailto:developers@directioner-os.ai" className="utility-link mt-auto pt-7">developers@directioner-os.ai <span aria-hidden="true">↗</span></a>
          </article>
          <article className="interactive-card flex min-h-64 flex-col bg-surface p-6 md:p-7">
            <span className="utility-index">02 / SECURE</span>
            <h2 className="mt-7 text-xl text-white">Security & audits</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/55">Safety invariants, rollback proofs, killswitch behavior, and security reports.</p>
            <a href="mailto:security@directioner-os.ai" className="utility-link mt-auto pt-7">security@directioner-os.ai <span aria-hidden="true">↗</span></a>
          </article>
          <article className="interactive-card flex min-h-64 flex-col bg-surface p-6 md:p-7">
            <span className="utility-index">03 / PARTNER</span>
            <h2 className="mt-7 text-xl text-white">Teams & partnerships</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/55">Beta access, hardware validation, fleet deployment, and strategic partnerships.</p>
            <a href="mailto:partners@directioner-os.ai" className="utility-link mt-auto pt-7">partners@directioner-os.ai <span aria-hidden="true">↗</span></a>
          </article>
        </Reveal>

        <Reveal delay={150} className="mt-12 grid gap-px border border-border bg-border md:grid-cols-[1.35fr_0.65fr]">
          <div className="bg-surface p-6 md:p-8">
            <p className="utility-eyebrow">A GOOD FIRST NOTE</p>
            <p className="mt-5 max-w-2xl text-xl leading-snug text-white/80">Tell us what should be autonomous, where the safety boundary sits, and how Aria or the AI Engineer should explain the result.</p>
          </div>
          <div className="flex flex-col justify-between bg-surface-card p-6 md:p-8">
            <span className="utility-index">RESPONSE WINDOW</span>
            <p className="font-mono text-sm text-[#85ed75]">01–02 BUSINESS DAYS</p>
          </div>
        </Reveal>
        <Reveal delay={210} className="mt-12 max-w-2xl">
          <ContactForm />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
