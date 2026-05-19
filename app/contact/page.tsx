import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Surtur Fire — Get In Touch",
  description: "Contact Surtur Fire for a free fire safety survey, maintenance enquiry, or general information. Based in Northampton, serving the whole UK.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--black)", paddingTop: "140px", paddingBottom: "72px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <AnimateIn>
            <p className="label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>Get In Touch</p>
            <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", color: "#fff", marginBottom: "24px" }}>
              Contact us.
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, maxWidth: "460px" }}>
              Whether you need a free survey, a quote, or just have a question — we&apos;re here to help.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "var(--soft)", padding: "80px 0", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "64px" }}>

            {/* Contact details */}
            <AnimateIn>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--black)", marginBottom: "32px", letterSpacing: "-0.02em" }}>
                How to reach us
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  { label: "Phone", value: "+44 7843 841219", href: "tel:+447843841219", note: "Mon–Fri, 8am–6pm" },
                  { label: "Email", value: "sales@surturfire.com", href: "mailto:sales@surturfire.com", note: "We aim to reply within 4 hours" },
                  { label: "Address", value: "22–24 Harborough Road", note: "Northampton, NN2 7AZ" },
                ].map((item) => (
                  <div key={item.label} style={{ padding: "24px 0", borderBottom: "1px solid var(--line)" }}>
                    <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--grey)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--black)", textDecoration: "none", display: "block", marginBottom: "2px" }}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--black)", marginBottom: "2px" }}>{item.value}</p>
                    )}
                    <p style={{ fontSize: "0.825rem", color: "var(--grey)" }}>{item.note}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "28px", padding: "20px 24px", background: "#fff", borderLeft: "3px solid var(--red)" }}>
                <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--red)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                  Opening Hours
                </p>
                <p style={{ fontSize: "0.875rem", color: "var(--grey)", lineHeight: 1.7 }}>
                  Monday – Friday: 8:00am – 6:00pm<br />
                  Saturday: By appointment<br />
                  Sunday: Closed
                </p>
              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn delay={0.1}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--black)", marginBottom: "32px", letterSpacing: "-0.02em" }}>
                Send us a message
              </h2>
              <ContactForm />
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
