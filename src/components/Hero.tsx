/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Phone, Compass, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../data";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden pt-24 pb-16">
      {/* Background Graphic Asset with Dark Moody Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070"
          alt="Luxury Lounge Interior"
          className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none filter scale-105 motion-safe:animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-charcoal/90"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 w-full select-none">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Tagline Badging */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full mb-6"
          >
            <Compass className="w-3.5 h-3.5 text-olive-light" />
            <span className="text-[10px] sm:text-xs tracking-[0.3em] font-sans text-champagne/90 uppercase font-light">
              {BUSINESS_INFO.tagline}
            </span>
          </motion.div>

          {/* Main Rich Serif Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-champagne font-semibold leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            {BUSINESS_INFO.headline}
          </motion.h1>

          {/* Sub-headline Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-champagne/70 font-sans font-light leading-relaxed mb-10 max-w-2xl"
          >
            {BUSINESS_INFO.subHeadline}
          </motion.p>

          {/* Interactive Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero_book_cta"
              onClick={onOpenBooking}
              className="group flex items-center justify-center space-x-3 px-8 py-4 bg-champagne text-charcoal text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-champagne-dark hover:shadow-[0_0_30px_rgba(249,246,240,0.2)]"
            >
              <span>Book an Experience</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300 text-charcoal" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="hero_call_cta"
              className="flex items-center justify-center space-x-3 px-8 py-4 border border-white/[0.12] hover:border-champagne/30 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 rounded"
            >
              <Phone className="w-4 h-4 text-olive-light" />
              <span className="text-xs tracking-widest uppercase font-semibold text-champagne">
                Call {BUSINESS_INFO.phoneFormatted}
              </span>
            </a>
          </motion.div>

          {/* Security or Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex items-center space-x-3 text-[11px] text-champagne/40 tracking-wider uppercase font-light"
          >
            <ShieldCheck className="w-4 h-4 text-olive-light/60" />
            <span>Premium Private Spaces &bull; Sanitized & Secured Stations</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
