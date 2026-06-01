export interface Dish {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  badge: 'spicy' | 'veg' | 'star' | null;
  badgeLabel: string | null;
  tags: string[];
  image: string;
}

export interface DishOption {
  type?: string;
  price: number;
}

export interface NewDish {
  name: string;
  description?: string;
  options: DishOption[];
  diet?: 'veg' | 'non-veg' | 'veg-friendly';
  isSpicy?: boolean;
}

export type MenuData = Record<string, NewDish[]>;

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'all' | 'cuisine' | 'interior' | 'exterior';
  tall?: boolean;
}

export interface DeliveryPartner {
  id: string;
  name: string;
  displayName: string;
  description: string;
  bgColor: string;
  icon: string;
  url: string;
}

export interface Pillar {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export interface InfoCard {
  id: string;
  icon: string;
  title: string;
  details: string[];
  cta: string;
}

export type NavPage = 'home' | 'menu' | 'gallery' | 'about' | 'contact';
export type DietaryFilter = 'All' | 'Veg' | 'Non-Veg';
export type GalleryCategory = 'all' | 'cuisine' | 'interior' | 'exterior';
