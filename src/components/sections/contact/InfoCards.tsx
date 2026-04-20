import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const InfoCards: React.FC = () => {
  const cards = [
    {
      id: '1',
      icon: <MapPin className="w-5 h-5 text-gold" />,
      title: 'Location',
      details: ['6, Evington Road', 'Leicester , LE2 1HF'],
      cta: 'GET DIRECTIONS'
    },
    {
      id: '2',
      icon: <Phone className="w-5 h-5 text-gold" />,
      title: 'Reservations',
      details: ['Phone: 07502023334', 'Available 11 AM - 11 PM'],
      cta: 'CALL NOW'
    },
    {
      id: '3',
      icon: <Mail className="w-5 h-5 text-gold" />,
      title: 'Enquiries',
      details: ['spicedarbar6@gmail.com', 'Response within 24 hours'],
      cta: 'EMAIL US'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {cards.map((card) => (
        <div key={card.id} className="bg-bg-card border border-gold-muted/20 rounded-lg p-8 flex flex-col group hover:border-gold/40 transition-all">
          <div className="w-10 h-10 bg-[#2A1200] rounded-md flex items-center justify-center mb-6 border border-gold/10">
            {card.icon}
          </div>
          <h3 className="font-serif text-2xl text-cream mb-4">{card.title}</h3>
          <div className="flex-grow space-y-1 mb-8">
            {card.details.map((detail, i) => (
              <p key={i} className="text-sand text-sm">{detail}</p>
            ))}
          </div>
          <button className="text-gold font-sans text-xs font-bold tracking-widest uppercase hover:text-yellow-400 transition-colors text-left">
            {card.cta} →
          </button>
        </div>
      ))}
    </div>
  );
};
