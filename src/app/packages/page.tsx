"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { config, TourPackage } from "@/config";
import TourCard from "@/components/tours/TourCard";
import BookingModal from "@/components/tours/BookingModal";
import { 
  Search, 
  Compass,
} from "lucide-react";

function PackagesContent() {
  const searchParams = useSearchParams();
  const initialDest = searchParams.get("dest") || "";
  const initialCat = searchParams.get("cat") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedDest, setSelectedDest] = useState(initialDest);
  const [sortBy, setSortBy] = useState<"featured" | "duration-desc" | "duration-asc">("featured");
  const [selectedTourForBooking, setSelectedTourForBooking] = useState<TourPackage | null>(null);

  useEffect(() => {
    if (initialCat) setSelectedCategory(initialCat);
    if (initialDest) setSelectedDest(initialDest);
  }, [initialCat, initialDest]);

  // Filtering
  const filteredTours = config.tours.filter((tour) => {
    const matchesSearch = 
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = 
      selectedCategory === "all" || tour.category === selectedCategory;

    const matchesDest = 
      !selectedDest || tour.destination.toLowerCase().includes(selectedDest.toLowerCase());

    return matchesSearch && matchesCategory && matchesDest;
  });

  // Sorting
  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortBy === "duration-desc") return b.days - a.days;
    if (sortBy === "duration-asc") return a.days - b.days;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            All Upcoming Royal Expeditions
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Browse our scheduled group departures, weekend getaways, and luxury by-air expeditions across Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200/90 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Live Search Input */}
            <div className="md:col-span-5 relative">
              <input
                type="text"
                placeholder="Search by expedition, valley, or activity..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-base sm:text-sm font-medium text-slate-800"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 sm:top-3" />
            </div>

            {/* Destination Dropdown */}
            <div className="md:col-span-4 relative">
              <select
                value={selectedDest}
                onChange={(e) => setSelectedDest(e.target.value)}
                aria-label="Filter by destination"
                className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-600 text-base sm:text-sm font-semibold text-slate-800 cursor-pointer"
              >
                <option value="">All Mountain Destinations</option>
                <option value="Fairy Meadows">Fairy Meadows & Nanga Parbat</option>
                <option value="Hunza">Hunza Valley & Passu</option>
                <option value="Skardu">Skardu & Deosai Plains</option>
                <option value="Kumrat">Kumrat Valley</option>
                <option value="Swat">Swat & Malam Jabba</option>
                <option value="Sharan">Sharan Forest</option>
              </select>
            </div>

            {/* Sort By Dropdown */}
            <div className="md:col-span-3 relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort tours"
                className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-600 text-base sm:text-sm font-semibold text-slate-800 cursor-pointer"
              >
                <option value="featured">Sort: Featured First</option>
                <option value="duration-desc">Duration: Longest First</option>
                <option value="duration-asc">Duration: Shortest First</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3 border-t border-slate-100 hide-scrollbar py-1">
            {[
              { id: "all", label: "All Tours" },
              { id: "group", label: "Group Tours" },
              { id: "weekend", label: "Weekend Escapes" },
              { id: "by-air", label: "By Air Luxury" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all whitespace-nowrap shrink-0 active:scale-95 ${
                  selectedCategory === tab.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tours Count & Grid */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Showing <strong className="text-slate-900">{sortedTours.length}</strong> adventurous journeys
          </span>
          {(searchQuery || selectedDest || selectedCategory !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDest("");
                setSelectedCategory("all");
              }}
              className="text-xs font-bold text-emerald-700 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {sortedTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sortedTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onBookNow={(t) => setSelectedTourForBooking(t)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 sm:p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
            <Compass className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">No matching tours found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Try changing your search term or filter settings, or craft a custom trip according to your schedule.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDest("");
                setSelectedCategory("all");
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <BookingModal
        tour={selectedTourForBooking}
        isOpen={!!selectedTourForBooking}
        onClose={() => setSelectedTourForBooking(null)}
      />
    </div>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-slate-600">Loading tours catalog...</div>}>
      <PackagesContent />
    </Suspense>
  );
}
