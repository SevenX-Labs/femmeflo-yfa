"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Heart,
  CheckCircle2,
  Users
} from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-[#FFF9F7] via-[#FDF3F5] to-[#FAF5F7] px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 text-zinc-900 overflow-hidden font-[family-name:var(--font-jakarta)] border-b border-rose-100/50"
    >
      {/* Background Decorative Ambient Radial Lighting Orbs */}
      <div className="absolute top-0 right-[-5%] w-[550px] h-[550px] bg-rose-200/35 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-[-5%] w-[550px] h-[550px] bg-pink-200/35 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Background Floral Watermark Line Art SVG */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 pointer-events-none select-none z-0 opacity-15 w-[420px] h-[420px]">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full stroke-[#E61C5D]" strokeWidth="1.5">
          <circle cx="200" cy="200" r="160" strokeDasharray="4 4" />
          <path d="M 200 40 C 240 120, 280 160, 360 200 C 280 240, 240 280, 200 360 C 160 280, 120 240, 40 200 C 120 160, 160 120, 200 40 Z" />
        </svg>
      </div>

      {/* SOFT ANIMATED FLOATING ROSE PETALS */}
      <div className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden">
        <motion.div
          className="absolute top-12 left-[10%] text-pink-400 opacity-80"
          animate={{
            y: [0, 40, 80],
            x: [0, 15, -10],
            rotate: [0, 45, 90],
            opacity: [0.3, 0.9, 0.2],
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 30 30" fill="currentColor" className="w-6 h-6">
            <path d="M15 3 C24 10, 27 22, 15 26 C3 22, 6 10, 15 3 Z" opacity="0.85" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-10 right-[35%] text-pink-400 opacity-80"
          animate={{
            y: [0, 50, 100],
            x: [0, -15, 10],
            rotate: [0, -45, -90],
            opacity: [0.3, 0.9, 0.2],
          }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <svg viewBox="0 0 28 28" fill="currentColor" className="w-5 h-5">
            <path d="M14 2 C22 9, 25 21, 14 25 C3 21, 6 9, 14 2 Z" opacity="0.85" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-[8%] text-pink-400 opacity-75"
          animate={{
            y: [0, -40, -80],
            x: [0, 12, -12],
            rotate: [0, 40, 80],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        >
          <svg viewBox="0 0 26 26" fill="currentColor" className="w-5 h-5">
            <path d="M13 2 C20 8, 23 19, 13 23 C3 19, 6 8, 13 2 Z" opacity="0.8" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* MAIN LAYOUT GRID (LEFT EDITORIAL + RIGHT CORPORATE CARD) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mb-16">
          
          {/* LEFT COLUMN: EDITORIAL HEADING & ACTION */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-[#E61C5D] font-bold text-xs uppercase tracking-wider shadow-2xs select-none">
              <Sparkles className="w-3.5 h-3.5 text-[#E61C5D]" />
              <span>GET IN TOUCH</span>
            </div>

            {/* Editorial Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)] leading-[1.1]">
              Together, let&apos;s <br />
              enable{" "}
              <span className="text-[#E61C5D] italic font-[family-name:var(--font-playfair)] font-normal">
                period freedom.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-600 text-base sm:text-lg max-w-md leading-relaxed font-normal">
              Partner with us to bring superior comfort, protection, and confidence to women everywhere.
            </p>

            {/* Let's Connect CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#E61C5D] to-rose-600 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* 3 Pillar Badges Row */}
            <div className="pt-6 border-t border-rose-100/80 w-full flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-zinc-700">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-rose-100 text-[#E61C5D] flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Trusted by Women</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#156035] flex items-center justify-center">
                  <Leaf className="w-3.5 h-3.5" />
                </div>
                <span>Superior Quality</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-rose-100 text-[#E61C5D] flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <span>Care in Every Detail</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CORPORATE ENTITY CONTACT CARD (PREMIUM GLASS CARD) */}
          <motion.div
            className="lg:col-span-6 bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[32px] p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.06)] relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Top Accent Line */}
            <div className="w-full h-1.5 bg-gradient-to-r from-emerald-500 via-[#E61C5D] to-rose-500 absolute top-0 left-0" />

            <div className="mb-8">
              <span className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                CORPORATE ENTITY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mt-1">
                Masako Enterprises Private Limited
              </h3>
            </div>

            <div className="space-y-6 text-sm">
              
              {/* Thane Office */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100/80 text-[#156035] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#156035]">THANE OFFICE</h4>
                  <p className="text-zinc-700 font-medium leading-relaxed mt-0.5">
                    101, Shree Sankalp, G B Road, Thane West, Maharashtra - 400615
                  </p>
                </div>
              </div>

              {/* Navi Mumbai Office */}
              <div className="flex items-start gap-4 pt-4 border-t border-rose-50">
                <div className="w-10 h-10 rounded-2xl bg-rose-100/80 text-[#E61C5D] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#E61C5D]">NAVI MUMBAI OFFICE</h4>
                  <p className="text-zinc-700 font-medium leading-relaxed mt-0.5">
                    207 Building no 1 Millenium Business Park, Sector-2 Mahape Navi Mumbai 400710
                  </p>
                </div>
              </div>

              {/* Customer Support */}
              <div className="flex items-center gap-4 pt-4 border-t border-rose-50">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100/80 text-[#156035] flex items-center justify-center shrink-0 shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#156035]">CUSTOMER SUPPORT</h4>
                  <a href="tel:+9122440634371" className="text-zinc-900 font-bold hover:text-[#E61C5D] transition-colors text-base">
                    +91 98206 76562
                  </a>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-center gap-4 pt-4 border-t border-rose-50">
                <div className="w-10 h-10 rounded-2xl bg-rose-100/80 text-[#E61C5D] flex items-center justify-center shrink-0 shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#E61C5D]">EMAIL US</h4>
                  <a href="mailto:sales@femmeflo.in" className="text-zinc-900 font-bold hover:text-[#E61C5D] transition-colors text-base block">
                    sales@femmeflo.in
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-center gap-4 pt-4 border-t border-rose-50">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100/80 text-[#156035] flex items-center justify-center shrink-0 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#156035]">BUSINESS HOURS</h4>
                  <p className="text-zinc-800 font-semibold">
                    Mon - Sat: 9:30 AM - 6:30 PM
                  </p>
                </div>
              </div>

              {/* Visit Our Website */}
              

            </div>

            {/* Google Maps Button Inside Card */}
            <div className="mt-8 pt-4">
              <a
                href="https://maps.google.com/?q=207+Building+no+1+Millenium+Business+Park,+Sector-2,+Mahape,+Navi+Mumbai+400710"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-rose-50/90 border border-rose-200/80 text-[#E61C5D] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#E61C5D] hover:text-white transition-all shadow-2xs group"
              >
                <MapPin className="w-4 h-4 text-[#E61C5D] group-hover:text-white transition-colors" />
                <span>View on Google Maps</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

        </div>

        {/* BOTTOM FLOATING GLASS TRUST BAR */}
        <motion.div
          className="w-full max-w-6xl mx-auto rounded-[40px] bg-white/90 backdrop-blur-2xl border border-zinc-200/70 py-4.5 px-8 sm:px-12 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-wrap items-center justify-between gap-6 text-xs sm:text-sm font-semibold text-zinc-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#E61C5D]" />
              <span>Dermatologically Tested</span>
            </div>

            <div className="flex items-center gap-2">
              <Leaf className="w-4.5 h-4.5 text-[#156035]" />
              <span>Safe &amp; Skin Friendly</span>
            </div>

            <div className="flex items-center gap-2">
              <Heart className="w-4.5 h-4.5 text-[#E61C5D]" />
              <span>Trusted by Millions</span>
            </div>

            <div className="flex items-center gap-2">
              <Globe className="w-4.5 h-4.5 text-[#156035]" />
              <span>Made for India</span>
            </div>
          </div>

          <div className="font-[family-name:var(--font-playfair)] italic font-normal text-[#E61C5D] text-sm sm:text-base">
            Made with care for every woman.
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactSection;
