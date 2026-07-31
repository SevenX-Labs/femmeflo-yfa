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
  { name: "FAQ", href: "#faq" },
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
    <header className="sticky top-0 z-[100] w-full font-[family-name:var(--font-jakarta)] bg-transparent">
      {/* Outer Wrapper: Rounded Pill Container on Mobile & Full Bar on Desktop */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5">
        <div className="bg-white/90 backdrop-blur-xl border border-zinc-200/80 rounded-full px-4 sm:px-6 py-2.5 shadow-md flex items-center justify-between">
          
          {/* 1. Left: Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative h-8 sm:h-11 w-auto flex items-center">
              <Image
                src="/logo.png"
                alt="Femmeflo Logo"
                width={200}
                height={55}
                className="h-7 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-xs"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* 2. Center: Desktop Floating Pill Navigation (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center bg-zinc-100/70 border border-zinc-200/80 rounded-full p-1 shadow-inner relative">
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
                      className={`group relative block px-3.5 lg:px-4.5 py-1.5 text-xs lg:text-sm font-semibold rounded-full transition-colors duration-200 select-none overflow-hidden ${
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

          {/* 3. Right: Buy Now Button on Desktop & ONLY Sidebar Toggle on Mobile */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop Only "Buy Now" Button */}
            <Link
              href="#products"
              className="hidden lg:inline-flex group relative items-center justify-center font-bold text-white text-xs lg:text-sm px-6 py-2.5 rounded-full bg-[#E61C5D] hover:bg-[#d91b54] shadow-[0_6px_20px_rgba(230,28,93,0.35)] hover:shadow-[0_8px_25px_rgba(230,28,93,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 overflow-hidden cursor-pointer h-[40px]"
            >
              <StaggeredText text="Buy Now" />
            </Link>

            {/* Mobile / Tablet Sidebar Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#156035] text-white flex items-center justify-center shadow-md hover:bg-[#114828] active:scale-95 transition-all"
              aria-label="Toggle Sidebar Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Sidebar Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden max-w-7xl mx-auto px-4 mt-1"
          >
            <div className="bg-white/95 backdrop-blur-2xl border border-zinc-200/80 rounded-3xl p-5 shadow-2xl space-y-3">
              <ul className="flex flex-col gap-1.5">
                {navItems.map((item, idx) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActiveIndex(idx);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-bold text-zinc-800 hover:bg-[#EAF5EE] hover:text-[#156035] transition-colors"
                    >
                      <span>{item.name}</span>
                      <span className="text-xs text-zinc-400 font-normal">→</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Drawer Buy Now Action Button */}
              <div className="pt-2 border-t border-zinc-100">
                <Link
                  href="#products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center font-bold text-white text-sm py-3 rounded-2xl bg-[#E61C5D] hover:bg-[#d91b54] shadow-md transition-all text-center"
                >
                  Buy Now — Pack @ ₹40
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

export default Navbar;