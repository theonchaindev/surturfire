"use client";
import { useState } from "react";
import Link from "next/link";

export default function LeadCaptureBanner({ title = "Book a free fire safety survey.", subtitle = "Our BAFE-certified engineers will assess your premises and recommend the right systems — at no cost to you." }: { title?: string; subtitle?: string }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try { await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) }); } catch { /**/ }
    setDone(true);
  };

  return (
    <section style={{ background: "var(--black)", borderTop: "3px solid var(--red)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "48px", alignItems: "center" }} className="grid-cols-1 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "12px" }}>Free Survey</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "12px" }}>{title}</h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: "480px" }}>{subtitle}</p>
          </div>
          <div style={{ minWidth: "300px" }}>
            {done ? (
              <div style={{ textAlign: "center", padding: "24px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ color: "#fff", fontWeight: 600, marginBottom: "4px" }}>Thanks — we&apos;ll be in touch.</p>
                <Link href="/quote" style={{ fontSize: "0.82rem", color: "var(--red)" }}>Build your quote online →</Link>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" className="field-white" />
                <div style={{ display: "flex", gap: "8px" }}>
                  <button type="submit" className="btn-red" style={{ flex: 1 }}>Request Survey</button>
                  <Link href="/quote" className="btn-outline-white">Quote →</Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
