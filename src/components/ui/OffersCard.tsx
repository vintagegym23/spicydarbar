import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

/* ───────── confetti / decorative pieces ───────── */
const confettiPieces = [
  { shape: 'circle', color: '#F5C518', size: 6, x: 15, y: 20, rotate: 0, delay: 0 },
  { shape: 'rect', color: '#CC2200', size: 8, x: 75, y: 15, rotate: 35, delay: 0.2 },
  { shape: 'circle', color: '#3A7A2A', size: 5, x: 50, y: 35, rotate: 0, delay: 0.4 },
  { shape: 'rect', color: '#F5C518', size: 7, x: 85, y: 55, rotate: -20, delay: 0.1 },
  { shape: 'circle', color: '#C8960C', size: 4, x: 30, y: 60, rotate: 0, delay: 0.3 },
  { shape: 'rect', color: '#CC2200', size: 6, x: 60, y: 70, rotate: 50, delay: 0.5 },
  { shape: 'circle', color: '#F5EDD0', size: 5, x: 10, y: 75, rotate: 0, delay: 0.15 },
  { shape: 'rect', color: '#3A7A2A', size: 9, x: 42, y: 10, rotate: -40, delay: 0.35 },
  { shape: 'circle', color: '#C4A882', size: 4, x: 90, y: 40, rotate: 0, delay: 0.25 },
  { shape: 'rect', color: '#F5C518', size: 5, x: 20, y: 45, rotate: 65, delay: 0.45 },
  { shape: 'circle', color: '#CC2200', size: 3, x: 68, y: 50, rotate: 0, delay: 0.6 },
  { shape: 'rect', color: '#C4A882', size: 7, x: 55, y: 80, rotate: -15, delay: 0.55 },
];

const ConfettiLayer: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {confettiPieces.map((piece, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10, scale: 0.5 }}
        animate={{
          opacity: [0, 1, 0.8, 1],
          y: [10, -2, 4, 0],
          scale: [0.5, 1.1, 0.95, 1],
          rotate: [0, piece.rotate + 15, piece.rotate - 10, piece.rotate],
        }}
        transition={{
          duration: 2,
          delay: piece.delay + 0.5,
          ease: 'easeOut',
        }}
        className="absolute"
        style={{
          left: `${piece.x}%`,
          top: `${piece.y}%`,
          width: piece.size,
          height: piece.shape === 'rect' ? piece.size * 1.6 : piece.size,
          borderRadius: piece.shape === 'circle' ? '50%' : '2px',
          backgroundColor: piece.color,
          transform: `rotate(${piece.rotate}deg)`,
        }}
      />
    ))}
  </div>
);

/* ───────── paper fold decorations ───────── */
const PaperFolds: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Folded paper – bottom-left */}
    <div
      className="absolute -bottom-2 -left-3 w-20 h-24 rounded-tl-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(245,197,24,0.12) 0%, rgba(245,197,24,0.04) 60%, transparent 100%)',
        transform: 'rotate(-8deg)',
        boxShadow: '4px -2px 12px rgba(0,0,0,0.25)',
      }}
    />
    {/* Folded paper – bottom-right */}
    <div
      className="absolute -bottom-1 -right-2 w-16 h-20 rounded-tr-xl"
      style={{
        background: 'linear-gradient(225deg, rgba(196,168,130,0.15) 0%, rgba(196,168,130,0.04) 60%, transparent 100%)',
        transform: 'rotate(6deg)',
        boxShadow: '-3px -2px 10px rgba(0,0,0,0.2)',
      }}
    />
    {/* Center decorative ribbon */}
    <div
      className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-14"
      style={{
        background: 'linear-gradient(180deg, rgba(245,197,24,0.25) 0%, rgba(204,34,0,0.15) 100%)',
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 50% 80%, 0% 100%)',
      }}
    />
  </div>
);

/* ───────── bouquet-like radial decoration ───────── */
const BouquetDecoration: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
    {/* Radial "petals" */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <motion.div
        key={angle}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.18 }}
        transition={{ duration: 1.2, delay: 0.8 + angle * 0.002 }}
        className="absolute"
        style={{
          width: 18,
          height: 28,
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          background: `linear-gradient(${angle}deg, rgba(245,197,24,0.4), rgba(204,34,0,0.2))`,
          transform: `rotate(${angle}deg) translateY(-20px)`,
          transformOrigin: 'center 36px',
        }}
      />
    ))}
    {/* Center dot */}
    <div className="w-3 h-3 rounded-full bg-gold/30 z-10" />
  </div>
);

/* ═══════════════════════════════════════════
   Main OffersCard Component
   ═══════════════════════════════════════════ */
