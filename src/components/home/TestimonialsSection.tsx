"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { config } from "@/config";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(3);
  
  // Touch swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Update visible items count based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsVisible(1);
      } else if (window.innerWidth < 1024) {
        setItemsVisible(2);
      } else {
        setItemsVisible(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = config.testimonials.length;
  const maxIndex = Math.max(0, totalItems - itemsVisible);

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  }, [maxIndex]);

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [maxIndex]);

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      next();
    }, 4500);

    return () => clearInterval(interval);
  }, [next, isHovered]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3.5 border border-emerald-200/70">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Traveler Praise & Stories</span>
          </div>

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

        {/* Carousel Container */}
        <div className="relative">
          {/* Outer Viewport */}
          <div 
            className="overflow-hidden py-4 -my-4 px-1"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Flex Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
              }}
            >
              {config.testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="shrink-0 px-2.5 sm:px-3.5"
                  style={{ width: `${100 / itemsVisible}%` }}
                >
                  <div className="bg-white h-full p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group">
                    {/* Floating Quote Badge */}
                    <div className="absolute -top-3 right-6 w-8 h-8 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center shadow-sm">
                      <Quote className="w-3.5 h-3.5 fill-emerald-400" />
                    </div>

                    <div>
                      {/* Star Rating & Trip Tag */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-1 text-emerald-600">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-emerald-600" />
                          ))}
                        </div>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-md truncate max-w-[150px]">
                          {item.trip.split("—")[0].trim()}
                        </span>
                      </div>

                      {/* Content */}
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6 line-clamp-4">
                        &ldquo;{item.content}&rdquo;
                      </p>
                    </div>

                    {/* Author Profile */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-3 mt-auto">
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrow Controls */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-slate-900 hover:text-white shadow-md flex items-center justify-center transition-all z-20 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-slate-900 hover:text-white shadow-md flex items-center justify-center transition-all z-20 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === idx
                  ? "w-6 bg-slate-900 shadow-sm"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
