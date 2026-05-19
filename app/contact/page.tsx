import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Surtur Fire",
  description: "Get in touch with Surtur Fire — BAFE-certified fire safety specialists. Based in Northampton, serving the UK.",
};

const contactDetails = [
  {
    label: "Phone",
    value: "+44 7843 841219",
    href: "tel:+447843841219",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 3h3l1.5 4-2 1.2a11 11 0 005.3 5.3L12 11.5l4 1.5v3A1 1 0 0115 17C7.3 17 1 10.7 1 3a1 1 0 011-1h1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Email",
    value: "sales@surturfire.com",
    href: "mailto:sales@surturfire.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Address",
    value: "22-24 Harborough Road, Northampton, NN2 7AZ",
    href: "https://maps.google.com/?q=22-24+Harborough+Road+Northampton+NN2+7AZ",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2C6.2 2 4 4.2 4 7c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="9" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-10" style={{ background: "var(--charcoal)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeIn">
            <span className="tag mb-6 block w-fit" style={{ color: "var(--green-light)", borderColor: "var(--green-light)" }}>Reach Out</span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.15}>
            <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Get In{" "}
              <em style={{ color: "var(--green-light)", fontStyle: "italic" }}>Touch</em>
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.25}>
            <p className="mt-6 text-lg leading-8 max-w-xl" style={{ color: "rgba(255,255,255,0.55)" }}>
              Whether you need a free survey, a quote, or just want to talk through your requirements — we&apos;re here to help.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-6 lg:px-10" style={{ background: "var(--off-white)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact details */}
          <AnimateIn variant="slideLeft">
            <div>
              <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "var(--charcoal)" }}>Contact details</h2>

              <div className="flex flex-col gap-8 mb-12">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center" style={{ background: "var(--green-pale)", color: "var(--green-deep)" }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--grey-light)" }}>{item.label}</div>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-base font-medium link-hover transition-colors"
                        style={{ color: "var(--charcoal)" }}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="p-8" style={{ background: "white", borderLeft: "3px solid var(--green-deep)" }}>
                <h3 className="font-display text-xl font-bold mb-4" style={{ color: "var(--charcoal)" }}>Opening Hours</h3>
                <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--grey)" }}>
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-semibold" style={{ color: "var(--charcoal)" }}>8:00am – 6:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold" style={{ color: "var(--charcoal)" }}>By appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span style={{ color: "var(--grey-light)" }}>Closed</span>
                  </div>
                </div>
                <div className="mt-5 pt-5 flex items-start gap-3 text-sm" style={{ borderTop: "1px solid #eee", color: "var(--grey)" }}>
                  <div className="w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0" style={{ background: "var(--green-light)" }} />
                  <span>Emergency out-of-hours support available for contracted clients. Call the main number and follow the prompts.</span>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/quote" className="btn-green">Get Free Survey →</Link>
              </div>
            </div>
          </AnimateIn>

          {/* Form */}
          <AnimateIn variant="slideRight">
            <div className="p-8 lg:p-12" style={{ background: "white" }}>
              <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "var(--charcoal)" }}>Send a message</h2>
              <ContactForm />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Map / Address card */}
      <section className="px-6 lg:px-10 pb-20" style={{ background: "var(--off-white)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8" style={{ background: "var(--charcoal)" }}>
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Our base</h3>
                <p className="text-white/60 text-sm">22-24 Harborough Road, Northampton, NN2 7AZ</p>
                <p className="text-white/40 text-xs mt-2">We travel to clients across the whole of the UK</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=22-24+Harborough+Road+Northampton+NN2+7AZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white"
                >
                  Open in Maps →
                </a>
                <a href="tel:+447843841219" className="btn-green">Call Us Now</a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
