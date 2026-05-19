"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch { /* silent */ } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ padding: "48px 40px", textAlign: "center", border: "1px solid var(--border)", borderRadius: "10px" }}>
        <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 11l5 5 9-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}>Message received.</h3>
        <p style={{ fontSize: "0.9rem", color: "var(--ink-3)" }}>We&apos;ll be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--ink-3)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Full Name *
          </label>
          <input type="text" required placeholder="John Smith" value={form.name} onChange={(e) => set("name", e.target.value)} className="field" />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--ink-3)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Company
          </label>
          <input type="text" placeholder="Acme Ltd" value={form.company} onChange={(e) => set("company", e.target.value)} className="field" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--ink-3)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Email *
          </label>
          <input type="email" required placeholder="john@company.com" value={form.email} onChange={(e) => set("email", e.target.value)} className="field" />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--ink-3)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Phone
          </label>
          <input type="tel" placeholder="07700 900000" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="field" />
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--ink-3)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Message *
        </label>
        <textarea
          required rows={5} placeholder="Tell us about your fire safety requirements..."
          value={form.message} onChange={(e) => set("message", e.target.value)}
          className="field" style={{ resize: "vertical" }}
        />
      </div>
      <button type="submit" disabled={submitting} className="btn btn-primary" style={{ width: "fit-content" }}>
        {submitting ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
