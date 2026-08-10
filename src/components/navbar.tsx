"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navItems = [
  { name: "HOME", href: "#hero" },
  { name: "ABOUT US", href: "#about" },
  { name: "PRODUCTS", href: "#products" },
  { name: "CONTACT US", href: "#contact" },
];

export function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full font-[family-name:var(--font-jakarta)] z-50 bg-white border-b border-zinc-100">
      <div className="w-full py-3 sm:py-4 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* 1. Left: Brand Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <Image
              src="/logo.png"
              alt="Femmeflo Logo"
              width={420}
              height={130}
              className="h-10 sm:h-14 lg:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
              unoptimized
            />
          </Link>

          {/* 2. Right: Desktop Minimal Dark Green Nav Links */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center gap-6 sm:gap-8 lg:gap-10">
              {navItems.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setActiveIndex(index)}
                      className={`relative py-1 text-[13px] sm:text-[14px] lg:text-[15px] font-extrabold tracking-widest uppercase transition-colors duration-200 ${
                        isActive
                          ? "text-[#156035]"
                          : "text-[#156035]/80 hover:text-[#156035]"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="navActiveLinePink"
                          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#156035] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* 3. Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#156035] hover:bg-emerald-50 transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Absolute Floating Overlay (Does NOT push Hero section down!) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 z-50 bg-white/98 backdrop-blur-2xl border-b border-rose-100 px-6 py-5 shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveIndex(index);
                      setMobileMenuOpen(false);
                    }}
                    className={`block text-sm font-extrabold tracking-wider uppercase py-1.5 ${
                      activeIndex === index
                        ? "text-[#156035]"
                        : "text-zinc-700 hover:text-[#156035]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-zinc-100">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 bg-[#156035] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#FDE047]" />
                <span>Contact Sales &amp; Enquiries</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;