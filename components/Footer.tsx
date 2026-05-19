import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Fire Suppression", href: "/services#suppression" },
  { label: "Fire Detection", href: "/services#detection" },
  { label: "Fire Extinguishers", href: "/services#extinguishers" },
  { label: "Emergency Lighting", href: "/services#lighting" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#111111" }} className="text-white">
      <div className="py-16 px-6 lg:px-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <Image
                src="https://cdn.prod.website-files.com/63dbb705fb1dc0446f72376f/63ecd662433aca29cd34d288_output-onlinepngtools.png"
                alt="Surtur Fire"
                width={120}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-sm leading-7 mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              Protecting People &amp; Businesses Across The UK. BAFE-certified fire safety specialists.
            </p>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              <a href="tel:+447843841219" className="link-hover hover:text-white transition-colors">+44 7843 841219</a>
              <a href="mailto:sales@surturfire.com" className="link-hover hover:text-white transition-colors">sales@surturfire.com</a>
              <span>22-24 Harborough Road, Northampton, NN2 7AZ</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "#cc2c2c" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm link-hover transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "#cc2c2c" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm link-hover transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "#cc2c2c" }}
            >
              Legal
            </h4>
            <div className="flex flex-col gap-3 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span>Company No. 14030343</span>
              <span>VAT No. 410913924</span>
              <span className="leading-6">22-24 Harborough Road,<br />Northampton, NN2 7AZ</span>
              <div className="pt-2 flex flex-wrap gap-2 mt-1">
                {["BAFE", "FIA", "Safe Contractor", "LPCG"].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs px-2 py-1 font-bold tracking-widest uppercase"
                    style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.35)" }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-10 py-5">
        <div
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          <span>© {new Date().getFullYear()} Surtur Fire Ltd. All rights reserved.</span>
          <span>BAFE · FIA · Safe Contractor · LPCG</span>
        </div>
      </div>
    </footer>
  );
}
