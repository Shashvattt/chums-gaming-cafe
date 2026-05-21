/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Gamepad, User, Phone, CheckCircle2, Star } from "lucide-react";
import { CONSOLE_STATIONS, BUSINESS_INFO } from "../data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState<"ps5" | "pc" | "food-only">("ps5");
  const [selectedStation, setSelectedStation] = useState(CONSOLE_STATIONS[0].id);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestDetails, setGuestDetails] = useState({
    name: "",
    phone: "",
    guestsCount: "1"
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    if (step === 1 && (!date || !time)) {
      alert("Please choose a date and time-slot first.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const getWhatsAppUrl = () => {
    let typeLabel = "PlayStation 5 Suite";
    if (bookingType === "pc") {
      typeLabel = "Esports PC Station";
    } else if (bookingType === "food-only") {
      typeLabel = "Food & Refreshments Dining";
    }

    const message = `Hello Chums Cafe! I'd like to reserve an experience.

*My Booking Details*:
- Name: ${guestDetails.name}
- Phone: ${guestDetails.phone}
- Experience Type: ${typeLabel}
- Selected Date: ${date}
- Preferred Slot: ${time}
- Guest Count: ${guestDetails.guestsCount}

Please contact me back to confirm slot availability. Thank you!`;

    return `https://wa.me/919167519763?text=${encodeURIComponent(message)}`;
  };

  const handleFinalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!guestDetails.name || !guestDetails.phone) {
      alert("Please fill in all contact fields.");
      return;
    }

    const waUrl = getWhatsAppUrl();

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3); // Success Screen
      
      // Open WhatsApp link immediately in a new tab
      try {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      } catch (err) {
        console.warn("Popup blocked, fallback redirect in same tab", err);
        window.location.href = waUrl;
      }
    }, 1200);
  };

  const resetAll = () => {
    setStep(1);
    setBookingType("ps5");
    setSelectedStation(CONSOLE_STATIONS[0].id);
    setDate("");
    setTime("");
    setGuestDetails({ name: "", phone: "", guestsCount: "1" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAll}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-md"
          ></motion.div>

          {/* Modal Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-charcoal-light border border-white/[0.08] text-champagne p-6 sm:p-9 shadow-2xl z-10 overflow-hidden"
          >
            {/* Header branding */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
              <div>
                <span className="text-[10px] tracking-[0.2em] font-sans font-light uppercase text-olive-light mb-0.5 block">
                  Concierge Reservation
                </span>
                <span className="font-serif text-lg tracking-wider text-champagne font-medium">
                  Chums Private Portal
                </span>
              </div>
              <button
                onClick={resetAll}
                className="p-1 rounded-full text-champagne/40 hover:text-champagne hover:bg-white/[0.05] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper Progress bar */}
            {step < 3 && (
              <div className="flex items-center space-x-3 mb-8">
                <div className="flex-1 h-1 bg-white/[0.04]">
                  <div className={`h-full bg-olive-light transition-all duration-300 ${step >= 1 ? "w-full" : "w-0"}`}></div>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-champagne/40">STEP {step} / 2</span>
                <div className="flex-1 h-1 bg-white/[0.04]">
                  <div className={`h-full bg-olive-light transition-all duration-300 ${step >= 2 ? "w-full" : "w-0"}`}></div>
                </div>
              </div>
            )}

            {/* Main Carousel Step Panels */}
            {step === 1 && (
              <div className="space-y-6 text-left">
                <h4 className="font-serif text-base text-champagne font-medium">
                  What experience would you like to request?
                </h4>

                {/* Experience Tabs Toggle */}
                <div className="grid grid-cols-3 gap-2">
                  {(["ps5", "pc", "food-only"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setBookingType(type)}
                      className={`py-3 px-1.5 border text-center text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-colors ${
                        bookingType === type
                          ? "bg-champagne text-charcoal border-champagne"
                          : "bg-transparent text-champagne/75 border-white/[0.06] hover:border-champagne/30"
                      }`}
                    >
                      {type === "ps5" ? "PS5 Suite" : type === "pc" ? "PC Station" : "Table Only"}
                    </button>
                  ))}
                </div>

                {/* Date & Time Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-wider text-champagne/50 mb-2 font-medium">
                      CHOOSE DATE
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-olive-light pointer-events-none" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        onClick={(e) => {
                          try {
                            e.currentTarget.showPicker();
                          } catch (err) {
                            console.warn("showPicker not supported", err);
                          }
                        }}
                        onFocus={(e) => {
                          try {
                            e.currentTarget.showPicker();
                          } catch (err) {
                            console.warn("showPicker not supported", err);
                          }
                        }}
                        min={new Date().toISOString().split("T")[0]}
                        className="[color-scheme:dark] w-full bg-charcoal border border-white/[0.08] focus:border-champagne/30 py-3.5 pl-10 pr-4 text-xs text-champagne focus:outline-none transition-colors cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-wider text-champagne/50 mb-2 font-medium">
                      CHOOSE TIME SLOT
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-olive-light pointer-events-none" />
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-charcoal border border-white/[0.08] focus:border-champagne/30 py-3.5 pl-10 pr-4 text-xs text-champagne focus:outline-none transition-colors"
                      >
                        <option value="">Select slot</option>
                        <option value="12:00 PM">12:00 PM (Noon)</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                        <option value="08:00 PM">08:00 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Booking Helper Note */}
                <div className="p-4 bg-white/[0.01] border border-white/[0.04]">
                  <div className="flex items-start space-x-2.5">
                    <Gamepad className="w-4 h-4 text-olive-light shrink-0 mt-0.5" />
                    <div className="text-[11px] text-champagne/60 leading-relaxed font-light">
                      <span><strong>Notice:</strong> Your chosen slot holds your spot for 15 minutes. High-demand games come pre-loaded on fast internal storage. Refreshment catering orders can be placed directly upon arrival.</span>
                    </div>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="pt-4 border-t border-white/[0.05]">
                  <button
                    onClick={handleNextStep}
                    disabled={!date || !time}
                    className="w-full py-4 bg-champagne text-charcoal text-xs font-semibold tracking-widest uppercase hover:bg-champagne-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    CONTINUE TO DETAILS
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleFinalSubmit} className="space-y-5 text-left">
                <h4 className="font-serif text-base text-champagne font-medium">
                  We require your basic contact details:
                </h4>

                {/* Guest Details Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] tracking-wider text-champagne/50 mb-1.5 font-medium">
                      YOUR FULL NAME
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-olive-light pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="Alex Dsouza"
                        value={guestDetails.name}
                        onChange={(e) => setGuestDetails({ ...guestDetails, name: e.target.value })}
                        className="w-full bg-charcoal border border-white/[0.08] focus:border-champagne/30 py-3.5 pl-10 pr-4 text-xs text-champagne focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-wider text-champagne/50 mb-1.5 font-medium">
                        PHONE NUMBER (FOR CONFIRMATION)
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-olive-light pointer-events-none" />
                        <input
                          type="tel"
                          required
                          placeholder="E.g., 09167519763"
                          value={guestDetails.phone}
                          onChange={(e) => setGuestDetails({ ...guestDetails, phone: e.target.value })}
                          className="w-full bg-charcoal border border-white/[0.08] focus:border-champagne/30 py-3.5 pl-10 pr-4 text-xs text-champagne focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-wider text-champagne/50 mb-1.5 font-medium">
                        NUMBER OF GUESTS
                      </label>
                      <select
                        value={guestDetails.guestsCount}
                        onChange={(e) => setGuestDetails({ ...guestDetails, guestsCount: e.target.value })}
                        className="w-full bg-charcoal border border-white/[0.08] focus:border-champagne/30 py-3.5 px-4 text-xs text-champagne focus:outline-none transition-colors"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="4">4 People Group</option>
                        <option value="6">6+ Host Party</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Footer Back & Submit */}
                <div className="flex gap-3 pt-4 border-t border-white/[0.05]">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="flex-1 py-4 border border-white/[0.08] hover:border-champagne/20 text-champagne text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-2 py-4 bg-champagne text-charcoal text-xs font-semibold tracking-widest uppercase hover:bg-champagne-dark transition-colors disabled:opacity-50"
                  >
                    {isLoading ? "PROVISIONING STATION..." : "CONFIRM EXPERIENCE"}
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-6"
              >
                <div className="p-4 bg-olive/25 text-champagne rounded-full mb-5">
                  <CheckCircle2 className="w-12 h-12 text-champagne-dark" />
                </div>
                <h4 className="font-serif text-xl text-champagne font-medium mb-3">
                  Reservation Logged
                </h4>
                <p className="text-xs text-champagne/60 font-sans font-light leading-relaxed mb-6 max-w-sm">
                  Congratulations <strong>{guestDetails.name}</strong>, your premium {bookingType.toUpperCase()} experience request for <strong>{date} at {time}</strong> has been logged! We have opened WhatsApp to send your pre-formatted reservation details to the Chums Cafe concierge team. If the app did not open, please click the button below to initiate contact.
                </p>

                {/* Mini details summary block */}
                <div className="w-full bg-charcoal border border-white/[0.04] p-4 text-left grid grid-cols-2 gap-4 text-xs mb-8">
                  <div>
                    <span className="text-champagne/40 block text-[9px] uppercase font-sans">Contact Phone</span>
                    <a href={`tel:${guestDetails.phone}`} className="text-champagne hover:underline font-mono">
                      {guestDetails.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-champagne/40 block text-[9px] uppercase font-sans">Locality</span>
                    <span className="text-champagne">Andheri East, Mumbai</span>
                  </div>
                  <div>
                    <span className="text-champagne/40 block text-[9px] uppercase font-sans">Cafe Location link</span>
                    <a href={BUSINESS_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-olive-light hover:underline font-light text-[11px] block truncate">
                      Google Maps GPS
                    </a>
                  </div>
                  <div>
                    <span className="text-champagne/40 block text-[9px] uppercase font-sans">Lounge phone</span>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-champagne hover:underline">
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row w-full gap-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs tracking-wider font-semibold uppercase transition-colors"
                  >
                    Send WhatsApp
                  </a>
                  <button
                    onClick={resetAll}
                    className="flex-1 py-3.5 bg-champagne text-charcoal text-xs font-semibold tracking-wider uppercase hover:bg-champagne-dark transition-colors"
                  >
                    CLOSE PORTAL
                  </button>
                </div>
              </motion.div>
            )}

            {/* Micro branded tagline */}
            <div className="mt-6 flex justify-center items-center gap-1.5 text-[9px] text-champagne/20 uppercase tracking-widest font-sans">
              <Star className="w-2.5 h-2.5" />
              <span>Chums Cafe, Andheri East</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
