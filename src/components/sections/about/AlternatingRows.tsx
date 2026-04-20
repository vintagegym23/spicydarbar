import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button';

export const AlternatingRows: React.FC = () => {
  const navigate = useNavigate();

  const rows = [
    {
      id: '1',
      title: 'The Art of the Tandoor',
      description: 'Our clay ovens are seasoned with a secret blend of herbs and spices for 40 days before their first use, creating a unique smoky flavor that cannot be replicated.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000',
      reverse: false
    },
    {
      id: '2',
      title: 'A Modern Sanctuary',
      description: 'Designed by award-winning architects, our space blends traditional Mughal motifs with minimalist modern luxury, creating an atmosphere of serene opulence.',
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=1000',
      reverse: true
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 space-y-24">
      {rows.map((row) => (
        <div
          key={row.id}
          className={`flex flex-col ${row.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
        >
          <div className="flex-1 space-y-6">
            <h2 className="font-serif text-4xl text-cream">{row.title}</h2>
            <p className="text-sand text-lg leading-relaxed">
              {row.description}
            </p>
            <Button variant="inline" onClick={() => navigate('/contact')}>
              BOOK YOUR EXPERIENCE →
            </Button>
          </div>
          <div className="flex-1 w-full">
            <img
              src={row.image}
              alt={row.title}
              className="rounded-lg object-cover aspect-video w-full border border-gold-muted/20 shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      ))}
    </section>
  );
};
