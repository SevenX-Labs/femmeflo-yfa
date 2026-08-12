"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Clock, ShieldCheck, Leaf, Sparkles } from "lucide-react";
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
      className="relative w-full bg-[#FFFCFA] pb-10 sm:pb-14 lg:pb-16 overflow-hidden font-[family-name:var(--font-jakarta)] flex flex-col"
    >
      <Navbar />

      <div className="w-full px-4 sm:px-8 lg:px-12 pt-0 flex-1 flex flex-col relative">
        {/* Subtle Ambient Background Orbs */}
        <div className="absolute top-1/4 left-[-4%] w-[400px] h-[400px] bg-[#FFF0F4]/60 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-[2%] w-[440px] h-[440px] bg-[#F0FAF4]/50 rounded-full blur-[110px] pointer-events-none -z-10" />

        {/* 2-3 Subtle Ambient Floating Accents */}
        <div className="absolute top-[16%] left-[45%] w-4 h-4 bg-rose-200/40 rounded-full blur-xs pointer-events-none -z-10 animate-pulse" />
        <div className="absolute bottom-[30%] left-[5%] w-3 h-3 bg-emerald-200/30 rounded-full blur-xs pointer-events-none -z-10" />
        <div className="absolute top-[10%] right-[5%] w-5 h-5 bg-rose-100/50 rounded-full blur-xs pointer-events-none -z-10" />

        <BackgroundParticles />

        <div className="max-w-[1440px] mx-auto w-full relative -mt-6 sm:-mt-10 lg:-mt-14 py-1">
          
          {/* ================= MAIN HERO VISUAL COMPOSITION ================= */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[520px]">
            
            {/* LEFT / CENTER (7 Cols on desktop): Emotional Focal Point — Indian Women Lifestyle Image */}
            <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[420px] lg:h-[500px] xl:h-[540px] flex items-center justify-center lg:justify-start">
              
              {/* Soft Pink Background Glow behind Women */}
              <div className="absolute top-1/2 left-1/2 lg:left-[45%] -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[480px] lg:w-[520px] h-[320px] sm:h-[480px] lg:h-[520px] rounded-full bg-gradient-to-tr from-[#FFF0F4]/80 via-[#FFF8FA]/95 to-transparent blur-3xl pointer-events-none -z-10" />

              {/* Large Indian Women Lifestyle Image */}
              <div className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[620px] h-full flex items-center justify-center lg:justify-start">
                <Image
                  src="/hero-front.webp"
                  alt="Femmeflo Confident Happy Women"
                  width={720}
                  height={580}
                  className="w-full h-full object-contain drop-shadow-sm opacity-95"
                  priority
                />
              </div>
            </div>

            {/* RIGHT (5 Cols on desktop): Commercial Focal Point — 3D Product Box Showcase (HIDDEN ON MOBILE to avoid duplicate product) */}
            <div className="hidden lg:flex lg:col-span-5 relative w-full h-[300px] sm:h-[380px] lg:h-[420px] xl:h-[460px] items-center justify-end lg:pr-6">
              
              {/* Soft Radial Light Glow behind Product */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] lg:w-[420px] h-[300px] sm:h-[380px] lg:h-[420px] rounded-full bg-gradient-to-tr from-emerald-100/30 via-rose-100/40 to-transparent blur-3xl pointer-events-none -z-10" />

              {/* 3D Product Showcase Target Anchor */}
              <div
                id="hero-product-anchor"
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
              >
                {/* Desktop placeholder bounds */}
                <div className="flex flex-col items-center justify-center opacity-15 animate-pulse pointer-events-none select-none">
                  <div className="w-56 h-36 rounded-3xl bg-gradient-to-r from-emerald-200/40 via-rose-200/50 to-emerald-200/40 shadow-inner" />
                </div>
              </div>

              {/* Subtle Fairy Signature Mark Accent */}
              <div className="absolute right-0 bottom-2 sm:bottom-6 z-30 pointer-events-none hidden sm:block">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 backdrop-blur-xs border border-rose-100/70 shadow-2xs flex items-center justify-center p-1.5 opacity-80">
                  <Image
                    src="/flower.svg"
                    alt="Femmeflo Brand Signature Mark"
                    width={22}
                    height={22}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

            </div>

            {/* ================= OVERLAID GLASSMORPHISM CONTENT CARD (WIDE & COMPACT BANNER) ================= */}
            <div className="absolute bottom-[-50px] sm:bottom-[-35px] lg:bottom-[-30px] xl:bottom-[-40px] left-0 right-0 z-20 flex flex-col items-center text-center px-4 pb-2">
              {/* Premium Wide Glassmorphism Card */}
              <div className="bg-white/75 sm:bg-white/60 backdrop-blur-xl rounded-3xl sm:rounded-full px-5 sm:px-10 lg:px-14 py-3 sm:py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/90 space-y-0.5 sm:space-y-1 max-w-[92%] sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#006B38] leading-tight font-[family-name:var(--font-jakarta)]">
                  <span>Confidence That </span>
                  <span className="font-[family-name:var(--font-playfair)] italic font-normal text-[#F51F63]">
                    Moves With You.
                  </span>
                </h1>
                <p className="text-[#333333] text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed font-normal">
                  Experience 12-hour dry-lock protection and silken softness designed for your worry-free, active days.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;