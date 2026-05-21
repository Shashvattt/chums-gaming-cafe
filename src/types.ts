/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: {
    food: number;
    service: number;
    atmosphere: number;
  };
  timeAgo: string;
  text: string;
  favoriteItem?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  specs: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: "mains" | "small-plates" | "beverages";
  description: string;
  price: string;
  rating?: number;
  highlight?: boolean;
}

export interface ConsoleStation {
  id: string;
  name: string;
  hardware: string;
  games: string[];
}
