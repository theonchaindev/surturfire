"use client";

import { useState } from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+44 7843 841219", href: "tel:+447843841219" },
  { icon: MapPin, label: "Address", value: "22-24 Harborough Road, Northampton, NN2 7AZ", href: "#" },
  { icon: Mail, label: "Email", value: "sales@surturfire.com", href: "mailto:sales@surturfire.com" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(192,57,43,0.08),transparent)]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
            Contact Surtur Fire
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-xl mx-auto">
            Ready to protect your premises? Get in touch for a free, no-obligation
            quote or to discuss your fire safety requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div>
            <div className="space-y-5 mb-10">
              {contactDetails.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-start gap-4 glass-card rounded-xl p-5 hover:border-[#c0392b]/25 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#c0392b]/10 border border-[#c0392b]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c0392b]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#c0392b]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#9ca3af] font-medium mb-0.5">{c.label}</div>
                      <div className="text-sm text-white font-medium">{c.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Company details */}
            <div className="glass-card rounded-xl p-5 text-sm text-[#9ca3af] space-y-1">
              <div className="font-semibold text-white mb-2">Company Information</div>
              <div>Surtur Fire Ltd</div>
              <div>Company Reg: 14030343</div>
              <div>VAT: 410913924</div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card rounded-2xl p-8">
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#9ca3af] mb-1.5">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#9ca3af]/50 text-sm focus:outline-none focus:border-[#c0392b]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#9ca3af] mb-1.5">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#9ca3af]/50 text-sm focus:outline-none focus:border-[#c0392b]/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#9ca3af] mb-1.5">Phone (optional)</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44 7000 000000"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#9ca3af]/50 text-sm focus:outline-none focus:border-[#c0392b]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#9ca3af] mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your premises and fire safety requirements..."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#9ca3af]/50 text-sm focus:outline-none focus:border-[#c0392b]/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(192,57,43,0.4)] text-sm"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c0392b]/15 border border-[#c0392b]/30 flex items-center justify-center mb-5">
                  <Send className="w-7 h-7 text-[#c0392b]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-[#9ca3af] text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within one business day.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
