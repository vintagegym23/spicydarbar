import React from 'react';
import { Hero } from '../components/sections/home/Hero';
import { StatsBand } from '../components/sections/home/StatsBand';
import { SignatureDishes } from '../components/sections/home/SignatureDishes';
import { DeliveryPartners } from '../components/sections/home/DeliveryPartners';
import grandOpeningImg from '../Images/Grand-opening.jpeg';

const Home: React.FC = () => {
  return (
    <main>
      {/* Grand Opening Banner */}
      <section className="w-full pt-24 bg-[#0a0a0a] flex justify-center items-center border-b border-gold/10">
        <div className="w-full max-w-[1920px] mx-auto flex justify-center">
          <img 
            src={grandOpeningImg} 
            alt="Spice Darbar Grand Opening" 
            className="w-full h-auto max-h-[70vh] object-cover md:max-h-none block"
            loading="eager"
          />
        </div>
      </section>
      
      <Hero />
      <StatsBand />
      <SignatureDishes />
      <DeliveryPartners />
    </main>
  );
};

export default Home;
