"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowUpRight, ShieldCheck, Lock, Feather, Leaf, Mouse } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full max-w-7xl mx-auto px-6 pt-4 pb-8 flex flex-col justify-between overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Soft Background Radial Glow Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-rose-200/35 rounded-full blur-[100px] pointer-events-none -z-10 animate-[pulse_7s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-[5%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[110px] pointer-events-none -z-10 animate-[pulse_9s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-[20%] w-[420px] h-[420px] bg-pink-200/30 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center py-4">
        {/* Left Column: Copy & CTAs */}
        <div className="flex flex-col items-start z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF6EF]/80 backdrop-blur-sm border border-[#CCE9D7] text-xs sm:text-sm font-medium text-[#166534] shadow-xs">
            <Sparkles className="w-4 h-4 text-[#156035]" />
            <span>Glow • Trusted Feminine Care</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.08]">
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
            confidence throughout your day with <strong className="text-zinc-900 font-semibold">Femmeflo XL</strong> sanitary pads.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#buy"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F43F5E] via-[#E61C5D] to-[#D91B54] text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-[0_10px_28px_rgba(230,28,93,0.35)] hover:shadow-[0_14px_35px_rgba(230,28,93,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Buy Now</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </Link>

            <Link
              href="#explore"
              className="group relative inline-flex items-center gap-3 pl-7 pr-2.5 py-2.5 rounded-full border-2 border-zinc-900 text-zinc-900 font-semibold text-base transition-all duration-300 hover:bg-zinc-900 hover:text-white active:scale-[0.98]"
            >
              <span>Explore Product</span>
              <span className="relative w-9 h-9 shrink-0 rounded-full bg-zinc-900 text-white flex items-center justify-center overflow-hidden shadow-sm transition-colors duration-300 group-hover:bg-white group-hover:text-zinc-900">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-[200%] group-hover:-translate-y-[200%]" />
                <ArrowUpRight className="absolute w-4 h-4 -translate-x-[200%] translate-y-[200%] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </span>
            </Link>
          </div>

          {/* Key Feature Cards Grid */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            <div className="bg-white/80 backdrop-blur-md border border-zinc-200/70 p-3 rounded-2xl shadow-xs flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E61C5D]" />
              </div>
              <span className="text-xs font-bold text-zinc-900">12 Hour</span>
              <span className="text-[11px] text-zinc-500">Protection</span>
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-zinc-200/70 p-3 rounded-2xl shadow-xs flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-1.5">
                <Lock className="w-4 h-4 text-[#156035]" />
              </div>
              <span className="text-xs font-bold text-zinc-900">Leak Lock</span>
              <span className="text-[11px] text-zinc-500">Technology</span>
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-zinc-200/70 p-3 rounded-2xl shadow-xs flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-1.5">
                <Feather className="w-4 h-4 text-[#E61C5D]" />
              </div>
              <span className="text-xs font-bold text-zinc-900">Cotton Soft</span>
              <span className="text-[11px] text-zinc-500">Feel</span>
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-zinc-200/70 p-3 rounded-2xl shadow-xs flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-1.5">
                <Leaf className="w-4 h-4 text-[#156035]" />
              </div>
              <span className="text-xs font-bold text-zinc-900">Skin Friendly</span>
              <span className="text-[11px] text-zinc-500">& Safe</span>
            </div>
          </div>
        </div>

        {/* Right Column: Natural Uncropped Brand Ambassador with Glowing Background Halo */}
        <div className="relative flex items-center justify-center w-full min-h-[460px] lg:min-h-[540px]">
          {/* Background Soft Pink/Green Radial Glow Halo */}
          <div className="absolute w-[440px] sm:w-[520px] h-[440px] sm:h-[520px] rounded-full bg-gradient-to-tr from-rose-200/60 via-pink-100/50 to-emerald-100/40 blur-3xl pointer-events-none -z-10" />

          {/* Full Uncropped Woman Image */}
          <div className="relative w-full h-[440px] sm:h-[520px] flex items-center justify-center">
            <Image
              src="/handheldgirl.png"
              alt="Femmeflo Brand Ambassador"
              fill
              className="object-contain object-center pointer-events-none select-none drop-shadow-md"
              priority
              unoptimized
            />

            {/* Anchor Target for Floating Product to land directly onto her open palm */}
            <div
              id="hero-product-anchor"
              className="absolute w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] pointer-events-none transform translate-x-[22%] translate-y-[6%]"
            />
          </div>
        </div>
      </div>

      {/* Scroll to Discover Indicator at Bottom */}
      <div className="w-full flex items-center justify-center pt-6 text-zinc-400 text-xs font-medium gap-2 pointer-events-none select-none">
        <Mouse className="w-4 h-4 animate-bounce text-zinc-500" />
        <span>Scroll to Discover</span>
      </div>
    </section>
  );
}