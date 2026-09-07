"use client";

import React, { useState } from "react";
import Image from "next/image";
import { config } from "@/config";
import { Star, Quote, CheckCircle } from "lucide-react";

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Exactly 2 sets for mathematically seamless 0% -> -50% marquee loop
  const duplicatedTestimonials = [
    ...config.testimonials,
    ...config.testimonials,
  ];

  return (
    <section 
      className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Real experiences from real wanderers. See what our travelers loved, cherished, and remembered long after their journey ended.
          </p>

          {/* Rating counter pill */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            <div className="flex items-center text-emerald-600">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-emerald-600" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.98 / 5.0</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">Over 12,000+ satisfied travelers</span>
          </div>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Track (No clipping masks on mobile, ample vertical padding) */}
      <div className="relative w-full overflow-hidden py-4 sm:py-6">
        <div 
          className="flex gap-4 sm:gap-6 w-max animate-marquee px-4"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[380px] shrink-0 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-emerald-600/40 transition-all duration-300 flex flex-col justify-between relative group select-none"
            >
              {/* Header with Star Rating & Trip Tag */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex items-center gap-1 text-emerald-600">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-emerald-600" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-md truncate max-w-[170px]">
                    {item.trip.split("—")[0].trim()}
                  </span>
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Profile & Quote Icon */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5 truncate">
                      {item.name}
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium truncate">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0">
                  <Quote className="w-3 h-3 fill-emerald-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
