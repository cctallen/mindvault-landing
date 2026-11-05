import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProp />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
