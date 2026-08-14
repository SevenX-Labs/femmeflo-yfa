"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  ExternalLink,
  CheckCircle2,
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
  { label: "🌸 Product & Price", key: "What is the price and features of Femmeflo XL?" },
  { label: "📦 Delivery & Order", key: "How fast is delivery and shipping for Femmeflo?" },
  { label: "💼 Wholesale & Bulk", key: "How can I order wholesale or become a distributor?" },
  { label: "💬 Contact Support", key: "How can I contact Femmeflo customer care?" },
];

let msgCounter = 0;
const createMsgId = (prefix: string) => `${prefix}-${Date.now()}-${++msgCounter}`;
const getFormattedTime = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export function FloatingChatEnquiry() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Namaste! 🙏 Welcome to Femmeflo. How can we help you today with our 100% rash-free sanitary pads?",
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
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isTyping) return;

    const userMsg: ChatMessage = {
      id: createMsgId("user"),
      sender: "user",
      text: trimmed,
      time: getFormattedTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    try {
      // Call secure Server API Endpoint (No API keys exposed to browser)
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });

      const data = await res.json();
      const botText =
        data.reply ||
        "Femmeflo XL offers 12-hour leakproof 100% rash-free protection for just ₹40! 🌸 Reach out on WhatsApp (+91 98206 76562) for instant support.";

      // Check if user is asking about whatsapp or sales
      const lowerText = trimmed.toLowerCase();
      let actionUrl: string | undefined = undefined;
      let actionText: string | undefined = undefined;

      if (lowerText.includes("whatsapp") || lowerText.includes("chat")) {
        actionUrl = "https://wa.me/919820676562";
        actionText = "Open WhatsApp Chat";
      } else if (
        lowerText.includes("wholesale") ||
        lowerText.includes("bulk") ||
        lowerText.includes("distributor") ||
        lowerText.includes("buy")
      ) {
        actionUrl = "mailto:sales@femmeflo.in";
        actionText = "Email Corporate Sales";
      }

      const botMsg: ChatMessage = {
        id: createMsgId("bot"),
        sender: "bot",
        text: botText,
        time: getFormattedTime(),
        actionUrl,
        actionText,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      const fallbackMsg: ChatMessage = {
        id: createMsgId("bot-err"),
        sender: "bot",
        text: "Femmeflo XL sanitary pads feature 3D fast-lock absorption & cottony soft rash-free comfort for ₹40! 🌸 Feel free to WhatsApp us directly at +91 98206 76562.",
        time: getFormattedTime(),
        actionUrl: "https://wa.me/919820676562",
        actionText: "Chat on WhatsApp",
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button (Highest z-index: z-[100]) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle live chat support"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-[#E61C5D] to-[#156035] text-white shadow-2xl hover:scale-105 transition-all flex items-center justify-center group focus:outline-none ring-4 ring-white/80"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              {/* Online Green Pulsing Indicator */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Floating Chat Modal Box (Highest z-index: z-[100], bounded below top navbar) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-20 right-4 sm:right-6 z-[100] w-[calc(100vw-2rem)] sm:w-[360px] max-h-[calc(100vh-6rem)] h-[460px] sm:h-[480px] bg-white/98 backdrop-blur-2xl border border-rose-100 rounded-3xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-black/5"
          >
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-[#E61C5D] via-rose-600 to-[#156035] p-3.5 sm:p-4 text-white flex items-center justify-between shadow-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center overflow-hidden shrink-0">
                  <span className="text-base sm:text-lg">🌸</span>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-white rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm leading-snug flex items-center gap-1.5">
                    <span>Femmeflo Support</span>
                    <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                      Official Care
                    </span>
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-rose-100/90 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                    <span>Instant AI Support • Active Now</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white/90 hover:text-white"
                aria-label="Close chat window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body & Messages Area (data-lenis-prevent allows native mobile touch scrolling) */}
            <div
              data-lenis-prevent
              className="flex-1 p-3.5 sm:p-4 overflow-y-auto overscroll-contain touch-pan-y space-y-3 bg-gradient-to-b from-rose-50/30 to-white text-xs [scrollbar-width:thin]"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-[#E61C5D] text-white rounded-br-none font-medium"
                        : "bg-white text-zinc-800 border border-rose-100 rounded-bl-none shadow-rose-100/50"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text.replace(/\*\*(.*?)\*\*/g, "$1")}</p>

                    {/* Optional Interactive Action Button */}
                    {msg.actionUrl && (
                      <a
                        href={msg.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold shadow-md transition-all hover:scale-102"
                      >
                        <span>{msg.actionText || "Connect Now"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <span className="text-[9px] text-zinc-400 mt-1 px-1">{msg.time}</span>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 bg-white border border-rose-100 px-3.5 py-2.5 rounded-2xl rounded-bl-none w-max shadow-sm"
                >
                  <span className="text-zinc-500 text-[11px]">Femmeflo Support is typing</span>
                  <div className="flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-[#E61C5D] rounded-full animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 bg-[#156035] rounded-full animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-[#E61C5D] rounded-full animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Topic Chips (data-lenis-prevent allows native horizontal swipe) */}
            <div
              data-lenis-prevent
              className="p-2 sm:p-2.5 bg-rose-50/60 border-t border-rose-100 flex gap-1.5 overflow-x-auto overscroll-contain touch-pan-x shrink-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {quickTopics.map((topic, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(topic.key)}
                  disabled={isTyping}
                  className="px-2.5 py-1.5 rounded-full bg-white border border-rose-200 text-[#156035] text-[11px] font-medium whitespace-nowrap hover:bg-rose-50 hover:border-rose-300 transition-all shrink-0 shadow-2xs"
                >
                  {topic.label}
                </button>
              ))}
            </div>

            {/* Input Form Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-2.5 sm:p-3 bg-white border-t border-rose-100 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about Femmeflo products or order info..."
                className="flex-1 text-xs px-3.5 py-2.5 rounded-full bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-[#E61C5D] focus:bg-white text-zinc-800 placeholder:text-zinc-400"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="p-2.5 rounded-full bg-gradient-to-r from-[#E61C5D] to-[#156035] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition-all shadow-md shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FloatingChatEnquiry;
