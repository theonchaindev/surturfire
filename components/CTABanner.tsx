"use client";

import { useEffect, useRef } from "react";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector<HTMLElement>(".cta-inner")!.style.opacity = "1";
            entry.target.querySelector<HTMLElement>(".cta-inner")!.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Crimson gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7b1a12] via-[#c0392b] to-[#9b1e1e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,0,0,0.3),transparent)]" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className="cta-inner"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
            Stay Protected with Surtur Fire.
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Get in touch today — your safety is our priority.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[#c0392b] hover:bg-[#f5f5f5] font-bold px-10 py-4 rounded-xl text-base transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
