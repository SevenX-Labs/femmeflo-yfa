"use client";

import React from "react";
import { motion } from "framer-motion";
import { Feather, Shield, Sparkles, Check } from "lucide-react";

export function PromiseSection() {
  return (
    <section
      id="promise"
      className="relative w-full bg-[#FAF9F6] border-b border-zinc-200/60 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Header Label */}
        <motion.span
          className="font-[family-name:var(--font-playfair)] text-sm sm:text-base text-zinc-700 mb-2 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Promise
        </motion.span>

        {/* Main Quote Title with Wavy Underlines (updated colors to match image) */}
        <motion.h2
          className="text-3xl sm:text-5xl lg:text-6xl font-normal text-zinc-900 max-w-5xl leading-[1.2] font-[family-name:var(--font-playfair)] mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          &ldquo;To deliver sanitary pads that offer{" "}
          <span className="relative inline-block">
            superior comfort,
            <svg
              className="absolute -bottom-1 left-0 w-full h-2.5 text-emerald-400"
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
              className="absolute -bottom-1 left-0 w-full h-2.5 text-emerald-400"
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
              className="absolute -bottom-1 left-0 w-full h-2.5 text-emerald-400"
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
          className="text-zinc-600 text-sm sm:text-base lg:text-lg max-w-2xl font-[family-name:var(--font-playfair)] text-center leading-relaxed mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our goal is to provide women the confidence to move and live without worry during their periods.
        </motion.p>

        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          
          {/* CARD 1: COMFORT */}
          <motion.div
            className="relative rounded-2xl overflow-hidden min-h-[420px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-8 shadow-sm group bg-white border border-zinc-200/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Background Texture - Soft Cotton Swirl */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1200&auto=format&fit=crop')`,
              }}
            />
            
            {/* Soft Bottom Gradient Overlay for High Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent pointer-events-none" />

            {/* Card Content Overlay */}
            <div className="relative z-10">
              {/* Pink Icon Badge */}
              <div className="w-8 h-8 rounded-lg bg-pink-200 text-pink-700 flex items-center justify-center mb-3">
                <Feather className="w-4 h-4" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-normal font-[family-name:var(--font-playfair)] text-zinc-900 mb-2">
                Comfort
              </h3>

              <p className="text-xs sm:text-sm text-zinc-800 font-normal leading-relaxed mb-4 max-w-[240px]">
                Cloud-soft top sheet engineered for 0% chafing and zero skin irritation.
              </p>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-500">
                <div className="w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Hypoallergenic Touch</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: PROTECTION */}
          <motion.div
            className="relative rounded-2xl overflow-hidden min-h-[420px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-8 shadow-sm group bg-[#E6F4FA] border border-zinc-200/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Background Image - Clean Water Splash Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop')`,
              }}
            />

            {/* Central Metallic Green Shield Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <svg
                viewBox="0 0 160 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-40 h-48 drop-shadow-[0_10px_25px_rgba(21,96,53,0.35)] opacity-90 transition-transform duration-500 group-hover:scale-105"
              >
                <defs>
                  <linearGradient id="greenShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ADE80" />
                    <stop offset="50%" stopColor="#156035" />
                    <stop offset="100%" stopColor="#0B381E" />
                  </linearGradient>
                  <linearGradient id="shieldGlowLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#86EFAC" />
                  </linearGradient>
                </defs>
                <path
                  d="M 80 15 L 145 45 C 145 125, 80 180, 80 180 C 80 180, 15 125, 15 45 L 80 15 Z"
                  fill="url(#greenShieldGrad)"
                  stroke="url(#shieldGlowLine)"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <path
                  d="M 80 35 L 125 60 C 125 115, 80 155, 80 155 L 80 35 Z"
                  fill="#FFFFFF"
                  opacity="0.2"
                />
              </svg>
            </div>

            {/* Gradient Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#EAF6FD]/95 via-[#EAF6FD]/30 to-transparent pointer-events-none z-1" />

            {/* Content Overlay */}
            <div className="relative z-10">
              {/* Green Icon Badge */}
              <div className="w-8 h-8 rounded-lg bg-emerald-200 text-emerald-800 flex items-center justify-center mb-3">
                <Shield className="w-4 h-4 fill-emerald-800/30" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-normal font-[family-name:var(--font-playfair)] text-zinc-900 mb-2">
                Protection
              </h3>

              <p className="text-xs sm:text-sm text-zinc-800 font-normal leading-relaxed mb-4 max-w-[240px]">
                12-Hour leak lock core & ergonomic wings for active 24/7 security.
              </p>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Instant Absorb Core</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: FRESHNESS */}
          <motion.div
            className="relative rounded-2xl overflow-hidden min-h-[420px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-8 shadow-sm group bg-sky-50 border border-zinc-200/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Background Image - Bright Sunlight Bokeh & Fresh Droplets */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=1200&auto=format&fit=crop')`,
              }}
            />

            {/* Gradient Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-100/90 via-sky-50/20 to-transparent pointer-events-none" />

            {/* Content Overlay */}
            <div className="relative z-10">
              {/* Gold/Yellow Icon Badge */}
              <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4 fill-amber-900/30" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-normal font-[family-name:var(--font-playfair)] text-zinc-900 mb-2">
                Freshness
              </h3>

              <p className="text-xs sm:text-sm text-zinc-800 font-normal leading-relaxed mb-4 max-w-[240px]">
                Breathable airflow channels to keep you feeling fresh and energized all day.
              </p>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                <div className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center">
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