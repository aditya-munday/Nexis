"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

/* ─── Animated blue canvas shader for left visual panel ─── */
function AuthShaderPanel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    let lastFrameTime = 0;

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (now: number) => {
      raf = 0;
      if (document.hidden) return;
      if (now - lastFrameTime < 32) {
        raf = requestAnimationFrame(draw);
        return;
      }
      lastFrameTime = now;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      frame++;
      ctx.clearRect(0, 0, w, h);

      // Deep electric blue base gradient
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "#0555d4");
      bg.addColorStop(0.4, "#0a4ecf");
      bg.addColorStop(0.8, "#0340a8");
      bg.addColorStop(1, "#023080");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const t = frame * 0.01;
      const orbs = [
        { x: w * 0.25 + Math.sin(t) * 55, y: h * 0.35 + Math.cos(t * 0.7) * 40, r: 280, color: "rgba(100, 180, 255, 0.25)" },
        { x: w * 0.8 + Math.cos(t * 0.8) * 50, y: h * 0.65 + Math.sin(t * 0.9) * 45, r: 220, color: "rgba(80, 100, 255, 0.2)" },
        { x: w * 0.55, y: h * 0.15 + Math.sin(t * 1.2) * 28, r: 180, color: "rgba(255, 255, 255, 0.1)" },
        { x: w * 0.1 + Math.sin(t * 0.6) * 30, y: h * 0.8, r: 200, color: "rgba(30, 200, 255, 0.15)" },
      ];
      for (const o of orbs) {
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, o.color);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      // Animated dot grid overlay
      const spacing = 26;
      for (let y = 13; y < h; y += spacing) {
        for (let x = 13; x < w; x += spacing) {
          const t2 = frame * 0.008 + x * 0.003 + y * 0.003;
          const alpha = 0.12 + 0.06 * Math.sin(t2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.15, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        lastFrameTime = 0;
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, height: "100%", width: "100%", pointerEvents: "none", borderRadius: "inherit" }}
      aria-hidden="true"
    />
  );
}

function ChainIcon({ sym }: { sym: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      title={sym}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: "32px", height: "32px", borderRadius: "8px",
        background: hovered ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(6px)",
        fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.9)",
        transition: "transform 0.18s ease, background 0.18s ease",
        transform: hovered ? "scale(1.12)" : "scale(1)", cursor: "default",
        fontFamily: "var(--font-favorit, 'Chivo Mono', monospace)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {sym}
    </span>
  );
}

