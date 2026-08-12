"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navItems = [
  { name: "ABOUT US", href: "/#about" },
  { name: "PRODUCTS", href: "/#products" },
  { name: "CONTACT US", href: "/contact" },
];

export function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full font-[family-name:var(--font-jakarta)] z-50 bg-[url('/navbar-bg-transparent.webp')] bg-[length:100%_100%] bg-no-repeat bg-bottom pb-2.5 sm:pb-3">
      <div className="w-full py-1 sm:py-1.5 lg:py-2 px-4 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* 1. Left: Brand Logo */}
          <Link href="/" className="flex items-center group shrink-0 cursor-pointer">
            <Image
              src="/femmeflo.png"
              alt="Femmeflo Logo"
              width={600}
              height={200}
              className="h-16 sm:h-20 lg:h-[135px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              priority
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
                      className={`relative py-1 text-[13px] sm:text-[14px] lg:text-[15px] font-extrabold tracking-widest uppercase transition-colors duration-200 cursor-pointer ${
                        isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="navActiveLinePink"
                          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white rounded-full"
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
            className="md:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
                    className={`block text-sm font-extrabold tracking-wider uppercase py-1.5 cursor-pointer ${
                      activeIndex === index
                        ? "text-[#00873A]"
                        : "text-zinc-700 hover:text-[#00873A]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-zinc-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 bg-[#00873A] hover:bg-[#007532] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-colors"
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