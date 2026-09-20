"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

/* ─── Palette of blog-post images (dithered compute/lab style) ─── */
const THUMBNAIL_SRCS = [
  "/backgrounds/compute-bg.png",
  "/backgrounds/lab.png",
  "/backgrounds/compute-bg.png",
];

/* ─── Floyd-Steinberg dithered canvas ─── */
function DitheredThumb({
  src,
  index,
  className = "",
}: {
  src?: string;
  index: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    const W = parent?.clientWidth || 480;
    const H = parent?.clientHeight || 270;
    canvas.width = W;
    canvas.height = H;

    const imgSrc = src || THUMBNAIL_SRCS[index % THUMBNAIL_SRCS.length]!;
    const img = new window.Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      // Draw scaled-to-fit
      ctx.drawImage(img, 0, 0, W, H);
      // Apply Floyd-Steinberg dithering
      const data = ctx.getImageData(0, 0, W, H);
      const d = data.data;
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const i = (y * W + x) * 4;
          const gray = 0.299 * d[i]! + 0.587 * d[i + 1]! + 0.114 * d[i + 2]!;
          const newV = gray < 128 ? 0 : 255;
          const err = gray - newV;
          d[i] = d[i + 1] = d[i + 2] = newV;
          d[i + 3] = 255;
          const spread = (xi: number, yi: number, f: number) => {
            if (xi < 0 || xi >= W || yi < 0 || yi >= H) return;
            const j = (yi * W + xi) * 4;
            d[j]! = Math.min(255, Math.max(0, d[j]! + err * f));
            d[j + 1]! = Math.min(255, Math.max(0, d[j + 1]! + err * f));
            d[j + 2]! = Math.min(255, Math.max(0, d[j + 2]! + err * f));
          };
          spread(x + 1, y, 7 / 16);
          spread(x - 1, y + 1, 3 / 16);
          spread(x, y + 1, 5 / 16);
          spread(x + 1, y + 1, 1 / 16);
        }
      }
      ctx.putImageData(data, 0, 0);
    };

    img.onerror = () => {
      // Fallback: procedural noise pattern
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, W, H);
      // Halftone dots
      const seed = index * 1234;
      for (let y = 0; y < H; y += 5) {
        for (let x = 0; x < W; x += 5) {
          const n = Math.sin(seed + x * 0.3 + y * 0.7) * 0.5 + 0.5;
          if (n > 0.6) {
            ctx.fillStyle = `rgba(255,255,255,${0.15 + n * 0.25})`;
            ctx.fillRect(x, y, 2, 2);
          }
        }
      }
      // Draw a subtle Directioner-OS "N" watermark
      ctx.fillStyle = "rgba(255,255,255,0.04)";
      ctx.font = `bold ${Math.min(W, H) * 0.6}px sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText("N", W / 2, H / 2);
    };

    img.src = imgSrc;
  }, [src, index]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{ imageRendering: "pixelated" }}
      aria-label="Dithered image"
      role="img"
    />
  );
}

/* ─── Category badge dot colours ─── */
const CATEGORY_STYLES: Record<string, { dot: string; label: string }> = {
  Newsroom: {
    dot: "radial-gradient(circle at 35% 30%, #c6f7bb, #85ed75 55%, #4fbf43)",
    label: "Newsroom",
  },
  Marketing: {
    dot: "radial-gradient(circle at 35% 30%, #c6f7bb, #85ed75 55%, #4fbf43)",
    label: "Marketing",
  },
  Company: {
    dot: "radial-gradient(circle at 35% 30%, #ffd39a, #f5a623 55%, #c9791a)",
    label: "Company",
  },
  Engineering: {
    dot: "radial-gradient(circle at 35% 30%, #ffd39a, #f5a623 55%, #c9791a)",
    label: "Engineering",
  },
};

const featured = [
  {
    href: "/blog/leveraging-big-data-for-intelligence-success",
    category: "Newsroom",
    date: "OCT 29, 2025",
    dateTime: "2025-10-29T05:44:39.642Z",
    title: "Leveraging Big Data for Intelligence Success",
    excerpt: "See how big data analytics can unlock new opportunities for enterprise intelligence operations.",
    thumbIndex: 0,
    isNew: true,
  },
  {
    href: "/blog/sustainability-in-tech-a-growing-focus",
    category: "Marketing",
    date: "OCT 29, 2025",
    dateTime: "2025-10-29T05:44:39.642Z",
    title: "Sustainability in Tech: A Growing Focus",
    excerpt: "Explore efforts towards sustainable practices in the technology sector.",
    thumbIndex: 1,
    isNew: true,
  },
  {
    href: "/blog/the-role-of-capability-scoped-computing",
    category: "Marketing",
    date: "OCT 29, 2025",
    dateTime: "2025-10-29T05:44:39.642Z",
    title: "The Role of Capability-Scoped Computing",
    excerpt: "Typed, auditable capability RPCs let a resident AI Engineer operate safely without arbitrary shell execution.",
    thumbIndex: 2,
    isNew: true,
  },
];

const articles = [
  {
    href: "/blog/embracing-remote-work-culture-strategies-for-success-in-a-distributed-workforce",
    category: "Company",
    date: "OCT 29, 2025",
    dateTime: "2025-10-29T05:44:39.642Z",
    title: "Embracing Remote Work Culture: Strategies for Success in a Distributed Workforce",
    isRecent: true,
  },
  {
    href: "/blog/advancements-in-cybersecurity",
    category: "Engineering",
    date: "OCT 29, 2025",
    dateTime: "2025-10-29T05:44:39.642Z",
    title: "Advancements in Autonomous System Safety",
    isRecent: true,
  },
  {
    href: "/blog/cutting-edge-innovations-in-data-analytics",
    category: "Company",
    date: "OCT 29, 2025",
    dateTime: "2025-10-29T05:44:39.642Z",
    title: "The SQLite World Model and Local Intelligence",
    isRecent: false,
  },
  {
    href: "/blog/leveraging-big-data-for-business-success",
    category: "Newsroom",
    date: "OCT 29, 2025",
    dateTime: "2025-10-29T05:44:39.642Z",
    title: "Quantitative Blast-Radius Engineering",
    isRecent: false,
  },
  {
    href: "/blog/leveraging-big-data-for-career-success",
    category: "Newsroom",
    date: "OCT 29, 2025",
    dateTime: "2025-10-29T05:44:39.642Z",
    title: "Building for the AI-Native Operating System",
    isRecent: false,
  },
  {
    href: "/blog/the-top-industries-and-business-models-using-ai-for-fraud-prevention-and-detection",
    category: "Company",
    date: "OCT 29, 2025",
    dateTime: "2025-10-29T05:44:39.642Z",
    title:
      "The Top Workflows Protected by Autonomous Recovery",
    isRecent: false,
  },
  {
    href: "/blog/the-transformative-future-of-ai-in-digital-marketing",
    category: "Marketing",
    date: "OCT 29, 2025",
    dateTime: "2025-10-29T05:42:37.667Z",
    title: "Aria and the Future of Spatial Computing",
    isRecent: false,
  },
  {
    href: "/blog/embracing-remote-work-culture",
    category: "Company",
    date: "OCT 29, 2025",
    dateTime: "2025-10-29T05:35:09.463Z",
    title: "Operating a Distributed Machine Fleet",
    isRecent: false,
  },
];

const CATEGORIES = ["All", "Newsroom", "Marketing", "Company", "Engineering"];

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredFeatured =
    activeCategory === "All"
      ? featured
      : featured.filter((a) => a.category === activeCategory);

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="chivo_mono_2296ff99-module__wnMkSa__variable min-h-screen bg-[#050505] text-white antialiased [overflow-x:clip]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-5">
        <div className="min-h-screen pt-24 pb-16 md:pt-28 md:pb-24 xl:pt-32">

          {/* Page header */}
          <header className="relative overflow-hidden border border-[color:var(--color-border,rgba(255,255,255,0.08))]">
            <div className="relative z-10 flex flex-col gap-6 p-5 md:gap-9 md:p-8 lg:min-h-[220px] lg:justify-center">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs uppercase leading-none tracking-widest text-white/45">
                <span className="flex items-center gap-2">
                  <span className="text-white/70">Blog</span>
                </span>
              </nav>
              <h1 className="max-w-4xl font-sans text-[28px] leading-[1.14] tracking-tight md:text-[38px] md:leading-[1.08]">
                <span className="text-white/90">News, insights, and field notes </span>
                <span className="text-white/45">from the team building safe autonomous computing at Directioner-OS Research.</span>
              </h1>
            </div>
          </header>

          {/* Category tab bar */}
          <div className="sticky top-16 z-30 -mt-px bg-[#050505]/85 backdrop-blur-md">
            <div className="flex items-stretch justify-between border border-[color:var(--color-border,rgba(255,255,255,0.08))]">
              <div className="flex snap-x snap-mandatory overflow-x-auto" role="tablist" aria-label="Blog categories">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`group shrink-0 snap-center border-r border-[rgba(255,255,255,0.08)] px-4 py-3 font-mono text-xs uppercase leading-none tracking-widest transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white/60 ${
                      activeCategory === cat
                        ? "bg-white/10 text-white"
                        : "text-white/55 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex shrink-0 items-stretch">
                <a
                  aria-label="RSS Feed"
                  className="flex w-10 items-center justify-center text-white/55 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white/60"
                  href="/rss.xml"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 11a9 9 0 0 1 9 9" />
                    <path d="M4 4a16 16 0 0 1 16 16" />
                    <circle cx="5" cy="19" r="1" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Featured grid (3-up) */}
          <section className="mt-5 md:mt-8">
            {filteredFeatured.length > 0 && (
              <div className="grid grid-cols-1 gap-px border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)] sm:grid-cols-2 lg:grid-cols-3">
                {filteredFeatured.map((post, idx) => {
                  const catStyle = CATEGORY_STYLES[post.category] ?? CATEGORY_STYLES.Company!;
                  return (
                    <Link
                      key={post.href}
                      className="group flex flex-col bg-[#050505] transition-colors hover:bg-[#0d0d0d] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white/60"
                      href={post.href}
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-video overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
                        <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                          <DitheredThumb index={post.thumbIndex} />
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="flex flex-1 flex-col gap-4 p-5">
                        <div className="flex items-center justify-between gap-3 font-mono text-xs uppercase leading-none tracking-widest">
                          <span className="flex min-w-0 items-center gap-2">
                            <span
                              className="inline-block size-2 shrink-0 rounded-full"
                              style={{ background: catStyle.dot, boxShadow: "0 0 5px 0.5px rgba(133,237,117,0.5), 0 0 2px rgba(133,237,117,0.8)" }}
                              role="img"
                              aria-label="New post"
                              title="New post"
                            />
                            <span className="shrink-0 bg-white/10 px-1.5 py-1 text-white/75">{post.category}</span>
                          </span>
                          <time className="shrink-0 text-right tabular-nums text-white/45" dateTime={post.dateTime}>
                            {post.date}
                          </time>
                        </div>
                        <h2 className="text-base leading-6 text-white underline-offset-4 decoration-white/40 group-hover:underline">
                          {post.title}
                        </h2>
                        <p className="line-clamp-3 text-sm leading-5 text-white/50 transition-colors group-hover:text-white/70">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                          <div className="flex min-w-0 items-center gap-2">
                            <span className="relative block size-6 shrink-0 overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d]">
                              <img
                                alt="Directioner-OS Labs"
                                loading="lazy"
                                width={24}
                                height={24}
                                className="size-full object-cover"
                                src="/assets/blog-og/_author-avatar.png"
                              />
                            </span>
                            <span className="line-clamp-1 font-mono text-xs uppercase leading-none tracking-widest text-white/50">
                              Directioner-OS Labs
                            </span>
                          </div>
                          <span className="flex shrink-0 items-center gap-1 font-mono text-xs uppercase leading-none tracking-widest text-white/70 transition-colors group-hover:text-white">
                            Read
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
                              <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* More articles list */}
            {filteredArticles.length > 0 && (
              <div className="mt-5 border border-[rgba(255,255,255,0.08)] md:mt-8">
                <div className="flex items-center justify-between gap-3 border-b border-[rgba(255,255,255,0.08)] p-5">
                  <p className="font-mono text-xs uppercase leading-none tracking-widest text-white/45">More articles</p>
                  <p className="font-mono text-xs uppercase leading-none tracking-widest tabular-nums text-white/30">
                    {filteredArticles.length} posts
                  </p>
                </div>
                <div>
                  {filteredArticles.map((a) => {
                    const dotStyle = a.isRecent
                      ? "radial-gradient(circle at 35% 30%, #ffd39a, #f5a623 55%, #c9791a)"
                      : "radial-gradient(circle at 35% 30%, #707070, #3d3d3d 60%, #2b2b2b)";
                    const dotShadow = a.isRecent ? "0 0 3px 0.5px rgba(245,166,35,0.35)" : "none";
                    return (
                      <Link
                        key={a.href}
                        className="group grid gap-4 border-b border-[rgba(255,255,255,0.08)] p-5 transition-colors last:border-b-0 hover:bg-[#0d0d0d] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white/60 md:grid-cols-[8rem_1fr_9rem_7rem] md:items-center md:gap-6"
                        href={a.href}
                      >
                        <div className="flex items-center justify-between gap-3 font-mono text-xs uppercase leading-none tracking-widest md:contents">
                          <time className="flex items-center gap-2 tabular-nums text-white/45 md:order-1" dateTime={a.dateTime}>
                            <span
                              className="inline-block size-2 shrink-0 rounded-full"
                              style={{ background: dotStyle, boxShadow: dotShadow }}
                              role="img"
                              aria-label={a.isRecent ? "Recent post" : "Older post"}
                              title={a.isRecent ? "Recent post" : "Older post"}
                            />
                            {a.date}
                          </time>
                          <span className="text-white/40 md:order-3">{a.category}</span>
                        </div>
                        <h2 className="text-white leading-6 underline-offset-4 decoration-white/40 group-hover:underline md:order-2">
                          {a.title}
                        </h2>
                        <div className="flex items-center justify-between gap-3 md:order-4 md:justify-end">
                          <div className="flex items-center gap-1.5">
                            <span className="relative block size-6 shrink-0 overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d]">
                              <img alt="Directioner-OS Labs" loading="lazy" width={24} height={24} className="size-full object-cover" src="/assets/blog-og/_author-avatar.png" />
                            </span>
                          </div>
                          <span className="flex size-7 shrink-0 items-center justify-center bg-white/5 transition-colors group-hover:bg-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70" aria-hidden="true">
                              <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {filteredFeatured.length === 0 && filteredArticles.length === 0 && (
              <div className="mt-12 py-16 text-center">
                <p className="font-mono text-sm text-white/30">No posts in this category yet.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
