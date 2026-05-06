"use client";

const testimonials = [
  {
    name: "Kevin Anderson",
    role: "Client",
    quote: "Surtur Fire's expertise in gas suppression systems is unparalleled. Thank your for your commitment to safety and reliability.",
    stars: 5,
  },
  {
    name: "Olivia Smith",
    role: "Client",
    quote: "Surtur Fire brought invaluable peace of mind to our home. The fire detection services were not only skillfully executed but also delivered with courtesy and respect.",
    stars: 5,
  },
  {
    name: "Terry Malone",
    role: "Client",
    quote: "Hats off to Surtur Fire! Your innovative fire detection technology has added an extra layer of security to our establishment.",
    stars: 5,
  },
  {
    name: "John Bennett",
    role: "Client",
    quote: "Surtur Fire stands out for their exceptional service. The team's professionalism and efficiency make them our top choice for fire protection.",
    stars: 5,
  },
  {
    name: "Craig Haven",
    role: "Client",
    quote: "The expertise of Surtur Fire's team during the gas suppression system installation was truly impressive. They ensured a smooth process from start to finish.",
    stars: 5,
  },
  {
    name: "Lisa Turner",
    role: "Client",
    quote: "A big thank you to Surtur Fire for their prompt response and thorough installation of our fire detection system. Your dedication to our safety is truly commendable.",
    stars: 5,
  },
  {
    name: "Brian Thompson",
    role: "Client",
    quote: "Surtur Fire, thank you for your exceptional service. The fire detection systems you installed at our office have made a significant impact on our safety.",
    stars: 5,
  },
  {
    name: "David Frank",
    role: "Client",
    quote: "A special thanks to Surtur Fire for their unwavering commitment to safety. The team's professionalism and attention to detail are truly commendable.",
    stars: 5,
  },
  {
    name: "Lee Riley",
    role: "Client",
    quote: "Grateful to Surtur Fire for their meticulous approach in installing our fire detection system. Your team's expertise and responsiveness made a significant difference.",
    stars: 5,
  },
  {
    name: "Robert Green",
    role: "Client",
    quote: "Kudos to Surtur Fire for their prompt response and thoroughness in installing our fire detection system. Your dedication to our safety did not go unnoticed.",
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
    <div className="mx-3 w-72 flex-shrink-0 rounded-xl p-5 border border-white/[0.12] bg-[#222228] hover:border-white/[0.25] hover:bg-[#272730] transition-colors duration-300">
      <StarRating count={t.stars} />
      <p className="text-[#a8a8b4] text-sm leading-relaxed mt-3 mb-4">&ldquo;{t.quote}&rdquo;</p>
      <div>
        <div className="text-sm font-semibold text-white">{t.name}</div>
        <div className="text-xs text-[#a8a8b4]">{t.role}</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = [...testimonials.slice(0, 5), ...testimonials.slice(0, 5)];
  const row2 = [...testimonials.slice(5), ...testimonials.slice(5)];

  return (
    <section className="py-28 overflow-hidden bg-[#1c1c22]">
      <div className="text-center mb-14 px-6">
        <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">
          Client Reviews
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-white">
          Trusted Across The UK
        </h2>
        <p className="text-[#a8a8b4] text-lg max-w-lg mx-auto">
          Don&apos;t just take our word for it — here&apos;s what our clients say.
        </p>
      </div>

      <div className="overflow-hidden mb-4">
        <div className="marquee-l flex">
          {row1.map((t, i) => <TestimonialCard key={`r1-${i}`} t={t} />)}
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-r flex">
          {row2.map((t, i) => <TestimonialCard key={`r2-${i}`} t={t} />)}
        </div>
      </div>
    </section>
  );
}
