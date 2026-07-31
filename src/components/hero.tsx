"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowUpRight, ShieldCheck, Lock, Feather, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { FairyIcon } from "@/components/FairyIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const mobileProductRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mobile-only animation check (max-width: 767px)
    if (typeof window === "undefined" || window.innerWidth >= 768) return;
    const el = mobileProductRef.current;
    if (!el) return;

    // 1. Hero Gentle Floating Animation: translateY(-8px <-> 8px), rotate(-2deg <-> 2deg), 6s, infinite
    const floatTween = gsap.to(el, {
      y: 8,
      rotation: 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // 2. Mobile Hero ScrollTrigger: start "top top", end "bottom top", toggleActions "play reverse play reverse"
    // Animate: opacity 1 -> 0, scale 1 -> 0.90, y 0 -> 40px, duration 0.5s, ease power2.out
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
      className="relative w-full bg-gradient-to-b from-[#FFF5F7] via-[#FFF9FA] to-[#FDF0F3] border-b border-rose-100/60 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Soft Background Radial Glow Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-rose-200/35 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10 animate-[pulse_7s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-[5%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-emerald-100/40 rounded-full blur-[80px] sm:blur-[110px] pointer-events-none -z-10 animate-[pulse_9s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-[20%] w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-pink-200/30 rounded-full blur-[70px] sm:blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center py-4">
        {/* Left Column: Copy & CTAs */}
        <div className="flex flex-col items-start z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF6EF]/80 backdrop-blur-sm border border-[#CCE9D7] text-xs sm:text-sm font-medium text-[#166534] shadow-xs">
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

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#products"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F43F5E] via-[#E61C5D] to-[#D91B54] text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-[0_10px_28px_rgba(230,28,93,0.35)] hover:shadow-[0_14px_35px_rgba(230,28,93,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Buy Now</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </Link>

            <Link
              href="#about"
              className="group relative inline-flex items-center gap-3 pl-7 pr-2.5 py-2.5 rounded-full border-2 border-zinc-900 text-zinc-900 font-semibold text-base transition-all duration-300 hover:bg-zinc-900 hover:text-white active:scale-[0.98]"
            >
              <span>Explore Product</span>
              <span className="relative w-9 h-9 shrink-0 rounded-full bg-zinc-900 text-white flex items-center justify-center overflow-hidden shadow-sm transition-colors duration-300 group-hover:bg-white group-hover:text-zinc-900">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-[200%] group-hover:-translate-y-[200%]" />
                <ArrowUpRight className="absolute w-4 h-4 -translate-x-[200%] translate-y-[200%] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </span>
            </Link>
          </div>

          {/* Key Feature Cards Grid */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            <div className="bg-white/65 backdrop-blur-xl border border-white/90 p-3 rounded-2xl shadow-sm hover:bg-white/85 transition-all flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E61C5D]" />
              </div>
              <span className="text-xs font-bold text-zinc-900">12 Hour</span>
              <span className="text-[11px] text-zinc-500">Protection</span>
            </div>

            <div className="bg-white/65 backdrop-blur-xl border border-white/90 p-3 rounded-2xl shadow-sm hover:bg-white/85 transition-all flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-1.5">
                <Lock className="w-4 h-4 text-[#156035]" />
              </div>
              <span className="text-xs font-bold text-zinc-900">Leak Lock</span>
              <span className="text-[11px] text-zinc-500">Technology</span>
            </div>

            <div className="bg-white/65 backdrop-blur-xl border border-white/90 p-3 rounded-2xl shadow-sm hover:bg-white/85 transition-all flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-1.5">
                <Feather className="w-4 h-4 text-[#E61C5D]" />
              </div>
              <span className="text-xs font-bold text-zinc-900">Cotton Soft</span>
              <span className="text-[11px] text-zinc-500">Feel</span>
            </div>

            <div className="bg-white/65 backdrop-blur-xl border border-white/90 p-3 rounded-2xl shadow-sm hover:bg-white/85 transition-all flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-1.5">
                <Leaf className="w-4 h-4 text-[#156035]" />
              </div>
              <span className="text-xs font-bold text-zinc-900">Skin Friendly</span>
              <span className="text-[11px] text-zinc-500">& Safe</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Product Showcase Container (Circular Dual Glass Architecture) */}
        <div className="relative flex items-center justify-center w-full">
          {/* Outer Circle Glassmorphism Plate (Glass Layer 1) */}
          <div className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-square rounded-full p-3 sm:p-4 bg-white/40 backdrop-blur-xl border border-white/80 shadow-[0_30px_70px_rgba(0,0,0,0.06)] flex items-center justify-center">
            {/* Ambient Backlight Glow sandwiched between glass layers */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-200/50 via-teal-100/40 to-rose-200/40 blur-xl pointer-events-none -z-10" />

            {/* Inner Circle Glass Showcase Card (Glass Layer 2) */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/90 via-white/70 to-emerald-50/40 backdrop-blur-2xl border-2 border-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden ring-1 ring-white/70">
              {/* Ambient Inner Glow Orb */}
              <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#E61C5D]/15 via-rose-200/20 to-[#156035]/10 blur-2xl pointer-events-none" />

              {/* Premium Floating Badge */}
              <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur-md border border-zinc-200/80 px-4 py-2 rounded-2xl shadow-md flex items-center gap-2.5 pointer-events-none select-none whitespace-nowrap">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E61C5D] animate-ping" />
                <span className="text-xs font-bold text-zinc-800">XL Extra Long • 6 Units</span>
              </div>

              {/* Anchor Target for Floating Product on Desktop */}
              <div
                id="hero-product-anchor"
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
              >
                {/* Mobile Dedicated Floating Product (Only visible on screens < 768px) */}
                <div
                  ref={mobileProductRef}
                  className="md:hidden relative w-[240px] h-[240px] flex items-center justify-center pointer-events-auto"
                  style={{ opacity: 1, transform: "scale(1)" }}
                >
                  {/* Continuous Upright 360° Orbit around Mobile Product (z-50) */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
                    <motion.div
                      className="w-full h-full relative flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="absolute top-[-30px]">
                        <motion.div
                          animate={{
                            rotate: -360,
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <FairyIcon className="w-14 h-14 sm:w-18 sm:h-18" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  <Image
                    src="/femmeflo-withoutbg.png"
                    alt="Femmeflo XL Sanitary Pads"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-auto object-contain drop-shadow-xl"
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