import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import LeadCaptureBanner from "@/components/LeadCaptureBanner";

export const metadata: Metadata = {
  title: "Fire Safety Services | Surtur Fire — UK",
  description: "BAFE-certified fire suppression, detection, extinguishers, and emergency lighting across the UK. Full design, supply, installation and maintenance.",
};

const services = [
  {
    id: "suppression",
    num: "01",
    title: "Fire Suppression",
    subtitle: "Systems",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=85",
    intro: "Gas-based suppression systems designed for environments where water would destroy the very assets you&apos;re trying to protect. From server rooms to museum archives.",
    points: [
      "Inert gas (IG-55, IG-541) systems",
      "FM-200 & Novec 1230 clean agent",
      "Kitchen hood & industrial suppression",
      "Full system design to BSEN 15004",
      "Commissioning, testing & handover",
      "Annual inspection & maintenance",
    ],
  },
  {
    id: "detection",
    num: "02",
    title: "Fire Detection",
    subtitle: "& Alarms",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000&q=85",
    intro: "Addressable and conventional fire detection systems engineered to BS 5839. From a single detector to a fully networked alarm system across multiple buildings.",
    points: [
      "Addressable fire alarm panels",
      "Conventional detection systems",
      "Multi-sensor smoke & heat detectors",
      "Aspirating detection (ASD) systems",
      "Beam detectors for large spaces",
      "Remote monitoring & signalling",
    ],
  },
  {
    id: "extinguishers",
    num: "03",
    title: "Fire Extinguishers",
    subtitle: "& Equipment",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1000&q=85",
    intro: "The right extinguisher type, correctly specified, positioned, and maintained to BAFE SP101 standards. Supply, installation, and annual certified servicing.",
    points: [
      "CO2, dry powder & foam types",
      "Water mist extinguishers",
      "Fire blankets & hose reels",
      "BAFE SP101 certified service",
      "Risk assessment & recommendations",
      "Staff training on portable equipment",
    ],
  },
  {
    id: "lighting",
    num: "04",
    title: "Emergency Lighting",
    subtitle: "& Signage",
    image: "https://images.unsplash.com/photo-1573167579374-29f7f5a30e8a?w=1000&q=85",
    intro: "Emergency escape lighting and exit signage designed to BS 5266, ensuring safe evacuation when mains power fails. From standalone luminaires to central battery systems.",
    points: [
      "Maintained & non-maintained luminaires",
      "Central battery system design",
      "Exit signs & directional signage",
      "Self-test emergency lighting",
      "Photoluminescent signage",
      "Annual duration & functional testing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--bg-dark)",
          paddingTop: "140px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, rgba(220,38,38,0.07) 0%, transparent 60%)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" style={{ zIndex: 1 }}>
          <AnimateIn>
            <p className="eyebrow" style={{ marginBottom: "20px" }}>What We Offer</p>
            <h1 className="display" style={{ color: "#fff", marginBottom: "20px" }}>
              Our Services.
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: "520px" }}>
              Four core fire safety disciplines. All delivered by BAFE-certified engineers. All backed by our nationwide service network.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services — alternating layout */}
      {services.map((svc, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section key={svc.id} id={svc.id} style={{ background: i % 2 === 0 ? "#fff" : "var(--bg-soft)", padding: "80px 0" }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!imageLeft ? "lg:[&>*:first-child]:order-2" : ""}`}>

                {/* Image */}
                <AnimateIn variant={imageLeft ? "slideLeft" : "slideRight"}>
                  <div style={{ position: "relative", borderRadius: "10px", overflow: "hidden", aspectRatio: "4/3" }}>
                    <Image src={svc.image} alt={svc.title} fill className="object-cover" />
                    <div style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(9,9,9,0.85)", backdropFilter: "blur(8px)", padding: "6px 14px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>
                        {svc.num} / 04
                      </span>
                    </div>
                  </div>
                </AnimateIn>

                {/* Content */}
                <AnimateIn variant={imageLeft ? "slideRight" : "slideLeft"} delay={0.1}>
                  <p className="eyebrow" style={{ marginBottom: "16px" }}>{svc.title} {svc.subtitle}</p>
                  <h2 className="heading-md" style={{ color: "var(--ink)", marginBottom: "16px" }}>
                    {svc.title}<br />
                    <span style={{ color: "var(--red)" }}>{svc.subtitle}</span>
                  </h2>
                  <p style={{ fontSize: "0.925rem", color: "var(--ink-3)", lineHeight: 1.8, marginBottom: "28px" }}
                    dangerouslySetInnerHTML={{ __html: svc.intro }}
                  />
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ marginBottom: "32px" }}>
                    {svc.points.map((p) => (
                      <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.85rem", color: "var(--ink-2)" }}>
                        <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "var(--red-soft)", border: "1px solid rgba(220,38,38,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4l2.5 2.5L7 1.5" stroke="var(--red)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote" className="btn btn-primary">
                    Get a Quote →
                  </Link>
                </AnimateIn>
              </div>
            </div>
          </section>
        );
      })}

      <LeadCaptureBanner
        title="Not sure what you need?"
        subtitle="Our engineers will carry out a free site survey, assess your current systems, and recommend the right solution for your premises."
      />
    </>
  );
}
