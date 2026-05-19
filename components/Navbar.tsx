"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled || open ? "#fff" : "transparent",
        borderBottom: scrolled || open ? "1px solid var(--line)" : "1px solid transparent",
        transition: "all 0.2s",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "9px" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" fill="var(--red)"/>
            <path d="M14 4C14 4 19 9.5 19 14.5C19 17.5 17 20 14 20C11 20 9 17.5 9 14.5C9 12.5 10.5 11 10.5 11C10.5 13.5 13.5 14 14 12.5C14.5 15 13 17 11.5 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.02em", color: "var(--black)" }}>
            SURTUR<span style={{ color: "var(--red)" }}>FIRE</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {[["Services", "/services"], ["Projects", "/projects"], ["About", "/about"]].map(([label, href]) => (
            <Link key={href} href={href} style={{ fontSize: "0.875rem", fontWeight: 500, color: path === href ? "var(--black)" : "var(--grey)" }}>
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:+447843841219" style={{ fontSize: "0.825rem", fontWeight: 600, color: "var(--grey)" }}>
            +44 7843 841219
          </a>
          <Link href="/quote" className="btn-red" style={{ fontSize: "0.8rem", padding: "9px 20px" }}>
            Free Survey
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px" }}
          className="lg:hidden"
        >
          <span style={{ display: "block", width: "22px", height: "2px", background: "var(--black)", transition: "transform 0.2s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "var(--black)", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "var(--black)", transition: "transform 0.2s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden" style={{ overflow: "hidden", maxHeight: open ? "260px" : "0", transition: "max-height 0.3s", background: "#fff", borderTop: open ? "1px solid var(--line)" : "none" }}>
        <div style={{ padding: "24px 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {[["Services", "/services"], ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={href} href={href} style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--black)" }}>{label}</Link>
          ))}
          <Link href="/quote" className="btn-red" style={{ width: "fit-content" }}>Free Survey</Link>
        </div>
      </div>
    </nav>
  );
}
