"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Sparkles, ArrowRight } from "lucide-react";
import { FairyIcon } from "@/components/FairyIcon";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

const faqs: FAQItem[] = [
  {
    id: "puberty",
    question: "What's puberty?",
    answer:
      "Puberty is the natural physical and emotional process when your body grows into adulthood. It brings changes like growth spurts, developing body curves, emotional shifts, and the start of your menstrual cycle.",
    category: "Period Basics",
  },
  {
    id: "period-def",
    question: "What is a period?",
    answer:
      "A period (menstruation) is a healthy, monthly shedding of the uterine lining when pregnancy does not occur. It flows out of your body as menstrual fluid and typically lasts 3 to 7 days.",
    category: "Period Basics",
  },
  {
    id: "period-start",
    question: "When will my period start?",
    answer:
      "Most girls get their first period between ages 10 and 15 (typically around 12 to 13 years old), usually about 2 years after breasts begin to develop and after noticing clear vaginal discharge.",
    category: "Period Basics",
  },
  {
    id: "period-duration",
    question: "How long will my periods last?",
    answer:
      "A typical period lasts between 3 and 7 days. Your complete menstrual cycle (measured from the first day of one period to the first day of the next) usually lasts 21 to 35 days.",
    category: "Period Basics",
  },
  {
    id: "cramps-pain",
    question: "How can I get rid of cramps and pain during my period?",
    answer:
      "You can manage cramps using a warm heating pad on your lower abdomen, light stretching/yoga, staying hydrated, sipping warm chamomile tea, and wearing breathable, lightweight pads like Femmeflo XL.",
    category: "Health & Relief",
  },
  {
    id: "femmeflo-xl",
    question: "Why choose Femmeflo XL sanitary pads?",
    answer:
      "Femmeflo XL provides 280mm extended length, 12-hour leak-lock absorption, a cloud-soft cottony top sheet to prevent rashes, and ergonomic double wings for complete freedom during active days and sleep.",
    category: "Femmeflo Care",
  },
  {
    id: "rash-free",
    question: "Is Femmeflo rash-free and skin friendly?",
    answer:
      "Yes! Femmeflo pads are crafted with a dermatologically tested, cotton-soft top sheet free from harsh chemicals, artificial chlorine, or irritating dyes to ensure 100% skin-friendly protection.",
    category: "Femmeflo Care",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("puberty");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-gradient-to-b from-[#FAF2F5] via-[#FFF8FA] to-[#F7EEF3] border-b border-rose-100/60 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 overflow-hidden font-[family-name:var(--font-jakarta)]"
    >
      {/* Soft Background Ambient Radial Orbs */}
      <div className="absolute top-1/4 left-[-8%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-8%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Animated Mascot Header & Title Callout */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-start space-y-6 sticky top-28"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Animated Mascot / Fairy Header */}
          <div className="relative mb-2">
            <FairyIcon className="w-20 h-20 sm:w-24 sm:h-24" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/70 border border-rose-200 text-xs sm:text-sm font-semibold text-[#E61C5D]">
            <Sparkles className="w-4 h-4 text-[#E61C5D]" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1] font-[family-name:var(--font-playfair)]">
            Frequently <br />
            <span className="text-[#156035] italic font-normal">Asked Questions</span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-md">
            More Answers, Fewer doubts. Everything you need to know about period wellness and Femmeflo XL care.
          </p>

          {/* Action Link */}
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#E61C5D] font-extrabold text-sm uppercase tracking-wider hover:text-[#c4154c] transition-colors group"
            >
              <span>All FAQs & Support</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Clean Accordion List */}
        <motion.div
          className="lg:col-span-7 w-full space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="bg-white/80 backdrop-blur-xl border border-rose-100 rounded-3xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] space-y-3">
            {faqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-gradient-to-r from-rose-50/90 to-white border-rose-200/90 shadow-sm"
                      : "bg-white/90 hover:bg-rose-50/40 border-zinc-100"
                  }`}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full px-5 py-4.5 flex items-center justify-between text-left gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-zinc-900 font-[family-name:var(--font-jakarta)] leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#E61C5D] text-white rotate-180"
                          : "bg-rose-100/70 text-[#E61C5D]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-rose-100/60 mt-1">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default FAQSection;
