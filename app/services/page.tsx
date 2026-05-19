import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import LeadCaptureBanner from "@/components/LeadCaptureBanner";

export const metadata: Metadata = {
  title: "Fire Safety Services | Surtur Fire",
  description: "Surtur Fire provide fire suppression, fire detection, fire extinguishers, and emergency lighting across the UK. BAFE-certified engineers.",
};

const services = [
  {
    id: "suppression",
    title: "Fire Suppression",
    intro: "Gas-based suppression systems for environments where water poses risks to critical infrastructure. Engineered to protect your servers, switchgear, and valuable assets with zero water damage.",
    items: [
      "Inert gas & FM200 systems",
      "Clean agent suppression",
      "Kitchen hood suppression",
      "Halon replacement systems",
      "Full design & commissioning",
      "Annual testing & maintenance",
    ],
    img: "https://cdn.prod.website-files.com/63dbb705fb1dc0446f72376f/640b1f2c44ffd0851b8106c4_SurturFire%20Image.png",
    imgAlt: "Gas fire suppression system",
    imgRight: false,
  },
  {
    id: "detection",
    title: "Fire Detection",
    intro: "Conventional and addressable fire detection systems using the latest technology — from a single detector to building-wide networks, all fully BS 5839 compliant.",
    items: [
      "Addressable fire alarm panels",
      "Conventional detection systems",
      "Smoke & heat detectors",
      "Beam detectors",
      "Multi-sensor devices",
      "BS 5839 compliant design",
    ],
    img: "https://cdn.prod.website-files.com/63dbb705fb1dc0446f72376f/65c608e62b18a29e3046ef99_iStock-1348046400.jpg",
    imgAlt: "Fire detection and alarm system",
    imgRight: true,
  },
  {
    id: "extinguishers",
    title: "Fire Extinguishers",
    intro: "Supply, installation, and annual servicing of the right extinguishers for your premises — assessed and fitted by our BAFE SP101 certified engineers.",
    items: [
      "CO2 extinguishers",
      "Dry powder extinguishers",
      "Foam extinguishers",
      "Water mist extinguishers",
      "BAFE SP101 certified service",
      "Risk assessment & recommendations",
    ],
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80",
    imgAlt: "Fire extinguishers",
    imgRight: false,
  },
  {
    id: "lighting",
    title: "Emergency Lighting",
    intro: "Emergency lighting systems that keep occupants safe and meet BS 5266 standards — from maintained luminaires to central battery systems.",
    items: [
      "Maintained & non-maintained luminaires",
      "Central battery systems",
      "Exit signs & route marking",
      "Self-test emergency lighting",
      "Photoluminescent signage",
      "Annual duration testing",
    ],
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    imgAlt: "Emergency lighting corridor",
    imgRight: true,
  },
];

export default function ServicesPage() {
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
              What We Do
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.15}>
            <h1
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Our Services
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.25}>
            <p className="mt-6 text-lg leading-8 max-w-xl" style={{ color: "rgba(255,255,255,0.55)" }}>
              From design and installation to ongoing maintenance — our BAFE-certified engineers
              deliver fire safety solutions that meet every standard and protect every environment.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services alternating */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className="py-20 px-6 lg:px-10"
          style={{ background: i % 2 === 0 ? "#ffffff" : "#f4f4f4" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image — left on even, right on odd */}
              {!svc.imgRight && (
                <AnimateIn variant="slideLeft" className="relative h-80 lg:h-[480px] order-2 lg:order-1">
                  <Image src={svc.img} alt={svc.imgAlt} fill style={{ objectFit: "cover" }} />
                  <div
                    className="absolute top-0 left-0 px-4 py-2 text-xs font-bold tracking-widest uppercase"
                    style={{ background: "#cc2c2c", color: "white" }}
                  >
                    {svc.title}
                  </div>
                </AnimateIn>
              )}

              {/* Content */}
              <AnimateIn
                variant={svc.imgRight ? "slideLeft" : "slideRight"}
                className={svc.imgRight ? "order-1" : "order-1 lg:order-2"}
              >
                <div>
                  <span
                    className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
                    style={{ color: "#cc2c2c" }}
                  >
                    {svc.title}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#111111" }}>
                    {svc.title}
                  </h2>
                  <p className="text-base leading-8 mb-8" style={{ color: "#888888" }}>
                    {svc.intro}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#111111" }}>
                        <span
                          className="flex-shrink-0 w-4 h-4 mt-0.5 flex items-center justify-center"
                          style={{ background: "#cc2c2c" }}
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote" className="btn-red">
                    Get a Quote →
                  </Link>
                </div>
              </AnimateIn>

              {/* Image right side */}
              {svc.imgRight && (
                <AnimateIn variant="slideRight" className="relative h-80 lg:h-[480px]">
                  <Image src={svc.img} alt={svc.imgAlt} fill style={{ objectFit: "cover" }} />
                  <div
                    className="absolute top-0 right-0 px-4 py-2 text-xs font-bold tracking-widest uppercase"
                    style={{ background: "#cc2c2c", color: "white" }}
                  >
                    {svc.title}
                  </div>
                </AnimateIn>
              )}
            </div>
          </div>
        </section>
      ))}

      <LeadCaptureBanner
        title="Not sure what systems you need?"
        subtitle="We offer free site surveys across the UK. Our engineers will assess your premises and advise on the right solution."
      />
    </>
  );
}
