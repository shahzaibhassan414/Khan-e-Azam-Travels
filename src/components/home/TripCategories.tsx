"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { config } from "@/config";
import { Users, Compass, Plane, ArrowRight } from "lucide-react";

export default function TripCategories() {
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-5 h-5 text-emerald-400" />,
    Compass: <Compass className="w-5 h-5 text-emerald-400" />,
    Plane: <Plane className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4">
            Choose Your Way to Explore
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Whether you want to join an elite group expedition, fly directly into the Karakorams, or craft a bespoke private retreat — we ensure royalty in every mile.
          </p>
        </div>

        {/* 3 Categories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
            >
              {/* Category Image Header */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30 shadow-sm">
                    {cat.badge}
                  </span>
                </div>

                {/* Floating Icon */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-emerald-400 tracking-wider block">
                      {cat.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight mt-0.5">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-center text-white shrink-0">
                    {iconMap[cat.icon] || <Compass className="w-5 h-5 text-emerald-400" />}
                  </div>
                </div>
              </div>

              {/* Category Description & CTA */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {cat.tagline}
                </p>

                <Link
                  href={cat.href}
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  <span>{cat.cta}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-emerald-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
