import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Eyebrow } from '../../ui/Eyebrow';
import ChilliChickenImage from '../../../Images/chilli chicken.jpeg';

export const MenuFeature: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Featured Experience */}
        <div className="relative h-[500px] rounded-xl overflow-hidden group">
          <img
            src={ChilliChickenImage}
            alt="Chef's Table"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <Eyebrow className="mb-4">EXCLUSIVE DINING</Eyebrow>
            <h2 className="font-serif text-4xl text-cream mb-4">The Chef's Table</h2>
            <p className="text-sand mb-8 max-w-md">
              A 12-course sensory journey through the lost recipes of the Mughal era, 
              curated by our Executive Chef.
            </p>
            <Button 
              variant="primary" 
              onClick={() => navigate('/contact?subject=Chef\'s Table')}
            >
              Reserve the Feast
            </Button>
          </div>
        </div>

        {/* Right: Enquiry Card */}
        <div className="bg-bg-card border border-gold-muted/20 rounded-xl p-12 flex flex-col items-center text-center justify-center">
          <div className="w-16 h-16 bg-bg-amber rounded-full flex items-center justify-center mb-8">
            <UtensilsCrossed className="text-gold w-8 h-8" />
          </div>
          <h3 className="font-serif text-3xl text-cream mb-4">Private Royal Banquets</h3>
          <p className="text-sand mb-10 max-w-xs">
            From intimate gatherings to grand celebrations, we bring the Darbar experience to your special moments.
          </p>
          <Button variant="inline" onClick={() => navigate('/contact')}>
            ENQUIRE NOW →
          </Button>
        </div>
      </div>
    </section>
  );
};
