import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProductSection } from "@/components/ProductSection";
import { PromiseSection } from "@/components/promise";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HappyCustomers } from "@/components/HappyCustomers";
import { FAQSection } from "@/components/faq";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";
import { GlobalFloatingProduct } from "@/components/GlobalFloatingProduct";
import { SectionRouteObserver } from "@/components/SectionRouteObserver";
import { PageLoader } from "@/components/PageLoader";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF0F3] relative">
      <PageLoader />
      <SectionRouteObserver />
      <GlobalFloatingProduct />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <ProductSection />
        <PromiseSection />
        <WhyChooseUs />
        <HappyCustomers />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
