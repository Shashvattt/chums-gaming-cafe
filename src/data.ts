/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Review, ServiceItem, MenuItem, ConsoleStation } from "./types";

export const BUSINESS_INFO = {
  name: "Chums Cafe",
  tagline: "The Art of Leisure",
  headline: "Where ultra-fine gaming meets culinary artistry.",
  subHeadline: "Mumbai’s premier gaming lounge designed for discerning minds. Escape the chaos and play on state-of-the-art PS5 and tuned PC rigs in an environment of refined, quiet luxury, paired with exceptional custom-crafted food.",
  phone: "09167519763",
  phoneFormatted: "+91 91675 19763",
  address: "Shop No. 18, Chums Cafe, Premavati Anand Chawl, Military Rd, near 7 Hills Hospital, Sankasth Pada Welfare Society, Marol, Andheri East, Mumbai, Maharashtra 400059",
  mapUrl: "https://maps.google.com/maps?q=Chums%20Cafe,%20Shop%20No.%2018,%20Premavati%20Anand%20Chawl,%20Military%20Rd,%20Military%20Road,%20Marol,%20Andheri%20East,%20Mumbai,%20Maharashtra%20400059&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsLink: "https://maps.app.goo.gl/mBJiYvbmZKTXPSrx5"
};

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Alex Dsouza",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop",
    rating: { food: 5, service: 5, atmosphere: 5 },
    timeAgo: "6 months ago",
    favoriteItem: "Signature Crispy Chicken Wings",
    text: "Best place to remove stress by playing ps5 with good folks can make friends easily,,, food is good must try their chicken wings is my most favourite ❤️ best place good people good vibe"
  },
  {
    id: "rev-2",
    name: "Abhishek S",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&fit=crop",
    rating: { food: 4, service: 4, atmosphere: 4 },
    timeAgo: "1 year ago",
    favoriteItem: "Handmade Steamed Momos & Chicken Wrap",
    text: "Ordered a plate of momos and chicken wrap. Taste was satisfactory. Service is good. Ambience is decent. Can visit with family and friends. Prices are reasonable."
  },
  {
    id: "rev-3",
    name: "Irfan Shaikh",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&fit=crop",
    rating: { food: 5, service: 5, atmosphere: 5 },
    timeAgo: "3 years ago",
    favoriteItem: "Bespoke Feast Experience",
    text: "This place is absolute divine. Lovely food with nice portions and friendly staff. :-) The price for quality and quantity far exceeds expectations. Order now and enjoy. Highly recommended."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "srv-ps5",
    title: "PS5 Private Suites",
    description: "Immerse yourself in cinematic gaming experiences with our private PlayStation 5 suites. Outfitted with bespoke ergonomic loungers, 4K HDR displays, and studio-grade acoustics designed for peak sensory comfort.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1000&auto=format&fit=crop",
    specs: ["Single & Dual Loungers", "DualSense Edge Controllers", "Dolby Atmos Spatial Audio", "Curated Premium Library"]
  },
  {
    id: "srv-pc",
    title: "Esports PC Ateliér",
    description: "Every rig is absolute craftsmanship in performance. Masterfully assembled high-refresh monster desktop PCs featuring precision mechanical peripherals, 360Hz response panels, and premium noise-canceling headsets.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    specs: ["RTX 40-Series GPUs", "360Hz IPS Esports Monitors", "Ergo-Grip Pro Gaming Chairs", "High-Speed Fiber Connectivity"]
  },
  {
    id: "srv-food",
    title: "The Culinary Sanctuary",
    description: "We rewrite the script on 'cafe food'. Elevating classic bites into gourmet encounters. From slow-glazed savory chicken wings to delicately steamed organic momos and perfectly toasted artisanal chicken wraps.",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1000&auto=format&fit=crop",
    specs: ["Chicken Wings", "Hand-Rolled Dumplings & Momos", "Signature Toasted Chicken Wraps", "Chilled Premium Drip Coffee"]
  }
];

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    id: "m-1",
    name: "Chicken Wings",
    category: "small-plates",
    description: "Chef's special slow-glazed honey garlic & chili wings, toasted with organic sesame. Crispy with high juiciness.",
    price: "₹249",
    rating: 5,
    highlight: true
  },
  {
    id: "m-2",
    name: "Artisanal Steamed Momos",
    category: "small-plates",
    description: "Handmade chive and roasted chicken dumplings, served with standard spicy szechuan sauce.",
    price: "₹189",
    rating: 4,
    highlight: true
  },
  {
    id: "m-3",
    name: "Signature Toasted Chicken Wrap",
    category: "mains",
    description: "Flaky tortilla rolled with charred tandoori chicken chunks, premium greens, and truffle oil emulsion.",
    price: "₹219",
    rating: 5,
    highlight: true
  },
  {
    id: "m-4",
    name: "Matcha-Infused Affogato",
    category: "beverages",
    description: "Organic stoneground matcha poured beautifully over clean double bean vanilla gelato.",
    price: "₹149"
  }
];

export const CONSOLE_STATIONS: ConsoleStation[] = [
  {
    id: "station-1",
    name: "PS5 Ultra Lounge Duo",
    hardware: "PlayStation 5 Pro + 55\" OLED 4K Display",
    games: ["FIFA / EA Sports FC 24", "Tekken 8", "Spider-Man 2", "Grand Theft Auto V"]
  },
  {
    id: "station-2",
    name: "PC Pro Guild Station",
    hardware: "Tuned RTX 4080 Supreme Liquid Cooling Rig",
    games: ["Counter-Strike 2", "Valorant", "Dota 2", "Call of Duty: Warzone"]
  }
];
