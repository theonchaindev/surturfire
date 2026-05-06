import Navbar from "./Navbar";
import Footer from "./Footer";
import CTABanner from "./CTABanner";
import { LucideIcon } from "lucide-react";

type RelatedService = {
  title: string;
  desc: string;
  href: string;
};

type ServicePageLayoutProps = {
  title: string;
  tagline: string;
  icon: LucideIcon;
  color?: string;
  children: React.ReactNode;
  related: RelatedService[];
};

export default function ServicePageLayout({
  title,
  tagline,
  icon: Icon,
  color = "#c0392b",
  children,
  related,
}: ServicePageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e10] via-[#180c0c] to-[#0e0e10]" />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 60% at 50% 100%, ${color}18, transparent)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ background: `${color}18`, border: `1px solid ${color}30` }}
            >
              <Icon className="w-8 h-8" style={{ color }} />
            </div>
            <p className="font-semibold text-sm uppercase tracking-widest mb-4" style={{ color }}>
              Our Services
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-5">
              {title}
            </h1>
            <p className="text-lg text-[#b4b4c0] max-w-xl mx-auto">{tagline}</p>
          </div>
        </section>

        {/* Page content */}
        <section className="py-20 px-6 bg-[#18181c]">
          <div className="max-w-4xl mx-auto">{children}</div>
        </section>

        {/* Other services */}
        <section className="py-20 px-6 bg-[#1c1c22]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-8">Our Other Services</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((svc) => (
                <a
                  key={svc.title}
                  href={svc.href}
                  className="block rounded-2xl p-6 border border-white/[0.1] bg-[#222228] hover:border-[#c0392b]/35 hover:bg-[#272730] transition-all hover:-translate-y-1 group"
                >
                  <h3 className="font-bold text-white mb-2 group-hover:text-[#e67e22] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-[#b4b4c0] text-sm leading-relaxed mb-3">{svc.desc}</p>
                  <span className="text-sm text-[#c0392b] font-semibold">Learn more →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
