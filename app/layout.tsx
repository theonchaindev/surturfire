import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyQuoteCTA from "@/components/StickyQuoteCTA";

export const metadata: Metadata = {
  title: "Surtur Fire | Fire Protection & Safety Systems, UK",
  description:
    "Surtur Fire are BAFE-certified fire safety experts providing fire suppression, detection, extinguishers, and emergency lighting across the UK. Based in Northampton.",
  keywords: "fire suppression, fire detection, fire extinguishers, emergency lighting, BAFE certified, UK fire safety",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyQuoteCTA />
      </body>
    </html>
  );
}
