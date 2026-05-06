"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, Server } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    tag: "Fire Detection",
    title: "Smart Detection Technology",
    bullets: [
      "Addressable & conventional systems for any premises",
      "Smoke, heat, and multi-sensor detectors",
      "Networked panels with remote monitoring",
      "Compliant with BS 5839 standards",
    ],
    side: "left",
    bgAccent: "from-[#c0392b]/10 to-transparent",
  },
  {
    icon: Server,
    tag: "Gas Suppression",
    title: "Critical Infrastructure Protection",
    bullets: [
      "Inert gas and chemical agent systems",
      "Designed for server rooms & data centres",
      "Zero residue — no damage to sensitive equipment",
      "Integrated with detection and alarm systems",
    ],
    side: "right",
    bgAccent: "from-[#e67e22]/10 to-transparent",
  },
];

function VisualCard({ side }: { side: string }) {
  return (
    <div className="relative h-64 md:h-full min-h-64 rounded-2xl overflow-hidden glass-card">
      {/* Abstract fire visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            side === "left"
              ? "from-[#c0392b]/20 via-[#1a0a0a] to-[#0d0d0d]"
              : "from-[#e67e22]/20 via-[#1a0a0a] to-[#0d0d0d]"
          }`}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Glowing orb */}
        <div
          className={`w-40 h-40 rounded-full blur-3xl ${
            side === "left" ? "bg-[#c0392b]/30" : "bg-[#e67e22]/25"
          }`}
        />
        {/* Corner text */}
        <div className="absolute bottom-5 left-5 text-xs font-mono text-white/30">
          {side === "left" ? "// BS 5839 COMPLIANT" : "// NOVEC 1230 · FM-200 · CO₂"}
        </div>
        {/* Icon overlay */}
        <div
          className={`absolute top-5 right-5 w-10 h-10 rounded-lg flex items-center justify-center ${
            side === "left"
              ? "bg-[#c0392b]/20 border border-[#c0392b]/30"
              : "bg-[#e67e22]/20 border border-[#e67e22]/30"
          }`}
        >
          {side === "left" ? (
            <ShieldCheck className="w-5 h-5 text-[#c0392b]" />
          ) : (
            <Server className="w-5 h-5 text-[#e67e22]" />
          )}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedServices() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll<HTMLElement>(".feat-item");
            items.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="deep-dive" className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16 feat-item" style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">
            Deep Dive
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Industry-Leading Systems
          </h2>
        </div>

        <div className="space-y-16">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isRight = feat.side === "right";
            return (
              <div
                key={idx}
                className={`feat-item grid md:grid-cols-2 gap-10 items-center ${isRight ? "md:[&>*:first-child]:order-last" : ""}`}
                style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
              >
                <VisualCard side={feat.side} />

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isRight
                          ? "bg-[#e67e22]/15 border border-[#e67e22]/25"
                          : "bg-[#c0392b]/15 border border-[#c0392b]/25"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isRight ? "text-[#e67e22]" : "text-[#c0392b]"}`} />
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        isRight ? "text-[#e67e22]" : "text-[#c0392b]"
                      }`}
                    >
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black mb-6 leading-tight">{feat.title}</h3>

                  <ul className="space-y-3 mb-8">
                    {feat.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#9ca3af]">
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            isRight ? "bg-[#e67e22]" : "bg-[#c0392b]"
                          }`}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-sm transition-all hover:-translate-y-0.5 ${
                      isRight
                        ? "bg-[#e67e22]/15 border border-[#e67e22]/25 text-[#e67e22] hover:bg-[#e67e22]/25"
                        : "bg-[#c0392b]/15 border border-[#c0392b]/25 text-[#c0392b] hover:bg-[#c0392b]/25"
                    }`}
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
