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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "Fixed-price quotes with no hidden costs or surprises on completion.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 14h3M14 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Nationwide Coverage",
    desc: "Based in Northampton with engineers serving clients across the whole of the UK.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 2v20M2 12h20M5 7c2 1.5 4 2.5 7 2.5s5-1 7-2.5M5 17c2-1.5 4-2.5 7-2.5s5 1 7 2.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Guaranteed Work",
    desc: "All installations are fully guaranteed and backed by our ongoing service contracts.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 7v5c0 4.5 3.5 8 8 9 4.5-1 8-4.5 8-9V7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
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
    desc: "LPCG approval means our systems meet the highest insurance and risk management standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-10" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeIn">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "#cc2c2c" }}
            >
              Who We Are
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.15}>
            <h1
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              About Surtur Fire
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
      <section className="py-24 px-6 lg:px-10" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateIn variant="slideLeft">
            <div className="relative h-96 lg:h-[520px]">
              <Image
                src="https://cdn.prod.website-files.com/63dbb705fb1dc0446f72376f/65c608e62b18a29e3046ef99_iStock-1348046400.jpg"
                alt="Fire safety engineers at work"
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "rgba(17,17,17,0.9)" }}
              >
                <p className="text-white font-bold text-lg leading-snug">
                  10+ Years of fire protection excellence
                </p>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Serving clients across the UK since our founding
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight">
            <div>
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase mb-6"
                style={{ color: "#cc2c2c" }}
              >
                Our Story
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: "#111111" }}>
                Built on expertise &amp; trust.
              </h2>
              <div className="flex flex-col gap-5 text-base leading-8" style={{ color: "#888888" }}>
                <p>
                  Surtur Fire was founded with one goal: to deliver fire safety systems that genuinely
                  protect lives and assets. From day one, we committed to employing only BAFE-certified
                  engineers and using only specification-grade equipment.
                </p>
                <p>
                  Established in Northampton, we&apos;ve grown to serve clients across the UK without ever
                  compromising on the quality of our work. Unlike larger contractors, we never use
                  subcontractors — every job is carried out by our own trained engineers.
                </p>
                <p>
                  We believe in transparent, fixed-price quotes, clear communication, and systems that
                  are designed to work. Our clients return to us year after year because they know
                  we&apos;ll get the job done right.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/quote" className="btn-red">Work With Us →</Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "#f4f4f4" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="mb-14 text-center">
              <h2 className="text-4xl font-bold" style={{ color: "#111111" }}>Our Values</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateIn key={v.title} variant="fadeUp" delay={i * 0.1}>
                <div className="p-8 bg-white" style={{ borderTop: "3px solid #cc2c2c" }}>
                  <div className="mb-5" style={{ color: "#cc2c2c" }}>{v.icon}</div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "#111111" }}>{v.title}</h3>
                  <p className="text-sm leading-6" style={{ color: "#888888" }}>{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="mb-14">
              <h2 className="text-4xl font-bold text-white">Our Accreditations</h2>
              <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                Every engineer is trained to the highest industry standards.
              </p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certs.map((cert, i) => (
              <AnimateIn key={cert.name} variant="fadeUp" delay={i * 0.1}>
                <div
                  className="p-8 flex gap-6 items-start"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                >
                  <div
                    className="flex-shrink-0 w-16 h-16 flex items-center justify-center text-xs font-bold tracking-widest uppercase"
                    style={{ background: "#cc2c2c", color: "white" }}
                  >
                    {cert.name}
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2 text-white">{cert.full}</h3>
                    <p className="text-sm leading-6" style={{ color: "rgba(255,255,255,0.5)" }}>{cert.desc}</p>
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
