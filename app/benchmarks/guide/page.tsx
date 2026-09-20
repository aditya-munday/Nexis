import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BenchmarkGuidePage() {
  return (
    <div className="pi-root min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <div className="pt-20">
        <main role="main">
          <div className="pi-root chivo_mono_2296ff99-module__wnMkSa__variable min-h-screen bg-surface text-foreground antialiased [overflow-x:clip]">
            <div className="max-w-360 mx-auto px-4 md:px-5">
              <div className="min-h-screen pt-24 pb-16 md:pt-28 md:pb-24 xl:pt-32">
                <header className="relative overflow-hidden border border-border">
                  <div className="relative z-10 flex flex-col gap-6 p-5 md:gap-9 md:p-8 lg:min-h-[220px] lg:justify-center">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-favorit text-xs uppercase leading-none tracking-4 text-white/45">
                      <span className="flex items-center gap-2">
                        <a href="/benchmarks" className="hover:text-white transition-colors">Benchmarks</a>
                        <span>/</span>
                        <span className="text-white/70">Guide</span>
                      </span>
                    </nav>
                    <h1 className="max-w-4xl font-sans text-[28px] leading-[1.14] tracking-tight md:text-[38px] md:leading-[1.08]">
                      <span className="text-white/90">DIRECTIONER BENCH Guide</span>{" "}
                      <span className="text-white/45">— How to Run &amp; Submit Evaluations</span>
                    </h1>
                    <p className="max-w-2xl text-base leading-relaxed text-text-mute md:text-lg">
                      Step-by-step instructions for running the DIRECTIONER BENCH evaluation harness against local or remote AI systems and preparing verifiable submission Work Log entries.
                    </p>
                  </div>
                </header>

                <section className="border-t border-border py-12 md:py-16">
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
                    <div className="flex flex-col gap-10">
                      <article className="border border-border p-6 md:p-8 bg-surface">
                        <div className="flex items-center gap-3">
                          <span className="font-favorit text-xs uppercase tracking-4 text-[#85ed75]">Step 01</span>
                          <span className="h-px flex-1 bg-border" aria-hidden="true"></span>
                        </div>
                        <h2 className="mt-3 font-sans text-xl text-white">Install the DIRECTIONER BENCH CLI</h2>
                        <p className="mt-2 text-sm text-text-mute">
                          The evaluation harness is packaged as an open-source command line tool supporting Node.js 18+ and Python 3.10+.
                        </p>
                        <div className="mt-4 bg-black/60 p-4 border border-border font-mono text-xs text-white/90">
                          <code>npm install -g @directioner/os-bench-cli</code>
                        </div>
                      </article>

                      <article className="border border-border p-6 md:p-8 bg-surface">
                        <div className="flex items-center gap-3">
                          <span className="font-favorit text-xs uppercase tracking-4 text-[#85ed75]">Step 02</span>
                          <span className="h-px flex-1 bg-border" aria-hidden="true"></span>
                        </div>
                        <h2 className="mt-3 font-sans text-xl text-white">Configure Target AI Engineer Endpoint</h2>
                        <p className="mt-2 text-sm text-text-mute">
                          autonomous computingne your AI Engineer connector in a <code className="font-mono text-white/80">directioner-os.config.toml</code> file with its typed capability endpoint, local system target, policy profile, and Work Log destination.
                        </p>
                        <div className="mt-4 bg-black/60 p-4 border border-border font-mono text-xs text-white/80 whitespace-pre overflow-x-auto">
{`[engineer]
name = "Direct Engineer v1"
endpoint = "unix:///run/direct/capability.sock"
protocol = "directioner-capability-v1"

[environment]
target = "local-system"
world_model = "sqlite"
work_log = "./work-log"`}
                        </div>
                      </article>

                      <article className="border border-border p-6 md:p-8 bg-surface">
                        <div className="flex items-center gap-3">
                          <span className="font-favorit text-xs uppercase tracking-4 text-[#85ed75]">Step 03</span>
                          <span className="h-px flex-1 bg-border" aria-hidden="true"></span>
                        </div>
                        <h2 className="mt-3 font-sans text-xl text-white">Execute the Test Suite</h2>
                        <p className="mt-2 text-sm text-text-mute">
                          Run the standardized test battery covering capability routing, update staging, blast-radius scoring, rollback verification, and emergency killswitch behavior.
                        </p>
                        <div className="mt-4 bg-black/60 p-4 border border-border font-mono text-xs text-white/90">
                          <code>directioner bench run --suite full-battery --trials 5 --output ./results/</code>
                        </div>
                      </article>

                      <article className="border border-border p-6 md:p-8 bg-surface">
                        <div className="flex items-center gap-3">
                          <span className="font-favorit text-xs uppercase tracking-4 text-[#85ed75]">Step 04</span>
                          <span className="h-px flex-1 bg-border" aria-hidden="true"></span>
                        </div>
                        <h2 className="mt-3 font-sans text-xl text-white">Export &amp; Submit Results</h2>
                        <p className="mt-2 text-sm text-text-mute">
                          Export the append-only Work Log, execution traces, policy decisions, blast-radius calculations, and rollback evidence for reproducible scoring.
                        </p>
                        <div className="mt-4 bg-black/60 p-4 border border-border font-mono text-xs text-white/90">
                          <code>directioner bench export --sign --output ./results/</code>
                        </div>
                        <div className="mt-6">
                          <a href="/benchmarks/submit" className="inline-block bg-white px-5 py-2 font-favorit text-xs uppercase text-black hover:bg-white/90 transition-colors">Go to Run Intake Portal →</a>
                        </div>
                      </article>
                    </div>

                    <aside className="flex flex-col gap-6">
                      <div className="border border-border p-6 bg-surface">
                        <h3 className="font-favorit text-xs uppercase tracking-4 text-white/60">Quick Links</h3>
                        <div className="mt-4 flex flex-col gap-3 font-sans text-sm">
                          <a href="/benchmarks" className="text-white/80 hover:text-white transition-colors">Suite Overview</a>
                          <a href="/benchmarks/leaderboard" className="text-white/80 hover:text-white transition-colors">Leaderboard</a>
                          <a href="/benchmarks/compare" className="text-white/80 hover:text-white transition-colors">Compare Models</a>
                          <a href="https://github.com/Directioner-OS-AI/Directioner Bench" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">GitHub Repository ↗</a>
                        </div>
                      </div>
                    </aside>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
