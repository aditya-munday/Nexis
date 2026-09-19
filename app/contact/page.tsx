import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function ContactPage() {
  return (
    <div className="utility-page pi-root min-h-screen bg-black text-white flex flex-col justify-between">
      <Header />
      <main className="utility-main flex-1 max-w-6xl mx-auto w-full px-5 md:px-8 pt-32 pb-24 font-sans">
        <Reveal className="max-w-3xl">
          <p className="utility-eyebrow">CONTACT / 01</p>
          <h1 className="utility-title mt-5">Start with the operating context.</h1>
          <p className="utility-lede mt-6">Bring us the chain, the policy boundary, and the workflow you want to govern. We will route your note to the team that can actually help.</p>
        </Reveal>

        <Reveal delay={90} className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          <article className="interactive-card flex min-h-64 flex-col bg-surface p-6 md:p-7">
            <span className="utility-index">01 / BUILD</span>
            <h2 className="mt-7 text-xl text-white">Developer & ecosystem</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/55">Protocol integrations, Policy Kit design, and infrastructure questions.</p>
            <a href="mailto:developers@nex-t1.ai" className="utility-link mt-auto pt-7">developers@nex-t1.ai <span aria-hidden="true">↗</span></a>
          </article>
          <article className="interactive-card flex min-h-64 flex-col bg-surface p-6 md:p-7">
            <span className="utility-index">02 / SECURE</span>
            <h2 className="mt-7 text-xl text-white">Security & audits</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/55">Coordinated disclosure, audit review, and formal-verification reports.</p>
            <a href="mailto:security@nex-t1.ai" className="utility-link mt-auto pt-7">security@nex-t1.ai <span aria-hidden="true">↗</span></a>
          </article>
          <article className="interactive-card flex min-h-64 flex-col bg-surface p-6 md:p-7">
            <span className="utility-index">03 / PARTNER</span>
            <h2 className="mt-7 text-xl text-white">Teams & partnerships</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/55">Treasury operations, pilots, research, and strategic partnerships.</p>
            <a href="mailto:partners@nex-t1.ai" className="utility-link mt-auto pt-7">partners@nex-t1.ai <span aria-hidden="true">↗</span></a>
          </article>
        </Reveal>

        <Reveal delay={150} className="mt-12 grid gap-px border border-border bg-border md:grid-cols-[1.35fr_0.65fr]">
          <div className="bg-surface p-6 md:p-8">
            <p className="utility-eyebrow">A GOOD FIRST NOTE</p>
            <p className="mt-5 max-w-2xl text-xl leading-snug text-white/80">Tell us what should be autonomous, where the approval boundary sits, and how you need outcomes reconciled.</p>
          </div>
          <div className="flex flex-col justify-between bg-surface-card p-6 md:p-8">
            <span className="utility-index">RESPONSE WINDOW</span>
            <p className="font-mono text-sm text-[#85ed75]">01–02 BUSINESS DAYS</p>
          </div>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
