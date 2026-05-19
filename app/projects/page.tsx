import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import LeadCaptureBanner from "@/components/LeadCaptureBanner";

export const metadata: Metadata = {
  title: "Project Portfolio | Surtur Fire",
  description: "Browse Surtur Fire's recent fire safety installations across the UK — suppression, detection, extinguishers, and emergency lighting.",
};

const projects = [
  {
    title: "Data Centre Gas Suppression",
    location: "Northampton",
    tag: "Fire Suppression",
    desc: "FM200 clean agent suppression system protecting critical IT infrastructure. Full design, supply, and commissioning.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
    large: true,
  },
  {
    title: "Multi-Floor Office Detection",
    location: "Birmingham",
    tag: "Fire Detection",
    desc: "Addressable fire detection system across 5 floors, 200+ devices, BS 5839 compliant.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    large: false,
  },
  {
    title: "Industrial Unit Fire Suppression",
    location: "Coventry",
    tag: "Fire Suppression",
    desc: "Inert gas system protecting high-value manufacturing equipment.",
    img: "https://images.unsplash.com/photo-1573167579374-29f7f5a30e8a?w=800&q=80",
    large: false,
  },
  {
    title: "School Emergency Lighting",
    location: "Leicester",
    tag: "Emergency Lighting",
    desc: "Complete BS 5266 compliant emergency lighting installation across 40 classrooms and common areas.",
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&q=80",
    large: true,
  },
  {
    title: "Restaurant Extinguisher Package",
    location: "Northampton",
    tag: "Fire Extinguishers",
    desc: "Full extinguisher risk assessment and supply across a busy commercial kitchen and dining area.",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    large: false,
  },
  {
    title: "Hospital Corridor Detection",
    location: "London",
    tag: "Fire Detection",
    desc: "Addressable beam detection system in a challenging healthcare environment.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    large: false,
  },
  {
    title: "Warehouse Gas Suppression",
    location: "Nottingham",
    tag: "Fire Suppression",
    desc: "Large-scale inert gas suppression protecting an automated warehouse with high-value stock.",
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=900&q=80",
    large: true,
  },
  {
    title: "Retail Unit Emergency Lighting",
    location: "Milton Keynes",
    tag: "Emergency Lighting",
    desc: "Maintained luminaires with self-test capability throughout a large retail unit.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    large: false,
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-10" style={{ background: "var(--charcoal)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeIn">
            <span className="tag mb-6 block w-fit" style={{ color: "var(--green-light)", borderColor: "var(--green-light)" }}>Our Work</span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.15}>
            <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Our{" "}
              <em style={{ color: "var(--green-light)", fontStyle: "italic" }}>Installations</em>
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.25}>
            <p className="mt-6 text-lg leading-8 max-w-xl" style={{ color: "rgba(255,255,255,0.55)" }}>
              A selection of fire safety projects delivered across the UK — from data centres to schools, warehouses to healthcare facilities.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Projects masonry grid */}
      <section className="py-20 px-6 lg:px-10" style={{ background: "var(--off-white)" }}>
        <div className="max-w-7xl mx-auto">
          {/* Group into rows: large + 2 small, repeat */}
          <div className="flex flex-col gap-4">
            {[0, 3, 6].map((startIdx) => {
              const row = projects.slice(startIdx, startIdx + 3);
              if (row.length === 0) return null;
              const large = row.find((p) => p.large);
              const smalls = row.filter((p) => !p.large);

              return (
                <div key={startIdx} className={`grid grid-cols-1 lg:grid-cols-12 gap-4 ${startIdx === 3 ? "lg:[direction:rtl]" : ""}`}>
                  {large && (
                    <AnimateIn variant="scaleUp" className="lg:col-span-7 lg:[direction:ltr]">
                      <div className="group relative overflow-hidden" style={{ height: "440px" }}>
                        <Image
                          src={large.img}
                          alt={large.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.9) 30%, transparent)" }} />
                        <div className="absolute bottom-0 left-0 p-8">
                          <span className="tag text-white/60 mb-3 block w-fit" style={{ borderColor: "rgba(255,255,255,0.3)" }}>{large.tag}</span>
                          <h3 className="font-display text-2xl lg:text-3xl font-bold text-white">{large.title}</h3>
                          <p className="text-white/50 text-sm mt-1">{large.location}</p>
                          <p className="text-white/60 text-sm mt-3 max-w-sm leading-6">{large.desc}</p>
                        </div>
                      </div>
                    </AnimateIn>
                  )}
                  <div className="lg:col-span-5 lg:[direction:ltr] flex flex-col gap-4">
                    {smalls.map((p, i) => (
                      <AnimateIn key={p.title} variant={startIdx === 3 ? "slideLeft" : "slideRight"} delay={i * 0.1}>
                        <div className="group relative overflow-hidden" style={{ height: "210px" }}>
                          <Image
                            src={p.img}
                            alt={p.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.85) 30%, transparent)" }} />
                          <div className="absolute bottom-0 left-0 p-6">
                            <span className="tag text-white/60 mb-2 block w-fit" style={{ borderColor: "rgba(255,255,255,0.3)", fontSize: "0.6rem" }}>{p.tag}</span>
                            <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                            <p className="text-white/50 text-xs mt-0.5">{p.location}</p>
                          </div>
                        </div>
                      </AnimateIn>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-6 lg:px-10" style={{ background: "var(--charcoal)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <AnimateIn variant="fadeUp">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Like what you see? Let&apos;s talk.
            </h2>
            <p className="text-lg leading-8 mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Our team is ready to assess your premises and design a fire safety solution tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/quote" className="btn-green">Get Free Survey →</Link>
              <Link href="/contact" className="btn-outline-white">Contact Us</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <LeadCaptureBanner
        title="Start your fire safety project"
        subtitle="Book a free site survey — our BAFE-certified engineers will come to you, assess your premises, and provide a detailed written proposal."
      />
    </>
  );
}
