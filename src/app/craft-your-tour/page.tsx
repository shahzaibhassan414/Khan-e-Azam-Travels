"use client";

import React, { useState } from "react";
import Link from "next/link";
import { config } from "@/config";
import { 
  Compass, 
  MapPin, 
  Car, 
  Users, 
  Calendar, 
  Check, 
  Send, 
  MessageCircle,
  ShieldCheck
} from "lucide-react";

export default function CraftYourTourPage() {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(["Hunza Valley & Passu"]);
  const [tripDuration, setTripDuration] = useState<number>(5);
  const [travelStyle, setTravelStyle] = useState<"standard" | "deluxe" | "luxuryByAir">("deluxe");
  const [vehicle, setVehicle] = useState<string>("Toyota Grand Cabin VIP (10-12 Pax)");
  const [travelersCount, setTravelersCount] = useState<number>(6);
  const [tripType, setTripType] = useState<string>("Family Vacation");
  const [departureCity, setDepartureCity] = useState<string>("Lahore");
  const [tentativeDate, setTentativeDate] = useState<string>("");
  const [leadName, setLeadName] = useState<string>("");
  const [leadWhatsapp, setLeadWhatsapp] = useState<string>("");
  const [specialNotes, setSpecialNotes] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const destinationOptions = [
    { name: "Hunza Valley & Passu", icon: "🏔️" },
    { name: "Skardu & Deosai", icon: "🌊" },
    { name: "Fairy Meadows & Nanga Parbat", icon: "🏕️" },
    { name: "Kumrat Valley", icon: "🌲" },
    { name: "Swat & Malam Jabba", icon: "⛷️" },
    { name: "Naran & Saif-ul-Malook", icon: "🛶" },
    { name: "Neelum Valley, Kashmir", icon: "🍃" },
    { name: "Gwadar & Ormara Beach", icon: "🏖️" },
  ];

  const toggleDestination = (name: string) => {
    if (selectedDestinations.includes(name)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter((d) => d !== name));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, name]);
    }
  };

  const hotelTierLabels = {
    standard: "Executive (3-Star Deluxe)",
    deluxe: "Imperial (4-Star Heritage)",
    luxuryByAir: "Royal Luxury (5-Star / By Air)",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `✨ *CUSTOM PRIVATE TOUR REQUEST* ✨
*Destinations:* ${selectedDestinations.join(", ")}
*Duration:* ${tripDuration} Days
*Hotel Tier:* ${hotelTierLabels[travelStyle]}
*Preferred Vehicle:* ${vehicle}
*Group Size:* ${travelersCount} Person(s)
*Trip Category:* ${tripType}
*Departure City:* ${departureCity}
*Tentative Date:* ${tentativeDate || "Flexible"}

*Lead Traveler Details:*
- *Name:* ${leadName}
- *WhatsApp:* ${leadWhatsapp}
- *Special Requests:* ${specialNotes || "None"}

Please provide a custom tailored itinerary and detailed quotation!`;

    const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 600);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2.5">
            Craft Your Custom Private Tour
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Private customized trips designed around your schedule, preferred hotels, vehicle of choice, and group size.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-slate-200/90 space-y-6 sm:space-y-8">
          {/* Step 1: Destination Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <span>Choose Destinations (Select 1 or more)</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {destinationOptions.map((dest) => {
                const isSelected = selectedDestinations.includes(dest.name);
                return (
                  <button
                    key={dest.name}
                    type="button"
                    onClick={() => toggleDestination(dest.name)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-20 sm:h-22 ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/80 text-emerald-900 ring-2 ring-emerald-600/20 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50 hover:bg-slate-100/60"
                    }`}
                  >
                    <span className="text-lg sm:text-xl">{dest.icon}</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs font-semibold leading-tight truncate pr-1">{dest.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 font-bold" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Trip Type & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <span>Trip Category</span>
              </label>
              <select
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-xs sm:text-sm font-semibold text-slate-800 bg-white"
              >
                <option value="Family Vacation">Family Vacation (Relaxed & Kids Friendly)</option>
                <option value="Honeymoon / Couple Escape">Honeymoon & Couple Escape</option>
                <option value="Friends Squad Road Trip">Friends Squad Road Trip</option>
                <option value="Corporate / Group Retreat">Corporate / Group Retreat</option>
                <option value="Adventure Trekking Expedition">Adventure Trekking Expedition</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center justify-between">
                <span>Trip Duration</span>
                <span className="text-emerald-700 font-bold">{tripDuration} Days / {tripDuration - 1} Nights</span>
              </label>
              <input
                type="range"
                min={2}
                max={14}
                value={tripDuration}
                onChange={(e) => setTripDuration(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-medium mt-1">
                <span>2 Days (Weekend)</span>
                <span>7 Days (Classic)</span>
                <span>14 Days (Grand)</span>
              </div>
            </div>
          </div>

          {/* Step 3: Travel Style & Vehicle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <span>Hotel Tier</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: "standard", label: "Executive", desc: "3-Star Deluxe" },
                  { key: "deluxe", label: "Imperial", desc: "4-Star Heritage" },
                  { key: "luxuryByAir", label: "Luxury", desc: "5-Star Resorts" },
                ].map((tier) => (
                  <button
                    key={tier.key}
                    type="button"
                    onClick={() => setTravelStyle(tier.key as any)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      travelStyle === tier.key
                        ? "border-emerald-600 bg-emerald-50/80 text-emerald-900 ring-2 ring-emerald-600/20 shadow-sm"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <div className="text-xs font-bold">{tier.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Preferred Vehicle
              </label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-xs sm:text-sm font-semibold text-slate-800 bg-white"
              >
                <option value="Toyota Prado 4x4 TX/TZ (4-5 Pax)">Toyota Prado 4x4 TX/TZ (4-5 Pax)</option>
                <option value="Toyota Land Cruiser V8 (3-4 Pax)">Toyota Land Cruiser V8 (3-4 Pax)</option>
                <option value="Toyota Grand Cabin VIP (10-12 Pax)">Toyota Grand Cabin VIP (10-12 Pax)</option>
                <option value="Toyota Hiace Executive (6-8 Pax)">Toyota Hiace Executive (6-8 Pax)</option>
                <option value="Luxury Saloon Coaster (20+ Pax)">Luxury Saloon Coaster (20+ Pax)</option>
                <option value="By-Air Scheduled Flights + Local Prado">By-Air Flights + Local 4x4 Prado</option>
              </select>
            </div>
          </div>

          {/* Step 4: Number of Travelers & Departure */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <span>Number of Travelers</span>
              </label>
              <input
                type="number"
                min={1}
                max={100}
                value={travelersCount}
                onChange={(e) => setTravelersCount(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 text-xs sm:text-sm font-semibold text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                Departure City
              </label>
              <select
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 text-xs sm:text-sm font-medium bg-white"
              >
                <option value="Lahore">Lahore (LHE)</option>
                <option value="Islamabad">Islamabad (ISB)</option>
                <option value="Karachi">Karachi (KHI)</option>
                <option value="Peshawar">Peshawar (PEW)</option>
                <option value="Multan">Multan (MUX)</option>
                <option value="Custom Pickup">Custom Location Pickup</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                Tentative Dates
              </label>
              <input
                type="text"
                placeholder="e.g. Next month / Flexible"
                value={tentativeDate}
                onChange={(e) => setTentativeDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 text-xs sm:text-sm font-medium"
              />
            </div>
          </div>

          {/* Step 5: Contact Details */}
          <div className="pt-3 border-t border-slate-200 space-y-3 sm:space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-800">
              Lead Guest Details
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="text"
                required
                placeholder="Your Full Name *"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 text-xs sm:text-sm font-medium"
              />
              <input
                type="tel"
                required
                placeholder="WhatsApp Number * (0320 4127966)"
                value={leadWhatsapp}
                onChange={(e) => setLeadWhatsapp(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 text-xs sm:text-sm font-medium"
              />
            </div>
            <textarea
              rows={2}
              placeholder="Special requirements (e.g., Honeymoon decor, Bonfire BBQ, Attabad Boating, Drone footage, English guide)"
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-emerald-600 text-xs sm:text-sm font-medium"
            />
          </div>

          {/* WhatsApp Submission (No Pricing) */}
          <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-md border border-slate-800">
            <div className="text-center sm:text-left">
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Custom Tour Request</span>
              <div className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {travelersCount} Traveler(s) • {tripDuration} Days
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {selectedDestinations.join(", ")}
              </p>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Get Custom Quote on WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
