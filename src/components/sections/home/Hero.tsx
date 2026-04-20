import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Eyebrow } from '../../ui/Eyebrow';
import { Button } from '../../ui/Button';
import { TypewriterText } from '../../ui/TypewriterText';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    document.getElementById('delivery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] md:h-[500px] flex items-center overflow-hidden bg-bg-base">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=1920"
          alt="Royal Dining"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-base via-bg-base/80 to-transparent" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1.8fr_1fr] items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center md:text-left pt-28 md:pt-20 mx-auto md:mx-0"
          >
            <Eyebrow className="mb-4 text-gold-muted font-bold">Authentic Indian Restaurant</Eyebrow>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-4">
              A Legacy of <span className="italic text-gold">Mughlai <br /> Excellence</span>
            </h1>

            <div className="h-8 md:h-10 mb-8 flex items-center justify-center md:justify-start">
              <TypewriterText
                phrases={[
                  "Experience Authentic Flavors",
                  "A Royal Dining Experience",
                  "Spice Darbar Specials",
                  "An Unforgettable Taste"
                ]}
                typingSpeed={60}
                deletingSpeed={30}
                delayBeforeDelete={1500}
                className="text-lg md:text-xl text-gold-muted font-sans tracking-wide"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button variant="primary" onClick={handleOrderClick} className="w-full sm:w-auto px-8 py-3 text-sm">
                Book a Table
              </Button>
              <Button variant="outline" onClick={() => navigate('/menu')} className="w-full sm:w-auto px-8 py-3 text-sm">
                View Menu
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
