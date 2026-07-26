"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Check, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative w-full max-w-7xl mx-auto px-6 pt-2 pb-2 flex flex-col justify-between overflow-hidden font-[family-name:var(--font-jakarta)]">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-[5%] w-[450px] h-[450px] bg-emerald-200/35 rounded-full blur-3xl pointer-events-none -z-10 animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-[25%] w-[350px] h-[350px] bg-pink-300/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-1 items-center py-2">
        {/* Left Column: Copy & CTAs */}
        <div className="flex flex-col items-start z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF6EF] border border-[#CCE9D7] text-xs sm:text-sm font-medium text-[#166534] shadow-xs">
            <Sparkles className="w-4 h-4 text-[#156035]" />
            <span>Glow • Trusted Feminine Care</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
            Feel{" "}
            <span className="font-[family-name:var(--font-playfair)] italic font-semibold text-[#156035]">
              Fresh.
            </span>
            <br />
            Feel{" "}
            <span className="font-[family-name:var(--font-playfair)] italic font-semibold text-[#E61C5D]">
              Free.
            </span>
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg max-w-md leading-relaxed">
            Experience superior comfort, dependable leak protection, and
            confidence throughout your day with Femmeflo XL sanitary pads.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#buy"
              className="bg-gradient-to-r from-[#F43F5E] via-[#E61C5D] to-[#D91B54] text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-[0_8px_25px_rgba(230,28,93,0.4)] hover:shadow-[0_10px_30px_rgba(230,28,93,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Buy Now
            </Link>

            {/* Explore Product — sliding-arrow button */}
            <Link
              href="#explore"
              className="group relative inline-flex items-center gap-3 pl-7 pr-2.5 py-2.5 rounded-full border-2 border-zinc-900 text-zinc-900 font-semibold text-base transition-colors duration-300 hover:bg-zinc-900 hover:text-white active:scale-[0.98]"
            >
              <span>Explore Product</span>
              <span className="relative w-9 h-9 shrink-0 rounded-full bg-zinc-900 text-white flex items-center justify-center overflow-hidden shadow-sm transition-colors duration-300 group-hover:bg-white group-hover:text-zinc-900">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </span>
            </Link>
          </div>

          {/* Key Feature Checks */}
          <div className="pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-zinc-700">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#C59B27] stroke-[3]" />
              <span>12 Hour Protection</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#C59B27] stroke-[3]" />
              <span>Leak Lock</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#C59B27] stroke-[3]" />
              <span>Cotton Soft</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#C59B27] stroke-[3]" />
              <span>Skin Friendly</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Product Showcase with Handheld Girl */}
        <div className="relative flex items-center justify-center w-full">
          <div className="relative w-full max-w-[600px] aspect-[16/11] sm:aspect-[16/10] rounded-3xl bg-gradient-to-br from-white/90 via-rose-50/40 to-emerald-50/20 backdrop-blur-xl border border-white/90 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden min-h-[340px] sm:min-h-[400px]">
            {/* Ambient Inner Glow Orb */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#E61C5D]/18 via-rose-200/20 to-[#156035]/12 blur-2xl pointer-events-none" />

            {/* Handheld Girl Image - Full uncropped view */}
            <div className="absolute inset-0 p-2 flex items-end justify-center pointer-events-none select-none">
              <Image
                src="/handheldgirl.png"
                alt="Woman holding Femmeflo product"
                fill
                className="object-contain object-bottom"
                priority
                unoptimized
              />
            </div>

            {/* Premium Floating Badge (Top Left) */}
            <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md border border-zinc-200/80 px-3.5 py-2 rounded-2xl shadow-md flex items-center gap-2.5 pointer-events-none select-none">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E61C5D] animate-ping" />
              <span className="text-xs font-bold text-zinc-800">XL Extra Long • 6 Units</span>
            </div>

            {/* Anchor Target for Floating Product to land directly onto her open palm */}
            <div
              id="hero-product-anchor"
              className="absolute w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] pointer-events-none transform translate-x-[22%] translate-y-[12%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}