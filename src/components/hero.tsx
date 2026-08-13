"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/navbar";
import { BackgroundParticles } from "@/components/BackgroundParticles";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const girlStorySlides = [
  {
    id: 1,
    badge: "✦ COMFORT THAT MOVES WITH YOU",
    title: "FEEL CONFIDENT.",
    subtitle: "EVERY SINGLE DAY.",
  },
  {
    id: 2,
    badge: "✦ MADE FOR YOUR EVERYDAY",
    title: "STAY FRESH.",
    subtitle: "STAY COMFORTABLE.",
  },
  {
    id: 3,
    badge: "✦ YOUR COMFORT, YOUR WAY",
    title: "MOVE FREELY.",
    subtitle: "LIVE CONFIDENTLY.",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const mobileProductRef = useRef<HTMLDivElement>(null);

  // Auto-advance story slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % girlStorySlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  const currentStory = girlStorySlides[activeSlide];

  return (
    <section
      id="hero"
      className="relative w-full bg-gradient-to-b from-[#FFF9F7] via-[#FFFCFA] to-[#FFF5F7] font-[family-name:var(--font-jakarta)] flex flex-col justify-between overflow-x-hidden min-h-[calc(100svh-10px)] lg:max-h-[860px] pb-3 sm:pb-5"
    >
      {/* 1. EXISTING NAVBAR (STAYS EXACTLY AS IS) */}
      <Navbar />

      <div className="w-full px-4 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between max-w-[1440px] mx-auto relative z-10 pt-0 sm:pt-1 pb-2">
        {/* Soft Decorative Ambient Background Lighting */}
        <div className="absolute top-1/4 left-[-4%] w-[380px] h-[380px] bg-[#FFF0F4]/60 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-[2%] w-[400px] h-[400px] bg-[#F0FAF4]/50 rounded-full blur-[100px] pointer-events-none -z-10" />

        <BackgroundParticles />

        {/* MAIN COHESIVE VISUAL COMPOSITION (Zero Top Space above Left Card) */}
        <div className="w-full flex-1 flex flex-col justify-center my-auto py-0">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center w-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
            
            {/* LEFT SIDE: Animated Circular Glass Stage behind Girls Visual */}
            <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[460px] lg:h-[520px] xl:h-[560px] max-h-[62vh] flex flex-col justify-between items-center lg:items-start p-2">
              
              {/* Animated & Vibrating Soft Circular Glass Stage / Halo Disc with Expanding Ripple Waves */}
              <motion.div
                animate={{
                  y: [-3, 3, -3],
                  scale: [0.98, 1.02, 0.98],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[420px] lg:w-[480px] h-[300px] sm:h-[420px] lg:h-[480px] rounded-full pointer-events-none z-0 flex items-center justify-center"
              >
                {/* 1. Concentric Expanding Ripple Wave Rings radiating outward */}
                <motion.div
                  animate={{
                    scale: [0.95, 1.3, 1.6],
                    opacity: [0.65, 0.25, 0],
                  }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0,
                  }}
                  className="absolute inset-0 rounded-full border-2 border-white/90 shadow-sm pointer-events-none"
                />
                <motion.div
                  animate={{
                    scale: [0.95, 1.3, 1.6],
                    opacity: [0.6, 0.2, 0],
                  }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 1.2,
                  }}
                  className="absolute inset-0 rounded-full border-2 border-rose-200/70 shadow-sm pointer-events-none"
                />
                <motion.div
                  animate={{
                    scale: [0.95, 1.3, 1.6],
                    opacity: [0.55, 0.18, 0],
                  }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 2.4,
                  }}
                  className="absolute inset-0 rounded-full border-2 border-emerald-200/60 shadow-sm pointer-events-none"
                />

                {/* Rotating Soft Gradient Ring Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-300/35 via-white/85 to-emerald-200/35 blur-xl animate-[spin_20s_linear_infinite] opacity-80" />

                {/* Outer Glass Ring Border with Breathing Pulse */}
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-2 rounded-full border border-white/90 bg-white/45 backdrop-blur-md shadow-[0_20px_50px_rgba(230,28,93,0.08)]"
                />

                {/* Inner Pulsing Glass Aura Disc */}
                <div className="w-[84%] h-[84%] rounded-full bg-gradient-to-br from-white/90 via-[#FFF8FA]/80 to-rose-50/60 backdrop-blur-xl border border-white/95 shadow-inner animate-pulse" />
              </motion.div>

              {/* Floating Upper Glass Badge */}
              <div className="relative z-30 flex justify-start w-full pt-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStory.badge}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.35 }}
                    className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-rose-100/90 shadow-xs text-[10px] sm:text-xs font-extrabold tracking-wider text-[#E61C5D] uppercase"
                  >
                    {currentStory.badge}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Central Girls Image (On Circular Stage with Pink Splash) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-4 pb-2 z-10">
                <Image
                  src="/hero-front.webp"
                  alt="Femmeflo Confident Happy Women"
                  width={720}
                  height={580}
                  className="w-auto h-[105%] sm:h-[115%] lg:h-[124%] max-h-none object-contain drop-shadow-lg opacity-98 transition-all duration-500 transform -translate-y-2 sm:-translate-y-3"
                  priority
                />
              </div>

              {/* Floating Lower Glass Story Text & Slider Dots */}
              <div className="relative z-30 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 w-full pb-1">
                
                {/* Floating Translucent Lower Story Message */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStory.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-rose-100/80 shadow-xs max-w-[260px] sm:max-w-xs"
                  >
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#156035] tracking-wider uppercase font-[family-name:var(--font-outfit)] leading-tight">
                      {currentStory.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-semibold text-[#E61C5D] tracking-wide font-[family-name:var(--font-playfair)] italic mt-0.5">
                      {currentStory.subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Minimal Interactive Slide Indicators (● ○ ○) */}
                <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-rose-100/70 shadow-xs">
                  {girlStorySlides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveSlide(idx)}
                      className={`transition-all cursor-pointer rounded-full ${
                        activeSlide === idx
                          ? "w-2.5 h-2.5 bg-[#E61C5D] scale-110"
                          : "w-2 h-2 bg-rose-200 hover:bg-rose-300"
                      }`}
                      title={`Go to slide ${s.id}`}
                    />
                  ))}
                </div>

              </div>

            </div>

            {/* RIGHT SIDE: Brand Headline & Product Stage (~ 50% Visual Ratio) */}
            <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[460px] lg:h-[520px] xl:h-[560px] max-h-[62vh] flex flex-col justify-between items-center lg:items-end lg:pr-2">
              
              {/* Brand Text Block (Top Right on Desktop) */}
              <div className="w-full text-center lg:text-right py-0 px-2 z-20 flex flex-col items-center lg:items-end">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-[34px] font-extrabold tracking-[0.14em] text-[#156035] uppercase font-[family-name:var(--font-outfit)] leading-tight">
                  FEEL FRESH. FEEL FREE.
                </h1>
                <p className="text-xs sm:text-sm font-medium text-[#E61C5D] font-[family-name:var(--font-playfair)] italic mt-0.5">
                  Comfort. Confidence. Freedom.
                </p>
              </div>

              {/* Soft Translucent Backdrop Stage Glow behind Product */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] lg:w-[480px] h-[320px] sm:h-[420px] lg:h-[480px] rounded-full bg-gradient-to-tr from-emerald-100/35 via-rose-100/40 to-transparent blur-3xl pointer-events-none -z-10" />

              {/* 3D Floating Product Box Target Anchor */}
              <div
                id="hero-product-anchor"
                className="relative w-full flex-1 flex items-center justify-center pointer-events-none"
              >
                <div className="flex flex-col items-center justify-center opacity-10 animate-pulse pointer-events-none select-none">
                  <div className="w-60 h-40 rounded-3xl bg-gradient-to-r from-emerald-200/40 via-rose-200/50 to-emerald-200/40 shadow-inner" />
                </div>
              </div>

              {/* Subtle Decorative Accent Flower */}
              <div className="absolute right-0 top-12 z-30 pointer-events-none hidden sm:block">
                <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs border border-rose-100/60 shadow-2xs flex items-center justify-center p-1.5 opacity-75">
                  <Image
                    src="/flower.svg"
                    alt="Femmeflo Brand Accent"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
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