import { Dish } from '../types';

export const dishes: Dish[] = [
  {
    id: '1',
    name: 'Dum Biryani',
    price: '₹845',
    description: 'Fragrant basmati rice slow-cooked with tender meat, aromatic spices, and sealed to perfection for an authentic royal taste.',
    category: 'main-course',
    badge: 'star',
    badgeLabel: 'Signature',
    tags: ['Rice', 'Spices'],
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800'
  },
  {
    id: '2',
    name: 'Masala Dosa',
    price: '₹395',
    description: 'Golden, crispy dosa filled with spiced potato masala, served with chutneys and sambar for a classic South Indian delight.',
    category: 'south-indian',
    badge: 'veg',
    badgeLabel: 'Veg',
    tags: ['Veg', 'South Indian'],
    image: 'https://images.unsplash.com/photo-1751560455942-f859f1215826?q=80&w=766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    name: 'Chaat',
    price: '₹295',
    description: "A burst of tangy, spicy, and sweet flavors with crunchy textures—India's favorite street-style snack reimagined.",
    category: 'starters',
    badge: 'spicy',
    badgeLabel: 'Spicy',
    tags: ['Street Food', 'Veg'],
    image: 'https://media.istockphoto.com/id/2178573933/photo/aloo-papdi-chaat.jpg?s=612x612&w=0&k=20&c=83nka_Rs1OYCxNcjl1LbnH15I39VtofkYMC5lUNtspA='
  }
];
