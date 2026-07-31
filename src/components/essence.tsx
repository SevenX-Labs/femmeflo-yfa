"use client";

import React from "react";
import Image from "next/image";
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

        {/* Section 3: THE MODERN WOMAN (1:1 Reference Match) */}
        <motion.div
          className="w-full max-w-[1340px] mx-auto rounded-[32px] sm:rounded-[36px] bg-[#FEFEFE] border border-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative overflow-hidden py-10 sm:py-14 px-5 sm:px-10 lg:px-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Soft Background Pink & Green Radial Glow Orbs */}
          <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-rose-200/25 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-emerald-100/35 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-pink-100/15 rounded-full blur-[120px] pointer-events-none -z-10" />

          {/* TOP-LEFT: Fresh Dark Green Tea Leaves */}
          <div className="absolute -top-2 -left-2 pointer-events-none select-none z-10 w-44 sm:w-64 h-44 sm:h-64 overflow-hidden">
            <Image
              src="/green-leaves-left.png"
              alt="Green Tea Leaves"
              fill
              priority
              draggable={false}
              className="object-contain object-top-left mix-blend-multiply opacity-90 select-none pointer-events-none"
            />
          </div>

          {/* TOP-RIGHT: Blooming Pink Peony Flower */}
          <div className="absolute -top-2 -right-2 pointer-events-none select-none z-10 w-52 sm:w-80 h-52 sm:h-80 overflow-hidden">
            <Image
              src="/peony-flower-seamless.png"
              alt="Blooming Pink Peony Flower"
              fill
              priority
              draggable={false}
              className="object-contain object-top-right mix-blend-multiply opacity-95 select-none pointer-events-none"
            />
          </div>

          {/* ANIMATED FALLING PETALS & LEAVES PARTICLES */}
          <div className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden">
            {/* Petal 1: Left Top Falling Petal */}
            <motion.div
              className="absolute top-6 left-[18%] text-pink-400 opacity-80"
              animate={{
                y: [0, 45, 90],
                x: [0, 15, -10],
                rotate: [0, 45, 90],
                opacity: [0.3, 0.9, 0.2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="w-6 h-6">
                <path d="M15 3 C24 10, 27 22, 15 26 C3 22, 6 10, 15 3 Z" opacity="0.8" />
              </svg>
            </motion.div>

            {/* Petal 2: Mid-Left Falling Leaf Particle */}
            <motion.div
              className="absolute top-12 left-[32%] text-emerald-500 opacity-60"
              animate={{
                y: [0, 60, 120],
                x: [0, -20, 10],
                rotate: [0, -60, -120],
                opacity: [0.2, 0.8, 0.1],
              }}
              transition={{
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2 C18 6, 22 14, 12 22 C2 14, 6 6, 12 2 Z" opacity="0.75" />
              </svg>
            </motion.div>

            {/* Petal 3: Center Falling Pink Petal */}
            <motion.div
              className="absolute top-4 left-[48%] text-rose-400 opacity-75"
              animate={{
                y: [0, 50, 110],
                x: [0, 20, -15],
                rotate: [0, 30, 75],
                opacity: [0.4, 0.95, 0.3],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.1,
              }}
            >
              <svg viewBox="0 0 28 28" fill="currentColor" className="w-5 h-5">
                <path d="M14 2 C22 9, 25 21, 14 25 C3 21, 6 9, 14 2 Z" opacity="0.85" />
              </svg>
            </motion.div>

            {/* Petal 4: Right Mid Falling Rose Petal */}
            <motion.div
              className="absolute top-10 right-[30%] text-pink-500 opacity-80"
              animate={{
                y: [0, 55, 115],
                x: [0, -15, 12],
                rotate: [0, -45, -90],
                opacity: [0.3, 0.9, 0.2],
              }}
              transition={{
                duration: 7.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
                <path d="M16 3 C26 11, 29 23, 16 28 C3 23, 6 11, 16 3 Z" opacity="0.8" />
              </svg>
            </motion.div>

            {/* Petal 5: Near Flower Falling Petal */}
            <motion.div
              className="absolute top-14 right-[18%] text-rose-300 opacity-70"
              animate={{
                y: [0, 40, 85],
                x: [0, 10, -15],
                rotate: [0, 50, 100],
                opacity: [0.2, 0.85, 0.15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.8,
              }}
            >
              <svg viewBox="0 0 26 26" fill="currentColor" className="w-5 h-5">
                <path d="M13 2 C20 8, 23 19, 13 23 C3 19, 6 8, 13 2 Z" opacity="0.8" />
              </svg>
            </motion.div>
          </div>

          {/* TOP BADGE */}
          <motion.div
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50/90 border border-rose-200/80 text-[#E61C5D] font-bold text-[11px] uppercase tracking-widest mb-3.5 shadow-2xs select-none cursor-default"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-3 h-3 text-[#E61C5D]" />
            <span>EMPOWERING HER</span>
          </motion.div>

          {/* TITLE */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1] font-[family-name:var(--font-playfair)] mb-2.5 max-w-3xl"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
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
            className="text-zinc-500 text-xs sm:text-sm font-normal max-w-[560px] leading-relaxed mb-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Empowering active, busy women across all lifestyles and walks of life in India.
          </motion.p>

          {/* 4 FEATURE CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-9 text-center">
            
            {/* CARD 1: Primary Profile */}
            <motion.div
              className="relative rounded-[24px] bg-white/90 backdrop-blur-xl border border-rose-100/90 p-6 sm:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.025)] hover:shadow-[0_20px_40px_rgba(230,28,93,0.1)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between min-h-[380px] sm:min-h-[410px] cursor-pointer overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-[#E61C5D]" />

              <div className="flex flex-col items-center">
                {/* Dual Ring Translucent Icon Disc */}
                <div className="w-14 h-14 rounded-full bg-rose-50 border border-rose-200/70 text-[#E61C5D] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xs relative">
                  <User className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mb-2.5 group-hover:text-[#E61C5D] transition-colors">
                  Primary Profile
                </h3>

                <p className="text-xs text-zinc-500 leading-relaxed font-normal max-w-[240px]">
                  Addressing the diverse needs of women across ages and life stages with trusted care.
                </p>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-rose-100/60 flex items-center justify-between text-xs font-semibold text-[#E61C5D]">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E61C5D]" />
                  <span>Everyday for Everyone</span>
                </span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

            {/* CARD 2: Geographic Reach */}
            <motion.div
              className="relative rounded-[24px] bg-white/90 backdrop-blur-xl border border-emerald-100/90 p-6 sm:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.025)] hover:shadow-[0_20px_40px_rgba(21,96,53,0.1)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between min-h-[380px] sm:min-h-[410px] cursor-pointer overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-[#156035]" />

              <div className="flex flex-col items-center">
                {/* Dual Ring Translucent Icon Disc */}
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200/70 text-[#156035] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xs relative">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mb-2.5 group-hover:text-[#156035] transition-colors">
                  Geographic Reach
                </h3>

                <p className="text-xs text-zinc-500 leading-relaxed font-normal max-w-[240px]">
                  Reaching from urban centers to rural areas across every corner of India.
                </p>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-emerald-100/60 flex items-center justify-between text-xs font-semibold text-[#156035]">
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#156035]" />
                  <span>Nationwide Access</span>
                </span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

            {/* CARD 3: Value Mindset (Highlight Card with OUR FOCUS) */}
            <motion.div
              className="relative rounded-[24px] bg-gradient-to-b from-amber-50/40 via-white to-white border-2 border-amber-300/80 p-6 sm:p-7 shadow-[0_15px_35px_rgba(230,184,0,0.12)] hover:shadow-[0_22px_45px_rgba(230,184,0,0.18)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between min-h-[380px] sm:min-h-[410px] cursor-pointer overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {/* OUR FOCUS Pill Badge */}
              <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 font-extrabold text-[9px] uppercase tracking-wider select-none">
                OUR FOCUS
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600" />

              <div className="flex flex-col items-center">
                {/* Dual Ring Translucent Icon Disc */}
                <div className="w-14 h-14 rounded-full bg-amber-100/80 border border-amber-300 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xs relative">
                  <Star className="w-6 h-6 fill-amber-500" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mb-2.5 group-hover:text-amber-700 transition-colors">
                  Value Mindset
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed font-normal max-w-[240px]">
                  Delivering exceptional quality at honest prices because every woman deserves the best care.
                </p>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-amber-200/60 flex items-center justify-between text-xs font-semibold text-amber-700">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Best Care, Always</span>
                </span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

            {/* CARD 4: Active Lifestyle */}
            <motion.div
              className="relative rounded-[24px] bg-white/90 backdrop-blur-xl border border-rose-100/90 p-6 sm:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.025)] hover:shadow-[0_20px_40px_rgba(230,28,93,0.1)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between min-h-[380px] sm:min-h-[410px] cursor-pointer overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-[#E61C5D]" />

              <div className="flex flex-col items-center">
                {/* Dual Ring Translucent Icon Disc */}
                <div className="w-14 h-14 rounded-full bg-rose-50 border border-rose-200/70 text-[#E61C5D] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xs relative">
                  <Activity className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mb-2.5 group-hover:text-[#E61C5D] transition-colors">
                  Active Lifestyle
                </h3>

                <p className="text-xs text-zinc-500 leading-relaxed font-normal max-w-[240px]">
                  Supporting your on-the-go routine with comfort, protection & confidence all day long.
                </p>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-rose-100/60 flex items-center justify-between text-xs font-semibold text-[#E61C5D]">
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#E61C5D]" />
                  <span>Live Without Limits</span>
                </span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

          </div>

          {/* BOTTOM TRUST BAR */}
          <motion.div
            className="w-full max-w-4xl rounded-full bg-white/90 backdrop-blur-xl border border-zinc-200/60 py-3.5 px-6 sm:px-8 shadow-[0_6px_20px_rgba(0,0,0,0.025)] flex flex-wrap items-center justify-around gap-3 text-xs sm:text-sm font-medium text-zinc-600"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-500" />
              <span>Dermatologically Tested</span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-zinc-200" />

            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span>Safe & Skin Friendly</span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-zinc-200" />

            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-rose-500" />
              <span>Trusted by Millions</span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-zinc-200" />

            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-rose-500" />
              <span>Made for India</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default EssenceSection;
