"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Smile,
  Zap,
  ArrowRight,
  CheckCircle2,
  User,
  MapPin,
  Star,
  Sparkles,
  Leaf,
  Lock,
  Award,
  Users,
  Globe,
  ChevronRight,
  Activity
} from "lucide-react";

export function EssenceSection() {
  return (
    <section
      id="essence"
      className="relative w-full bg-gradient-to-b from-[#E6F5F5] via-[#EFF9F9] to-[#E2F3F3] border-b border-teal-200/50 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Background Decorative Ambient Radial Halo Orbs */}
      <div className="absolute top-10 left-[-10%] w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] rounded-full bg-gradient-to-tr from-teal-200/50 via-cyan-100/40 to-emerald-200/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-10%] w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] rounded-full bg-gradient-to-br from-emerald-200/50 via-sky-100/40 to-teal-200/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section 1: Market Positioning */}
        <motion.div
          className="text-center mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#156035] bg-[#EAF5EE] px-3.5 py-1 rounded-full border border-[#CCE9D7] inline-block mb-3 select-none">
            Brand Identity & Strategy
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)]">
            Market Positioning
          </h2>
          <div className="w-16 h-1 bg-[#E61C5D] rounded-full mx-auto mt-4" />
          <p className="text-zinc-600 text-base sm:text-lg mt-3">
            Delivering premium value without compromising on safety, performance, or care.
          </p>
        </motion.div>

        {/* 2 Positioning Cards connected by Arrow */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center w-full max-w-5xl mb-24">
          
          {/* Card 1: Affordable Trusted Segment */}
          <motion.div
            className="md:col-span-5 bg-white/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-emerald-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer relative overflow-hidden group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full h-1.5 bg-gradient-to-r from-emerald-400 to-[#156035] absolute top-0 left-0" />
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#156035] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#156035] group-hover:text-white transition-all duration-300 shadow-xs">
              <Heart className="w-8 h-8 fill-emerald-600/20 group-hover:fill-white/30" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)] mb-3 group-hover:text-[#156035] transition-colors">
              Affordable Trusted Segment
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Serving quality-seeking women at the right price point, bridging the gap between premium performance and accessible budget.
            </p>
            <div className="mt-6 pt-4 border-t border-emerald-50 flex items-center gap-2 text-xs font-bold text-[#156035]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Right Price Point</span>
            </div>
          </motion.div>

          {/* Connected Flow Badge */}
          <div className="md:col-span-1 flex flex-col items-center justify-center gap-2 my-2 md:my-0 select-none">
            <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 text-[#E61C5D] flex items-center justify-center shadow-md rotate-90 md:rotate-0">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>

          {/* Card 2: Smart Choice Protection */}
          <motion.div
            className="md:col-span-5 bg-white/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-rose-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer relative overflow-hidden group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full h-1.5 bg-gradient-to-r from-rose-400 to-[#E61C5D] absolute top-0 left-0" />
            <div className="w-16 h-16 rounded-2xl bg-rose-50 text-[#E61C5D] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#E61C5D] group-hover:text-white transition-all duration-300 shadow-xs">
              <Star className="w-8 h-8 fill-rose-600/20 group-hover:fill-white/30" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)] mb-3 group-hover:text-[#E61C5D] transition-colors">
              &ldquo;Smart Choice Protection&rdquo;
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              The intelligent solution for women who value high performance, 12-hour leak-lock security without the premium markup.
            </p>
            <div className="mt-6 pt-4 border-t border-rose-50 flex items-center gap-2 text-xs font-bold text-[#E61C5D]">
              <CheckCircle2 className="w-4 h-4 text-[#E61C5D]" />
              <span>Zero Premium Markup</span>
            </div>
          </motion.div>

        </div>

        {/* Section 2: Essence & Personality */}
        <motion.div
          className="w-full max-w-5xl bg-gradient-to-br from-white via-[#EAF5EE]/30 to-rose-50/20 border-2 border-white rounded-[2.5rem] p-8 sm:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.05)] flex flex-col items-center text-center mb-24 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#156035] bg-white px-4 py-1 rounded-full border border-zinc-200/80 shadow-2xs mb-6 select-none">
            Core Essence
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)] mb-4">
            Essence & Personality
          </h2>
          <div className="w-16 h-1 bg-[#E61C5D] rounded-full mx-auto mb-8" />

          {/* Quote */}
          <motion.p
            className="text-2xl sm:text-3xl lg:text-4xl text-center max-w-4xl font-[family-name:var(--font-playfair)] text-[#156035] italic font-normal leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            &ldquo;Our essence is{" "}
            <span className="text-[#E61C5D] font-bold not-italic">Period Freedom</span>
            &mdash; the ability to work, move, and live normally.&rdquo;
          </motion.p>

          <p className="text-zinc-600 text-base max-w-2xl text-center mb-12">
            Guided by our motto &ldquo;Feel fresh feel free&rdquo;, we embody a personality that is warm, supportive, and alive.
          </p>

          {/* 4 Personality Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pt-2">
            
            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-3xl shadow-sm border border-rose-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 text-[#E61C5D] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 fill-[#E61C5D]" />
              </div>
              <span className="font-bold text-zinc-900 text-lg mb-1">Caring</span>
              <span className="text-xs text-zinc-500">Gentle & compassionate care</span>
            </div>

            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-3xl shadow-sm border border-emerald-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#156035] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <span className="font-bold text-zinc-900 text-lg mb-1">Confident</span>
              <span className="text-xs text-zinc-500">Dependable 24/7 security</span>
            </div>

            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-3xl shadow-sm border border-yellow-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-yellow-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smile className="w-8 h-8" />
              </div>
              <span className="font-bold text-zinc-900 text-lg mb-1">Approachable</span>
              <span className="text-xs text-zinc-500">Warm & supportive voice</span>
            </div>

            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-3xl shadow-sm border border-rose-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 text-[#E61C5D] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 fill-[#E61C5D]" />
              </div>
              <span className="font-bold text-zinc-900 text-lg mb-1">Energetic</span>
              <span className="text-xs text-zinc-500">Empowering daily movement</span>
            </div>

          </div>
        </motion.div>

        {/* Section 3: THE MODERN WOMAN (Luxury FMCG Redesign) */}
        <motion.div
          className="w-full max-w-[1400px] mx-auto rounded-[36px] bg-[#FEFEFE] border border-white/90 shadow-[0_30px_80px_rgba(0,0,0,0.08)] relative overflow-hidden py-14 sm:py-20 px-6 sm:px-12 lg:px-16 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle Ambient Radial Glow Orbs (Soft Pink & Soft Green) */}
          <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-rose-200/20 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-100/15 rounded-full blur-[140px] pointer-events-none -z-10" />

          {/* Luxury Paper & Light Rays Backdrop SVG Effect */}
          <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-40">
            <svg viewBox="0 0 1000 600" fill="none" className="w-full h-full">
              <path d="M 0 0 L 1000 600 M 200 0 L 1000 480 M 0 200 L 800 600" stroke="#FCE7F3" strokeWidth="1" strokeDasharray="6 6" opacity="0.6" />
            </svg>
          </div>

          {/* SOFT ANIMATED FLOATING ROSE PETALS & SPARKLES */}
          <div className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden">
            {/* Petal 1 */}
            <motion.div
              className="absolute top-8 left-[15%] text-pink-400 opacity-70"
              animate={{
                y: [0, 50, 100],
                x: [0, 15, -10],
                rotate: [0, 45, 90],
                opacity: [0.2, 0.85, 0.2],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="w-6 h-6">
                <path d="M15 3 C24 10, 27 22, 15 26 C3 22, 6 10, 15 3 Z" opacity="0.8" />
              </svg>
            </motion.div>

            {/* Petal 2 */}
            <motion.div
              className="absolute top-16 right-[18%] text-rose-400 opacity-70"
              animate={{
                y: [0, 60, 120],
                x: [0, -15, 10],
                rotate: [0, -45, -90],
                opacity: [0.3, 0.9, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <svg viewBox="0 0 28 28" fill="currentColor" className="w-5 h-5">
                <path d="M14 2 C22 9, 25 21, 14 25 C3 21, 6 9, 14 2 Z" opacity="0.85" />
              </svg>
            </motion.div>

            {/* Sparkle Twinkles */}
            <motion.div
              className="absolute top-12 left-[38%] text-amber-400 opacity-80"
              animate={{
                scale: [0.8, 1.3, 0.8],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
            </motion.div>
          </div>

          {/* TOP BADGE */}
          <motion.div
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50/80 backdrop-blur-md border border-rose-200/80 text-[#E61C5D] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs select-none cursor-default"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E61C5D]" />
            <span>EMPOWERING HER</span>
          </motion.div>

          {/* TITLE */}
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-zinc-900 leading-[1.08] font-[family-name:var(--font-playfair)] mb-3 max-w-4xl"
            initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The{" "}
            <span className="bg-gradient-to-r from-[#E61C5D] via-[#F472B6] to-[#E61C5D] bg-clip-text text-transparent italic font-normal">
              Modern
            </span>{" "}
            Woman
          </motion.h2>

          {/* SUBTITLE */}
          <motion.p
            className="text-[#666666] text-sm sm:text-base lg:text-lg font-normal max-w-[620px] leading-[1.7] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Empowering active, ambitious women with comfort, confidence and freedom throughout every stage of life.
          </motion.p>

          {/* 4 FEATURE CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 w-full mb-14 text-center items-center">
            
            {/* CARD 1: Primary Profile (Pink Accent) */}
            <motion.div
              className="relative rounded-[30px] bg-gradient-to-b from-white/95 via-white/85 to-rose-50/20 backdrop-blur-2xl border border-rose-100/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_90px_rgba(230,28,93,0.18)] hover:-translate-y-3 hover:scale-[1.03] transition-all duration-500 group flex flex-col justify-between min-h-[460px] cursor-pointer overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-[#E61C5D]" />

              <div className="flex flex-col items-center">
                {/* 72px Glass Circle Icon with Gradient Halo */}
                <div className="relative mb-7 group-hover:rotate-6 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-full bg-rose-200/50 blur-lg pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="w-[72px] h-[72px] rounded-full bg-white/90 backdrop-blur-xl border border-rose-200/80 text-[#E61C5D] flex items-center justify-center shadow-md relative z-10">
                    <User className="w-8 h-8 stroke-[2]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mb-3 group-hover:text-[#E61C5D] transition-colors">
                  Primary Profile
                </h3>

                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal max-w-[250px]">
                  Addressing the diverse needs of women across ages and life stages with trusted care.
                </p>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-rose-100/60 flex items-center justify-between text-xs font-semibold text-[#E61C5D]">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E61C5D]" />
                  <span>Everyday for Everyone</span>
                </span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

            {/* CARD 2: Geographic Reach (Green Accent) */}
            <motion.div
              className="relative rounded-[30px] bg-gradient-to-b from-white/95 via-white/85 to-emerald-50/20 backdrop-blur-2xl border border-emerald-100/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_90px_rgba(21,96,53,0.18)] hover:-translate-y-3 hover:scale-[1.03] transition-all duration-500 group flex flex-col justify-between min-h-[460px] cursor-pointer overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.52 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-[#156035]" />

              <div className="flex flex-col items-center">
                {/* 72px Glass Circle Icon with Gradient Halo */}
                <div className="relative mb-7 group-hover:rotate-6 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-full bg-emerald-200/50 blur-lg pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="w-[72px] h-[72px] rounded-full bg-white/90 backdrop-blur-xl border border-emerald-200/80 text-[#156035] flex items-center justify-center shadow-md relative z-10">
                    <MapPin className="w-8 h-8 stroke-[2]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mb-3 group-hover:text-[#156035] transition-colors">
                  Geographic Reach
                </h3>

                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal max-w-[250px]">
                  Reaching from urban centers to rural areas across every corner of India.
                </p>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-emerald-100/60 flex items-center justify-between text-xs font-semibold text-[#156035]">
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#156035]" />
                  <span>Nationwide Access</span>
                </span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

            {/* CARD 3: Value Mindset (FEATURED HERO CARD - Gold Accent) */}
            <motion.div
              className="relative rounded-[30px] bg-gradient-to-b from-amber-50/60 via-white to-white border-2 border-amber-300 p-8 shadow-[0_30px_90px_rgba(229,169,20,0.18)] hover:shadow-[0_45px_100px_rgba(229,169,20,0.28)] hover:-translate-y-3 scale-[1.03] transition-all duration-500 group flex flex-col justify-between min-h-[484px] cursor-pointer overflow-hidden text-center z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.64 }}
            >
              {/* OUR FOCUS Pill Tag */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-extrabold text-[9px] uppercase tracking-wider select-none shadow-2xs">
                OUR FOCUS
              </div>

              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600" />

              <div className="flex flex-col items-center">
                {/* 72px Glass Circle Icon with Golden Halo */}
                <div className="relative mb-7 group-hover:rotate-6 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-full bg-amber-300/50 blur-lg pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="w-[72px] h-[72px] rounded-full bg-amber-100/90 backdrop-blur-xl border border-amber-300 text-amber-700 flex items-center justify-center shadow-md relative z-10">
                    <Star className="w-8 h-8 fill-amber-500" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mb-3 group-hover:text-amber-700 transition-colors">
                  Value Mindset
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal max-w-[250px]">
                  Delivering exceptional quality at honest prices because every woman deserves the best care.
                </p>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-amber-200/60 flex items-center justify-between text-xs font-semibold text-amber-700">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Best Care, Always</span>
                </span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

            {/* CARD 4: Active Lifestyle (Pink Accent) */}
            <motion.div
              className="relative rounded-[30px] bg-gradient-to-b from-white/95 via-white/85 to-rose-50/20 backdrop-blur-2xl border border-rose-100/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_90px_rgba(230,28,93,0.18)] hover:-translate-y-3 hover:scale-[1.03] transition-all duration-500 group flex flex-col justify-between min-h-[460px] cursor-pointer overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.76 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-[#E61C5D]" />

              <div className="flex flex-col items-center">
                {/* 72px Glass Circle Icon with Gradient Halo */}
                <div className="relative mb-7 group-hover:rotate-6 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-full bg-rose-200/50 blur-lg pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <div className="w-[72px] h-[72px] rounded-full bg-white/90 backdrop-blur-xl border border-rose-200/80 text-[#E61C5D] flex items-center justify-center shadow-md relative z-10">
                    <Activity className="w-8 h-8 stroke-[2]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mb-3 group-hover:text-[#E61C5D] transition-colors">
                  Active Lifestyle
                </h3>

                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal max-w-[250px]">
                  Supporting your on-the-go routine with comfort, protection & confidence all day long.
                </p>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-rose-100/60 flex items-center justify-between text-xs font-semibold text-[#E61C5D]">
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#E61C5D]" />
                  <span>Live Without Limits</span>
                </span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

          </div>

          {/* BOTTOM SINGLE GLASS TRUST BAR */}
          <motion.div
            className="w-full max-w-5xl rounded-[40px] bg-white/85 backdrop-blur-2xl border border-zinc-200/70 py-4 px-8 sm:px-12 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-semibold text-zinc-700"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.88 }}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-rose-500" />
              <span>Dermatologically Tested</span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-zinc-200" />

            <div className="flex items-center gap-2">
              <Leaf className="w-4.5 h-4.5 text-emerald-600" />
              <span>Skin Friendly</span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-zinc-200" />

            <div className="flex items-center gap-2">
              <Lock className="w-4.5 h-4.5 text-rose-500" />
              <span>Trusted by Millions</span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-zinc-200" />

            <div className="flex items-center gap-2">
              <Award className="w-4.5 h-4.5 text-rose-500" />
              <span>Made for India</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default EssenceSection;
