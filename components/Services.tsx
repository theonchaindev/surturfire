"use client";

import { useEffect, useRef } from "react";
import { Flame, Radio, Cylinder, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Flame,
    id: "suppression",
    name: "Fire Suppression",
    desc: "This highly specialised field demands the most meticulous design and project execution. We design and install bespoke suppression systems tailored to your premises.",
    href: "#suppression",
  },
  {
    icon: Radio,
    id: "detection",
    name: "Fire Detection",
    desc: "We provide Conventional and Addressable Fire Detection and Alarm Systems to suit all types of premises — from small offices to large industrial facilities.",
    href: "#detection",
  },
  {
    icon: Cylinder,
    id: "extinguishers",
    name: "Fire Extinguishers",
    desc: "Our BAFE-qualified engineers install, service and maintain all portable fire extinguishing equipment, ensuring compliance and readiness at all times.",
    href: "#extinguishers",
  },
  {
    icon: Lightbulb,
    id: "lighting",
    name: "Emergency Lighting",
    desc: "Don't be left in the dark. We install, service and maintain emergency exit lighting systems that guide occupants to safety during a power failure or fire.",
    href: "#lighting",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll<HTMLElement>(".service-card");
            cards.forEach((card, i) => {
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
    <section id="services" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
            What We Do
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto leading-relaxed">
            We operate at the highest standards of safety and service, to ensure
            that our clients have the peace of mind and ongoing support their
            organisation demands.
          </p>
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="service-card glass-card rounded-2xl p-8 group hover:border-[#c0392b]/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.5s ease, transform 0.5s ease, background 0.3s, border 0.3s" }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#c0392b]/10 border border-[#c0392b]/20 flex items-center justify-center group-hover:bg-[#c0392b]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#c0392b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#e67e22] transition-colors">
                      {svc.name}
                    </h3>
                    <p className="text-[#9ca3af] leading-relaxed mb-4">{svc.desc}</p>
                    <a
                      href={svc.href}
                      className="inline-flex items-center gap-1.5 text-sm text-[#c0392b] font-semibold hover:text-[#e67e22] transition-colors group/link"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
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
