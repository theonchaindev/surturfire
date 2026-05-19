"use client";
import { useState } from "react";
import Link from "next/link";

interface Props {
  title?: string;
  subtitle?: string;
}

export default function LeadCaptureBanner({
  title = "Is your building fire-safe?",
  subtitle = "Book a free site survey today — our BAFE-certified engineers will assess and advise.",
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
    <section className="py-20 px-6 lg:px-10" style={{ background: "#cc2c2c" }}>
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl text-white font-bold leading-tight" style={{ maxWidth: "440px" }}>
            {title}
          </h2>
          <p className="mt-4 text-sm leading-7 max-w-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
            {subtitle}
          </p>
        </div>
        <div className="flex-1 w-full lg:max-w-sm">
          {submitted ? (
            <div className="p-6 text-center" style={{ border: "1px solid rgba(255,255,255,0.25)", background: "rgba(0,0,0,0.15)" }}>
              <div
                className="w-10 h-10 mx-auto mb-4 flex items-center justify-center"
                style={{ background: "#111111" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-white font-semibold">Thanks! We&apos;ll be in touch shortly.</p>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>Or build your quote now:</p>
              <Link href="/quote" className="btn-dark mt-4">Build Quote →</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                style={{
                  width: "100%",
                  background: "white",
                  border: "none",
                  padding: "13px 16px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.95rem",
                  color: "#111111",
                  outline: "none",
                }}
              />
              <div className="flex gap-3">
                <button type="submit" className="btn-dark flex-1">Request Survey</button>
                <Link href="/quote" className="btn-outline-white" style={{ padding: "13px 16px" }}>→</Link>
              </div>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                No spam. We&apos;ll only contact you about your fire safety requirements.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
