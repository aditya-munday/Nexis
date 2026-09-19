import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nex Copilot — The Autonomous Economy Runs on Nexis",
  description: "Nex Copilot is an on-chain AI agent for stablecoin payments, DeFi automation, cross-chain execution, embedded wallets, market monitoring, dApp workflows, and wallet-controlled approvals.",
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans geist_f3917156-module__8abXJW__variable geist_mono_8135f3c4-module__mC3Wtq__variable">
      <head>
        <link rel="stylesheet" href="/module/css/0_lip61trs5ex.css" />
        <link rel="stylesheet" href="/module/css/0z2w9nzo7p43w.css" />
        <link rel="stylesheet" href="/module/css/0b4pon~wu5796.css" />
        <link rel="stylesheet" href="/module/css/0rd7m2ci6_an6.css" />
      </head>
      <body className="inter_d50ff178-module__JsvCAG__variable" style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
