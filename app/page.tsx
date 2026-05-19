import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import LeadCaptureBanner from "@/components/LeadCaptureBanner";

const testimonials = [
  {
    name: "Kevin Anderson",
    location: "Facilities Manager, Northampton",
    text: "The gas suppression system was installed professionally and on time. Excellent service and competitive pricing.",
  },
  {
    name: "Olivia Smith",
    location: "Office Manager, Birmingham",
    text: "Our office fire detection was fitted with minimal disruption. Very professional team.",
  },
  {
    name: "Terry Malone",
    location: "Operations Director, Coventry",
    text: "Highly knowledgeable. Annual servicing contract has given us complete peace of mind.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ──────────────────────────────────────────
          HERO
      ────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ background: "#111111", paddingTop: "72px" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column */}
          <div className="lg:col-span-7">
            <AnimateIn variant="fadeIn" delay={0.05}>
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase mb-6"
                style={{ color: "#cc2c2c", letterSpacing: "0.14em" }}
              >
                UK Fire Safety Specialists
              </span>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.15}>
              <h1
                className="font-bold leading-tight text-white mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontFamily: "Inter, sans-serif" }}
              >
                Protecting People &amp; Businesses Across The UK
              </h1>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.25}>
              <p
                className="text-lg leading-8 mb-10"
                style={{ color: "rgba(255,255,255,0.55)", maxWidth: "520px" }}
              >
                Trusted by clients across the UK, we are experts in the supply, maintenance, and design
                of fire safety systems to safeguard against the dangers of fire.
              </p>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.35}>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/quote" className="btn-red">
                  Get Free Survey
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/services" className="btn-outline-white">
                  View Services
                </Link>
              </div>
              {/* Cert strip */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                <span>BAFE</span>
                <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                <span>FIA</span>
                <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                <span>Safe Contractor</span>
                <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                <span>LPCG</span>
              </div>
            </AnimateIn>
          </div>

          {/* Right column — brand image */}
          <div className="lg:col-span-5 relative h-80 lg:h-[600px] flex items-center justify-center">
            <AnimateIn variant="fadeIn" delay={0.3} className="w-full h-full relative">
              <Image
                src="https://cdn.prod.website-files.com/63dbb705fb1dc0446f72376f/63e3d99f6cb79dbde5ce8b2f_SurturFire%20Black%20_%20Red%201.png"
                alt="Surtur Fire"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SERVICES — 2×2 card grid
      ────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="mb-14">
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "#cc2c2c" }}
              >
                What We Do
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: "#111111" }}>
                Our Fire Safety Services
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Fire Suppression */}
            <AnimateIn variant="fadeUp" delay={0.05}>
              <div className="service-card">
                <div className="mb-5" style={{ color: "#cc2c2c" }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4C16 4 22 12 22 19C22 22.9 19.3 26 16 26C12.7 26 10 22.9 10 19C10 16 12.5 14 12.5 14C12.5 17 16 18 16.8 16C17.5 19 16 22 13 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#111111" }}>Fire Suppression</h3>
                <p className="text-sm leading-7 mb-5" style={{ color: "#888888" }}>
                  Gas-based suppression systems precision-engineered to protect IT infrastructure, data centres, and high-value assets without water damage risk.
                </p>
                <Link href="/services#suppression" className="text-sm font-bold tracking-wide" style={{ color: "#cc2c2c", textDecoration: "none" }}>
                  Learn More →
                </Link>
              </div>
            </AnimateIn>

            {/* Fire Detection */}
            <AnimateIn variant="fadeUp" delay={0.1}>
              <div className="service-card">
                <div className="mb-5" style={{ color: "#cc2c2c" }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
                    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#111111" }}>Fire Detection</h3>
                <p className="text-sm leading-7 mb-5" style={{ color: "#888888" }}>
                  Addressable and conventional detection systems fully compliant with BS 5839 — from single-device installs to complete building-wide networks.
                </p>
                <Link href="/services#detection" className="text-sm font-bold tracking-wide" style={{ color: "#cc2c2c", textDecoration: "none" }}>
                  Learn More →
                </Link>
              </div>
            </AnimateIn>

            {/* Fire Extinguishers */}
            <AnimateIn variant="fadeUp" delay={0.15}>
              <div className="service-card">
                <div className="mb-5" style={{ color: "#cc2c2c" }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="12" y="10" width="10" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M17 6v4M13 6h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M22 12c3 0 4 2 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M14 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#111111" }}>Fire Extinguishers</h3>
                <p className="text-sm leading-7 mb-5" style={{ color: "#888888" }}>
                  BAFE SP101 certified supply and servicing of all extinguisher types — assessed, installed, and maintained by qualified engineers.
                </p>
                <Link href="/services#extinguishers" className="text-sm font-bold tracking-wide" style={{ color: "#cc2c2c", textDecoration: "none" }}>
                  Learn More →
                </Link>
              </div>
            </AnimateIn>

            {/* Emergency Lighting */}
            <AnimateIn variant="fadeUp" delay={0.2}>
              <div className="service-card">
                <div className="mb-5" style={{ color: "#cc2c2c" }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="13" r="6" stroke="currentColor" strokeWidth="2" />
                    <path d="M13 19l-1 6h8l-1-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M12 25h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 4v2M8 6.3l1.4 1.4M4 13h2M24 13h2M22.6 7.7l1.4-1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#111111" }}>Emergency Lighting</h3>
                <p className="text-sm leading-7 mb-5" style={{ color: "#888888" }}>
                  BS 5266 compliant maintained and non-maintained luminaires, central battery systems, and self-test emergency lighting installations.
                </p>
                <Link href="/services#lighting" className="text-sm font-bold tracking-wide" style={{ color: "#cc2c2c", textDecoration: "none" }}>
                  Learn More →
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          STATS ROW
      ────────────────────────────────────────── */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { val: "500+", label: "Installations" },
              { val: "10+", label: "Years Experience" },
              { val: "100%", label: "BAFE Certified" },
              { val: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <AnimateIn key={stat.label} variant="fadeUp" delay={i * 0.08}>
                <div
                  className="flex flex-col items-center py-10 px-4 text-center"
                  style={{
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}
                >
                  <span
                    className="font-bold mb-2"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
                  >
                    {stat.val}
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#888888" }}>
                    {stat.label}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          50/50 IMAGE + TEXT
      ────────────────────────────────────────── */}
      <section className="flex flex-col lg:flex-row" style={{ minHeight: "480px" }}>
        {/* Left: image */}
        <div className="relative w-full lg:w-1/2" style={{ minHeight: "320px" }}>
          <Image
            src="https://cdn.prod.website-files.com/63dbb705fb1dc0446f72376f/640b1f2c44ffd0851b8106c4_SurturFire%20Image.png"
            alt="Gas suppression system"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Right: text */}
        <div
          className="w-full lg:w-1/2 flex items-center px-8 lg:px-16 py-16"
          style={{ background: "#111111" }}
        >
          <AnimateIn variant="slideRight">
            <div style={{ maxWidth: "480px" }}>
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase mb-5"
                style={{ color: "#cc2c2c" }}
              >
                Fire Suppression
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Safeguarding Critical Infrastructure
              </h2>
              <p className="text-base leading-8 mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                Our gas-based suppression systems are designed for environments where water-based solutions
                pose risks to sensitive equipment. From FM200 to inert gas, we engineer solutions that
                respond in seconds and leave no residue.
              </p>
              <Link href="/services#suppression" className="btn-red">
                Learn More
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          WHY CHOOSE US
      ────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "#f4f4f4" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="text-center mb-14">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#111111" }}>
                Why Choose Surtur Fire?
              </h2>
              <p className="text-base" style={{ color: "#888888" }}>
                Experience, certification, and commitment — on every job.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 14l3.5 3.5 6.5-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "BAFE Certified Engineers",
                desc: "Every engineer holds current BAFE certification — the gold standard in fire safety competence. No exceptions.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M4 11h20" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 17h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                title: "Free Site Survey",
                desc: "No-obligation assessment of your premises by an expert engineer. We assess, advise, and quote — at no cost.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" />
                    <path d="M14 3v11M14 3c-3.5 2.5-5 6-5 11M14 3c3.5 2.5 5 6 5 11M3 14h22" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                ),
                title: "UK-Wide Coverage",
                desc: "Based in Northampton with engineers operating across the entire United Kingdom. Wherever you are, we&apos;ll come to you.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} variant="fadeUp" delay={i * 0.1}>
                <div className="bg-white p-8" style={{ borderTop: "3px solid #cc2c2c" }}>
                  <div className="mb-5" style={{ color: "#cc2c2c" }}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "#111111" }}>{item.title}</h3>
                  <p className="text-sm leading-7" style={{ color: "#888888" }}
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          CERTIFICATIONS
      ────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-10" style={{ background: "#111111" }}>
        <div className="max-w-5xl mx-auto text-center">
          <AnimateIn variant="fadeUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
              Proud to be Certified
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              {["BAFE", "FIA", "Safe Contractor", "LPCG"].map((cert) => (
                <div key={cert} className="cert-box" style={{ minWidth: "140px" }}>
                  {cert}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          TESTIMONIALS
      ────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="mb-14">
              <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: "#111111" }}>
                Stay Protected with Surtur Fire
              </h2>
              <p className="mt-3 text-base" style={{ color: "#888888" }}>
                Trusted by clients across the UK.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} variant="fadeUp" delay={i * 0.1}>
                <div
                  className="p-8 flex flex-col h-full"
                  style={{
                    background: "#f4f4f4",
                    border: "1px solid #e5e5e5",
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} style={{ color: "#cc2c2c", fontSize: "1.1rem" }}>★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-7 flex-1 italic" style={{ color: "#555555" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-5" style={{ borderTop: "1px solid #e0e0e0" }}>
                    <div className="font-bold text-sm" style={{ color: "#111111" }}>{t.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#888888" }}>{t.location}</div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          LEAD CAPTURE
      ────────────────────────────────────────── */}
      <LeadCaptureBanner
        title="Is your building fire-safe?"
        subtitle="Book a free site survey today — our BAFE-certified engineers will assess and advise on the right fire safety systems for your building."
      />
    </>
  );
}