function ProviderButton({
  provider, label, gradientColors, children,
}: {
  provider: string; label: string; gradientColors: string[]; children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const gradientId = `pgrad-${provider}`;
  return (
    <button
      type="button" title={provider.charAt(0).toUpperCase() + provider.slice(1)} aria-label={label}
      style={{
        position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
        width: "100%", aspectRatio: "1", maxHeight: "52px",
        background: hovered ? "#efefef" : "#f8f8f8", border: "none", borderRadius: "12px",
        cursor: "pointer", overflow: "hidden",
        transition: "background 0.15s, transform 0.15s", transform: hovered ? "scale(1.04)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    >
      <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }} focusable="false" viewBox="0 0 41 41">
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id={gradientId} x1="1" x2="40" y1="1" y2="40">
            {gradientColors.map((color, i) => <stop key={i} offset={i / (gradientColors.length - 1)} stopColor={color} />)}
          </linearGradient>
        </defs>
        <path d="M 1 20.5 V 10.2 Q 1 1 10.2 1 H 30.8 Q 40 1 40 10.2 V 20.5" pathLength="1"
          style={{ fill: "none", strokeWidth: "1px", strokeLinecap: "round", stroke: `url(#${gradientId})`, strokeDasharray: "1", strokeDashoffset: hovered ? "0" : "1", transition: "stroke-dashoffset 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }} />
        <path d="M 1 20.5 V 30.8 Q 1 40 10.2 40 H 30.8 Q 40 40 40 30.8 V 20.5" pathLength="1"
          style={{ fill: "none", strokeWidth: "1px", strokeLinecap: "round", stroke: `url(#${gradientId})`, strokeDasharray: "1", strokeDashoffset: hovered ? "0" : "1", transition: "stroke-dashoffset 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.08s" }} />
      </svg>
      <span aria-hidden="true" style={{ position: "absolute", inset: 0, borderRadius: "12px", background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 60%)", opacity: hovered ? 1 : 0, transition: "opacity 0.3s", pointerEvents: "none" }} />
      <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", width: 22, height: 22 }}>{children}</span>
    </button>
  );
}

function AuthSubmitButton({ isSignup }: { isSignup: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button type="submit"
      style={{
        position: "relative", display: "flex", width: "100%", alignItems: "center", justifyContent: "center",
        gap: "6px", padding: "0 20px", height: "42px",
        background: hovered ? "transparent" : "#111", color: hovered ? "#111" : "#fff",
        fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase",
        border: hovered ? "1px solid #111" : "1px solid transparent", borderRadius: 0,
        cursor: "pointer", fontFamily: "var(--font-favorit, 'Chivo Mono', monospace)",
        transition: "background 0.15s, color 0.15s, border-color 0.15s", outline: "none", marginTop: "4px",
      }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    >
      <span style={{ position: "relative", zIndex: 1 }}>{isSignup ? "Create account" : "Sign in"}</span>
      <span aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: hovered ? 1 : 0, transition: "opacity 0.15s" }}>
        <span style={{ position: "absolute", top: 0, left: 0, width: 6, height: 6, borderTop: "1px solid currentColor", borderLeft: "1px solid currentColor" }} />
        <span style={{ position: "absolute", top: 0, right: 0, width: 6, height: 6, borderTop: "1px solid currentColor", borderRight: "1px solid currentColor" }} />
        <span style={{ position: "absolute", bottom: 0, left: 0, width: 6, height: 6, borderBottom: "1px solid currentColor", borderLeft: "1px solid currentColor" }} />
        <span style={{ position: "absolute", bottom: 0, right: 0, width: 6, height: 6, borderBottom: "1px solid currentColor", borderRight: "1px solid currentColor" }} />
      </span>
    </button>
  );
}

const CHAIN_ROWS = [
  ["Ξ", "◈", "₮", "▲", "OP", "▲", "⬡", "⚛", "◎"],
  ["⬡", "₿", "🦄", "◎", "■"],
];

function AuthForm() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") ?? "signin";
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);
  const isSignup = mode === "signup";

  return (
    <>
      <style>{`
        .auth-aside { display: none !important; }
        @media (min-width: 1024px) { .auth-aside { display: flex !important; } }
      `}</style>
      <div style={{
        minHeight: "100vh", width: "100%", background: "#ffffff",
        display: "flex", padding: "12px",
        fontFamily: "var(--font-sans, Inter, -apple-system, Arial, sans-serif)",
        color: "#111", boxSizing: "border-box",
      }}>
        {/* LEFT: Blue Visual Panel */}
        <aside className="auth-aside" aria-label="Nexis authentication visual"
          style={{
            position: "relative", flexDirection: "column", justifyContent: "space-between",
            overflow: "hidden", borderRadius: "20px", padding: "48px 40px",
            flex: "0 0 46%", maxWidth: "580px",
          }}>
          <AuthShaderPanel />
          <div style={{ position: "relative", zIndex: 10 }}>
            <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", margin: "0 0 20px", fontFamily: "var(--font-favorit, 'Chivo Mono', monospace)" }}>
              Autonomous DeFi execution
            </p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.18, letterSpacing: "-0.02em", color: "#ffffff", margin: 0 }}>
              <span style={{ display: "block" }}>Review, approve,</span>
              <span style={{ display: "block" }}>and execute across</span>
              <span style={{ display: "block" }}>every wallet.</span>
            </h2>
          </div>
          <div style={{ position: "relative", zIndex: 10 }}>
            {CHAIN_ROWS.map((row, ri) => (
              <div key={ri} style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: ri === 0 ? 0 : "10px" }}>
                {row.map((sym, i) => <ChainIcon key={i} sym={sym} />)}
              </div>
            ))}
          </div>
        </aside>

        {/* RIGHT: Sign-In Form */}
        <section aria-labelledby="auth-screen-title"
          style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px" }}>
          <div style={{ width: "100%", maxWidth: "380px" }}>
            <h1 id="auth-screen-title" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#111", margin: "0 0 28px" }}>
              {isSignup ? "Create your account" : "Sign in to your account"}
            </h1>

            <form onSubmit={(e) => { e.preventDefault(); window.location.href = "/app"; }} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {/* Email */}
              <div style={{ marginBottom: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                  <label htmlFor="auth-email" style={{ fontSize: "11px", fontWeight: 500, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--font-favorit, 'Chivo Mono', monospace)" }}>Email</label>
                </div>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input autoComplete="email" id="auth-email" placeholder="Email" type="email" name="email" required
                    onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)}
                    style={{ width: "100%", height: "42px", padding: "0 42px 0 12px", fontSize: "13px", color: "#111", background: emailFocused ? "#fff" : "#f9f9f9", border: emailFocused ? "1.5px solid #111" : "1px solid #e0e0e0", borderRadius: "8px", outline: "none", fontFamily: "var(--font-sans, Inter, Arial, sans-serif)", boxSizing: "border-box", transition: "border-color 0.15s, background 0.15s, box-shadow 0.15s", boxShadow: emailFocused ? "0 0 0 3px rgba(0,0,0,0.06)" : "none" }} />
                  <span aria-hidden="true" style={{ position: "absolute", right: 0, top: 0, bottom: 0, display: "flex", alignItems: "center", padding: "0 12px", color: "#aaa", pointerEvents: "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Password */}
              <div style={{ marginBottom: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                  <label htmlFor="auth-password" style={{ fontSize: "11px", fontWeight: 500, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--font-favorit, 'Chivo Mono', monospace)" }}>Password</label>
                  {!isSignup && <a href="/auth?mode=reset" style={{ fontSize: "11px", color: "#2563eb", textDecoration: "none", fontFamily: "var(--font-favorit, 'Chivo Mono', monospace)" }}>Forgot your password?</a>}
                </div>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input autoComplete={isSignup ? "new-password" : "current-password"} id="auth-password" minLength={8} placeholder="Enter your password" type={showPassword ? "text" : "password"} name="password" required
                    onFocus={() => setPassFocused(true)} onBlur={() => setPassFocused(false)}
                    style={{ width: "100%", height: "42px", padding: "0 42px 0 12px", fontSize: "13px", color: "#111", background: passFocused ? "#fff" : "#f9f9f9", border: passFocused ? "1.5px solid #111" : "1px solid #e0e0e0", borderRadius: "8px", outline: "none", fontFamily: "var(--font-sans, Inter, Arial, sans-serif)", boxSizing: "border-box", transition: "border-color 0.15s, background 0.15s, box-shadow 0.15s", boxShadow: passFocused ? "0 0 0 3px rgba(0,0,0,0.06)" : "none" }} />
                  <span style={{ position: "absolute", right: 0, top: 0, bottom: 0, display: "flex", alignItems: "center", padding: "0 12px" }}>
                    <button aria-label={showPassword ? "Hide password" : "Show password"} type="button" onClick={() => setShowPassword(!showPassword)} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "#aaa", display: "flex", alignItems: "center" }}>
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </span>
                </div>
              </div>

              {/* Remember */}
              <label style={{ display: "flex", alignItems: "center", gap: "10px", margin: "10px 0 18px", cursor: "pointer" }}>
                <span onClick={() => setRemember(!remember)} style={{ width: "16px", height: "16px", borderRadius: "4px", border: remember ? "1.5px solid #111" : "1.5px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", background: remember ? "#111" : "#fff", flexShrink: 0, transition: "border-color 0.15s, background 0.15s", cursor: "pointer" }}>
                  {remember && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </span>
                <input type="checkbox" style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", borderWidth: 0 }} checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                <span style={{ fontSize: "11px", color: "#555", fontFamily: "var(--font-favorit, 'Chivo Mono', monospace)", textTransform: "uppercase", letterSpacing: "0.06em", userSelect: "none" }}>Remember me on this device</span>
              </label>

              <AuthSubmitButton isSignup={isSignup} />
            </form>

            {/* Divider */}
            <div style={{ position: "relative", textAlign: "center", margin: "22px 0", fontSize: "11px", color: "#aaa", fontFamily: "var(--font-favorit, 'Chivo Mono', monospace)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              <span style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "#e8e8e8", transform: "translateY(-50%)" }} />
              <span style={{ position: "relative", background: "#fff", padding: "0 10px" }}>{isSignup ? "Or sign up with" : "Or sign in with"}</span>
            </div>

            {/* Provider Buttons */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
              <ProviderButton provider="google" label="Sign in with Google" gradientColors={["rgba(234, 67, 53, 1)", "rgba(251, 188, 5, 1)", "rgba(52, 168, 83, 1)", "rgba(66, 133, 244, 1)"]}>
                <img alt="" src="/assets/auth/social/google-logo-base.svg" style={{ width: 20, height: 20, objectFit: "contain" }} />
              </ProviderButton>
              <ProviderButton provider="discord" label="Sign in with Discord" gradientColors={["#5865F2", "#7289DA", "#5865F2"]}>
                <img alt="" src="/assets/auth/social/discord-logo-base.svg" style={{ width: 20, height: 20, objectFit: "contain" }} />
              </ProviderButton>
              <ProviderButton provider="github" label="Sign in with GitHub" gradientColors={["#333", "#666", "#333"]}>
                <img alt="" src="/assets/auth/social/github-logo-base.svg" style={{ width: 20, height: 20, objectFit: "contain" }} />
              </ProviderButton>
              <ProviderButton provider="x" label="Sign in with X" gradientColors={["#000", "#444", "#000"]}>
                <img alt="" src="/assets/auth/social/x-logo-base.svg" style={{ width: 16, height: 16, objectFit: "contain" }} />
              </ProviderButton>
            </div>

            {/* Switch panel */}
            <div style={{ marginTop: "24px", textAlign: "center", fontSize: "12px", color: "#666", fontFamily: "var(--font-favorit, 'Chivo Mono', monospace)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {isSignup ? (
                <span>Already have an account?{" "}<Link href="/auth?mode=signin&next=%2Fapp" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>Sign in</Link></span>
              ) : (
                <span>New to Nexis?{" "}<Link href="/auth?mode=signup&next=%2Fapp" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>Create account</Link></span>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#fff" }} />}>
      <AuthForm />
    </Suspense>
  );
}
