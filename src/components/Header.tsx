/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Gamepad2, Menu, X } from "lucide-react";
import { BUSINESS_INFO } from "../data";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Suites & Stations", href: "#suites" },
    { label: "Guest Testimonials", href: "#testimonials" },
    { label: "Lounge & Location", href: "#contact" }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-colors duration-500 ${
          isScrolled
            ? "bg-charcoal/90 backdrop-blur-xl border-b border-white/[0.06] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="p-2.5 rounded-full border border-champagne/10 bg-white/[0.02] group-hover:bg-champagne group-hover:border-champagne transition-all duration-500">
              <Gamepad2 className="w-5 h-5 text-champagne group-hover:text-charcoal transition-colors duration-500" />
            </div>
            <div>
              <span className="font-serif text-lg tracking-wider font-semibold text-champagne block leading-none">
                CHUMS CAFE
              </span>
              <span className="text-[10px] tracking-[0.25em] font-sans font-light uppercase text-olive-light mt-1 block">
                Mumbai Gaming Lounge
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs tracking-[0.15em] font-sans font-light text-champagne/80 hover:text-champagne uppercase transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="header_call_btn"
              className="flex items-center text-xs tracking-wider text-champagne/80 hover:text-champagne transition-colors py-2 px-3 rounded border border-white/[0.08] hover:border-champagne/30 bg-white/[0.02]"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-olive-light" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <button
              id="header_booking_btn"
              onClick={onOpenBooking}
              className="relative px-5 py-2.5 bg-champagne text-charcoal text-xs font-semibold tracking-widest uppercase overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,246,240,0.15)]"
            >
              <span className="relative z-10">Book an Experience</span>
              <div className="absolute inset-0 bg-olive translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              <span className="absolute inset-0 bg-olive top-0 left-0 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 -z-10 bg-opacity-10"></span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="header_mobile_call_icon"
              className="p-2 rounded-full border border-white/[0.08] text-champagne/80"
              title="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="header_menu_toggle_btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-champagne"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-charcoal/98 backdrop-blur-2xl md:hidden pt-28 px-6 pb-12 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-6">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl tracking-wide text-champagne hover:text-olive-light transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="space-y-6 pt-8 border-t border-white/[0.06]">
              <div className="flex items-center space-x-3 text-sm text-champagne/70">
                <MapPin className="w-4 h-4 text-olive-light shrink-0" />
                <span className="font-sans font-light line-clamp-2">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  id="mobile_call_primary_btn"
                  className="flex-1 text-center py-3.5 border border-champagne/30 text-champagne text-xs font-semibold tracking-wider uppercase rounded hover:bg-white/[0.03]"
                >
                  Call: {BUSINESS_INFO.phoneFormatted}
                </a>
                <button
                  id="mobile_book_primary_btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex-1 py-3.5 bg-champagne text-charcoal text-xs font-semibold tracking-wider uppercase rounded hover:bg-champagne-dark"
                >
                  Book an Experience
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
