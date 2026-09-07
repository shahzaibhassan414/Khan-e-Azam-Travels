"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { config } from "@/config";
import { 
  ShieldCheck, 
  Heart, 
  Award, 
  Compass, 
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-10 sm:mb-14 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
            We Are {config.businessName}
          </h1>
          <p className="text-slate-300 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Redefining luxury mountain exploration across Pakistan. We curate royal road expeditions, executive family chalets, and bespoke by-air charters with unrivaled attention to detail.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-18">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-900 border border-slate-200">
            <Image
              src="/images/fairy_meadows.jpg"
              alt="Our Story in Pakistan"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Headquartered in Samanabad, Lahore</span>
              <h3 className="text-lg font-bold">Pioneering Royal Mountain Expeditions</h3>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Royalty in Travel, Excellence in Exploration
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Khan e Azam Travel & Tours was established to elevate northern tourism in Pakistan from crowded bus trips to refined, executive-class experiences. We believe travel should be soul-stirring, seamless, and steeped in genuine hospitality.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether trekking to the pristine reflection pool of Nanga Parbat, flying directly over K2 into Shangrila Resort, or relaxing by roaring campfire BBQ feasts, every journey is meticulously planned by seasoned mountain professionals.
            </p>

            <div className="pt-3 flex flex-wrap gap-4">
              <Link
                href="/packages"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
              >
                <span>Explore Upcoming Expeditions</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200/90">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Why Discerning Travelers Choose Us
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Our four core commitments ensuring every single expedition is luxurious, secure, and extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
                title: "100% Female & Family Safe",
                desc: "Dedicated female tour coordinators, verified luxury hotels, and zero tolerance for harassment.",
              },
              {
                icon: <Award className="w-6 h-6 text-emerald-700" />,
                title: "Certified Mountain Leads",
                desc: "First-aid certified captains with 10+ years of high-altitude northern terrain and rescue training.",
              },
              {
                icon: <Heart className="w-6 h-6 text-emerald-700" />,
                title: "Vibrant Community Spirit",
                desc: "RoadRang interactive vibes, campfire jamming, acoustic sessions, and summit painting.",
              },
              {
                icon: <Compass className="w-6 h-6 text-emerald-700" />,
                title: "Zero Hidden Costs",
                desc: "Transparent inclusions with executive transport, meals, tolls, and comfortable stays.",
              },
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-center text-center p-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center mb-3">
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1.5">{pillar.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-md grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border border-slate-800">
          {config.stats.map((st, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-4xl font-extrabold text-white mb-1">{st.value}</div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
