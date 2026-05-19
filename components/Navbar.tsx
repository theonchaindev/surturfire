"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: solid ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: solid ? "blur(12px)" : "none",
        borderBottom: solid ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between" style={{ height: "68px" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div
            style={{
              width: "32px", height: "32px", borderRadius: "6px",
              background: "var(--red)", display: "flex",
              alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5C8 1.5 11.5 5.5 11.5 8.5C11.5 10.8 10 12.5 8 12.5C6 12.5 4.5 10.8 4.5 8.5C4.5 7 5.5 6 5.5 6C5.5 7.5 7.5 8.2 8 7C8.5 9 7.5 10.5 6.5 10.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: "1rem", color: solid ? "var(--ink)" : "#fff", letterSpacing: "-0.02em", transition: "color 0.3s" }}>
            Surtur<span style={{ color: "var(--red)" }}>Fire</span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.875rem", fontWeight: 500,
                color: pathname === l.href
                  ? (solid ? "var(--ink)" : "#fff")
                  : (solid ? "var(--ink-3)" : "rgba(255,255,255,0.65)"),
                textDecoration: "none", transition: "color 0.15s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+447843841219"
            style={{
              fontSize: "0.825rem", fontWeight: 500, textDecoration: "none",
              color: solid ? "var(--ink-3)" : "rgba(255,255,255,0.55)",
              transition: "color 0.3s",
            }}
          >
            +44 7843 841219
          </a>
          <Link href="/quote" className="btn btn-primary" style={{ fontSize: "0.82rem", padding: "9px 20px" }}>
            Free Survey
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px" }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block", width: "22px", height: "2px",
                background: solid ? "var(--ink)" : "#fff",
                borderRadius: "2px",
                transition: "all 0.2s",
                transform: open && i === 0 ? "rotate(45deg) translate(5px, 5px)" : open && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0", background: "rgba(255,255,255,0.97)" }}
      >
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--ink)", textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
            <Link href="/quote" className="btn btn-primary" style={{ width: "fit-content" }}>
              Free Survey
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
