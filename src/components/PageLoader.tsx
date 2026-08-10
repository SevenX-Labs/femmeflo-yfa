"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FairyIcon } from "@/components/FairyIcon";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show fairy icon screen for exactly 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.96,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF0F3] via-[#FFF6F8] to-[#FDE8EE] select-none font-[family-name:var(--font-jakarta)] overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-tr from-rose-200/40 via-pink-200/50 to-emerald-100/40 blur-3xl pointer-events-none" />

          {/* Golden Floating Fairy Icon (No rings, clean levitating entrance) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 flex items-center justify-center p-4"
          >
            <FairyIcon className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-[0_12px_24px_rgba(230,28,93,0.2)] animate-[bounce_4s_ease-in-out_infinite]" />
          </motion.div>

          {/* Brand Typography */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 flex flex-col items-center space-y-2 z-10 text-center px-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Femmeflo
              </span>
              <span className="font-[family-name:var(--font-playfair)] italic font-semibold text-[#E61C5D] text-3xl sm:text-4xl">
                Care
              </span>
            </div>

            <p className="text-xs sm:text-sm font-extrabold text-[#156035] tracking-[0.2em] uppercase">
              Feel Fresh • Feel Free
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageLoader;
