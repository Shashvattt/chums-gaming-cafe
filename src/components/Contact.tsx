/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Compass, CheckCircle2, Clock, Send, ShieldAlert } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "PS5",
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Generate dynamic pre-formatted WhatsApp message link with India code 91 and mobile 9167519763
    const message = `Hello Chums Cafe! I'd like to book an experience.

*My Booking Details*:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Selected Station: ${formData.subject === "PS5" ? "PS5 Private Suite" : "Esports PC Station"}

Please contact me back to confirm session slot. Thank you!`;

    const waUrl = `https://wa.me/919167519763?text=${encodeURIComponent(message)}`;

    // Try to open WhatsApp in a new tab
    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.warn("Popup blocked, fallback redirect in same tab", err);
      window.location.href = waUrl;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
      setFormData({ name: "", phone: "", subject: "PS5" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-charcoal relative">
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent select-none pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Core Prominent Contact Details and Google Maps Embed */}
          <div className="lg:col-span-6 text-left space-y-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-olive-light font-sans font-semibold mb-3 block">
                Find Our Sanctuary
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-champagne font-medium tracking-tight mb-5">
                Lounge & Location
              </h2>
              <p className="text-xs sm:text-sm text-champagne/60 font-sans font-light leading-relaxed">
                Nestled near 7 Hills Hospital in Andheri East, Chums Cafe offers an escape from Mumbai’s dynamic pace. Use the interactive portal below to trace your route, or dial directly to request concierge bookings.
              </p>
            </div>

            {/* Direct click-to buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="contact_click_to_call"
                className="group flex flex-col p-6 bg-charcoal-light/30 border border-white/[0.05] hover:border-olive/30 hover:bg-charcoal-light/60 transition-all duration-300 rounded"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-olive/10 border border-olive/20 text-olive-light rounded group-hover:bg-champagne group-hover:text-charcoal transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-xs tracking-wider uppercase font-semibold text-champagne">
                    Instant Call
                  </span>
                </div>
                <span className="text-base font-serif text-champagne font-medium">
                  {BUSINESS_INFO.phoneFormatted}
                </span>
                <span className="text-[10px] text-champagne/40 uppercase mt-1 font-sans">
                  Click to Call Now
                </span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                id="contact_click_to_gps"
                className="group flex flex-col p-6 bg-charcoal-light/30 border border-white/[0.05] hover:border-olive/30 hover:bg-charcoal-light/60 transition-all duration-300 rounded"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-olive/10 border border-olive/20 text-olive-light rounded group-hover:bg-champagne group-hover:text-charcoal transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs tracking-wider uppercase font-semibold text-champagne">
                    GPS Directions
                  </span>
                </div>
                <span className="text-xs font-sans text-champagne/80 font-light line-clamp-1">
                  Andheri East, Mumbai
                </span>
                <span className="text-[10px] text-champagne/40 uppercase mt-2 font-sans">
                  Open Google Maps
                </span>
              </a>
            </div>

            {/* Google Map Framed Embed */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full border border-white/[0.08] p-1 bg-charcoal-light rounded-lg overflow-hidden group">
              <iframe
                title="Chums Cafe Location Map"
                src={BUSINESS_INFO.mapUrl}
                className="w-full h-full object-cover filter grayscale opacity-70 contrast-120 group-hover:opacity-85 group-hover:grayscale-0 transition-all duration-700 ease-out"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
              <div className="absolute top-4 right-4 py-1.5 px-3 bg-charcoal/95 backdrop-blur-md border border-white/[0.08] text-[10px] text-champagne font-sans tracking-widest uppercase flex items-center space-x-2">
                <Compass className="w-3 h-3 text-olive-light animate-spin-slow" />
                <span>Marol, Andheri East</span>
              </div>
            </div>

            {/* Address print details */}
            <div className="flex items-start space-x-3.5 text-xs text-champagne/70 font-sans font-light leading-relaxed">
              <MapPin className="w-4 h-4 text-olive-light shrink-0 mt-0.5" />
              <span><strong>Address:</strong> {BUSINESS_INFO.address}</span>
            </div>
          </div>

          {/* Column 2: Elegant Private Booking / Inquiries Form */}
          <div className="lg:col-span-6 bg-charcoal-light/30 border border-white/[0.05] p-8 sm:p-10 relative">
            
            <div className="mb-8">
              <div className="flex items-center space-x-2 text-olive-light mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-[10px] tracking-widest uppercase font-semibold">Concierge Service</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-champagne font-medium tracking-tight">
                Submit an Inquiry
              </h3>
              <p className="text-[11px] sm:text-xs text-champagne/50 mt-1 font-sans">
                Planning a dual PS5 tournament, corporate breakout, or private culinary party? Let our host arrange your exact parameters.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-champagne/60 mb-2 font-semibold">
                        GUEST NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Dsouza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-charcoal border border-white/[0.08] focus:border-champagne/40 py-3.5 px-4 text-xs text-champagne placeholder-champagne/30 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-champagne/60 mb-2 font-semibold">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="09167519763"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-charcoal border border-white/[0.08] focus:border-champagne/40 py-3.5 px-4 text-xs text-champagne placeholder-champagne/30 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-champagne/60 mb-2 font-semibold">
                      EVENT TYPE OR SERVICE INTEREST
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-charcoal border border-white/[0.08] focus:border-champagne/40 py-3.5 px-4 text-xs text-champagne focus:outline-none transition-colors"
                    >
                      <option value="PS5">PlayStation 5 Suite</option>
                      <option value="PC">Esports PC Ateliér</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    id="contact_form_submit_btn"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-3.5 py-4 bg-champagne text-charcoal text-xs font-semibold tracking-widest uppercase hover:bg-champagne-dark transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">PROCESSING CONCIERGE...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-charcoal" />
                        <span>SUBMIT INQUIRY</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center space-x-2 text-[10px] text-champagne/30">
                    <ShieldAlert className="w-3.5 h-3.5 grayscale" />
                    <span>Your request enters our high-priority queue immediately.</span>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12 px-4 bg-olive/10 border border-olive/30 rounded"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-4 bg-olive/20 text-champagne rounded-full mb-6"
                  >
                    <CheckCircle2 className="w-12 h-12 text-champagne-dark" />
                  </motion.div>
                  <h4 className="font-serif text-xl text-champagne font-medium mb-3.5">
                    Concierge Registered Successfully
                  </h4>
                  <p className="text-xs text-champagne/70 font-sans font-light leading-relaxed mb-6 max-w-sm">
                    Thank you. A host from the Chums Cafe management team will trace your inquiry parameters and call you within the hour to refine requirements.
                  </p>
                  <button
                    onClick={() => setIsSubmitSuccess(false)}
                    className="py-2.5 px-6 border border-champagne/20 text-champagne hover:border-champagne hover:bg-white/[0.02] text-[10px] font-semibold tracking-widest uppercase transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
