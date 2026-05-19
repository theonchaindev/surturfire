import type { Metadata } from "next";
import QuoteBuilder from "./QuoteBuilder";

export const metadata: Metadata = {
  title: "Free Survey & Quote | Surtur Fire",
  description: "Request a free fire safety survey from our BAFE-certified engineers. No obligation, response within 1 business day.",
};

export default function QuotePage() {
  return (
    <div style={{ background: "#111111", minHeight: "100vh", paddingTop: "72px" }}>
      <QuoteBuilder />
    </div>
  );
}
