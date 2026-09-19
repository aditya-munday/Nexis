"use client";

import React from "react";

const CHAINS = [
  { name: "BASE", d: "M350 92 C 350 180, 96 210, 96 288", endX: 96, endY: 288, delay: "0s" },
  { name: "ETHEREUM", d: "M350 92 C 350 180, 222 210, 222 288", endX: 222, endY: 288, delay: "0.75s" },
  { name: "SOLANA", d: "M350 92 C 350 180, 350 210, 350 288", endX: 350, endY: 288, delay: "1.5s" },
  { name: "ARBITRUM", d: "M350 92 C 350 180, 478 210, 478 288", endX: 478, endY: 288, delay: "2.25s" },
  { name: "BITCOIN", d: "M350 92 C 350 180, 596 210, 596 288", endX: 596, endY: 288, delay: "3s" },
];

export default function FanOutFigure() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden p-2">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 700 402"
        fill="none"
        aria-hidden="true"
        className="max-h-[380px] w-auto overflow-visible select-none"
      >
        {/* Header Badges */}
        <text x="24" y="34" className="font-mono" fontSize="9" fill="rgba(255,255,255,0.25)">
          EXECUTION FAN-OUT
        </text>
        <text x="604" y="34" className="font-mono" fontSize="9" fill="rgba(255,255,255,0.25)">
          T+24S
        </text>

        {/* Root Runtime Box */}
        <rect x="292" y="58" width="116" height="34" stroke="#373737" fill="#101010" rx="2" />
        <text x="308" y="79" className="font-mono font-medium" fontSize="9.5" fill="rgba(255,255,255,0.85)">
          NEXIS RUNTIME
        </text>

        {/* Chain Paths with Streaming Comets */}
        {CHAINS.map((chain) => (
          <g key={chain.name} className="fig-chain group cursor-pointer">
            {/* Background static trajectory */}
            <path
              className="fig-chain-path transition-colors duration-200 group-hover:stroke-[#4a4a4a]"
              d={chain.d}
              stroke="#262626"
              strokeWidth="1.2"
              fill="none"
            />
            {/* Animated neon comet streaming through the curve */}
            <path
              className="fig-comet"
              d={chain.d}
              pathLength={100}
              style={{ animationDelay: chain.delay } as React.CSSProperties}
            />
            {/* Target chain terminal box */}
            <rect
              x={chain.endX - 2}
              y={chain.endY - 2}
              width="4"
              height="4"
              fill="rgba(255,255,255,0.5)"
              className="group-hover:fill-[#85ed75] transition-colors"
            />
            {/* Chain Label */}
            <text
              x={chain.endX}
              y={chain.endY + 26}
              textAnchor="middle"
              className="font-mono text-[9px] uppercase tracking-wider transition-colors duration-200 group-hover:fill-white"
              fill="rgba(255,255,255,0.45)"
            >
              {chain.name}
            </text>
          </g>
        ))}

        {/* Strong pulsing neon pulse at central dispatch */}
        <rect
          className="fig-pulse-strong"
          x="348"
          y="90"
          width="4"
          height="4"
          fill="#85ed75"
        />

        {/* Flowing dotted pipe downwards to receipts */}
        <path
          className="fig-dash-flow-slow"
          d="M350 292 V 344"
          stroke="#333333"
          strokeDasharray="3 3"
        />

        {/* Receipt Box */}
        <rect
          x="284"
          y="344"
          width="132"
          height="30"
          stroke="#2a2a2a"
          fill="#0e0e0e"
          rx="2"
        />
        <text
          x="300"
          y="363"
          className="font-mono font-medium fig-pulse-soft"
          fontSize="9"
          fill="rgba(133,237,117,0.9)"
        >
          RECEIPT / 0047
        </text>
      </svg>
    </div>
  );
}
