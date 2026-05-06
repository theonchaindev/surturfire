"use client";

import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="newsletter" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden" ref={containerRef}>
      {/* Subtle ember drift bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(192,57,43,0.05),transparent)]" />

      <div
        className="nl-inner relative z-10 max-w-2xl mx-auto text-center"
        style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
      >
        <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">
          Newsletter
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          Stay Connected with Surtur Fire.
        </h2>
        <p className="text-[#9ca3af] text-lg mb-10">
          Get fire safety tips, regulation updates, and industry insights delivered
          straight to your inbox.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-white/[0.05] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#9ca3af] text-sm focus:outline-none focus:border-[#c0392b]/50 focus:bg-white/[0.08] transition-all"
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
          <div className="glass-card rounded-xl px-8 py-6 max-w-md mx-auto border-[#c0392b]/20">
            <div className="text-2xl mb-2">🔥</div>
            <div className="font-bold text-white mb-1">You&apos;re in!</div>
            <div className="text-[#9ca3af] text-sm">
              Thanks for subscribing — we&apos;ll be in touch soon.
            </div>
          </div>
        )}

        <p className="text-[#9ca3af]/60 text-xs mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
