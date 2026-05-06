"use client";

const testimonials = [
  {
    name: "Kevin Anderson",
    role: "Facilities Manager",
    quote:
      "Surtur Fire installed our entire detection system within a tight deadline. Exceptional professionalism from start to finish.",
    stars: 5,
  },
  {
    name: "Olivia Smith",
    role: "Operations Director",
    quote:
      "Outstanding service. Their engineers are knowledgeable, tidy, and always on time. Fully recommend for any fire safety requirement.",
    stars: 5,
  },
  {
    name: "Terry Malone",
    role: "Site Manager",
    quote:
      "We've used Surtur Fire for our annual maintenance for three years. Always thorough and the reports are detailed and clear.",
    stars: 5,
  },
  {
    name: "John Bennett",
    role: "MD, Bennett Manufacturing",
    quote:
      "They replaced our ageing suppression system with minimal disruption to production. Excellent project management throughout.",
    stars: 5,
  },
  {
    name: "Craig Haven",
    role: "IT Director",
    quote:
      "Had our server room fitted with a gas suppression system. The team were clearly experts and the installation was flawless.",
    stars: 5,
  },
  {
    name: "Lisa Turner",
    role: "Care Home Manager",
    quote:
      "Surtur Fire understand the specific requirements for care settings. They're our go-to for all fire safety compliance needs.",
    stars: 5,
  },
  {
    name: "Brian Thompson",
    role: "Building Manager",
    quote:
      "Rapid response when we had a system fault, and their emergency lighting service is second to none.",
    stars: 5,
  },
  {
    name: "David Frank",
    role: "Health & Safety Officer",
    quote:
      "Comprehensive audit report, clearly written and actionable. Helped us pass our inspection with zero issues.",
    stars: 5,
  },
  {
    name: "Lee Riley",
    role: "Head of Estates",
    quote:
      "From initial survey to sign-off, every step was handled professionally. The team genuinely care about fire safety.",
    stars: 5,
  },
  {
    name: "Robert Green",
    role: "Managing Director",
    quote:
      "Fair pricing, expert knowledge, and a team you can trust. Surtur Fire protect every premises in our portfolio.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#e67e22]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="glass-card rounded-xl p-5 mx-3 w-72 flex-shrink-0 hover:border-white/20 transition-colors duration-300">
      <StarRating count={t.stars} />
      <p className="text-[#9ca3af] text-sm leading-relaxed mt-3 mb-4">&ldquo;{t.quote}&rdquo;</p>
      <div>
        <div className="text-sm font-semibold text-white">{t.name}</div>
        <div className="text-xs text-[#9ca3af]">{t.role}</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = [...testimonials.slice(0, 5), ...testimonials.slice(0, 5)];
  const row2 = [...testimonials.slice(5), ...testimonials.slice(5)];

  return (
    <section className="py-28 overflow-hidden">
      <div className="text-center mb-14 px-6">
        <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">
          Client Reviews
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
          Trusted Across The UK
        </h2>
        <p className="text-[#9ca3af] text-lg max-w-lg mx-auto">
          Don&apos;t just take our word for it — here&apos;s what our clients say.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden mb-4">
        <div className="marquee-l flex">
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden">
        <div className="marquee-r flex">
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
