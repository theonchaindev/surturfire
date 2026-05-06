"use client";

import { useEffect, useRef } from "react";

const EMBER_COUNT = 18;

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
      el.style.bottom = `${randomBetween(0, 15)}%`;
      const driftX = randomBetween(-60, 60);
      el.style.setProperty("--x", `${driftX}px`);
      el.style.animationDuration = `${randomBetween(4, 9)}s`;
      el.style.animationDelay = `${randomBetween(0, 6)}s`;
      container.appendChild(el);
      embers.push(el);
    }

    return () => embers.forEach((e) => e.remove());
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1a0a0a] to-[#0d0d0d]" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(192,57,43,0.12),transparent)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c0392b]/8 blur-[100px] rounded-full" />

      {/* Ember container */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8 text-sm text-[#e67e22] font-medium border-[#e67e22]/20">
          <span className="inline-block w-2 h-2 rounded-full bg-[#e67e22] animate-pulse" />
          UK Fire Safety Specialists
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          Protecting People &amp;{" "}
          <span className="gradient-text block">Businesses Across The UK.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto mb-10 leading-relaxed">
          Trusted by clients across the UK, we are experts in the supply,
          maintenance, and design of fire safety systems to safeguard against
          the dangers of fire.
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
            className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 text-base bg-white/[0.03] hover:bg-white/[0.06]"
          >
            Learn More
          </a>
        </div>

        {/* Stat row */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "500+", label: "Clients Protected" },
            { value: "BAFE", label: "Certified" },
            { value: "24/7", label: "Emergency Cover" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black text-[#c0392b]">{s.value}</div>
              <div className="text-xs text-[#9ca3af] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9ca3af] text-xs">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#9ca3af] to-transparent" />
      </div>
    </section>
  );
}
