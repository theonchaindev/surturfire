"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setSubmitted(true);
    } catch { /* fail silently */ } finally { setSubmitting(false); }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center" style={{ background: "var(--green-deep)" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 11l5 5 9-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--charcoal)" }}>Message received!</h3>
        <p className="text-sm" style={{ color: "var(--grey)" }}>We&apos;ll be in touch within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--grey)" }}>Full Name *</label>
        <input type="text" required placeholder="John Smith" value={form.name} onChange={(e) => set("name", e.target.value)} className="form-input" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--grey)" }}>Email *</label>
          <input type="email" required placeholder="john@company.com" value={form.email} onChange={(e) => set("email", e.target.value)} className="form-input" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--grey)" }}>Phone</label>
          <input type="tel" placeholder="07700 900000" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="form-input" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--grey)" }}>Message *</label>
        <textarea required rows={5} placeholder="Tell us about your fire safety requirements..." value={form.message} onChange={(e) => set("message", e.target.value)} className="form-input resize-none" />
      </div>
      <button type="submit" disabled={submitting} className="btn-green w-fit">
        {submitting ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
