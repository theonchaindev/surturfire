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
      <section style={{ background: "var(--bg-dark)", paddingTop: "140px", paddingBottom: "72px" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="eyebrow" style={{ marginBottom: "20px" }}>Get In Touch</p>
            <h1 className="display" style={{ color: "#fff", marginBottom: "20px" }}>
              Contact us.
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: "460px" }}>
              Whether you need a free survey, a quote, or just have a question about fire safety — we&apos;re here to help.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact details */}
            <div className="lg:col-span-2">
              <AnimateIn variant="slideLeft">
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--ink)", marginBottom: "32px", letterSpacing: "-0.02em" }}>
                  How to reach us
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {[
                    {
                      label: "Phone",
                      value: "+44 7843 841219",
                      href: "tel:+447843841219",
                      note: "Mon–Fri, 8am–6pm",
                    },
                    {
                      label: "Email",
                      value: "sales@surturfire.com",
                      href: "mailto:sales@surturfire.com",
                      note: "We aim to reply within 4 hours",
                    },
                    {
                      label: "Address",
                      value: "22–24 Harborough Road",
                      note: "Northampton, NN2 7AZ",
                    },
                  ].map((item) => (
                    <div key={item.label} style={{ paddingBottom: "24px", borderBottom: "1px solid var(--border)" }}>
                      <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--ink-4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--ink)", textDecoration: "none", display: "block", marginBottom: "2px" }}>
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--ink)", marginBottom: "2px" }}>{item.value}</p>
                      )}
                      <p style={{ fontSize: "0.825rem", color: "var(--ink-4)" }}>{item.note}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "36px", padding: "20px 24px", background: "#fff", border: "1px solid var(--border)", borderRadius: "8px" }}>
                  <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--red)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                    Opening Hours
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "var(--ink-2)", lineHeight: 1.7 }}>
                    Monday – Friday: 8:00am – 6:00pm<br />
                    Saturday: By appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </AnimateIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateIn variant="slideRight" delay={0.1}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--ink)", marginBottom: "32px", letterSpacing: "-0.02em" }}>
                  Send us a message
                </h2>
                <ContactForm />
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
