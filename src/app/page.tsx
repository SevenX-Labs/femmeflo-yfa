import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProductSection } from "@/components/ProductSection";
import { PromiseSection } from "@/components/promise";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { EssenceSection } from "@/components/essence";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";
import { GlobalFloatingProduct } from "@/components/GlobalFloatingProduct";
import { SectionRouteObserver } from "@/components/SectionRouteObserver";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] relative">
      <SectionRouteObserver />
      <GlobalFloatingProduct />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <ProductSection />
        <PromiseSection />
        <WhyChooseUs />
        <EssenceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}



