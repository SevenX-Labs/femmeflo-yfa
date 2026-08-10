"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Droplets, Feather, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const hygieneCards = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Affordable Excellence",
    subtitle: "Accessible Luxury Care",
    description:
      "We believe every woman deserves access to world-class feminine care. Femmeflo XL offers hospital-grade protection at an honest price without compromising quality.",
    badgeColor: "from-emerald-500/10 to-emerald-500/20 text-[#156035]",
    iconColor: "text-[#156035]",
  },
  {
    id: 2,
    icon: HeartHandshake,
    title: "Skin-Safe & Certified",
    subtitle: "100% Rash-Free Comfort",
    description:
      "Crafted with a dermatologically tested, 100% cottony-soft topsheet engineered specifically for delicate Indian skin, preventing chafing and irritation.",
    badgeColor: "from-rose-500/10 to-rose-500/20 text-[#E61C5D]",
    iconColor: "text-[#E61C5D]",
  },
  {
    id: 3,
    icon: Droplets,
    title: "3D Fast-Lock Absorption",
    subtitle: "Instant Fluid Lock Gel",
    description:
      "Powered by ultra-absorbent polymer micro-beads that rapidly convert heavy flow into gel within seconds, ensuring dry comfort for up to 12 hours.",
    badgeColor: "from-teal-500/10 to-teal-500/20 text-teal-700",
    iconColor: "text-teal-700",
  },
  {
    id: 4,
    icon: Feather,
    title: "XL Ergonomic Contour",
    subtitle: "320mm Zero-Leak Wings",
    description:
      "Designed with an extra-long 320mm profile and wider rear wings that wrap securely around your underwear, providing complete side and back leak guards.",
    badgeColor: "from-amber-500/10 to-amber-500/20 text-amber-700",
    iconColor: "text-amber-700",
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Breathable Odor Neutralizer",
    subtitle: "All-Day Freshness",
    description:
      "Equipped with micro-porous breathable backsheet layers that maintain air circulation while effectively neutralizing period odors all day long.",
    badgeColor: "from-pink-500/10 to-pink-500/20 text-[#E61C5D]",
    iconColor: "text-[#E61C5D]",
  },
];

function LotusDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <div className="h-[1.5px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#156035]/40 to-[#156035]" />
      <svg
        viewBox="0 0 40 24"
        fill="none"
        className="w-8 h-6 text-[#156035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 2C20 2 15 9 15 15C15 17.8 17.2 20 20 20C22.8 20 25 17.8 25 15C25 9 20 2 20 2Z"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M20 20C13 20 6 15 6 11C6 11 11 11 15 15C17 17 19 19 20 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M20 20C27 20 34 15 34 11C34 11 29 11 25 15C23 17 21 19 20 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <div className="h-[1.5px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#156035]/40 to-[#156035]" />
    </div>
  );
}

export function RedefiningHygiene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Calculate exact horizontal scroll translation distance including track paddings
    const getScrollAmount = () => {
      const trackWidth = track.scrollWidth;
      const windowWidth = window.innerWidth;
      return Math.max(0, trackWidth - windowWidth + 96);
    };

    const ctx = gsap.context(() => {
      const scrollAmount = getScrollAmount();

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollAmount + 100}`,
          invalidateOnRefresh: true,
          refreshPriority: 10,
        },
      });

      // Recalculate ScrollTrigger on window resize / layout stabilization
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => clearTimeout(timer);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hygiene"
      className="relative z-20 w-full h-screen bg-gradient-to-b from-[#FFF0F3] via-[#FFF6F8] to-[#FFF0F3] font-[family-name:var(--font-jakarta)] flex flex-col justify-center overflow-hidden py-8 sm:py-12"
    >
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-6 sm:mb-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#156035] uppercase mb-2"
        >
          Redefining Hygiene
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.15]"
        >
          Premium Protection &amp;{" "}
          <span className="font-[family-name:var(--font-playfair)] italic font-semibold text-[#156035]">
            Unmatched Comfort
          </span>
        </motion.h2>

        <LotusDivider />
      </div>

      {/* GSAP Lenis-Synced Horizontal Track */}
      <div className="relative w-full overflow-hidden py-4 px-4 sm:px-8">
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-8 px-4 sm:px-12 w-max items-stretch"
        >
          {hygieneCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="w-[290px] sm:w-[360px] lg:w-[410px] shrink-0 bg-white/90 backdrop-blur-xl border border-rose-100/90 rounded-3xl p-6 sm:p-8 shadow-[0_15px_35px_-10px_rgba(230,28,93,0.08)] hover:shadow-[0_25px_50px_-10px_rgba(230,28,93,0.18)] hover:border-[#156035]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.badgeColor} flex items-center justify-center border border-white/60 shadow-xs transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className={`w-7 h-7 ${card.iconColor}`} />
                    </div>
                    <span className="text-xs font-extrabold text-zinc-400 tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Subtitle Badge */}
                  <span className="inline-block text-xs font-bold tracking-wider text-[#156035] bg-[#EBF6EF] px-3 py-1 rounded-full mb-3">
                    {card.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3 group-hover:text-[#156035] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-rose-100/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-400 group-hover:text-[#156035] transition-colors">
                    Femmeflo Care Tech
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#156035]/30 group-hover:bg-[#156035] group-hover:scale-125 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Hint Tag */}
      <div className="max-w-7xl mx-auto px-4 text-center mt-4 sm:mt-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-500 uppercase bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-rose-100 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#156035] animate-ping" />
          <span>Scroll down to slide cards right to left</span>
        </div>
      </div>
    </section>
  );
}

export default RedefiningHygiene;
