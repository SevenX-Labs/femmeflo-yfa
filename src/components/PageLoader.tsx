"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FairyIcon } from "@/components/FairyIcon";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has already loaded in this session
    const hasLoaded = sessionStorage.getItem("femmeflo_preloaded");

    if (hasLoaded) {
      setLoading(false);
      return;
    }

    // Progress counter animation from 0% to 100% over ~1.6s
    const startTime = Date.now();
    const duration = 1600;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("femmeflo_preloaded", "true");
        }, 200);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF0F3] via-[#FFF6F8] to-[#FDE8EE] select-none font-[family-name:var(--font-jakarta)] overflow-hidden"
        >
          {/* Background Ambient Glow Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full bg-gradient-to-tr from-rose-300/35 via-pink-200/40 to-emerald-200/30 blur-3xl pointer-events-none animate-pulse" />

          {/* Dotted Loader Frame & Fairy Center */}
          <div className="relative flex items-center justify-center w-56 h-56 sm:w-72 sm:h-72">
            
            {/* Outer Clockwise Rotating Dotted Ring */}
            <motion.svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full text-rose-400/80 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeDasharray="6 12"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Inner Counter-Clockwise Dotted Accent Ring */}
            <motion.svg
              viewBox="0 0 200 200"
              className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] text-emerald-600/60 pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="100"
                cy="100"
                r="82"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="3 9"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Center Glowing Levitating Fairy Icon */}
            <div className="relative z-10 flex items-center justify-center p-4">
              <FairyIcon className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-[0_10px_20px_rgba(230,28,93,0.25)]" />
            </div>
          </div>

          {/* Brand Typography & Progress Bar */}
          <div className="mt-6 flex flex-col items-center space-y-3 z-10 text-center px-4">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Femmeflo
              </span>
              <span className="font-[family-name:var(--font-playfair)] italic font-normal text-[#E61C5D] text-2xl sm:text-3xl">
                Care
              </span>
            </div>

            <p className="text-xs sm:text-sm font-medium text-rose-700/80 tracking-widest uppercase">
              Feel Fresh • Feel Free
            </p>

            {/* Sleek Loading Progress Bar */}
            <div className="w-48 sm:w-60 h-1.5 bg-rose-200/60 rounded-full overflow-hidden mt-2 p-0.5 border border-rose-300/40">
              <motion.div
                className="h-full bg-gradient-to-r from-[#E61C5D] via-pink-500 to-[#156035] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            <span className="text-[11px] font-semibold text-zinc-500 tabular-nums">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageLoader;
