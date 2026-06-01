import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../../ui/SectionHeader';
import { TextDishCard } from '../menu/TextDishCard';
import { Check } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  options: Array<{ price?: number; type?: string }>;
  diet: string;
}

interface CollectionsContentProps {
  categoryName: string;
  items: MenuItem[];
  selectedItems: Set<string>;
  onItemToggle: (itemId: string) => void;
  onSelectAll: () => void;
  onClearSelection: () => void;
  selectedCount: number;
  totalSelectedCount: number;
}

export const CollectionsContent: React.FC<CollectionsContentProps> = ({
  categoryName,
  items,
  selectedItems,
  onItemToggle,
  onSelectAll,
  onClearSelection,
  selectedCount,
  totalSelectedCount,
}) => {
  return (
    <div>
      {/* Header with Category Title and Controls */}
      <div className="mb-8">
        <SectionHeader
          eyebrow="CATEGORY"
          title={categoryName}
          className="mb-6"
        />
        
        {/* Selection Controls and Counter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-bg-card border border-gold/20 rounded-lg p-4">
          <div className="flex flex-col gap-2">
            <span className="text-gold font-sans font-semibold text-lg">
              {selectedCount} {selectedCount === 1 ? 'Item' : 'Items'} in {categoryName}
            </span>
            {totalSelectedCount > selectedCount && (
              <span className="text-gold/70 font-sans text-sm">
                {totalSelectedCount} total items selected
              </span>
            )}
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={onSelectAll}
              disabled={selectedCount === items.length && items.length > 0}
              className="flex-1 sm:flex-none px-4 py-2 bg-gold/20 text-gold hover:bg-gold/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-sans font-semibold text-sm rounded-md border border-gold/40"
            >
              Select All
            </button>
            <button
              onClick={onClearSelection}
              disabled={totalSelectedCount === 0}
              className="flex-1 sm:flex-none px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-sans font-semibold text-sm rounded-md border border-red-500/40"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted text-lg font-sans">
            No items available in this category.
          </p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, idx) => {
              const itemId = `${categoryName}-${item.name}-${idx}`;
              const isSelected = selectedItems.has(itemId);

              return (
                <motion.div
                  key={itemId}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative cursor-pointer group"
                  onClick={() => onItemToggle(itemId)}
                >
                  {/* Selection Checkbox */}
                  <div className="absolute top-3 right-3 z-10">
                    <div
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-gold border-gold'
                          : 'border-gold/40 bg-transparent group-hover:border-gold/70'
                      }`}
                    >
                      {isSelected && <Check size={16} className="text-btn-dark font-bold" />}
                    </div>
                  </div>

                  {/* Selected Indicator Border */}
                  <div
                    className={`absolute inset-0 rounded-xl pointer-events-none transition-all ${
                      isSelected ? 'ring-2 ring-gold' : ''
                    }`}
                  />

                  {/* Dish Card */}
                  <div className={`${isSelected ? 'opacity-90' : ''}`}>
                    <TextDishCard dish={item} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};
