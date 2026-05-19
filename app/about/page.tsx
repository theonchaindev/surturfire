import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import LeadCaptureBanner from "@/components/LeadCaptureBanner";

export const metadata: Metadata = {
  title: "About Us | Surtur Fire",
  description: "Learn about Surtur Fire — BAFE-certified fire safety specialists based in Northampton, serving clients across the UK.",
};

const values = [
  {
    title: "Certified Expertise",
    desc: "BAFE & FIA registered — our credentials are the benchmark of fire safety excellence.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "Fixed-price quotes with no hidden costs or surprises on completion.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="13" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 9h16" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 13h2M13 13h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Nationwide Coverage",
    desc: "Based in Northampton with engineers serving clients across the whole of the UK.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 2v18M2 11h18M4 6.5c2 1.5 4 2.5 7 2.5s5-1 7-2.5M4 15.5c2-1.5 4-2.5 7-2.5s5 1 7 2.5" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    title: "Guaranteed Work",
    desc: "All installations are fully guaranteed and backed by our ongoing service contracts.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L4 7v5c0 4 3.5 7 7 8 3.5-1 7-4 7-8V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const team = [
  {
    name: "James Hartley",
    role: "Lead Fire Engineer",
    bio: "Over 15 years of fire suppression and detection experience. BAFE-qualified and FIA-trained.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "David Clarke",
    role: "Detection Specialist",
    bio: "Specialist in addressable detection systems and BS 5839 compliance across healthcare and commercial sectors.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
];

const certs = [
  {
    name: "BAFE",
    full: "British Approvals for Fire Equipment",
    desc: "The gold standard in fire safety — BAFE registration is the benchmark that demonstrates our competence and quality.",
  },
  {
    name: "FIA",
    full: "Fire Industry Association",
    desc: "Full membership of the FIA keeps us at the forefront of fire industry best practice and regulation.",
  },
  {
    name: "Safe Contractor",
    full: "Approved Contractor Scheme",
    desc: "Independently assessed as a safe and competent contractor — giving our clients complete peace of mind.",
  },
  {
    name: "LPCG",
    full: "Loss Prevention Certification Board",
    desc: "LPCG approval means our systems meet the highest insurance and risk standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-10" style={{ background: "var(--charcoal)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeIn">
            <span className="tag mb-6 block w-fit" style={{ color: "var(--green-light)", borderColor: "var(--green-light)" }}>Who We Are</span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.15}>
            <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              About{" "}
              <em style={{ color: "var(--green-light)", fontStyle: "italic" }}>SurturFire</em>
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.25}>
            <p className="mt-6 text-lg leading-8 max-w-xl" style={{ color: "rgba(255,255,255,0.55)" }}>
              Protecting people and businesses across the UK — built on expertise, certified to the highest standards.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "var(--off-white)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateIn variant="slideLeft">
            <div className="relative h-96 lg:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Commercial building"
                fill
                className="object-cover"
              />
              <div
                className="absolute bottom-6 left-6 right-6 p-5"
                style={{ background: "var(--green-deep)" }}
              >
                <p className="text-white font-display text-lg font-bold leading-snug">
                  10+ Years of fire protection excellence
                </p>
                <p className="text-white/60 text-xs mt-1">Serving clients across the UK since our founding</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight">
            <div>
              <span className="tag mb-6 block w-fit" style={{ color: "var(--green-deep)", borderColor: "var(--green-deep)" }}>Our Story</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: "var(--charcoal)" }}>
                Built on expertise<br />& trust.
              </h2>
              <div className="flex flex-col gap-5 text-base leading-8" style={{ color: "var(--grey)" }}>
                <p>
                  Surtur Fire was founded with one goal: to deliver fire safety systems that genuinely protect lives and assets. From day one, we committed to employing only BAFE-certified engineers and using only specification-grade equipment.
                </p>
                <p>
                  Established in Northampton, we&apos;ve grown to serve clients across the UK without ever compromising on the quality of our work. Unlike larger contractors, we never use subcontractors — every job is carried out by our own trained engineers.
                </p>
                <p>
                  We believe in transparent, fixed-price quotes, clear communication, and systems that are designed to work. Our clients return to us year after year because they know we&apos;ll get the job done right.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/quote" className="btn-green">Work With Us →</Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="mb-14 text-center">
              <span className="tag mb-4 block w-fit mx-auto" style={{ color: "var(--green-deep)", borderColor: "var(--green-deep)" }}>What Drives Us</span>
              <h2 className="font-display text-4xl font-bold" style={{ color: "var(--charcoal)" }}>Our values.</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateIn key={v.title} variant="fadeUp" delay={i * 0.1}>
                <div className="p-8" style={{ background: "var(--off-white)", borderTop: "3px solid var(--green-deep)" }}>
                  <div className="mb-5" style={{ color: "var(--green-deep)" }}>{v.icon}</div>
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: "var(--charcoal)" }}>{v.title}</h3>
                  <p className="text-sm leading-6" style={{ color: "var(--grey)" }}>{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="noise py-24 px-6 lg:px-10 relative" style={{ background: "var(--charcoal)" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimateIn variant="fadeUp">
            <div className="mb-14">
              <span className="tag mb-4 block w-fit" style={{ color: "var(--green-light)", borderColor: "var(--green-light)" }}>Our Engineers</span>
              <h2 className="font-display text-4xl font-bold text-white">The engineers behind<br />your protection.</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {team.map((member, i) => (
              <AnimateIn key={member.name} variant="fadeUp" delay={i * 0.1}>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="relative h-56">
                    <Image src={member.img} alt={member.name} fill className="object-cover object-top" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-xs font-semibold tracking-widest uppercase mt-1 mb-3" style={{ color: "var(--green-light)" }}>{member.role}</p>
                    <p className="text-sm leading-6" style={{ color: "rgba(255,255,255,0.5)" }}>{member.bio}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "var(--green-pale)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="mb-14">
              <span className="tag mb-4 block w-fit" style={{ color: "var(--green-deep)", borderColor: "var(--green-deep)" }}>Accreditations</span>
              <h2 className="font-display text-4xl font-bold" style={{ color: "var(--charcoal)" }}>Our Accreditations.</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certs.map((cert, i) => (
              <AnimateIn key={cert.name} variant="fadeUp" delay={i * 0.1}>
                <div className="p-8 flex gap-6 items-start" style={{ background: "white" }}>
                  <div
                    className="flex-shrink-0 w-16 h-16 flex items-center justify-center font-display font-bold text-sm tracking-widest"
                    style={{ background: "var(--green-deep)", color: "white" }}
                  >
                    {cert.name}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1" style={{ color: "var(--charcoal)" }}>{cert.full}</h3>
                    <p className="text-sm leading-6" style={{ color: "var(--grey)" }}>{cert.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureBanner
        title="Ready to start your project?"
        subtitle="Book a free site visit — our BAFE-certified engineers will come to you and provide a detailed written proposal."
      />
    </>
  );
}
