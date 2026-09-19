import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AGENTS = [
  { name: "Nexis Sovereign v2", model: "Claude 3.7 + NexEnclave", passRate: "96.4%", safety: "99.8%", avgSlippage: "0.08%", gasEfficiency: "94.2%", latency: "1.2s", status: "VERIFIED" },
  { name: "DeFi-CoPilot Pro", model: "DeepSeek-R1-671B", passRate: "91.2%", safety: "97.4%", avgSlippage: "0.19%", gasEfficiency: "89.5%", latency: "2.4s", status: "VERIFIED" },
  { name: "Autonomous Treasury v1", model: "GPT-4o + ToolCall", passRate: "87.5%", safety: "94.1%", avgSlippage: "0.34%", gasEfficiency: "82.0%", latency: "3.1s", status: "VERIFIED" },
  { name: "Eliza Web3 Worker", model: "Llama-3.3-70B-Instruct", passRate: "82.8%", safety: "91.0%", avgSlippage: "0.52%", gasEfficiency: "78.4%", latency: "1.8s", status: "COMMUNITY" },
  { name: "Generic ReAct DeFi", model: "Claude 3.5 Sonnet", passRate: "76.4%", safety: "84.5%", avgSlippage: "1.12%", gasEfficiency: "68.9%", latency: "4.5s", status: "BASELINE" }
];

export default function BenchmarkComparePage() {
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
                        <span className="text-white/70">Compare</span>
                      </span>
                    </nav>
                    <h1 className="max-w-4xl font-sans text-[28px] leading-[1.14] tracking-tight md:text-[38px] md:leading-[1.08]">
                      <span className="text-white/90">Agent Comparison</span>{" "}
                      <span className="text-white/45">— Head-to-Head Benchmarking</span>
                    </h1>
                    <p className="max-w-2xl text-base leading-relaxed text-text-mute md:text-lg">
                      Compare multi-step on-chain autonomy performance metrics across leading agent frameworks evaluated on deterministic mainnet forks.
                    </p>
                  </div>
                </header>

                <section className="border-t border-border py-12 md:py-16">
                  <div className="overflow-x-auto border border-border bg-border">
                    <table className="w-full text-left font-sans text-sm">
                      <thead className="border-b border-border bg-surface-card text-white/60 font-favorit text-xs uppercase tracking-4">
                        <tr>
                          <th className="p-4 md:p-5">Agent Architecture</th>
                          <th className="p-4 md:p-5">Base Model</th>
                          <th className="p-4 md:p-5">Pass Rate</th>
                          <th className="p-4 md:p-5">Safety Score</th>
                          <th className="p-4 md:p-5">Slippage Delta</th>
                          <th className="p-4 md:p-5">Gas Efficiency</th>
                          <th className="p-4 md:p-5">Mean Latency</th>
                          <th className="p-4 md:p-5">Tier</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border bg-surface text-white/90 font-mono text-xs">
                        {AGENTS.map((agent, i) => (
                          <tr key={agent.name} className="hover:bg-surface-hover transition-colors">
                            <td className="p-4 md:p-5 font-sans font-medium text-white flex items-center gap-2">
                              <span className="font-favorit text-white/30">0{i + 1}</span>
                              <span>{agent.name}</span>
                            </td>
                            <td className="p-4 md:p-5 text-white/60 font-sans">{agent.model}</td>
                            <td className="p-4 md:p-5 text-[#85ed75] font-semibold">{agent.passRate}</td>
                            <td className="p-4 md:p-5">{agent.safety}</td>
                            <td className="p-4 md:p-5 text-white/70">{agent.avgSlippage}</td>
                            <td className="p-4 md:p-5">{agent.gasEfficiency}</td>
                            <td className="p-4 md:p-5 text-white/50">{agent.latency}</td>
                            <td className="p-4 md:p-5">
                              <span className="font-favorit px-2 py-1 text-[10px] tracking-4 uppercase bg-white/10 text-white/80 border border-white/10">
                                {agent.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-border p-6 bg-surface">
                    <div>
                      <h3 className="font-sans text-base text-white">Want to benchmark your custom agent?</h3>
                      <p className="mt-1 text-xs text-text-mute">Run the open test harness locally or submit verified execution traces for evaluation.</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <a href="/benchmarks/guide" className="font-favorit text-xs uppercase px-4 py-2 border border-border text-white hover:bg-white/10 transition-colors">View Run Guide</a>
                      <a href="/benchmarks/submit" className="font-favorit text-xs uppercase px-4 py-2 bg-white text-black hover:bg-white/90 transition-colors">Submit Run →</a>
                    </div>
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
