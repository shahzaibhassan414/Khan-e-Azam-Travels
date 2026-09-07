import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { config } from "@/config";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"]
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: `${config.businessName} — ${config.tagline}`,
  description: config.subTagline,
  keywords: ["Tours in Pakistan", "Fairy Meadows", "Hunza Valley", "Skardu By Air", "Group Tours Pakistan", "Khan e Azam", "Khan e Azam Travel and Tours", "Khan e Azam Travels"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/images/logo.svg",
  },
  openGraph: {
    title: `${config.businessName} — ${config.tagline}`,
    description: config.subTagline,
    images: ["/images/fairy_meadows.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased selection:bg-emerald-800 selection:text-white`}>
        <Navbar />
        
        {/* Floating WhatsApp Quick Action Button */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group">
          <Link 
            href={config.whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="w-12 h-12 sm:w-auto flex items-center justify-center sm:justify-start gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-0 sm:px-4 sm:py-3.5 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/30"
          >
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.16-1.32C8.6 21.52 10.26 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.42 14.19c-.23.64-1.33 1.25-1.84 1.33-.48.08-1.09.11-3.52-.86-2.9-1.15-4.75-4.13-4.89-4.32-.14-.19-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1-2.41.26-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.49.24.57.81 1.98.88 2.13.07.14.12.31.02.5-.1.19-.15.31-.3.49-.15.18-.31.4-.44.54-.15.15-.3.31-.13.61.17.29.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.34 1.45.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.15.26.1 1.66.78 1.95.92.29.14.48.22.55.34.07.12.07.7-.16 1.34z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="hidden sm:inline-block font-extrabold text-sm tracking-wide pr-1">
              WhatsApp Support
            </span>
          </Link>
        </div>

        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
