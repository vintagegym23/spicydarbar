import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp, Gift } from 'lucide-react';

export const OffersPopup: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Auto-show popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, type: 'spring', damping: 25 }}
      className="fixed bottom-32 right-6 w-80 md:w-96 bg-gradient-to-br from-bg-card to-bg-base border-2 border-gold/30 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] z-40 overflow-hidden"
    >
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="w-full bg-gradient-to-r from-gold/20 to-gold/10 border-b border-gold/30 px-6 py-4 flex items-center justify-between hover:bg-gold/15 transition-all cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-btn-dark flex-shrink-0 group-hover:scale-110 transition-transform">
            <Gift size={18} />
          </div>
          <div className="text-left">
            <h3 className="font-serif text-lg text-cream">Special Offers</h3>
            <p className="text-xs text-gold-muted">Click to expand</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isMinimized ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isMinimized ? (
            <ChevronUp size={20} className="text-gold" />
          ) : (
            <ChevronDown size={20} className="text-gold" />
          )}
        </motion.div>
      </button>

      {/* Content - Expandable/Collapsible */}
      <motion.div
        initial={false}
        animate={{ height: isMinimized ? 0 : 'auto', opacity: isMinimized ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 space-y-4">
          {/* Offers List */}
          <div className="space-y-3">
            {[
              {
                title: 'Get 20% OFF',
                description: 'On your first online order',
                code: 'WELCOME20'
              },
              {
                title: 'Free Dessert',
                description: 'On orders above ₹1000',
                code: 'FREEDESSERT'
              },
              {
                title: 'Flat 15% OFF',
                description: 'On catering orders',
                code: 'CATER15'
              }
            ].map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gold/10 border border-gold/20 rounded-lg p-3 hover:border-gold/40 transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gold text-sm">{offer.title}</h4>
                    <p className="text-xs text-muted mt-1">{offer.description}</p>
                  </div>
                </div>
                <div className="mt-2 text-xs font-mono bg-bg-base border border-gold/30 rounded px-2 py-1 text-gold inline-block group-hover:bg-gold group-hover:text-btn-dark transition-all">
                  {offer.code}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="/menu"
              className="w-full bg-gold text-btn-dark font-semibold py-2 rounded-lg hover:bg-gold/90 transition-all text-center text-sm cursor-pointer"
            >
              View Menu
            </a>
            <button
              onClick={() => setIsMinimized(true)}
              className="w-full border-2 border-gold text-gold font-semibold py-2 rounded-lg hover:bg-gold/10 transition-all text-sm cursor-pointer"
            >
              Minimize
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-xs text-muted text-center pt-2 border-t border-gold/10">
            Valid on dine-in and delivery. T&C apply.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
