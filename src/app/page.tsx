import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProductSection } from "@/components/ProductSection";

// Client-only interactive components
const GlobalFloatingProduct = dynamic(
  () => import("@/components/GlobalFloatingProduct").then((mod) => mod.GlobalFloatingProduct)
);

const SectionRouteObserver = dynamic(
  () => import("@/components/SectionRouteObserver").then((mod) => mod.SectionRouteObserver)
);

// Dynamically import below-the-fold components to reduce initial JS payload and minimize main-thread execution time
const ProductFeaturesSection = dynamic(
  () => import("@/components/ProductFeaturesSection").then((mod) => mod.ProductFeaturesSection)
);

const RedefiningHygiene = dynamic(
  () => import("@/components/RedefiningHygiene").then((mod) => mod.RedefiningHygiene)
);

const PromiseSection = dynamic(
  () => import("@/components/promise").then((mod) => mod.PromiseSection)
);

const WhyChooseUs = dynamic(
  () => import("@/components/WhyChooseUs").then((mod) => mod.WhyChooseUs)
);

import { HappyCustomers } from "@/components/HappyCustomers";

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
    <div className="min-h-screen flex flex-col bg-white relative">
      <SectionRouteObserver />
      <GlobalFloatingProduct />
      <FloatingChatEnquiry />
      {/* <Navbar /> */}
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
