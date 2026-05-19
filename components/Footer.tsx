import Link from "next/link";

const services = [
  "Fire Suppression Systems",
  "Fire Detection Systems",
  "Fire Extinguishers",
  "Emergency Lighting",
];

const links = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/quote", label: "Get a Survey" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--charcoal)" }} className="text-white">
      <div className="py-16 px-6 lg:px-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--green-deep)" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2C9 2 13 7 13 11.5C13 14.5 11.2 16.5 9 16.5C6.8 16.5 5 14.5 5 11.5C5 9.5 6.5 8 6.5 8C6.5 10 9 10.5 9.5 9C10 11.5 9 13.5 7.5 13.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Surtur<span style={{ color: "var(--green-light)" }}>Fire</span>
              </span>
            </div>
            <p className="text-sm leading-7" style={{ color: "rgba(255,255,255,0.5)" }}>
              BAFE-certified fire safety specialists providing fire suppression, detection, and emergency lighting services across the UK.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              <a href="tel:+447843841219" className="link-hover hover:text-white transition-colors">+44 7843 841219</a>
              <a href="mailto:sales@surturfire.com" className="link-hover hover:text-white transition-colors">sales@surturfire.com</a>
              <span>22-24 Harborough Road, Northampton, NN2 7AZ</span>
            </div>
            {/* Cert badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["BAFE", "FIA", "Safe Contractor", "LPCG"].map((cert) => (
                <span key={cert} className="text-xs px-3 py-1.5 font-semibold tracking-widest uppercase" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}>
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--green-light)" }}>Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm link-hover transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--green-light)" }}>Navigation</h4>
            <ul className="flex flex-col gap-3 mb-10">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm link-hover transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <Link href="/quote" className="btn-green w-fit">Free Survey →</Link>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-10 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          <span>© {new Date().getFullYear()} Surtur Fire Ltd. Company No. 14030343 | VAT No. 410913924</span>
          <span>22-24 Harborough Road, Northampton, NN2 7AZ</span>
        </div>
      </div>
    </footer>
  );
}
