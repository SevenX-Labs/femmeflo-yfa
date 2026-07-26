"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

  // Determine the single active target index for the pill highlight
  const highlightedIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative z-50 font-[family-name:var(--font-jakarta)]">
      
      {/* 1. Left: Brand Logo */}
      <Link href="/" className="flex items-center gap-3 group shrink-0 min-w-[140px] sm:min-w-[160px]">
        <div className="relative h-10 sm:h-12 w-auto flex items-center">
          <Image
            src="/logo.png"
            alt="Femmeflo Logo"
            width={200}
            height={55}
            className="h-9 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 mix-blend-screen"
            priority
            unoptimized
          />
        </div>
      </Link>

      {/* 2. Center: Floating Pill Navigation */}
      <nav className="flex items-center bg-white/80 backdrop-blur-xl border border-zinc-200/80 rounded-full p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative">
        <ul className="flex items-center relative gap-1">
          {navItems.map((item, index) => {
            const isHighlighted = highlightedIndex === index;
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
                  className={`relative block px-3 sm:px-4 lg:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-200 select-none ${
                    isHighlighted
                      ? "text-white"
                      : "text-zinc-700 hover:text-zinc-950"
                  }`}
                >
                  {/* Exactly ONE layoutId="navPill" is rendered at a time */}
                  {isHighlighted && (
                    <motion.span
                      layoutId="navPill"
                      className={`absolute inset-0 rounded-full -z-10 shadow-sm ${
                        isHovered
                          ? "bg-gradient-to-r from-[#E61C5D] to-[#F43F5E]"
                          : "bg-gradient-to-r from-[#166534] to-[#15803D]"
                      }`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 3. Right: Invisible spacer to maintain perfect visual centering for middle pill nav without Buy Now button */}
      <div className="hidden sm:block min-w-[140px] sm:min-w-[160px] pointer-events-none" />

    </header>
  );
}