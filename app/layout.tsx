import type { Metadata } from "next";
import RouteLifecycle from "./components/RouteLifecycle";

export const metadata: Metadata = {
  title: "Nex Copilot — The Autonomous Economy Runs on Nexis",
  description: "Nex Copilot is an on-chain AI agent for stablecoin payments, DeFi automation, cross-chain execution, embedded wallets, market monitoring, dApp workflows, and wallet-controlled approvals.",
  icons: {
    icon: "/icon.svg"
  }
};

import "./globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans geist_f3917156-module__8abXJW__variable geist_mono_8135f3c4-module__mC3Wtq__variable chivo_mono_b95da7ba-module__6lSSaG__variable">
      <head>
        <link rel="alternate" type="application/rss+xml" title="Nexis RSS" href="/rss.xml" />
        <link rel="stylesheet" href="/module/css/0_lip61trs5ex.css" />
        <link rel="stylesheet" href="/module/css/0z2w9nzo7p43w.css" />
        <link rel="stylesheet" href="/module/css/0b4pon~wu5796.css" />
        <link rel="stylesheet" href="/module/css/0rd7m2ci6_an6.css" />
        <link rel="stylesheet" href="/module/css/0nignvb3.d029.css" />
        <link rel="stylesheet" href="/module/css/01utgtykga2_a.css" />
        <link rel="stylesheet" href="/module/css/02a.j~i-okp71.css" />
        <link rel="stylesheet" href="/module/css/046d217hzyb~2.css" />
        <link rel="stylesheet" href="/module/css/04kuxjfu0zhd0.css" />
        <link rel="stylesheet" href="/module/css/14d9izr73949a.css" />
      </head>
      <body className="inter_d50ff178-module__JsvCAG__variable m-0">
        <RouteLifecycle />
        {children}
      </body>
    </html>
  );
}
