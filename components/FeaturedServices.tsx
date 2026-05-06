"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, Server } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    tag: "Fire Detection",
    title: "Cutting-Edge Fire Detection Services",
    body: "Surtur Fire specialises in cutting-edge fire detection services for businesses and homes. Using advanced technology like smoke detectors and heat sensors, we swiftly identify potential fire hazards. Our expert team ensures prompt response measures, protecting lives and property with innovative solutions.",
    side: "left",
    color: "#c0392b",
    bg: "from-[#c0392b]/8 to-transparent",
  },
  {
    icon: Server,
    tag: "Gas Suppression",
    title: "Protecting Critical IT Infrastructure",
    body: "Surtur Fire also install, service and maintain fire suppression systems where water may pose a risk to any critical IT infrastructure. There are a range of products and systems available and depending on your business's requirements we can tailor these to your needs.",
    side: "right",
    color: "#e67e22",
    bg: "from-[#e67e22]/8 to-transparent",
  },
];

function VisualCard({ side, color }: { side: string; color: string }) {
  return (
    <div className="relative h-72 md:h-full min-h-72 rounded-2xl overflow-hidden border border-white/[0.12] bg-[#222228]">
      <div className={`absolute inset-0 bg-gradient-to-br ${side === "left" ? "from-[#c0392b]/15 via-[#160a0a] to-[#111113]" : "from-[#e67e22]/12 via-[#140e08] to-[#111113]"}`} />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full blur-3xl" style={{ background: `${color}25` }} />
      </div>
      {/* Icon top right */}
      <div
        className="absolute top-5 right-5 w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ background: `${color}15`, border: `1px solid ${color}28` }}
      >
        {side === "left" ? <ShieldCheck className="w-5 h-5" style={{ color }} /> : <Server className="w-5 h-5" style={{ color }} />}
      </div>
      <div className="absolute bottom-5 left-5 text-xs font-mono text-white/25">
        {side === "left" ? "// BS 5839 COMPLIANT" : "// NOVEC 1230 · FM-200 · CO₂"}
      </div>
    </div>
  );
}

export default function FeaturedServices() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".feat-item").forEach((el, i) => {
              setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="deep-dive" className="py-28 px-6 bg-[#1c1c22]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div
          className="feat-item text-center mb-16"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">Services</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Industry-Leading Systems</h2>
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
                <VisualCard side={feat.side} color={feat.color} />
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${feat.color}14`, border: `1px solid ${feat.color}28` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: feat.color }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: feat.color }}>{feat.tag}</span>
                  </div>
                  <h3 className="text-3xl font-black mb-5 leading-tight text-white">{feat.title}</h3>
                  <p className="text-[#a8a8b4] leading-relaxed mb-8">{feat.body}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-sm transition-all hover:-translate-y-0.5"
                    style={{
                      background: `${feat.color}12`,
                      border: `1px solid ${feat.color}28`,
                      color: feat.color,
                    }}
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
