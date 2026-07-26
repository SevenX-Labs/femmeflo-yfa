"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, Droplets, Smile } from "lucide-react";

export function ProductSection() {
  return (
    <section
      id="products"
      className="relative w-full py-20 lg:py-28 bg-[#EAF5EE]/70 overflow-hidden font-[family-name:var(--font-jakarta)] my-4"
    >
      {/* Soft Background Radial Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT SIDE: Product Specs, Features Grid & MRP Price Card (7 cols on lg) */}
        <motion.div
          className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#156035]/10 border border-[#156035]/20 text-xs font-bold text-[#156035] uppercase tracking-wider">
            Hero Product
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)]">
              Femmeflo XL
            </h2>
            <div className="inline-block px-4 py-1.5 rounded-full bg-rose-100/70 border border-rose-200 text-[#E61C5D] font-semibold text-sm sm:text-base">
              280mm Extended Wear
            </div>
          </div>

          {/* 4 Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-2">
            
            {/* Feature 1: 12-Hour Protection */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#156035] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 font-[family-name:var(--font-playfair)]">
                  12-Hour Protection
                </h3>
                <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">
                  Leak-free confidence all day long.
                </p>
              </div>
            </div>

            {/* Feature 2: Secure Wings */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#156035] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 font-[family-name:var(--font-playfair)]">
                  Secure Wings
                </h3>
                <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">
                  Stays in place for maximum security.
                </p>
              </div>
            </div>

            {/* Feature 3: Leak Lock */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#156035] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 font-[family-name:var(--font-playfair)]">
                  Leak Lock
                </h3>
                <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">
                  Advanced core absorbs flow instantly.
                </p>
              </div>
            </div>

            {/* Feature 4: Cottony Soft */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#156035] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 font-[family-name:var(--font-playfair)]">
                  Cottony Soft
                </h3>
                <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">
                  Gentle on skin to prevent irritation.
                </p>
              </div>
            </div>

          </div>

          {/* Price Card with Best Value Badge */}
          <div className="relative pt-4 w-full max-w-md">
            {/* Floating Pink Badge */}
            <div className="absolute top-1 right-6 z-10 bg-[#E61C5D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border border-white">
              Best Value
            </div>

            {/* Yellow Outline Price Container */}
            <div className="bg-white/95 backdrop-blur-md border-2 border-yellow-400 rounded-full px-7 py-4 flex items-center justify-between shadow-md">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-bold text-zinc-400 tracking-wider">M.R.P.</span>
                <span className="text-3xl font-extrabold text-zinc-900">₹ 40</span>
              </div>

              <div className="bg-yellow-100/90 text-yellow-950 text-xs sm:text-sm font-bold px-4 py-2 rounded-full border border-yellow-300">
                Per Pack (6 Units)
              </div>
            </div>
          </div>

        </motion.div>

        {/* RIGHT SIDE: Landing Frame for Floating Product (Circular Dual Glass Architecture) */}
        <motion.div
          className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Outer Circle Glassmorphism Plate (Glass Layer 1) */}
          <div className="relative w-full max-w-[480px] sm:max-w-[520px] aspect-square rounded-full p-3 sm:p-4 bg-white/40 backdrop-blur-xl border border-white/80 shadow-[0_30px_70px_rgba(0,0,0,0.06)] flex items-center justify-center">
            {/* Ambient Backlight Glow sandwiched between glass layers */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#156035]/20 via-emerald-100/30 to-[#E61C5D]/20 blur-xl pointer-events-none -z-10" />

            {/* Inner Circle Glass Showcase Card (Glass Layer 2) */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/90 via-white/70 to-rose-50/50 backdrop-blur-2xl border-2 border-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden ring-1 ring-white/70">
              {/* Ambient Glow */}
              <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#E61C5D]/15 to-[#156035]/15 blur-2xl pointer-events-none" />

              {/* Bottom Tag Pill */}
              <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur-md border border-zinc-200/80 px-4 py-2 rounded-full shadow-md pointer-events-none select-none whitespace-nowrap">
                <span className="text-xs font-bold text-zinc-800">Cotton Soft • Leak Lock</span>
              </div>

              {/* Floating Product Target Anchor: GSAP scroll animation ends exactly here */}
              <div
                id="product-price-anchor"
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ProductSection;
