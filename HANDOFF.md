# Comprehensive Handoff — Nex Copilot / Nexis Web Application

## 1. Mission & End Goal
The objective is to create an exact, 1:1 pixel-perfect, fully functional local version of **Nex Copilot** (`https://nex-t1.ai/`) built entirely in **Next.js 15 App Router + React 19**, with:
- **Pure React Codebase**: Completely eliminate and delete temporary HTML scrapes ([`scraped_pages/`](file:///home/aditya_munday/projects/Email_Sender/scraped_pages/)) and standalone servers ([`server.mjs`](file:///home/aditya_munday/projects/Email_Sender/server.mjs)); implement all pages as clean, typed React components in [`app/`](file:///home/aditya_munday/projects/Email_Sender/app/).
- **Zero External CDN Dependencies**: 100% of fonts, stylesheets, images, vector SVGs, and WebGL 3D scenes hosted strictly in [`public/`](file:///home/aditya_munday/projects/Email_Sender/public/).
- **Flawless Micro-Interactions**: Implement all original animations including navbar ASCII character glitch/flying on cursor hover, button corner ticks, sliding arrows, interactive canvas backdrops, and card spotlights.
- **Zero Dead Links & Complete Multi-Page Coverage**: Every navigation link, dropdown item, and button must route to a fully fleshed-out, working page with proper word wrapping, responsive layouts, and zero visual gaps.

---

## 2. Micro-Interactions & Special Effects Specifications

### A. Navbar Cursor Hover Text Scramble / Flying Effect (`AsciiGlitchRipple`)
- **Original Location**: Found in [`public/static/chunks/14cg-f6nsa-kn.js`](file:///home/aditya_munday/projects/Email_Sender/public/static/chunks/14cg-f6nsa-kn.js) (Module `856304`) and applied across `LandingHeader` nav items.
- **Visual Behavior**: When the cursor moves over a navigation link (`01 PLATFORM`, `02 PAYMENTS`, `03 MARKETS`, `04 RESEARCH`) or action buttons, the text characters scramble into cyberpunk ASCII symbols that ripple outward from the mouse entry coordinate before resolving back to clean text.
- **Technical Specification**:
  - Character set: `.,·-─~+:;=*π""┐┌┘┴┬╗╔╝╚╬╠╣╩╦║░▒▓█▄▀▌▐■!?&#$@0123456789*`
  - Trigger: `onMouseEnter` and `onMouseMove` (parent container hover).
  - Algorithm: Calculates cursor relative horizontal offset `(mouseX - rect.left) / rect.width * textLength`. Dispatches animated waves with `startTime = Date.now()`, wave duration `dur = 1000ms`, wave speed `spread = 1`. During each `requestAnimationFrame`, characters within distance `radius = (now - startTime) / dur` are substituted from the character pool while preserving whitespace, then cleanly restored when waves expire.
  - Component to build: [`app/components/AsciiGlitchRipple.tsx`](file:///home/aditya_munday/projects/Email_Sender/app/components/AsciiGlitchRipple.tsx) as a client component (`"use client"`).

### B. Button Hover Corner Brackets (`CornerTicks`)
- **Visual Behavior**: Buttons (`Launch Nexis`, `Book a Demo`, login actions) have 4 invisible corner brackets that optically snap into view on hover.
- **Markup / CSS Structure**:
  ```tsx
  <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true">
    <span className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-white" />
    <span className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-white" />
    <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-white" />
    <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white" />
  </span>
  ```

### C. Button Arrow Slide Animation
- **Visual Behavior**: Arrow icons slide horizontally out to the right and reappear smoothly from the left:
  ```tsx
  <div className="w-3 h-3 overflow-hidden relative">
    <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
      <svg className="w-3 h-3 shrink-0" ... />
      <svg className="w-3 h-3 shrink-0" ... />
    </div>
  </div>
  ```

### D. Hero WebGL 3D Scene (`UnicornStudio`)
- **Original Location**: Replaces `<template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING">` in Section 00 (Hero).
- **Assets Already Downloaded Locally**:
  - Engine: [`public/unicornStudio.umd.js`](file:///home/aditya_munday/projects/Email_Sender/public/unicornStudio.umd.js) (177 KB, patched for local file serving).
  - Scene JSON: [`public/embeds/2PvJj4fVH8PXnSKtrEbt`](file:///home/aditya_munday/projects/Email_Sender/public/embeds/2PvJj4fVH8PXnSKtrEbt) (39.4 KB).
  - Glyphs & Fonts: `public/media/glyphs/remix_squares.png`, `public/fonts/google_fonts/...`.
- **Embed Tag**:
  ```html
  <div data-us-project="2PvJj4fVH8PXnSKtrEbt" class="absolute inset-0 h-full w-full" />
  ```
- **Parallax Scroll**: Tracks scroll offset and updates `--hero-parallax-y: (0.35 * scrollY)px`.

### E. Platform Architecture SVG Comets
- Animated dashed lines tracing flow between nodes (`PLAN` → `GOVERN` → `EXECUTE` → `SETTLE`) using CSS stroke-dashoffset transitions (`.fig-comet`).

### F. Interactive Card Spotlight (`CardSpotlight`)
- Cards track cursor mouse position (`--mouse-x`, `--mouse-y`) and render a radial gradient spotlight (`radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 80%)`).

### G. Footer Flowing Dots Backdrop (`FooterDotCanvas`)
- An interactive HTML5 canvas at the bottom of the page rendering an organic floating dot grid that gently repels away from the user's cursor.

---

## 3. Dead Links & Page Coverage Matrix

Every single link on the site must resolve to an active, designed page with zero 404s or empty views:

| Link / Target | URL Route | Destination Status & Implementation Plan |
| :--- | :--- | :--- |
| **Home** | `/` | Main landing page: Hero (Unicorn WebGL), Platform, Payments, Markets, Research, Stories, Join |
| **01 Platform** | `/#platform` | Smooth scroll anchor to Platform Architecture section with SVG interactive route diagrams |
| **02 Payments** | `/#payments` | Smooth scroll anchor to Stablecoin Payments section with interactive Policy Kit code block |
| **03 Markets** | `/#markets` | Smooth scroll anchor to DeFi Markets & Yield section with playbook card |
| **04 Research** | `/#research` | Smooth scroll anchor to Autonomous Compute & Agent Benchmarks section |
| **Benchmarks Menu** | `/benchmarks` | Dedicated Benchmarks page: Model reasoning scores, tool-use latency, accuracy vs frontier models |
| **Leaderboard** | `/benchmarks/leaderboard` | Full interactive leaderboard: Sortable table by model, chain, cost-per-task, and success rate |
| **Documentation** | `/docs` | Complete documentation portal: Sidebar navigation, quickstart, CLI commands, Policy Kit API |
| **API Reference** | `/docs/api` | REST & SDK API reference with endpoint descriptions and request/response payloads |
| **Blog / News** | `/blog` | Nexis Engineering & Research Blog: Grid of articles, tags, authors, and article detail view |
| **About / Manifesto** | `/about` | Protocol mission, non-custodial security principles, team, and ecosystem partners |
| **App / Console** | `/app` | Copilot Console: On-chain terminal UI, wallet connect modal simulation, agent task runner |
| **Contact / Demo** | `/contact` | Book a Demo / Contact Form: Work email, organization, use-case selection, submit confirmation |
| **Terms of Service** | `/terms` | Complete legal terms for non-custodial agent execution |
| **Privacy Policy** | `/privacy` | Complete data minimization and privacy terms |

---

## 4. Migration Plan: Moving to Pure React / Next.js

The temporary HTML scraping approach ([`scraped_pages/`](file:///home/aditya_munday/projects/Email_Sender/scraped_pages/)) was used as an intermediate audit tool. The target state is **100% Next.js 15 App Router**:

### Phase 1: Component Decomposition in `app/components/`
Break the monolithic page into modular, reusable components:
1. `Header.tsx`: Announcement banner, logo, navigation with `AsciiGlitchRipple`, dropdown popovers (Benchmarks & Docs), login buttons, and mobile hamburger drawer.
2. `Hero.tsx`: Title with glowing text effect (`--glow-x`, `--glow-y`), subtitle, Unicorn Studio WebGL canvas container with parallax scroll effect.
3. `ChainsBar.tsx`: Ticker of 10 blockchain icons (`Arbitrum`, `BNB`, `Base`, `Bitcoin`, `Ethereum`, `Optimism`, `Polygon`, `Sei`, `Solana`, `Sui`).
4. `PlatformSection.tsx`: SVG architecture diagrams (`PLAN`, `GOVERN`, `EXECUTE`, `SETTLE`) with comet stroke animations and `lab.png` background.
5. `PaymentsSection.tsx`: Policy Kit code editor window, syntax highlighting, interactive copy buttons (`Copy Policy Kit code`, `Copy Nex CLI command`).
6. `MarketsSection.tsx`: Yield discovery visual (`playbook-yield.webp`), route table, orderbook simulation.
7. `ResearchSection.tsx`: Compute network diagram (`compute-bg.png`), benchmark comparisons.
8. `StoriesSection.tsx`: Case studies and user workflow quotes.
9. `JoinSection.tsx` & `Footer.tsx`: Interactive `FooterDotCanvas`, social links, legal navigation, status badge.

### Phase 2: Building Out Sub-Pages
Implement full, rich layouts for all secondary routes in `app/`:
- `app/blog/page.tsx`
- `app/benchmarks/page.tsx`
- `app/benchmarks/leaderboard/page.tsx`
- `app/docs/page.tsx`
- `app/about/page.tsx`
- `app/app/page.tsx`
- `app/contact/page.tsx`

### Phase 3: Cleanup
Once all routes are active in `app/` and verified with `next build`:
1. Remove `scraped_pages/` directory.
2. Remove `server.mjs`.
3. Set `npm run dev` to `next dev` and `npm start` to `next start`.

---

## 5. Typography, Measure & Word Wrapping Guidelines
To ensure no awkward gaps or broken text wrapping:
- **Heading Balances**: Apply `text-wrap: balance` across all `h1`, `h2`, `h3` tags.
- **Measure Limits**: Body copy paragraphs must have measure limits (`max-w-prose` or `max-w-xl`) to prevent overly long reading lines.
- **Font Tokens**:
  - Primary Sans: Geist (`font-sans`, `.geist_f3917156-module__8abXJW__variable`)
  - Mono / Code: Geist Mono & Chivo Mono (`font-mono`, `.chivo_mono_b95da7ba-module__6lSSaG__variable`)
  - UI Labels / Headings: Favorit (`font-favorit`, uppercase tracking)
  - Body: Inter (`.inter_d50ff178-module__JsvCAG__variable`)
- **Spacing Scale**: Adhere strictly to the container bounds: `max-w-360 mx-auto px-4 md:px-5`.

---

## 6. Complete Local Asset Inventory in `public/`

All assets are 100% local with zero CDN fallbacks:

```
public/
├── assets/
│   ├── chains/
│   │   ├── Arbitrum.png (25 KB)
│   │   ├── BNB.png (382 KB)
│   │   ├── Base.png (3.3 KB)
│   │   ├── Bitcoin.png (289 KB)
│   │   ├── Ethereum.png (289 KB)
│   │   ├── Optimism.png (2.5 KB)
│   │   ├── Polygon.png (10 KB)
│   │   ├── Sei.png (29 KB)
│   │   ├── Solana.png (234 KB)
│   │   └── Sui.png (6.5 KB)
│   ├── nex-landing/
│   │   ├── art/
│   │   │   ├── playbook-treasury.webp (166 KB)
│   │   │   └── playbook-yield.webp (377 KB)
│   │   └── figma/
│   │       └── workflows-background.png (1.8 MB)
│   ├── logo-dark.svg (14.5 KB)
│   └── logo-new.svg (2.2 KB)
├── backgrounds/
│   ├── compute-bg.png (1.3 MB)
│   └── lab.png (571 KB)
├── embeds/
│   ├── 2PvJj4fVH8PXnSKtrEbt (39 KB Unicorn Studio scene JSON)
│   └── 2PvJj4fVH8PXnSKtrEbt.json
├── media/
│   └── glyphs/
│       └── remix_squares.png (370 B)
├── fonts/
│   └── google_fonts/
│       └── gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4nZPby1QNtA.ttf (77 KB)
├── static/
│   ├── chunks/
│   │   ├── 0_lip61trs5ex.css (42 KB)
│   │   ├── 0z2w9nzo7p43w.css (338 KB Tailwind v4 compiled utilities)
│   │   ├── 0b4pon~wu5796.css (3 KB)
│   │   └── 0rd7m2ci6_an6.css (9 KB)
│   └── media/
│       └── *.woff2 (21 WOFF2 font files)
├── unicornStudio.umd.js (177 KB WebGL engine)
└── icon.svg (Favicon mark)
```

---

## 7. Current Verification Status
- **TypeScript**: `npx tsc --noEmit` passes with **0 errors**.
- **Next.js Production Build**: `npm run build` compiles with **0 errors** (all 11 routes statically rendered).
- **Assets on Disk**: `verify_all_assets_index.py` confirms **0 missing assets**.
- **Server Endpoints**: All endpoints respond with **200 OK**.

---

## 8. User Rules & Non-Negotiable Constraints
1. **STRICTLY NO COMMENTS IN CODE**: Do not write comments in any `.ts`, `.tsx`, `.js`, `.mjs`, or `.css` files across the codebase.
2. **NO EXTERNAL CDN DEPENDENCIES**: Every single asset, script, font, and image must resolve strictly from local disk (`public/`).
3. **PRESERVE REFERENCE SNAPSHOT**: Keep [`nex-t1_ai.html`](file:///home/aditya_munday/projects/Email_Sender/nex-t1_ai.html) untouched in the project root as the ground-truth reference.