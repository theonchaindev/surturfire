"use client";

import { useState } from "react";
import Link from "next/link";

interface Props {
  title?: string;
  subtitle?: string;
}

export default function LeadCaptureBanner({
  title = "Ready to protect your premises?",
  subtitle = "Book a free site survey — our BAFE-certified engineers will assess your building and recommend the right systems. No obligation.",
}: Props) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "banner" }),
      });
    } catch { /* silent */ }
    setDone(true);
  };

  return (
    <section style={{ background: "var(--bg-dark-2)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div style={{ maxWidth: "500px" }}>
            <p className="eyebrow" style={{ marginBottom: "16px" }}>Free Survey</p>
            <h2 className="heading-lg" style={{ color: "#fff", marginBottom: "14px" }}>{title}</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.75, fontSize: "0.95rem" }}>{subtitle}</p>
          </div>

          <div style={{ width: "100%", maxWidth: "400px" }}>
            {done ? (
              <div style={{ padding: "28px 32px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", textAlign: "center" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p style={{ color: "#fff", fontWeight: 600, marginBottom: "6px" }}>We&apos;ll be in touch shortly.</p>
                <Link href="/quote" style={{ fontSize: "0.85rem", color: "var(--red)", textDecoration: "none" }}>Build your quote online →</Link>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input
                  type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email address"
                  className="field-dark"
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Request Survey</button>
                  <Link href="/quote" className="btn btn-ghost-white">Quote →</Link>
                </div>
                <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.2)" }}>No spam. We&apos;ll only use this to follow up on your enquiry.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
