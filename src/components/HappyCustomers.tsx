"use client";

import React from "react";
import { motion } from "framer-motion";

const leftAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
];

const rightAvatars = [
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
];

export function HappyCustomers() {
  return (
    <section
      id="happy-customers"
      className="relative w-full bg-[#DFF1E7] px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Top Wave Background SVG */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none -z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 text-[#FAF8F5] fill-current"
        >
          <path d="M0,0 C150,60 350,-20 500,40 C650,100 900,10 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 pt-4">
        
        {/* Title: 15 Lakh+ happy customers */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-normal text-zinc-900 mb-12 sm:mb-16 tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          15 Lakh+{" "}
          <span className="font-[family-name:var(--font-playfair)] italic text-[#EE5859] font-normal">
            happy customers
          </span>
        </motion.h2>

        {/* Central Display: Left Faded Grid, Center Girl Image + Red Ribbon Loop + Yellow Heart, Right Faded Grid */}
        <div className="relative w-full max-w-5xl flex items-center justify-center min-h-[300px] sm:min-h-[360px] my-4">
          
          {/* Left Faded Avatars Column */}
          <div className="hidden md:grid grid-cols-2 gap-4 absolute left-0 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none select-none">
            {leftAvatars.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="Happy customer"
                className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl object-cover mix-blend-multiply filter contrast-90"
              />
            ))}
          </div>

          {/* Sweeping Red Ribbon & Yellow Heart SVG Behind Center Photo */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
            <svg
              viewBox="0 0 800 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-3xl h-auto"
            >
              {/* Red Ribbon Path looping under center photo */}
              <path
                d="M 120 150 C 220 220, 290 220, 340 180 C 390 140, 360 80, 320 120 C 280 160, 320 220, 420 200 C 500 180, 520 110, 560 110 C 600 110, 620 180, 720 160"
                stroke="#EE5859"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Hand-Drawn Yellow Heart with Red Outline on Right of Center Photo */}
              <g transform="translate(535, 80) rotate(8)">
                <path
                  d="M 25 12 C 32 -3, 55 -3, 62 12 C 70 28, 55 50, 25 70 C -5 50, -20 28, -12 12 C -5 -3, 18 -3, 25 12 Z"
                  fill="#FFCB46"
                  stroke="#EE5859"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>

          {/* Single Center Girl Photo (Exactly as shown in Image 2) */}
          <motion.div
            className="relative z-10 p-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
              alt="Happy Femmeflo Customer"
              className="w-44 h-52 sm:w-56 sm:h-64 rounded-3xl object-cover shadow-lg border-2 border-white/80"
            />
          </motion.div>

          {/* Right Faded Avatars Column */}
          <div className="hidden md:grid grid-cols-2 gap-4 absolute right-0 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none select-none">
            {rightAvatars.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="Happy customer"
                className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl object-cover mix-blend-multiply filter contrast-90"
              />
            ))}
          </div>

        </div>

        {/* Simple Bottom Quote Text */}
        <motion.p
          className="text-zinc-800 text-base sm:text-lg font-normal mt-10 sm:mt-14 max-w-xl leading-relaxed font-[family-name:var(--font-jakarta)]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          &ldquo;Switching to Femmeflo XL was the best decision I made for my period.&rdquo;
        </motion.p>

      </div>
    </section>
  );
}

export default HappyCustomers;
