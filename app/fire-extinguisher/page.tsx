import { Metadata } from "next";
import { Cylinder } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Fire Extinguishers | Surtur Fire",
  description:
    "BAFE-qualified engineers installing, servicing and maintaining all portable fire extinguishing equipment.",
};

const related = [
  {
    title: "Gas Suppression",
    desc: "Don't let a small fire turn into a big problem. Our gas extinguishing systems are designed to extinguish fires when water, foam or powder systems are not an effective option.",
    href: "/gas-suppression",
  },
  {
    title: "Fire Detection",
    desc: "The choice of fire alarm system depends on the building structure, the purpose and use of the building and current legislation.",
    href: "/fire-detection",
  },
  {
    title: "Emergency Lighting",
    desc: "Design and maintenance services ensuring compliance and workplace safety — aligned to BS 5266.",
    href: "/emergency-lighting",
  },
];

export default function FireExtinguisherPage() {
  return (
    <ServicePageLayout
      title="Fire Extinguishers"
      tagline="Fire Extinguisher Specialist — fight fire with the right extinguisher."
      icon={Cylinder}
      color="#e67e22"
      related={related}
    >
      <div className="space-y-6">
        <p className="text-[#b4b4c0] text-lg leading-relaxed">
          In the event of a fire, fire extinguishers are normally the first thing people will look
          for to tackle the blaze. Having the correct type of extinguisher in the right location,
          properly maintained and compliant with BS5306, is essential.
        </p>

        <div className="rounded-2xl border border-white/[0.1] bg-[#222228] p-7">
          <h2 className="text-xl font-bold text-white mb-4">Extinguisher Types We Service</h2>
          <p className="text-[#b4b4c0] mb-5">
            We are able to service all types of portable fire extinguishers such as:
          </p>
          <ul className="space-y-2">
            {[
              "CO₂",
              "Foam",
              "Water (including Water Mist & Water Additive)",
              "Powder (including ABC and Class D)",
              "Wet Chemical",
              "Fire Blankets",
            ].map((type) => (
              <li key={type} className="flex items-center gap-3 text-[#b4b4c0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e67e22] flex-shrink-0" />
                {type}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              title: "Installation",
              body: "Our BAFE-qualified engineers will survey your premises and advise on the correct type, quantity and placement of extinguishers for your specific hazards.",
            },
            {
              title: "Annual Servicing",
              body: "Regular maintenance ensures your extinguishers are in full working order when you need them most, in compliance with BS 5306-3.",
            },
            {
              title: "Refilling & Recharging",
              body: "After use or discharge, we recharge and refill extinguishers quickly to restore full protection with minimum disruption to your operations.",
            },
            {
              title: "Risk Assessment",
              body: "We ensure extinguishers are correctly positioned for the specific fire risks present in your premises, from kitchens to server rooms.",
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
