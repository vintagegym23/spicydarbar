import React from 'react';
import { SectionHeader } from '../../ui/SectionHeader';

export const AboutHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 md:px-8 bg-bg-base">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          eyebrow="OUR GENESIS"
          title="The Spice Darbar Story"
          description="A legacy of flavor, born in the heart of India and refined for the modern connoisseur."
          centered
        />
      </div>
    </section>
  );
};
