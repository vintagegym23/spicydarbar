import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Zap, ShoppingCart } from 'lucide-react';

interface SelectedItemDetails {
  name: string;
  category: string;
}

interface CollectionsRightSidebarProps {
  selectedItemsCount: number;
  selectedItemsDetails: SelectedItemDetails[];
}

export const CollectionsRightSidebar: React.FC<CollectionsRightSidebarProps> = ({
  selectedItemsCount,
  selectedItemsDetails,
}) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const phoneNumber = '447502023334';
    
    let message = 'Hi, I want these items:';
    if (selectedItemsDetails.length > 0) {
      message += '\n' + selectedItemsDetails.map((item) => `* ${item.name}`).join('\n');
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const featuredItems = [
    {
      id: 1,
      title: 'Butter Chicken',
      badge: 'Popular',
      icon: Star,
      color: 'text-gold',
    },
    {
      id: 2,
      title: 'Paneer Butter Masala',
      badge: 'Best Seller',
      icon: Zap,
      color: 'text-amber-400',
    },
    {
      id: 3,
      title: 'Lamb Biryani',
      badge: 'Premium',
      icon: Star,
      color: 'text-gold',
    },
  ];

  const promos = [
    {
      id: 1,
      title: 'Welcome Offer',
      description: '20% OFF on first order',
      code: 'WELCOME20',
    },
    {
      id: 2,
      title: 'Free Dessert',
      description: 'On orders above £10',
      code: 'FREEDESSERT',
    },
  ];

  return (
    <div className="sticky top-40 space-y-8">
      {/* Selection Summary */}
      {selectedItemsCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-gold/20 to-gold/10 border-2 border-gold rounded-lg p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart size={24} className="text-gold" />
            <div>
              <p className="font-sans text-xs text-gold-muted uppercase tracking-widest font-bold">
                Your Selection
              </p>
              <p className="font-serif text-2xl text-gold font-bold">
                {selectedItemsCount} {selectedItemsCount === 1 ? 'Item' : 'Items'}
              </p>
              <p className="font-sans text-xs text-gold-muted mt-1">
                From multiple categories
              </p>
            </div>
          </div>
          <button 
            onClick={handleAddToCart}
            className="w-full px-4 py-2 bg-gold text-btn-dark font-sans text-sm font-bold uppercase rounded-lg hover:bg-yellow-400 transition-all cursor-pointer"
          >
            Add to Order
          </button>
        </motion.div>
      )}

      {/* Featured Items */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-bg-card border border-gold-muted/20 rounded-lg p-6"
      >
        <h3 className="font-serif text-lg text-cream mb-4">Featured Items</h3>
        <div className="space-y-3">
          {featuredItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                whileHover={{ x: 4 }}
                className="p-3 rounded-lg bg-gold/10 border border-gold/20 hover:border-gold/40 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <Icon size={18} className={`flex-shrink-0 mt-1 ${item.color}`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm font-semibold text-cream truncate">
                      {item.title}
                    </p>
                    <span className="text-[10px] text-gold-muted uppercase tracking-widest font-bold">
                      {item.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Promotions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30 rounded-lg p-6"
      >
        <h3 className="font-serif text-lg text-cream mb-4">Promotions</h3>
        <div className="space-y-3">
          {promos.map((promo) => (
            <motion.div
              key={promo.id}
              whileHover={{ scale: 1.02 }}
              className="p-3 rounded-lg bg-bg-card border border-gold/20 hover:border-gold/40 transition-all cursor-pointer"
            >
              <p className="font-serif text-gold text-sm font-semibold mb-1">
                {promo.title}
              </p>
              <p className="font-sans text-[11px] text-muted mb-2">
                {promo.description}
              </p>
              <div className="bg-bg-base px-2 py-1 rounded inline-block">
                <span className="font-mono text-[9px] text-gold font-bold">
                  {promo.code}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-bg-card border border-gold-muted/20 rounded-lg p-6"
      >
        <h3 className="font-serif text-lg text-cream mb-4">Quick Links</h3>
        <div className="space-y-2">
          <button 
            onClick={() => navigate('/menu')}
            className="w-full px-4 py-2 bg-gold text-btn-dark font-sans text-xs font-bold uppercase rounded-lg hover:bg-yellow-400 transition-all cursor-pointer"
          >
            View Menu
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="w-full px-4 py-2 border-2 border-gold text-gold font-sans text-xs font-bold uppercase rounded-lg hover:bg-gold/10 transition-all cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </motion.div>
    </div>
  );
};
