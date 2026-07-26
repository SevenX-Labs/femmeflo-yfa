"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Sparkles, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full py-20 lg:py-28 bg-[#EAF5EE]/60 border-t border-zinc-200/80 text-zinc-900 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Background Decorative Ambient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Callout */}
        <motion.div
          className="lg:col-span-6 flex flex-col items-start space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#156035]/10 border border-[#156035]/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#156035]">
            <Sparkles className="w-3.5 h-3.5 text-[#E61C5D]" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-zinc-900 font-[family-name:var(--font-playfair)]">
            Together, let&apos;s <br />
            enable <span className="text-[#E61C5D] italic font-normal">period freedom.</span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg max-w-lg leading-relaxed">
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
          className="lg:col-span-6 bg-white border border-zinc-200/80 text-zinc-900 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden"
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
              <div className="w-9 h-9 rounded-full bg-emerald-100/80 text-[#156035] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
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
              <div className="w-9 h-9 rounded-full bg-emerald-100/80 text-[#156035] flex items-center justify-center shrink-0 shadow-xs">
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
    </section>
  );
}

export default ContactSection;
