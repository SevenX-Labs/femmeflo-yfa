"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Shield, Moon, Star, Zap } from "lucide-react";

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative w-full py-20 lg:py-28 bg-[#FAF8F5] overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Product Roadmap
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)] mt-2">
            Phase 1: Cotton Soft <span className="text-zinc-500 font-normal text-2xl sm:text-3xl">(HAT)</span>
          </h2>
          <div className="w-16 h-1 bg-[#E61C5D] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Phase 1: 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-20">
          
          {/* Card 1: Fresh Day 240mm */}
          <motion.div
            className="bg-white rounded-3xl p-6 border border-zinc-200/80 shadow-sm flex flex-col items-center text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-full h-1.5 bg-emerald-500 absolute top-0 left-0" />
            <div className="w-14 h-14 rounded-full bg-emerald-100/70 text-[#156035] flex items-center justify-center mb-4 mt-2">
              <Sun className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)]">
              Fresh Day
            </h3>
            <span className="inline-block bg-emerald-100/80 text-[#156035] font-bold text-xs px-3 py-1 rounded-full my-3">
              240mm
            </span>
            <div className="mt-auto pt-6 border-t border-zinc-100 w-full">
              <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                Best For
              </p>
              <p className="text-xs font-bold text-zinc-800">Regular Day Use</p>
              <p className="text-xs text-zinc-500">Light to Medium Flow</p>
            </div>
          </motion.div>

          {/* Card 2: XL Protect 280mm (Hero Product) */}
          <motion.div
            className="bg-rose-50/40 rounded-3xl p-6 border-2 border-[#E61C5D] shadow-md flex flex-col items-center text-center relative overflow-hidden transform lg:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#E5A914] text-zinc-950 font-extrabold text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-xs mb-2">
              Hero Product
            </div>
            <div className="w-14 h-14 rounded-full bg-rose-100 text-[#E61C5D] flex items-center justify-center mb-4 mt-1">
              <Shield className="w-7 h-7 fill-[#E61C5D]/20" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)]">
              XL Protect
            </h3>
            <span className="inline-block bg-[#E61C5D] text-white font-bold text-xs px-3 py-1 rounded-full my-3">
              280mm
            </span>
            <div className="mt-auto pt-6 border-t border-rose-200/50 w-full">
              <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                Best For
              </p>
              <p className="text-xs font-bold text-zinc-800">Extended Use</p>
              <p className="text-xs text-zinc-500">Maximum Security</p>
            </div>
          </motion.div>

          {/* Card 3: Night Secure 320mm */}
          <motion.div
            className="bg-white rounded-3xl p-6 border border-zinc-200/80 shadow-sm flex flex-col items-center text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-full h-1.5 bg-purple-600 absolute top-0 left-0" />
            <div className="w-14 h-14 rounded-full bg-purple-100/80 text-purple-700 flex items-center justify-center mb-4 mt-2">
              <Moon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)]">
              Night Secure
            </h3>
            <span className="inline-block bg-purple-100/90 text-purple-800 font-bold text-xs px-3 py-1 rounded-full my-3">
              320mm
            </span>
            <div className="mt-auto pt-6 border-t border-zinc-100 w-full">
              <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                Best For
              </p>
              <p className="text-xs font-bold text-zinc-800">Heavy Flow</p>
              <p className="text-xs text-zinc-500">Night Protection</p>
            </div>
          </motion.div>

          {/* Card 4: Overnight Max Extra-Long */}
          <motion.div
            className="bg-white rounded-3xl p-6 border border-zinc-200/80 shadow-sm flex flex-col items-center text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-full h-1.5 bg-blue-600 absolute top-0 left-0" />
            <div className="w-14 h-14 rounded-full bg-blue-100/80 text-blue-700 flex items-center justify-center mb-4 mt-2">
              <Star className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)]">
              Overnight Max
            </h3>
            <span className="inline-block bg-blue-100/90 text-blue-800 font-bold text-xs px-3 py-1 rounded-full my-3">
              Extra-Long
            </span>
            <div className="mt-auto pt-6 border-t border-zinc-100 w-full">
              <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                Best For
              </p>
              <p className="text-xs font-bold text-zinc-800">Premium Coverage</p>
              <p className="text-xs text-zinc-500">Uninterrupted Sleep</p>
            </div>
          </motion.div>

        </div>

        {/* Phase 2: Premium Collection */}
        <motion.div
          className="w-full max-w-2xl bg-gradient-to-br from-white via-purple-50/30 to-rose-50/20 border border-purple-200/60 rounded-3xl p-8 text-center relative overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#E61C5D] mb-1 inline-block">
            Phase 2: Premium Collection
          </span>
          <div className="absolute top-4 right-4 bg-purple-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
            Coming Soon
          </div>
          
          <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto my-4">
            <Zap className="w-8 h-8" />
          </div>

          <h3 className="text-3xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)]">
            Femmeflo Ultra Thin
          </h3>
          <span className="inline-block bg-purple-100 text-purple-950 font-bold text-xs px-4 py-1 rounded-full my-3">
            Slim & Discreet
          </span>

          <div className="mt-4 pt-4 border-t border-purple-100 text-xs text-zinc-600 flex flex-wrap items-center justify-center gap-6 font-medium">
            <span>👤 Fitted Clothing</span>
            <span>⚡ Zero-Feel Comfort</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default RoadmapSection;
