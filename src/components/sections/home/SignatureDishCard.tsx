import React from 'react';
import { Dish } from '../../../types';
import { Badge } from '../../ui/Badge';

interface SignatureDishCardProps {
  dish: Dish;
  tagline: string;
}

export const SignatureDishCard: React.FC<SignatureDishCardProps> = ({ dish, tagline }) => {
  return (
    <div className="bg-bg-card border border-muted/20 rounded-xl overflow-hidden group hover:border-gold/30 transition-all flex flex-col h-full cursor-pointer">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {dish.badge && (
          <div className="absolute top-3 right-3 z-10">
            <Badge type={dish.badge} label={dish.badgeLabel || ''} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent opacity-60"></div>
      </div>
      <div className="p-6 flex flex-col flex-1 relative z-10 mt-2">
        <p className="text-gold text-xs font-bold tracking-widest uppercase mb-1 drop-shadow-md">{tagline}</p>
        <h3 className="font-serif text-xl font-bold text-cream group-hover:text-gold transition-colors mb-3 drop-shadow-sm">{dish.name}</h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-3">
          {dish.description}
        </p>
      </div>
    </div>
  );
};
