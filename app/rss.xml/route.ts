import { NextResponse } from "next/server";

const siteUrl = "https://nex-t1.ai";

export function GET() {
  const published = new Date("2026-09-19T00:00:00.000Z").toUTCString();
  const items = [
    ["Nexis — governed autonomy for onchain execution", "/", "Plan, simulate, approve, and reconcile every wallet operation."],
    ["Nexis Research", "/research", "Notes from the research and engineering teams."],
    ["Nexis Writings", "/blog", "Product, protocol, and governance updates."],
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
        <title>Nexis</title>
        <link>${siteUrl}</link>
        <description>Governed autonomy for onchain execution.</description>
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
