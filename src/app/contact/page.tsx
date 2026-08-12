"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  MessageSquare,
  Layers,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Heart,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productQuery: "Femmeflo XL Sanitary Pads (40mm)",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        productQuery: "Femmeflo XL Sanitary Pads (40mm)",
        message: "",
      });
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-jakarta)] flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Hero Banner Section */}
        <section className="relative w-full bg-gradient-to-b from-[#FFF9F7] via-[#FDF3F5] to-white pt-10 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b border-rose-100/60 overflow-hidden">
          <div className="absolute top-0 right-[-5%] w-[450px] h-[450px] bg-rose-200/30 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-[-5%] w-[450px] h-[450px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-200 text-xs font-extrabold text-[#E61C5D] shadow-2xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E61C5D]" />
              <span>Direct Contact &amp; Enquiries</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-playfair)] leading-[1.12]">
              Let&apos;s Connect with{" "}
              <span className="text-[#E61C5D] italic font-[family-name:var(--font-playfair)]">
                Femmeflo
              </span>
            </h1>

            <p className="mt-4 text-zinc-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Have a product question, bulk inquiry, or feedback? Send us a message and our dedicated team will respond promptly.
            </p>
          </div>
        </section>

        {/* Main 2-Column Form & Contact Info Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left 7 Columns: Interactive Contact Form Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-rose-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden">
              <div className="w-full h-1.5 bg-gradient-to-r from-[#156035] via-[#E61C5D] to-rose-400 absolute top-0 left-0" />

              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 font-[family-name:var(--font-playfair)]">
                  Send Us a Message
                </h2>
                <p className="text-zinc-500 text-sm mt-1">
                  Fill in the details below and we&apos;ll get back to you shortly.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#EBF6EF] border border-[#CCE9D7] rounded-2xl p-8 text-center flex flex-col items-center space-y-4 my-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#156035] text-white flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#156035]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-zinc-700 text-sm max-w-md leading-relaxed">
                    Thank you for reaching out to Femmeflo. Our team has received your query and will contact you via email or phone soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#156035] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0f4727] transition-all shadow-md cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-[#E61C5D] text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                        Full Name <span className="text-[#E61C5D]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Ananya Sharma"
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 focus:border-[#E61C5D] focus:ring-2 focus:ring-rose-100 text-sm font-medium text-zinc-900 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                        Email Address <span className="text-[#E61C5D]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ananya@example.com"
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 focus:border-[#E61C5D] focus:ring-2 focus:ring-rose-100 text-sm font-medium text-zinc-900 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Product Query Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                        Contact / WhatsApp No.
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 focus:border-[#E61C5D] focus:ring-2 focus:ring-rose-100 text-sm font-medium text-zinc-900 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Product Query Dropdown */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                        Product / Query Type
                      </label>
                      <div className="relative">
                        <Layers className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          name="productQuery"
                          value={formData.productQuery}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 focus:border-[#E61C5D] focus:ring-2 focus:ring-rose-100 text-sm font-medium text-zinc-900 outline-none transition-all bg-white cursor-pointer"
                        >
                          <option value="Femmeflo XL Sanitary Pads (40mm)">Femmeflo XL Sanitary Pads (40mm)</option>
                          <option value="Bulk Order / Wholesale Enquiry">Bulk Order / Wholesale Enquiry</option>
                          <option value="Distributor & Dealership Opportunity">Distributor &amp; Dealership Opportunity</option>
                          <option value="Product Feedback & Support">Product Feedback &amp; Support</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                      Your Message / Query <span className="text-[#E61C5D]">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-zinc-400 absolute left-3.5 top-4" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Please detail your query, requirements, or quantity here..."
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 focus:border-[#E61C5D] focus:ring-2 focus:ring-rose-100 text-sm font-medium text-zinc-900 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E61C5D] to-rose-600 hover:from-rose-600 hover:to-[#E61C5D] text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl transition-all cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message &amp; Submit Query</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right 5 Columns: Corporate Office Details */}
            <div className="lg:col-span-5 bg-gradient-to-br from-white via-rose-50/40 to-emerald-50/30 rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                  CORPORATE HEADQUARTERS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)] text-zinc-900 mt-1">
                  Masako Enterprises Private Limited
                </h3>
              </div>

              <div className="space-y-5 text-sm pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#156035] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#156035]">THANE OFFICE</h4>
                    <p className="text-zinc-600 text-xs font-medium leading-relaxed mt-0.5">
                      101, Shree Sankalp, G B Road, Thane West, Maharashtra - 400615
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3.5 border-t border-rose-100/70">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-[#E61C5D] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#E61C5D]">NAVI MUMBAI OFFICE</h4>
                    <p className="text-zinc-600 text-xs font-medium leading-relaxed mt-0.5">
                      207, 2nd Floor, Bldg No. 1(6), Sector-2, MBP, Mahape, Navi Mumbai 400710
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-3.5 border-t border-rose-100/70">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#156035] flex items-center justify-center shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#156035]">PHONE &amp; WHATSAPP</h4>
                    <a href="tel:+919820676562" className="text-zinc-900 font-bold hover:text-[#E61C5D] transition-colors text-sm">
                      +91 98206 76562
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-3.5 border-t border-rose-100/70">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-[#E61C5D] flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#E61C5D]">EMAIL ENQUIRIES</h4>
                    <a href="mailto:sales@femmeflo.in" className="text-zinc-900 font-bold hover:text-[#E61C5D] transition-colors text-sm block">
                      sales@femmeflo.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-3.5 border-t border-rose-100/70">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#156035] flex items-center justify-center shrink-0">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#156035]">BUSINESS HOURS</h4>
                    <p className="text-zinc-700 text-xs font-semibold">
                      Mon - Sat: 9:30 AM - 6:30 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/919820676562"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-[#20bd5a] transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
