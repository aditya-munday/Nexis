import Header from "../components/Header";
import Footer from "../components/Footer";

const stages = [
  ["01", "Planner", "Turns intent into typed atomic actions and prepares compensating rollback steps."],
  ["02", "Policy Engine", "Calculates a quantitative blast-radius score from target paths, dependencies, and criticality."],
  ["03", "Reviewer", "Enforces red-line invariants and rejects incomplete or unsafe plans."],
  ["04", "Implementer", "Runs only through isolated capability RPCs and rolls back failed mutations."],
  ["05", "Auditor", "Commits the result to the append-only, tamper-evident Work Log."],
];

export default function AgentPage() {
  return (
    <div className="utility-page pi-root min-h-screen bg-black text-white flex flex-col justify-between">
      <Header />
      <main className="utility-main flex-1 max-w-6xl mx-auto w-full px-5 md:px-8 pt-32 pb-24 font-sans">
        <div className="max-w-4xl">
          <p className="utility-eyebrow">AI ENGINEER / DIRECT</p>
          <h1 className="utility-title mt-5">A resident engineer with a hard safety boundary.</h1>
          <p className="utility-lede mt-6">Directioner-OS does not give a model an arbitrary shell. The resident AI Engineer proposes typed capability calls, explains the risk, waits at the correct autonomy tier, and records every decision.</p>
        </div>
        <section className="mt-12 border border-border">
          <div className="grid gap-px bg-border md:grid-cols-5">
            {stages.map(([index, name, text]) => (
              <article key={name} className="bg-surface p-5">
                <span className="utility-index">{index}</span>
                <h2 className="mt-8 text-xl text-white">{name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {[
            ["Tier 0 / AUTO", "0–15", "Diagnostics and negligible-risk maintenance."],
            ["Tier 1–2 / NOTIFY + CONFIRM", "16–60", "The operator is notified or asked to authorize the mutation."],
            ["Tier 3 / EXPERT REVIEW", "61–100", "High-risk operations require explicit administrator review."],
          ].map(([title, score, text]) => (
            <article key={title} className="bg-surface p-6">
              <p className="utility-index">{title}</p>
              <h2 className="mt-5 font-mono text-2xl text-[#85ed75]">{score}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{text}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
