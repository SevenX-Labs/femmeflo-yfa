"use client";

import React from "react";
import Link from "next/link";
import { ModelViewer } from "./3d-model-viewer";

export function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-4 pb-16 flex flex-col justify-between min-h-[calc(100vh-100px)] overflow-hidden font-[family-name:var(--font-jakarta)]">
      {/* Background Soft Glow Orbs with inline Tailwind blur & colors */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-[5%] w-[450px] h-[450px] bg-emerald-200/35 rounded-full blur-3xl pointer-events-none -z-10 animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-[25%] w-[350px] h-[350px] bg-pink-300/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-6">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start z-10 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF6EF] border border-[#CCE9D7] text-xs sm:text-sm font-medium text-[#166534] shadow-xs">
            <span className="text-base leading-none">🌱</span>
            <span>Trusted Feminine Care</span>
          </div>

          {/* Main Headline */}
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

          {/* Description */}
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
            <Link
              href="#explore"
              className="border-2 border-zinc-800 text-zinc-900 font-semibold text-base px-8 py-3.5 rounded-full hover:bg-zinc-900 hover:text-white transition-all duration-200 active:scale-[0.98]"
            >
              Explore Product
            </Link>
          </div>

          {/* Key Feature Checks */}
          <div className="pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-zinc-700">
            <div className="flex items-center gap-1.5">
              <span className="text-[#C59B27] font-bold">✓</span>
              <span>12 Hour Protection</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#C59B27] font-bold">✓</span>
              <span>Leak Lock</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#C59B27] font-bold">✓</span>
              <span>Cotton Soft</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#C59B27] font-bold">✓</span>
              <span>Skin Friendly</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Model Box */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
          <ModelViewer />
        </div>
      </div>

      {/* Bottom Center: Scroll to Explore */}
      <div className="flex items-center justify-center gap-2 pt-6 pb-2 text-zinc-800 z-20">
        <div className="w-5 h-8 border-2 border-zinc-800 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-zinc-800 rounded-full animate-bounce" />
        </div>
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          Scroll to Explore
        </span>
      </div>
    </section>
  );
}
