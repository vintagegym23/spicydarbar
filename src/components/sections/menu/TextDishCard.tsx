import React from 'react';
import { NewDish } from '../../../types';
import { Flame } from 'lucide-react';

export const TextDishCard: React.FC<{ dish: NewDish }> = ({ dish }) => {
  const isVeg = dish.diet === 'veg' || dish.diet === 'veg-friendly';
  const isNonVeg = dish.diet === 'non-veg';

  return (
    <div className="bg-bg-card border border-muted/20 rounded-xl p-5 hover:border-gold/30 transition-all flex flex-col justify-between h-full cursor-pointer">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-serif text-lg font-bold text-cream flex items-center gap-2">
          {dish.name}
          {dish.isSpicy && (
            <Flame className="w-4 h-4 text-red-500 fill-red-500" title="Spicy" />
          )}
          {isVeg && (
            <div className="w-3.5 h-3.5 border-2 border-green-600 flex items-center justify-center rounded-sm" title="Vegetarian">
              <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
            </div>
          )}
          {isNonVeg && (
            <div className="w-3.5 h-3.5 border-2 border-red-600 flex items-center justify-center rounded-sm" title="Non-Vegetarian">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
            </div>
          )}
        </h3>
      </div>
      
      {dish.description && (
        <p className="text-sand/80 text-xs line-clamp-1 mb-4 leading-relaxed">
          {dish.description}
        </p>
      )}
      
      <div className="flex flex-col gap-1 mt-auto">
        {dish.options.map((opt, idx) => (
          <div key={idx} className="flex justify-between items-end border-t border-muted/10 pt-1 mt-1 first:border-0 first:pt-0 first:mt-0">
            <span className="text-muted text-sm">{opt.type || ''}</span>
            <span className="text-gold font-sans font-semibold text-sm">£{opt.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
