"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Droplets,
  Feather,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const hygieneCards = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Direct Value Standard",
    subtitle: "Accessible Care Model",
    description:
      "Crafted without bloated middleman fees or excessive retail markups. Delivers uncompromised manufacturing precision directly at a fair ₹40 price point.",
    highlights: ["Direct-to-consumer pricing", "Transparent ₹40 pack value"],
    badgeColor: "from-emerald-500/10 to-emerald-500/20 text-[#156035]",
    iconColor: "text-[#156035]",
  },
  {
    id: 2,
    icon: HeartHandshake,
    title: "Skin Sensitivity Guard",
    subtitle: "Hypoallergenic Formulated",
    description:
      "Engineered to eliminate friction, chafing, and redness during active movement. Features a silken top layer tailored for delicate skin types.",
    highlights: ["Dermat-tested formulation", "Zero synthetic additives or dyes"],
    badgeColor: "from-rose-500/10 to-rose-500/20 text-[#E61C5D]",
    iconColor: "text-[#E61C5D]",
  },
  {
    id: 3,
    icon: Droplets,
    title: "Polymer Fluid Matrix",
    subtitle: "Instant Gel Conversion",
    description:
      "High-capacity micro-beads trap heavy flow into solid gel in seconds. Prevents surface dampness and liquid re-wetting throughout extended wear.",
    highlights: ["Rapid fluid encapsulation", "Continuous dry top surface"],
    badgeColor: "from-teal-500/10 to-teal-500/20 text-teal-700",
    iconColor: "text-teal-700",
  },
  {
    id: 4,
    icon: Feather,
    title: "Ergonomic Side Anchors",
    subtitle: "Quad-Wing Stability",
    description:
      "Flexible side wings wrap securely around underwear contours to prevent lateral displacement and side staining during daytime activities.",
    highlights: ["Quad-anchor wing design", "Stays firmly in alignment"],
    badgeColor: "from-amber-500/10 to-amber-500/20 text-amber-700",
    iconColor: "text-amber-700",
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Ventilated Airflow Grid",
    subtitle: "Micro-Porous Layer",
    description:
      "Breathable backsheet matrix permits continuous air passage while neutralizing period odors to maintain a clean feeling all day long.",
    highlights: ["Micro-channel ventilation", "Active odor trapping barrier"],
    badgeColor: "from-pink-500/10 to-pink-500/20 text-[#E61C5D]",
    iconColor: "text-[#E61C5D]",
  },
];

export function RedefiningHygiene() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSlide = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const scrollAmount = 360;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hygiene"
      className="relative z-20 w-full bg-gradient-to-b from-[#FFF0F3] via-[#FFF6F8] to-[#FFF0F3] font-[family-name:var(--font-jakarta)] py-16 sm:py-24 overflow-hidden border-b border-pink-100"
    >
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-8 sm:mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#156035] uppercase mb-1.5"
        >
          Redefining Hygiene
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.15]"
        >
          Premium Protection &amp;{" "}
          <span className="font-[family-name:var(--font-playfair)] italic font-semibold text-[#156035]">
            Unmatched Comfort
          </span>
        </motion.h2>
      </div>

      {/* Carousel Track Container with Side Arrow Controls on Left & Right Sides */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Side Floating Navigation Arrow */}
        <button
          onClick={() => handleSlide("left")}
          aria-label="Slide previous cards"
          className="absolute -left-2 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white backdrop-blur-md border-2 border-[#156035] text-[#156035] shadow-2xl hover:bg-[#156035] hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Right Side Floating Navigation Arrow */}
        <button
          onClick={() => handleSlide("right")}
          aria-label="Slide next cards"
          className="absolute -right-2 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#156035] border-2 border-[#156035] text-white shadow-2xl hover:bg-emerald-800 hover:border-emerald-800 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Scrollable Track */}
        <div
          ref={containerRef}
          className="w-full overflow-x-auto overscroll-x-contain touch-pan-x py-4 px-2 sm:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-5 sm:gap-7 w-max items-stretch pb-4">
            {hygieneCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="w-[290px] sm:w-[350px] lg:w-[370px] shrink-0 bg-white/95 backdrop-blur-xl border border-rose-100/90 rounded-3xl p-6 sm:p-7 shadow-[0_15px_35px_-10px_rgba(230,28,93,0.08)] hover:shadow-[0_25px_50px_-10px_rgba(230,28,93,0.18)] hover:border-[#156035]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Icon Pill */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.badgeColor} flex items-center justify-center border border-white/60 shadow-xs transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className={`w-6 h-6 ${card.iconColor}`} />
                      </div>
                      <span className="text-xs font-extrabold text-zinc-400 tracking-widest">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Subtitle Badge */}
                    <span className="inline-block text-xs font-bold tracking-wider text-[#156035] bg-[#EBF6EF] px-3 py-1 rounded-full mb-3">
                      {card.subtitle}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-[#156035] transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {card.description}
                    </p>

                    {/* Key Highlights Bullet List */}
                    {card.highlights && (
                      <div className="mt-4 pt-3.5 border-t border-rose-100/80 space-y-1.5">
                        {card.highlights.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#156035] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Decorative Bottom Bar */}
                  <div className="mt-6 pt-4 border-t border-rose-100/60 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-400 group-hover:text-[#156035] transition-colors">
                      Femmeflo Care Tech
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#156035]/30 group-hover:bg-[#156035] group-hover:scale-125 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RedefiningHygiene;
