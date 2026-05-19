"use client";

import { useState } from "react";
import Link from "next/link";

type Form = {
  premises: string;
  system: string;
  details: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  postcode: string;
  callTime: string;
};

const INITIAL: Form = {
  premises: "", system: "", details: "", timeline: "",
  budget: "", name: "", email: "", phone: "", postcode: "", callTime: "",
};

const PREMISES = [
  { id: "office", label: "Commercial Office" },
  { id: "datacentre", label: "Data Centre / Server Room" },
  { id: "warehouse", label: "Industrial / Warehouse" },
  { id: "healthcare", label: "Healthcare / Hospital" },
  { id: "education", label: "Education / School" },
  { id: "retail", label: "Retail / Hospitality" },
  { id: "residential", label: "Residential / Other" },
];

const SYSTEMS = [
  { id: "suppression", label: "Fire Suppression System" },
  { id: "detection", label: "Fire Detection & Alarms" },
  { id: "extinguishers", label: "Fire Extinguishers" },
  { id: "lighting", label: "Emergency Lighting" },
  { id: "full", label: "Full Fire Safety Package" },
  { id: "maintenance", label: "Annual Servicing / Maintenance" },
  { id: "unsure", label: "Not Sure — Need Advice" },
];

const TIMELINES = [
  { id: "asap", label: "As soon as possible" },
  { id: "1-3mo", label: "Within 1–3 months" },
  { id: "3-6mo", label: "3–6 months" },
  { id: "flexible", label: "I'm flexible" },
];

const BUDGETS = [
  { id: "under1k", label: "Under £1,000" },
  { id: "1-5k", label: "£1,000 – £5,000" },
  { id: "5-15k", label: "£5,000 – £15,000" },
  { id: "15k+", label: "£15,000+" },
  { id: "unsure", label: "Not sure yet" },
];

const STEPS = [
  { label: "Premises", title: "What type of premises?" },
  { label: "System", title: "What do you need?" },
  { label: "Timeline", title: "When & what budget?" },
  { label: "Contact", title: "How do we reach you?" },
];

const selStyle = (active: boolean): React.CSSProperties => ({
  padding: "14px 18px",
  border: active ? "2px solid var(--red)" : "1px solid var(--line)",
  background: active ? "rgba(229,39,28,0.06)" : "#fff",
  cursor: "pointer",
  textAlign: "left",
  fontFamily: "inherit",
  fontSize: "0.875rem",
  fontWeight: active ? 600 : 400,
  color: active ? "var(--red)" : "var(--grey)",
  transition: "all 0.15s",
  width: "100%",
});

