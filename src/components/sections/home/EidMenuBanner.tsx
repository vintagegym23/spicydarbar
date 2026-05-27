import React from 'react';
import { motion } from 'motion/react';
import EidMenuImage from '../../../Images/Eid A4 Special 1 Page Menu_page-0001.jpg';

export const EidMenuBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full bg-bg-base py-4 sm:py-6 md:py-8 lg:py-10 px-2 sm:px-4"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full overflow-hidden rounded-lg shadow-lg">
          <img
            src={EidMenuImage}
            alt="Eid A4 Special 1 Page Menu"
            className="w-full h-auto object-contain display block"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </motion.section>
  );
};
