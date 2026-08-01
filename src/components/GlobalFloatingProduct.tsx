"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Leaf } from "lucide-react";
import { FairyIcon } from "@/components/FairyIcon";

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
            <Heart size={p.size} className="text-[#E61C5D] fill-[#E61C5D] drop-shadow-sm" />
          ) : (
            <Leaf size={p.size} className="text-[#156035] fill-[#156035] drop-shadow-sm" />
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
    const updatePosition = () => {
      if (typeof window === "undefined" || window.innerWidth < 768) return;
      const target = fixedContainerRef.current;
      if (!target) return;

      const heroAnchor = document.getElementById("hero-product-anchor");
      const aboutAnchor = document.getElementById("about-product-anchor");
      const productAnchor = document.getElementById("product-price-anchor");

      if (!heroAnchor || !aboutAnchor) return;

      const hRect = heroAnchor.getBoundingClientRect();
      const aRect = aboutAnchor.getBoundingClientRect();
      const pRect = productAnchor ? productAnchor.getBoundingClientRect() : null;

      // Center positions of anchors relative to viewport
      const heroX = hRect.left + hRect.width / 2;
      const heroY = hRect.top + hRect.height / 2;

      const aboutX = aRect.left + aRect.width / 2;
      const aboutY = aRect.top + aRect.height / 2;

      const scrollY = window.scrollY;

      // Scroll Y threshold where About section is centered in viewport
      const aboutDocY = aRect.top + scrollY;
      const aboutScrollTarget = Math.max(1, aboutDocY + aRect.height / 2 - window.innerHeight * 0.5);

      let curX = heroX;
      let curY = heroY;
      let scale = 1;
      let rotZ = 0;
      let rotY = 0;

      if (pRect && scrollY > aboutScrollTarget) {
        // Stage 2: Transition from About (Left) to Product Section (Right)
        const productDocY = pRect.top + scrollY;
        const productScrollTarget = Math.max(aboutScrollTarget + 100, productDocY + pRect.height / 2 - window.innerHeight * 0.5);

        const productX = pRect.left + pRect.width / 2;
        const productY = pRect.top + pRect.height / 2;

        const rawP2 = Math.max(0, Math.min(1, (scrollY - aboutScrollTarget) / (productScrollTarget - aboutScrollTarget)));
        const p2 = rawP2 < 0.5 ? 2 * rawP2 * rawP2 : 1 - Math.pow(-2 * rawP2 + 2, 2) / 2;

        curX = aboutX + (productX - aboutX) * p2;
        curY = aboutY + (productY - aboutY) * p2;
        scale = 0.88 + 0.12 * p2;
        rotZ = -8 + 8 * p2;
        rotY = 15 - 15 * p2;
      } else {
        // Stage 1: Transition from Hero (Right) to About (Left)
        const rawP1 = Math.max(0, Math.min(1, scrollY / aboutScrollTarget));
        const p1 = rawP1 < 0.5 ? 2 * rawP1 * rawP1 : 1 - Math.pow(-2 * rawP1 + 2, 2) / 2;

        curX = heroX + (aboutX - heroX) * p1;
        curY = heroY + (aboutY - heroY) * p1;
        scale = 1 - 0.12 * p1;
        rotZ = -8 * p1;
        rotY = 15 * p1;
      }

      // Apply 60FPS transform update
      gsap.set(target, {
        x: curX,
        y: curY,
        xPercent: -50,
        yPercent: -50,
        scale: scale,
        rotationZ: rotZ,
        rotationY: rotY,
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
    // Fixed Root Layer: Below navbar (z-index: 30), opacity-0 initially until measured
    <div
      ref={fixedContainerRef}
      className="hidden md:flex fixed top-0 left-0 z-30 pointer-events-none select-none items-center justify-center opacity-0 will-change-transform"
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

      {/* Product Image Container */}
      <motion.div
        className="relative w-[260px] sm:w-[520px] lg:w-[640px] flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      >
        <div
          className="relative w-full h-auto flex items-center justify-center"
          style={{
            filter: "drop-shadow(0 45px 55px rgba(0,0,0,0.18))",
          }}
        >
          {/* Continuous Upright Rotating Orbit around WHOLE Product Box (Moves WITH product) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
            <motion.div
              className="w-[105%] h-[105%] relative flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8.5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 8.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <FairyIcon className="w-16 h-16 sm:w-24 sm:h-24" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <Image
            src="/femmeflo-withoutbg.png"
            alt="Femmeflo XL Sanitary Pads"
            width={800}
            height={800}
            priority
            className="w-full h-auto object-contain pointer-events-none max-h-[320px] sm:max-h-[520px] lg:max-h-[640px]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default GlobalFloatingProduct;
