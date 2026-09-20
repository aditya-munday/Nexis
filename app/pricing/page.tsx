import Header from "../components/Header";
import Footer from "../components/Footer";

const plans = [
  {
    name: "Core",
    eyebrow: "FREE / OPEN BETA",
    description: "The Directioner-OS Core runtime for local-first experimentation and capability development.",
    includes: ["Local capability control plane", "SQLite World Model", "Append-only Work Log", "Autonomy tiers 0–3", "Physical and file killswitch support"],
    action: "Join the Core beta",
  },
  {
    name: "Aria Pro",
    eyebrow: "PROPOSED / CONFIGURABLE",
    description: "A proposed paid tier for teams that need Aria Pro and optional cloud-assisted intelligence with local guardrails.",
    includes: ["Everything in Core", "Aria multimodal assistant", "Optional cloud model routing", "Team policy profiles", "Priority release channel"],
    action: "Request Pro access",
  },
];

export default function PricingPage() {
  return (
    <div className="utility-page pi-root min-h-screen bg-black text-white flex flex-col justify-between">
      <Header />
      <main className="utility-main flex-1 max-w-6xl mx-auto w-full px-5 md:px-8 pt-32 pb-24 font-sans">
        <div className="max-w-3xl">
          <p className="utility-eyebrow">PRICING / PROPOSED</p>
          <h1 className="utility-title mt-5">Choose the operating boundary.</h1>
          <p className="utility-lede mt-6">These are proposed product tiers, not active commercial offers. Prices and billing will be published only after the service, limits, and billing provider are configured.</p>
        </div>
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.name} className="flex min-h-[30rem] flex-col bg-surface p-6 md:p-8">
              <p className="utility-index">{plan.eyebrow}</p>
              <h2 className="mt-6 text-3xl text-white">{plan.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/55">{plan.description}</p>
              <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm text-white/70">
                {plan.includes.map((item) => <li key={item} className="flex gap-2"><span className="text-[#85ed75]">✓</span>{item}</li>)}
              </ul>
              <a href="/contact" className="mt-auto inline-flex w-fit border border-white/20 px-4 py-2 font-favorit text-xs uppercase text-white transition-colors hover:bg-white hover:text-black">{plan.action} →</a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-white/35">No payment is collected on this page. Do not treat the proposed tiers as a quote, invoice, SLA, or guarantee.</p>
      </main>
      <Footer />
    </div>
  );
}
