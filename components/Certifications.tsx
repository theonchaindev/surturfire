"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, Award, Star, Zap } from "lucide-react";

const certs = [
  {
    icon: ShieldCheck,
    name: "BAFE",
    full: "British Approvals for Fire Equipment",
    color: "#c0392b",
  },
  {
    icon: Award,
    name: "Safe Contractor",
    full: "Health & Safety Accreditation",
    color: "#e67e22",
  },
  {
    icon: Star,
    name: "LPCB",
    full: "Loss Prevention Certification Board",
    color: "#c0392b",
  },
  {
    icon: Zap,
    name: "FIA",
    full: "Fire Industry Association Member",
    color: "#e67e22",
  },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll<HTMLElement>(".cert-item");
            items.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 100);
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
    <section id="certifications" className="py-28 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div
          className="cert-item text-center mb-14"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">
            Accreditations
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
            Proud to be Certified.
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-xl mx-auto">
            Our certifications demonstrate our commitment to the highest standards
            of fire safety competence and service delivery.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {certs.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.name}
                className="cert-item glass-card rounded-2xl p-6 text-center hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group"
                style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.5s ease, transform 0.5s ease, border 0.3s, translate 0.3s" }}
              >
                <div
                  className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{
                    background: `${cert.color}18`,
                    border: `1px solid ${cert.color}30`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: cert.color }} />
                </div>
                <div className="font-black text-lg mb-1">{cert.name}</div>
                <div className="text-[#9ca3af] text-xs leading-tight">{cert.full}</div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[#9ca3af] mt-10 text-sm">
          Trusted by clients across the UK for over a decade of fire safety excellence.
        </p>
      </div>
    </section>
  );
}
