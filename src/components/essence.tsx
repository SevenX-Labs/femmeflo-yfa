"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Smile, Zap, ArrowRight, CheckCircle2, User, MapPin, Brain, Activity } from "lucide-react";

export function EssenceSection() {
  return (
    <section
      id="essence"
      className="relative w-full py-20 lg:py-28 bg-[#EAF5EE]/50 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Section 1: Market Positioning (Page 3 of PDF) */}
        <motion.div
          className="text-center mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#156035]">
            Brand Identity
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)] mt-2">
            Market Positioning
          </h2>
          <div className="w-14 h-1 bg-[#E61C5D] rounded-full mx-auto mt-3" />
        </motion.div>

        {/* 2 Positioning Cards with Arrow */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center w-full max-w-5xl mb-24">
          
          {/* Card 1: Affordable Trusted Segment */}
          <motion.div
            className="md:col-span-5 bg-white rounded-3xl p-8 border-t-4 border-emerald-600 border-x border-b border-zinc-200/80 shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 rounded-full bg-emerald-100/80 text-emerald-700 flex items-center justify-center mb-5">
              <Heart className="w-7 h-7 fill-emerald-600/20" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)] mb-3">
              Affordable Trusted Segment
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Serving quality-seeking women at the right price point, bridging the gap between premium and budget.
            </p>
          </motion.div>

          {/* Arrow */}
          <div className="md:col-span-1 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs rotate-90 md:rotate-0">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>

          {/* Card 2: Smart Choice Protection */}
          <motion.div
            className="md:col-span-5 bg-white rounded-3xl p-8 border-t-4 border-[#E61C5D] border-x border-b border-zinc-200/80 shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 rounded-full bg-rose-100 text-[#E61C5D] flex items-center justify-center mb-5">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)] mb-3">
              &ldquo;Smart Choice Protection&rdquo;
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              The intelligent solution for women who value high performance without the premium markup.
            </p>
          </motion.div>

        </div>

        {/* Section 2: Essence & Personality (Page 4 of PDF) */}
        <motion.div
          className="text-center mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)]">
            Essence & Personality
          </h2>
          <div className="w-14 h-1 bg-[#E61C5D] rounded-full mx-auto mt-3" />
        </motion.div>

        {/* Quote */}
        <motion.p
          className="text-2xl sm:text-3xl text-center max-w-3xl font-[family-name:var(--font-playfair)] text-[#156035] italic font-normal mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          &ldquo;Our essence is{" "}
          <span className="text-[#E61C5D] font-bold not-italic">Period Freedom</span>
          &mdash; the ability to work, move, and live normally.&rdquo;
        </motion.p>

        <p className="text-zinc-600 text-sm sm:text-base text-center max-w-2xl mb-12">
          Guided by our motto &ldquo;Feel fresh feel free&rdquo;, we embody a personality that is warm, supportive, and alive.
        </p>

        {/* 4 Personality Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-4xl mb-24">
          
          <div className="flex flex-col items-center text-center bg-white p-5 rounded-2xl shadow-xs border border-zinc-200/70">
            <div className="w-14 h-14 rounded-full bg-rose-100 text-[#E61C5D] flex items-center justify-center mb-3">
              <Heart className="w-7 h-7 fill-[#E61C5D]" />
            </div>
            <span className="font-bold text-zinc-900 text-base">Caring</span>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-5 rounded-2xl shadow-xs border border-zinc-200/70">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#156035] flex items-center justify-center mb-3">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <span className="font-bold text-zinc-900 text-base">Confident</span>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-5 rounded-2xl shadow-xs border border-zinc-200/70">
            <div className="w-14 h-14 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center mb-3">
              <Smile className="w-7 h-7" />
            </div>
            <span className="font-bold text-zinc-900 text-base">Approachable</span>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-5 rounded-2xl shadow-xs border border-zinc-200/70">
            <div className="w-14 h-14 rounded-full bg-rose-100 text-[#E61C5D] flex items-center justify-center mb-3">
              <Zap className="w-7 h-7 fill-[#E61C5D]" />
            </div>
            <span className="font-bold text-zinc-900 text-base">Energetic</span>
          </div>

        </div>

        {/* Section 3: Target Audience / Modern Woman (Page 5 of PDF) */}
        <motion.div
          className="w-full max-w-5xl bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#156035]">
              Who We Serve
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)] mt-1">
              Target Audience
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-zinc-200/60 flex flex-col items-start">
              <User className="w-6 h-6 text-[#E61C5D] mb-2" />
              <h4 className="font-bold text-zinc-900 text-base mb-1">Primary Profile</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                All women seeking dependable, high-performance hygiene solutions.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-zinc-200/60 flex flex-col items-start">
              <MapPin className="w-6 h-6 text-[#156035] mb-2" />
              <h4 className="font-bold text-zinc-900 text-base mb-1">Location</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Residing in Rural, Urban, and Semi-urban markets across India.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-zinc-200/60 flex flex-col items-start">
              <Brain className="w-6 h-6 text-[#E5A914] mb-2" />
              <h4 className="font-bold text-zinc-900 text-base mb-1">Mindset</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Value-conscious consumers who refuse to compromise on high quality and safety.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-zinc-200/60 flex flex-col items-start">
              <Activity className="w-6 h-6 text-[#E61C5D] mb-2" />
              <h4 className="font-bold text-zinc-900 text-base mb-1">Lifestyle</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Active, busy women needing reassurance during work, study, and daily movement.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default EssenceSection;
