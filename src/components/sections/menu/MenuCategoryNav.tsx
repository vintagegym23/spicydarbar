import React, { useEffect, useRef } from 'react';
import { menuData } from '../../../data/menuData';

const categoryItems = Object.keys(menuData);

const toCategoryId = (label: string) =>
  label
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

interface MenuCategoryNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const MenuCategoryNav: React.FC<MenuCategoryNavProps> = ({ activeCategory, onCategoryChange }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Determine which items are fully visible in the viewport
  const getVisibleRange = (): { first: number; last: number } => {
    const container = scrollContainerRef.current;
    if (!container) return { first: 0, last: 0 };

    const containerRect = container.getBoundingClientRect();
    let first = -1;
    let last = -1;

    buttonRefs.current.forEach((button, index) => {
      if (!button) return;
      const buttonRect = button.getBoundingClientRect();
      // Item is "fully visible" if both edges are inside the container
      const fullyVisible =
        buttonRect.left >= containerRect.left - 1 &&
        buttonRect.right <= containerRect.right + 1;

      if (fullyVisible) {
        if (first === -1) first = index;
        last = index;
      }
    });

    return { first, last };
  };

  const scrollToShowNextSet = (clickedIndex: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { first, last } = getVisibleRange();
    if (first === -1 || last === -1) return;

    const clickedButton = buttonRefs.current[clickedIndex];
    if (!clickedButton) return;

    const isRightEdgeClick = (clickedIndex === last && clickedIndex < categoryItems.length - 1) || (clickedIndex > last);
    const isLeftEdgeClick = (clickedIndex === first && clickedIndex > 0) || (clickedIndex < first);

    if (isRightEdgeClick) {
      const btnRect = clickedButton.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const delta = btnRect.left - containerRect.left - 16;
      container.scrollBy({ left: delta, behavior: 'smooth' });
    } else if (isLeftEdgeClick) {
      const btnRect = clickedButton.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const delta = btnRect.right - containerRect.right + 16;
      container.scrollBy({ left: delta, behavior: 'smooth' });
    }
  };

  // On mount, ensure scroll position is at the start
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    if (container.scrollWidth > container.clientWidth) {
      container.scrollLeft = 0;
    }
  }, []);

  const handleClick = (label: string, index: number) => {
    onCategoryChange(label);
    scrollToShowNextSet(index);
    const targetId = toCategoryId(label);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="sticky top-24 z-30 bg-bg-base/95 border-b border-gold-muted/10 py-3">
      <div
        ref={scrollContainerRef}
        className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div className="flex items-center min-w-max gap-6">
          {categoryItems.map((label, index) => (
            <button
              key={label}
              type="button"
              ref={(node) => {
                buttonRefs.current[index] = node;
              }}
              onClick={() => handleClick(label, index)}
              className={`font-sans text-[11px] font-semibold tracking-widest uppercase transition-colors whitespace-nowrap cursor-pointer px-4 py-2 rounded-full border ${
                activeCategory === label
                  ? label.startsWith('Our')
                    ? 'text-white border-[#FE9A00] bg-[#FE9A00]'
                    : 'text-gold border-gold/40 bg-gold/10'
                  : 'text-muted border-transparent hover:text-gold'
              }`}
            >
              {label.startsWith('Our') && (
                <span className="mr-2 inline-block text-white">⭐</span>
              )}
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
