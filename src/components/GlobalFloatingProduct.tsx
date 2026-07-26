"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Background Particles (hearts and leaves)
function BackgroundParticles() {
  const particles = [
    { type: "heart", top: "15%", left: "12%", size: 18, delay: 0, duration: 7 },
    { type: "heart", top: "45%", left: "80%", size: 22, delay: 2, duration: 8 },
    { type: "heart", top: "75%", left: "20%", size: 16, delay: 1, duration: 6.5 },
    { type: "heart", top: "25%", left: "70%", size: 20, delay: 3, duration: 9 },
    { type: "leaf", top: "20%", left: "85%", size: 22, delay: 0.5, duration: 7.5 },
    { type: "leaf", top: "60%", left: "10%", size: 24, delay: 2.5, duration: 8.5 },
    { type: "leaf", top: "80%", left: "75%", size: 20, delay: 1.5, duration: 7 },
    { type: "leaf", top: "10%", left: "40%", size: 18, delay: 3.5, duration: 9.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p, index) => (
        <motion.div
          key={index}
          className="absolute opacity-45 select-none"
          style={{ top: p.top, left: p.left }}
          animate={{
            y: [-10, 15, -10],
            x: [-8, 8, -8],
            rotate: [-12, 12, -12],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        >
          {p.type === "heart" ? (
            <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="#E61C5D" className="drop-shadow-sm">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="#156035" className="drop-shadow-sm">
              <path d="M17 8C8 10 59 16.17 3.82 21.34l1.42 1.42c.39.39 1.02.39 1.41 0L12 17.58c1.53.58 3.25.75 4.88.42 4.14-.85 7.12-4.52 7.12-8.75V8h-7z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function GlobalFloatingProduct() {
  const fixedContainerRef = useRef<HTMLDivElement>(null);

  // Mouse interactivity values
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const mouseX = useSpring(rawMouseX, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;
      rawMouseX.set(normX * 18);
      rawMouseY.set(normY * 12);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  useEffect(() => {
    const target = fixedContainerRef.current;
    if (!target) return;

    // Master update function to transition product diagonally across screen from Right to Left
    const updatePosition = () => {
      const heroAnchor = document.getElementById("hero-product-anchor");
      const aboutAnchor = document.getElementById("about-product-anchor");

      if (!heroAnchor || !aboutAnchor) return;

      const hRect = heroAnchor.getBoundingClientRect();
      const aRect = aboutAnchor.getBoundingClientRect();

      const isDesktop = window.innerWidth >= 1024;

      // Determine starting Hero X (Right side) and ending About X (Left side)
      let heroX = hRect.left + hRect.width / 2;
      let aboutX = aRect.left + aRect.width / 2;

      // Guarantee diagonal crossing from Right (72%) to Left (28%) on desktop viewports
      if (isDesktop) {
        heroX = Math.max(heroX, window.innerWidth * 0.72);
        aboutX = Math.min(aboutX, window.innerWidth * 0.28);
      }

      const heroY = hRect.top + hRect.height / 2;
      const aboutY = aRect.top + aRect.height / 2;

      const scrollY = window.scrollY;
      const aboutDocY = aRect.top + scrollY;

      // Transition completes as About glass card reaches center of viewport
      const endScroll = Math.max(1, aboutDocY + aRect.height / 2 - window.innerHeight / 2);

      // Clamp progress between 0 (Hero right column) and 1 (About left card)
      const p = Math.max(0, Math.min(1, scrollY / endScroll));

      // Diagonal cross calculation: Right side -> Left side
      const curX = heroX + (aboutX - heroX) * p;
      const curY = heroY + (aboutY - heroY) * p;

      // Apply 60FPS transform update
      gsap.set(target, {
        x: curX,
        y: curY,
        xPercent: -50,
        yPercent: -50,
        scale: 1 - 0.12 * p,
        rotationZ: -8 * p,
        rotationY: 15 * p,
        opacity: 1,
      });
    };

    // Attach passive scroll and resize listeners for smooth 60FPS precision
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition, { passive: true });
    
    // Initial position on load
    updatePosition();
    requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    // Fixed Root Layer: Always on top (z-index: 9999), opacity-0 initially until measured
    <div
      ref={fixedContainerRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none select-none flex items-center justify-center opacity-0 will-change-transform"
      style={{ willChange: "transform" }}
    >
      {/* Background Soft Glow Orbs */}
      <motion.div
        className="absolute w-[440px] h-[440px] rounded-full bg-[#E61C5D]/22 blur-3xl pointer-events-none -z-10"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.28, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[390px] h-[390px] rounded-full bg-[#156035]/16 blur-3xl pointer-events-none -z-10"
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.15, 0.22, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      <BackgroundParticles />

      {/* Continuous Idle Floating Animation: Y: -8px ↔ +8px, rotate: -2° ↔ +2°, duration: 6s infinite */}
      <motion.div
        className="relative w-[340px] sm:w-[480px] lg:w-[560px] flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          y: [-8, 8, -8],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="relative w-full h-auto flex items-center justify-center"
          style={{
            filter: "drop-shadow(0 45px 55px rgba(0,0,0,0.18))",
          }}
        >
          <Image
            src="/femmeflo-withoutbg.png"
            alt="Femmeflo XL Sanitary Pads"
            width={650}
            height={650}
            priority
            className="w-full h-auto object-contain pointer-events-none max-h-[460px] sm:max-h-[520px] lg:max-h-[580px]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default GlobalFloatingProduct;
