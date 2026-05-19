import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import LeadCaptureBanner from "@/components/LeadCaptureBanner";

export const metadata: Metadata = {
  title: "About Us | Surtur Fire — BAFE-Certified Fire Safety",
  description: "Learn about Surtur Fire — BAFE-certified fire safety specialists based in Northampton, protecting businesses across the UK.",
};

const values = [
  { title: "BAFE Certified", desc: "Every engineer holds current BAFE certification — the fire industry's gold standard." },
  { title: "Transparent Pricing", desc: "Fixed-price quotes with no hidden extras. What we propose is what you pay." },
  { title: "No Subcontracting", desc: "Every engineer on your site is directly employed. Quality control from survey to handover." },
  { title: "Ongoing Support", desc: "We don't disappear after installation. Annual maintenance contracts keep you fully compliant." },
];

const accreditations = [
  {
    name: "BAFE",
    full: "British Approvals for Fire Equipment",
    desc: "The fire safety industry's most recognised third-party certification scheme. Demonstrates our engineers meet rigorous independently assessed standards.",
  },
  {
    name: "FIA",
    full: "Fire Industry Association",
    desc: "Membership of the UK's leading fire safety trade association. Gives us access to the latest technical guidance, training, and industry standards.",
  },
  {
    name: "Safe Contractor",
    full: "Approved Contractor Scheme",
    desc: "An independently assessed health and safety accreditation, accepted by thousands of major organisations as proof of contractor safety standards.",
  },
  {
    name: "LPCG",
    full: "Loss Prevention Certification Board",
    desc: "Demonstrates compliance with the most stringent standards for fire suppression systems — essential for high-value and high-risk environments.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--black)", paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <AnimateIn>
            <p className="label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>Our Story</p>
            <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", color: "#fff", marginBottom: "24px" }}>
              About<br />SurturFire.
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, maxWidth: "500px" }}>
              BAFE-certified fire safety specialists. Built on expertise, trust, and an uncompromising approach to protecting people and property.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <AnimateIn>
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5" }}>
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85"
                  alt="Commercial building"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", bottom: "24px", left: "24px", background: "rgba(10,10,10,0.9)", backdropFilter: "blur(8px)", padding: "16px 20px" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>10+</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>Years protecting UK businesses</div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <p className="label" style={{ marginBottom: "20px" }}>Who We Are</p>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "var(--black)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "24px" }}>
                Built on expertise<br />and trust.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
                {[
                  "Surtur Fire was founded with a clear purpose: to provide genuinely expert fire safety services to businesses across the UK, without cutting corners or compromising on quality.",
                  "Based in Northampton, our BAFE-certified engineers carry out everything from initial site surveys and system design through to installation, commissioning, and annual maintenance.",
                  "We work directly with our clients — no subcontracting, no pass-the-parcel. You get the same expert team from first call to final handover.",
                ].map((para, i) => (
                  <p key={i} style={{ fontSize: "0.925rem", color: "var(--grey)", lineHeight: 1.8 }}>{para}</p>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/quote" className="btn-red">Get Free Survey</Link>
                <Link href="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "var(--soft)", padding: "80px 0", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <AnimateIn>
            <p className="label" style={{ marginBottom: "12px" }}>How We Work</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "var(--black)", letterSpacing: "-0.03em", marginBottom: "52px" }}>Our values.</h2>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.07}>
                <div style={{ padding: "28px", background: "#fff", borderTop: "3px solid var(--red)" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--black)", marginBottom: "10px" }}>{v.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--grey)", lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section style={{ background: "var(--black)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <AnimateIn>
            <p className="label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "12px" }}>Our Certifications</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "52px" }}>
              Every accreditation<br />that matters.
            </h2>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {accreditations.map((acc, i) => (
              <AnimateIn key={acc.name} delay={i * 0.07}>
                <div style={{ padding: "32px", borderLeft: "3px solid var(--red)", background: "rgba(255,255,255,0.03)" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "16px" }}>
                    <span style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "0.05em", color: "#fff" }}>{acc.name}</span>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>{acc.full}</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75 }}>{acc.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureBanner
        title="Ready to work with us?"
        subtitle="Get in touch for a free, no-obligation site survey. Our engineers will come to you and provide a detailed written proposal."
      />
    </>
  );
}
