import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProductFeaturesSection } from "@/components/ProductFeaturesSection";
import { RedefiningHygiene } from "@/components/RedefiningHygiene";
import { About } from "@/components/about";
import { ProductSection } from "@/components/ProductSection";
import { PromiseSection } from "@/components/promise";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { GlobalFloatingProduct } from "@/components/GlobalFloatingProduct";
import { SectionRouteObserver } from "@/components/SectionRouteObserver";

// Dynamically import below-the-fold interactive components to optimize initial JS bundle & TBT
const HappyCustomers = dynamic(
  () => import("@/components/HappyCustomers").then((mod) => mod.HappyCustomers)
);

const FAQSection = dynamic(
  () => import("@/components/faq").then((mod) => mod.FAQSection)
);

const ContactSection = dynamic(
  () => import("@/components/contact").then((mod) => mod.ContactSection)
);

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => mod.Footer)
);

const FloatingChatEnquiry = dynamic(
  () => import("@/components/FloatingChatEnquiry").then((mod) => mod.FloatingChatEnquiry)
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF0F3] relative">
      <SectionRouteObserver />
      <GlobalFloatingProduct />
      <FloatingChatEnquiry />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <ProductSection />
        <ProductFeaturesSection />
        <RedefiningHygiene />
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
