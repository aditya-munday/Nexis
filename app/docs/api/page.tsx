import Header from "../../components/Header";
import Footer from "../../components/Footer";

const endpoints = [
  {
    method: "POST",
    path: "/v1/capabilities/run",
    summary: "Start a verified capability run",
    body: '{ "capability": "display.driver", "mode": "verify" }',
  },
  {
    method: "GET",
    path: "/v1/runs/:id",
    summary: "Read execution state and Work Log entries",
    body: "Returns status, approvals, actions, and verified Work Log entries.",
  },
  {
    method: "POST",
    path: "/v1/capabilities/evaluate",
    summary: "Evaluate a mutation against Capability Policy",
    body: '{ "path": "/etc/example", "blastRadius": 42, "rollback": true }',
  },
];

export default function ApiDocsPage() {
  return (
    <div className="pi-root min-h-screen bg-black text-white">
      <Header />
      <main className="mx-auto max-w-350 px-5 pb-24 pt-32 md:px-10 md:pt-44">
        <div className="mb-16 max-w-3xl">
          <p className="font-favorit text-xs uppercase tracking-[0.18em] text-[#85ed75]">
            API Reference
          </p>
          <h1 className="mt-5 max-w-2xl font-sans text-5xl leading-[0.98] tracking-tight text-white md:text-8xl">
            Build against the capability execution layer.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/50">
            REST endpoints for planning, verifying, approving, and reconciling
            autonomous system operations through typed, auditable capabilities.
          </p>
        </div>
        <div className="grid gap-3 border-t border-white/15">
          {endpoints.map((endpoint) => (
            <article
              className="grid gap-5 border-b border-white/10 py-7 md:grid-cols-[110px_1fr_1.2fr] md:items-start"
              key={endpoint.path}
            >
              <span className="font-mono text-xs text-[#85ed75]">
                {endpoint.method}
              </span>
              <div>
                <h2 className="font-mono text-lg text-white">{endpoint.path}</h2>
                <p className="mt-2 text-sm text-white/45">{endpoint.summary}</p>
              </div>
              <pre className="overflow-x-auto border border-white/10 bg-white/[0.035] p-4 font-mono text-xs leading-relaxed text-white/55">
                {endpoint.body}
              </pre>
            </article>
          ))}
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {["Authentication", "Errors", "Webhooks"].map((title) => (
            <a
              className="group border border-white/10 p-5 transition-colors hover:border-[#85ed75]/50 hover:bg-white/[0.04]"
              href="/docs"
              key={title}
            >
              <p className="font-favorit text-xs uppercase text-white/35">
                Guide
              </p>
              <h2 className="mt-8 font-sans text-2xl text-white">{title}</h2>
              <span className="mt-10 block font-mono text-xs text-[#85ed75]">
                Read guide →
              </span>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}