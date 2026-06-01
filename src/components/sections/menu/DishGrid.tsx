import React from 'react';
import { MenuData, DietaryFilter } from '../../../types';
import { TextDishCard } from './TextDishCard';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../../ui/SectionHeader';

interface DishGridProps {
  menuData: MenuData;
  activeFilter: DietaryFilter;
  activeCategory: string;
}

export const DishGrid: React.FC<DishGridProps> = ({ menuData, activeFilter, activeCategory }) => {
  const toCategoryId = (label: string) =>
    label
      .trim()
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  // Filter categories based on active category selection
  const categoriesToDisplay = activeCategory 
    ? Object.entries(menuData).filter(([name]) => name === activeCategory)
    : Object.entries(menuData);

  // Check if any dishes match the combined filters
  const hasMatchingDishes = categoriesToDisplay.some(([, dishes]: [string, any[]]) => 
    dishes.some((dish: any) => {
      if (activeFilter === 'All') return true;
      if (activeFilter === 'Veg') return dish.diet === 'veg' || dish.diet === 'veg-friendly';
      if (activeFilter === 'Non-Veg') return dish.diet === 'non-veg';
      return true;
    })
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
      {!hasMatchingDishes ? (
        <div className="text-center py-16">
          <p className="text-muted text-lg font-sans tracking-widest uppercase">
            No dishes available for the selected filters.
          </p>
        </div>
      ) : (
        <div className="space-y-16">
          {categoriesToDisplay.map(([categoryName, dishes]: [string, any[]]) => {
            const filteredDishes = dishes.filter((dish: any) => {
              if (activeFilter === 'All') return true;
              if (activeFilter === 'Veg') return dish.diet === 'veg' || dish.diet === 'veg-friendly';
              if (activeFilter === 'Non-Veg') return dish.diet === 'non-veg';
              return true;
            });

            if (filteredDishes.length === 0) return null;

            const categoryId = toCategoryId(categoryName);

            return (
              <div key={categoryName} id={categoryId} className="scroll-mt-40">
                <SectionHeader
                  eyebrow="CATEGORY"
                  title={categoryName}
                  className="mb-8"
                />
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredDishes.map((dish: any, idx: number) => (
                      <motion.div
                        key={`${categoryName}-${dish.name}-${idx}`}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <TextDishCard dish={dish} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
