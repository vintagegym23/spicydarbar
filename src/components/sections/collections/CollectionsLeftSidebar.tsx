import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

interface CollectionsLeftSidebarProps {
  categories: string[];
  activeCategory: string;
  onCategorySelect: (category: string) => void;
  onCartIconClick?: () => void;
  cartItemsCount?: number;
}

export const CollectionsLeftSidebar: React.FC<CollectionsLeftSidebarProps> = ({
  categories,
  activeCategory,
  onCategorySelect,
  onCartIconClick,
  cartItemsCount = 0,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll to active category when it changes
  useEffect(() => {
    if (activeButtonRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const button = activeButtonRef.current;
      
      // Scroll the active button into view with padding
      const scrollLeft = button.offsetLeft - container.offsetWidth / 2 + button.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeCategory]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Desktop Layout - Vertical */}
      <div className="sticky top-40 hidden md:block">
        <div className="bg-bg-card border border-gold-muted/20 rounded-lg p-6 space-y-2">
          <div className="flex items-center gap-2 mb-6">
            <ShoppingCart size={20} className="text-gold" />
            <h3 className="font-serif text-xl text-cream">Categories</h3>
          </div>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategorySelect(category)}
              whileHover={{ x: 4 }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-sans text-sm font-semibold tracking-wide cursor-pointer ${
                activeCategory === category
                  ? 'bg-gold text-btn-dark'
                  : 'text-gold hover:bg-gold/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mobile Layout - Horizontal Scrollable */}
      <div className="md:hidden mb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-serif text-sm text-cream">Categories</h3>
          <button
            onClick={onCartIconClick}
            className="relative p-1 hover:bg-gold/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Open cart"
          >
            <ShoppingCart size={32} className="text-gold" />
            {cartItemsCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -left-1 bg-gold text-btn-dark rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
              >
                {cartItemsCount}
              </motion.div>
            )}
          </button>
        </div>
        
        {/* Navigation Strip - Clean and minimal */}
        <div className="relative flex items-center gap-2 group">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="shrink-0 p-1 rounded-lg hover:bg-gold/10 transition-colors z-10 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} className="text-gold" />
          </button>

          {/* Scroll Container Wrapper with Gradient Overlay */}
          <div className="relative flex-1 overflow-hidden">
            {/* Categories Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory',
              }}
            >
              {categories.map((category) => (
                <motion.button
                  ref={activeCategory === category ? activeButtonRef : null}
                  key={category}
                  onClick={() => onCategorySelect(category)}
                  whileTap={{ scale: 0.95 }}
                  className={`shrink-0 px-4 py-2 rounded-full transition-all duration-300 font-sans text-xs font-semibold whitespace-nowrap cursor-pointer ${
                    activeCategory === category
                      ? 'bg-gold text-btn-dark shadow-lg'
                      : 'bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20'
                  }`}
                  style={{ scrollSnapAlign: 'center' }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Left Gradient Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-bg-base to-transparent pointer-events-none z-5" />

            {/* Right Gradient Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-bg-base to-transparent pointer-events-none z-5" />
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="shrink-0 p-1 rounded-lg hover:bg-gold/10 transition-colors z-10 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} className="text-gold" />
          </button>
        </div>
      </div>

      {/* CSS to hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};
