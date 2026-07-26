import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
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
      </main>
    </div>
  );
}



