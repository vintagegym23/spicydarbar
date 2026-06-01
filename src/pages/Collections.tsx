import React, { useState, useMemo } from 'react';
import { menuData } from '../data/menuData';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CollectionsLeftSidebar } from '../components/sections/collections/CollectionsLeftSidebar';
import { CollectionsContent } from '../components/sections/collections/CollectionsContent';
import { AddToCartPanel } from '../components/sections/collections/AddToCartPanel';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  category: string;
  diet: string;
  price: number;
  quantity: number;
}

const Collections: React.FC = () => {
  const categories = useMemo(() => Object.keys(menuData), []);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || '');
  const [selectedItems, setSelectedItems] = useState<Map<string, CartItem>>(new Map());
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleItemToggle = (itemId: string) => {
    const newSelected = new Map(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      // itemId format: "category-itemName-idx"
      const parts = itemId.split('-');
      if (parts.length >= 2) {
        // Find the item in menuData to get full details
        for (const cat of categories) {
          const items = menuData[cat] || [];
          items.forEach((item, idx) => {
            const expectedId = `${cat}-${item.name}-${idx}`;
            if (expectedId === itemId) {
              const price = item.options[0]?.price || 0;
              newSelected.set(itemId, {
                id: itemId,
                name: item.name,
                category: cat,
                diet: item.diet || 'veg',
                price,
                quantity: 1,
              });
            }
          });
        }
      }
    }
    setSelectedItems(newSelected);
  };

  const handleSelectAll = () => {
    const items = menuData[activeCategory] || [];
    const newSelected = new Map(selectedItems);
    items.forEach((item, idx) => {
      const itemId = `${activeCategory}-${item.name}-${idx}`;
      if (!newSelected.has(itemId)) {
        const price = item.options[0]?.price || 0;
        newSelected.set(itemId, {
          id: itemId,
          name: item.name,
          category: activeCategory,
          diet: item.diet || 'veg',
          price,
          quantity: 1,
        });
      }
    });
    setSelectedItems(newSelected);
  };

  const handleClearSelection = () => {
    setSelectedItems(new Map());
  };

  const handleRemoveFromCart = (itemId: string) => {
    const newSelected = new Map(selectedItems);
    newSelected.delete(itemId);
    setSelectedItems(newSelected);
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    const newSelected = new Map(selectedItems);
    const item = newSelected.get(itemId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      newSelected.set(itemId, item);
      setSelectedItems(newSelected);
    }
  };

  const handleProceed = () => {
    const phoneNumber = '447502023334';
    let message = 'Hi, I want these items:';
    Array.from(selectedItems.values()).forEach((item) => {
      message += `\n* ${item.name} (${item.category}) x${item.quantity}`;
    });
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const currentCategoryItems = menuData[activeCategory] || [];
  const currentCategorySelectedCount = Array.from(selectedItems.keys()).filter((id) =>
    id.startsWith(`${activeCategory}-`)
  ).length;

  return (
    <main className="bg-bg-base min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <SectionHeader
          eyebrow="CURATED COLLECTIONS"
          title="Our Collections"
          description="Explore our exclusive collections of dishes curated just for you."
          centered
        />
      </div>

      {/* Three-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <CollectionsLeftSidebar
              categories={categories}
              activeCategory={activeCategory}
              onCategorySelect={setActiveCategory}
              onCartIconClick={() => setIsCartModalOpen(true)}
              cartItemsCount={selectedItems.size}
            />
          </div>

          {/* Center Content */}
          <div className="md:col-span-2">
            <CollectionsContent
              categoryName={activeCategory}
              items={currentCategoryItems}
              selectedItems={new Set(selectedItems.keys())}
              onItemToggle={handleItemToggle}
              onSelectAll={handleSelectAll}
              onClearSelection={handleClearSelection}
              selectedCount={currentCategorySelectedCount}
              totalSelectedCount={selectedItems.size}
            />
          </div>

          {/* Right Sidebar - Add To Cart Panel (Desktop only) */}
          <div className="hidden md:block md:col-span-1">
            <AddToCartPanel
              selectedItems={selectedItems}
              onRemoveItem={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
              onProceed={handleProceed}
            />
          </div>
        </div>
      </div>

      {/* Mobile Cart Modal */}
      <AnimatePresence>
        {isCartModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartModalOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Modal Drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-bg-base rounded-t-2xl max-h-[90vh] overflow-y-auto md:hidden"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-bg-base border-b border-gold/20 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <h2 className="font-serif text-xl text-cream">Your Cart</h2>
                <button
                  onClick={() => setIsCartModalOpen(false)}
                  className="p-1 hover:bg-gold/10 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gold" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <AddToCartPanel
                  selectedItems={selectedItems}
                  onRemoveItem={handleRemoveFromCart}
                  onUpdateQuantity={handleUpdateQuantity}
                  onProceed={handleProceed}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Collections;
