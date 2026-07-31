"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Heart, Quote, CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ananya Sharma",
    location: "Mumbai",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote: "Switching to Femmeflo XL was the best decision I made for my period. Zero rashes, soft cotton feel, and true 12-hour leak-free confidence!",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Ahmedabad",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote: "The extra-wide 280mm wings stay firmly in place all day. I can work, travel, and sleep comfortably without constantly worrying about stains.",
  },
  {
    id: 3,
    name: "Rhea Sen",
    location: "Kolkata",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote: "Unbeatable quality at ₹40! The absorption speed is incredible and the cottony top sheet keeps my sensitive skin rash-free.",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    location: "Bengaluru",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote: "I've tried so many brands before, but Femmeflo is by far the softest and most reliable. It truly gives you period freedom!",
  },
  {
    id: 5,
    name: "Meera Nair",
    location: "Kochi",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote: "The heavy flow protection gives me complete peace of mind during overnight sleep. Highly recommended to every woman!",
  },
];

const surroundingAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
];

export function HappyCustomers() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIdx];

  return (
    <section
      id="happy-customers"
      className="relative w-full bg-gradient-to-b from-[#E6F4EC] via-[#EEFAF3] to-[#E2F2E9] border-b border-emerald-200/50 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Decorative Wavy Background Shape */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

      {/* Radial Ambient Glows */}
      <div className="absolute top-1/3 left-[-5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-[-5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-teal-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <motion.div
          className="max-w-3xl space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#156035]/10 border border-[#156035]/20 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#156035]">
            <Heart className="w-4 h-4 text-[#E61C5D] fill-[#E61C5D]" />
            <span>Community Love</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-jakarta)]">
            5 Lakh+{" "}
            <span className="font-[family-name:var(--font-playfair)] italic font-normal text-[#E61C5D]">
              happy customers
            </span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg">
            Empowering women across India with comfort, safety, and leak-free period confidence every single day.
          </p>
        </motion.div>

        {/* Customer Cloud Container with Central Highlight Card */}
        <div className="relative w-full max-w-5xl my-4 min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
          
          {/* Floating Background Avatars Grid (Desktop & Tablet) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Left Side Floating Avatars */}
            <motion.img
              src={surroundingAvatars[0]}
              alt="Customer"
              className="absolute top-4 left-[4%] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-lg border-2 border-white opacity-85"
              animate={{ y: [-6, 6, -6], rotate: [-3, 3, -3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={surroundingAvatars[1]}
              alt="Customer"
              className="absolute top-28 left-[14%] w-14 h-14 sm:w-18 sm:h-18 rounded-2xl object-cover shadow-md border-2 border-white opacity-90"
              animate={{ y: [6, -6, 6], rotate: [2, -2, 2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.img
              src={surroundingAvatars[2]}
              alt="Customer"
              className="absolute bottom-8 left-[6%] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-lg border-2 border-white opacity-80"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.img
              src={surroundingAvatars[3]}
              alt="Customer"
              className="absolute bottom-28 left-[18%] w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover shadow-md border-2 border-white opacity-90"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />

            {/* Decorative Ribbon Heart Loop Graphic (Sandwiched Behind Card) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[180px] pointer-events-none -z-10 opacity-70">
              <svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M 20 120 C 90 180, 160 80, 200 120 C 230 150, 260 160, 290 110 C 330 40, 420 150, 480 120"
                  stroke="#E61C5D"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="8 6"
                />
                <path
                  d="M 350 70 C 370 40, 400 40, 410 70 C 420 100, 380 130, 350 150 C 320 130, 280 100, 290 70 C 300 40, 330 40, 350 70 Z"
                  fill="#FCD34D"
                  stroke="#E61C5D"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Right Side Floating Avatars */}
            <motion.img
              src={surroundingAvatars[4]}
              alt="Customer"
              className="absolute top-4 right-[4%] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-lg border-2 border-white opacity-85"
              animate={{ y: [6, -6, 6], rotate: [3, -3, 3] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={surroundingAvatars[5]}
              alt="Customer"
              className="absolute top-28 right-[14%] w-14 h-14 sm:w-18 sm:h-18 rounded-2xl object-cover shadow-md border-2 border-white opacity-90"
              animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            <motion.img
              src={surroundingAvatars[6]}
              alt="Customer"
              className="absolute bottom-8 right-[6%] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-lg border-2 border-white opacity-80"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />
            <motion.img
              src={surroundingAvatars[7]}
              alt="Customer"
              className="absolute bottom-28 right-[18%] w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover shadow-md border-2 border-white opacity-90"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            />
          </div>

          {/* Central Highlight Testimonial Showcase Card */}
          <div className="relative z-20 w-full max-w-lg mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white/90 backdrop-blur-2xl border-2 border-white p-6 sm:p-8 rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.08)] flex flex-col items-center text-center space-y-5"
              >
                {/* Customer Avatar */}
                <div className="relative">
                  <img
                    src={active.avatar}
                    alt={active.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover shadow-md border-4 border-emerald-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#156035] text-white p-1.5 rounded-full shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B]" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-zinc-800 font-medium text-base sm:text-lg leading-relaxed italic font-[family-name:var(--font-jakarta)] max-w-md">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>

                {/* Customer Details */}
                <div>
                  <h3 className="text-base font-bold text-zinc-900">{active.name}</h3>
                  <p className="text-xs text-zinc-500 font-medium">{active.location} • {active.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Carousel Indicators & Controls */}
        <div className="flex items-center gap-4 mt-6 z-20">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full bg-white hover:bg-emerald-50 text-zinc-700 hover:text-[#156035] border border-emerald-200/80 flex items-center justify-center shadow-sm transition-all active:scale-95"
            aria-label="Previous customer review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveIdx(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeIdx === idx
                    ? "w-8 h-2.5 bg-[#E61C5D]"
                    : "w-2.5 h-2.5 bg-emerald-200 hover:bg-emerald-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full bg-white hover:bg-emerald-50 text-zinc-700 hover:text-[#156035] border border-emerald-200/80 flex items-center justify-center shadow-sm transition-all active:scale-95"
            aria-label="Next customer review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default HappyCustomers;
