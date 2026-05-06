import { Metadata } from "next";
import { Flame } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Gas Suppression | Surtur Fire",
  description:
    "Fire suppression systems for critical IT infrastructure and environments where water-based systems are not suitable.",
};

const related = [
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
  {
    title: "Emergency Lighting",
    desc: "Be seen and be safe with our emergency lighting options. We can advise, design and maintain all emergency lighting systems to ensure compliance and staff safety.",
    href: "/emergency-lighting",
  },
];

export default function GasSuppressionPage() {
  return (
    <ServicePageLayout
      title="Gas Suppression"
      tagline="Specialist suppression systems designed to protect where water, foam or powder cannot."
      icon={Flame}
      color="#c0392b"
      related={related}
    >
      <div className="space-y-6">
        <p className="text-[#b4b4c0] text-lg leading-relaxed">
          Don&apos;t let a small fire turn into a big problem. Our gas extinguishing systems are
          designed to extinguish fires when water, foam or powder systems are not an effective
          option. At Surtur Fire we can help — get in touch today.
        </p>

        <p className="text-[#b4b4c0] text-lg leading-relaxed">
          Surtur Fire also install, service and maintain fire suppression systems where water may
          pose a risk to any critical IT infrastructure. There are a range of products and systems
          available and depending on your business&apos;s requirements we can tailor these to your
          needs.
        </p>

        {/* System types */}
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          {[
            {
              title: "Inert Gas Systems",
              body: "Inert gas systems use naturally occurring gases such as nitrogen, argon and CO₂ to reduce oxygen levels, extinguishing fire without leaving residue and without damaging sensitive equipment.",
            },
            {
              title: "Chemical Agent Systems",
              body: "Clean agent suppression systems such as Novec 1230 and FM-200 extinguish fires rapidly and are safe for use in occupied spaces, leaving no residue on valuable assets.",
            },
            {
              title: "CO₂ Systems",
              body: "CO₂ suppression systems are highly effective in total flooding applications, particularly suited to unoccupied areas such as machinery spaces and storage vaults.",
            },
            {
              title: "Tailored Design",
              body: "Every gas suppression system we install is designed specifically for your premises, ensuring adequate coverage and full compliance with relevant standards.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/[0.1] bg-[#222228] p-6 hover:border-[#c0392b]/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-[#b4b4c0] leading-relaxed text-sm">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#c0392b]/25 bg-[#c0392b]/06 p-7 mt-4">
          <h3 className="text-lg font-bold text-white mb-2">Why choose gas suppression?</h3>
          <ul className="space-y-2">
            {[
              "No water damage to critical IT infrastructure or sensitive equipment",
              "Extinguishes fire rapidly — minimising business disruption",
              "Clean agent systems leave zero residue",
              "Integrated with your existing fire detection system",
              "Fully compliant with BS EN 15004 and relevant BAFE standards",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-[#b4b4c0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b] flex-shrink-0 mt-2" />
                {point}
              </li>
            ))}
          </ul>
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
