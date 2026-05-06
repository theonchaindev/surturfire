"use client";

import { useEffect, useRef } from "react";

const EMBER_COUNT = 20;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const embers: HTMLDivElement[] = [];
    for (let i = 0; i < EMBER_COUNT; i++) {
      const el = document.createElement("div");
      el.className = "ember";
      const size = randomBetween(2, 5);
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${randomBetween(0, 100)}%`;
      el.style.bottom = `${randomBetween(0, 20)}%`;
      el.style.setProperty("--x", `${randomBetween(-80, 80)}px`);
      el.style.animationDuration = `${randomBetween(4, 10)}s`;
      el.style.animationDelay = `${randomBetween(0, 7)}s`;
      container.appendChild(el);
      embers.push(el);
    }
    return () => embers.forEach((e) => e.remove());
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e10] via-[#180c0c] to-[#0e0e10]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(192,57,43,0.15),transparent)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#c0392b]/6 blur-[120px] rounded-full pointer-events-none" />

      {/* Ember particles */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8 text-sm text-[#e67e22] font-medium border-[#e67e22]/20">
          <span className="inline-block w-2 h-2 rounded-full bg-[#e67e22] animate-pulse" />
          UK Fire Safety Specialists
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-white">
          Protecting People &amp;{" "}
          <span className="gradient-text block">Businesses Across The UK.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#a8a8b4] max-w-2xl mx-auto mb-10 leading-relaxed">
          Trusted by clients across the UK, we are experts in the supply, maintenance, and design
          of fire safety systems to safeguard against the dangers of fire.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(192,57,43,0.45)] text-base"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="border border-white/25 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 text-base bg-white/[0.05] hover:bg-white/[0.09]"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-white/[0.08] pt-10">
          {[
            { value: "500+", label: "Clients Protected" },
            { value: "BAFE", label: "Certified" },
            { value: "24/7", label: "Emergency Cover" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black text-[#c0392b]">{s.value}</div>
              <div className="text-xs text-[#a8a8b4] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#a8a8b4] text-xs">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#a8a8b4] to-transparent" />
      </div>
    </section>
  );
}
