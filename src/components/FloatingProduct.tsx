"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP ScrollTrigger is registered on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Sub-component for subtle background particles (hearts & leaves)
function BackgroundParticles() {
  const particles = [
    // Hearts
    { type: "heart", top: "15%", left: "12%", size: 18, delay: 0, duration: 7 },
    { type: "heart", top: "45%", left: "80%", size: 22, delay: 2, duration: 8 },
    { type: "heart", top: "75%", left: "20%", size: 16, delay: 1, duration: 6.5 },
    { type: "heart", top: "25%", left: "70%", size: 20, delay: 3, duration: 9 },
    // Leaves
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
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="#E61C5D"
              className="drop-shadow-sm"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="#156035"
              className="drop-shadow-sm"
            >
              <path d="M17 8C8 10 59 16.17 3.82 21.34l1.42 1.42c.39.39 1.02.39 1.41 0L12 17.58c1.53.58 3.25.75 4.88.42 4.14-.85 7.12-4.52 7.12-8.75V8h-7z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function FloatingProduct() {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  // Motion values for smooth mouse movement following cursor
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  // Smooth springs for mouse translation (Max 20px X, 15px Y)
  const mouseX = useSpring(rawMouseX, { stiffness: 60, damping: 18 });
  const mouseY = useSpring(rawMouseY, { stiffness: 60, damping: 18 });

  // Handle window mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Convert cursor position to range [-1, 1] relative to screen center
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;

      // Apply max movement constraints: 20px X, 15px Y
      rawMouseX.set(normX * 20);
      rawMouseY.set(normY * 15);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  // GSAP ScrollTrigger setup
  useEffect(() => {
    const el = scrollWrapperRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 65%",
          end: "bottom top",
          scrub: 1.2,
        },
        y: -140,
        scale: 0.92,
        rotation: 12,
        x: -120,
        ease: "power1.out",
      });
    }, scrollWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center lg:justify-end py-6 select-none">
      {/* Background Huge Blurred Gradient Circles */}
      {/* Pink Glow: size 420px, opacity 25%, animating slowly */}
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full bg-[#E61C5D]/25 blur-3xl pointer-events-none z-0"
        style={{ top: "45%", left: "55%", transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.22, 0.28, 0.22],
          x: [-15, 15, -15],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Green Glow: size 380px, opacity 18%, animating slowly */}
      <motion.div
        className="absolute w-[380px] h-[380px] rounded-full bg-[#156035]/18 blur-3xl pointer-events-none z-0"
        style={{ top: "35%", left: "45%", transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.15, 0.22, 0.15],
          x: [12, -12, 12],
          y: [12, -12, 12],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles behind product */}
      <BackgroundParticles />

      {/* GSAP Scroll Wrapper */}
      <div ref={scrollWrapperRef} className="relative z-10 w-full max-w-[650px] lg:max-w-[700px] flex justify-center lg:justify-end">
        {/* Framer Motion Floating & Mouse Interactivity */}
        <motion.div
          className="relative w-full max-w-[620px] sm:max-w-[660px] lg:max-w-[700px]"
          style={{
            x: mouseX,
            y: mouseY,
          }}
          animate={{
            y: [-12, 12, -12],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Realistic Blurred Drop Shadow & Product Image */}
          <div
            className="relative w-full h-auto flex justify-center items-center"
            style={{
              filter: "drop-shadow(0 45px 55px rgba(0,0,0,0.18))",
            }}
          >
            <Image
              src="/femmeflo-withoutbg.png"
              alt="Femmeflo XL Sanitary Pads"
              width={700}
              height={700}
              priority
              className="w-full h-auto object-contain pointer-events-none max-h-[580px] sm:max-h-[640px] lg:max-h-[700px]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
