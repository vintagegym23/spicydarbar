import React from 'react';
import { useNavigate } from 'react-router-dom';
import { dishes } from '../../../data/dishes';
import { SignatureDishCard } from './SignatureDishCard';
import { SectionHeader } from '../../ui/SectionHeader';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';

export const SignatureDishes: React.FC = () => {
  const navigate = useNavigate();
  const signatureDishes = dishes.slice(0, 3);

  const taglines = [
    "A Royal Favorite",
    "Chef's Masterpiece",
    "Heritage Recipe",
    "Crowd Pleaser"
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <SectionHeader
            eyebrow="CHEF'S SELECTION"
            title="Signature Masterpieces"
            className="max-w-2xl"
          />
          {/* <Button variant="inline" onClick={() => navigate('/menu')}>
            Explore Full Menu →
          </Button> */}
            <Button variant="inline" >
            Explore Full Menu →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-1 md:px-0">
          {signatureDishes.map((dish, index) => (
            <SignatureDishCard 
              key={dish.id} 
              dish={dish} 
              tagline={taglines[index % taglines.length]} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