export default function QuoteBuilder() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canNext = () => {
    if (step === 0) return !!form.premises;
    if (step === 1) return !!form.system;
    if (step === 2) return !!form.timeline;
    if (step === 3) return !!(form.name && form.email && form.phone && form.postcode);
    return false;
  };

  const submit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us on +44 7843 841219.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: "440px" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M4 13l7 7 11-11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--black)", marginBottom: "12px", letterSpacing: "-0.02em" }}>
            Survey request received.
          </h2>
          <p style={{ fontSize: "0.925rem", color: "var(--grey)", lineHeight: 1.75, marginBottom: "32px" }}>
            Thanks, {form.name.split(" ")[0]}. We&apos;ll review your details and be in touch within one business day to arrange your free site survey.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <Link href="/projects" className="btn-outline">View Our Work</Link>
            <Link href="/" className="btn-red">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  const labelStyle: React.CSSProperties = { display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--grey)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" };

  return (
    <div style={{ padding: "60px 24px 80px", maxWidth: "680px", margin: "0 auto" }}>

      {/* Progress */}
      <div style={{ marginBottom: "48px" }}>
        <p className="label" style={{ marginBottom: "12px" }}>Free Survey — No Obligation</p>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--black)", letterSpacing: "-0.02em", marginBottom: "28px" }}>
          {STEPS[step].title}
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {STEPS.map((s, i) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: i <= step ? "var(--red)" : "var(--soft)",
                  border: i > step ? "1px solid var(--line)" : "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.72rem", fontWeight: 700,
                  color: i <= step ? "#fff" : "var(--grey)",
                  transition: "all 0.2s",
                }}>
                  {i < step ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 6l3 3 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  ) : i + 1}
                </div>
                <span style={{ fontSize: "0.78rem", fontWeight: i === step ? 600 : 400, color: i === step ? "var(--black)" : "var(--grey)" }} className="hidden sm:inline">
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ width: "32px", height: "1px", background: i < step ? "var(--red)" : "var(--line)", transition: "background 0.3s" }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 0: Premises */}
      {step === 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {PREMISES.map((p) => (
            <button key={p.id} onClick={() => set("premises", p.id)} style={selStyle(form.premises === p.id)}>
              {p.label}
            </button>
          ))}
        </div>
      )}

      {/* Step 1: System */}
      {step === 1 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {SYSTEMS.map((s) => (
              <button key={s.id} onClick={() => set("system", s.id)} style={selStyle(form.system === s.id)}>
                {s.label}
              </button>
            ))}
          </div>
          <div style={{ marginTop: "8px" }}>
            <label style={labelStyle}>Additional details <span style={{ fontWeight: 400, opacity: 0.6 }}>(optional)</span></label>
            <textarea rows={3} placeholder="Describe your premises, any existing systems, or specific requirements..." value={form.details} onChange={(e) => set("details", e.target.value)} className="field" style={{ resize: "none" }} />
          </div>
        </div>
      )}

      {/* Step 2: Timeline + Budget */}
      {step === 2 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div>
            <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--black)", marginBottom: "12px" }}>When do you need the work completed?</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {TIMELINES.map((t) => (
                <button key={t.id} onClick={() => set("timeline", t.id)} style={selStyle(form.timeline === t.id)}>{t.label}</button>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--black)", marginBottom: "12px" }}>
              Approximate budget? <span style={{ fontWeight: 400, color: "var(--grey)", fontSize: "0.8rem" }}>Helps us tailor our proposal</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
              {BUDGETS.map((b) => (
                <button key={b.id} onClick={() => set("budget", b.id)} style={{ ...selStyle(form.budget === b.id), fontSize: "0.8rem", textAlign: "center" }}>
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Contact */}
      {step === 3 && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div style={{ gridColumn: "span 2" }}>
            <label style={labelStyle}>Full Name *</label>
            <input type="text" required placeholder="John Smith" value={form.name} onChange={(e) => set("name", e.target.value)} className="field" />
          </div>
          <div>
            <label style={labelStyle}>Email *</label>
            <input type="email" required placeholder="john@company.com" value={form.email} onChange={(e) => set("email", e.target.value)} className="field" />
          </div>
          <div>
            <label style={labelStyle}>Phone *</label>
            <input type="tel" required placeholder="07700 900000" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="field" />
          </div>
          <div>
            <label style={labelStyle}>Postcode *</label>
            <input type="text" required placeholder="NN1 1AA" value={form.postcode} onChange={(e) => set("postcode", e.target.value.toUpperCase())} className="field" />
          </div>
          <div>
            <label style={labelStyle}>Best time to call</label>
            <input type="text" placeholder="e.g. Mornings, after 5pm" value={form.callTime} onChange={(e) => set("callTime", e.target.value)} className="field" />
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <p style={{ fontSize: "0.78rem", color: "var(--grey)", lineHeight: 1.6 }}>
              By submitting you agree to be contacted by Surtur Fire regarding your enquiry. We never share your details with third parties.
            </p>
          </div>
        </div>
      )}

      {/* Nav */}
      <div style={{ marginTop: "36px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", fontWeight: 500, color: "var(--grey)", background: "none", border: "none", cursor: "pointer", padding: 0, opacity: step === 0 ? 0 : 1, pointerEvents: step === 0 ? "none" : "auto" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11 8H5M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {error && <p style={{ fontSize: "0.8rem", color: "var(--red)" }}>{error}</p>}
          {step < STEPS.length - 1 ? (
            <button onClick={() => setStep((s) => s + 1)} disabled={!canNext()} className="btn-red" style={{ opacity: canNext() ? 1 : 0.4, cursor: canNext() ? "pointer" : "not-allowed" }}>
              Continue
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          ) : (
            <button onClick={submit} disabled={!canNext() || submitting} className="btn-red" style={{ opacity: canNext() && !submitting ? 1 : 0.4, cursor: canNext() && !submitting ? "pointer" : "not-allowed" }}>
              {submitting ? "Submitting..." : "Submit Request →"}
            </button>
          )}
        </div>
      </div>

      {/* Trust signals */}
      <div style={{ marginTop: "48px", paddingTop: "28px", borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {["✓ BAFE-certified engineers", "✓ Free site survey included", "✓ No-obligation quote", "✓ Reply within 1 business day"].map((t) => (
          <span key={t} style={{ fontSize: "0.8rem", color: "var(--grey)", fontWeight: 500 }}>{t}</span>
        ))}
      </div>
    </div>
  );
}
