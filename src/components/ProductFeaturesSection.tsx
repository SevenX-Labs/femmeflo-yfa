"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Feather, Droplets, ShieldCheck, Wind, Layers, Maximize2 } from "lucide-react";

const leftFeatures = [
  {
    id: 1,
    icon: Feather,
    title: "Cottony Soft Comfort",
    description: "Ultra-soft organic top layer, gentle against skin day and night.",
    badgeBg: "bg-rose-50 border-rose-200 text-[#E61C5D]",
  },
  {
    id: 2,
    icon: Droplets,
    title: "2x Instant Absorption",
    description: "Pulls moisture into the core fast, for a continuously dry feel.",
    badgeBg: "bg-teal-50 border-teal-200 text-teal-600",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Rash-Free Protection",
    description: "Dermatologically tested, hypoallergenic materials guard against chafing.",
    badgeBg: "bg-emerald-50 border-emerald-200 text-[#156035]",
  },
];

const rightFeatures = [
  {
    id: 4,
    icon: Wind,
    title: "Odorless Confidence",
    description: "Micro-porous odor control keeps you feeling fresh all day.",
    badgeBg: "bg-rose-50 border-rose-200 text-rose-600",
  },
  {
    id: 5,
    icon: Layers,
    title: "3D Gel Core Tech",
    description: "Super-absorbent polymer beads lock liquid into gel for 100% safety.",
    badgeBg: "bg-sky-50 border-sky-200 text-sky-600",
  },
  {
    id: 6,
    icon: Maximize2,
    title: "Extra-Wide XL Coverage",
    description: "320mm length with wider rear wings for maximum heavy-flow security.",
    badgeBg: "bg-amber-50 border-amber-200 text-amber-600",
  },
];

function LotusDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <div className="h-[1.5px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#156035]/40 to-[#156035]" />
      <svg
        viewBox="0 0 40 24"
        fill="none"
        className="w-8 h-6 text-[#156035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 2C20 2 15 9 15 15C15 17.8 17.2 20 20 20C22.8 20 25 17.8 25 15C25 9 20 2 20 2Z"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M20 20C13 20 6 15 6 11C6 11 11 11 15 15C17 17 19 19 20 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M20 20C27 20 34 15 34 11C25 15C23 17 21 19 20 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <div className="h-[1.5px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#156035]/40 to-[#156035]" />
    </div>
  );
}

export function ProductFeaturesSection() {
  return (
    <section
      id="features"
      className="relative w-full py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-[#FFF0F3]/70 via-[#FFF6F8] to-[#FFF0F3]/70 font-[family-name:var(--font-jakarta)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-zinc-900 font-[family-name:var(--font-playfair)]"
          >
            Features
          </motion.h2>

          <LotusDivider />
        </div>

        {/* ================= DESKTOP LAYOUT (3 Columns with Curved SVG Connectors) ================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-12 items-center relative py-6">
          {/* SVG Dotted Curved Connecting Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1200 500"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Left Top Line */}
            <path
              d="M 330 95 C 410 95, 420 160, 465 180"
              stroke="#E61C5D"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.45"
            />
            {/* Left Mid Line */}
            <path
              d="M 330 250 C 410 250, 420 250, 465 250"
              stroke="#0D9488"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.45"
            />
            {/* Left Bot Line */}
            <path
              d="M 330 405 C 410 405, 420 340, 465 320"
              stroke="#156035"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.45"
            />

            {/* Right Top Line */}
            <path
              d="M 870 95 C 790 95, 780 160, 735 180"
              stroke="#E11D48"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.45"
            />
            {/* Right Mid Line */}
            <path
              d="M 870 250 C 790 250, 780 250, 735 250"
              stroke="#0284C7"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.45"
            />
            {/* Right Bot Line */}
            <path
              d="M 870 405 C 790 405, 780 340, 735 320"
              stroke="#D97706"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.45"
            />
          </svg>

          {/* Left 3 Features */}
          <div className="col-span-4 flex flex-col gap-14 relative z-10">
            {leftFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  className="flex items-center text-right gap-4 group"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)] mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div
                    className={`w-14 h-14 shrink-0 rounded-full ${feat.badgeBg} border flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Card Container */}
          <div className="col-span-4 flex items-center justify-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[32px] p-8 shadow-[0_25px_60px_-15px_rgba(230,28,93,0.12)] border border-rose-100 flex flex-col items-center justify-center w-full max-w-[380px] text-center"
            >
              {/* Product Transparent Image with High-Res Brand Logo */}
              <div className="w-full flex items-center justify-center p-4 mb-6">
                <Image
                  src="/femmeflo-withoutbg.png"
                  alt="Femmeflo XL Sanitary Pad Showcase"
                  width={340}
                  height={220}
                  className="w-auto h-auto max-h-[210px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                  priority
                  unoptimized
                />
              </div>

              {/* Bottom Badge Pill */}
              <div className="inline-flex items-center justify-center bg-[#EBF6EF] text-[#156035] text-xs font-extrabold tracking-wider uppercase px-5 py-2 rounded-full border border-emerald-100 shadow-2xs">
                XL • 320MM EXTRA LONG
              </div>
            </motion.div>
          </div>

          {/* Right 3 Features */}
          <div className="col-span-4 flex flex-col gap-14 relative z-10">
            {rightFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  className="flex items-center text-left gap-4 group"
                >
                  <div
                    className={`w-14 h-14 shrink-0 rounded-full ${feat.badgeBg} border flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)] mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE & TABLET LAYOUT (Clean Touch-Friendly Card Grid) ================= */}
        <div className="flex lg:hidden flex-col gap-8 items-center">
          {/* Central Product Showcase Card */}
          <div className="w-full max-w-[340px] bg-white rounded-3xl p-6 shadow-md border border-rose-100 flex flex-col items-center text-center">
            <div className="w-full flex items-center justify-center p-2 mb-4">
              <Image
                src="/femmeflo-withoutbg.png"
                alt="Femmeflo XL Pad Showcase"
                width={300}
                height={180}
                className="w-auto max-h-[170px] object-contain drop-shadow-md"
                unoptimized
              />
            </div>
            <div className="inline-flex items-center justify-center bg-[#EBF6EF] text-[#156035] text-xs font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full border border-emerald-100">
              XL • 320MM EXTRA LONG
            </div>
          </div>

          {/* 6 Grid Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {[...leftFeatures, ...rightFeatures].map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.id}
                  className="bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-rose-100/80 shadow-2xs flex items-start gap-4"
                >
                  <div
                    className={`w-12 h-12 shrink-0 rounded-2xl ${feat.badgeBg} border flex items-center justify-center shadow-2xs`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 font-[family-name:var(--font-playfair)] mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductFeaturesSection;
