import React from 'react';
import { MapPin, Utensils } from 'lucide-react';

export const MapCard: React.FC = () => {
  return (
    <div className="w-full flex flex-col rounded-lg overflow-hidden border border-gold-muted/20 shadow-lg">
      <div className="w-full flex items-center justify-center min-h-[350px] md:min-h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19372.694554858324!2d-1.1416746364026402!3d52.631310363768385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761b3aef6d499%3A0x43a44d9c057dba83!2sSpice%20Darbar!5e0!3m2!1sen!2sin!4v1776668200705!5m2!1sen!2sin"
          className="w-full h-full min-h-[350px] md:min-h-[450px]"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-bg-card p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <Utensils className="text-gold w-6 h-6" />
            <span className="font-serif text-2xl md:text-3xl text-cream">Spice Darbar</span>
            <span className="hidden md:inline-block text-gold text-[10px] font-bold tracking-widest uppercase ml-2 px-3 py-1 border border-gold/30 rounded-full">
              PREMIUM FINE DINING
            </span>
          </div>
          <p className="text-sand text-base leading-relaxed max-w-2xl">
            Located in the heart of the diplomatic enclave, our flagship restaurant offers
            valet parking and a dedicated concierge for all guests. Experience the royal
            heritage of Indian cuisine.
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gold text-btn-dark font-sans font-bold text-sm px-8 py-4 rounded-md hover:bg-yellow-400 transition-all duration-300 w-full md:w-auto"
          >
            OPEN IN GOOGLE MAPS
          </a>
        </div>
      </div>
    </div>
  );
};
