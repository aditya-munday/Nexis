"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const form = event.currentTarget;
    const values = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.get("name"),
          email: values.get("email"),
          message: values.get("message"),
          kind: "contact",
        }),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(payload.error ?? "Unable to send your message.");
      form.reset();
      setState("sent");
      setMessage("Message sent. The Directioner-OS team will review it.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your message.");
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 border border-border bg-surface p-6 md:p-8">
      <p className="utility-eyebrow">SEND A MESSAGE</p>
      <label className="flex flex-col gap-2 text-xs uppercase tracking-wider text-white/50">
        Name
        <input name="name" required maxLength={120} className="border border-border bg-black px-3 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-white/50" />
      </label>
      <label className="flex flex-col gap-2 text-xs uppercase tracking-wider text-white/50">
        Email
        <input name="email" type="email" required maxLength={254} className="border border-border bg-black px-3 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-white/50" />
      </label>
      <label className="flex flex-col gap-2 text-xs uppercase tracking-wider text-white/50">
        Operating context
        <textarea name="message" required maxLength={5000} rows={6} className="resize-y border border-border bg-black px-3 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-white/50" />
      </label>
      {message && <p role="status" className={`text-sm ${state === "error" ? "text-red-300" : "text-[#85ed75]"}`}>{message}</p>}
      <button type="submit" disabled={state === "sending"} className="w-fit bg-white px-5 py-3 font-favorit text-xs uppercase text-black transition-colors hover:bg-white/85 disabled:cursor-wait disabled:opacity-60">
        {state === "sending" ? "Sending..." : "Send securely"}
      </button>
    </form>
  );
}
