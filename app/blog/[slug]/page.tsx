import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

const POSTS_DATA: Record<string, { title: string; category: string; date: string; summary: string }> = {
  "leveraging-big-data-for-intelligence-success": {
    title: "Leveraging Big Data for Intelligence Success",
    category: "Newsroom",
    date: "OCT 29, 2025",
    summary: "How deterministic on-chain data pipelines and big data analytics unlock sovereign intelligence opportunities for autonomous agents."
  },
  "sustainability-in-tech-a-growing-focus": {
    title: "Sustainability in Tech: A Growing Focus",
    category: "Marketing",
    date: "OCT 29, 2025",
    summary: "Exploring computational efficiency and sustainable practices in decentralized verification architectures."
  },
  "the-role-of-blockchain-in-modern-finance": {
    title: "The Role of Blockchain in Modern Finance",
    category: "Marketing",
    date: "OCT 29, 2025",
    summary: "Understanding how governed on-chain execution and automated settlement are reshaping modern institutional capital flows."
  },
  "embracing-remote-work-culture-strategies-for-success-in-a-distributed-workforce": {
    title: "Embracing Remote Work Culture: Strategies for Success in a Distributed Workforce",
    category: "Company",
    date: "OCT 29, 2025",
    summary: "How the Nexis engineering team coordinates decentralized protocol development across global time zones."
  },
  "advancements-in-cybersecurity": {
    title: "Advancements in Cybersecurity for On-Chain Agents",
    category: "Engineering",
    date: "OCT 29, 2025",
    summary: "Deep dive into secure hardware enclaves, isolated execution loops, and cryptographic bounds protecting agent wallets."
  },
  "cutting-edge-innovations-in-data-analytics": {
    title: "Cutting-Edge Innovations in Data Analytics",
    category: "Company",
    date: "OCT 29, 2025",
    summary: "Real-time indexing of forked state simulations across EVM and SVM transaction graphs."
  },
  "leveraging-big-data-for-business-success": {
    title: "Leveraging Big Data for Business Success",
    category: "Newsroom",
    date: "OCT 29, 2025",
    summary: "Converting raw blockchain liquidity metrics into actionable risk parameters for autonomous balance-sheet managers."
  },
  "leveraging-big-data-for-career-success": {
    title: "Leveraging Big Data for Career Success",
    category: "Newsroom",
    date: "OCT 29, 2025",
    summary: "Developing technical proficiency in agentic workflow orchestration and on-chain policy verification."
  },
  "the-top-industries-and-business-models-using-ai-for-fraud-prevention-and-detection": {
    title: "The Top Industries and Business Models Using AI for Fraud Prevention and Detection",
    category: "Company",
    date: "OCT 29, 2025",
    summary: "Evaluating automated transaction scoring, anomalous transfer detection, and edge-enforced circuit breakers."
  },
  "the-transformative-future-of-ai-in-digital-marketing": {
    title: "The Transformative Future of AI in Digital Marketing",
    category: "Marketing",
    date: "OCT 29, 2025",
    summary: "How decentralized protocols engage technical developer communities and drive open-source harness adoption."
  },
  "embracing-remote-work-culture": {
    title: "Embracing Remote Work Culture",
    category: "Company",
    date: "OCT 29, 2025",
    summary: "Core communication rhythms, asynchronous RFCs, and continuous integration workflows at Nexis Research."
  }
};

function formatTitleFromSlug(slug: string): string {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS_DATA[slug] || {
    title: formatTitleFromSlug(slug),
    category: "Research",
    date: "OCT 29, 2025",
    summary: "Exploration of governed autonomous execution, on-chain state simulation, and verifiable agent constraints."
  };

  return (
    <div className="pi-root min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <div className="pt-20">
        <main role="main">
          <div className="pi-root chivo_mono_2296ff99-module__wnMkSa__variable min-h-screen bg-surface text-foreground antialiased [overflow-x:clip]">
            <div className="max-w-360 mx-auto px-4 md:px-5">
              <div className="min-h-screen pt-24 pb-16 md:pt-28 md:pb-24 xl:pt-32">
                <article className="max-w-3xl mx-auto">
                  <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-favorit text-xs uppercase leading-none tracking-4 text-white/45">
                    <a href="/blog" className="hover:text-white transition-colors">← Back to all posts</a>
                    <span>/</span>
                    <span className="text-white/70">{post.category}</span>
                  </nav>

                  <header className="border-b border-border pb-8">
                    <div className="flex items-center gap-3 font-favorit text-xs uppercase tracking-4 text-white/50 mb-4">
                      <span className="bg-white/10 px-2 py-1 text-white/80">{post.category}</span>
                      <time>{post.date}</time>
                      <span>·</span>
                      <span>5 min read</span>
                    </div>

                    <h1 className="font-sans text-[32px] leading-[1.12] font-semibold text-white sm:text-[40px]">
                      {post.title}
                    </h1>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="relative block size-8 shrink-0 overflow-hidden border border-border bg-surface-card rounded-full">
                        <img alt="Nexis Labs" width="48" height="48" className="size-full object-cover" src="/assets/blog-og/_author-avatar.png" />
                      </span>
                      <div className="flex flex-col">
                        <span className="font-sans text-sm text-white font-medium">Nexis Research</span>
                        <span className="font-favorit text-xs uppercase tracking-4 text-white/40">Core Protocol Team</span>
                      </div>
                    </div>
                  </header>

                  <div className="mt-8 flex flex-col gap-6 font-sans text-base leading-relaxed text-text-mute">
                    <p className="text-lg leading-relaxed text-white/85">
                      {post.summary}
                    </p>

                    <h2 className="mt-4 font-sans text-2xl text-white">1. Defining the Autonomy Boundary</h2>
                    <p>
                      When autonomous software interacts with economic rails, non-deterministic model outputs cannot be directly hooked to raw private keys. Every planned route must first pass through a deterministic preflight sandbox that validates balance constraints, execution limits, and recipient allowlists.
                    </p>

                    <div className="bg-black/60 p-4 border border-border font-mono text-xs text-white/90 whitespace-pre overflow-x-auto my-2">
{`import { policy } from "@nexis/agent";

export const treasuryPolicy = policy({
  dailyLimit: "50,000 USDC",
  perTxLimit: "10,000 USDC",
  requireApprovalAbove: "2,500 USDC",
  allowedChains: ["ethereum", "base", "arbitrum"]
});`}
                    </div>

                    <h2 className="mt-4 font-sans text-2xl text-white">2. Simulation Before Settlement</h2>
                    <p>
                      Transactions are simulated against a fork of live chain state. If slippage exceeds tolerance, liquidity pools are insufficient, or unexpected revert conditions occur, the plan is rejected prior to broadcast.
                    </p>

                    <h2 className="mt-4 font-sans text-2xl text-white">3. Immutable Audit Trails</h2>
                    <p>
                      Every execution produces a comprehensive receipt combining the model&#x27;s natural language reasoning, the typed transaction plan, the simulation state delta, and the cryptographic signature.
                    </p>
                  </div>

                  <footer className="mt-12 pt-8 border-t border-border flex items-center justify-between">
                    <a href="/blog" className="font-favorit text-xs uppercase text-white/70 hover:text-white transition-colors">← All Writings</a>
                    <a href="/app" className="font-favorit text-xs uppercase bg-white text-black px-4 py-2 hover:bg-white/90 transition-colors">Launch Nexis App →</a>
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
