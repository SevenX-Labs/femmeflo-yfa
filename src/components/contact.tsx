"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Share2, MessageCircle, Sparkles, ArrowUpRight, ShieldCheck, Heart, Leaf } from "lucide-react";

export function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative w-full bg-[#156035] text-white pt-20 lg:pt-24 pb-12 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Background Decorative Ambient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Top Hero Callout & Corporate Contact Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Callout */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-700/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-[family-name:var(--font-playfair)]">
              Together, let&apos;s <br />
              enable <span className="text-rose-300 italic font-normal">period freedom.</span>
            </h2>

            <p className="text-emerald-100/90 text-base sm:text-lg max-w-lg leading-relaxed">
              Partner with us to bring superior comfort, protection, and confidence to women everywhere.
            </p>

            <a
              href="mailto:masakoent@gmail.com"
              className="inline-flex items-center gap-3 bg-[#E61C5D] hover:bg-rose-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Right Corporate Contact Card */}
          <motion.div
            className="lg:col-span-6 bg-white text-zinc-900 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full h-2 bg-[#E61C5D] absolute top-0 left-0" />
            
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Corporate Entity
              </span>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mt-1">
                Masako Enterprises Private Limited
              </h3>
            </div>

            <div className="space-y-6 text-sm">
              
              {/* Office Locations */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-[#156035] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider text-zinc-400">Thane Office</h4>
                    <p className="text-zinc-700 font-medium leading-normal mt-0.5">
                      1101, Shree Sankalp, G B Road, Thane West, Maharashtra - 400615
                    </p>
                  </div>
                  <div className="pt-1 border-t border-zinc-100">
                    <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider text-zinc-400">Navi Mumbai Office</h4>
                    <p className="text-zinc-700 font-medium leading-normal mt-0.5">
                      207, 2nd Floor, Bldg No. 1(61), Sector-2, Millennium Business Park, Mahape, Navi Mumbai 400710, Maharashtra (India)
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Support Phone */}
              <div className="flex items-center gap-3.5 pt-3 border-t border-zinc-100">
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-[#156035] flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-400">Customer Support</h4>
                  <a href="tel:+912246054371" className="text-zinc-900 font-bold hover:text-[#E61C5D] transition-colors">
                    +91 22-46054371
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 pt-3 border-t border-zinc-100">
                <div className="w-9 h-9 rounded-full bg-rose-100 text-[#E61C5D] flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-400">Email Us</h4>
                  <a href="mailto:masakoent@gmail.com" className="text-[#E61C5D] font-bold hover:underline">
                    masakoent@gmail.com
                  </a>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Middle Footer Navigation Links & Brand Summary */}
        <div className="pt-12 border-t border-emerald-800/90 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-sm">
          
          {/* Brand Summary (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold tracking-tight font-[family-name:var(--font-playfair)] text-white">
                Femmeflo
              </span>
              <span className="text-xs bg-rose-500 text-white font-bold px-2 py-0.5 rounded-full">
                XL
              </span>
            </div>

            <p className="text-rose-200 font-serif italic text-base">
              &ldquo;Feel fresh feel free&rdquo;
            </p>

            <p className="text-emerald-100/80 text-xs leading-relaxed max-w-sm">
              Providing women the confidence to move and live without worry during their periods. High-performance sanitary pads designed for ultimate comfort and protection.
            </p>

            {/* Social Badges */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href="#" aria-label="Brand" className="w-8 h-8 rounded-full bg-emerald-800/80 hover:bg-[#E61C5D] text-emerald-200 hover:text-white flex items-center justify-center transition-colors">
                <Sparkles className="w-4 h-4 text-yellow-300" />
              </a>
              <a href="#" aria-label="Website" className="w-8 h-8 rounded-full bg-emerald-800/80 hover:bg-[#E61C5D] text-emerald-200 hover:text-white flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Contact" className="w-8 h-8 rounded-full bg-emerald-800/80 hover:bg-[#E61C5D] text-emerald-200 hover:text-white flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Share" className="w-8 h-8 rounded-full bg-emerald-800/80 hover:bg-[#E61C5D] text-emerald-200 hover:text-white flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-emerald-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <Link href="#hero" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">About Femmeflo</Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">Hero Product & Specs</Link>
              </li>
              <li>
                <Link href="#promise" className="hover:text-white transition-colors">Our Promise</Link>
              </li>
              <li>
                <Link href="#roadmap" className="hover:text-white transition-colors">Product Roadmap</Link>
              </li>
              <li>
                <Link href="#essence" className="hover:text-white transition-colors">Brand Identity</Link>
              </li>
            </ul>
          </div>

          {/* Product Lineup */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-emerald-200">
              Product Collection
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li className="flex items-center gap-1.5 font-bold text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-300" />
                <span>Femmeflo XL (280mm)</span>
              </li>
              <li>Fresh Day (240mm)</li>
              <li>Night Secure (320mm)</li>
              <li>Overnight Max</li>
              <li className="text-emerald-300 font-semibold">Femmeflo Ultra Thin (Soon)</li>
            </ul>
          </div>

          {/* Key Assurance */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-emerald-200">
              Quality Assurance
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-300" />
                <span>100% Dermatologically Tested</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-emerald-300" />
                <span>Cotton Soft Top Sheet</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-300" />
                <span>Advanced Leak Lock Core</span>
              </li>
              <li>0% Harsh Chemicals / Toxin Free</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-emerald-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/70 gap-4">
          <p>© 2026 Femmeflo Brand Profile • Masako Enterprises Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span className="text-white font-semibold">Feel fresh feel free™</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default ContactSection;
