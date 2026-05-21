/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SocialProof from "./components/SocialProof";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="bg-charcoal text-champagne font-sans min-h-screen selection:bg-champagne selection:text-charcoal antialiased">
      {/* Absolute Noise pattern overlay for textured luxury feeling */}
      <div className="fixed inset-0 bg-noise opacity-[0.015] pointer-events-none z-50"></div>

      {/* Primary Header Navbar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Structural Layout blocks */}
      <main>
        {/* Cinematic Hero Segment */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3-Column Services Grid (Gaming Console suites, PC rigs, Cafe highlights) */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Social Proof Review Slats */}
        <SocialProof />

        {/* Location maps & Contact blocks */}
        <Contact />
      </main>

      {/* Upper footer anchors */}
      <Footer />

      {/* Interactive Reservation Portal container */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}

