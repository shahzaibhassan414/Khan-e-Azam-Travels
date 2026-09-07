"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { config } from "@/config";
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  MessageCircle,
  ChevronRight,
  Send,
  Calendar
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tours & Packages", href: "/packages" },
    { name: "Craft Tour", href: "/craft-your-tour" },
    { name: "By Air", href: "/by-air" },
    { name: "Moments", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar */}
      <div className={`hidden lg:block transition-all duration-200 text-xs ${
        isScrolled 
          ? "bg-slate-900 text-slate-300 py-1.5 border-b border-slate-800" 
          : "bg-slate-950/80 backdrop-blur-md text-slate-200 py-2 border-b border-white/10"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <a href={`tel:${config.phone}`} className="hover:text-emerald-400 transition-colors font-medium">
                {config.phone}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="font-medium text-slate-300">{config.addresses.lahore}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 font-medium text-xs flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Weekly Departures Every Thursday & Friday</span>
            </span>
            <span className="text-slate-600">|</span>
            <Link 
              href={config.whatsappLink} 
              target="_blank" 
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 text-slate-900 border-b border-slate-200/80" 
          : "bg-gradient-to-b from-slate-950/85 via-slate-950/50 to-transparent py-3 sm:py-4 text-white"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white shadow-sm shrink-0 border border-slate-200">
              <Image
                src="/images/logo.svg"
                alt="Khan e Azam Travel & Tours Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg sm:text-xl font-extrabold tracking-tight leading-none ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}>
                Khan e Azam <span className="text-emerald-700">Travels</span>
              </span>
              <span className={`text-[10px] tracking-wider uppercase font-semibold mt-0.5 ${
                isScrolled ? "text-slate-500" : "text-slate-300"
              }`}>
                Travel & Tourism
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors relative ${
                    isActive
                      ? isScrolled
                        ? "text-emerald-700 font-bold bg-emerald-50/80"
                        : "text-white font-bold bg-white/15"
                      : isScrolled
                      ? "text-slate-600 hover:text-emerald-700 hover:bg-slate-100/70"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <Link
              href="/craft-your-tour"
              className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-all whitespace-nowrap ${
                isScrolled 
                  ? "border-slate-300 text-slate-700 hover:border-emerald-600 hover:text-emerald-700 hover:bg-emerald-50/50" 
                  : "border-white/40 text-white hover:bg-white/15 hover:border-white"
              }`}
            >
              Plan Custom Tour
            </Link>
            
            <Link
              href={config.whatsappLink}
              target="_blank"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-sm transition-all whitespace-nowrap flex items-center gap-1.5 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire Now</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href={config.whatsappLink}
              target="_blank"
              className="bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6 shrink-0" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950 text-white flex flex-col justify-between p-6 animate-fade-in overflow-y-auto">
          {/* Mobile Drawer Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white p-0.5">
                  <Image src="/images/logo.svg" alt="Khan e Azam Travel & Tours" fill className="object-contain" />
                </div>
                <span className="text-lg font-bold text-white">
                  Khan e Azam <span className="text-emerald-400">Travels</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 shrink-0" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1.5 pt-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl font-medium text-base transition-colors ${
                      isActive
                        ? "bg-emerald-900/60 text-emerald-300 font-bold border border-emerald-700/40"
                        : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Drawer Bottom CTAs */}
          <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
            <Link
              href="/craft-your-tour"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700"
            >
              Plan Custom Tour
            </Link>

            <Link
              href={config.whatsappLink}
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Contact on WhatsApp</span>
            </Link>

            <div className="text-center text-xs text-slate-400 mt-1">
              Call: <a href={`tel:${config.phone}`} className="text-emerald-400 font-semibold">{config.phone}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
