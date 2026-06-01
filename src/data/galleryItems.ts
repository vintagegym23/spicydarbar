import { GalleryItem } from '../types';
import galaryImg1 from '../Images/galary_img1..jpg';
import galaryImg3 from '../Images/galary_img3..jpg';
import galaryImg6 from '../Images/galary_img6..jpg';

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: galaryImg1,
    alt: 'Spice Darbar Cuisine - Dish',
    category: 'cuisine',
    tall: true
  },
  {
    id: '3',
    src: galaryImg3,
    alt: 'Spice Darbar Interior - Restaurant Design',
    category: 'interior',
    tall: true
  },
  {
    id: '6',
    src: galaryImg6,
    alt: 'Spice Darbar Cuisine - Authentic Dish',
    category: 'cuisine'
  }
];
