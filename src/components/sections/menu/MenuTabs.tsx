import React from 'react';
import { DietaryFilter } from '../../../types';

interface MenuTabsProps {
  activeTab: DietaryFilter;
  onTabChange: (tab: DietaryFilter) => void;
}

export const MenuTabs: React.FC<MenuTabsProps> = ({ activeTab, onTabChange }) => {
  const categories: { id: DietaryFilter; label: string }[] = [
    { id: 'All', label: 'ALL DISHES' },
    { id: 'Veg', label: 'VEGETARIAN' },
    { id: 'Non-Veg', label: 'NON-VEGETARIAN' },
  ];

  return (
    <div className="sticky top-36 z-20 bg-bg-base/95 backdrop-blur-sm border-y border-gold-muted/10 py-4 mb-12">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-center min-w-max gap-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onTabChange(cat.id)}
              className={`font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === cat.id ? 'text-gold border-b border-gold' : 'text-muted hover:text-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
