"use client";

import React from "react";
import { config } from "@/config";
import { 
  Sparkles, 
  Palette, 
  Camera, 
  Flame, 
  Moon, 
  Music,
  Smile
} from "lucide-react";

export default function ActivityHighlights() {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-emerald-400" />,
    Palette: <Palette className="w-5 h-5 text-emerald-400" />,
    Camera: <Camera className="w-5 h-5 text-emerald-400" />,
    Flame: <Flame className="w-5 h-5 text-emerald-400" />,
    Moon: <Moon className="w-5 h-5 text-emerald-400" />,
    Music: <Music className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle Glow shapes */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
            More Than Just A Sightseeing Tour
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            Every journey with us is enriched with curated alpine activities, acoustic sessions under the stars, high-tea over glaciers, and moments that transform travelers into lifelong friends.
          </p>
        </div>

        {/* 6 Signature Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.activities.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/90 hover:bg-slate-900 p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <Smile className="w-3.5 h-3.5 text-emerald-400" />
                <span>Included on all regular royal departures</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
