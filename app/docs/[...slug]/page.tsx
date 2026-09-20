import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug?: string[] }>;
}

const DOCS_CONTENT: Record<string, { title: string; category: string; description: string; code?: string }> = {
  "quickstart": {
    title: "Quickstart Guide",
    category: "Getting Started",
    description: "Initialize your first capability-scoped AI Engineer on Directioner-OS in under 5 minutes.",
    code: `npm install @directioner/os
directioner init my-system
cd my-system
directioner run --simulate`
  },
  "tutorial-first-agent": {
    title: "Tutorial: Building Your First AI Engineer",
    category: "Guides & Tutorials",
    description: "Step-by-step walkthrough connecting an AI reasoning engine to the Directioner-OS capability daemon with typed scopes and rollback requirements.",
    code: `import { CapabilityClient } from "@directioner/os";

const engineer = new CapabilityClient({
  name: "SystemEngineer",
  capability: "display.driver",
  rollback: "required"
});

await engineer.planAndVerify({
  action: "update-display-driver",
  depth: "full-diagnostic"
});`
  },
  "runs-and-streaming": {
    title: "Runs & Real-Time Streaming",
    category: "Core Platform",
    description: "Subscribe to live capability streams, verification diffs, state updates, and signed Work Log entries over WebSockets or server-sent events.",
    code: `const stream = await engineer.streamRun(runId);

for await (const event of stream) {
  console.log(event.type, event.payload);
}`
  },
  "systems-and-workspace": {
    title: "Systems & Workspace",
    category: "System-Level",
    description: "Manage local capabilities, protected user data, A/B boot slots, and the SQLite World Model without surrendering operator control.",
    code: `import { SystemModel } from "@directioner/os";

const model = new SystemModel({ mode: "local-first" });
const health = await model.getHealthSnapshot();`
  },
  "api-reference": {
    title: "API Reference",
    category: "Operations",
    description: "Complete REST and RPC endpoint reference for the Directioner-OS capability control plane.",
    code: `POST /v1/capabilities/runs
Authorization: Bearer <API_KEY>
Content-Type: application/json

{
  "capabilityId": "cap_89f02c",
  "intent": "Update the display driver with rollback proof",
  "explanationDepth": 3
}`
  },
  "directioner-bench-overview": {
    title: "DIRECTIONER BENCH Overview",
    category: "DIRECTIONER BENCH",
    description: "Methodology, safety suites, verification harnesses, and evaluation criteria for benchmarking autonomous system maintenance.",
    code: `directioner bench run --suite safety-v1 --trials 10
directioner bench score --format json
directioner bench export`
  }
};

export function generateStaticParams() {
  return [
    { slug: ["quickstart"] },
    { slug: ["tutorial-first-agent"] },
    { slug: ["runs-and-streaming"] },
    { slug: ["systems-and-workspace"] },
    { slug: ["api-reference"] },
    { slug: ["directioner-bench-overview"] }
  ];
}

function formatTitle(slugArr: string[]): string {
  if (!slugArr || slugArr.length === 0) return "Documentation";
  const last = slugArr[slugArr.length - 1] || "Documentation";
  return last
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default async function DocsSubpage({ params }: Props) {
  const resolvedParams = await params;
  const slugArr = Array.isArray(resolvedParams?.slug) ? resolvedParams.slug : [];
  const key = slugArr.join("/");
  const doc = DOCS_CONTENT[key] || {
    title: formatTitle(slugArr),
    category: "Documentation",
    description: "Technical reference and implementation guide for Directioner-OS autonomous computing runtime.",
    code: `directioner run --help`
  };

  return (
    <div className="pi-root min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <div className="pt-20">
        <main role="main">
          <div className="pi-root chivo_mono_2296ff99-module__wnMkSa__variable min-h-screen bg-surface text-foreground antialiased [overflow-x:clip]">
            <div className="max-w-360 mx-auto px-4 md:px-5">
              <div className="min-h-screen pt-24 pb-16 md:pt-28 md:pb-24 xl:pt-32">
                <article className="max-w-4xl mx-auto">
                  <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-favorit text-xs uppercase leading-none tracking-4 text-white/45">
                    <a href="/docs" className="hover:text-white transition-colors">Docs</a>
                    <span>/</span>
                    <span className="text-white/70">{doc.category}</span>
                  </nav>

                  <header className="border-b border-border pb-8">
                    <span className="bg-white/10 px-2 py-1 font-favorit text-xs uppercase tracking-4 text-white/80 inline-block mb-3">
                      {doc.category}
                    </span>
                    <h1 className="font-sans text-[32px] leading-[1.12] font-semibold text-white sm:text-[40px]">
                      {doc.title}
                    </h1>
                    <p className="mt-3 text-lg leading-relaxed text-text-mute">
                      {doc.description}
                    </p>
                  </header>

                  <div className="mt-8 flex flex-col gap-6 font-sans text-base leading-relaxed text-text-mute">
                    <h2 className="font-sans text-xl text-white">Overview</h2>
                    <p>
                      Directioner-OS standardizes how AI models communicate with system capabilities. Every request is compiled into typed intermediate plans, verified against live system state, and bounded by non-bypassable capability policies.
                    </p>

                    {doc.code && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between bg-white/5 border border-b-0 border-border px-4 py-2">
                          <span className="font-favorit text-xs uppercase tracking-4 text-white/50">Example Snippet</span>
                          <span className="font-mono text-xs text-white/40">bash / typescript</span>
                        </div>
                        <pre className="bg-black/70 p-4 border border-border font-mono text-xs text-white/90 overflow-x-auto whitespace-pre">
                          <code>{doc.code}</code>
                        </pre>
                      </div>
                    )}

                    <h2 className="mt-6 font-sans text-xl text-white">Security &amp; Policy Guarantees</h2>
                    <p>
                      Every operation executed through this interface follows the zero-trust autonomy boundary: models suggest and plan, the execution engine tests staged system state, and the Policy Engine requires explicit approval before privileged capabilities run.
                    </p>
                  </div>

                  <footer className="mt-12 pt-8 border-t border-border flex items-center justify-between">
                    <a href="/docs" className="font-favorit text-xs uppercase text-white/70 hover:text-white transition-colors">← Back to Docs Overview</a>
                    <a href="/docs/api" className="font-favorit text-xs uppercase bg-white text-black px-4 py-2 hover:bg-white/90 transition-colors">API Reference →</a>
                  </footer>
                </article>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
