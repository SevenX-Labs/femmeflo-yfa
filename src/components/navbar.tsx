"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navItems = [
  { name: "ABOUT US", href: "/#about" },
  { name: "PRODUCTS", href: "/#products" },
  { name: "CONTACT US", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/contact") {
      setActiveIndex(2);
      return;
    }

    const handleScroll = () => {
      const aboutEl = document.getElementById("about");
      const productsEl = document.getElementById("products");
      const scrollY = window.scrollY;

      if (productsEl && scrollY >= productsEl.offsetTop - 220) {
        setActiveIndex(1);
      } else if (aboutEl && scrollY >= aboutEl.offsetTop - 220) {
        setActiveIndex(0);
      } else {
        setActiveIndex(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className="relative w-full font-[family-name:var(--font-jakarta)] z-50">
      {/* Green Header Bar */}
      <div
        className="relative w-full"
        style={{
          background: "linear-gradient(180deg, #032D15 0%, #064D24 60%, #087A32 100%)",
        }}
      >
        {/* Navigation Content */}
        <div className="w-full px-4 sm:px-8 lg:px-14 py-4 sm:py-5 lg:py-5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group shrink-0 cursor-pointer"
            >
              <Image
                src="/logo.png"
                alt="Femmeflo Logo"
                width={600}
                height={200}
                className="h-11 sm:h-14 lg:h-[72px] xl:h-[78px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-7 lg:gap-9"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative py-1 font-[family-name:var(--font-outfit)] text-[13px] lg:text-[14.5px] font-semibold tracking-[0.18em] uppercase transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "text-white/85 hover:text-[#FFB3D1]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive ? (
                      <motion.span
                        layoutId="navActiveLine"
                        className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#E8799A] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    ) : (
                      <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[2px] bg-[#E8799A]/60 rounded-full transition-all duration-300 ease-out" />
                    )}
                  </Link>
                );
              })}

              {/* Circular Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-[40px] h-[40px] rounded-full border border-white/25 hover:border-white/50 hover:scale-[1.04] flex items-center justify-center text-white/90 hover:text-white transition-all duration-200 cursor-pointer ml-1"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-[18px] h-[18px]" />
                ) : (
                  <Menu className="w-[18px] h-[18px]" />
                )}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-[38px] h-[38px] rounded-full border border-white/25 hover:border-white/50 flex items-center justify-center text-white/90 hover:text-white transition-all duration-200 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-[18px] h-[18px]" />
              ) : (
                <Menu className="w-[18px] h-[18px]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Organic Wave Transition */}
      <div className="relative w-full h-[35px] sm:h-[40px] lg:h-[48px] -mt-px">
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="waveGreenGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#076A2E" />
              <stop offset="40%" stopColor="#087A32" />
              <stop offset="100%" stopColor="#076A2E" />
            </linearGradient>
            <linearGradient
              id="wavePinkStroke"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#D4688A" />
              <stop offset="50%" stopColor="#E8799A" />
              <stop offset="100%" stopColor="#D4688A" />
            </linearGradient>
          </defs>

          {/* Green fill that continues from the header */}
          <path
            d="M0,0 L1440,0 L1440,8 C1320,12 1100,28 860,36 C620,44 400,32 200,22 C100,17 40,14 0,16 Z"
            fill="url(#waveGreenGrad)"
          />

          {/* Thin pink accent line following the curve */}
          <path
            d="M0,16 C40,14 100,17 200,22 C400,32 620,44 860,36 C1100,28 1320,12 1440,8"
            fill="none"
            stroke="url(#wavePinkStroke)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Very subtle pink glow beneath the line */}
          <path
            d="M0,17 C40,15 100,18 200,23 C400,33 620,45 860,37 C1100,29 1320,13 1440,9"
            fill="none"
            stroke="#E8799A"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.08"
          />
        </svg>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 z-50 bg-white/[0.98] backdrop-blur-2xl border-b border-rose-100/80 px-6 py-5 shadow-lg"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveIndex(index);
                      setMobileMenuOpen(false);
                    }}
                    className={`block text-sm font-[family-name:var(--font-outfit)] font-semibold tracking-[0.14em] uppercase py-2 cursor-pointer transition-colors duration-200 ${
                      activeIndex === index
                        ? "text-[#E61C5D]"
                        : "text-zinc-700 hover:text-[#E61C5D]"
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
                className="w-full py-2.5 bg-[#00873A] hover:bg-[#007532] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-colors duration-200"
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