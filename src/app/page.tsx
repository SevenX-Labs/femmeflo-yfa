import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] relative overflow-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
      </main>
    </div>
  );
}


