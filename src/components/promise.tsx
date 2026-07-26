"use client";

import React from "react";
import { motion } from "framer-motion";
import { Feather, Shield, Sparkles } from "lucide-react";

export function PromiseSection() {
  return (
    <section
      id="promise"
      className="relative w-full py-20 lg:py-24 bg-[#EAF5EE]/70 overflow-hidden font-[family-name:var(--font-jakarta)] my-8"
    >
      {/* Decorative ambient background circles matching reference design */}
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-white/50 blur-2xl pointer-events-none -z-10" />
      <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full bg-[#CCE9D7]/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)]">
            Our Promise
          </h2>
          <div className="w-14 h-1 bg-[#E61C5D] rounded-full mt-3" />
        </motion.div>

        {/* Main Quote Statement */}
        <motion.p
          className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed max-w-3xl font-[family-name:var(--font-playfair)] text-[#156035] italic font-normal mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          &ldquo;To deliver sanitary pads that offer{" "}
          <span className="text-[#E61C5D] font-bold not-italic">
            superior comfort, protection,
          </span>{" "}
          and{" "}
          <span className="text-[#E61C5D] font-bold not-italic">
            freshness.
          </span>
          &rdquo;
        </motion.p>

        {/* Subtext */}
        <motion.p
          className="text-zinc-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Our goal is to provide women the confidence to move and live without
          worry during their periods.
        </motion.p>

        {/* 3 Pillars / Feature Badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 pt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {/* Pillar 1: Comfort */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-white border-2 border-[#156035]/30 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#E61C5D] group-hover:shadow-md">
              <Feather className="w-9 h-9 text-[#E61C5D]" />
            </div>
            <span className="text-base font-bold text-zinc-900 tracking-wide">
              Comfort
            </span>
          </div>

          {/* Pillar 2: Protection */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-white border-2 border-[#156035]/30 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#156035] group-hover:shadow-md">
              <Shield className="w-9 h-9 text-[#156035] fill-[#156035]/15" />
            </div>
            <span className="text-base font-bold text-zinc-900 tracking-wide">
              Protection
            </span>
          </div>

          {/* Pillar 3: Freshness */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-white border-2 border-[#156035]/30 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#E5A914] group-hover:shadow-md">
              <Sparkles className="w-9 h-9 text-[#E5A914]" />
            </div>
            <span className="text-base font-bold text-zinc-900 tracking-wide">
              Freshness
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PromiseSection;
