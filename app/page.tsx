import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import LeadCaptureBanner from "@/components/LeadCaptureBanner";

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────────── */}
      <section style={{ paddingTop: "120px", paddingBottom: "0", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

          {/* Cert strip — top of page */}
          <AnimateIn>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "48px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bbb" }}>Accredited by</span>
              {["BAFE", "FIA", "Safe Contractor", "LPCG"].map(c => (
                <span key={c} style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--grey)", borderLeft: "2px solid var(--red)", paddingLeft: "10px" }}>{c}</span>
              ))}
            </div>
          </AnimateIn>

          {/* Main heading */}
          <AnimateIn delay={0.05}>
            <h1 style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", color: "var(--black)", marginBottom: "32px", maxWidth: "900px" }}>
              Protecting People<br />&amp; Businesses<br />
              <span style={{ color: "var(--red)", WebkitTextStroke: "0px" }}>Across The UK.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "32px", marginBottom: "56px" }}>
              <p style={{ fontSize: "1.05rem", color: "var(--grey)", lineHeight: 1.75, maxWidth: "480px" }}>
                Trusted by clients across the UK — we are experts in the supply, maintenance and design of fire safety systems to safeguard against the dangers of fire.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
                <Link href="/quote" className="btn-red" style={{ fontSize: "0.9rem" }}>
                  Get Free Survey
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <a href="tel:+447843841219" style={{ fontSize: "0.825rem", color: "var(--grey)", fontWeight: 500 }}>
                  Or call +44 7843 841219
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Full-bleed hero image */}
        <AnimateIn>
          <div style={{ position: "relative", height: "clamp(320px, 50vw, 640px)", overflow: "hidden" }}>
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=2000&q=90"
              alt="Data centre fire suppression system"
              fill priority
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
            />
            {/* Stats overlay */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", background: "rgba(10,10,10,0.85)", backdropFilter: "blur(8px)" }}>
              {[["500+", "Installations"], ["10+", "Years experience"], ["BAFE", "Certified"], ["UK-wide", "Coverage"]].map(([val, lbl]) => (
                <div key={lbl} style={{ flex: 1, padding: "24px 20px", borderRight: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>{val}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginTop: "4px" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ─── SERVICES — table rows ─────────────────────────────── */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ padding: "80px 0 0", marginBottom: "0", borderTop: "1px solid var(--line)" }}>
            <AnimateIn>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "40px" }}>
                <p className="label">Our Services</p>
                <Link href="/services" style={{ fontSize: "0.825rem", color: "var(--grey)", fontWeight: 500 }}>View all →</Link>
              </div>
            </AnimateIn>
          </div>

          {/* Service rows — unique table layout */}
          {[
            { num: "01", title: "Fire Suppression", desc: "Gas-based systems for server rooms, data centres, and anywhere water would cause catastrophic damage.", href: "/services#suppression" },
            { num: "02", title: "Fire Detection", desc: "Addressable and conventional detection to BS 5839 — from a single sensor to a building-wide network.", href: "/services#detection" },
            { num: "03", title: "Fire Extinguishers", desc: "BAFE SP101 certified supply, installation and annual servicing of the right extinguishers for your risk.", href: "/services#extinguishers" },
            { num: "04", title: "Emergency Lighting", desc: "BS 5266 compliant escape lighting and exit signage — maintained luminaires to central battery systems.", href: "/services#lighting" },
          ].map((svc, i) => (
            <AnimateIn key={svc.num} delay={i * 0.06}>
              <Link
                href={svc.href}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr 1fr auto",
                  alignItems: "center",
                  gap: "32px",
                  padding: "28px 0",
                  borderTop: "1px solid var(--line)",
                  cursor: "pointer",
                  transition: "background 0.15s",
                  color: "inherit",
                }}
                className="group"
              >
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--red)", letterSpacing: "0.06em" }}>{svc.num}</span>
                <span style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--black)" }}>{svc.title}</span>
                <span style={{ fontSize: "0.875rem", color: "var(--grey)", lineHeight: 1.6 }} className="hidden md:block">{svc.desc}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, color: "var(--grey)" }}>
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </AnimateIn>
          ))}

          <div style={{ borderTop: "1px solid var(--line)", paddingBottom: "80px" }} />
        </div>
      </section>

      {/* ─── FEATURED — full-bleed split ──────────────────────── */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "560px" }} className="block lg:grid">
        {/* Image — left */}
        <div style={{ position: "relative", minHeight: "360px" }}>
          <Image
            src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1000&q=85"
            alt="Fire suppression installation"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Text — right, dark */}
        <div style={{ background: "var(--black)", padding: "clamp(40px, 6vw, 80px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <AnimateIn>
            <p className="label" style={{ marginBottom: "20px" }}>Gas Suppression</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
              Precision systems for critical environments.
            </h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: "32px" }}>
              When water suppression would destroy the assets you&apos;re protecting, gas is the answer. We design, install and maintain inert gas, FM-200 and Novec 1230 systems that extinguish fires without leaving residue or damaging equipment.
            </p>
            <Link href="/services#suppression" className="btn-red" style={{ width: "fit-content" }}>
              Learn More →
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ─── TESTIMONIAL — single, large ──────────────────────── */}
      <section style={{ background: "var(--soft)", padding: "96px 32px" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <AnimateIn>
            <svg width="48" height="32" viewBox="0 0 48 32" fill="none" style={{ marginBottom: "28px" }}>
              <path d="M0 32V19.2C0 12.8 1.6 7.6 4.8 3.6 8 1.2 12.4 0 18 0v6.4C15.2 6.4 13.2 7.2 12 8.8 10.8 10.4 10 12.4 9.6 14.4H16V32H0zM28 32V19.2C28 12.8 29.6 7.6 32.8 3.6 36 1.2 40.4 0 46 0v6.4C43.2 6.4 41.2 7.2 40 8.8 38.8 10.4 38 12.4 37.6 14.4H44V32H28z" fill="var(--red)" fillOpacity="0.15"/>
            </svg>
            <p style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", color: "var(--black)", lineHeight: 1.55, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: "36px" }}>
              The gas suppression system was installed professionally and on time. Surtur Fire assessed our server room, designed the right system, and the installation was completed with minimal disruption. We now have a full annual servicing contract with them. Couldn&apos;t recommend them more highly.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "1rem", fontWeight: 700, color: "#fff" }}>K</span>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--black)" }}>Kevin Anderson</p>
                <p style={{ fontSize: "0.8rem", color: "var(--grey)" }}>IT Director</p>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: "3px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="var(--red)"><path d="M8 1.5l1.75 3.5 3.75.5-2.75 2.75.75 3.75L8 10.25 4.5 12l.75-3.75L2.5 5.5l3.75-.5z"/></svg>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ──────────────────────────────────── */}
      <section style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "56px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
          <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--grey)", flexShrink: 0 }}>Proud to be certified by</p>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", alignItems: "center" }}>
            {[
              { name: "BAFE", full: "British Approvals for Fire Equipment" },
              { name: "FIA", full: "Fire Industry Association" },
              { name: "Safe Contractor", full: "Approved Scheme" },
              { name: "LPCG", full: "LP Certification Board" },
            ].map(c => (
              <div key={c.name} style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.04em", color: "var(--black)", marginBottom: "2px" }}>{c.name}</p>
                <p style={{ fontSize: "0.68rem", color: "var(--grey)", letterSpacing: "0.02em" }}>{c.full}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD CAPTURE ─────────────────────────────────────── */}
      <LeadCaptureBanner />
    </>
  );
}
