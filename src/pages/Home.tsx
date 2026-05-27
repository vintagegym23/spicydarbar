import React from 'react';
import { Hero } from '../components/sections/home/Hero';
import { EidMenuBanner } from '../components/sections/home/EidMenuBanner';
import { StatsBand } from '../components/sections/home/StatsBand';
import { SignatureDishes } from '../components/sections/home/SignatureDishes';
import { DeliveryPartners } from '../components/sections/home/DeliveryPartners';


const Home: React.FC = () => {
  return (
    <main>
      <EidMenuBanner />
      <Hero />
      <StatsBand />
      <SignatureDishes />
      <DeliveryPartners />
    </main>
  );
};

export default Home;
