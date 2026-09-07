"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Search, 
  ChevronDown
} from "lucide-react";

export default function HeroSearchFilter() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("");
  const [departureCity, setDepartureCity] = useState("Lahore");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("dest", destination);
    if (category) params.set("cat", category);
    if (departureCity) params.set("city", departureCity);

    router.push(`/packages?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-200 text-slate-900 transition-all duration-300">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2">
          {/* Destination Select */}
          <div className="flex-1 bg-slate-50 sm:bg-transparent px-3.5 py-2.5 sm:py-1.5 rounded-xl sm:rounded-none sm:border-r border-slate-200 text-left">
            <label className="block text-[11px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Destination</span>
            </label>
            <div className="relative mt-1 sm:mt-0.5">
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                aria-label="Select destination"
                className="w-full bg-transparent font-bold text-base sm:text-sm text-slate-900 focus:outline-none cursor-pointer pr-4 truncate py-0.5"
              >
                <option value="">All Mountain Destinations</option>
                <option value="Fairy Meadows">Fairy Meadows & Nanga Parbat</option>
                <option value="Hunza">Hunza Valley & Passu</option>
                <option value="Skardu">Skardu & Deosai</option>
                <option value="Kumrat">Kumrat Valley & Katora</option>
                <option value="Swat">Swat & Malam Jabba</option>
                <option value="Sharan">Sharan Forest</option>
                <option value="Naran">Naran Kaghan</option>
              </select>
            </div>
          </div>

          {/* Travel Style */}
          <div className="flex-1 bg-slate-50 sm:bg-transparent px-3.5 py-2.5 sm:py-1.5 rounded-xl sm:rounded-none sm:border-r border-slate-200 text-left">
            <label className="block text-[11px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Tour Type</span>
            </label>
            <div className="relative mt-1 sm:mt-0.5">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                aria-label="Select travel style"
                className="w-full bg-transparent font-bold text-base sm:text-sm text-slate-900 focus:outline-none cursor-pointer pr-4 truncate py-0.5"
              >
                <option value="">All Tour Types</option>
                <option value="group">Group Tours</option>
                <option value="by-air">By Air Luxury</option>
                <option value="weekend">Weekend Trips</option>
                <option value="custom">Custom Private</option>
              </select>
            </div>
          </div>

          {/* Departure City */}
          <div className="flex-1 bg-slate-50 sm:bg-transparent px-3.5 py-2.5 sm:py-1.5 rounded-xl sm:rounded-none text-left">
            <label className="block text-[11px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Depart From</span>
            </label>
            <div className="relative mt-1 sm:mt-0.5">
              <select
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
                aria-label="Select departure city"
                className="w-full bg-transparent font-bold text-base sm:text-sm text-slate-900 focus:outline-none cursor-pointer pr-4 truncate py-0.5"
              >
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Karachi">Karachi</option>
                <option value="Custom">Custom City</option>
              </select>
            </div>
          </div>

          {/* Search Action Button */}
          <div className="shrink-0 pt-1 sm:pt-0">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap min-h-[44px]"
            >
              <Search className="w-4 h-4 shrink-0" />
              <span>Search Tours</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
