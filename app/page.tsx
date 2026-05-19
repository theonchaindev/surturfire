import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import LeadCaptureBanner from "@/components/LeadCaptureBanner";

const certs = ["BAFE", "FIA", "Safe Contractor", "LPCG"];

const services = [
  { num: "01", title: "Fire Suppression", desc: "Gas-based suppression systems engineered to protect critical infrastructure, data centres, and high-value assets." },
  { num: "02", title: "Fire Detection", desc: "Conventional and addressable detection systems — from a single device to building-wide networks." },
  { num: "03", title: "Fire Extinguishers", desc: "Supply, installation, and annual servicing of the right extinguishers for your premises." },
  { num: "04", title: "Emergency Lighting", desc: "BS 5266-compliant emergency lighting keeping occupants safe when they need it most." },
];

const whyUs = [
  "BAFE-qualified engineers on every job",
  "Free site surveys & no-obligation quotes",
  "Fully insured with public liability cover",
  "Rapid response maintenance contracts",
  "Transparent fixed-price quotes, no surprises",
];

const testimonials = [
  { name: "Kevin Anderson", role: "Facilities Manager", text: "The gas suppression system was installed professionally and on time. The team were knowledgeable and kept us informed throughout. Highly recommend Surtur Fire." },
  { name: "Olivia Smith", role: "Office Manager", text: "Fire detection system fitted throughout our office — excellent service from start to finish. The engineers were tidy, efficient and fully explained the system." },
  { name: "Terry Malone", role: "Operations Director", text: "Highly knowledgeable team. Our annual servicing contract couldn't be better — always on time, always thorough. Wouldn't use anyone else." },
];

