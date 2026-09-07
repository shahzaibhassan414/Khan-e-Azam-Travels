"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { config, TourPackage } from "@/config";
import HeroSearchFilter from "@/components/home/HeroSearchFilter";
import TripCategories from "@/components/home/TripCategories";
import ActivityHighlights from "@/components/home/ActivityHighlights";
import MomentsGallery from "@/components/home/MomentsGallery";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TourCard from "@/components/tours/TourCard";
import BookingModal from "@/components/tours/BookingModal";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Send
} from "lucide-react";

export default function HomePage() {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>("all");
  const [selectedTourForBooking, setSelectedTourForBooking] = useState<TourPackage | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const filteredTours = config.tours.filter((tour) => {
    if (selectedCategoryTab === "all") return true;
    if (selectedCategoryTab === "group") return tour.category === "group";
    if (selectedCategoryTab === "weekend") return tour.category === "weekend";
    if (selectedCategoryTab === "by-air") return tour.category === "by-air";
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#f8fafc]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100dvh] sm:min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/images/hero_mountains_cinematic.jpg"
            alt="Khan e Azam Travel & Tours — Luxury Pakistan Expeditions"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center w-full h-full scale-100"
          />
          {/* Multi-layer Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/95" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center w-full my-auto py-4 sm:py-8">
          {/* Main Headline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Pakistan&apos;s Premier Luxury Travel Agency</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-3 sm:mb-4 max-w-4xl">
            Where Royal Expeditions <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Meet The Karakorams
            </span>
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-slate-300 font-normal max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Curated group road trips, executive mountain chalets, and scenic by-air expeditions across Hunza, Skardu & Fairy Meadows. Certified captains, gourmet bonfires, and unrivaled hospitality.
          </p>

          {/* Dual Action CTAs */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-6 sm:mb-8 w-full max-w-md sm:max-w-none">
            <a
              href="#upcoming-tours"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all duration-200 active:scale-95"
            >
              <span>Explore Tours</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </a>
            <Link
              href="/craft-your-tour"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md border border-slate-700 shadow-md transition-all duration-200 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>Custom Trip</span>
            </Link>
          </div>

          {/* Search Filter Bar */}
          <div className="w-full">
            <HeroSearchFilter />
          </div>
        </div>

        {/* Bottom Trust Stats & Scroll Cue */}
        <div className="relative z-10 w-full max-w-6xl mx-auto pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full md:w-auto">
            {config.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll down prompt */}
          <a
            href="#upcoming-tours"
            className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors group"
          >
            <span>Scroll to Departures</span>
            <ChevronDown className="w-4 h-4 text-emerald-400 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 2. UPCOMING TOURS SECTION */}
      <section id="upcoming-tours" className="py-16 sm:py-24 bg-[#f8fafc] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-2 border border-emerald-200/70">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Weekly Guaranteed Departures</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                Featured Tour Packages
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm sm:max-w-xl">
                Fresh destinations, boutique luxury stays, and memorable journeys with certified captains.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar w-full md:w-auto">
              {[
                { id: "all", label: "All Tours" },
                { id: "group", label: "Group Tours" },
                { id: "weekend", label: "Weekend Escapes" },
                { id: "by-air", label: "By Air Luxury" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategoryTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all whitespace-nowrap shrink-0 ${
                    selectedCategoryTab === tab.id
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onBookNow={(t) => setSelectedTourForBooking(t)}
              />
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12 sm:mt-14">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all active:scale-95"
            >
              <span>View All 15+ Upcoming Expeditions</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CHOOSE YOUR WAY TO WANDER */}
      <TripCategories />

      {/* 4. SIGNATURE TRIP VIBES */}
      <ActivityHighlights />

      {/* 5. CRAFT YOUR TOUR PROMO BANNER */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Tailor-Made Royal Service
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Planning a Private Trip for Family, Friends or Office?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
              Pick your dream destinations, select your vehicle (4x4 Prado, Grand Cabin, Coaster, or Scenic Flights), choose standard or 5-star Serena resorts, and let our destination experts handle every detail.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Private 4x4 Prado or Luxury Hiace</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Flexible Dates & Custom Stays</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant WhatsApp Itinerary</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
            <Link
              href="/craft-your-tour"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all text-center"
            >
              Interactive Trip Builder
            </Link>
            <Link
              href={config.whatsappLink}
              target="_blank"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-slate-700 transition-all text-center flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Chat on WhatsApp</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. MOMENTS GALLERY */}
      <MomentsGallery />

      {/* 7. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 8. FAQ ACCORDION */}
      <section className="py-16 sm:py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-2 border border-emerald-200/70">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Clear & Transparent</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {config.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-emerald-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
