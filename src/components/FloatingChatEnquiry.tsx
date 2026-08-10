"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, PhoneCall, CheckCircle2, MessageSquare } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

const quickTopics = [
  "🌸 Product & Size Guide",
  "📦 Order & Delivery Info",
  "💼 Wholesale & Bulk Orders",
  "💬 WhatsApp Direct Support",
];

const botResponses: Record<string, string> = {
  "🌸 Product & Size Guide":
    "Femmeflo XL features 320mm extra-long pads with 3D fast-lock absorption, engineered for heavy flow and 12-hour rash-free day & night protection!",
  "📦 Order & Delivery Info":
    "We ship all orders within 24 hours across India! Standard delivery takes 2-4 business days with discrete eco-friendly packaging.",
  "💼 Wholesale & Bulk Orders":
    "Interested in becoming a distributor or bulk buyer? Email us at sales@femmeflo.in or send a message on WhatsApp for special wholesale pricing!",
  "💬 WhatsApp Direct Support":
    "Connect directly with our care team on WhatsApp at +91 98765 43210 for instant 1-on-1 assistance!",
};

export function FloatingChatEnquiry() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi there! 👋 Welcome to Femmeflo. How can we help you today?",
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

  const handleSendUserMessage = (textToSend: string) => {
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

    // Automated bot response simulation
    setTimeout(() => {
      let replyText =
        botResponses[textToSend] ||
        "Thank you for reaching out! Our support team has received your enquiry and will respond shortly. You can also chat directly on WhatsApp at +91 98765 43210.";

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Floating Hint Tag (Visible when closed) */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-rose-100 shadow-lg text-xs font-bold text-[#156035] cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Sparkles className="w-4 h-4 text-[#E61C5D]" />
            <span>Need Help? Enquire Now!</span>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#156035] to-[#2D5A27] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(21,96,53,0.4)] border border-white/20 hover:shadow-[0_15px_35px_rgba(21,96,53,0.55)] transition-all cursor-pointer"
          aria-label="Toggle Enquiry Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 text-white" />
              {/* Online Pulse Dot */}
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
            </>
          )}
        </motion.button>
      </div>

      {/* Floating Chat Modal Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[400px] bg-white/95 backdrop-blur-2xl border border-rose-100 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col font-[family-name:var(--font-jakarta)] max-h-[560px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#156035] to-[#1B4332] text-white p-4 sm:p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center shadow-xs">
                  <Image
                    src="/logo.png"
                    alt="Femmeflo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Femmeflo Care Team
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 fill-emerald-300/20" />
                  </h4>
                  <p className="text-[11px] text-white/80">Online • Replies in ~2 mins</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[220px] max-h-[300px] bg-gradient-to-b from-[#FFF0F3]/40 via-white to-white">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#156035] text-white rounded-br-none shadow-xs"
                        : "bg-white border border-rose-100 text-zinc-800 rounded-bl-none shadow-xs"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-zinc-400 mt-1 px-1">{msg.time}</span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 bg-white border border-rose-100 px-4 py-2.5 rounded-2xl rounded-bl-none w-max">
                  <span className="w-2 h-2 rounded-full bg-[#156035] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#156035] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#156035] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Topic Chips */}
            <div className="p-3 bg-rose-50/50 border-t border-rose-100/60">
              <p className="text-[11px] font-bold text-zinc-500 mb-2 uppercase tracking-wider">
                Quick Enquiries:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => handleSendUserMessage(topic)}
                    className="text-xs font-medium text-[#156035] bg-white border border-[#156035]/20 hover:bg-[#156035] hover:text-white px-2.5 py-1 rounded-xl transition-all shadow-xs"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
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
                className="flex-1 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#156035] text-zinc-900 placeholder:text-zinc-400"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="w-9 h-9 rounded-xl bg-[#156035] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#1B4332] transition-colors cursor-pointer"
                aria-label="Send Message"
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
