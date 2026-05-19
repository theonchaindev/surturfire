"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyQuoteCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (pathname === "/quote") return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300"
      style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
    >
      <div
        className="flex items-center justify-between px-6 lg:px-10 py-4"
        style={{ background: "#111111", borderTop: "2px solid #cc2c2c" }}
      >
        <div className="hidden sm:flex items-center gap-3">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#cc2c2c" }}
          />
          <span className="text-white text-sm font-medium">Is your building fire-safe and compliant?</span>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-sm sm:hidden" style={{ color: "rgba(255,255,255,0.6)" }}>
            Get your free fire safety survey
          </span>
          <Link href="/quote" className="btn-red" style={{ fontSize: "0.75rem", padding: "10px 20px" }}>
            Get Free Survey →
          </Link>
        </div>
      </div>
    </div>
  );
}
