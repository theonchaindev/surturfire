import Link from "next/link";

export default function Footer() {
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

  return (
    <footer style={{ background: "#090909", color: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.5C8 1.5 11.5 5.5 11.5 8.5C11.5 10.8 10 12.5 8 12.5C6 12.5 4.5 10.8 4.5 8.5C4.5 7 5.5 6 5.5 6C5.5 7.5 7.5 8.2 8 7C8.5 9 7.5 10.5 6.5 10.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em" }}>
                Surtur<span style={{ color: "var(--red)" }}>Fire</span>
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: "20px" }}>
              BAFE-certified fire safety specialists protecting people and businesses across the UK.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href="tel:+447843841219" style={{ fontSize: "0.825rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>+44 7843 841219</a>
              <a href="mailto:sales@surturfire.com" style={{ fontSize: "0.825rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>sales@surturfire.com</a>
              <span style={{ fontSize: "0.825rem", color: "rgba(255,255,255,0.3)" }}>22–24 Harborough Road, Northampton, NN2 7AZ</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "18px" }}>Services</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none" }}>
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "18px" }}>Company</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none" }}>
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "18px" }}>Accreditations</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["BAFE", "FIA", "Safe Contractor", "LPCG"].map((cert) => (
                <span key={cert} style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 10px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "4px", color: "rgba(255,255,255,0.4)" }}>
                  {cert}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", marginTop: "20px", lineHeight: 1.6 }}>
              Co. No. 14030343<br />VAT No. 410913924
            </p>
          </div>
        </div>

        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.2)" }}>© {new Date().getFullYear()} Surtur Fire Ltd. All rights reserved.</p>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.15)" }}>Northampton, UK</p>
        </div>
      </div>
    </footer>
  );
}
