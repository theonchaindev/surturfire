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
    img: "https://cdn.prod.website-files.com/63dbb705fb1dc0446f72376f/640b1f2c44ffd0851b8106c4_SurturFire%20Image.png",
  },
  {
    title: "Multi-Floor Office Detection",
    location: "Birmingham",
    tag: "Fire Detection",
    desc: "Addressable fire detection system across 5 floors, 200+ devices, fully BS 5839 compliant.",
    img: "https://cdn.prod.website-files.com/63dbb705fb1dc0446f72376f/65c608e62b18a29e3046ef99_iStock-1348046400.jpg",
  },
  {
    title: "Industrial Unit Suppression",
    location: "Coventry",
    tag: "Fire Suppression",
    desc: "Inert gas system protecting high-value manufacturing equipment.",
    img: "https://images.unsplash.com/photo-1573167579374-29f7f5a30e8a?w=800&q=80",
  },
  {
    title: "School Emergency Lighting",
    location: "Leicester",
    tag: "Emergency Lighting",
    desc: "Complete BS 5266 compliant emergency lighting installation across 40 classrooms and common areas.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
  },
  {
    title: "Restaurant Extinguisher Package",
    location: "Northampton",
    tag: "Fire Extinguishers",
    desc: "Full extinguisher risk assessment and supply across a busy commercial kitchen and dining area.",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
  },
  {
    title: "Hospital Corridor Detection",
    location: "London",
    tag: "Fire Detection",
    desc: "Addressable beam detection system installed in a challenging healthcare environment.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
];

const tagColors: Record<string, string> = {
  "Fire Suppression": "#cc2c2c",
  "Fire Detection": "#cc2c2c",
  "Fire Extinguishers": "#cc2c2c",
  "Emergency Lighting": "#cc2c2c",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-10" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeIn">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "#cc2c2c" }}
            >
              Our Work
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.15}>
            <h1
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Our Installations
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.25}>
            <p className="mt-6 text-lg leading-8 max-w-xl" style={{ color: "rgba(255,255,255,0.55)" }}>
              A selection of fire safety projects delivered across the UK — from data centres to schools,
              warehouses to healthcare facilities.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 px-6 lg:px-10" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <AnimateIn key={p.title} variant="fadeUp" delay={i * 0.07}>
                <div
                  className="flex flex-col h-full overflow-hidden"
                  style={{ border: "1px solid #e5e5e5" }}
                >
                  <div className="relative" style={{ height: "220px" }}>
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1" style={{ background: "#ffffff" }}>
                    <span
                      className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
                      style={{ color: tagColors[p.tag] || "#cc2c2c" }}
                    >
                      {p.tag}
                    </span>
                    <h3 className="text-lg font-bold mb-1" style={{ color: "#111111" }}>{p.title}</h3>
                    <p className="text-xs font-semibold mb-3 uppercase tracking-wide" style={{ color: "#888888" }}>
                      {p.location}
                    </p>
                    <p className="text-sm leading-7 flex-1" style={{ color: "#888888" }}>{p.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto text-center">
          <AnimateIn variant="fadeUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Like what you see? Let&apos;s talk.
            </h2>
            <p className="text-lg leading-8 mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Our team is ready to assess your premises and design a fire safety solution tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/quote" className="btn-red">Get Free Survey →</Link>
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
