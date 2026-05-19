"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyQuoteCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (pathname === "/quote") return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 transition-transform duration-300"
      style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
    >
      <div style={{ background: "rgba(9,9,9,0.96)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--red)", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
              Is your building fire-safe and compliant?
            </span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="sm:hidden" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>Get a free fire safety survey</span>
            <Link href="/quote" className="btn btn-primary" style={{ fontSize: "0.8rem", padding: "8px 18px" }}>
              Free Survey →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
