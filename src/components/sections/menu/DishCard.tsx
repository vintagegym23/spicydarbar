import React from 'react';
import { Dish } from '../../../types';
import { Badge } from '../../ui/Badge';

export const DishCard: React.FC<{ dish: Dish }> = ({ dish }) => {
  return (
    <div className="bg-bg-card border border-muted/20 rounded-xl overflow-hidden group hover:border-gold/30 transition-all flex h-40 cursor-pointer">
      <div className="relative w-40 h-40 flex-shrink-0 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-5 flex flex-col justify-center flex-1">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="font-serif text-lg font-bold text-cream group-hover:text-gold transition-colors">{dish.name}</h3>
          <span className="text-gold font-sans font-semibold text-sm ml-2">{dish.price}</span>
        </div>
        <p className="text-muted text-xs leading-relaxed line-clamp-2 mb-3">
          {dish.description}
        </p>
        {dish.badge && (
          <div className="flex items-center gap-2">
            <Badge type={dish.badge} label={dish.badgeLabel || ''} />
          </div>
        )}
      </div>
    </div>
  );
};
