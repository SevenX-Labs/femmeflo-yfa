"use client";

import React from "react";
import Link from "next/link";
import FloatingProduct from "./FloatingProduct";

export function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-4 pb-16 flex flex-col justify-between min-h-[calc(100vh-100px)] overflow-hidden font-[family-name:var(--font-jakarta)]">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-[5%] w-[450px] h-[450px] bg-emerald-200/35 rounded-full blur-3xl pointer-events-none -z-10 animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-[25%] w-[350px] h-[350px] bg-pink-300/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto py-6">
        {/* Left Column: Copy & CTAs */}
        <div className="flex flex-col items-start z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF6EF] border border-[#CCE9D7] text-xs sm:text-sm font-medium text-[#166534] shadow-xs">
            <span className="text-base leading-none">🌸</span>
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
            {/* Explore Product — sliding-arrow button */}
            <Link
              href="#explore"
              className="group relative inline-flex items-center gap-3 pl-7 pr-2.5 py-2.5 rounded-full border-2 border-zinc-900 text-zinc-900 font-semibold text-base transition-colors duration-300 hover:bg-zinc-900 hover:text-white active:scale-[0.98]"
            >
              <span>Explore Product</span>
              <span className="relative w-9 h-9 shrink-0 rounded-full bg-zinc-900 text-white flex items-center justify-center overflow-hidden shadow-sm transition-colors duration-300 group-hover:bg-white group-hover:text-zinc-900">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-[200%] group-hover:-translate-y-[200%]"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute w-4 h-4 -translate-x-[200%] translate-y-[200%] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
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

        {/* Right Column: Product */}
        <div className="relative flex flex-col items-center justify-center">
          <FloatingProduct />
        </div>
      </div>
    </section>
  );
}