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
          className="w-full max-w-[1360px] mx-auto rounded-[36px] bg-[#FEFEFE] border border-white/90 shadow-[0_30px_80px_rgba(0,0,0,0.06)] relative overflow-hidden py-16 sm:py-20 px-6 sm:px-12 lg:px-16 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Soft Background Pink & Green Radial Glow Orbs */}
          <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-rose-200/30 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute -bottom-24 -right-24 w-[450px] h-[450px] bg-emerald-100/40 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-100/20 rounded-full blur-[120px] pointer-events-none -z-10" />

          {/* Seamless Botanical Banner Background Art (Blurred Tea Leaves Left + Blooming Peony Right) */}
          <div className="absolute top-0 left-0 w-full h-44 sm:h-56 pointer-events-none select-none z-0 opacity-85 overflow-hidden">
            <Image
              src="/modern-woman-banner.png"
              alt="Botanical Header Banner"
              fill
              priority
              draggable={false}
              className="object-cover object-top mix-blend-multiply select-none pointer-events-none"
            />
            {/* Soft Radial Fade Overlay so text is 100% crisp */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FEFEFE]/60 to-[#FEFEFE] pointer-events-none" />
          </div>

          {/* TOP BADGE */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-50/90 border border-rose-200/80 text-[#E61C5D] font-bold text-xs uppercase tracking-widest mb-6 shadow-xs select-none cursor-default"
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
            className="text-4xl sm:text-5xl lg:text-[72px] font-bold tracking-tight text-zinc-900 leading-[1.1] font-[family-name:var(--font-playfair)] mb-4 max-w-4xl"
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
            className="text-zinc-500 text-sm sm:text-base lg:text-lg font-normal max-w-[620px] leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Empowering active, busy women across all lifestyles and walks of life in India.
          </motion.p>

          {/* 4 FEATURE CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 w-full mb-14 text-center">
            
            {/* CARD 1: Primary Profile */}
            <motion.div
              className="relative rounded-[28px] bg-white/90 backdrop-blur-xl border border-rose-100/90 p-8 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(230,28,93,0.12)] hover:-translate-y-2.5 transition-all duration-500 group flex flex-col justify-between min-h-[460px] cursor-pointer overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-[#E61C5D]" />

              <div className="flex flex-col items-center">
                {/* Dual Ring Translucent Icon Disc */}
                <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-200/70 text-[#E61C5D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xs relative">
                  <div className="absolute inset-0 rounded-full bg-rose-100/50 animate-ping opacity-30 pointer-events-none" />
                  <User className="w-7 h-7 stroke-[2]" />
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mb-3 group-hover:text-[#E61C5D] transition-colors">
                  Primary Profile
                </h3>

                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
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

            {/* CARD 2: Geographic Reach */}
            <motion.div
              className="relative rounded-[28px] bg-white/90 backdrop-blur-xl border border-emerald-100/90 p-8 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(21,96,53,0.12)] hover:-translate-y-2.5 transition-all duration-500 group flex flex-col justify-between min-h-[460px] cursor-pointer overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-[#156035]" />

              <div className="flex flex-col items-center">
                {/* Dual Ring Translucent Icon Disc */}
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200/70 text-[#156035] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xs relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-100/50 animate-ping opacity-30 pointer-events-none" />
                  <MapPin className="w-7 h-7 stroke-[2]" />
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mb-3 group-hover:text-[#156035] transition-colors">
                  Geographic Reach
                </h3>

                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
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

            {/* CARD 3: Value Mindset (Highlight Card with OUR FOCUS) */}
            <motion.div
              className="relative rounded-[28px] bg-gradient-to-b from-amber-50/50 via-white to-white border-2 border-amber-300/80 p-8 shadow-[0_20px_45px_rgba(230,184,0,0.15)] hover:shadow-[0_30px_60px_rgba(230,184,0,0.22)] hover:-translate-y-2.5 transition-all duration-500 group flex flex-col justify-between min-h-[460px] cursor-pointer overflow-hidden text-center scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {/* OUR FOCUS Pill Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 font-extrabold text-[9px] uppercase tracking-wider select-none">
                OUR FOCUS
              </div>

              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600" />

              <div className="flex flex-col items-center">
                {/* Dual Ring Translucent Icon Disc */}
                <div className="w-16 h-16 rounded-full bg-amber-100/80 border border-amber-300 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xs relative">
                  <Star className="w-7 h-7 fill-amber-500" />
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mb-3 group-hover:text-amber-700 transition-colors">
                  Value Mindset
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
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

            {/* CARD 4: Active Lifestyle */}
            <motion.div
              className="relative rounded-[28px] bg-white/90 backdrop-blur-xl border border-rose-100/90 p-8 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(230,28,93,0.12)] hover:-translate-y-2.5 transition-all duration-500 group flex flex-col justify-between min-h-[460px] cursor-pointer overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-[#E61C5D]" />

              <div className="flex flex-col items-center">
                {/* Dual Ring Translucent Icon Disc */}
                <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-200/70 text-[#E61C5D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xs relative">
                  <Activity className="w-7 h-7 stroke-[2]" />
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mb-3 group-hover:text-[#E61C5D] transition-colors">
                  Active Lifestyle
                </h3>

                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
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

          {/* BOTTOM TRUST BAR */}
          <motion.div
            className="w-full max-w-5xl rounded-full bg-white/90 backdrop-blur-xl border border-zinc-200/60 py-4 px-6 sm:px-10 shadow-[0_8px_25px_rgba(0,0,0,0.03)] flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-medium text-zinc-600"
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
