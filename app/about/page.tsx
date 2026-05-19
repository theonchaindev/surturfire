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
  {
    title: "BAFE Certified",
    desc: "Every engineer holds current BAFE certification. It&apos;s the fire industry&apos;s gold standard and non-negotiable for us.",
  },
  {
    title: "Transparent Pricing",
    desc: "Fixed-price quotes with no hidden extras. What we propose is what you pay — no surprises at invoice.",
  },
  {
    title: "No Subcontracting",
    desc: "Every engineer on your site is directly employed. We maintain quality control from survey through to handover.",
  },
  {
    title: "Ongoing Support",
    desc: "We don&apos;t disappear after installation. Annual maintenance contracts keep your systems fully compliant.",
  },
];

const accreditations = [
  {
    name: "BAFE",
    full: "British Approvals for Fire Equipment",
    desc: "The fire safety industry&apos;s most recognised third-party certification scheme. BAFE registration demonstrates that our engineers meet rigorous independently assessed standards.",
  },
  {
    name: "FIA",
    full: "Fire Industry Association",
    desc: "Membership of the UK&apos;s leading fire safety industry trade association. Gives us access to the latest technical guidance, training, and industry standards.",
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
      <section style={{ background: "var(--bg-dark)", paddingTop: "140px", paddingBottom: "80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(220,38,38,0.06) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" style={{ zIndex: 1 }}>
          <AnimateIn>
            <p className="eyebrow" style={{ marginBottom: "20px" }}>Our Story</p>
            <h1 className="display" style={{ color: "#fff", marginBottom: "20px" }}>
              About<br />SurturFire.
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: "500px" }}>
              BAFE-certified fire safety specialists. Built on expertise, trust, and an uncompromising approach to protecting people and property.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn variant="slideLeft">
              <div style={{ position: "relative", borderRadius: "10px", overflow: "hidden", aspectRatio: "4/5" }}>
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85"
                  alt="Commercial building protected by Surtur Fire"
                  fill className="object-cover"
                />
                <div style={{ position: "absolute", bottom: "24px", left: "24px", background: "rgba(9,9,9,0.9)", backdropFilter: "blur(8px)", padding: "16px 20px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>10+</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>Years protecting UK businesses</div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn variant="slideRight" delay={0.1}>
              <p className="eyebrow" style={{ marginBottom: "20px" }}>Who We Are</p>
              <h2 className="heading-lg" style={{ color: "var(--ink)", marginBottom: "24px" }}>
                Built on expertise<br />and trust.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
                {[
                  "Surtur Fire was founded with a clear purpose: to provide genuinely expert fire safety services to businesses across the UK, without cutting corners or compromising on quality.",
                  "Based in Northampton, our BAFE-certified engineers carry out everything from initial site surveys and system design through to installation, commissioning, and annual maintenance.",
                  "We work directly with our clients — no subcontracting, no pass-the-parcel. You get the same expert team from first call to final handover.",
                ].map((para, i) => (
                  <p key={i} style={{ fontSize: "0.925rem", color: "var(--ink-3)", lineHeight: 1.8 }}>{para}</p>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/quote" className="btn btn-primary">Get Free Survey</Link>
                <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>How We Work</p>
            <h2 className="heading-lg" style={{ color: "var(--ink)", marginBottom: "52px" }}>Our values.</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.07} variant="fadeUp">
                <div style={{ padding: "28px", background: "#fff", border: "1px solid var(--border)", borderRadius: "8px" }}>
                  <div style={{ width: "36px", height: "2px", background: "var(--red)", marginBottom: "20px" }} />
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "10px" }}>{v.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--ink-3)", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: v.desc }} />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section style={{ background: "var(--bg-dark-2)", padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>Our Certifications</p>
            <h2 className="heading-lg" style={{ color: "#fff", marginBottom: "52px" }}>
              Every accreditation<br />that matters.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {accreditations.map((acc, i) => (
              <AnimateIn key={acc.name} delay={i * 0.07} variant="fadeUp">
                <div style={{ padding: "32px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px", background: "rgba(255,255,255,0.02)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                    <span style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "0.05em", color: "#fff" }}>{acc.name}</span>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>{acc.full}</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: acc.desc }} />
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
