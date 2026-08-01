"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface CustomerReview {
  id: number;
  name: string;
  role: string;
  quote: string;
  mainImage: string;
}

const customerReviews: CustomerReview[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Mumbai • Verified Buyer",
    quote: "Switching to Femmeflo XL was the best decision I made for my period. Super soft and zero rashes!",
    mainImage: "/indian-customer-main.png",
  },
  {
    id: 2,
    name: "Ananya Patel",
    role: "Ahmedabad • Daily Commuter",
    quote: "The 280mm extra-wide wings stay firmly in place all day long without any shifting or leaks.",
    mainImage: "/indian-customer-main.png",
  },
  {
    id: 3,
    name: "Rhea Sen",
    role: "Bengaluru • Wellness Enthusiast",
    quote: "Ultra-absorbent core and soft top sheet. Gives me complete 12-hour leak-free confidence!",
    mainImage: "/indian-customer-main.png",
  },
];

export function HappyCustomers() {
  const [activeIdx, setActiveIdx] = useState(0);

  const active = customerReviews[activeIdx];

  return (
    <section
      id="happy-customers"
      className="relative w-full bg-gradient-to-br from-[#EDF9F3] via-[#FFF3F5] to-[#EBF5FC] border-b border-rose-100/60 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* LUXURY TOP ANIMATED WAVY HEADER SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none select-none">
        <motion.svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-24 fill-white/80 backdrop-blur-md"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M0,0 L1440,0 L1440,40 C1200,95 960,10 720,50 C480,90 240,15 0,60 Z" />
        </motion.svg>
      </div>

      {/* LUXURY BOTTOM ANIMATED WAVY FOOTER SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none select-none rotate-180 opacity-40">
        <motion.svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-24 fill-rose-100/60"
          animate={{ x: [10, -10, 10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M0,0 L1440,0 L1440,40 C1200,95 960,10 720,50 C480,90 240,15 0,60 Z" />
        </motion.svg>
      </div>

      {/* Background Soft Glow Orbs */}
      <div className="absolute top-10 left-[-5%] w-[450px] h-[450px] bg-emerald-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-5%] w-[500px] h-[500px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">

        {/* Header Typography */}
        <motion.div
          className="flex flex-col items-center space-y-1 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            5 Lakh+
          </h2>
          <span className="font-[family-name:var(--font-playfair)] italic font-normal text-[#F06553] text-4xl sm:text-5xl lg:text-6xl">
            happy customers
          </span>
        </motion.div>

        {/* Customer Cloud Container with Ribbon SVG & Avatar Cluster */}
        <div className="relative w-full max-w-6xl my-4 min-h-[400px] sm:min-h-[460px] flex items-center justify-center">

          {/* Background Hand-Drawn Pink Ribbon SVG with Heart Loops */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden select-none">
            <svg
              viewBox="0 0 1000 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-5xl h-auto opacity-75"
            >
              {/* Pink Sweeping Ribbon Path */}
              <path
                d="M 50 180 C 120 220, 160 110, 220 120 C 280 130, 270 240, 200 240 C 140 240, 170 140, 260 170 C 350 200, 420 280, 500 280 C 580 280, 650 200, 740 170 C 830 140, 860 240, 800 240 C 730 240, 720 130, 780 120 C 840 110, 880 220, 950 180"
                stroke="#F8A5B0"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* LEFT CLUSTER: Floating Avatars & Heart Badges */}
          <div className="hidden lg:block absolute left-0 inset-y-0 w-5/12 pointer-events-none select-none z-10">
            {/* Avatar 1 */}
            <motion.img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
              alt="Indian Customer"
              className="absolute top-8 left-[24%] w-16 h-16 rounded-full object-cover shadow-md border-2 border-white"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Avatar 2 */}
            <motion.img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
              alt="Indian Customer"
              className="absolute top-2 left-[56%] w-18 h-18 rounded-2xl object-cover shadow-lg border-2 border-white"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Avatar 3 */}
            <motion.img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80"
              alt="Indian Customer"
              className="absolute top-[38%] left-[8%] w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-white"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />

            {/* FLOATING BADGE 1: Indian Customer (Top Left) */}
            <motion.div
              className="absolute top-[22%] left-[28%] bg-white/95 backdrop-blur-md border border-rose-200/90 px-3.5 py-1.5 rounded-2xl shadow-md flex items-center gap-1.5 pointer-events-none select-none z-20"
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] font-bold text-rose-600">Indian</span>
                <span className="text-[10px] font-bold text-rose-600">Customer</span>
              </div>
            </motion.div>

            {/* Avatar 4 */}
            <motion.img
              src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80"
              alt="Indian Customer"
              className="absolute bottom-[22%] left-[78%] w-18 h-18 rounded-2xl object-cover shadow-md border-2 border-white"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />

            {/* Avatar 5 */}
            <motion.img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
              alt="Indian Customer"
              className="absolute bottom-6 left-[24%] w-15 h-15 rounded-full object-cover shadow-sm border-2 border-white"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />

            {/* Avatar 6 */}
            <motion.img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=200&q=80"
              alt="Indian Customer"
              className="absolute bottom-2 left-[50%] w-18 h-18 rounded-2xl object-cover shadow-md border-2 border-white"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            />

            {/* FLOATING BADGE 2: Indian Customer (Bottom Left) */}
            <motion.div
              className="absolute bottom-[16%] left-[44%] bg-white/95 backdrop-blur-md border border-rose-200/90 px-3.5 py-1.5 rounded-2xl shadow-md flex items-center gap-1.5 pointer-events-none select-none z-20"
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] font-bold text-rose-600">Indian</span>
                <span className="text-[10px] font-bold text-rose-600">Customer</span>
              </div>
            </motion.div>
          </div>

          {/* CENTER FEATURED CUSTOMER PHOTO & MOBILE FLOATING AVATARS */}
          <div className="relative z-20 my-2">
            {/* Ambient Warm Glow behind Main Photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD1C1]/70 to-[#FFE4C4]/70 rounded-[3rem] blur-2xl transform scale-110 -z-10" />

            {/* Mobile Floating Customer Avatars Orbiting Center Photo */}
            <div className="block lg:hidden pointer-events-none select-none">
              <motion.img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="Indian Customer"
                className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-lg border-2 border-white z-30"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                alt="Indian Customer"
                className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-13 h-13 sm:w-15 sm:h-15 rounded-full object-cover shadow-lg border-2 border-white z-30"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80"
                alt="Indian Customer"
                className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover shadow-lg border-2 border-white z-30"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80"
                alt="Indian Customer"
                className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 w-13 h-13 sm:w-15 sm:h-15 rounded-full object-cover shadow-lg border-2 border-white z-30"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              />
            </div>

            <motion.div
              className="relative p-1 cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveIdx((prev) => (prev + 1) % customerReviews.length)}
            >
              {/* Main Indian Customer Portrait */}
              <img
                src={active.mainImage}
                alt={active.name}
                draggable={false}
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[2.5rem] object-cover shadow-2xl border-4 border-white/95 select-none cursor-pointer group-hover:border-rose-300 transition-colors"
              />
            </motion.div>
          </div>

          {/* RIGHT CLUSTER: Floating Avatars & Heart Badges */}
          <div className="hidden lg:block absolute right-0 inset-y-0 w-5/12 pointer-events-none select-none z-10">
            {/* Avatar 7 */}
            <motion.img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
              alt="Indian Customer"
              className="absolute top-4 right-[58%] w-16 h-16 rounded-full object-cover shadow-md border-2 border-white"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />

            {/* Avatar 8 */}
            <motion.img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80"
              alt="Indian Customer"
              className="absolute top-16 right-[24%] w-18 h-18 rounded-2xl object-cover shadow-lg border-2 border-white"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />

            {/* FLOATING BADGE 3: Indian Customer (Top Right) */}
            <motion.div
              className="absolute top-[28%] right-[44%] bg-white/95 backdrop-blur-md border border-rose-200/90 px-3.5 py-1.5 rounded-2xl shadow-md flex items-center gap-1.5 pointer-events-none select-none z-20"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] font-bold text-rose-600">Indian</span>
                <span className="text-[10px] font-bold text-rose-600">Customer</span>
              </div>
            </motion.div>

            {/* Avatar 9 */}
            <motion.img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80"
              alt="Indian Customer"
              className="absolute top-[38%] right-[16%] w-18 h-18 rounded-2xl object-cover shadow-lg border-2 border-white"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            />

            {/* Avatar 10 */}
            <motion.img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
              alt="Indian Customer"
              className="absolute bottom-[20%] right-[78%] w-18 h-18 rounded-2xl object-cover shadow-md border-2 border-white"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
            />

            {/* FLOATING BADGE 4: Indian Customer (Bottom Right) */}
            <motion.div
              className="absolute bottom-[16%] right-[42%] bg-white/95 backdrop-blur-md border border-rose-200/90 px-3.5 py-1.5 rounded-2xl shadow-md flex items-center gap-1.5 pointer-events-none select-none z-20"
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
            >
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] font-bold text-rose-600">Indian</span>
                <span className="text-[10px] font-bold text-rose-600">Customer</span>
              </div>
            </motion.div>

            {/* Avatar 11 */}
            <motion.img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
              alt="Indian Customer"
              className="absolute bottom-6 right-[50%] w-16 h-16 rounded-full object-cover shadow-md border-2 border-white"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
            />

            {/* Avatar 12 */}
            <motion.img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              alt="Indian Customer"
              className="absolute bottom-16 right-[24%] w-15 h-15 rounded-full object-cover shadow-sm border-2 border-white"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>

        </div>

        {/* BOTTOM TESTIMONIAL QUOTE GLASS CARD */}
        <motion.div
          className="mt-6 z-20 w-full max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-xl border border-blue-100/90 rounded-2xl p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] text-center space-y-2"
            >
              <blockquote className="text-zinc-800 font-medium text-base sm:text-lg leading-snug font-[family-name:var(--font-jakarta)]">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <p className="text-xs text-zinc-500 font-semibold">
                {active.name}, <span className="text-zinc-400 font-normal">{active.role}</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default HappyCustomers;
