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
    description: "Initialize your first governed autonomous agent on Nexis in under 5 minutes.",
    code: `npm install @nexis/agent @nexis/sdk
npx nexis init my-agent
cd my-agent
nexis run --simulate`
  },
  "tutorial-first-agent": {
    title: "Tutorial: Building Your First Agent",
    category: "Guides & Tutorials",
    description: "Step-by-step walkthrough connecting an LLM reasoning engine to the Nexis execution enclave with spend limits and allowlists.",
    code: `import { Agent, policy } from "@nexis/agent";

const agent = new Agent({
  name: "TreasuryRebalancer",
  policy: policy({
    dailyLimit: "10,000 USDC",
    approvals: "above 1,000 USDC"
  })
});

await agent.planAndSimulate({
  action: "rebalance",
  from: "USDC",
  to: "ETH",
  amount: "500 USDC"
});`
  },
  "runs-and-streaming": {
    title: "Runs & Real-Time Streaming",
    category: "Core Platform",
    description: "Subscribe to live execution streams, simulation diffs, state updates, and signed receipts over WebSockets or server-sent events.",
    code: `const stream = await agent.streamRun(runId);

for await (const event of stream) {
  console.log(event.type, event.payload);
}`
  },
  "wallets-and-portfolio": {
    title: "Wallets & Multi-Chain Portfolio",
    category: "On-Chain",
    description: "Manage embedded MPC wallets, non-custodial Turnkey signer enclaves, and multi-network asset custody across EVM, SVM, UTXO, and Cosmos.",
    code: `import { WalletManager } from "@nexis/sdk";

const wm = new WalletManager({ enclave: "production-us-east" });
const balance = await wm.getCrossChainPortfolio("0xYourWalletAddress");`
  },
  "api-reference": {
    title: "API Reference",
    category: "Operations",
    description: "Complete REST and RPC endpoint reference for the Nexis agent control plane.",
    code: `POST /v1/agents/runs
Authorization: Bearer <API_KEY>
Content-Type: application/json

{
  "agentId": "ag_89f02c",
  "intent": "Swap 1000 USDC for ETH on Base with max 0.2% slippage",
  "simulateOnly": true
}`
  },
  "nexbench-overview": {
    title: "NEXBENCH Overview",
    category: "NEXBENCH",
    description: "Methodology, task suites, deterministic fork harnesses, and evaluation criteria for benchmarking on-chain LLM agents.",
    code: `nexbench run --suite defi-v2 --trials 10
nexbench score --format json
nexbench export --sign`
  }
};

export function generateStaticParams() {
  return [
    { slug: ["quickstart"] },
    { slug: ["tutorial-first-agent"] },
    { slug: ["runs-and-streaming"] },
    { slug: ["wallets-and-portfolio"] },
    { slug: ["api-reference"] },
    { slug: ["nexbench-overview"] }
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
    description: "Technical reference and implementation guide for Nexis on-chain autonomy runtime.",
    code: `nex run --help`
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
                      The Nexis protocol standardizes how language models communicate with blockchain networks. All requests are compiled into typed intermediate plans, preflight simulated against live chain state, and bounded by non-bypassable signing edge policies.
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
                      Every operation executed via this interface adheres to the zero-trust autonomy boundary: models suggest and plan, the execution engine simulates on fork state, and the signing enclave requires affirmative cryptographic authorization before funds move.
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
