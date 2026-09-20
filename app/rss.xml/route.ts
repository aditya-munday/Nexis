import { NextResponse } from "next/server";

const siteUrl = "https://directioner-os.ai";

export function GET() {
  const published = new Date("2026-09-19T00:00:00.000Z").toUTCString();
  const items = [
    ["Directioner-OS — safe autonomous computing", "/", "Plan, verify, approve, and recover every system mutation."],
    ["Directioner-OS Research", "/research", "Notes from the research and engineering teams."],
    ["Directioner-OS Writings", "/blog", "Product, protocol, and governance updates."],
  ]
    .map(
      ([title, path, description]) => `
        <item>
          <title><![CDATA[${title}]]></title>
          <link>${siteUrl}${path}</link>
          <guid>${siteUrl}${path}</guid>
          <description><![CDATA[${description}]]></description>
          <pubDate>${published}</pubDate>
        </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Directioner-OS</title>
        <link>${siteUrl}</link>
        <description>Capability-scoped autonomy for safe computing.</description>
        <language>en</language>
        <lastBuildDate>${published}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
