"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { config, TourPackage } from "@/config";
import TourCard from "@/components/tours/TourCard";
import BookingModal from "@/components/tours/BookingModal";
import { 
  ShieldCheck, 
  Clock, 
  Send,
  Hotel,
} from "lucide-react";

export default function ByAirPage() {
  const [selectedTourForBooking, setSelectedTourForBooking] = useState<TourPackage | null>(null);

  const byAirTours: TourPackage[] = config.tours.filter(
    (t: TourPackage) => t.category === "by-air" || t.tags.includes("Return Flights")
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24">
      {/* Hero Header */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mb-12 sm:mb-16 border-b border-slate-800">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/skardu_valley.jpg"
            alt="Skardu Fly in Luxury"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4">
              By Air Royal Escapes
            </h1>
            <p className="text-slate-300 text-xs sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              Skip the 22-hour mountain drive. Fly directly into Skardu or Gilgit in 45 minutes with breathtaking aerial views of Nanga Parbat, K2, and the Karakorams paired with 5-star Serena heritage resorts.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/craft-your-tour"
                className="px-6 sm:px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all"
              >
                Custom Flight Package
              </Link>
              <Link
                href={config.whatsappLink}
                target="_blank"
                className="px-6 sm:px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-slate-700 transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Flight Concierge</span>
              </Link>
            </div>
          </div>

          {/* Value Props Card */}
          <div className="bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2">
              The Khan e Azam By-Air Privilege
            </h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-sm">45-Minute Scenic Flight</h4>
                <p className="text-xs text-slate-400">Direct flights from Islamabad International with guaranteed window views.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Hotel className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-sm">5-Star Heritage Luxury Stays</h4>
                <p className="text-xs text-slate-400">Shangrila Chalets, Serena Shigar Fort, Serena Khaplu Palace.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-sm">Private 4x4 Prado & Concierge</h4>
                <p className="text-xs text-slate-400">Dedicated chauffeur, VIP airport transfers, zero stress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Featured By-Air Packages
          </h2>
          <p className="text-slate-600 text-xs sm:text-base">
            Fixed departures and flexible custom dates with full luxury inclusions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {byAirTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onBookNow={(t) => setSelectedTourForBooking(t)}
            />
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        tour={selectedTourForBooking}
        isOpen={!!selectedTourForBooking}
        onClose={() => setSelectedTourForBooking(null)}
      />
    </div>
  );
}
