"use client";

import React from "react";
import { motion } from "framer-motion";

export function FairyIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      {/* Outer Floating & Sway Animation */}
      <motion.div
        className="w-full h-full"
        animate={{
          y: [-7, 7, -7],
          rotate: [-2.5, 2.5, -2.5],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_20px_rgba(130,201,104,0.4)]"
        >
          <defs>
            <filter id="fairyGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#82cb68" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Top Left Twinkling Star */}
          <motion.g
            animate={{
              scale: [0.85, 1.15, 0.85],
              rotate: [0, 15, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "90px 90px" }}
          >
            <path
              d="M90 40 C90 65 65 90 40 90 C65 90 90 115 90 140 C90 115 115 90 140 90 C115 90 90 65 90 40 Z"
              fill="#FDD843"
              stroke="#000000"
              strokeWidth="12"
              strokeLinejoin="round"
            />
          </motion.g>

          {/* Bottom Right Twinkling Star */}
          <motion.g
            animate={{
              scale: [1.1, 0.85, 1.1],
              rotate: [0, -20, 0],
              opacity: [0.9, 0.7, 0.9],
            }}
            transition={{
              duration: 2.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ transformOrigin: "440px 300px" }}
          >
            <path
              d="M440 260 C440 280 420 300 400 300 C420 300 440 320 440 340 C440 320 460 300 480 300 C460 300 440 280 440 260 Z"
              fill="#FDD843"
              stroke="#000000"
              strokeWidth="10"
              strokeLinejoin="round"
            />
          </motion.g>

          {/* FLUTTERING GREEN WINGS (Pivot around attachment at back x: 230, y: 220) */}
          <motion.g
            animate={{
              scaleX: [1, 0.45, 1.05, 0.5, 1],
              scaleY: [1, 1.08, 0.96, 1.06, 1],
              skewY: [0, -6, 2, -4, 0],
              rotate: [0, -4, 2, -3, 0],
            }}
            transition={{
              duration: 0.32,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "230px 220px" }}
          >
            {/* Back Wing Layer */}
            <path
              d="M 230 180 C 230 110, 270 40, 325 35 C 380 30, 420 85, 385 145 C 350 205, 270 230, 230 220 Z"
              fill="#7BC668"
              stroke="#000000"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Main Upper Wing */}
            <path
              d="M 235 200 C 255 120, 340 70, 440 75 C 475 78, 485 130, 415 205 C 345 280, 260 270, 235 235 Z"
              fill="#82CB68"
              stroke="#000000"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Lower Wing Extension */}
            <path
              d="M 245 235 C 280 260, 360 300, 445 280 C 475 272, 470 325, 415 385 C 360 445, 275 390, 245 315 Z"
              fill="#82CB68"
              stroke="#000000"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Decorative Wing Fold Details */}
            <path
              d="M 270 195 C 330 160, 410 145, 425 155"
              fill="none"
              stroke="#000000"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 280 260 C 340 290, 395 330, 420 330"
              fill="none"
              stroke="#000000"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* Dashed outer wing edge accent */}
            <path
              d="M 445 110 C 465 140, 460 220, 440 250"
              fill="none"
              stroke="#000000"
              strokeWidth="12"
              strokeDasharray="1 18"
              strokeLinecap="round"
            />
            <path
              d="M 435 345 C 445 365, 430 395, 420 405"
              fill="none"
              stroke="#000000"
              strokeWidth="12"
              strokeDasharray="1 18"
              strokeLinecap="round"
            />
          </motion.g>

          {/* FAIRY BODY & HEAD */}
          <g id="fairy-body">
            {/* Upper Arm Reaching Forward */}
            <path
              d="M 175 255 C 130 250, 85 260, 60 280 C 45 292, 55 310, 85 300 C 120 288, 160 278, 195 272 Z"
              fill="#FFCEBD"
              stroke="#000000"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Lower Arm Reaching Forward */}
            <path
              d="M 180 275 C 140 280, 105 315, 95 330 C 85 345, 105 355, 125 345 C 150 330, 185 305, 205 295 Z"
              fill="#FFCEBD"
              stroke="#000000"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Legs Floating Back */}
            {/* Top Leg */}
            <path
              d="M 265 370 C 295 400, 335 425, 360 435 C 380 443, 395 425, 375 410 C 345 390, 305 355, 275 335 Z"
              fill="#FFCEBD"
              stroke="#000000"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Bottom Leg */}
            <path
              d="M 235 395 C 255 435, 285 475, 310 495 C 325 507, 345 490, 325 470 C 300 445, 270 405, 245 375 Z"
              fill="#FFCEBD"
              stroke="#000000"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Brown Dress */}
            <path
              d="M 160 235 C 180 230, 235 240, 245 270 C 255 300, 310 340, 315 365 C 320 385, 280 395, 260 380 C 235 360, 215 385, 195 365 C 180 350, 160 365, 150 340 C 135 305, 145 255, 160 235 Z"
              fill="#A05928"
              stroke="#000000"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Head (Peach Base) */}
            <circle
              cx="185"
              cy="165"
              r="80"
              fill="#FFCEBD"
              stroke="#000000"
              strokeWidth="16"
            />

            {/* Hair (Blond Short Cut) */}
            <path
              d="M 108 170 C 105 110, 140 68, 190 68 C 245 68, 265 115, 260 170 C 245 145, 205 140, 185 145 C 150 152, 125 150, 108 170 Z"
              fill="#EBD25D"
              stroke="#000000"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Eyes */}
            <ellipse cx="148" cy="175" rx="8" ry="13" fill="#000000" />
            <ellipse cx="218" cy="175" rx="8" ry="13" fill="#000000" />

            {/* Smile */}
            <path
              d="M 166 202 Q 185 218 202 202"
              fill="none"
              stroke="#000000"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

export default FairyIcon;

