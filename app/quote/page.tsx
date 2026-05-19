import type { Metadata } from "next";
import QuoteBuilder from "./QuoteBuilder";

export const metadata: Metadata = {
  title: "Free Survey & Quote | Surtur Fire",
  description: "Request a free fire safety survey from our BAFE-certified engineers. No obligation, response within 1 business day.",
};

export default function QuotePage() {
  return (
    <div className="pt-20" style={{ background: "var(--off-white)", minHeight: "100vh" }}>
      <QuoteBuilder />
    </div>
  );
}
