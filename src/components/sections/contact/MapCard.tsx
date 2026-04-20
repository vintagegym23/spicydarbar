import React from 'react';
import { MapPin, Utensils } from 'lucide-react';

export const MapCard: React.FC = () => {
  return (
    <div className="w-full flex flex-col rounded-lg overflow-hidden border border-gold-muted/20 shadow-lg">
      <div className="w-full bg-[#5C4A38] flex items-center justify-center min-h-[350px] md:min-h-[450px]">
        <MapPin className="text-sand/40 w-32 h-32 md:w-40 md:h-40" />
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
