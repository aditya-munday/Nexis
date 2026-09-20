import { NextResponse } from "next/server";
import { Resend } from "resend";

import { renderContactEmail } from "@/lib/email/contact-template";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requestLog = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  kind?: unknown;
};

function invalid(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return invalid("Content-Type must be application/json.");
  }

  const origin = request.headers.get("origin");
  const requestOrigin = new URL(request.url).origin;
  if (origin && origin !== requestOrigin) {
    return NextResponse.json({ error: "Cross-origin requests are not allowed." }, { status: 403 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientKey = forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const recent = (requestLog.get(clientKey) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
  }
  recent.push(now);
  requestLog.set(clientKey, recent);
  if (requestLog.size > 10_000) {
    for (const [key, timestamps] of requestLog) {
      if (timestamps.every((timestamp) => now - timestamp >= WINDOW_MS)) {
        requestLog.delete(key);
      }
    }
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return invalid("Request body must be valid JSON.");
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const kind = payload.kind === "waitlist" ? "waitlist" : "contact";

  if (!name || name.length > 120) return invalid("Name is required and must be 120 characters or fewer.");
  if (!emailPattern.test(email) || email.length > 254) return invalid("A valid email address is required.");
  if (!message || message.length > 5000) return invalid("Message is required and must be 5000 characters or fewer.");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_INBOX_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: "Email delivery is not configured on the server." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const emailContent = renderContactEmail({ name, email, message, kind });
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: emailContent.subject,
    text: emailContent.text,
    html: emailContent.html,
  });

  if (error) {
    console.error("Contact email delivery failed", error);
    return NextResponse.json({ error: "Unable to deliver the request." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
