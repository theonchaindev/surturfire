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
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=85",
    intro: "Gas-based suppression systems designed for environments where water would destroy the very assets you're protecting. From server rooms to museum archives.",
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
      <section style={{ background: "var(--black)", paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <AnimateIn>
            <p className="label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>What We Offer</p>
            <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", color: "#fff", marginBottom: "24px" }}>
              Our Services.
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, maxWidth: "520px" }}>
              Four core fire safety disciplines. All delivered by BAFE-certified engineers. All backed by our nationwide service network.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services */}
      {services.map((svc, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section key={svc.id} id={svc.id} style={{ background: i % 2 === 0 ? "#fff" : "var(--soft)", padding: "80px 0", borderTop: "1px solid var(--line)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "64px",
                alignItems: "center",
              }} className={imageLeft ? "" : "reverse-grid"}>
                {/* Image */}
                <AnimateIn delay={imageLeft ? 0 : 0.1}>
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", order: imageLeft ? 0 : 1 }}>
                    <Image src={svc.image} alt={svc.title} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(10,10,10,0.85)", backdropFilter: "blur(8px)", padding: "6px 14px" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--red)", letterSpacing: "0.1em" }}>{svc.num} / 04</span>
                    </div>
                  </div>
                </AnimateIn>

                {/* Content */}
                <AnimateIn delay={imageLeft ? 0.1 : 0}>
                  <div style={{ order: imageLeft ? 1 : 0 }}>
                    <p className="label" style={{ marginBottom: "16px" }}>{svc.title}</p>
                    <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--black)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
                      {svc.title}
                    </h2>
                    <p style={{ fontSize: "0.925rem", color: "var(--grey)", lineHeight: 1.8, marginBottom: "28px" }}>{svc.intro}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px", marginBottom: "32px" }}>
                      {svc.points.map((p) => (
                        <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "var(--black)" }}>
                          <span style={{ color: "var(--red)", flexShrink: 0, marginTop: "2px" }}>—</span>
                          {p}
                        </div>
                      ))}
                    </div>
                    <Link href="/quote" className="btn-red" style={{ width: "fit-content" }}>
                      Get a Quote →
                    </Link>
                  </div>
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
