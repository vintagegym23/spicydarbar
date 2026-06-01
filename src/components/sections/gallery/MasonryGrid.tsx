import React from 'react';
import { GalleryItem } from '../../../types';
import { motion, AnimatePresence } from 'motion/react';

export const MasonryGrid: React.FC<{ items: GalleryItem[] }> = ({ items }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="mb-4 break-inside-avoid"
            >
              <div className="relative group overflow-hidden rounded-lg border border-gold-muted/10 cursor-pointer">
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    item.tall ? 'aspect-[3/4]' : 'aspect-square'
                  }`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-cream font-sans text-xs font-bold tracking-widest uppercase border border-cream/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
