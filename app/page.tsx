import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import LeadCaptureBanner from "@/components/LeadCaptureBanner";

const services = [
  {
    id: "suppression",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C11 2 16 7 16 12C16 15 13.8 17.5 11 17.5C8.2 17.5 6 15 6 12C6 10 7.5 8.5 7.5 8.5C7.5 11 10.5 11.5 11 10C11.8 12.5 10.5 14.5 9 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="11" y1="17.5" x2="11" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="20" x2="14" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Fire Suppression",
    desc: "Gas-based suppression systems engineered for environments where water would cause catastrophic damage — data centres, server rooms, switchgear.",
    href: "/services#suppression",
  },
  {
    id: "detection",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 2v2M11 18v2M2 11h2M18 11h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Fire Detection",
    desc: "Addressable and conventional detection systems designed to BS 5839. From a single smoke detector to a building-wide networked alarm system.",
    href: "/services#detection",
  },
  {
    id: "extinguishers",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9 3h4v3H9zM11 6v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="7" y="8" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 8v3M9 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Fire Extinguishers",
    desc: "Full supply, installation, and BAFE SP101 certified annual servicing. The right extinguisher type, correctly positioned, for your specific risk.",
    href: "/services#extinguishers",
  },
  {
    id: "lighting",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2v3M11 17v3M4.2 4.2l2.1 2.1M15.7 15.7l2.1 2.1M2 11h3M17 11h3M4.2 17.8l2.1-2.1M15.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Emergency Lighting",
    desc: "BS 5266 compliant emergency escape lighting and exit signage. Maintained luminaires, central battery systems, and self-test technology.",
    href: "/services#lighting",
  },
];

const stats = [
  { value: "500+", label: "Installations completed" },
  { value: "10+", label: "Years of expertise" },
  { value: "BAFE", label: "Certified engineers" },
  { value: "UK", label: "Nationwide coverage" },
];

const certs = ["BAFE", "FIA", "Safe Contractor", "LPCG"];

