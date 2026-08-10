"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navItems = [
  { name: "HOME", href: "#hero" },
  { name: "ABOUT US", href: "#about" },
  { name: "PRODUCTS", href: "#products" },
  { name: "CONTACT US", href: "#contact" },
];

export function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="relative w-full font-[family-name:var(--font-jakarta)] z-40 bg-white border-b border-zinc-100">
      <div className="w-full py-4 sm:py-5 lg:py-6 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* 1. Left: Big Prominent Brand Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <Image
              src="/logo.png"
              alt="Femmeflo Logo"
              width={520}
              height={160}
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
              unoptimized
            />
          </Link>

          {/* 2. Right: Minimal Dark Teal Green Nav Links */}
          <nav className="flex items-center">
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
                          layoutId="navActiveLineWhite"
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
        </div>
      </div>
    </header>
  );
}

export default Navbar;