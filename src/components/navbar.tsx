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

// Helper to render letter spans for staggered animation
function StaggeredText({ text }: { text: string }) {
  const letters = text.split("");

  return (
    <span className="relative inline-flex items-center justify-center overflow-hidden py-0.5">
      {/* Primary layer - rolls down on hover */}
      <span className="span-mother flex items-center justify-center">
        {letters.map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </span>

      {/* Secondary layer - hidden above, rolls down to center on hover */}
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

  const highlightedIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative z-50 font-[family-name:var(--font-jakarta)]">
      {/* Clean Staggered Roll CSS - Perfect clipping without text duplication */}
      <style jsx global>{`
        .span-mother {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .span-mother span {
          display: inline-block;
          transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: transform;
        }

        .group:hover .span-mother span {
          transform: translateY(1.5em);
        }

        .span-mother span:nth-child(1) { transition-delay: 0s; }
        .span-mother span:nth-child(2) { transition-delay: 0.03s; }
        .span-mother span:nth-child(3) { transition-delay: 0.06s; }
        .span-mother span:nth-child(4) { transition-delay: 0.09s; }
        .span-mother span:nth-child(5) { transition-delay: 0.12s; }
        .span-mother span:nth-child(6) { transition-delay: 0.15s; }
        .span-mother span:nth-child(7) { transition-delay: 0.18s; }
        .span-mother span:nth-child(8) { transition-delay: 0.21s; }

        .span-mother2 {
          display: flex;
          position: absolute;
          inset: 0;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .span-mother2 span {
          display: inline-block;
          transform: translateY(-1.5em);
          transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: transform;
        }

        .group:hover .span-mother2 span {
          transform: translateY(0);
        }

        .span-mother2 span:nth-child(1) { transition-delay: 0s; }
        .span-mother2 span:nth-child(2) { transition-delay: 0.03s; }
        .span-mother2 span:nth-child(3) { transition-delay: 0.06s; }
        .span-mother2 span:nth-child(4) { transition-delay: 0.09s; }
        .span-mother2 span:nth-child(5) { transition-delay: 0.12s; }
        .span-mother2 span:nth-child(6) { transition-delay: 0.15s; }
        .span-mother2 span:nth-child(7) { transition-delay: 0.18s; }
        .span-mother2 span:nth-child(8) { transition-delay: 0.21s; }
      `}</style>

      {/* 1. Left: Brand Logo */}
      <Link href="/" className="flex items-center gap-3 group shrink-0 min-w-[140px] sm:min-w-[160px]">
        <div className="relative h-10 sm:h-12 w-auto flex items-center">
          <Image
            src="/logo.png"
            alt="Femmeflo Logo"
            width={200}
            height={55}
            className="h-9 sm:h-17 w-auto object-contain transition-all duration-300 group-hover:scale-105 mix-blend-screen"
            priority
            unoptimized
          />
        </div>
      </Link>

      {/* 2. Center: Floating Pill Navigation with Staggered Roll Animation */}
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
                  className={`group relative block px-3 sm:px-4 lg:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-200 select-none overflow-hidden ${
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

      {/* 3. Right: Buy Now Button with Staggered Roll Animation */}
      <div className="flex items-center justify-end shrink-0 min-w-[140px] sm:min-w-[160px]">
        <Link
          href="#buy"
          className="group relative inline-flex items-center justify-center font-bold text-white text-xs sm:text-sm px-6 py-2.5 rounded-full bg-[#E61C5D] hover:bg-[#d91b54] shadow-[0_6px_20px_rgba(230,28,93,0.35)] hover:shadow-[0_8px_25px_rgba(230,28,93,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 overflow-hidden cursor-pointer min-w-[105px] h-[40px]"
        >
          <StaggeredText text="Buy Now" />
        </Link>
      </div>

    </header>
  );
}