const testimonials = [
  {
    quote: "The gas suppression system was installed professionally and on time. Competitive pricing and excellent aftercare — we now have a full annual servicing contract.",
    name: "Kevin Anderson",
    role: "IT Director",
  },
  {
    quote: "Our office fire detection was fitted across three floors with minimal disruption to our team. Very professional engineers who clearly know their stuff.",
    name: "Olivia Smith",
    role: "Office Manager",
  },
  {
    quote: "Highly knowledgeable team. They assessed our warehouse, recommended the right systems, and the installation was immaculate. Couldn't be happier.",
    name: "Terry Malone",
    role: "Facilities Manager",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          background: "var(--bg-dark)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image with overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1800&q=85"
            alt=""
            fill
            className="object-cover"
            priority
            style={{ opacity: 0.18 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,10,1) 50%, rgba(10,10,10,0.75) 100%)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative" style={{ zIndex: 1, paddingTop: "120px", paddingBottom: "100px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div>
              <AnimateIn delay={0.05}>
                <p className="eyebrow" style={{ color: "var(--red)", marginBottom: "28px" }}>
                  UK Fire Safety Specialists
                </p>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h1 className="display" style={{ color: "#fff", marginBottom: "24px" }}>
                  Protecting<br />
                  People &amp;<br />
                  Businesses.
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.18}>
                <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: "460px", marginBottom: "36px" }}>
                  Trusted by clients across the UK — experts in the supply, design, and maintenance of fire safety systems that safeguard what matters most.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.24}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "48px" }}>
                  <Link href="/quote" className="btn btn-primary" style={{ fontSize: "0.9rem", padding: "13px 26px" }}>
                    Get Free Survey
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                  <Link href="/services" className="btn btn-ghost-white" style={{ fontSize: "0.9rem", padding: "13px 26px" }}>
                    Our Services
                  </Link>
                </div>
              </AnimateIn>

              {/* Cert strip */}
              <AnimateIn delay={0.3}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.25)", fontWeight: 500, marginRight: "8px" }}>Accredited by</span>
                  {certs.map((c) => (
                    <span
                      key={c}
                      style={{
                        fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
                        textTransform: "uppercase", padding: "4px 10px",
                        border: "1px solid rgba(255,255,255,0.15)", borderRadius: "3px",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </AnimateIn>
            </div>

            {/* Right: stats */}
            <AnimateIn variant="slideRight" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      padding: "28px 24px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "4px" }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.2))" }} />
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section style={{ background: "var(--bg-soft)", padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div style={{ marginBottom: "56px" }}>
              <p className="eyebrow" style={{ marginBottom: "14px" }}>What We Do</p>
              <div className="flex items-end justify-between flex-wrap gap-4">
                <h2 className="heading-lg" style={{ color: "var(--ink)" }}>
                  Our fire safety services.
                </h2>
                <Link href="/services" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--red)", textDecoration: "none" }}>
                  View all services →
                </Link>
              </div>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((svc, i) => (
              <AnimateIn key={svc.id} delay={i * 0.08} variant="fadeUp">
                <Link
                  href={svc.href}
                  className="card"
                  style={{ display: "block", padding: "32px", textDecoration: "none", height: "100%" }}
                >
                  <div className="icon-box" style={{ marginBottom: "20px" }}>{svc.icon}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "10px", letterSpacing: "-0.01em" }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--ink-3)", lineHeight: 1.75, marginBottom: "20px" }}>
                    {svc.desc}
                  </p>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--red)" }}>Learn more →</span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE IMAGE + TEXT ─────────────────────── */}
      <section style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-xl" style={{ border: "1px solid var(--border)" }}>
            {/* Image */}
            <div style={{ position: "relative", minHeight: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1000&q=85"
                alt="Data centre fire suppression system"
                fill
                className="object-cover"
              />
            </div>
            {/* Text */}
            <AnimateIn variant="slideRight">
              <div style={{ padding: "52px 48px", background: "var(--bg-dark)", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p className="eyebrow" style={{ marginBottom: "20px" }}>Fire Suppression</p>
                <h2 className="heading-md" style={{ color: "#fff", marginBottom: "18px" }}>
                  Safeguarding critical infrastructure.
                </h2>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: "32px" }}>
                  Water-based systems destroy the assets they&apos;re meant to protect. Our gas suppression systems — inert gas, FM-200, and Novec 1230 — extinguish fires without leaving residue or damaging sensitive equipment.
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
                  {["Designed to BSEN 15004", "Full commissioning & handover", "Annual inspection & maintenance", "24/7 emergency callout"].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(220,38,38,0.2)", border: "1px solid rgba(220,38,38,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5L8.5 2" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/services#suppression" className="btn btn-primary" style={{ width: "fit-content" }}>
                  Find Out More
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────── */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <p className="eyebrow" style={{ marginBottom: "10px" }}>Proud to be certified</p>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>
                  Every accreditation that matters.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "BAFE", desc: "British Approvals for Fire Equipment" },
                  { name: "FIA", desc: "Fire Industry Association" },
                  { name: "Safe Contractor", desc: "Approved Contractor Scheme" },
                  { name: "LPCG", desc: "Loss Prevention Certification Board" },
                ].map((cert) => (
                  <div
                    key={cert.name}
                    style={{
                      padding: "16px 20px",
                      background: "#fff",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      textAlign: "center",
                      minWidth: "130px",
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.05em", color: "var(--ink)", marginBottom: "4px" }}>
                      {cert.name}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "var(--ink-4)", lineHeight: 1.4 }}>
                      {cert.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>Client Reviews</p>
            <h2 className="heading-lg" style={{ color: "var(--ink)", marginBottom: "56px", maxWidth: "480px" }}>
              Trusted by businesses across the UK.
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} delay={i * 0.08} variant="fadeUp">
                <div
                  className="card"
                  style={{ padding: "32px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                >
                  {/* Stars */}
                  <div>
                    <div style={{ display: "flex", gap: "3px", marginBottom: "20px" }}>
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="var(--red)">
                          <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5z"/>
                        </svg>
                      ))}
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "var(--ink-2)", lineHeight: 1.75 }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid var(--border)" }}>
                    <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--ink)" }}>{t.name}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--ink-4)" }}>{t.role}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────── */}
      <section style={{ background: "var(--bg-dark-2)", padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn variant="slideLeft">
              <p className="eyebrow" style={{ marginBottom: "20px" }}>Why Surtur Fire</p>
              <h2 className="heading-lg" style={{ color: "#fff", marginBottom: "20px" }}>
                Expertise you can rely on.
              </h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: "36px" }}>
                We don&apos;t subcontract. Every engineer on your site is directly employed, BAFE-certified, and fully trained. From initial survey to annual maintenance, you deal with the same expert team throughout.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
                {[
                  "Free, no-obligation site surveys",
                  "Fully insured with public liability cover",
                  "Fixed-price quotes — no hidden costs",
                  "Rapid response emergency callout",
                  "Annual maintenance contracts available",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5L8.5 2" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn btn-ghost-white">
                About Us →
              </Link>
            </AnimateIn>

            <AnimateIn variant="slideRight" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "01", title: "Survey", desc: "Free on-site assessment of your fire risk and current systems." },
                  { num: "02", title: "Design", desc: "We specify the right systems to meet regulations and your budget." },
                  { num: "03", title: "Install", desc: "Our engineers carry out all work to the highest standards." },
                  { num: "04", title: "Maintain", desc: "Annual service contracts keep your systems fully compliant." },
                ].map((step) => (
                  <div
                    key={step.num}
                    style={{
                      padding: "24px",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "8px",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--red)", letterSpacing: "0.1em", marginBottom: "10px" }}>
                      {step.num}
                    </div>
                    <h3 style={{ fontWeight: 700, color: "#fff", marginBottom: "8px", fontSize: "0.95rem" }}>{step.title}</h3>
                    <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── LEAD CAPTURE ─────────────────────────────── */}
      <LeadCaptureBanner />
    </>
  );
}
