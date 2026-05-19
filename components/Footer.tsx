import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", color: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        {/* Top */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "48px", padding: "64px 0 48px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "20px" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" fill="var(--red)"/>
                <path d="M14 4C14 4 19 9.5 19 14.5C19 17.5 17 20 14 20C11 20 9 17.5 9 14.5C9 12.5 10.5 11 10.5 11C10.5 13.5 13.5 14 14 12.5C14.5 15 13 17 11.5 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontWeight: 800, fontSize: "0.95rem", letterSpacing: "-0.02em" }}>
                SURTUR<span style={{ color: "var(--red)" }}>FIRE</span>
              </span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: "16px" }}>
              BAFE-certified fire safety specialists protecting businesses across the UK.
            </p>
            <a href="tel:+447843841219" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: "4px" }}>+44 7843 841219</a>
            <a href="mailto:sales@surturfire.com" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)" }}>sales@surturfire.com</a>
          </div>

          <div>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "16px" }}>Services</p>
            {["Fire Suppression", "Fire Detection", "Fire Extinguishers", "Emergency Lighting"].map(s => (
              <Link key={s} href="/services" style={{ display: "block", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", marginBottom: "10px" }}>{s}</Link>
            ))}
          </div>

          <div>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "16px" }}>Company</p>
            {[["About", "/about"], ["Projects", "/projects"], ["Contact", "/contact"], ["Get a Quote", "/quote"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: "block", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", marginBottom: "10px" }}>{label}</Link>
            ))}
          </div>

          <div>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "16px" }}>Certified By</p>
            {["BAFE", "FIA", "Safe Contractor", "LPCG"].map(c => (
              <p key={c} style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", marginBottom: "10px" }}>{c}</p>
            ))}
          </div>
        </div>

        <div style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>© {new Date().getFullYear()} Surtur Fire Ltd · Co. 14030343 · VAT 410913924</p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.15)" }}>22–24 Harborough Road, Northampton NN2 7AZ</p>
        </div>
      </div>
    </footer>
  );
}
