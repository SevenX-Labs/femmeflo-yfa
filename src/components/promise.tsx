"use client";

import React from "react";
import { motion } from "framer-motion";
import { Feather, Shield, Sparkles, CheckCircle2, Heart } from "lucide-react";

export function PromiseSection() {
  return (
    <section
      id="promise"
      className="relative w-full bg-gradient-to-b from-[#EFF7F2] via-[#E8F4EC] to-[#F4FBF6] border-b border-emerald-100/60 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Decorative Floating Background Radial Halo Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] rounded-full bg-gradient-to-tr from-rose-200/50 via-pink-100/40 to-emerald-200/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] rounded-full bg-gradient-to-br from-emerald-200/50 via-teal-100/40 to-rose-200/40 blur-3xl pointer-events-none -z-10" />

      {/* Subtle Floating Sparkles Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-60">
        <div className="absolute top-[20%] left-[8%] w-3 h-3 bg-pink-400/60 rounded-full blur-[1px] animate-pulse" />
        <div className="absolute top-[35%] right-[10%] w-4 h-4 bg-emerald-400/60 rounded-full blur-[1px] animate-bounce" />
        <div className="absolute bottom-[25%] left-[15%] w-3 h-3 bg-yellow-400/70 rounded-full blur-[1px] animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Main Central Glass Showcase Card */}
        <motion.div
          className="relative w-full bg-white/85 backdrop-blur-2xl border-2 border-white rounded-[2.5rem] p-8 sm:p-14 lg:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.05)] flex flex-col items-center text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Top Decorative Pill Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#156035]/10 border border-[#156035]/20 text-[#156035] text-xs font-bold uppercase tracking-wider mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E61C5D]" />
            <span>Our Core Commitment</span>
          </motion.div>

          {/* Section Title */}
          <motion.div
            className="flex flex-col items-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)]">
              Our Promise
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#E61C5D] via-[#E5A914] to-[#156035] rounded-full mt-4" />
          </motion.div>

          {/* Main Statement Quote */}
          <motion.p
            className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed max-w-4xl font-[family-name:var(--font-playfair)] text-[#156035] italic font-normal mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            &ldquo;To deliver sanitary pads that offer{" "}
            <span className="text-[#E61C5D] font-bold not-italic underline decoration-rose-300 decoration-wavy decoration-2 underline-offset-8">
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
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Our goal is to provide women the confidence to move and live without worry during their periods.
          </motion.p>

          {/* 3 Interactive Feature Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-4">
            
            {/* Card 1: Comfort */}
            <motion.div
              className="bg-white/90 border border-rose-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-full h-1 bg-gradient-to-r from-rose-400 to-[#E61C5D] absolute top-0 left-0" />
              <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 text-[#E61C5D] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#E61C5D] group-hover:text-white transition-all duration-300 shadow-xs">
                <Feather className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)] mb-2 group-hover:text-[#E61C5D] transition-colors">
                Comfort
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Cloud-soft top sheet engineered for 0% chafing and zero skin irritation.
              </p>
              <div className="mt-4 pt-3 border-t border-rose-100/60 flex items-center gap-1.5 text-[11px] font-bold text-rose-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Hypoallergenic Touch</span>
              </div>
            </motion.div>

            {/* Card 2: Protection */}
            <motion.div
              className="bg-white/90 border border-emerald-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-full h-1 bg-gradient-to-r from-emerald-400 to-[#156035] absolute top-0 left-0" />
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#156035] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#156035] group-hover:text-white transition-all duration-300 shadow-xs">
                <Shield className="w-8 h-8 fill-[#156035]/15 group-hover:fill-white/30" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)] mb-2 group-hover:text-[#156035] transition-colors">
                Protection
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                12-Hour leak lock core & ergonomic wings for active 24/7 security.
              </p>
              <div className="mt-4 pt-3 border-t border-emerald-100/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Instant Absorb Core</span>
              </div>
            </motion.div>

            {/* Card 3: Freshness */}
            <motion.div
              className="bg-white/90 border border-yellow-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500 absolute top-0 left-0" />
              <div className="w-16 h-16 rounded-2xl bg-yellow-50 border border-yellow-200 text-[#E5A914] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#E5A914] group-hover:text-white transition-all duration-300 shadow-xs">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)] mb-2 group-hover:text-amber-600 transition-colors">
                Freshness
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Breathable airflow channels to keep you feeling fresh and energized all day.
              </p>
              <div className="mt-4 pt-3 border-t border-yellow-100/60 flex items-center gap-1.5 text-[11px] font-bold text-amber-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>All-Day Odor Control</span>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default PromiseSection;
