import React from 'react';

export const StatsBand: React.FC = () => {
  const stats = [

    { value: '110+', label: 'ITEMS ON MENU' },
    { value: '100%', label: 'AUTHENTIC SPICES' }
  ];

  return (
    <section className="bg-[#2E1800] border-y border-gold/20 w-full">
      <div className="grid grid-cols-2 divide-x divide-gold/10 w-full">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center py-8 px-4">
            <span className="font-serif text-4xl md:text-5xl text-gold mb-1">{stat.value}</span>
            <span className="text-muted text-[10px] font-bold tracking-widest uppercase">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
