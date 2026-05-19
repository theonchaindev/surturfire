"use client";
import { useState } from "react";
import Link from "next/link";

const premisesTypes = [
  "Commercial Office",
  "Data Centre / Server Room",
  "Industrial / Warehouse",
  "Healthcare / Hospital",
  "Education / School",
  "Retail / Hospitality",
  "Residential / Other",
];

const systemTypes = [
  "Fire Suppression System",
  "Fire Detection & Alarms",
  "Fire Extinguishers",
  "Emergency Lighting",
  "Full Fire Safety Package",
  "Annual Servicing / Maintenance",
  "Not Sure — Need Advice",
];

const timelines = [
  "As soon as possible",
  "Within 1–3 months",
  "3–6 months",
  "I'm flexible",
];

const budgets = [
  "Under £1,000",
  "£1,000–£5,000",
  "£5,000–£15,000",
  "£15,000+",
  "Not sure yet",
];

const trustSignals = [
  "BAFE-certified engineers",
  "Free site survey included",
  "No-obligation quote",
  "Response within 1 business day",
];

interface FormData {
  premises: string;
  systems: string[];
  details: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  postcode: string;
  bestTime: string;
}

const cardSelected = { border: "2px solid #cc2c2c", background: "rgba(204,44,44,0.08)", color: "#cc2c2c" };
const cardDefault = { border: "2px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.75)" };

export default function QuoteBuilder() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<FormData>({
    premises: "",
    systems: [],
    details: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    postcode: "",
    bestTime: "",
  });

  const toggleSystem = (s: string) => {
    setForm((f) => ({
      ...f,
      systems: f.systems.includes(s) ? f.systems.filter((x) => x !== s) : [...f.systems, s],
    }));
  };

  const canNext = () => {
    if (step === 0) return !!form.premises;
    if (step === 1) return form.systems.length > 0;
    if (step === 2) return !!form.timeline && !!form.budget;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitting(true);
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch { /* fail silently */ } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-md">
          <div
            className="w-16 h-16 mx-auto mb-8 flex items-center justify-center"
            style={{ background: "#cc2c2c" }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M5 14l6 6 12-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">Quote request received!</h2>
          <p className="text-base leading-7 mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
            Thank you, {form.name}. One of our BAFE-certified engineers will be in touch within 1 business
            day to arrange your free site survey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-red">Back to Home</Link>
            <Link href="/services" className="btn-outline-white">Our Services</Link>
          </div>
        </div>
      </div>
    );
  }

  const steps = ["Premises", "Systems", "Timeline", "Contact"];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Progress indicator */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-8 h-8 flex items-center justify-center text-xs font-bold transition-all duration-300"
                style={{
                  background: i <= step ? "#cc2c2c" : "transparent",
                  border: `2px solid ${i <= step ? "#cc2c2c" : "rgba(255,255,255,0.15)"}`,
                  color: i <= step ? "white" : "rgba(255,255,255,0.3)",
                }}
              >
                {i < step ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className="text-xs font-medium hidden sm:block"
                style={{ color: i === step ? "white" : "rgba(255,255,255,0.3)" }}
              >
                {s}
              </span>
              {i < steps.length - 1 && (
                <div
                  className="w-6 lg:w-12 h-px mx-1"
                  style={{ background: i < step ? "#cc2c2c" : "rgba(255,255,255,0.1)" }}
                />
              )}
            </div>
          ))}
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          {step === 0 && "What type of premises?"}
          {step === 1 && "What systems do you need?"}
          {step === 2 && "Timeline & budget"}
          {step === 3 && "Your contact details"}
        </h2>
      </div>

      {/* Step 0: Premises */}
      {step === 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {premisesTypes.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setForm((f) => ({ ...f, premises: p }))}
              className="p-5 text-left text-sm font-medium transition-all duration-200"
              style={form.premises === p ? cardSelected : cardDefault}
            >
              {p}
            </button>
          ))}
        </div>
      )}

      {/* Step 1: Systems */}
      {step === 1 && (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {systemTypes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => toggleSystem(s)}
                className="p-5 text-left text-sm font-medium transition-all duration-200"
                style={form.systems.includes(s) ? cardSelected : cardDefault}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <label
              className="block text-xs font-bold uppercase tracking-wide mb-3"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Additional details (optional)
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your premises, any specific concerns, or existing systems..."
              value={form.details}
              onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))}
              className="form-input-dark resize-none"
            />
          </div>
        </div>
      )}

      {/* Step 2: Timeline & Budget */}
      {step === 2 && (
        <div className="flex flex-col gap-10">
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-wide mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              When do you need the work done?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {timelines.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, timeline: t }))}
                  className="p-5 text-left text-sm font-medium transition-all duration-200"
                  style={form.timeline === t ? cardSelected : cardDefault}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-wide mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Approximate budget
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {budgets.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, budget: b }))}
                  className="p-5 text-left text-sm font-medium transition-all duration-200"
                  style={form.budget === b ? cardSelected : cardDefault}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Contact */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div>
            <label
              className="block text-xs font-bold uppercase tracking-wide mb-3"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="John Smith"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="form-input"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label
                className="block text-xs font-bold uppercase tracking-wide mb-3"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="john@company.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="form-input"
              />
            </div>
            <div>
              <label
                className="block text-xs font-bold uppercase tracking-wide mb-3"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Phone
              </label>
              <input
                type="tel"
                placeholder="07700 900000"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className="form-input"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label
                className="block text-xs font-bold uppercase tracking-wide mb-3"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Postcode
              </label>
              <input
                type="text"
                placeholder="NN2 7AZ"
                value={form.postcode}
                onChange={(e) => setForm((f) => ({ ...f, postcode: e.target.value }))}
                className="form-input"
              />
            </div>
            <div>
              <label
                className="block text-xs font-bold uppercase tracking-wide mb-3"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Best time to call
              </label>
              <input
                type="text"
                placeholder="e.g. Morning, Afternoon"
                value={form.bestTime}
                onChange={(e) => setForm((f) => ({ ...f, bestTime: e.target.value }))}
                className="form-input"
              />
            </div>
          </div>

          {/* Trust signals */}
          <div className="pt-2 grid grid-cols-2 gap-3">
            {trustSignals.map((s) => (
              <div key={s} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1.5L2 4.5v3.5c0 2.8 2.2 5 5 5.5 2.8-.5 5-2.7 5-5.5V4.5z" stroke="#cc2c2c" strokeWidth="1.2" strokeLinejoin="round" />
                  <path d="M4.5 7l2 2 3-3" stroke="#cc2c2c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {s}
              </div>
            ))}
          </div>

          <button type="submit" disabled={submitting} className="btn-red w-fit">
            {submitting ? "Sending..." : "Submit Quote Request →"}
          </button>
        </form>
      )}

      {/* Navigation */}
      <div
        className="flex items-center justify-between mt-10 pt-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <button
          type="button"
          onClick={() => setStep((s) => s - 1)}
          className="text-sm font-medium transition-colors"
          style={{ color: "rgba(255,255,255,0.4)", display: step === 0 ? "none" : "block" }}
        >
          ← Back
        </button>
        <div />
        {step < 3 && (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={!canNext()}
            className="btn-red"
            style={{ opacity: canNext() ? 1 : 0.4, cursor: canNext() ? "pointer" : "not-allowed" }}
          >
            Continue →
          </button>
        )}
      </div>
    </div>
  );
}
