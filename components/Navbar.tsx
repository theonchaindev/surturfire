"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services#suppression", label: "Fire Suppression" },
  { href: "/services#detection", label: "Fire Detection" },
  { href: "/services#extinguishers", label: "Fire Extinguishers" },
  { href: "/services#lighting", label: "Emergency Lighting" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "#111111",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="https://cdn.prod.website-files.com/63dbb705fb1dc0446f72376f/63ecd662433aca29cd34d288_output-onlinepngtools.png"
            alt="Surtur Fire"
            width={120}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-hover text-xs font-medium tracking-wide transition-colors"
              style={{ color: "rgba(255,255,255,0.6)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+447843841219"
            className="text-xs font-medium transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            +44 7843 841219
          </a>
          <Link href="/quote" className="btn-red" style={{ fontSize: "0.75rem", padding: "10px 20px" }}>
            Free Survey
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-0.5 w-6 bg-white transition-transform duration-200"
            style={{ transform: menuOpen ? "rotate(45deg) translate(3px, 4px)" : "none" }}
          />
          <span
            className="block h-0.5 w-6 bg-white transition-opacity duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-0.5 w-6 bg-white transition-transform duration-200"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(3px, -4px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? "500px" : "0", background: "#111111" }}
      >
        <nav className="flex flex-col px-6 pb-8 pt-4 gap-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:+447843841219" className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              +44 7843 841219
            </a>
            <Link href="/quote" className="btn-red w-fit">Get Free Survey →</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
