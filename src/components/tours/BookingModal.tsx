"use client";

import React, { useState } from "react";
import { TourPackage, config } from "@/config";
import { 
  X, 
  Calendar, 
  Users, 
  MapPin, 
  CheckCircle, 
  ShieldCheck, 
  Send, 
  MessageCircle
} from "lucide-react";

interface BookingModalProps {
  tour: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ tour, isOpen, onClose }: BookingModalProps) {
  const [sharingPlan, setSharingPlan] = useState<"quad" | "triple" | "twin" | "privateCouple">("quad");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [departureCity, setDepartureCity] = useState<string>("Lahore");
  const [guestsCount, setGuestsCount] = useState<number>(1);
  const [fullName, setFullName] = useState<string>("");
  const [gender, setGender] = useState<string>("Male");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [joiningAs, setJoiningAs] = useState<string>("Solo Traveler");
  const [emergencyContact, setEmergencyContact] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen || !tour) return null;

  const sharingLabels: Record<string, string> = {
    quad: "Quad Sharing (4 in a Room)",
    triple: "Triple Sharing (3 in a Room)",
    twin: "Twin Sharing (2 in a Room)",
    privateCouple: "Private Dedicated Room / Couple",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build WhatsApp pre-filled message
    const message = `✨ *TOUR BOOKING & INQUIRY REQUEST* ✨
*Tour Package:* ${tour.title}
*Duration:* ${tour.duration}
*Departure City:* ${departureCity}
*Tentative Date:* ${selectedDate || tour.upcomingDates[0] || "Flexible"}
*Preferred Room Sharing:* ${sharingLabels[sharingPlan]}
*Number of Guests:* ${guestsCount} Person(s)

*Lead Traveler Details:*
- *Name:* ${fullName}
- *Gender:* ${gender}
- *WhatsApp:* ${whatsapp}
- *Email:* ${email || "N/A"}
- *Joining As:* ${joiningAs}
- *Emergency Contact:* ${emergencyContact || "N/A"}

Please confirm seat availability, provide the detailed itinerary quotation, and booking instructions!`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encoded}`;
    
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-auto max-h-[94dvh] sm:max-h-[92vh] flex flex-col">
        {/* Header with Tour Banner */}
        <div className="relative bg-slate-900 text-white p-4 sm:p-6 shrink-0 border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors z-10 active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 shrink-0" />
          </button>

          <h3 className="text-base sm:text-xl font-bold tracking-tight text-white pr-10 leading-snug">
            {tour.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {tour.duration} • All-Inclusive Transport, Hotel & Guide
          </p>
        </div>

        {submitted ? (
          /* Confirmation State */
          <div className="p-6 sm:p-10 text-center flex flex-col items-center overflow-y-auto">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 shrink-0">
              <CheckCircle className="w-8 h-8 shrink-0" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Inquiry Dispatched!</h4>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mb-6 leading-relaxed">
              Thank you <strong className="text-slate-900">{fullName}</strong>! We are redirecting you to WhatsApp to discuss dates and finalize your booking with our tour director.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full max-w-md text-left mb-6 space-y-2">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Selected Tour:</span>
                <span className="font-semibold text-slate-900 text-right truncate max-w-[180px]">{tour.title}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>Room Tier:</span>
                <span className="font-semibold text-slate-900">{sharingLabels[sharingPlan]}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>Travelers:</span>
                <span className="font-semibold text-slate-900">{guestsCount} Person(s)</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>Departure City:</span>
                <span className="font-semibold text-slate-900">{departureCity}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
            >
              Done & Close
            </button>
          </div>
        ) : (
          /* Interactive Booking Form */
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1 overscroll-contain">
            {/* Step 1: Sharing Plan Selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Room / Sharing Preference
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {[
                  { key: "quad", label: "Quad Sharing", sub: "4 in Room" },
                  { key: "triple", label: "Triple Sharing", sub: "3 in Room" },
                  { key: "twin", label: "Twin Sharing", sub: "2 in Room" },
                  { key: "privateCouple", label: "Private Room", sub: "Couple / Family" },
                ].map((plan) => (
                  <button
                    key={plan.key}
                    type="button"
                    onClick={() => setSharingPlan(plan.key as any)}
                    className={`p-3 rounded-xl border text-left transition-all min-h-[64px] flex flex-col justify-between ${
                      sharingPlan === plan.key
                        ? "border-emerald-600 bg-emerald-50/80 text-emerald-900 ring-2 ring-emerald-600/20 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50 active:bg-slate-100"
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold leading-tight">{plan.label}</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1">{plan.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Departure Date & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  2. Departure Date
                </label>
                <div className="relative">
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 sm:py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 text-base sm:text-sm font-semibold text-slate-800 bg-white"
                  >
                    {tour.upcomingDates.map((date) => (
                      <option key={date} value={date}>{date}</option>
                    ))}
                  </select>
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 sm:top-3 shrink-0" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Departure City
                </label>
                <div className="relative">
                  <select
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 sm:py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 text-base sm:text-sm font-semibold text-slate-800 bg-white"
                  >
                    <option value="Lahore">Lahore (Thokar / Kalma Chowk)</option>
                    <option value="Islamabad">Islamabad (Daewoo Terminal)</option>
                    <option value="Custom Location">Custom Pickup (Private Tour)</option>
                  </select>
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 sm:top-3 shrink-0" />
                </div>
              </div>
            </div>

            {/* Step 3: Number of Guests */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                3. Total Travelers / Seats
              </label>
              <div className="flex items-center gap-3 bg-slate-50 p-3 sm:p-2.5 rounded-xl border border-slate-200">
                <Users className="w-4 h-4 text-slate-500 ml-1 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 flex-1">Number of Seats Needed:</span>
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                    className="w-10 h-10 sm:w-8 sm:h-8 rounded-xl sm:rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center text-base sm:text-sm active:bg-slate-200"
                    aria-label="Decrease guest count"
                  >
                    -
                  </button>
                  <span className="font-bold text-base sm:text-base text-slate-900 w-7 text-center">
                    {guestsCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestsCount(guestsCount + 1)}
                    className="w-10 h-10 sm:w-8 sm:h-8 rounded-xl sm:rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center text-base sm:text-sm active:bg-slate-200"
                    aria-label="Increase guest count"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Step 4: Personal Details */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                4. Lead Traveler Contact
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 text-base sm:text-sm font-medium"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Number * (0320 4127966)"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 text-base sm:text-sm font-medium"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-3 py-3 sm:py-2 rounded-xl border border-slate-200 focus:border-emerald-600 text-base sm:text-sm font-medium bg-white"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Family">Family Squad</option>
                </select>

                <select
                  value={joiningAs}
                  onChange={(e) => setJoiningAs(e.target.value)}
                  className="w-full px-3 py-3 sm:py-2 rounded-xl border border-slate-200 focus:border-emerald-600 text-base sm:text-sm font-medium bg-white"
                >
                  <option value="Solo Traveler">Solo Traveler</option>
                  <option value="With Friends">Friends Squad</option>
                  <option value="Couple">Couple</option>
                  <option value="Family">Family</option>
                </select>

                <div className="col-span-2 sm:col-span-1">
                  <input
                    type="tel"
                    placeholder="Emergency Contact"
                    value={emergencyContact}
                    onChange={(e) => setEmergencyContact(e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 rounded-xl border border-slate-200 focus:border-emerald-600 text-base sm:text-sm font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Submit Bar */}
            <div className="bg-slate-900 text-white p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md border border-slate-800">
              <div className="text-center sm:text-left w-full sm:w-auto">
                <div className="text-xs font-semibold text-emerald-400">Direct WhatsApp Inquiry</div>
                <div className="text-[11px] text-slate-300">
                  {guestsCount} traveler(s) • {sharingLabels[sharingPlan].split("(")[0].trim()}
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-slate-500 pb-1 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Official Tour Confirmation • Custom family & group discounts available</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
