"use client";

import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target.querySelector<HTMLElement>(".nl-inner");
            if (el) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="newsletter" className="py-24 px-6 bg-[#111113] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(192,57,43,0.06),transparent)]" />

      <div
        className="nl-inner relative z-10 max-w-2xl mx-auto text-center"
        style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
      >
        <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">
          Newsletter
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
          Stay connected with Surtur Fire.
        </h2>
        <p className="text-[#a8a8b4] text-lg mb-10">
          Get fire safety tips, regulation updates, and industry insights delivered to your inbox.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white placeholder-[#a8a8b4]/60 text-sm focus:outline-none focus:border-[#c0392b]/50 focus:bg-white/[0.09] transition-all"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-5 py-3 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(192,57,43,0.4)] text-sm"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="rounded-xl px-8 py-6 max-w-md mx-auto border border-[#c0392b]/20 bg-[#c0392b]/06">
            <div className="font-bold text-white mb-1">Thank you! Your submission has been received!</div>
          </div>
        )}

        <p className="text-[#a8a8b4]/50 text-xs mt-5">No spam, ever. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
