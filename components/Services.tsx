"use client";

import { useEffect, useRef } from "react";
import { Flame, Radio, Cylinder, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Flame,
    id: "suppression",
    name: "Fire Suppression",
    desc: "This highly specialised field demands the most meticulous design and project execution. We design and install bespoke fire suppression systems tailored precisely to your premises.",
  },
  {
    icon: Radio,
    id: "detection",
    name: "Fire Detection",
    desc: "We can provide a wide range of Conventional and Addressable Fire Detection and Alarm Systems to suit all types of premises, from small offices to large industrial facilities.",
  },
  {
    icon: Cylinder,
    id: "extinguishers",
    name: "Fire Extinguisher",
    desc: "Our engineers are BAFE qualified to install, service and maintain all of your company's portable fire extinguishing needs, ensuring compliance and readiness at all times.",
  },
  {
    icon: Lightbulb,
    id: "lighting",
    name: "Emergency Lighting",
    desc: "Don't be left in the dark. At Surtur Fire we can install, service and maintain your system to ensure your emergency exit routes have the safe and appropriate lighting required.",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".service-card").forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 120);
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
    <section id="services" className="py-28 px-6 bg-[#18181c] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-white">
            What We Do
          </h2>
          <p className="text-[#a8a8b4] text-lg max-w-2xl mx-auto leading-relaxed">
            We operate at the highest standards of safety and service, to ensure that our clients
            have the peace of mind and ongoing support that their organisation demands.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="service-card rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/[0.12] bg-[#222228] hover:border-[#c0392b]/40 hover:bg-[#272730]"
                style={{
                  opacity: 0,
                  transform: "translateY(24px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease, background 0.3s, border-color 0.3s",
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#c0392b]/12 border border-[#c0392b]/20 flex items-center justify-center group-hover:bg-[#c0392b]/22 transition-colors">
                    <Icon className="w-6 h-6 text-[#c0392b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#e67e22] transition-colors">
                      {svc.name}
                    </h3>
                    <p className="text-[#b4b4c0] leading-relaxed mb-4">{svc.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-[#c0392b] font-semibold hover:text-[#e67e22] transition-colors group/link cursor-default">
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