export const OffersCard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [minimized, setMinimized] = useState(false);

  // Hide the card on the offers page itself
  const isOnOffersPage = location.pathname === '/offers';

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate('/offers');
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMinimized(true);
  };

  const handleMinimizedClick = () => {
    setMinimized(false);
  };

  return (
    <AnimatePresence>
      {visible && !isOnOffersPage && !minimized && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ type: 'spring', damping: 22, stiffness: 180 }}
          whileHover={{ rotate: 0, scale: 1.04, y: -4 }}
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="fixed bottom-24 right-4 sm:bottom-20 sm:right-6 md:bottom-28 md:right-8 z-40 select-none w-[170px] md:w-[220px] cursor-pointer"
          role="button"
          aria-label="View Special Offers"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleClick();
          }}
        >
          {/* Shadow card behind (depth effect like reference) */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: '#111',
              backgroundImage: 'radial-gradient(rgba(245,197,24,0.08) 1px, transparent 1px)',
              backgroundSize: '8px 8px',
              transform: 'rotate(4deg) translate(6px, 6px)',
              zIndex: -2,
            }}
          />
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: '#0e0804',
              backgroundImage: 'radial-gradient(rgba(196,168,130,0.06) 1px, transparent 1px)',
              backgroundSize: '6px 6px',
              transform: 'rotate(7deg) translate(10px, 10px)',
              zIndex: -3,
            }}
          />

          {/* Main card body */}
          <div
            className="relative rounded-2xl overflow-hidden border border-gold/25"
            style={{
              background: 'linear-gradient(160deg, #1C1208 0%, #0F0A04 50%, #1A0E06 100%)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(245,197,24,0.06)',
            }}
          >
            {/* Close button (X icon) */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 md:top-3 md:right-3 z-50 text-red-500 hover:text-red-400 transition-colors cursor-pointer"
              aria-label="Minimize offers card"
            >
              <X size={18} />
            </button>

            {/* ─── TOP: Offer Preview ─── */}
            <div className="relative px-3 pt-3 pb-2 md:px-5 md:pt-5 md:pb-4">
              {/* Badge */}
              <div className="flex items-center gap-1.5 mb-2 md:mb-3">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-gold text-xs md:text-sm"
                >
                  ✨
                </motion.span>
                <span className="text-[7px] md:text-[9px] font-sans font-semibold tracking-widest uppercase text-gold/70">
                  Special Offers
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-serif text-[16px] md:text-[20px] leading-tight text-gold font-bold mb-1.5 md:mb-2">
                Exciting Deals
              </h3>

              {/* Subtext */}
              <p className="text-[9px] md:text-[11px] text-cream/70 font-sans leading-relaxed mb-3">
                Discover amazing discounts and special treats
              </p>

              {/* CTA Badge */}
              <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 rounded-lg px-2.5 py-1.5 md:px-3 md:py-2 hover:bg-gold/25 hover:border-gold/60 transition-all">
                <span className="text-[8px] md:text-[9px] font-sans font-semibold text-gold uppercase tracking-wider">
                  Tap to Explore
                </span>
                <span className="text-gold text-xs">→</span>
              </div>

              {/* Subtle divider */}
              <div className="mt-3 md:mt-4 h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
            </div>

            {/* ─── BOTTOM: Confetti / Bouquet / Paper decoration ─── */}
            <div className="relative h-20 md:h-28 overflow-hidden">
              {/* Gradient backdrop */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(245,197,24,0.04) 40%, rgba(204,34,0,0.06) 100%)',
                }}
              />

              <BouquetDecoration />
              <PaperFolds />
              <ConfettiLayer />

              {/* CTA label at bottom */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center px-3">
                <motion.div
                  animate={hovered ? { y: -2, scale: 1.05 } : { y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-center"
                >
                  <p className="text-[9px] md:text-[10px] font-sans font-semibold text-gold/80 mb-0.5">
                    Limited Time
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-[10px] md:text-[11px] font-semibold text-gold tracking-wide">
                      VIEW OFFERS
                    </span>
                    <motion.span
                      animate={hovered ? { x: 2 } : { x: 0 }}
                      className="text-gold/70"
                    >
                      →
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Minimized state - Small confetti icon just above phone button */}
      {visible && !isOnOffersPage && minimized && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          onClick={handleMinimizedClick}
          whileHover={{ scale: 1.15 }}
          className="fixed bottom-24 right-4 sm:bottom-20 sm:right-6 md:bottom-26 md:right-8 z-40 w-12 h-12 md:w-14 md:h-14 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center text-gold hover:bg-gold/20 transition-all cursor-pointer"
          aria-label="Expand offers"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl md:text-3xl"
          >
            🎉
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
