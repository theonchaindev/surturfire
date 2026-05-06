"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, Award, Star, Zap } from "lucide-react";

const certs = [
  { icon: ShieldCheck, name: "BAFE", full: "British Approvals for Fire Equipment", color: "#c0392b" },
  { icon: Award, name: "Safe Contractor", full: "Health & Safety Accreditation", color: "#e67e22" },
  { icon: Star, name: "LPCB", full: "Loss Prevention Certification Board", color: "#c0392b" },
  { icon: Zap, name: "FIA", full: "Fire Industry Association Member", color: "#e67e22" },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".cert-item").forEach((el, i) => {
              setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-28 px-6 bg-[#111113]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div
          className="cert-item text-center mb-14"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">
            Accreditations
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-white">
            Proud to be certified.
          </h2>
          <p className="text-[#a8a8b4] text-lg max-w-2xl mx-auto leading-relaxed">
            Trusted by clients across the UK, we are experts in the supply, maintenance, and design
            of fire safety systems to safeguard sites against the dangers of fire.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {certs.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.name}
                className="cert-item rounded-2xl p-6 text-center group hover:-translate-y-1 transition-all duration-300 border border-white/[0.1] bg-white/[0.04] hover:border-white/[0.2] hover:bg-white/[0.07]"
                style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}
              >
                <div
                  className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: `${cert.color}14`, border: `1px solid ${cert.color}28` }}
                >
                  <Icon className="w-7 h-7" style={{ color: cert.color }} />
                </div>
                <div className="font-black text-lg mb-1 text-white">{cert.name}</div>
                <div className="text-[#a8a8b4] text-xs leading-tight">{cert.full}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
