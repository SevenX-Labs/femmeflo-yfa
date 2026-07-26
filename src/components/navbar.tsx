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

  // Gradient definitions (assumed from image)
  const greenGradient = "bg-gradient-to-r from-[#166534] to-[#15803D]"; // Active state gradient
  const pinkGradient = "bg-gradient-to-r from-[#E61C5D] to-[#F43F5E]";   // Hover state gradient

  const getGradientClass = (index: number) => {
    // If the item is hovered, show the pink gradient
    if (hoveredIndex === index) return pinkGradient;
    // Otherwise, if it's active, show the green gradient
    if (activeIndex === index) return greenGradient;
    return ""; // Default: no gradient
  };

  return (
    // Redesigned container for better proportion and visual center: max-w, reduced padding.
    // font-[family-name:...] assumed from main layout.
    <header className="w-full max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between relative z-50 font-[family-name:var(--font-jakarta)]">
      
      {/* 1. Left: Brand Logo */}
      <Link href="/" className="flex items-center gap-3 group shrink-0">
        <div className="relative h-12 w-auto flex items-center">
          {/* Logo size is slightly reduced for a pro feel, maintained mix-blend-screen. */}
          <Image
            src="/logo.png" // **Make sure your logo.png is in the public/ folder**
            alt="Femmeflo Logo"
            width={220} // Width is indicative; Tailwind class h-12 will control the primary size
            height={60}
            className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 mix-blend-screen"
            priority
            unoptimized // Using 'unoptimized' for static logos is often clearer for small sizes
          />
        </div>
      </Link>

      {/* 2. Middle (Now Center): Interactive Animated Floating Pill Navbar */}
      {/* The navbar container is now centered. Increased max-width to allow better visual separation of items. */}
      <nav className="flex items-center bg-[#F9F9F9] backdrop-blur-md border border-[#E9E9E9] rounded-full p-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.02)] relative max-w-[800px] w-full">
        <ul className="flex items-center relative gap-1 w-full justify-evenly">
          {navItems.map((item, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <li
                key={item.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
                className="relative z-10 flex-grow" // flex-grow to evenly distribute space
              >
                {/* Link classes adjusted for centering and proportion. Full width within li. */}
                <Link
                  href={item.href}
                  className={`relative block px-5 py-3 text-sm font-semibold rounded-full transition-colors duration-200 w-full text-center ${
                    isActive || isHovered
                      ? "text-white"
                      : "text-zinc-700 hover:text-zinc-950"
                  }`}
                >
                  {/* Sliding Pill Animation - professional, dynamic, and shared across items */}
                  {(isActive || isHovered) && (
                    <motion.span
                      layoutId="navPill" // Enables the shared layout animation across items
                      className={`absolute inset-0 rounded-full -z-10 shadow-inner ${getGradientClass(
                        index
                      )}`}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }} // Shared spring animation for smooth pill movement
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 3. Right: Buy Now - REMOVED */}
      {/* (Space maintained for balance) */}
      
    </header>
  );
}