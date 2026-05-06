import { Flame, Phone, MapPin, Mail } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Fire Suppression", href: "#suppression" },
    { label: "Fire Detection", href: "#detection" },
    { label: "Fire Extinguisher", href: "#extinguishers" },
    { label: "Emergency Lighting", href: "#lighting" },
  ],
  Certifications: [
    { label: "BAFE", href: "#certifications" },
    { label: "FIA", href: "#certifications" },
    { label: "Safe Contractor", href: "#certifications" },
  ],
  Help: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQs", href: "#contact" },
    { label: "Get a Quote", href: "#wizard" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#141418] border-t border-white/[0.1] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
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
            <p className="text-[#a8a8b4] text-sm leading-relaxed mb-6">
              UK fire safety specialists providing expert installation, maintenance, and compliance services.
            </p>

            <div className="space-y-2.5 text-sm">
              <a href="tel:+447843841219" className="flex items-center gap-2.5 text-[#a8a8b4] hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#c0392b] flex-shrink-0" />
                +44 7843841219
              </a>
              <div className="flex items-start gap-2.5 text-[#a8a8b4]">
                <MapPin className="w-4 h-4 text-[#c0392b] flex-shrink-0 mt-0.5" />
                22-24 Harborough Road, Northampton, NN2 7AZ
              </div>
              <a href="mailto:sales@surturfire.com" className="flex items-center gap-2.5 text-[#a8a8b4] hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#c0392b] flex-shrink-0" />
                sales@surturfire.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="text-xs font-bold uppercase tracking-widest text-[#c0392b] mb-4">{title}</div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-[#a8a8b4] hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#a8a8b4]">
          <div>
            © {new Date().getFullYear()} Surtur Fire Ltd · Company Registration No: 14030343 · VAT Registration No: 410913924
          </div>
          <div>
            Crafted by <span className="text-[#c0392b] font-semibold">Smithd.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
