/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Gamepad2, Heart, ArrowUp } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal border-t border-white/[0.04] pt-16 pb-12 text-left relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/[0.04] items-start">
          
          {/* Logo Brand information */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-full border border-champagne/10 bg-white/[0.01]">
                <Gamepad2 className="w-5 h-5 text-olive-light" />
              </div>
              <span className="font-serif text-lg tracking-wider font-semibold text-champagne">
                CHUMS CAFE
              </span>
            </div>
            <p className="text-xs text-champagne/50 font-sans font-light leading-relaxed max-w-sm">
              Mumbai’s absolute divine lounge. Offering private console rooms and meticulously assembled high-refresh PC spaces, combined with slow-cooked gastropub-style dining. High-performance relaxation meets deep culinary satisfaction.
            </p>
          </div>

          {/* Core location links and direct actions column */}
          <div className="md:col-span-4 space-y-3.5">
            <span className="text-[10px] tracking-widest text-olive-light uppercase font-semibold block">
              Contact & Directions
            </span>
            <div className="space-y-2.5 text-xs font-sans text-champagne/70 font-light leading-relaxed">
              <p>
                <strong className="text-champagne font-normal">Dial (Click to Call):</strong><br />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-champagne transition-colors underline font-medium">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </p>
              <p>
                <strong className="text-champagne font-normal">Location (Click to GPS):</strong><br />
                <a href={BUSINESS_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors underline line-clamp-2 block">
                  {BUSINESS_INFO.address}
                </a>
              </p>
            </div>
          </div>

          {/* Quick legal or aesthetic list column */}
          <div className="md:col-span-3 space-y-3.5">
            <span className="text-[10px] tracking-widest text-olive-light uppercase font-semibold block">
              Operating Standard
            </span>
            <div className="space-y-2 text-xs font-mono text-champagne/60 font-light">
              <p>Mon &ndash; Sun: 11:00 AM &ndash; 11:30 PM</p>
              <p>PS5 Station Sanitations: Every Hour</p>
              <p>Culinary Freshness: 100% Chef-cooked</p>
            </div>
            
            {/* Scroll to Top button */}
            <button
              onClick={handleScrollTop}
              className="mt-4 flex items-center space-x-2 text-[10px] text-champagne/40 hover:text-champagne tracking-widest uppercase transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-olive-light" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-champagne/30">
          <div>
            &copy; {new Date().getFullYear()} Chums Cafe. All Rights Reserved. Designed in Quiet Luxury.
          </div>
          <div className="flex items-center space-x-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-olive-light fill-olive-light/20" />
            <span>for Gamers & Foodies in Andheri East, Mumbai</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
