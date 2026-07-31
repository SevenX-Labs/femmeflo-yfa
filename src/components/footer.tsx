"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Globe, MessageCircle, Share2, ShieldCheck, Heart, Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#081F15] text-white pt-16 pb-12 overflow-hidden font-[family-name:var(--font-jakarta)] border-t border-emerald-900/60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Navigation Links & Brand Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-sm">
          
          {/* Brand Summary (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold tracking-tight font-[family-name:var(--font-playfair)] text-[#4ADE80]">
                Femmeflo
              </span>
              <span className="text-xs bg-[#E61C5D] text-white font-bold px-2 py-0.5 rounded-full">
                XL
              </span>
            </div>

            <p className="text-[#FF85A1] font-serif italic text-base font-semibold">
              &ldquo;Feel fresh feel free&rdquo;
            </p>

            <p className="text-emerald-100/70 text-xs leading-relaxed max-w-sm">
              Providing women the confidence to move and live without worry during their periods. High-performance sanitary pads designed for ultimate comfort and protection.
            </p>

            {/* Social Badges */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href="#" aria-label="Brand" className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-800/80 hover:bg-[#E61C5D] text-emerald-200 hover:text-white flex items-center justify-center transition-colors">
                <Sparkles className="w-4 h-4 text-[#FDE047]" />
              </a>
              <a href="#" aria-label="Website" className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-800/80 hover:bg-[#E61C5D] text-emerald-200 hover:text-white flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Contact" className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-800/80 hover:bg-[#E61C5D] text-emerald-200 hover:text-white flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Share" className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-800/80 hover:bg-[#E61C5D] text-emerald-200 hover:text-white flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li>
                <Link href="#hero" className="hover:text-[#FF85A1] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#FF85A1] transition-colors">About Femmeflo</Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#FF85A1] transition-colors">Hero Product & Specs</Link>
              </li>
              <li>
                <Link href="#promise" className="hover:text-[#FF85A1] transition-colors">Our Promise</Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="hover:text-[#FF85A1] transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link href="#essence" className="hover:text-[#FF85A1] transition-colors">Brand Identity</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#FF85A1] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Product Lineup */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Product Lineup
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li className="flex items-center gap-1.5 font-bold text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF85A1]" />
                <span>Femmeflo XL (280mm)</span>
              </li>
              <li>Fresh Day (240mm)</li>
              <li>Night Secure (320mm)</li>
              <li>Overnight Max</li>
              <li className="text-[#4ADE80] font-semibold">Femmeflo Ultra Thin</li>
            </ul>
          </div>

          {/* Key Assurance */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Quality Assurance
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#FF85A1]" />
                <span>100% Dermatologically Tested</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#4ADE80]" />
                <span>Cotton Soft Top Sheet</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FDE047]" />
                <span>Advanced Leak Lock Core</span>
              </li>
              <li>0% Harsh Chemicals / Toxin Free</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-emerald-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/60 gap-4">
          <p>© 2026 Femmeflo Brand Profile • Masako Enterprises Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-[#4ADE80] font-semibold">Feel fresh feel free™</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