const projects = [
  {
    title: "Data Centre Gas Suppression",
    location: "Northampton",
    tag: "Fire Suppression",
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1000&q=80",
    large: true,
  },
  {
    title: "Multi-Floor Office Detection",
    location: "Birmingham",
    tag: "Fire Detection",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    large: false,
  },
  {
    title: "Industrial Unit Suppression",
    location: "Coventry",
    tag: "Fire Suppression",
    img: "https://images.unsplash.com/photo-1573167579374-29f7f5a30e8a?w=800&q=80",
    large: false,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center" style={{ background: "var(--charcoal)" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
            alt="Server room fire protection"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(20,20,20,0.98) 50%, rgba(20,20,20,0.5))" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-20">
          <div className="max-w-2xl">
            <AnimateIn variant="fadeIn" delay={0.1}>
              <span className="tag text-white/40 mb-8 block w-fit">
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--green-light)" }} />
                BAFE Certified · UK-Wide
              </span>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.2}>
              <h1 className="font-display font-bold leading-tight mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "white" }}>
                We protect<br />what matters{" "}
                <em style={{ color: "var(--green-light)", fontStyle: "italic" }}>most.</em>
              </h1>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.35}>
              <p className="text-lg leading-8 mb-10" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "520px" }}>
                Trusted by clients across the UK, we are experts in the supply, maintenance, and design of fire safety systems to safeguard against the dangers of fire.
              </p>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.45}>
              <div className="flex flex-wrap gap-4">
                <Link href="/quote" className="btn-green">
                  Free Survey
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/services" className="btn-outline-white">Our Services</Link>
              </div>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn variant="fadeUp" delay={0.6}>
              <div className="mt-16 pt-10 flex flex-wrap gap-10" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                {[
                  { val: "500+", label: "Installations" },
                  { val: "10+", label: "Years Experience" },
                  { val: "BAFE", label: "Certified" },
                  { val: "UK-Wide", label: "Coverage" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-2xl text-white">{s.val}</div>
                    <div className="text-xs mt-1 uppercase tracking-widest font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.3)" }}>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
        </div>
      </section>

      {/* CERTIFICATIONS STRIP */}
      <section style={{ background: "var(--charcoal)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <span className="tag mb-3 block w-fit" style={{ color: "var(--green-light)", borderColor: "var(--green-light)" }}>Accredited & Certified</span>
              <p className="text-sm leading-7 max-w-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Every engineer is trained to industry standards. Our certifications speak for themselves.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {certs.map((cert) => (
                <span
                  key={cert}
                  className="px-6 py-3 text-sm font-semibold tracking-widest uppercase"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "white", background: "rgba(255,255,255,0.04)" }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "var(--off-white)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="mb-16">
              <span className="tag mb-4 block w-fit" style={{ color: "var(--green-deep)", borderColor: "var(--green-deep)" }}>What We Do</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold" style={{ color: "var(--charcoal)" }}>
                Systems built for<br />every environment.
              </h2>
            </div>
          </AnimateIn>

          <div className="flex flex-col">
            {services.map((svc, i) => (
              <AnimateIn key={svc.num} variant="fadeUp" delay={i * 0.08}>
                <Link
                  href="/services"
                  className="group flex items-center gap-8 py-8 relative"
                  style={{ borderTop: "1px solid #e0e0e0" }}
                >
                  <span className="ghost-num text-7xl lg:text-8xl absolute left-0 select-none" style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}>
                    {svc.num}
                  </span>
                  <div className="pl-4 lg:pl-0 flex-1 flex items-center justify-between gap-6">
                    <div className="lg:ml-28">
                      <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2 group-hover:text-green-700 transition-colors" style={{ color: "var(--charcoal)" }}>
                        {svc.title}
                      </h3>
                      <p className="text-sm leading-6 max-w-lg" style={{ color: "var(--grey)" }}>{svc.desc}</p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1" style={{ border: "1px solid var(--green-deep)", color: "var(--green-deep)" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
            <div style={{ borderTop: "1px solid #e0e0e0" }} />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="noise py-24 px-6 lg:px-10 relative overflow-hidden" style={{ background: "var(--charcoal)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <AnimateIn variant="slideLeft">
            <div>
              <span className="tag mb-6 block w-fit" style={{ color: "var(--green-light)", borderColor: "var(--green-light)" }}>Why Choose Us</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                Local expertise.<br />Nationwide reach.
              </h2>
              <ul className="flex flex-col gap-5 mb-10">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-sm leading-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                    <span className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center rounded-full" style={{ background: "var(--green-deep)" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-outline-white">About Us →</Link>
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight">
            <div className="relative h-96 lg:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Commercial building fire safety"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(20,20,20,0.6))" }} />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "var(--off-white)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="tag mb-4 block w-fit" style={{ color: "var(--green-deep)", borderColor: "var(--green-deep)" }}>Portfolio</span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold" style={{ color: "var(--charcoal)" }}>Recent installations.</h2>
              </div>
              <Link href="/projects" className="hidden lg:inline-flex btn-outline-green">All Projects →</Link>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Large */}
            <AnimateIn variant="scaleUp" className="lg:col-span-7">
              <Link href="/projects" className="group block relative overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src={projects[0].img}
                  alt={projects[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.85) 30%, transparent)" }} />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="tag text-white/60 mb-3 block w-fit" style={{ borderColor: "rgba(255,255,255,0.3)" }}>{projects[0].tag}</span>
                  <h3 className="font-display text-2xl font-bold text-white">{projects[0].title}</h3>
                  <p className="text-white/50 text-sm mt-1">{projects[0].location}</p>
                </div>
              </Link>
            </AnimateIn>

            {/* Stacked small */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {projects.slice(1).map((p, i) => (
                <AnimateIn key={p.title} variant="slideRight" delay={i * 0.1}>
                  <Link href="/projects" className="group block relative overflow-hidden" style={{ height: "200px" }}>
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.85) 30%, transparent)" }} />
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="tag text-white/60 mb-2 block w-fit" style={{ borderColor: "rgba(255,255,255,0.3)", fontSize: "0.6rem" }}>{p.tag}</span>
                      <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                      <p className="text-white/50 text-xs mt-0.5">{p.location}</p>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <Link href="/projects" className="btn-outline-green w-full justify-center">All Projects →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 lg:px-10" style={{ background: "var(--green-pale)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="mb-14">
              <span className="tag mb-4 block w-fit" style={{ color: "var(--green-deep)", borderColor: "var(--green-deep)" }}>Client Reviews</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold" style={{ color: "var(--charcoal)" }}>
                Trusted across the UK.
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} variant="fadeUp" delay={i * 0.1}>
                <div className="p-8 flex flex-col justify-between h-full" style={{ background: "white", borderTop: "3px solid var(--green-deep)" }}>
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="var(--green-deep)">
                          <path d="M7 1l1.8 3.6L13 5.2l-3 2.9.7 4.1L7 10.1l-3.7 2.1.7-4.1-3-2.9 4.2-.6z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm leading-7 italic" style={{ color: "var(--grey)" }}>&ldquo;{t.text}&rdquo;</p>
                  </div>
                  <div className="mt-6 pt-6" style={{ borderTop: "1px solid #eee" }}>
                    <div className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>{t.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--grey-light)" }}>{t.role}</div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <LeadCaptureBanner
        title="Ready to protect your premises?"
        subtitle="Book a free site survey — our BAFE-certified engineers will assess and recommend the right fire safety systems for your building."
      />
    </>
  );
}
