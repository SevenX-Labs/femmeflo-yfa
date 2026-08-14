"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface CustomerReview {
  id: number;
  name: string;
  role: string;
  quote: string;
  mainImage: string;
}

const customerReviews: CustomerReview[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Verified Buyer • Uttar Pradesh",
    quote: "I used top commercial brands for years and always suffered from rashes. Ever since switching to Femmeflo, my period days feel 100% comfortable and irritation-free.",
    mainImage: "/indian-customer-main.webp",
  },
  {
    id: 2,
    name: "Ananya Patel",
    role: "Daily Commuter • Gujarat",
    quote: "Other pads used to bunch up and shift during my train commute. Femmeflo's 280mm double wings lock firmly in place with zero leaks all day.",
    mainImage: "/indian-customer-main.webp",
  },
  {
    id: 3,
    name: "Rhea Sen",
    role: "Community Member • West Bengal",
    quote: "Why pay triple for plastic pads? Femmeflo offers pure organic cotton softness, supreme absorbency, and unbeatable comfort that no other brand delivers.",
    mainImage: "/indian-customer-main.webp",
  },
];

export function HappyCustomers() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const show = () => setVideoLoaded(true);
    // If already loaded (cached), show immediately
    if (vid.readyState >= 3) { show(); return; }
    vid.addEventListener("loadeddata", show);
    vid.addEventListener("canplay", show);
    vid.addEventListener("playing", show);
    // Fallback: always reveal after 2s even if events don't fire
    const timer = setTimeout(show, 2000);
    return () => {
      vid.removeEventListener("loadeddata", show);
      vid.removeEventListener("canplay", show);
      vid.removeEventListener("playing", show);
      clearTimeout(timer);
    };
  }, []);

  const active = customerReviews[activeIdx];

  return (
    <section  
      id="happy-customers"
      className="relative w-full bg-gradient-to-br from-[#EDF9F3] via-[#FFF3F5] to-[#EBF5FC] border-b border-rose-100/60 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* LUXURY TOP ANIMATED WAVY HEADER SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none select-none">
        <motion.svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-24 fill-white/80 backdrop-blur-md"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M0,0 L1440,0 L1440,40 C1200,95 960,10 720,50 C480,90 240,15 0,60 Z" />
        </motion.svg>
      </div>

      {/* LUXURY BOTTOM ANIMATED WAVY FOOTER SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none select-none rotate-180 opacity-40">
        <motion.svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-24 fill-rose-100/60"
          animate={{ x: [10, -10, 10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M0,0 L1440,0 L1440,40 C1200,95 960,10 720,50 C480,90 240,15 0,60 Z" />
        </motion.svg>
      </div>

      {/* Background Soft Glow Orbs */}
      <div className="absolute top-10 left-[-5%] w-[450px] h-[450px] bg-emerald-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-5%] w-[500px] h-[500px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 space-y-12">
        
        {/* Sub-section Header */}
        <motion.div
          className="space-y-3 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/80 border border-rose-200 text-xs font-bold text-rose-700 shadow-2xs">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span>REAL HAPPY WOMEN REVIEWS</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)]">
            Trusted By Thousands
          </h3>

          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-medium">
            Read authentic stories from verified happy customers who switched to Femmeflo XL for 100% rash-free comfort.
          </p>
        </motion.div>

        {/* MAIN STAGE: Center Interactive Circle + Left/Right Floating Avatars */}
        <div className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[460px] my-4">
          
          {/* Background Animated Curved Ribbon Paths (Behind Center Circle) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 select-none">
            <svg viewBox="0 0 1000 360" fill="none" className="w-full h-full">
              {/* Pink Sweeping Ribbon Path */}
              <path
                d="M 50 180 C 120 220, 160 110, 220 120 C 280 130, 270 240, 200 240 C 140 240, 170 140, 260 170 C 350 200, 420 280, 500 280 C 580 280, 650 200, 740 170 C 830 140, 860 240, 800 240 C 730 240, 720 130, 780 120 C 840 110, 880 220, 950 180"
                stroke="#F8A5B0"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* LEFT CLUSTER: Floating Avatars with Hindi Testimonial Tooltips */}
          <div className="hidden lg:block absolute left-0 inset-y-0 w-[28%] xl:w-[32%] z-10">
            {/* Avatar 1 */}
            <div className="absolute top-4 left-[10%] group pointer-events-auto">
              <img loading="lazy" src="/avatar-indian-1.webp" alt="Customer Review" className="w-14 h-14 xl:w-16 xl:h-16 rounded-full object-cover shadow-md border-2 border-white animate-float-slow transform-gpu cursor-pointer transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute top-full left-0 mt-2 px-3.5 py-2 rounded-xl bg-white/98 backdrop-blur-md border border-rose-200/90 shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 w-[210px] sm:w-[230px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[11px] text-amber-500 font-bold">★★★★★</span>
                  <span className="text-[9px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-full">वेरीफाइड बायर</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium leading-snug">पहले दूसरे पैड्स से रैशेस होते थे, जबसे Femmeflo लिया है तबसे 100% आराम है! ⭐</p>
              </div>
            </div>

            {/* Avatar 2 */}
            <div className="absolute top-2 left-[55%] group pointer-events-auto">
              <img loading="lazy" src="/avatar-indian-2.webp" alt="Customer Review" className="w-15 h-15 xl:w-17 xl:h-17 rounded-2xl object-cover shadow-lg border-2 border-white animate-float-alt transform-gpu cursor-pointer transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute top-full right-0 mt-2 px-3.5 py-2 rounded-xl bg-white/98 backdrop-blur-md border border-rose-200/90 shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 w-[210px] sm:w-[230px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[11px] text-amber-500 font-bold">★★★★★</span>
                  <span className="text-[9px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-full">वेरीफाइड बायर</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium leading-snug">कई ब्रांड्स ट्राय किए, पर Femmeflo जैसा सॉफ्ट कम्फर्ट और सूखापन कहीं नहीं मिला! ✅</p>
              </div>
            </div>

            {/* Avatar 3 */}
            <div className="absolute top-[42%] left-[6%] group pointer-events-auto">
              <img loading="lazy" src="/avatar-indian-3.webp" alt="Customer Review" className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl object-cover shadow-md border-2 border-white animate-float-slow transform-gpu cursor-pointer transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute bottom-full left-0 mb-2 px-3.5 py-2 rounded-xl bg-white/98 backdrop-blur-md border border-rose-200/90 shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 w-[210px] sm:w-[230px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[11px] text-amber-500 font-bold">★★★★★</span>
                  <span className="text-[9px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-full">वेरीफाइड बायर</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium leading-snug">पुराने पैड्स खिसक जाते थे, Femmeflo के डबल विंग्स से दिनभर पूरी सुरक्षा मिलती है! 🛡️</p>
              </div>
            </div>

            {/* Avatar 4 */}
            <div className="absolute top-[44%] left-[62%] group pointer-events-auto">
              <img loading="lazy" src="/avatar-indian-4.webp" alt="Customer Review" className="w-15 h-15 xl:w-17 xl:h-17 rounded-2xl object-cover shadow-md border-2 border-white animate-float-alt transform-gpu cursor-pointer transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute bottom-full right-0 mb-2 px-3.5 py-2 rounded-xl bg-white/98 backdrop-blur-md border border-rose-200/90 shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 w-[210px] sm:w-[230px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[11px] text-amber-500 font-bold">★★★★★</span>
                  <span className="text-[9px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-full">वेरीफाइड बायर</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium leading-snug">पहले हैवी फ्लो में डर रहता था, Femmeflo XL ने वो लीकेज की चिंता ही खत्म कर दी! 📏</p>
              </div>
            </div>

            {/* Avatar 5 */}
            <div className="absolute bottom-4 left-[8%] group pointer-events-auto">
              <img loading="lazy" src="/avatar-indian-5.webp" alt="Customer Review" className="w-14 h-14 xl:w-15 xl:h-15 rounded-full object-cover shadow-sm border-2 border-white animate-float-slow transform-gpu cursor-pointer transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute bottom-full left-0 mb-2 px-3.5 py-2 rounded-xl bg-white/98 backdrop-blur-md border border-rose-200/90 shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 w-[210px] sm:w-[230px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[11px] text-amber-500 font-bold">★★★★★</span>
                  <span className="text-[9px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-full">वेरीफाइड बायर</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium leading-snug">बाजार के महंगे ब्रांड्स छोड़े, Femmeflo का कॉटन फील सच में बेमिसाल है! 💧</p>
              </div>
            </div>

            {/* Avatar 6 */}
            <div className="absolute bottom-2 left-[54%] group pointer-events-auto">
              <img loading="lazy" src="/avatar-indian-6.webp" alt="Customer Review" className="w-15 h-15 xl:w-17 xl:h-17 rounded-2xl object-cover shadow-md border-2 border-white animate-float-alt transform-gpu cursor-pointer transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute bottom-full right-0 mb-2 px-3.5 py-2 rounded-xl bg-white/98 backdrop-blur-md border border-rose-200/90 shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 w-[210px] sm:w-[230px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[11px] text-amber-500 font-bold">★★★★★</span>
                  <span className="text-[9px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-full">वेरीफाइड बायर</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium leading-snug">पहले प्लास्टिक लेयर से जलन होती थी, Femmeflo का नेचुरल कॉटन सबसे सेफ लगा! 🌿</p>
              </div>
            </div>
          </div>

          {/* CENTER FEATURED CUSTOMER PORTRAIT CARD */}
          <div className="relative z-20 flex flex-col items-center">
            
            {/* Pulsing Backlight Ring */}
            <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-tr from-rose-400/20 via-emerald-300/15 to-sky-300/20 pointer-events-none transform-gpu" />

            <div className="relative p-1 group transition-transform duration-200 hover:scale-[1.02] transform-gpu">
              {/* Main Happy Customer Video (Landscape Autoplay loop) */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white/95 group-hover:border-rose-300 transition-colors bg-black/5 aspect-video w-[300px] sm:w-[400px] md:w-[460px] lg:w-[490px] xl:w-[540px] max-w-[88vw]">
                {/* Skeleton loader while video buffers */}
                {!videoLoaded && (
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-rose-50 via-white to-rose-50 animate-shimmer" />
                )}
                <video
                  ref={videoRef}
                  src="/happy-customer.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className={`w-full h-full object-cover select-none pointer-events-none transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
            </div>
          </div>

          {/* RIGHT CLUSTER: Floating Avatars with Hindi Testimonial Tooltips */}
          <div className="hidden lg:block absolute right-0 inset-y-0 w-[28%] xl:w-[32%] z-10">
            {/* Avatar 7 */}
            <div className="absolute top-2 right-[55%] group pointer-events-auto">
              <img loading="lazy" src="/avatar-indian-7.webp" alt="Customer Review" className="w-14 h-14 xl:w-16 xl:h-16 rounded-full object-cover shadow-md border-2 border-white animate-float-alt transform-gpu cursor-pointer transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute top-full left-0 mt-2 px-3.5 py-2 rounded-xl bg-white/98 backdrop-blur-md border border-rose-200/90 shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 w-[210px] sm:w-[230px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[11px] text-amber-500 font-bold">★★★★★</span>
                  <span className="text-[9px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-full">वेरीफाइड बायर</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium leading-snug">नाइट में दाग लगने की टेंशन रहती थी, Femmeflo से रातभर सुकून की नींद मिलती है! 🌙</p>
              </div>
            </div>

            {/* Avatar 8 */}
            <div className="absolute top-4 right-[10%] group pointer-events-auto">
              <img loading="lazy" src="/avatar-indian-8.webp" alt="Customer Review" className="w-15 h-15 xl:w-17 xl:h-17 rounded-2xl object-cover shadow-lg border-2 border-white animate-float-slow transform-gpu cursor-pointer transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute top-full right-0 mt-2 px-3.5 py-2 rounded-xl bg-white/98 backdrop-blur-md border border-rose-200/90 shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 w-[210px] sm:w-[230px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[11px] text-amber-500 font-bold">★★★★★</span>
                  <span className="text-[9px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-full">वेरीफाइड बायर</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium leading-snug">मैंने अपनी बहनों को भी Femmeflo पर स्विच कराया, ऐसा कम्फर्ट कहीं और नहीं मिला! ✨</p>
              </div>
            </div>

            {/* Avatar 9 */}
            <div className="absolute top-[42%] right-[6%] group pointer-events-auto">
              <img loading="lazy" src="/avatar-indian-9.webp" alt="Customer Review" className="w-15 h-15 xl:w-17 xl:h-17 rounded-2xl object-cover shadow-lg border-2 border-white animate-float-slow transform-gpu cursor-pointer transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute bottom-full right-0 mb-2 px-3.5 py-2 rounded-xl bg-white/98 backdrop-blur-md border border-rose-200/90 shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 w-[210px] sm:w-[230px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[11px] text-amber-500 font-bold">★★★★★</span>
                  <span className="text-[9px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-full">वेरीफाइड बायर</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium leading-snug">पहले हर 3 घंटे में बदलना पड़ता था, Femmeflo का 12 घंटे का प्रोटेक्शन सच में बेस्ट है! 👗</p>
              </div>
            </div>

            {/* Avatar 10 */}
            <div className="absolute top-[44%] right-[62%] group pointer-events-auto">
              <img loading="lazy" src="/avatar-indian-10.webp" alt="Customer Review" className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl object-cover shadow-md border-2 border-white animate-float-alt transform-gpu cursor-pointer transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute bottom-full left-0 mb-2 px-3.5 py-2 rounded-xl bg-white/98 backdrop-blur-md border border-rose-200/90 shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 w-[210px] sm:w-[230px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[11px] text-amber-500 font-bold">★★★★★</span>
                  <span className="text-[9px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-full">वेरीफाइड बायर</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium leading-snug">सेंसिटिव स्किन के लिए इससे बेहतर कुछ नहीं, दूसरे पैड्स से बहुत ज्यादा आरामदेह! 🌸</p>
              </div>
            </div>

            {/* Avatar 11 */}
            <div className="absolute bottom-2 right-[54%] group pointer-events-auto">
              <img loading="lazy" src="/avatar-indian-11.webp" alt="Customer Review" className="w-14 h-14 xl:w-16 xl:h-16 rounded-full object-cover shadow-md border-2 border-white animate-float-alt transform-gpu cursor-pointer transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute bottom-full left-0 mb-2 px-3.5 py-2 rounded-xl bg-white/98 backdrop-blur-md border border-rose-200/90 shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 w-[210px] sm:w-[230px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[11px] text-amber-500 font-bold">★★★★★</span>
                  <span className="text-[9px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-full">वेरीफाइड बायर</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium leading-snug">ऑफिस और ट्रैवल में Femmeflo ही मेरा भरोसा है, कम्फर्ट का कोई मुकाबला नहीं! 💎</p>
              </div>
            </div>

            {/* Avatar 12 */}
            <div className="absolute bottom-4 right-[8%] group pointer-events-auto">
              <img loading="lazy" src="/avatar-indian-12.webp" alt="Customer Review" className="w-14 h-14 xl:w-15 xl:h-15 rounded-full object-cover shadow-sm border-2 border-white animate-float-slow transform-gpu cursor-pointer transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute bottom-full right-0 mb-2 px-3.5 py-2 rounded-xl bg-white/98 backdrop-blur-md border border-rose-200/90 shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50 w-[210px] sm:w-[230px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[11px] text-amber-500 font-bold">★★★★★</span>
                  <span className="text-[9px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-full">वेरीफाइड बायर</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium leading-snug">एक बार Femmeflo यूज़ किया तो दूसरा कोई पसंद नहीं आएगा, बेस्ट कम्फर्ट! 🛍️</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TESTIMONIAL QUOTE GLASS CARD */}
        <motion.div
          className="mt-6 z-20 w-full max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-xl border border-blue-100/90 rounded-2xl p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] text-center space-y-2"
            >
              <blockquote className="text-zinc-800 font-medium text-base sm:text-lg leading-snug font-[family-name:var(--font-jakarta)]">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <p className="text-xs text-zinc-500 font-semibold">
                {active.name}, <span className="text-zinc-400 font-normal">{active.role}</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default HappyCustomers;
