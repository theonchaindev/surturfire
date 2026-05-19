import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import LeadCaptureBanner from "@/components/LeadCaptureBanner";

export const metadata: Metadata = {
  title: "Projects | Surtur Fire — Fire Safety Installations UK",
  description: "Browse our portfolio of completed fire safety installations across the UK — suppression systems, detection, extinguishers, and emergency lighting.",
};

const projects = [
  {
    title: "Data Centre Gas Suppression",
    location: "Northampton",
    category: "Fire Suppression",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=85",
    desc: "FM-200 clean agent suppression system protecting 2,400m² of critical IT infrastructure. Full design, supply, commissioning, and annual maintenance contract.",
    large: true,
  },
  {
    title: "Multi-Floor Office Detection",
    location: "Birmingham",
    category: "Fire Detection",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85",
    desc: "Addressable fire detection across 6 floors, 240+ devices, fully BS 5839 compliant.",
    large: false,
  },
  {
    title: "Industrial Unit Suppression",
    location: "Coventry",
    category: "Fire Suppression",
    image: "https://images.unsplash.com/photo-1573167579374-29f7f5a30e8a?w=800&q=85",
    desc: "Inert gas system protecting high-value automated manufacturing equipment.",
    large: false,
  },
  {
    title: "School Emergency Lighting",
    location: "Leicester",
    category: "Emergency Lighting",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&q=85",
    desc: "Complete BS 5266 compliant emergency lighting across 40+ classrooms, corridors, and common areas. Self-test technology throughout.",
    large: true,
  },
  {
    title: "Restaurant Extinguisher Package",
    location: "Northampton",
    category: "Fire Extinguishers",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=85",
    desc: "Full risk assessment, supply, and BAFE certified annual service contract for a busy commercial kitchen and dining area.",
    large: false,
  },
  {
    title: "Hospital Beam Detection",
    location: "London",
    category: "Fire Detection",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=85",
    desc: "Aspirating smoke detection system across a challenging multi-wing NHS facility.",
    large: false,
  },
  {
    title: "Automated Warehouse Suppression",
    location: "Nottingham",
    category: "Fire Suppression",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=900&q=85",
    desc: "Large-scale inert gas suppression protecting an automated warehouse with £4M+ of high-value stock and robotics.",
    large: true,
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--bg-dark)", paddingTop: "140px", paddingBottom: "80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 30%, rgba(220,38,38,0.05) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" style={{ zIndex: 1 }}>
          <AnimateIn>
            <p className="eyebrow" style={{ marginBottom: "20px" }}>Our Portfolio</p>
            <h1 className="display" style={{ color: "#fff", marginBottom: "20px" }}>
              Installations.
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: "500px" }}>
              A selection of completed fire safety projects across the UK — from data centres to schools, warehouses to hospitals.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Projects grid */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {projects.map((project, i) => (
              <AnimateIn
                key={i}
                className={project.large ? "md:col-span-7" : "md:col-span-5"}
                delay={(i % 3) * 0.07}
                variant="fadeUp"
              >
                <div className="card" style={{ overflow: "hidden", height: "100%" }}>
                  {/* Image */}
                  <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      style={{ transition: "transform 0.5s ease" }}
                    />
                    <div style={{ position: "absolute", top: "14px", left: "14px" }}>
                      <span style={{
                        fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em",
                        textTransform: "uppercase", padding: "4px 10px",
                        background: "rgba(9,9,9,0.8)", backdropFilter: "blur(8px)",
                        borderRadius: "3px", color: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div style={{ padding: "24px" }}>
                    <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--red)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                      {project.location}
                    </p>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: "0.845rem", color: "var(--ink-3)", lineHeight: 1.7 }}>
                      {project.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff", padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <p className="eyebrow" style={{ marginBottom: "16px", justifyContent: "center" }}>Get Started</p>
            <h2 className="heading-lg" style={{ color: "var(--ink)", marginBottom: "16px" }}>
              Your premises could be next.
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--ink-3)", lineHeight: 1.75, marginBottom: "32px" }}>
              Every installation starts with a free site survey. Tell us about your building and we&apos;ll recommend the right systems.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/quote" className="btn btn-primary" style={{ fontSize: "0.9rem" }}>Get Free Survey →</Link>
              <Link href="/contact" className="btn btn-secondary" style={{ fontSize: "0.9rem" }}>Contact Us</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <LeadCaptureBanner
        title="Discuss your project with us."
        subtitle="Tell us about your fire safety requirements and one of our BAFE-certified engineers will be in touch within one business day."
      />
    </>
  );
}
