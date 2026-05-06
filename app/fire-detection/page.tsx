import { Metadata } from "next";
import { Radio } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Fire Detection | Surtur Fire",
  description:
    "Conventional, addressable and wireless fire detection and alarm systems for all types of premises.",
};

const related = [
  {
    title: "Gas Suppression",
    desc: "Don't let a small fire turn into a big problem. Our gas extinguishing systems are designed to extinguish fires when water, foam or powder systems are not an effective option.",
    href: "/gas-suppression",
  },
  {
    title: "Fire Extinguishers",
    desc: "Fight fire with the right extinguisher. Get in touch today and let Surtur Fire take care of all your extinguisher needs.",
    href: "/fire-extinguisher",
  },
  {
    title: "Emergency Lighting",
    desc: "Be seen and be safe with our emergency lighting options. We can advise, design and maintain all emergency lighting systems to ensure compliance and staff safety.",
    href: "/emergency-lighting",
  },
];

export default function FireDetectionPage() {
  return (
    <ServicePageLayout
      title="Fire Detection"
      tagline="Comprehensive fire detection and alarm systems for businesses of all sizes."
      icon={Radio}
      color="#c0392b"
      related={related}
    >
      {/* Intro */}
      <div className="prose-surtur mb-14">
        <p className="text-[#b4b4c0] text-lg leading-relaxed mb-5">
          At Surtur Fire we prioritise the prevention of fire emergencies and recognise the
          significant impact such incidents can have on a business. At Surtur Fire, we approach the
          safeguarding of your business with utmost seriousness. According to business continuity
          stats, over 70% of businesses involved in a major fire either do not reopen or
          subsequently fail within three years of a fire.
        </p>
        <p className="text-[#b4b4c0] text-lg leading-relaxed mb-5">
          We aim to reduce the risk of fire affecting your business by implementing effective fire
          detection systems and by providing adequate fire protection. Our expertise lies in the
          field of fire safety systems, and as a result, we offer a comprehensive service
          encompassing design, installation, and maintenance.
        </p>

        {/* Services list */}
        <div className="rounded-2xl border border-white/[0.1] bg-[#222228] p-7 mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Our Services</h2>
          <ul className="space-y-2">
            {[
              "Fire Alarm and Fire Detection Systems",
              "System design",
              "Supply",
              "Installation",
              "Commission",
              "Planned Maintenance (PPM)",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#b4b4c0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-white font-semibold text-lg mb-6">
          Choose the right system to ensure the safety of your business:
        </p>
      </div>

      {/* System types */}
      <div className="space-y-6">
        {[
          {
            title: "Conventional Fire Alarms",
            body: "Conventional systems are the simplest type of fire alarm systems, suitable for small buildings such as individual offices or retail shops. They are typically available in two, four, and eight zone sizes, with each zone hardwired to a control panel or zone expander.",
          },
          {
            title: "Addressable Systems",
            body: "Similar to a conventional fire alarm system, addressable fire alarm systems require wiring. However, they use digital signals to transfer vital information such as system health, device type, location, dirt levels etc. meaning an addressable system has many unique features which may better suit your commercial premises or building. Addressable fire alarms can be seen as a more effective option than their counterpart conventional systems.",
          },
          {
            title: "Wired and Wireless Solutions",
            body: "Wireless fire alarm systems are an effective alternative to traditional wired fire alarm systems for all applications. They utilise secure, licence-free radio communications to interconnect the sensors and devices (smoke detectors, call-points, etc.) with the controllers. It is a simple concept, which provides many unique benefits and is a full analogue addressable fire detection system without the need for cable.",
          },
        ].map((sys, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/[0.1] bg-[#222228] p-7 hover:border-[#c0392b]/30 transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-3">{sys.title}</h3>
            <p className="text-[#b4b4c0] leading-relaxed mb-5">{sys.body}</p>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="text-sm font-semibold text-[#c0392b] hover:text-[#e67e22] transition-colors"
              >
                Get in touch about our services →
              </a>
              <span className="text-[#b4b4c0]/30">|</span>
              <a
                href="#contact"
                className="text-sm font-semibold text-[#c0392b] hover:text-[#e67e22] transition-colors"
              >
                Request a quote →
              </a>
            </div>
          </div>
        ))}
      </div>
    </ServicePageLayout>
  );
}
