"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Mail,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  actionUrl?: string;
  actionText?: string;
}

const quickTopics = [
  { label: "🌸 Product & Size Guide", key: "product" },
  { label: "📦 Order & Delivery", key: "order" },
  { label: "💼 Bulk & Wholesale", key: "wholesale" },
  { label: "💬 WhatsApp Support", key: "whatsapp" },
];

const topicResponses: Record<
  string,
  { text: string; actionUrl?: string; actionText?: string }
> = {
  product: {
    text: "Femmeflo XL features 320mm extra-long pads with 3D fast-lock gel absorption, engineered for 12-hour leakproof and 100% rash-free day & night protection!",
  },
  order: {
    text: "We ship all corporate & retailer orders within 24 hours across India! Standard delivery takes 2-4 business days with eco-friendly discrete packaging.",
  },
  wholesale: {
    text: "Looking for wholesale or distribution pricing? Reach out directly to our corporate sales department at sales@femmeflo.in or call +91 98206 76562.",
    actionUrl: "mailto:sales@femmeflo.in",
    actionText: "Email Sales (sales@femmeflo.in)",
  },
  whatsapp: {
    text: "Click below to connect directly with our customer care team on WhatsApp for instant 1-on-1 assistance!",
    actionUrl: "https://wa.me/919820676562",
    actionText: "Open WhatsApp Chat",
  },
};

export function FloatingChatEnquiry() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi there! 👋 Welcome to Femmeflo Care. How can we help you today?",
      time: "Just now",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendUserMessage = (textToSend: string, topicKey?: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const topicData = topicKey ? topicResponses[topicKey] : undefined;
      const replyText =
        topicData?.text ||
        "Thank you for reaching out! Our team has received your enquiry. You can also email us directly at sales@femmeflo.in or call +91 98206 76562.";

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actionUrl: topicData?.actionUrl,
        actionText: topicData?.actionText,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">


        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#156035] to-[#1B4332] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(21,96,53,0.4)] border border-white/20 hover:shadow-[0_15px_35px_rgba(21,96,53,0.55)] transition-all cursor-pointer"
          aria-label="Toggle Enquiry Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 text-white" />
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
            </>
          )}
        </motion.button>
      </div>

      {/* Floating Chat Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[400px] bg-white backdrop-blur-2xl border border-rose-100 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col font-[family-name:var(--font-jakarta)] max-h-[calc(100vh-6.5rem)] sm:max-h-[520px]"
          >
            {/* Improved Header */}
            <div className="bg-gradient-to-r from-[#156035] via-[#1B4332] to-[#156035] text-white px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-xs shrink-0">
                  <Image
                    src="/logo.webp"
                    alt="Femmeflo Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white flex items-center gap-1.5">
                    Femmeflo Care Team
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 fill-emerald-300/20" />
                  </h4>
                  <p className="text-[11px] text-emerald-100/90 font-medium">Online • Instant Support</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 min-h-[180px] max-h-[260px] sm:max-h-[280px] bg-gradient-to-b from-[#FFF0F3]/30 via-white to-white">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#156035] text-white rounded-br-xs shadow-xs font-medium"
                        : "bg-white border border-rose-100/90 text-zinc-800 rounded-bl-xs shadow-xs"
                    }`}
                  >
                    <p>{msg.text}</p>
                    {msg.actionUrl && (
                      <a
                        href={msg.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 text-xs font-extrabold text-[#E61C5D] hover:underline bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-100"
                      >
                        <span>{msg.actionText}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-400 mt-1 px-1">
                    {msg.time}
                  </span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 bg-white border border-rose-100 px-4 py-3 rounded-2xl rounded-bl-xs w-max">
                  <span className="w-2 h-2 rounded-full bg-[#156035] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#156035] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#156035] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Harmonized Quick Topic Chips */}
            <div className="p-3 bg-rose-50/40 border-t border-rose-100/70">
              <p className="text-[11px] font-extrabold text-zinc-500 mb-2 uppercase tracking-wider">
                Quick Enquiries:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickTopics.map((topic) => (
                  <button
                    key={topic.key}
                    onClick={() => handleSendUserMessage(topic.label, topic.key)}
                    className="text-xs font-bold text-[#156035] bg-white border border-[#156035]/25 hover:bg-[#156035] hover:text-white px-3 py-1.5 rounded-full transition-all shadow-2xs cursor-pointer active:scale-95"
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Improved Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendUserMessage(inputText);
              }}
              className="p-3 bg-white border-t border-zinc-100 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your enquiry..."
                className="flex-1 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-2.5 focus:outline-none focus:border-[#156035] focus:bg-white text-zinc-900 placeholder:text-zinc-400 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="w-10 h-10 rounded-2xl bg-[#156035] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#1B4332] active:scale-95 transition-all shadow-md cursor-pointer shrink-0"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FloatingChatEnquiry;
