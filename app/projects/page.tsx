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
    desc: "Complete BS 5266 compliant emergency lighting across 40+ classrooms, corridors, and common areas.",
    large: true,
  },
  {
    title: "Restaurant Extinguisher Package",
    location: "Northampton",
    category: "Fire Extinguishers",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=85",
    desc: "Full risk assessment, supply, and BAFE certified annual service contract for a commercial kitchen.",
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
    desc: "Large-scale inert gas suppression protecting an automated warehouse with £4M+ of high-value stock.",
    large: true,
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--black)", paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <AnimateIn>
            <p className="label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>Our Portfolio</p>
            <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", color: "#fff", marginBottom: "24px" }}>
              Installations.
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, maxWidth: "500px" }}>
              A selection of completed fire safety projects across the UK — from data centres to schools, warehouses to hospitals.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: "var(--soft)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "20px" }}>
            {projects.map((project, i) => (
              <AnimateIn
                key={i}
                delay={(i % 3) * 0.07}
                style={{ gridColumn: project.large ? "span 7" : "span 5" } as React.CSSProperties}
              >
                <div style={{ background: "#fff", overflow: "hidden", height: "100%" }}>
                  <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                    <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: "14px", left: "14px" }}>
                      <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "4px 10px", background: "rgba(10,10,10,0.85)", backdropFilter: "blur(8px)", color: "rgba(255,255,255,0.8)" }}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--red)", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "6px" }}>
                      {project.location}
                    </p>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--black)", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: "0.845rem", color: "var(--grey)", lineHeight: 1.7 }}>{project.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <AnimateIn>
            <p className="label" style={{ marginBottom: "16px", justifyContent: "center" }}>Get Started</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "var(--black)", letterSpacing: "-0.03em", marginBottom: "16px" }}>
              Your premises could be next.
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--grey)", lineHeight: 1.75, marginBottom: "32px" }}>
              Every installation starts with a free site survey. Tell us about your building and we&apos;ll recommend the right systems.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/quote" className="btn-red">Get Free Survey →</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
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
