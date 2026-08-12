"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowUpRight, ShieldCheck, Lock, Feather, Leaf } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/navbar";
import { BackgroundParticles } from "@/components/BackgroundParticles";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const mobileProductRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 768) return;
    const el = mobileProductRef.current;
    if (!el) return;

    const floatTween = gsap.to(el, {
      y: 8,
      rotation: 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    const ST = ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      toggleActions: "play reverse play reverse",
      onLeave: () => {
        gsap.to(el, {
          opacity: 0,
          scale: 0.9,
          y: 40,
          duration: 0.5,
          ease: "power2.out",
        });
      },
      onEnterBack: () => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    });

    return () => {
      floatTween.kill();
      ST.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full bg-white pb-3 sm:pb-5 lg:pb-6 overflow-hidden font-[family-name:var(--font-jakarta)] border-b border-zinc-100 flex flex-col"
    >
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-0 flex-1 relative">
        {/* Ambient Background Glow Orbs */}
        <div className="absolute top-1/4 left-[-8%] w-[450px] h-[450px] bg-emerald-100/40 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-[2%] w-[450px] h-[450px] bg-rose-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />
        <BackgroundParticles />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-12 items-center mt-1 sm:mt-2">
          {/* Left Column: Copy & Feature Badges */}
          <div className="flex flex-col items-start z-10 space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#EBF6EF] border border-[#CCE9D7] text-[11px] sm:text-xs font-extrabold text-[#00873A] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00873A]" />
            <span>Next-Gen Feminine Hygiene</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.08]">
            Feel{" "}
            <span className="font-[family-name:var(--font-playfair)] italic font-semibold text-[#00873A]">
              Fresh.
            </span>
            <br />
            Feel{" "}
            <span className="font-[family-name:var(--font-playfair)] italic font-semibold text-[#E61C5D]">
              Free.
            </span>
          </h1>

          <p className="text-zinc-600 text-xs sm:text-sm lg:text-base max-w-md leading-relaxed">
            Effortless day-to-night security engineered for total peace of mind with{" "}
            <strong className="text-zinc-900 font-semibold">Femmeflo</strong> pads.
          </p>

          {/* 4 Feature Cards Grid */}
          <div className="pt-1 sm:pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full">
            <div className="bg-[#EBF6EF]/60 border border-emerald-200/90 p-2 sm:p-2.5 lg:p-3 rounded-2xl shadow-2xs hover:bg-[#EBF6EF] transition-all flex flex-col items-center text-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-100/90 text-[#00873A] flex items-center justify-center mb-1 sm:mb-1.5 shadow-2xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[11px] sm:text-xs font-extrabold text-zinc-900 flex items-center justify-center gap-0.5">
                <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider">Upto</span>
                <span>12 Hrs</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-800">Dry Defense</span>
            </div>

            <div className="bg-rose-50/60 border border-rose-200/90 p-2 sm:p-2.5 lg:p-3 rounded-2xl shadow-2xs hover:bg-rose-50 transition-all flex flex-col items-center text-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-rose-100/90 text-[#E61C5D] flex items-center justify-center mb-1 sm:mb-1.5 shadow-2xs">
                <Lock className="w-4 h-4" />
              </div>
              <span className="text-[11px] sm:text-xs font-extrabold text-zinc-900">Zero-Leak</span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-rose-800">Side Barriers</span>
            </div>

            <div className="bg-[#EBF6EF]/60 border border-emerald-200/90 p-2 sm:p-2.5 lg:p-3 rounded-2xl shadow-2xs hover:bg-[#EBF6EF] transition-all flex flex-col items-center text-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-100/90 text-[#00873A] flex items-center justify-center mb-1 sm:mb-1.5 shadow-2xs">
                <Feather className="w-4 h-4" />
              </div>
              <span className="text-[11px] sm:text-xs font-extrabold text-zinc-900">Silken Top</span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-800">Chafing-Free</span>
            </div>

            <div className="bg-rose-50/60 border border-rose-200/90 p-2 sm:p-2.5 lg:p-3 rounded-2xl shadow-2xs hover:bg-rose-50 transition-all flex flex-col items-center text-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-rose-100/90 text-[#E61C5D] flex items-center justify-center mb-1 sm:mb-1.5 shadow-2xs">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="text-[11px] sm:text-xs font-extrabold text-zinc-900">Dermat-Safe</span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-rose-800">Irritation-Free</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Product Showcase Container */}
        <div className="relative flex items-center justify-center w-full">
          <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[380px] xl:max-w-[440px] aspect-square rounded-full p-3 sm:p-4 lg:p-5 bg-gradient-to-b from-rose-50/80 via-emerald-50/40 to-white/90 backdrop-blur-xl border border-rose-100 shadow-[0_25px_60px_-15px_rgba(21,96,53,0.12)] flex items-center justify-center">
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-200/40 via-rose-100/40 to-teal-100/30 blur-2xl pointer-events-none -z-10" />

            {/* Inner Glass Card */}
            <div className="relative w-full h-full rounded-full bg-white/95 backdrop-blur-2xl border-2 border-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex items-center justify-center overflow-hidden">


              {/* Anchor Target for Floating Product on Desktop */}
              <div
                id="hero-product-anchor"
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
              >
                <div className="hidden md:flex flex-col items-center justify-center space-y-3 opacity-25 animate-pulse pointer-events-none select-none">
                  <div className="w-56 h-32 rounded-3xl bg-gradient-to-r from-emerald-200/40 via-rose-200/50 to-emerald-200/40 shadow-inner" />
                  <div className="w-36 h-3 rounded-full bg-emerald-200/50" />
                </div>

                {/* Mobile Dedicated Real Transparent Product Image */}
                <div
                  ref={mobileProductRef}
                  className="md:hidden relative w-[260px] h-[260px] flex items-center justify-center pointer-events-auto"
                >
                  <Image
                    src="/femmeflo-withoutbg.webp"
                    alt="Femmeflo XL Sanitary Pads Real Product Image"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;