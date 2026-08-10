"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowUpRight, ShieldCheck, Lock, Feather, Leaf } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          onComplete: () => {
            if (el) el.style.visibility = "hidden";
          },
        });
      },
      onEnterBack: () => {
        if (el) el.style.visibility = "visible";
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
      className="relative w-full bg-white px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-16 sm:pb-20 flex flex-col justify-between overflow-hidden font-[family-name:var(--font-jakarta)] border-b border-zinc-100"
    >
      {/* Ambient Background Glow Orbs */}
      <div className="absolute top-1/4 left-[-8%] w-[450px] h-[450px] bg-emerald-100/40 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-[2%] w-[450px] h-[450px] bg-rose-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center py-4">
        {/* Left Column: Copy & Corporate Enquire CTAs */}
        <div className="flex flex-col items-start z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF6EF] border border-[#CCE9D7] text-xs sm:text-sm font-extrabold text-[#156035] shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#156035]" />
            <span>Glow • Trusted Feminine Care</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.08]">
            Feel{" "}
            <span className="font-[family-name:var(--font-playfair)] italic font-semibold text-[#156035]">
              Fresh.
            </span>
            <br />
            Feel{" "}
            <span className="font-[family-name:var(--font-playfair)] italic font-semibold text-[#E61C5D]">
              Free.
            </span>
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg max-w-md leading-relaxed">
            Experience superior comfort, dependable leak protection, and
            confidence throughout your day with{" "}
            <strong className="text-zinc-900 font-semibold">Femmeflo XL</strong> sanitary pads.
          </p>

          {/* Action Buttons (Enquire Now & Product Overview) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E61C5D] to-rose-600 text-white font-bold text-base px-8 py-3.5 rounded-full shadow-[0_10px_28px_rgba(230,28,93,0.3)] hover:shadow-[0_14px_35px_rgba(230,28,93,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Enquire Now</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </Link>

            <Link
              href="#about"
              className="group relative inline-flex items-center gap-3 pl-7 pr-2.5 py-2.5 rounded-full border-2 border-[#156035] text-[#156035] font-bold text-base transition-all duration-300 hover:bg-[#156035] hover:text-white active:scale-[0.98]"
            >
              <span>Product Overview</span>
              <span className="relative w-9 h-9 shrink-0 rounded-full bg-[#156035] text-white flex items-center justify-center overflow-hidden shadow-2xs transition-colors duration-300 group-hover:bg-white group-hover:text-[#156035]">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-[200%] group-hover:-translate-y-[200%]" />
                <ArrowUpRight className="absolute w-4 h-4 -translate-x-[200%] translate-y-[200%] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </span>
            </Link>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            <div className="bg-[#EBF6EF]/60 border border-emerald-200/90 p-3.5 rounded-2xl shadow-2xs hover:bg-[#EBF6EF] transition-all flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-xl bg-emerald-100/90 text-[#156035] flex items-center justify-center mb-2 shadow-2xs">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs font-extrabold text-zinc-900">12 Hour</span>
              <span className="text-[11px] font-semibold text-emerald-800">Protection</span>
            </div>

            <div className="bg-rose-50/60 border border-rose-200/90 p-3.5 rounded-2xl shadow-2xs hover:bg-rose-50 transition-all flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-xl bg-rose-100/90 text-[#E61C5D] flex items-center justify-center mb-2 shadow-2xs">
                <Lock className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs font-extrabold text-zinc-900">Leak Lock</span>
              <span className="text-[11px] font-semibold text-rose-800">Technology</span>
            </div>

            <div className="bg-[#EBF6EF]/60 border border-emerald-200/90 p-3.5 rounded-2xl shadow-2xs hover:bg-[#EBF6EF] transition-all flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-xl bg-emerald-100/90 text-[#156035] flex items-center justify-center mb-2 shadow-2xs">
                <Feather className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs font-extrabold text-zinc-900">Cotton Soft</span>
              <span className="text-[11px] font-semibold text-emerald-800">Touch</span>
            </div>

            <div className="bg-rose-50/60 border border-rose-200/90 p-3.5 rounded-2xl shadow-2xs hover:bg-rose-50 transition-all flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-xl bg-rose-100/90 text-[#E61C5D] flex items-center justify-center mb-2 shadow-2xs">
                <Leaf className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs font-extrabold text-zinc-900">Skin Friendly</span>
              <span className="text-[11px] font-semibold text-rose-800">&amp; Safe</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Product Showcase Container */}
        <div className="relative flex items-center justify-center w-full">
          <div className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-square rounded-full p-4 sm:p-5 bg-gradient-to-b from-rose-50/80 via-emerald-50/40 to-white/90 backdrop-blur-xl border border-rose-100 shadow-[0_25px_60px_-15px_rgba(21,96,53,0.12)] flex items-center justify-center">
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-200/40 via-rose-100/40 to-teal-100/30 blur-2xl pointer-events-none -z-10" />

            {/* Inner Glass Card */}
            <div className="relative w-full h-full rounded-full bg-white/95 backdrop-blur-2xl border-2 border-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex items-center justify-center overflow-hidden">
              <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md border border-rose-100 px-4 py-2 rounded-2xl shadow-md flex items-center gap-2.5 pointer-events-none select-none whitespace-nowrap">
                <div className="w-2.5 h-2.5 rounded-full bg-[#156035] animate-ping" />
                <span className="text-xs font-extrabold text-[#156035]">XL Extra Long • 6 Units</span>
              </div>

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
                    src="/femmeflo-withoutbg.png"
                    alt="Femmeflo XL Sanitary Pads Real Product Image"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority
                    unoptimized
                  />
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