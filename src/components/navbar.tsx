"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Promise", href: "#promise" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Identity", href: "#essence" },
  { name: "Contact", href: "#contact" },
];

function StaggeredText({ text }: { text: string }) {
  const letters = text.split("");

  return (
    <span className="relative inline-flex items-center justify-center overflow-hidden py-0.5">
      <span className="span-mother flex items-center justify-center">
        {letters.map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </span>
      <span className="span-mother2 absolute inset-0 flex items-center justify-center pointer-events-none">
        {letters.map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </span>
    </span>
  );
}

export function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const highlightedIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-zinc-200/60 shadow-xs font-[family-name:var(--font-jakarta)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* 1. Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0 min-w-[130px] sm:min-w-[160px]">
          <div className="relative h-9 sm:h-12 w-auto flex items-center">
            <Image
              src="/logo.png"
              alt="Femmeflo Logo"
              width={200}
              height={55}
              className="h-8 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-xs"
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* 2. Center: Desktop Floating Pill Navigation (Hidden on Mobile) */}
        <nav className="hidden lg:flex items-center bg-white/80 backdrop-blur-xl border border-zinc-200/80 rounded-full p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative">
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
                    className={`group relative block px-3.5 lg:px-4.5 py-2 text-xs lg:text-sm font-semibold rounded-full transition-colors duration-200 select-none overflow-hidden ${
                      isHighlighted
                        ? "text-white"
                        : "text-zinc-700 hover:text-zinc-950"
                    }`}
                  >
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
                    <StaggeredText text={item.name} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 3. Right: Buy Now Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="#products"
            className="group relative inline-flex items-center justify-center font-bold text-white text-xs sm:text-sm px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#E61C5D] hover:bg-[#d91b54] shadow-[0_6px_20px_rgba(230,28,93,0.35)] hover:shadow-[0_8px_25px_rgba(230,28,93,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 overflow-hidden cursor-pointer h-[38px] sm:h-[40px]"
          >
            <StaggeredText text="Buy Now" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-zinc-100 text-zinc-800 hover:bg-zinc-200 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation (Only displays on Mobile/Tablet when toggled) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-zinc-200 px-6 py-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveIndex(idx);
                      setMobileMenuOpen(false);
                    }}
                    className="block px-4 py-2.5 rounded-xl text-sm font-bold text-zinc-800 hover:bg-[#EAF5EE] hover:text-[#156035] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

export default Navbar;