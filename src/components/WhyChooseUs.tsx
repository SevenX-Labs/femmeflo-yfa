"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Feather, Clock, HeartHandshake, Sparkles, CheckCircle } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "12-Hour Leak Lock Protection",
      description: "Advanced super-absorbent core traps moisture instantly, keeping you fresh, dry, and worry-free all day and night.",
      color: "bg-[#156035]",
      badge: "Zero Leaks",
    },
    {
      icon: Feather,
      title: "Cloud-Soft & Skin Friendly",
      description: "Hypoallergenic cottony-soft top sheet engineered to prevent rashes, chafing, and skin irritation.",
      color: "bg-[#E61C5D]",
      badge: "Rash Free",
    },
    {
      icon: ShieldCheck,
      title: "280mm Extended Wear Wings",
      description: "Extra-long coverage with ergonomic double wings that stay firmly in place during active movement and sleep.",
      color: "bg-[#156035]",
      badge: "Extra Long",
    },
    {
      icon: HeartHandshake,
      title: "Smart Choice Value (₹40 Pack)",
      description: "Delivering high-performance hygiene and premium quality at an accessible price without unnecessary markup.",
      color: "bg-[#E5A914]",
      badge: "Best Value",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative w-full bg-gradient-to-b from-[#FAF0E6] via-[#FDF6ED] to-[#F9EFE2] border-b border-orange-200/50 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-amber-200/45 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#156035] bg-[#EAF5EE] px-3.5 py-1 rounded-full border border-[#CCE9D7] inline-block mb-3">
            Why Women Love Femmeflo
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)]">
            Why Choose Femmeflo?
          </h2>
          <div className="w-16 h-1 bg-[#E61C5D] rounded-full mx-auto mt-4" />
          <p className="text-zinc-600 text-base sm:text-lg mt-4 leading-relaxed">
            Engineered with advanced absorption technology and skin-loving soft materials to give you complete period freedom.
          </p>
        </motion.div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white/70 backdrop-blur-2xl rounded-3xl p-7 border-2 border-white/90 shadow-[0_15px_45px_rgba(0,0,0,0.04)] flex flex-col justify-between relative overflow-hidden group hover:shadow-xl hover:bg-white/85 transition-all duration-300 transform hover:-translate-y-1.5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-100 text-zinc-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)] mb-3 group-hover:text-[#E61C5D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-zinc-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Dermatologically Tested</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Highlight Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#156035] via-emerald-800 to-[#156035] text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)]">
                100% Quality & Safety Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100/90 mt-0.5">
                0% toxins, 0% harsh chemicals, and 100% skin compatibility.
              </p>
            </div>
          </div>

          <a
            href="#products"
            className="shrink-0 bg-[#E61C5D] hover:bg-rose-600 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-md transform hover:scale-105"
          >
            Explore Product Specs
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
