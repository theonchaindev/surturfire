"use client";

import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";

const links = [
  { label: "Gas Suppression", href: "/gas-suppression" },
  { label: "Fire Detection", href: "/fire-detection" },
  { label: "Fire Extinguishers", href: "/fire-extinguisher" },
  { label: "Emergency Lighting", href: "/emergency-lighting" },
  { label: "About Us", href: "/#certifications" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#18181c]/95 backdrop-blur-md border-b border-white/[0.12] shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <Flame className="w-7 h-7 text-[#c0392b] group-hover:text-[#e67e22] transition-colors" />
            <div className="absolute inset-0 blur-md bg-[#c0392b]/40 group-hover:bg-[#e67e22]/40 transition-colors rounded-full" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-white">SURTUR</span>
            <span className="text-[#c0392b]"> FIRE</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#b0b0b8] hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium text-[#b0b0b8] hover:text-white transition-colors"
          >
            Contact Us
          </a>
          <a
            href="#wizard"
            className="text-sm font-semibold bg-[#c0392b] hover:bg-[#a93226] text-white px-5 py-2 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(192,57,43,0.4)]"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#18181c]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold text-white hover:text-[#c0392b] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-[#c0392b] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#a93226] transition-colors"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
