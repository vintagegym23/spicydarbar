import React from 'react';
import { Hero } from '../components/sections/home/Hero';

import { StatsBand } from '../components/sections/home/StatsBand';
import { SignatureDishes } from '../components/sections/home/SignatureDishes';
import { DeliveryPartners } from '../components/sections/home/DeliveryPartners';


const Home: React.FC = () => {
  return (
    <main>
      
      <Hero />
      <StatsBand />
      <SignatureDishes />
      <DeliveryPartners />
    </main>
  );
};

export default Home;
