"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Promise", href: "#promise" },
  { name: "Why Us", href: "#why-choose-us" },
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const highlightedIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <header className="sticky top-0 z-[100] w-full font-[family-name:var(--font-jakarta)] bg-transparent pt-3 sm:pt-4 px-3 sm:px-6 transition-all duration-300">
      {/* Outer Wrapper: Ultra-Clean Floating Dock Container with Frosted Glassmorphism */}
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative transition-all duration-500 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between backdrop-blur-xl border border-white/60 bg-white/65 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] ${
            scrolled ? "bg-white/85 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] border-white/80" : ""
          }`}
        >
          {/* Subtle Glass Micro-Glow Line at Top */}
          <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-b from-white/90 via-white/40 to-transparent pointer-events-none" />

          {/* 1. Left: Official Brand Logo Image */}
          <Link href="/" className="flex items-center group relative z-10 shrink-0">
            <div className="relative h-9 sm:h-12 w-auto flex items-center">
              <Image
                src="/logo.png"
                alt="Femmeflo Logo"
                width={260}
                height={70}
                className="h-8 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* 2. Center: Desktop Center-Aligned Floating Capsule Navigation */}
          <nav className="hidden lg:flex items-center bg-zinc-900/[0.03] border border-zinc-900/[0.04] rounded-full p-1 relative z-10 backdrop-blur-sm">
            <ul className="flex items-center relative gap-0.5">
              {navItems.map((item, index) => {
                const isHighlighted = highlightedIndex === index;
                const isActive = activeIndex === index;

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
                      className={`group relative block px-4 py-1.5 text-[14px] font-medium tracking-wide transition-colors duration-200 select-none ${
                        isHighlighted
                          ? "text-[#1B4332] font-semibold"
                          : "text-[#4A5568] hover:text-[#1B4332]"
                      }`}
                    >
                      {/* Soft Organic Animated Background Indicator */}
                      {isHighlighted && (
                        <motion.span
                          layoutId="navBackdrop"
                          className="absolute inset-0 rounded-full bg-[#1B4332]/[0.07] border border-[#1B4332]/[0.08] -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* Active Underline Spring Dot Indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="activeDot"
                          className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#1B4332]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      <StaggeredText text={item.name} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* 3. Right: High-End Refined Primary CTA Button */}
          <div className="flex items-center gap-3 relative z-10 shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href="#products"
                className="hidden lg:inline-flex group relative items-center justify-center font-semibold text-white text-[14px] px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1B4332] via-[#2D5A27] to-[#156035] shadow-[0_8px_20px_-6px_rgba(27,67,50,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_28px_-6px_rgba(27,67,50,0.55),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden cursor-pointer h-[42px] gap-2 border border-white/20"
              >
                {/* Dynamic Inner Shimmer Gradient on Hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <span className="relative z-10 flex items-center gap-2">
                  <StaggeredText text="Shop Now" />
                  <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>

            {/* Mobile / Tablet Sidebar Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-[#1B4332]/[0.08] text-[#1B4332] border border-[#1B4332]/10 flex items-center justify-center shadow-xs hover:bg-[#1B4332] hover:text-white active:scale-95 transition-all duration-200"
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
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden max-w-7xl mx-auto px-1 mt-2"
          >
            <div className="bg-white/85 backdrop-blur-2xl border border-white/60 rounded-3xl p-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] space-y-4">
              <ul className="flex flex-col gap-1">
                {navItems.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveIndex(idx);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-[#1B4332]/[0.08] text-[#1B4332] font-semibold"
                            : "text-[#2B2B2B] hover:bg-zinc-100/80 hover:text-[#1B4332]"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]" />}
                          {item.name}
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isActive ? "text-[#1B4332] translate-x-0.5" : "text-zinc-400"}`} />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Drawer CTA Button */}
              <div className="pt-2 border-t border-zinc-200/60">
                <Link
                  href="#products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 font-semibold text-white text-[15px] py-3.5 rounded-2xl bg-gradient-to-r from-[#1B4332] to-[#2D5A27] shadow-lg shadow-[#1B4332]/20 active:scale-[0.99] transition-all text-center"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
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