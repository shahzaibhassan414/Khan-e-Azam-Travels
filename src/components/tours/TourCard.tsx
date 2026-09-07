"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TourPackage, config } from "@/config";
import { 
  Calendar, 
  MapPin, 
  Star, 
  Clock, 
  Users, 
  Sparkles, 
  Check, 
  ChevronRight,
  MessageCircle,
  ShieldCheck
} from "lucide-react";

interface TourCardProps {
  tour: TourPackage;
  onBookNow: (tour: TourPackage) => void;
}

export default function TourCard({ tour, onBookNow }: TourCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-emerald-600/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image Banner */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold shadow-sm border border-slate-700 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            {tour.duration.split("/")[0].trim()}
          </span>

          {tour.badge && (
            <span className="px-3 py-1 rounded-lg bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
              {tour.badge}
            </span>
          )}
        </div>

        {/* Bottom destination & rating */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{tour.destination}</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-900/80 border border-slate-700 backdrop-blur-md text-white font-bold text-xs px-2.5 py-1 rounded-lg shadow-sm">
            <Star className="w-3 h-3 text-emerald-400 fill-emerald-400" />
            <span>{tour.rating.toFixed(1)}</span>
            <span className="text-[10px] text-slate-300">({tour.reviewsCount})</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1 mb-1.5">
            {tour.title}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3.5">
            {tour.subtitle}
          </p>

          {/* Activity Tag Pills */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {tour.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1"
              >
                <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                {tag}
              </span>
            ))}
          </div>

          {/* Next Departures Pill */}
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 mb-4 flex items-center justify-between text-xs">
            <span className="text-slate-500 flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              Departure:
            </span>
            <span className="font-semibold text-slate-800">
              {tour.upcomingDates[0] || "Every Weekend"}
            </span>
          </div>
        </div>

        {/* CTA Footer (No Pricing) */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <div className="text-xs">
            <div className="font-semibold text-slate-800 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Package</span>
            </div>
            <div className="text-[11px] text-slate-500">
              Hotels, Transport & Guide
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onBookNow(tour)}
              className="px-4 py-2.5 sm:py-2 rounded-xl sm:rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5 active:scale-95 min-h-[40px]"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Inquire & Book</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
