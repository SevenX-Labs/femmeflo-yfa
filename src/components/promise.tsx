"use client";

import React from "react";
import { motion } from "framer-motion";
import { Feather, Shield, Sparkles, Check } from "lucide-react";

export function PromiseSection() {
  return (
    <section
      id="promise"
      className="relative w-full bg-[#FAF8F5] border-b border-zinc-200/60 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Label */}
        <motion.span
          className="font-[family-name:var(--font-playfair)] text-sm sm:text-base text-zinc-600 mb-3 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Promise
        </motion.span>

        {/* Main Quote Title with Pink Wavy Underlines */}
        <motion.h2
          className="text-3xl sm:text-5xl lg:text-6xl font-normal text-zinc-900 max-w-5xl leading-[1.18] font-[family-name:var(--font-playfair)] mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          &ldquo;To deliver sanitary pads that offer{" "}
          <span className="relative inline-block">
            superior comfort,
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-3 text-[#E61C5D]/80"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 6 Q 25 0, 50 6 T 100 6 T 150 6 T 200 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          <span className="relative inline-block">
            protection,
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-3 text-[#E61C5D]/80"
              viewBox="0 0 160 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 6 Q 20 0, 40 6 T 80 6 T 120 6 T 160 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          and{" "}
          <span className="relative inline-block">
            freshness.&rdquo;
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-3 text-[#E61C5D]/80"
              viewBox="0 0 160 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 6 Q 20 0, 40 6 T 80 6 T 120 6 T 160 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          className="text-zinc-600 text-sm sm:text-base lg:text-lg max-w-xl font-[family-name:var(--font-playfair)] text-center leading-relaxed mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our goal is to provide women the confidence to move and live without worry during their periods.
        </motion.p>

        {/* 3 Feature Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full text-left">
          
          {/* CARD 1: COMFORT */}
          <motion.div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8 shadow-md group border border-white/60"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Background Image: Swirled Cotton Fabric */}
            <img
              src="https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80"
              alt="Cloud-soft cotton texture"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Soft White Bottom Gradient Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent pointer-events-none" />

            {/* Card Content Overlay */}
            <div className="relative z-10">
              {/* Icon Badge */}
              <div className="w-10 h-10 rounded-xl bg-[#F472B6] text-white flex items-center justify-center mb-3 shadow-xs">
                <Feather className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-normal font-[family-name:var(--font-playfair)] text-zinc-900 mb-2">
                Comfort
              </h3>

              {/* Copy */}
              <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed mb-4 max-w-[260px]">
                Cloud-soft top sheet engineered for 0% chafing and zero skin irritation.
              </p>

              {/* Checkmark Badge */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E61C5D]">
                <div className="w-4 h-4 rounded-full bg-[#E61C5D] text-white flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Hypoallergenic Touch</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: PROTECTION */}
          <motion.div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8 shadow-md group border border-white/60"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Background Image: Clean Water Splash */}
            <img
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80"
              alt="Water splash protection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Soft Green/White Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#EAF5EE]/95 via-white/30 to-transparent pointer-events-none" />

            {/* Central Metallic Emerald Shield Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 pointer-events-none z-0">
              <svg
                viewBox="0 0 160 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-36 h-44 drop-shadow-[0_15px_30px_rgba(21,96,53,0.35)]"
              >
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ADE80" />
                    <stop offset="50%" stopColor="#156035" />
                    <stop offset="100%" stopColor="#0B381E" />
                  </linearGradient>
                  <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#86EFAC" />
                  </linearGradient>
                </defs>
                <path
                  d="M 80 15 L 145 45 C 145 125, 80 180, 80 180 C 80 180, 15 125, 15 45 L 80 15 Z"
                  fill="url(#shieldGrad)"
                  stroke="url(#shieldBorder)"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <path
                  d="M 80 35 L 125 60 C 125 115, 80 155, 80 155 L 80 35 Z"
                  fill="#FFFFFF"
                  opacity="0.18"
                />
              </svg>
            </div>

            {/* Card Content Overlay */}
            <div className="relative z-10">
              {/* Icon Badge */}
              <div className="w-10 h-10 rounded-xl bg-[#34D399] text-white flex items-center justify-center mb-3 shadow-xs">
                <Shield className="w-5 h-5 fill-white/20" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-normal font-[family-name:var(--font-playfair)] text-zinc-900 mb-2">
                Protection
              </h3>

              {/* Copy */}
              <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed mb-4 max-w-[260px]">
                12-Hour leak lock core & ergonomic wings for active 24/7 security.
              </p>

              {/* Checkmark Badge */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#156035]">
                <div className="w-4 h-4 rounded-full bg-[#156035] text-white flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Instant Absorb Core</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: FRESHNESS */}
          <motion.div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8 shadow-md group border border-white/60"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Background Image: Fresh Sparkling Sunlight & Water Droplets */}
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Sparkling water droplets & sunshine"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Soft White/Yellow Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/30 to-transparent pointer-events-none" />

            {/* Card Content Overlay */}
            <div className="relative z-10">
              {/* Icon Badge */}
              <div className="w-10 h-10 rounded-xl bg-[#FBBF24] text-zinc-900 flex items-center justify-center mb-3 shadow-xs">
                <Sparkles className="w-5 h-5 fill-zinc-900" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-normal font-[family-name:var(--font-playfair)] text-zinc-900 mb-2">
                Freshness
              </h3>

              {/* Copy */}
              <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed mb-4 max-w-[260px]">
                Breathable airflow channels to keep you feeling fresh and energized all day.
              </p>

              {/* Checkmark Badge */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D97706]">
                <div className="w-4 h-4 rounded-full bg-[#D97706] text-white flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>All-Day Odor Control</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default PromiseSection;
