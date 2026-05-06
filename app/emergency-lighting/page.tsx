import { Metadata } from "next";
import { Lightbulb } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Emergency Lighting | Surtur Fire",
  description:
    "Design, installation, service and maintenance of emergency exit lighting systems aligned to BS 5266.",
};

const related = [
  {
    title: "Gas Suppression",
    desc: "Gas extinguishing systems address situations where water, foam, or powder systems prove ineffective.",
    href: "/gas-suppression",
  },
  {
    title: "Fire Detection",
    desc: "The choice of fire alarm system depends on the building structure, the purpose and use of the building and current legislation.",
    href: "/fire-detection",
  },
  {
    title: "Fire Extinguishers",
    desc: "Fight fire with the right extinguisher. Get in touch today and let Surtur Fire take care of all your extinguisher needs.",
    href: "/fire-extinguisher",
  },
];

export default function EmergencyLightingPage() {
  return (
    <ServicePageLayout
      title="Emergency Lighting"
      tagline="Don't be left in the dark."
      icon={Lightbulb}
      color="#e67e22"
      related={related}
    >
      <div className="space-y-6">
        <p className="text-[#b4b4c0] text-lg leading-relaxed">
          At Surtur Fire we can design, install, service and maintain your system to the appropriate
          and necessary requirements of BS 5266 ensuring all persons have the adequate lighting
          protection to aid an escape to safety.
        </p>

        <p className="text-[#b4b4c0] text-lg leading-relaxed">
          Emergency lighting represents critical safety infrastructure, installed to illuminate
          important areas during power failures. The system activates automatically when electricity
          is lost, keeping high-risk zones bright for safe evacuation. Surtur Fire&apos;s engineers
          verify adequate coverage and perform regular maintenance aligned with BS 5266 standards.
        </p>

        {/* What we do cards */}
        <div className="grid md:grid-cols-2 gap-5 mt-4">
          {[
            {
              title: "Design",
              body: "We survey your premises and design an emergency lighting scheme that meets the requirements of BS 5266, ensuring all escape routes and high-risk areas are covered.",
            },
            {
              title: "Installation",
              body: "Our engineers install maintained and non-maintained luminaires, exit signs and central battery systems to provide illumination exactly where it is needed.",
            },
            {
              title: "Testing & Maintenance",
              body: "We carry out regular testing and planned preventative maintenance (PPM) to ensure your emergency lighting is always in full working order and compliant.",
            },
            {
              title: "Compliance Reports",
              body: "Following each service visit we provide a detailed compliance report, giving you a clear record of the condition of your system and any remedial actions taken.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/[0.1] bg-[#222228] p-6 hover:border-[#e67e22]/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[#b4b4c0] text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#e67e22]/25 bg-[#e67e22]/06 p-7">
          <h3 className="text-lg font-bold text-white mb-3">BS 5266 Compliance</h3>
          <p className="text-[#b4b4c0] leading-relaxed">
            Emergency lighting is a legal requirement in all non-domestic premises under the
            Regulatory Reform (Fire Safety) Order 2005. Failure to maintain adequate emergency
            lighting can result in enforcement action by fire authorities. Our systems and service
            records ensure you remain fully compliant.
          </p>
        </div>

        <div className="flex gap-3 pt-2">
          <a
            href="/#contact"
            className="bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-7 py-3 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(192,57,43,0.4)] text-sm"
          >
            Get in touch
          </a>
          <a
            href="/#contact"
            className="border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3 rounded-lg transition-all hover:-translate-y-0.5 text-sm bg-white/[0.04]"
          >
            Request a quote
          </a>
        </div>
      </div>
    </ServicePageLayout>
  );
}
