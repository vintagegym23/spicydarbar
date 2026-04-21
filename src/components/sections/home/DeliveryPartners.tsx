import React from 'react';
import { deliveryPartners } from '../../../data/deliveryPartners';
import { SectionHeader } from '../../ui/SectionHeader';
import { Button } from '../../ui/Button';

export const DeliveryPartners: React.FC = () => {
  return (
    <section id="delivery" className="relative py-24 px-4 md:px-8 bg-bg-band bg-review-pattern">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="ROYAL DELIVERY"
          title="Feast at Your Palace"
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliveryPartners.map((partner) => (
            <div key={partner.id} className="bg-bg-card border border-gold-muted/20 rounded-xl p-8 flex flex-col items-center text-center">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                style={{ backgroundColor: partner.bgColor }}
              >
                <img src={partner.icon} alt={partner.name} className="w-10 h-10 object-contain brightness-0 invert" />
              </div>
              <h3 className="font-serif text-2xl text-cream mb-4">{partner.displayName}</h3>
              <p className="text-sand text-sm leading-relaxed mb-8 flex-grow">
                {partner.description}
              </p>
              <div className="w-full">
                <Button variant="primary" className="w-full opacity-60 cursor-default pointer-events-none">Order via {partner.name}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
