"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { config } from "@/config";
import { 
  Compass, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Heart,
  Send,
  ShieldCheck,
  CheckCircle2,
  MessageCircle
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative pt-16 pb-8 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white shadow-sm p-0.5 shrink-0 border border-slate-700">
                <Image
                  src="/images/logo.svg"
                  alt="Khan e Azam Travel & Tours Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-none">
                  Khan e Azam <span className="text-emerald-400">Travels</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400 mt-0.5">
                  Travel & Tours
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Curated northern expeditions, personalized family tours, and corporate retreats across Pakistan.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-col gap-2 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certified mountain guides & experienced 4x4 drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified luxury stays & reliable group management</span>
              </div>
            </div>

            {/* Social Icons SVG */}
            <div className="flex items-center gap-2.5 pt-2">
              <Link
                href={config.socials.instagram}
                target="_blank"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-emerald-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0 border border-slate-800"
                aria-label="Instagram"
              >
                <svg width="16" height="16" className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link
                href={config.socials.facebook}
                target="_blank"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-emerald-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0 border border-slate-800"
                aria-label="Facebook"
              >
                <svg width="16" height="16" className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-emerald-400 transition-colors">
                  Tours & Packages
                </Link>
              </li>
              <li>
                <Link href="/craft-your-tour" className="hover:text-emerald-400 transition-colors text-emerald-400 font-semibold">
                  Craft Custom Tour
                </Link>
              </li>
              <li>
                <Link href="/by-air" className="hover:text-emerald-400 transition-colors">
                  By Air Tours
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-emerald-400 transition-colors">
                  Moments Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Tours */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Featured Tours
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/packages" className="hover:text-emerald-400 flex items-center justify-between group">
                  <span className="group-hover:translate-x-0.5 transition-transform">Fairy Meadows & Nanga Parbat</span>
                  <span className="text-xs text-slate-500">5 Days</span>
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-emerald-400 flex items-center justify-between group">
                  <span className="group-hover:translate-x-0.5 transition-transform">Hunza Valley & Passu Cones</span>
                  <span className="text-xs text-slate-500">5 Days</span>
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-emerald-400 flex items-center justify-between group">
                  <span className="group-hover:translate-x-0.5 transition-transform">Skardu, Deosai & Lakes</span>
                  <span className="text-xs text-slate-500">6 Days</span>
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-emerald-400 flex items-center justify-between group">
                  <span className="group-hover:translate-x-0.5 transition-transform">Kumrat Valley & Katora Lake</span>
                  <span className="text-xs text-slate-500">4 Days</span>
                </Link>
              </li>
              <li>
                <Link href="/by-air" className="hover:text-emerald-400 flex items-center justify-between group">
                  <span className="group-hover:translate-x-0.5 transition-transform text-emerald-400 font-medium">Skardu By Air Tour</span>
                  <span className="text-xs text-slate-500">7 Days</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get in Touch & Office */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Head Office Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500">Phone & WhatsApp:</div>
                  <a href={`tel:${config.phone}`} className="text-slate-200 font-semibold hover:text-emerald-400 transition-colors">
                    {config.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500">Email:</div>
                  <a href={`mailto:${config.email}`} className="text-slate-200 hover:text-emerald-400 transition-colors">
                    {config.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500">Lahore Address:</div>
                  <span className="text-slate-300 leading-relaxed text-xs">
                    {config.addresses.lahore}
                  </span>
                </div>
              </div>

              {/* Quick WhatsApp Button */}
              <div className="pt-2">
                <Link
                  href={config.whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors w-full justify-center shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Contact on WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {config.businessName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact Support</Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">About Us</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
