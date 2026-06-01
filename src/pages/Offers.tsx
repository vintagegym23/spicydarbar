import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import offersImg1 from '../Images/offers_img1.jpeg';
import offersImg2 from '../Images/offers_img2.jpeg';

/* ─── Sample offer data (placeholder for future integration) ─── */
interface Offer {
  id: string;
  title: string;
  description: string;
  code: string;
  discount: string;
  validUntil: string;
  category: 'discount' | 'freebie' | 'combo' | 'seasonal';
  featured: boolean;
}

/* ─── confetti strip for hero ─── */
const HeroConfetti: React.FC = () => {
  const pieces = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 3 + Math.random() * 6,
    color: ['#F5C518', '#CC2200', '#3A7A2A', '#C4A882', '#F5EDD0'][i % 5],
    rotate: Math.random() * 360,
    delay: Math.random() * 1.5,
    isRect: i % 3 === 0,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pieces.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0, 0.7, 0.5], y: [p.y - 10, p.y, p.y + 5] }}
          transition={{ duration: 2.5, delay: p.delay, ease: 'easeOut' }}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.isRect ? p.size * 1.8 : p.size,
            borderRadius: p.isRect ? '2px' : '50%',
            backgroundColor: p.color,
            transform: `rotate(${p.rotate}deg)`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════
   Offers & Specials Page
   ═══════════════════════════════════════════ */
const Offers: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-bg-base min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <HeroConfetti />

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gold-muted hover:text-gold transition-colors mb-8 cursor-pointer group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-sans">Back</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-sans text-[11px] font-semibold tracking-eyebrow uppercase text-gold-muted mb-3">
              Exclusive Deals
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4">
              Offers & <span className="text-gold italic">Specials</span>
            </h1>
            <p className="text-muted font-sans text-base md:text-lg max-w-xl leading-relaxed">
              Delicious deals crafted just for you. Use any code below at checkout and save on your favourite dishes from Spice Darbar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Promotional Images Gallery ─── */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
        >
          {/* Image 1 - Combo Deals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-4 border-white"
          >
            <img
              src={offersImg1}
              alt="Spice Darbar Combo Deals"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>

          {/* Image 2 - Student & NHS Discount */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-4 border-white"
          >
            <img
              src={offersImg2}
              alt="Exclusive Student & NHS Discount"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Bottom CTA band ─── */}
      <section className="border-t border-gold/10 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-serif text-xl text-cream mb-2">
            Hungry yet?
          </p>
          <p className="text-sm text-muted font-sans mb-6">
            Browse our full menu and apply your favourite offer at checkout.
          </p>
          <a
            href="/menu"
            className="inline-block bg-gold text-btn-dark font-sans font-semibold text-sm px-8 py-3 rounded-lg hover:bg-gold/90 transition-all tracking-cta uppercase"
          >
            View Menu
          </a>
        </div>
      </section>
    </main>
  );
};

export default Offers;
