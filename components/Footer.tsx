import { Flame, Phone, MapPin, Mail } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Fire Suppression", href: "#suppression" },
    { label: "Fire Detection", href: "#detection" },
    { label: "Fire Extinguishers", href: "#extinguishers" },
    { label: "Emergency Lighting", href: "#lighting" },
  ],
  Certifications: [
    { label: "BAFE", href: "#certifications" },
    { label: "FIA Member", href: "#certifications" },
    { label: "Safe Contractor", href: "#certifications" },
    { label: "LPCB", href: "#certifications" },
  ],
  Help: [
    { label: "Contact Us", href: "#contact" },
    { label: "Get a Quote", href: "#contact" },
    { label: "Fire Safety Builder", href: "#wizard" },
    { label: "FAQs", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="relative">
                <Flame className="w-6 h-6 text-[#c0392b]" />
                <div className="absolute inset-0 blur-md bg-[#c0392b]/30 rounded-full" />
              </div>
              <span className="font-bold text-base tracking-tight">
                <span className="text-white">SURTUR</span>
                <span className="text-[#c0392b]"> FIRE</span>
              </span>
            </a>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-6">
              UK fire safety specialists providing expert installation, maintenance,
              and compliance services.
            </p>

            {/* Contact quicklinks */}
            <div className="space-y-2.5 text-sm">
              <a href="tel:+447843841219" className="flex items-center gap-2.5 text-[#9ca3af] hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#c0392b] flex-shrink-0" />
                +44 7843 841219
              </a>
              <div className="flex items-start gap-2.5 text-[#9ca3af]">
                <MapPin className="w-4 h-4 text-[#c0392b] flex-shrink-0 mt-0.5" />
                22-24 Harborough Road, Northampton, NN2 7AZ
              </div>
              <a href="mailto:sales@surturfire.com" className="flex items-center gap-2.5 text-[#9ca3af] hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#c0392b] flex-shrink-0" />
                sales@surturfire.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="text-xs font-bold uppercase tracking-widest text-[#c0392b] mb-4">
                {title}
              </div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#9ca3af] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9ca3af]">
          <div>
            © {new Date().getFullYear()} Surtur Fire Ltd · Company Reg: 14030343 · VAT: 410913924
          </div>
          <div>
            Crafted by{" "}
            <span className="text-[#c0392b] font-semibold">Smithd</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
