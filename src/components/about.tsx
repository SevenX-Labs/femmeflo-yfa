"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative w-full max-w-7xl mx-auto px-6 py-20 lg:py-28 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-[-5%] w-[450px] h-[450px] bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-5%] w-[450px] h-[450px] bg-rose-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Product Image Display with Luxury Glass Container */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle Background Card Frame */}
          <div className="relative w-full max-w-[540px] aspect-square rounded-3xl bg-gradient-to-br from-white/70 to-rose-50/40 backdrop-blur-xl border border-white/80 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center justify-center overflow-hidden">
            {/* Animated Glow Circle */}
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

            {/* Product Image */}
            <motion.div
              className="relative z-10 w-full h-full flex items-center justify-center"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/femmeflo-withoutbg.png"
                alt="Femmeflo XL Product"
                width={500}
                height={500}
                className="w-auto h-full max-h-[460px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)]"
                priority
              />
            </motion.div>

            {/* Floating Quality Stamp Badge */}
            <div className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-md border border-zinc-200/80 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-3">
              <span className="text-2xl">🌿</span>
              <div>
                <p className="text-xs font-bold text-zinc-900">100% Dermatologically Tested</p>
                <p className="text-[11px] text-zinc-500">Hypoallergenic & Gentle</p>
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
            <span className="text-base leading-none">✨</span>
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
            <div className="bg-white/80 backdrop-blur-md border border-zinc-200/80 p-4 rounded-2xl shadow-xs">
              <div className="text-2xl mb-1">🌸</div>
              <h3 className="text-sm font-bold text-zinc-900">Cotton Soft Core</h3>
              <p className="text-xs text-zinc-500 mt-1">Breathable fabric preventing rashes and irritation.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-zinc-200/80 p-4 rounded-2xl shadow-xs">
              <div className="text-2xl mb-1 font-bold text-[#156035]">⚡</div>
              <h3 className="text-sm font-bold text-zinc-900">12-Hour Protection</h3>
              <p className="text-xs text-zinc-500 mt-1">Rapid absorption channels for all-day security.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-zinc-200/80 p-4 rounded-2xl shadow-xs">
              <div className="text-2xl mb-1">🛡️</div>
              <h3 className="text-sm font-bold text-zinc-900">Zero Leak Lock</h3>
              <p className="text-xs text-zinc-500 mt-1">Double side-wings for edge-to-edge confidence.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-zinc-200/80 p-4 rounded-2xl shadow-xs">
              <div className="text-2xl mb-1">🌱</div>
              <h3 className="text-sm font-bold text-zinc-900">Toxin Free</h3>
              <p className="text-xs text-zinc-500 mt-1">0% artificial fragrance, chlorine or harsh dyes.</p>
            </div>
          </div>

          {/* Action CTA Link */}
          <div className="pt-4">
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-[#E61C5D] font-bold text-base hover:text-[#d91b54] group transition-colors"
            >
              <span>Discover Our Innovations</span>
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
