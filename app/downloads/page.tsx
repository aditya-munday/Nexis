import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IMAGE_TARGETS = [
  {
    name: "x86_64 workstation image",
    architecture: "AMD64 / Intel 64",
    format: "ISO / raw disk",
    status: "Release artifact pending",
    description: "The install target for desktops, laptops, and workstation hardware.",
  },
  {
    name: "ARM64 development image",
    architecture: "ARM64",
    format: "Image / raw disk",
    status: "Release artifact pending",
    description: "The image target for supported ARM development boards and systems.",
  },
  {
    name: "Recovery image",
    architecture: "Universal recovery",
    format: "USB image",
    status: "Release artifact pending",
    description: "A minimal environment for diagnostics, rollback, and boot-slot recovery.",
  },
];

export default function DownloadsPage() {
  return (
    <div className="pi-root chivo_mono_b95da7ba-module__6lSSaG__variable min-h-screen">
      <Header />
      <main className="mx-auto w-full max-w-[1440px] px-4 pb-20 pt-36 md:px-5 lg:pt-44">
        <section className="border border-border bg-[#0d0d0d]">
          <div className="grid gap-10 border-b border-border p-5 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div>
              <p className="font-favorit text-2xs uppercase tracking-[0.18em] text-available">DIRECTIONER-OS / DOWNLOADS</p>
              <h1 className="mt-6 max-w-4xl font-sans text-5xl leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
                Install the operating system built around an engineer.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
                Choose an image target, verify the release, and boot Directioner-OS with its capability control plane, Aria, Work Log, and rollback safeguards.
              </p>
            </div>
            <div className="flex flex-col justify-end border-l border-border pl-5 lg:pl-8">
              <p className="font-favorit text-2xs uppercase tracking-[0.16em] text-white/35">Release channel</p>
              <p className="mt-3 font-mono text-2xl text-white">Core / open beta</p>
              <p className="mt-3 text-sm leading-relaxed text-white/45">
                No bootable image is published in this repository yet. Download controls stay disabled until an official, signed artifact and checksum are available.
              </p>
            </div>
          </div>

          <div className="grid border-b border-border md:grid-cols-3">
            {IMAGE_TARGETS.map((target, index) => (
              <article key={target.name} className="flex min-h-80 flex-col border-b border-border p-5 last:border-b-0 md:border-b-0 md:border-r md:p-7 md:last:border-r-0">
                <div className="flex items-center justify-between">
                  <span className="font-favorit text-2xs text-white/25">IMG.{String(index + 1).padStart(2, "0")}</span>
                  <span className="size-1.5 rounded-full bg-[#ffd36a]" aria-label="Release pending" />
                </div>
                <h2 className="mt-12 font-sans text-2xl leading-tight text-white">{target.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/45">{target.description}</p>
                <dl className="mt-8 grid grid-cols-2 gap-px border border-border bg-border font-mono text-[10px] uppercase">
                  <div className="bg-[#101010] p-3"><dt className="text-white/30">Architecture</dt><dd className="mt-2 text-white/75">{target.architecture}</dd></div>
                  <div className="bg-[#101010] p-3"><dt className="text-white/30">Format</dt><dd className="mt-2 text-white/75">{target.format}</dd></div>
                </dl>
                <button type="button" disabled className="mt-3 h-9 cursor-not-allowed border border-white/10 bg-white/5 font-favorit text-2xs uppercase text-white/30">
                  {target.status}
                </button>
              </article>
            ))}
          </div>

          <div className="grid gap-8 p-5 md:p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <p className="font-favorit text-2xs uppercase tracking-[0.16em] text-white/35">Before you boot</p>
              <h2 className="mt-4 font-sans text-3xl text-white">Use the verified path.</h2>
              <ol className="mt-6 space-y-4 text-sm leading-relaxed text-white/55">
                <li><span className="mr-3 font-mono text-available">01</span>Confirm your architecture and supported hardware.</li>
                <li><span className="mr-3 font-mono text-available">02</span>Download only from the official release channel.</li>
                <li><span className="mr-3 font-mono text-available">03</span>Verify the SHA-256 checksum and signature before writing USB media.</li>
                <li><span className="mr-3 font-mono text-available">04</span>Keep a recovery path available before replacing an existing system.</li>
              </ol>
            </div>
            <div className="border border-border bg-[#101010] p-5 font-mono text-xs leading-relaxed text-white/55 md:p-6">
              <p className="text-available">$ directioner image verify</p>
              <p className="mt-3">artifact: directioner-os-core.img</p>
              <p>sha256: published with release</p>
              <p>signature: required</p>
              <p>boot-slot: A/B verified</p>
              <p className="mt-5 text-white/30">Waiting for the first signed public image.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-border p-5 md:p-8">
            <Link href="/docs/quickstart" className="group inline-flex h-9 items-center gap-2 bg-white px-3 font-favorit text-2xs uppercase text-black transition-colors hover:bg-white/80">Read installation docs <span>↗</span></Link>
            <Link href="/contact" className="group inline-flex h-9 items-center gap-2 border border-white/20 px-3 font-favorit text-2xs uppercase text-white transition-colors hover:border-white">Request release updates <span>↗</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
