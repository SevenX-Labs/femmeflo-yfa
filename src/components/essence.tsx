"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Smile, Zap, ArrowRight, CheckCircle2, User, MapPin, Brain, Activity, Sparkles, Star } from "lucide-react";

export function EssenceSection() {
  return (
    <section
      id="essence"
      className="relative w-full py-24 lg:py-32 bg-gradient-to-b from-[#EAF5EE]/40 via-white to-[#EAF5EE]/40 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Background Decorative Ambient Radial Halo Orbs */}
      <div className="absolute top-10 left-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-rose-100/30 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-rose-200/40 via-pink-100/30 to-emerald-200/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Section 1: Market Positioning (Page 3 of PDF) */}
        <motion.div
          className="text-center mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#156035] bg-[#EAF5EE] px-3.5 py-1 rounded-full border border-[#CCE9D7] inline-block mb-3">
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
        <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center w-full max-w-5xl mb-28">
          
          {/* Card 1: Affordable Trusted Segment */}
          <motion.div
            className="md:col-span-5 bg-white/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-emerald-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 relative overflow-hidden group"
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
          <div className="md:col-span-1 flex flex-col items-center justify-center gap-2 my-2 md:my-0">
            <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 text-[#E61C5D] flex items-center justify-center shadow-md rotate-90 md:rotate-0">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>

          {/* Card 2: Smart Choice Protection */}
          <motion.div
            className="md:col-span-5 bg-white/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-rose-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 relative overflow-hidden group"
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

        {/* Section 2: Essence & Personality (Page 4 of PDF) */}
        <motion.div
          className="w-full max-w-5xl bg-gradient-to-br from-white via-[#EAF5EE]/30 to-rose-50/20 border-2 border-white rounded-[2.5rem] p-8 sm:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.05)] flex flex-col items-center text-center mb-28 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#156035] bg-white px-4 py-1 rounded-full border border-zinc-200/80 shadow-2xs mb-6">
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
            
            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-3xl shadow-sm border border-rose-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 text-[#E61C5D] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 fill-[#E61C5D]" />
              </div>
              <span className="font-bold text-zinc-900 text-lg mb-1">Caring</span>
              <span className="text-xs text-zinc-500">Gentle & compassionate care</span>
            </div>

            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-3xl shadow-sm border border-emerald-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#156035] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <span className="font-bold text-zinc-900 text-lg mb-1">Confident</span>
              <span className="text-xs text-zinc-500">Dependable 24/7 security</span>
            </div>

            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-3xl shadow-sm border border-yellow-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-yellow-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smile className="w-8 h-8" />
              </div>
              <span className="font-bold text-zinc-900 text-lg mb-1">Approachable</span>
              <span className="text-xs text-zinc-500">Warm & supportive voice</span>
            </div>

            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-3xl shadow-sm border border-rose-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 text-[#E61C5D] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 fill-[#E61C5D]" />
              </div>
              <span className="font-bold text-zinc-900 text-lg mb-1">Energetic</span>
              <span className="text-xs text-zinc-500">Empowering daily movement</span>
            </div>

          </div>
        </motion.div>

        {/* Section 3: Target Audience / Modern Woman (Page 5 of PDF) */}
        <motion.div
          className="w-full max-w-6xl bg-gradient-to-br from-white via-rose-50/20 to-emerald-50/20 rounded-[2.5rem] p-8 sm:p-14 border-2 border-white shadow-[0_25px_60px_rgba(0,0,0,0.06)] relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Decorative Ambient Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#156035] bg-[#EAF5EE] px-4 py-1.5 rounded-full border border-[#CCE9D7] inline-block mb-3 shadow-2xs">
              Who We Serve
            </span>
            <h3 className="text-4xl sm:text-5xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)]">
              The Modern Woman
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Empowering active, busy women across all regions and walks of life in India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Primary Profile */}
            <div className="p-7 bg-white rounded-3xl border border-rose-100/80 hover:border-[#E61C5D] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-2 relative overflow-hidden">
              <div className="w-full h-1 bg-gradient-to-r from-rose-400 to-[#E61C5D] absolute top-0 left-0" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-rose-50 text-[#E61C5D] flex items-center justify-center group-hover:bg-[#E61C5D] group-hover:text-white transition-all duration-300 shadow-xs">
                    <User className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100/70 text-[#E61C5D] px-2.5 py-1 rounded-full">
                    Everyday Care
                  </span>
                </div>
                <h4 className="font-bold text-zinc-900 text-xl mb-2 font-[family-name:var(--font-playfair)] group-hover:text-[#E61C5D] transition-colors">
                  Primary Profile
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  All women seeking dependable, high-performance hygiene solutions during their period cycle.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-rose-50 flex items-center gap-1.5 text-[11px] font-bold text-[#E61C5D]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Dependable Hygiene</span>
              </div>
            </div>

            {/* 2. Geographic Reach */}
            <div className="p-7 bg-white rounded-3xl border border-emerald-100/80 hover:border-[#156035] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-2 relative overflow-hidden">
              <div className="w-full h-1 bg-gradient-to-r from-emerald-400 to-[#156035] absolute top-0 left-0" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#156035] flex items-center justify-center group-hover:bg-[#156035] group-hover:text-white transition-all duration-300 shadow-xs">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100/80 text-[#156035] px-2.5 py-1 rounded-full">
                    Pan-India
                  </span>
                </div>
                <h4 className="font-bold text-zinc-900 text-xl mb-2 font-[family-name:var(--font-playfair)] group-hover:text-[#156035] transition-colors">
                  Geographic Reach
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Residing in Rural, Urban, and Semi-urban markets across India seeking quality hygiene.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-emerald-50 flex items-center gap-1.5 text-[11px] font-bold text-[#156035]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Nationwide Access</span>
              </div>
            </div>

            {/* 3. Value Mindset */}
            <div className="p-7 bg-white rounded-3xl border border-yellow-100/80 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-2 relative overflow-hidden">
              <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500 absolute top-0 left-0" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-xs">
                    <Brain className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-yellow-100/80 text-amber-800 px-2.5 py-1 rounded-full">
                    Smart Choice
                  </span>
                </div>
                <h4 className="font-bold text-zinc-900 text-xl mb-2 font-[family-name:var(--font-playfair)] group-hover:text-amber-600 transition-colors">
                  Value Mindset
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Value-conscious consumers who refuse to compromise on high quality, safety, and comfort.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-yellow-50 flex items-center gap-1.5 text-[11px] font-bold text-amber-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Compromise</span>
              </div>
            </div>

            {/* 4. Active Lifestyle */}
            <div className="p-7 bg-white rounded-3xl border border-rose-100/80 hover:border-[#E61C5D] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-2 relative overflow-hidden">
              <div className="w-full h-1 bg-gradient-to-r from-pink-400 to-[#E61C5D] absolute top-0 left-0" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-rose-50 text-[#E61C5D] flex items-center justify-center group-hover:bg-[#E61C5D] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Activity className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100/70 text-[#E61C5D] px-2.5 py-1 rounded-full">
                    24/7 Confidence
                  </span>
                </div>
                <h4 className="font-bold text-zinc-900 text-xl mb-2 font-[family-name:var(--font-playfair)] group-hover:text-[#E61C5D] transition-colors">
                  Active Lifestyle
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Active, busy women needing total reassurance during work, study, and daily movement.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-rose-50 flex items-center gap-1.5 text-[11px] font-bold text-[#E61C5D]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Unrestricted Freedom</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default EssenceSection;
