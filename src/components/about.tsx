"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Sparkles, Feather, Clock, ShieldCheck, Sprout, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const mobileAboutProductRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run mobile animation on screens < 768px
    if (typeof window === "undefined" || window.innerWidth >= 768) return;
    const el = mobileAboutProductRef.current;
    if (!el) return;

    // Set initial hidden state for mobile About product
    gsap.set(el, { opacity: 0, scale: 0.9, y: 20 });

    let floatTween: gsap.core.Tween | null = null;

    // Mobile ScrollTrigger for About: start "top 60%", end "top 30%", toggleActions "play reverse play reverse"
    const ST = ScrollTrigger.create({
      trigger: "#about",
      start: "top 60%",
      end: "top 30%",
      toggleActions: "play reverse play reverse",
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            // Start gentle floating animation after fade in: translateY(-6px <-> 6px), rotate(-1.5deg <-> 1.5deg), 6s
            if (!floatTween) {
              floatTween = gsap.to(el, {
                y: 6,
                rotation: 1.5,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
              });
            }
          },
        });
      },
      onLeaveBack: () => {
        if (floatTween) {
          floatTween.kill();
          floatTween = null;
        }
        gsap.to(el, {
          opacity: 0,
          scale: 0.9,
          y: 20,
          duration: 0.4,
          ease: "power2.out",
        });
      },
    });

    return () => {
      if (floatTween) floatTween.kill();
      ST.kill();
    };
  }, []);

  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-b from-[#EBF7F0] via-[#E4F3EA] to-[#ECF7F1] border-b border-emerald-200/50 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-[-5%] w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-emerald-300/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-5%] w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-teal-200/m40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Product Landing Container (Dual Glass-behind-Glass Architecture) */}
        <motion.div
          className="relative flex items-center justify-center w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Outer Glassmorphism Plate (Glass Layer 1) */}
          <div className="relative w-full max-w-[660px] p-3 sm:p-4 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/80 shadow-[0_30px_70px_rgba(0,0,0,0.06)] flex items-center justify-center">
            {/* Ambient Backlight Glow sandwiched between glass layers */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-rose-200/50 via-pink-100/40 to-emerald-200/40 blur-xl pointer-events-none -z-10" />

            {/* Inner Glass Showcase Card (Glass Layer 2) */}
            <div className="relative w-full aspect-[16/11] rounded-3xl bg-gradient-to-br from-white/90 via-white/70 to-rose-50/50 backdrop-blur-2xl border-2 border-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[380px] ring-1 ring-white/70">
              {/* Animated Background Glow Circle inside About Card */}
              <motion.div
                className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#E61C5D]/20 to-[#156035]/15 blur-2xl"
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating Quality Stamp Badge */}
              <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur-md border border-zinc-200/80 px-4 py-2 rounded-2xl shadow-md flex items-center gap-2.5 pointer-events-none select-none whitespace-nowrap">
                <Leaf className="w-5 h-5 text-[#156035]" />
                <div>
                  <p className="text-xs font-bold text-zinc-900">100% Dermatologically Tested</p>
                </div>
              </div>

              {/* Anchor Target for Floating Product */}
              <div
                id="about-product-anchor"
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
              >
                {/* Mobile Dedicated Floating Product inside About Card (Only visible on screens under 768px) */}
                <div
                  ref={mobileAboutProductRef}
                  className="md:hidden relative w-[220px] h-[220px] flex items-center justify-center pointer-events-auto"
                >
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
        </motion.div>

        {/* Right Side: About Section Content */}
        <motion.div
          className="flex flex-col items-start space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF6EF] border border-[#CCE9D7] text-xs sm:text-sm font-medium text-[#166534] shadow-xs">
            <Sparkles className="w-4 h-4 text-[#156035]" />
            <span>About Femmeflo</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
            Crafted for Your Comfort,{" "}
            <span className="font-[family-name:var(--font-playfair)] italic font-semibold text-[#E61C5D]">
              Engineered for Freedom.
            </span>
          </h2>

          {/* Paragraph Copy */}
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            At Femmeflo, we believe every woman deserves effortless confidence during her cycle. Our extra-large sanitary pads feature an ultra-absorbent core, cloud-soft top sheet, and advanced leak-lock technology designed to keep you completely dry and worry-free all day and night.
          </p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 w-full pt-2">
            <div className="bg-white/70 backdrop-blur-2xl border-2 border-white/90 p-4 rounded-2xl shadow-md hover:shadow-xl hover:bg-white/85 transition-all">
              <Feather className="w-6 h-6 text-[#E61C5D] mb-1" />
              <h3 className="text-sm font-bold text-zinc-900">Cotton Soft Core</h3>
              <p className="text-xs text-zinc-500 mt-1">Breathable fabric preventing rashes and irritation.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-2xl border-2 border-white/90 p-4 rounded-2xl shadow-md hover:shadow-xl hover:bg-white/85 transition-all">
              <Clock className="w-6 h-6 text-[#156035] mb-1" />
              <h3 className="text-sm font-bold text-zinc-900">12-Hour Protection</h3>
              <p className="text-xs text-zinc-500 mt-1">Rapid absorption channels for all-day security.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-2xl border-2 border-white/90 p-4 rounded-2xl shadow-md hover:shadow-xl hover:bg-white/85 transition-all">
              <ShieldCheck className="w-6 h-6 text-[#E61C5D] mb-1" />
              <h3 className="text-sm font-bold text-zinc-900">Zero Leak Lock</h3>
              <p className="text-xs text-zinc-500 mt-1">Double side-wings for edge-to-edge confidence.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-2xl border-2 border-white/90 p-4 rounded-2xl shadow-md hover:shadow-xl hover:bg-white/85 transition-all">
              <Sprout className="w-6 h-6 text-[#156035] mb-1" />
              <h3 className="text-sm font-bold text-zinc-900">Toxin Free</h3>
              <p className="text-xs text-zinc-500 mt-1">0% artificial fragrance, chlorine or harsh dyes.</p>
            </div>
          </div>

          {/* Action CTA Link */}
          <div className="pt-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 text-[#E61C5D] font-bold text-base hover:text-[#d91b54] group transition-colors"
            >
              <span>Discover Our Innovations</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
}

export default About;
