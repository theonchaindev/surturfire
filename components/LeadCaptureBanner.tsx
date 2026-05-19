"use client";
import { useState } from "react";
import Link from "next/link";

interface Props {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function LeadCaptureBanner({
  title = "Get your free fire safety survey",
  subtitle = "Our BAFE-certified engineers will assess your premises and recommend the right systems — no obligation.",
  dark = false,
}: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "banner", type: "quick_lead" }),
      });
    } catch { /* fail silently */ }
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-6 lg:px-10" style={{ background: dark ? "var(--charcoal)" : "var(--green-deep)" }}>
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div className="flex-1">
          <span className="tag text-white/50 mb-4 block w-fit">Free Survey</span>
          <h2 className="font-display text-3xl lg:text-4xl text-white font-bold leading-tight" style={{ maxWidth: "440px" }}>
            {title}
          </h2>
          <p className="text-white/60 mt-4 text-sm leading-7 max-w-sm">{subtitle}</p>
        </div>
        <div className="flex-1 w-full lg:max-w-sm">
          {submitted ? (
            <div className="p-6 text-center" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
              <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center" style={{ background: "var(--green-light)" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-white font-medium">Thanks! We&apos;ll be in touch shortly.</p>
              <p className="text-white/50 text-sm mt-1">Or build your quote now:</p>
              <Link href="/quote" className="btn-outline-white mt-4 text-xs">Build Quote →</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="form-input-box text-sm"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}
              />
              <div className="flex gap-3">
                <button type="submit" className="btn-green flex-1">Request Survey</button>
                <Link href="/quote" className="btn-outline-white px-4">→</Link>
              </div>
              <p className="text-white/30 text-xs">No spam. We&apos;ll only contact you about your fire safety requirements.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
