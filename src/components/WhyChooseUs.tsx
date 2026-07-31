"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Feather,
  Clock,
  Sparkles,
  CheckCircle,
  Shield,
  Leaf,
  Users,
  Globe,
  ArrowRight,
  ShoppingBag,
  Crown
} from "lucide-react";

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative w-full bg-gradient-to-b from-[#FFFDFC] via-[#FEFBF9] to-[#FFFDFC] border-b border-rose-100/50 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Background Decorative Radial Halos */}
      <div className="absolute top-10 left-[-5%] w-[450px] h-[450px] bg-rose-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-5%] w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* TOP-LEFT: Silk Fabric Draped Vector Accent */}
      <div className="absolute top-0 left-0 pointer-events-none select-none z-0 opacity-40 w-72 h-72">
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full stroke-rose-200">
          <path d="M 0 0 C 100 50, 150 150, 0 250" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 0 40 C 120 90, 180 190, 0 290" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.5" />
        </svg>
      </div>

      {/* TOP-RIGHT: Product Box on Pedestal Render */}
      <div className="absolute top-4 right-4 sm:right-12 pointer-events-none select-none z-10 hidden lg:block w-72 h-64">
        <div className="relative w-full h-full">
          <Image
            src="/femmeflo-withoutbg.png"
            alt="Femmeflo Sanitary Napkins"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* FLOATING ROSE PETALS */}
      <div className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden">
        <motion.div
          className="absolute top-12 left-[12%] text-pink-400 opacity-80"
          animate={{
            y: [0, 45, 90],
            x: [0, 15, -10],
            rotate: [0, 45, 90],
            opacity: [0.3, 0.9, 0.2],
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 30 30" fill="currentColor" className="w-6 h-6">
            <path d="M15 3 C24 10, 27 22, 15 26 C3 22, 6 10, 15 3 Z" opacity="0.85" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-24 right-[20%] text-pink-400 opacity-80"
          animate={{
            y: [0, 55, 110],
            x: [0, -15, 10],
            rotate: [0, -45, -90],
            opacity: [0.3, 0.9, 0.2],
          }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <svg viewBox="0 0 28 28" fill="currentColor" className="w-5 h-5">
            <path d="M14 2 C22 9, 25 21, 14 25 C3 21, 6 9, 14 2 Z" opacity="0.85" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="text-xs font-bold uppercase tracking-wider text-[#E61C5D] bg-rose-50/90 px-4 py-1.5 rounded-full border border-rose-200 inline-flex items-center gap-1.5 mb-4 select-none shadow-2xs">
            <span>🌸</span>
            <span>WHY WOMEN LOVE FEMMEFLO</span>
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)]">
            Why Choose{" "}
            <span className="text-[#E61C5D] font-normal italic font-[family-name:var(--font-playfair)]">
              Femmeflo?
            </span>
          </h2>

          {/* Floral Ornament Divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="w-12 h-px bg-rose-200" />
            <span className="text-pink-400 text-xs">🌸</span>
            <div className="w-12 h-px bg-rose-200" />
          </div>

          <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
            Engineered with advanced absorption technology and skin-loving soft materials to give you complete period freedom.
          </p>
        </motion.div>

        {/* 4 Feature Cards Grid (1:1 Reference Match) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          
          {/* CARD 1: 12-Hour Leak Lock Protection (Green Accent) */}
          <motion.div
            className="relative rounded-[30px] bg-gradient-to-b from-white via-white to-emerald-50/30 border border-emerald-100 p-7 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(21,96,53,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between min-h-[420px] cursor-pointer overflow-hidden text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Top Badge */}
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100/80 text-[#156035] border border-emerald-200">
                ZERO LEAKS
              </span>
            </div>

            <div className="flex flex-col items-center pt-2">
              {/* 3D Glossy Double Ring Translucent Disc with 12h Lock Dial */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-emerald-50 to-emerald-100/80 border border-emerald-200 text-[#156035] flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 relative">
                <div className="w-12 h-12 rounded-full bg-[#156035] text-white flex flex-col items-center justify-center shadow-md relative">
                  <ShieldCheck className="w-5 h-5 mb-0.5" />
                  <span className="text-[9px] font-bold leading-none">12h</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)] text-[#156035] mb-3 group-hover:text-[#156035] transition-colors leading-tight">
                12-Hour Leak Lock Protection
              </h3>

              <p className="text-xs text-zinc-500 leading-relaxed font-normal max-w-[230px]">
                Advanced super-absorbent core traps moisture instantly, keeping you fresh, dry, and worry-free all day and night.
              </p>
            </div>

            <div className="pt-6 border-t border-emerald-100/60 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#156035]">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Dermatologically Tested</span>
            </div>
          </motion.div>

          {/* CARD 2: Cloud-Soft & Skin Friendly (Pink Accent) */}
          <motion.div
            className="relative rounded-[30px] bg-gradient-to-b from-white via-white to-rose-50/30 border border-rose-100 p-7 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(230,28,93,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between min-h-[420px] cursor-pointer overflow-hidden text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Top Badge */}
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-100/80 text-[#E61C5D] border border-rose-200">
                RASH FREE
              </span>
            </div>

            <div className="flex flex-col items-center pt-2">
              {/* 3D Glossy Double Ring Translucent Disc with Feather */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-rose-50 to-rose-100/80 border border-rose-200 text-[#E61C5D] flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 relative">
                <div className="w-12 h-12 rounded-full bg-[#E61C5D] text-white flex items-center justify-center shadow-md">
                  <Feather className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)] text-[#E61C5D] mb-3 group-hover:text-[#E61C5D] transition-colors leading-tight">
                Cloud-Soft &amp; Skin Friendly
              </h3>

              <p className="text-xs text-zinc-500 leading-relaxed font-normal max-w-[230px]">
                Hypoallergenic cottony-soft top sheet engineered to prevent rashes, chafing, and skin irritation.
              </p>
            </div>

            <div className="pt-6 border-t border-rose-100/60 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#E61C5D]">
              <CheckCircle className="w-4 h-4 text-[#E61C5D]" />
              <span>Dermatologically Tested</span>
            </div>
          </motion.div>

          {/* CARD 3: 280mm Extended Wear Wings (FEATURED HERO CARD - Gold Accent) */}
          <motion.div
            className="relative rounded-[30px] bg-gradient-to-b from-amber-50/60 via-white to-white border-2 border-amber-300 p-7 shadow-[0_25px_60px_rgba(245,158,11,0.18)] hover:shadow-[0_35px_70px_rgba(245,158,11,0.26)] hover:-translate-y-2 scale-[1.03] transition-all duration-300 group flex flex-col justify-between min-h-[435px] cursor-pointer overflow-hidden text-center z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Top Right Golden Crown Emblem */}
            <div className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md absolute -top-3 -right-3 z-20 border-2 border-white">
              <Crown className="w-4 h-4 fill-white" />
            </div>

            {/* Top Badge */}
            <div className="absolute top-4 right-7">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                EXTRA LONG
              </span>
            </div>

            <div className="flex flex-col items-center pt-2">
              {/* 3D Glossy Double Ring Translucent Disc with 280mm Pad Icon */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-amber-100 to-amber-200/80 border border-amber-300 text-amber-800 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 relative">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex flex-col items-center justify-center shadow-md">
                  <Shield className="w-5 h-5 mb-0.5" />
                  <span className="text-[8px] font-bold leading-none">280mm</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)] text-amber-900 mb-3 group-hover:text-amber-700 transition-colors leading-tight">
                280mm Extended Wear Wings
              </h3>

              <p className="text-xs text-zinc-600 leading-relaxed font-normal max-w-[230px]">
                Extra-long coverage with ergonomic double wings that stay firmly in place during active movement and sleep.
              </p>
            </div>

            <div className="pt-6 border-t border-amber-200/60 flex items-center justify-center gap-1.5 text-xs font-semibold text-amber-800">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              <span>Dermatologically Tested</span>
            </div>
          </motion.div>

          {/* CARD 4: Smart Choice Value (₹40 Pack) (Gold/Orange Accent) */}
          <motion.div
            className="relative rounded-[30px] bg-gradient-to-b from-white via-white to-amber-50/30 border border-amber-200/80 p-7 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(245,158,11,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between min-h-[420px] cursor-pointer overflow-hidden text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Top Badge */}
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                BEST VALUE
              </span>
            </div>

            <div className="flex flex-col items-center pt-2">
              {/* 3D Glossy Double Ring Translucent Disc with ₹40 Pack Badge */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-amber-100 to-amber-200/80 border border-amber-300 text-amber-800 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 relative">
                <div className="w-12 h-12 rounded-full bg-[#E61C5D] text-white flex flex-col items-center justify-center shadow-md">
                  <span className="text-[10px] font-black leading-none">₹40</span>
                  <span className="text-[7px] font-extrabold uppercase leading-none mt-0.5">PACK</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)] text-amber-900 mb-3 group-hover:text-amber-700 transition-colors leading-tight">
                Smart Choice Value (₹40 Pack)
              </h3>

              <p className="text-xs text-zinc-500 leading-relaxed font-normal max-w-[230px]">
                Delivering high-performance hygiene and premium quality at an accessible price without unnecessary markup.
              </p>
            </div>

            <div className="pt-6 border-t border-amber-200/60 flex items-center justify-center gap-1.5 text-xs font-semibold text-amber-800">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              <span>Dermatologically Tested</span>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM FLOATING GLASS TRUST BAR */}
        <motion.div
          className="w-full max-w-5xl rounded-full bg-white/95 backdrop-blur-xl border border-zinc-200/80 py-4 px-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-wrap sm:flex-nowrap items-center justify-around gap-4 text-xs font-semibold text-zinc-700"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
            <span>Dermatologically Tested</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-zinc-200" />

          <div className="flex items-center gap-2">
            <Leaf className="w-4.5 h-4.5 text-emerald-600" />
            <span>Safe &amp; Skin Friendly</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-zinc-200" />

          <div className="flex items-center gap-2">
            <Users className="w-4.5 h-4.5 text-rose-500" />
            <span>Trusted by Millions</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-zinc-200" />

          <div className="flex items-center gap-2">
            <Globe className="w-4.5 h-4.5 text-amber-600" />
            <span>Made for India</span>
          </div>

          {/* Right CTA Button */}
          <button className="bg-gradient-to-r from-[#E61C5D] to-rose-600 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 shrink-0 ml-auto sm:ml-0">
            <span>Explore Product Specs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
