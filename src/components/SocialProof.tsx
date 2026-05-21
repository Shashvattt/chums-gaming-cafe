/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, MessageSquare } from "lucide-react";
import { REVIEWS } from "../data";

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-24 bg-charcoal-light relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/[0.01] via-transparent to-transparent select-none pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-olive-light font-sans font-semibold mb-3">
            Guest Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-champagne font-medium tracking-tight mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm text-champagne/60 font-sans font-light max-w-lg">
            Real feedback from Google Maps reviewers who have experienced Chums Cafe’s dual essence of masterplay and dining.
          </p>
          <div className="w-12 h-[1px] bg-champagne/20 mt-6"></div>
        </div>

        {/* Testimonials 3-Column Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {REVIEWS.map((review, index) => {
            // Calculate overall rating average
            const ratingsArray = Object.values(review.rating);
            const averageRating = (ratingsArray.reduce((b, c) => b + c, 0) / ratingsArray.length).toFixed(1);

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="flex flex-col justify-between p-8 sm:p-9 bg-charcoal border border-white/[0.04] hover:border-white/[0.1] hover:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 relative"
              >
                {/* Floating quote bubble graphic */}
                <div className="absolute top-6 right-8 text-white/[0.02]">
                  <MessageSquare className="w-12 h-12 stroke-[1px]" />
                </div>

                <div>
                  {/* High quality Client Meta (Avatar Removed) */}
                  <div className="mb-6">
                    <div>
                      <span className="font-serif text-base text-champagne font-medium block leading-none">
                        {review.name}
                      </span>
                      <span className="text-[11px] text-champagne/40 tracking-wider uppercase font-sans mt-1.5 block">
                        {review.timeAgo}
                      </span>
                    </div>
                  </div>

                  {/* Core Review Statement */}
                  <p className="text-xs sm:text-sm text-champagne/85 font-sans font-light italic leading-relaxed mb-8">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Granulated Quality metrics scores */}
                <div className="border-t border-white/[0.06] pt-6 mt-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-olive-light uppercase font-semibold tracking-widest">
                      Quality Scores
                    </span>
                    <div className="flex items-center space-x-1 bg-white/[0.03] px-2 py-0.5 border border-white/[0.05]">
                      <Star className="w-3 h-3 text-champagne fill-champagne" />
                      <span className="text-[11px] font-mono text-champagne font-bold leading-none">
                        {averageRating}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-charcoal-light/40 py-2.5 px-1 border border-white/[0.02]">
                      <span className="text-[10px] font-sans text-champagne/50 block">Food</span>
                      <span className="text-xs font-serif font-semibold text-champagne block mt-0.5">
                        {review.rating.food}/5
                      </span>
                    </div>
                    <div className="bg-charcoal-light/40 py-2.5 px-1 border border-white/[0.02]">
                      <span className="text-[10px] font-sans text-champagne/50 block">Service</span>
                      <span className="text-xs font-serif font-semibold text-champagne block mt-0.5">
                        {review.rating.service}/5
                      </span>
                    </div>
                    <div className="bg-charcoal-light/40 py-2.5 px-1 border border-white/[0.02]">
                      <span className="text-[10px] font-sans text-champagne/50 block">Ambience</span>
                      <span className="text-xs font-serif font-semibold text-champagne block mt-0.5">
                        {review.rating.atmosphere}/5
                      </span>
                    </div>
                  </div>

                  {review.favoriteItem && (
                    <div className="mt-4 text-[11px] text-champagne/50 flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-olive rounded-full"></span>
                      <span>Loved: <strong className="text-champagne/80 font-normal">{review.favoriteItem}</strong></span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
