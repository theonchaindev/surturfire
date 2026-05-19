import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyQuoteCTA from "@/components/StickyQuoteCTA";

export const metadata: Metadata = {
  title: "Surtur Fire | Fire Protection Specialists, UK",
  description: "BAFE-certified fire safety specialists. Fire suppression, detection, extinguishers and emergency lighting across the UK. Based in Northampton.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyQuoteCTA />
      </body>
    </html>
  );
}
