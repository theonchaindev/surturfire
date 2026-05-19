"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isTransparent ? "transparent" : "var(--charcoal)",
        borderBottom: isTransparent ? "none" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--green-deep)" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2C9 2 13 7 13 11.5C13 14.5 11.2 16.5 9 16.5C6.8 16.5 5 14.5 5 11.5C5 9.5 6.5 8 6.5 8C6.5 10 9 10.5 9.5 9C10 11.5 9 13.5 7.5 13.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Surtur<span style={{ color: "var(--green-light)" }}>Fire</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-hover text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+447843841219" className="text-xs font-medium text-white/60 hover:text-white transition-colors">
            +44 7843 841219
          </a>
          <Link href="/quote" className="btn-green text-xs">
            Free Survey
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
          <span className="block h-0.5 w-6 bg-white transition-transform duration-200" style={{ transform: menuOpen ? "rotate(45deg) translate(3px, 4px)" : "none" }} />
          <span className="block h-0.5 w-6 bg-white transition-opacity duration-200" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block h-0.5 w-6 bg-white transition-transform duration-200" style={{ transform: menuOpen ? "rotate(-45deg) translate(3px, -4px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? "400px" : "0", background: "var(--charcoal)" }}
      >
        <nav className="flex flex-col px-6 pb-8 pt-4 gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-display text-2xl text-white/80 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/quote" className="btn-green mt-2 w-fit">Get Free Survey →</Link>
        </nav>
      </div>
    </header>
  );
}
