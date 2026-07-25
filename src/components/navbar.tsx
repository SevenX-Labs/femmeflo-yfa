"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Products", href: "#products" },
  { name: "Quality", href: "#quality" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-50 font-[family-name:var(--font-jakarta)]">
      {/* 1. Left: Brand Logo */}
      <Link href="/" className="flex items-center gap-3 group shrink-0">
        <div className="relative h-10 w-auto flex items-center">
          <Image
            src="/logo.png"
            alt="Femmeflo Logo"
            width={180}
            height={48}
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
      </Link>

      {/* 2. Middle: Interactive Animated Floating Pill Navbar */}
      <nav className="hidden md:flex items-center bg-white/80 backdrop-blur-2xl border border-white/90 rounded-full p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.06)] relative">
        <ul className="flex items-center relative">
          {navItems.map((item, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <li
                key={item.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
                className="relative z-10"
              >
                <Link
                  href={item.href}
                  className={`relative block px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                    isActive || isHovered
                      ? "text-white"
                      : "text-zinc-700 hover:text-zinc-950"
                  }`}
                >
                  {/* Sliding Pill Background Highlight Animation */}
                  {(isActive || isHovered) && (
                    <span
                      className={`absolute inset-0 rounded-full -z-10 transition-all duration-300 ease-out shadow-sm ${
                        isActive
                          ? "bg-gradient-to-r from-[#166534] to-[#15803D]"
                          : "bg-gradient-to-r from-[#E61C5D] to-[#F43F5E]"
                      }`}
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 3. Right: Premium Button with Live Status Indicator Dot */}
      <div className="shrink-0">
        <Link
          href="#buy"
          className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F43F5E] via-[#E61C5D] to-[#D91B54] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-[0_6px_25px_rgba(230,28,93,0.35)] hover:shadow-[0_8px_30px_rgba(230,28,93,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
        >
          {/* Pulsing Live Status Dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span>Buy Now</span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
