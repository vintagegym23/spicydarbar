import React from 'react';
import { GalleryCategory } from '../../../types';

interface GalleryTabsProps {
  activeTab: GalleryCategory;
  onTabChange: (tab: GalleryCategory) => void;
}

export const GalleryTabs: React.FC<GalleryTabsProps> = ({ activeTab, onTabChange }) => {
  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: 'ALL MOMENTS' },
    { id: 'cuisine', label: 'CUISINE' },
    { id: 'interior', label: 'INTERIOR' },
    { id: 'exterior', label: 'EXTERIORS' }
  ];

  return (
    <div className="sticky top-16 z-30 bg-bg-base/95 backdrop-blur-sm border-y border-gold-muted/10 py-4 mb-12">
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
