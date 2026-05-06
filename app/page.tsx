import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FireSafetyWizard from "@/components/FireSafetyWizard";
import FeaturedServices from "@/components/FeaturedServices";
import CTABanner from "@/components/CTABanner";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FireSafetyWizard />
        <FeaturedServices />
        <CTABanner />
        <Certifications />
        <Testimonials />
        <ContactSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
