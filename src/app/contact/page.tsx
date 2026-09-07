"use client";

import React, { useState } from "react";
import Link from "next/link";
import { config } from "@/config";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Hunza Valley");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waMsg = `✨ *NEW WEBSITE INQUIRY* ✨
*Name:* ${name}
*Phone/WhatsApp:* ${phone}
*Interested Destination:* ${destination}
*Message:* ${message || "General inquiry"}

Please reach out to me!`;

    const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 600);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2.5 sm:mb-3">
            Contact <span className="text-emerald-400">Khan e Azam</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have inquiries about group departures, luxury VIP seats, bespoke air tours, or corporate retreats? Connect directly with our lead travel directors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Left Col: Contact Info & Offices (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Direct Support Channels</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Call / WhatsApp Hotline</div>
                  <a href={`tel:${config.phone}`} className="text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors">
                    {config.phone}
                  </a>
                  <div className="text-xs text-emerald-700 font-medium mt-0.5">Available 9:00 AM - 11:00 PM Daily</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Official Inquiries</div>
                  <a href={`mailto:${config.email}`} className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors">
                    {config.email}
                  </a>
                </div>
              </div>

              {/* Instant WhatsApp CTA Button */}
              <div className="pt-2">
                <Link
                  href={config.whatsappLink}
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Now</span>
                </Link>
              </div>
            </div>

            {/* Office Location Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 border border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Our Head Office</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Lahore Head Office</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    {config.addresses.lahore}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-emerald-300 text-[11px] font-semibold">
                    <span>Mon - Sun: 9:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/90">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Send Us A Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and our team will get back to you with all answers and tailored itinerary options.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Message Sent!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed mb-5">
                    Thank you! We have opened WhatsApp so you can instantly talk with our trip coordinator.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shahzaib Khan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-xs sm:text-sm font-medium text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0320 4127966"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-xs sm:text-sm font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Interested Destination / Tour Type
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-xs sm:text-sm font-medium text-slate-800 bg-white"
                    >
                      <option value="Hunza Valley & Passu Cones">Hunza Valley & Passu (5 Days)</option>
                      <option value="Skardu, Deosai & Lakes">Skardu, Deosai & Lakes (6 Days)</option>
                      <option value="Skardu By Air Luxury">Skardu By Air Luxury Escape (7 Days)</option>
                      <option value="Fairy Meadows & Nanga Parbat">Fairy Meadows & Nanga Parbat (5 Days)</option>
                      <option value="Kumrat Valley & Katora Lake">Kumrat Valley & Katora Lake (4 Days)</option>
                      <option value="Swat & Malam Jabba">Swat & Malam Jabba Weekend (3 Days)</option>
                      <option value="Custom Private Tour">Custom Private Tour (Family / Squad)</option>
                      <option value="General Inquiry">General Inquiry / Booking Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Message / Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your desired travel dates, number of people, or any questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-xs sm:text-sm font-medium text-slate-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>Send Message via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
