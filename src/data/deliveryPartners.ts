import { DeliveryPartner } from '../types';
import delivervoo from "../Images/delivervoo.png";

export const deliveryPartners: DeliveryPartner[] = [
  {
    id: '1',
    name: 'Uber Eats',
    displayName: 'Uber Eats',
    description: 'Order your favourite Spicy Darbar dishes through Uber Eats and enjoy fast, reliable delivery tracked live to your door.',
    bgColor: '#06C167',
    icon: 'https://cdn.worldvectorlogo.com/logos/uber-eats-1.svg',
    url: '#'
  },
  {
    id: '2',
    name: 'Deliveroo',
    displayName: 'Deliveroo',
    description: 'Craving something bold? Deliveroo brings the royal flavours of Spicy Darbar straight to your table in record time.',
    bgColor: '#00CCBC',
    icon: delivervoo,
    url: '#'
  },
  {
    id: '3',
    name: 'Just Eat',
    displayName: 'Just Eat',
    description: 'Browse our full menu on Just Eat and get the rich, aromatic taste of Spicy Darbar delivered with ease.',
    bgColor: '#FF8000',
    icon: 'https://cdn.worldvectorlogo.com/logos/just-eat.svg',
    url: '#'
  }
];
