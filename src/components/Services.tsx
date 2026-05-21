/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Gamepad2, Laptop, Utensils, ArrowRight } from "lucide-react";
import { SERVICES } from "../data";

interface ServicesProps {
  onOpenBooking: () => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  return (
    <section id="suites" className="py-24 bg-charcoal relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light/10 to-charcoal select-none pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-olive-light font-sans font-semibold mb-4">
            Curated Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-champagne font-medium tracking-tight mb-6 max-w-2xl">
            Bespoke Gaming Stations
          </h2>
          <div className="w-12 h-[1px] bg-champagne/20"></div>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = index === 0 ? Gamepad2 : index === 1 ? Laptop : Utensils;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between bg-charcoal-light/35 border border-white/[0.05] hover:border-olive/30 hover:bg-charcoal-light/60 transition-all duration-500 overflow-hidden"
              >
                <div>
                  {/* Service Image Card */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-transparent"></div>
                    
                    {/* Floating Service Badge Icon */}
                    <div className="absolute top-4 left-4 p-3 bg-charcoal/80 border border-white/[0.08] text-champagne backdrop-blur-md rounded-full">
                      <Icon className="w-4 h-4 text-olive-light" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="font-serif text-xl text-champagne font-medium mb-3.5 group-hover:text-champagne-dark transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-champagne/60 leading-relaxed font-light mb-6">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3">
                      {service.specs.map((spec) => (
                        <div key={spec} className="flex items-center space-x-2.5">
                          <span className="w-1.5 h-1.5 bg-olive rounded-full"></span>
                          <span className="text-xs text-champagne/85 font-sans tracking-wide">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action footer button */}
                <div className="p-6 lg:p-8 pt-0 mt-4">
                  <button
                    onClick={onOpenBooking}
                    className="w-full flex items-center justify-between text-left py-3.5 px-4 bg-white/[0.02] hover:bg-champagne hover:text-charcoal border border-white/[0.08] hover:border-champagne transition-all duration-300 text-xs font-semibold tracking-wider text-champagne uppercase"
                  >
                    <span>Reserve a session</span>
                    <ArrowRight className="w-4 h-4 text-inherit" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
