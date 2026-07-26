"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative w-full py-20 lg:py-24 bg-[#156035] text-white overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Callout (Page 10 of PDF) */}
        <motion.div
          className="lg:col-span-6 flex flex-col items-start space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
            Get In Touch
          </span>

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

        {/* Right Contact Card (Page 10 of PDF) */}
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
              Company Details
            </span>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mt-1">
              Masako Enterprises Private Limited
            </h3>
          </div>

          <div className="space-y-6 text-sm">
            
            {/* Offices */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-[#156035] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <div>
                  <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider text-zinc-400">Thane Office</h4>
                  <p className="text-zinc-700 font-medium">1101, Shree Sankalp, G B Road, Thane West, Maharashtra - 400615</p>
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider text-zinc-400">Navi Mumbai Office</h4>
                  <p className="text-zinc-700 font-medium">207, 2nd Floor, Bldg No. 1(61), Sector-2, Millennium Business Park, Mahape, Navi Mumbai 400710, Maharashtra (India)</p>
                </div>
              </div>
            </div>

            {/* Customer Support Phone */}
            <div className="flex items-center gap-3.5 pt-2 border-t border-zinc-100">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-[#156035] flex items-center justify-center shrink-0">
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
            <div className="flex items-center gap-3.5 pt-2 border-t border-zinc-100">
              <div className="w-9 h-9 rounded-full bg-rose-100 text-[#E61C5D] flex items-center justify-center shrink-0">
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

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-6 mt-6 border-t border-zinc-100">
            <a href="#" className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-[#E61C5D] hover:text-white text-zinc-600 flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-[#E61C5D] hover:text-white text-zinc-600 flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-[#E61C5D] hover:text-white text-zinc-600 flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-[#E61C5D] hover:text-white text-zinc-600 flex items-center justify-center transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>

        </motion.div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-emerald-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/70 gap-4">
        <p>© 2026 Femmeflo Brand Profile • Masako Enterprises Private Limited. All rights reserved.</p>
        <p>Feel fresh feel free™</p>
      </div>
    </footer>
  );
}

export default ContactSection;
