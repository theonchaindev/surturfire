"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyQuoteCTA() {
  const [show, setShow] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (path === "/quote") return null;
  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, transform: show ? "translateY(0)" : "translateY(100%)", transition: "transform 0.3s" }}>
      <div style={{ background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 32px" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff" }} className="hidden sm:block">Is your building fire-safe and compliant?</p>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="tel:+447843841219" style={{ fontSize: "0.825rem", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>+44 7843 841219</a>
          <Link href="/quote" style={{ background: "#fff", color: "var(--red)", fontSize: "0.8rem", fontWeight: 700, padding: "8px 18px", whiteSpace: "nowrap" }}>
            Free Survey →
          </Link>
        </div>
      </div>
    </div>
  );
}
