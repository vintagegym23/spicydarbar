import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  category: string;
  diet: string;
  price: number;
  quantity: number;
}

interface AddToCartPanelProps {
  selectedItems: Map<string, CartItem>;
  onRemoveItem: (itemId: string) => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onProceed: () => void;
}

const VegIndicator: React.FC<{ diet: string }> = ({ diet }) => {
  const isVeg = diet === 'veg';
  return (
    <div className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center ${
      isVeg 
        ? 'border-green-500 bg-green-500/10' 
        : 'border-red-500 bg-red-500/10'
    }`}>
      <div className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
    </div>
  );
};

export const AddToCartPanel: React.FC<AddToCartPanelProps> = ({
  selectedItems,
  onRemoveItem,
  onUpdateQuantity,
  onProceed,
}) => {
  const cartArray = useMemo(() => Array.from(selectedItems.values()), [selectedItems]);

  const totalItems = useMemo(
    () => cartArray.reduce((sum, item) => sum + item.quantity, 0),
    [cartArray]
  );

  const totalPrice = useMemo(
    () => cartArray.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartArray]
  );

  return (
    <div className="sticky top-40 space-y-4">
      {/* Header */}
      <div className="bg-linear-to-r from-gold/20 to-gold/10 border-2 border-gold rounded-lg p-6">
        <div className="flex items-center gap-3">
          <ShoppingCart size={24} className="text-gold" />
          <div>
            <p className="font-sans text-xs text-gold-muted uppercase tracking-widest font-bold">
              Add To Cart
            </p>
            <p className="font-serif text-2xl text-gold font-bold">
              {selectedItems.size} {selectedItems.size === 1 ? 'Item' : 'Items'}
            </p>
          </div>
        </div>
      </div>

      {/* Cart Items Container */}
      <div className="bg-bg-card border border-gold/20 rounded-lg overflow-hidden max-h-96 flex flex-col">
        {selectedItems.size === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 text-center flex-1 flex items-center justify-center"
          >
            <p className="text-gold-muted font-sans text-sm">
              Select items to add to your cart
            </p>
          </motion.div>
        ) : (
          <div className="overflow-y-auto flex-1">
            <AnimatePresence mode="popLayout">
              {cartArray.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="border-b border-gold/10 last:border-b-0 p-4 hover:bg-gold/5 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <VegIndicator diet={item.diet} />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-sans font-semibold text-cream text-sm truncate">
                          {item.name}
                        </h4>
                        <p className="text-gold-muted font-sans text-xs mt-1">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="shrink-0 p-1 hover:bg-red-500/20 rounded transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={16} className="text-red-400" />
                    </button>
                  </div>

                  {/* Price and Quantity Controls */}
                  <div className="flex items-center justify-between">
                    <div className="font-serif text-gold font-bold">
                      £{(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-lg p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-1 hover:bg-gold/20 rounded transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} className="text-gold" />
                      </button>
                      <span className="font-sans font-semibold text-cream w-6 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gold/20 rounded transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} className="text-gold" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Summary Footer */}
        {selectedItems.size > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-t border-gold/20 bg-bg-base p-4 space-y-3"
          >
            <div className="flex justify-between items-center font-sans text-sm">
              <span className="text-gold-muted">Subtotal ({totalItems} items):</span>
              <span className="font-semibold text-gold font-serif text-lg">
                £{totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={onProceed}
              className="w-full px-4 py-3 bg-gold text-btn-dark font-sans text-sm font-bold uppercase rounded-lg hover:bg-yellow-400 transition-all cursor-pointer shadow-lg hover:shadow-xl"
            >
              Add to Order
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
