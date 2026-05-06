"use client";

import { useState } from "react";
import {
  Building2,
  Factory,
  HeartPulse,
  GraduationCap,
  Home,
  Server,
  Monitor,
  Droplets,
  AlertTriangle,
  Lock,
  Minus,
  CheckCheck,
  Wrench,
  Phone,
  ClipboardCheck,
  ChevronRight,
  RotateCcw,
  Flame,
  Radio,
  Cylinder,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

type Step = {
  id: string;
  title: string;
  subtitle?: string;
  type: "single" | "multi";
  options: Option[];
};

type Option = {
  id: string;
  icon: React.ElementType;
  label: string;
};

const steps: Step[] = [
  {
    id: "premises",
    title: "What type of premises?",
    subtitle: "Select the option that best describes your building.",
    type: "single",
    options: [
      { id: "office", icon: Building2, label: "Commercial Office" },
      { id: "industrial", icon: Factory, label: "Industrial / Warehouse" },
      { id: "healthcare", icon: HeartPulse, label: "Healthcare / Care Home" },
      { id: "education", icon: GraduationCap, label: "Education" },
      { id: "residential", icon: Home, label: "Residential" },
      { id: "datacentre", icon: Server, label: "Data Centre / Server Room" },
    ],
  },
  {
    id: "size",
    title: "What is the approximate size?",
    type: "single",
    options: [
      { id: "small", icon: Home, label: "Small (under 500 m²)" },
      { id: "medium", icon: Building2, label: "Medium (500–2,000 m²)" },
      { id: "large", icon: Factory, label: "Large (2,000 m²+)" },
    ],
  },
  {
    id: "existing",
    title: "Do you have existing fire safety systems?",
    type: "single",
    options: [
      { id: "none", icon: Minus, label: "No systems at all" },
      { id: "partial", icon: Wrench, label: "Some systems (need upgrade)" },
      { id: "full", icon: CheckCheck, label: "Full systems (maintenance only)" },
    ],
  },
  {
    id: "risks",
    title: "Are there any special risks?",
    subtitle: "Select all that apply.",
    type: "multi",
    options: [
      { id: "it", icon: Monitor, label: "Critical IT Infrastructure" },
      { id: "water", icon: Droplets, label: "Water-sensitive equipment" },
      { id: "fire-load", icon: AlertTriangle, label: "High fire load / flammable materials" },
      { id: "secure", icon: Lock, label: "High-security areas" },
      { id: "none", icon: Minus, label: "None of the above" },
    ],
  },
  {
    id: "goal",
    title: "What are you primarily looking for?",
    type: "single",
    options: [
      { id: "install", icon: Wrench, label: "New installation" },
      { id: "service", icon: CheckCheck, label: "Routine servicing / maintenance" },
      { id: "emergency", icon: Phone, label: "Emergency call-out" },
      { id: "audit", icon: ClipboardCheck, label: "Full audit & compliance report" },
    ],
  },
];

type Answers = Record<string, string | string[]>;

function getRecommendations(answers: Answers) {
  const risks = (answers.risks as string[]) || [];
  const premises = answers.premises as string;
  const existing = answers.existing as string;
  const goal = answers.goal as string;

  const recs: { icon: React.ElementType; title: string; reason: string; color: string }[] = [];

  const hasIT = risks.includes("it");
  const hasWater = risks.includes("water");
  const hasFireLoad = risks.includes("fire-load");
  const isDataCentre = premises === "datacentre";

  if (isDataCentre || (hasIT && hasWater)) {
    recs.push({
      icon: Flame,
      title: "Gas Suppression System",
      reason:
        "Water-based suppression would destroy critical IT infrastructure. Inert gas systems extinguish fire without leaving residue or causing water damage.",
      color: "#c0392b",
    });
  }

  if (!isDataCentre || existing !== "full") {
    recs.push({
      icon: Radio,
      title: "Addressable Fire Detection System",
      reason:
        premises === "industrial" || premises === "healthcare"
          ? "Large or complex premises benefit from addressable systems that pinpoint exact alarm locations."
          : "Conventional or addressable detection systems matched to your premises type and size.",
      color: "#e67e22",
    });
  }

  if (hasFireLoad || premises === "industrial") {
    recs.push({
      icon: Cylinder,
      title: "Portable Fire Extinguishers",
      reason:
        "High fire load environments require accessible, correctly-rated extinguishers. Our BAFE-qualified engineers will specify and install the right types.",
      color: "#c0392b",
    });
  }

  recs.push({
    icon: Lightbulb,
    title: "Emergency Lighting",
    reason:
      "Required by law in all non-domestic premises. We install and maintain compliant emergency exit lighting to guide occupants to safety.",
    color: "#e67e22",
  });

  if (goal === "audit") {
    recs.push({
      icon: ShieldCheck,
      title: "Full Fire Safety Audit",
      reason:
        "We conduct comprehensive audits covering detection, suppression, signage, extinguishers, and lighting — providing a detailed compliance report.",
      color: "#c0392b",
    });
  }

  return recs;
}

export default function FireSafetyWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const currentStep = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  function selectSingle(optionId: string) {
    setAnswers((prev) => ({ ...prev, [currentStep.id]: optionId }));
  }

  function toggleMulti(optionId: string) {
    setAnswers((prev) => {
      const current = (prev[currentStep.id] as string[]) || [];
      if (optionId === "none") return { ...prev, [currentStep.id]: ["none"] };
      const filtered = current.filter((id) => id !== "none");
      return {
        ...prev,
        [currentStep.id]: filtered.includes(optionId)
          ? filtered.filter((id) => id !== optionId)
          : [...filtered, optionId],
      };
    });
  }

  function canNext() {
    const val = answers[currentStep.id];
    if (!val) return false;
    if (Array.isArray(val)) return val.length > 0;
    return true;
  }

  function next() {
    if (!canNext()) return;
    setDirection("forward");
    if (step < steps.length - 1) setStep((s) => s + 1);
    else setDone(true);
  }

  function back() {
    setDirection("back");
    if (step > 0) setStep((s) => s - 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setDone(false);
  }

  const recs = done ? getRecommendations(answers) : [];

  return (
    <section id="wizard" className="py-28 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(192,57,43,0.06),transparent)]" />

      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">
            Interactive Tool
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
            Fire Safety Needs Builder
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-xl mx-auto">
            Answer five quick questions and we&apos;ll show you exactly which
            fire safety services your premises needs.
          </p>
        </div>

        {/* Wizard card */}
        <div className="glass-card rounded-2xl p-8 md:p-10">
          {!done ? (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-[#9ca3af] mb-2">
                  <span>
                    Step {step + 1} of {steps.length}
                  </span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#c0392b] to-[#e67e22] rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                {/* Step dots */}
                <div className="flex gap-2 mt-3">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-0.5 rounded-full transition-all duration-300 ${
                        i <= step ? "bg-[#c0392b]" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">{currentStep.title}</h3>
                {currentStep.subtitle && (
                  <p className="text-[#9ca3af] text-sm">{currentStep.subtitle}</p>
                )}
              </div>

              {/* Options */}
              <div
                className={`grid gap-3 mb-8 ${
                  currentStep.options.length === 3
                    ? "grid-cols-1 sm:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2"
                }`}
              >
                {currentStep.options.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected =
                    currentStep.type === "single"
                      ? answers[currentStep.id] === opt.id
                      : ((answers[currentStep.id] as string[]) || []).includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() =>
                        currentStep.type === "single"
                          ? selectSingle(opt.id)
                          : toggleMulti(opt.id)
                      }
                      className={`relative flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                        isSelected
                          ? "border-[#c0392b] bg-[#c0392b]/10 text-white"
                          : "border-white/10 bg-white/[0.02] text-[#9ca3af] hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute inset-0 rounded-xl bg-[#c0392b]/5 pointer-events-none" />
                      )}
                      <Icon className={`w-5 h-5 flex-shrink-0 ${isSelected ? "text-[#c0392b]" : ""}`} />
                      <span className="text-sm font-medium leading-tight">{opt.label}</span>
                      {isSelected && currentStep.type === "multi" && (
                        <div className="ml-auto w-4 h-4 rounded-full bg-[#c0392b] flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M1 4l3 3 5-6" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="text-sm text-[#9ca3af] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
                >
                  ← Back
                </button>
                <button
                  onClick={next}
                  disabled={!canNext()}
                  className="flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(192,57,43,0.4)] text-sm"
                >
                  {step === steps.length - 1 ? "See My Recommendations" : "Next"}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            /* Results screen */
            <div>
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-full bg-[#c0392b]/15 border border-[#c0392b]/30 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-7 h-7 text-[#c0392b]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Your Personalised Recommendations</h3>
                <p className="text-[#9ca3af] text-sm">
                  Based on your answers, here&apos;s what we recommend for your premises.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {recs.map((rec, i) => {
                  const Icon = rec.icon;
                  return (
                    <div
                      key={i}
                      className="flex gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors"
                      style={{ borderLeftColor: rec.color, borderLeftWidth: 3 }}
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: `${rec.color}18`, border: `1px solid ${rec.color}30` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: rec.color }} />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">{rec.title}</div>
                        <div className="text-[#9ca3af] text-sm leading-relaxed">{rec.reason}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="flex-1 text-center bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-6 py-4 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(192,57,43,0.4)]"
                >
                  Get a Free Quote
                </a>
                <button
                  onClick={reset}
                  className="flex items-center justify-center gap-2 text-[#9ca3af] hover:text-white border border-white/10 hover:border-white/25 px-6 py-4 rounded-lg transition-all text-sm font-medium"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
