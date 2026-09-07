"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";

export default function JournalPage() {
  const posts = [
    {
      id: 1,
      title: "The Magic of Autumn in Hunza & Passu",
      excerpt: "When the golden apricot leaves turn fiery amber and red, Hunza transforms into an artist's dream. Here is what it's like to witness peak autumn in northern Pakistan.",
      date: "October 15, 2024",
      readTime: "4 min read",
      image: "/images/hunza_passu.jpg",
      category: "Destination Guides",
    },
    {
      id: 2,
      title: "A Complete Beginner's Guide to Trekking Fairy Meadows",
      excerpt: "From the thrilling mountain jeep trail to the reflection pool of Nanga Parbat, everything you need to know before packing your backpack.",
      date: "August 22, 2024",
      readTime: "6 min read",
      image: "/images/fairy_meadows.jpg",
      category: "Trekking Tips",
    },
    {
      id: 3,
      title: "Exploring the Secret Alpine Lakes & Deserts of Skardu",
      excerpt: "Beyond Shangrila and Upper Kachura, Baltistan hides pristine turquoise pools and high-altitude sand dunes that only a few venture to experience.",
      date: "July 10, 2024",
      readTime: "5 min read",
      image: "/images/skardu_valley.jpg",
      category: "Road Stories",
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-900/60 border border-emerald-700/50 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Curated Travel Chronicles</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2.5 sm:mb-3">
            The Royal <span className="text-emerald-400">Expedition Journal</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Stories, high-altitude guides, seasonal photography logs, and bespoke travel wisdom from our expeditions across Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700 text-emerald-300 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-emerald-600" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
