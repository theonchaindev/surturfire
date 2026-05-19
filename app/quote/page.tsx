import type { Metadata } from "next";
import QuoteBuilder from "./QuoteBuilder";

export const metadata: Metadata = {
  title: "Free Survey & Quote | Surtur Fire",
  description: "Request a free fire safety survey from our BAFE-certified engineers. No obligation — we&apos;ll assess your premises and recommend the right systems.",
};

export default function QuotePage() {
  return (
    <div style={{ background: "var(--soft)", minHeight: "100vh", paddingTop: "68px" }}>
      <QuoteBuilder />
    </div>
  );
}
