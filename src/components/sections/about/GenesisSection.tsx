import React from 'react';

export const GenesisSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1000"
            alt="Old Delhi Spice Market"
            className="rounded-lg object-cover aspect-[4/5] w-full border border-gold-muted/20 shadow-2xl"
            referrerPolicy="no-referrer"
          />
          {/* <div className="absolute -bottom-8 -right-8 hidden lg:block w-48 h-48 bg-bg-amber rounded-lg border border-gold p-6 flex flex-col justify-center">
            <span className="font-serif text-4xl text-gold mb-1">1984</span>
            <span className="text-cream text-[10px] font-bold tracking-widest uppercase">FOUNDATION YEAR</span>
          </div> */}
        </div>

        <div>
          <h2 className="font-serif text-4xl text-cream mb-8 leading-tight">
            From a Small Stall to <br />
            <span className="italic text-gold">A Culinary Empire</span>
          </h2>
          <div className="space-y-6 text-sand text-lg leading-relaxed">
            <p>
              It started with a simple dream: to bring bold, comforting
              Indian flavors to a place where everyone feels at home. Born
              from family recipes and late‑night kitchen experiments, Spice
              Darbar celebrates shared meals, laughter,
              and the joy of good food.
            </p>
            <p>
              Today, Spice Darbar is where tradition meets a modern dining vibe. Every curry,
              kebab, and tandoor‑fresh bread is crafted with care, turning each visit into a
              story you’ll want to revisit.
            </p>
          </div>

          {/* <div className="mt-12 flex flex-wrap gap-4">
            <div className="bg-bg-card rounded-full px-6 py-3 border border-gold-muted/20 flex items-center gap-3">
              <span className="text-gold font-serif text-xl">12</span>
              <span className="text-muted text-[10px] font-bold tracking-widest uppercase">AWARDS WON</span>
            </div>
            <div className="bg-bg-card rounded-full px-6 py-3 border border-gold-muted/20 flex items-center gap-3">
              <span className="text-gold font-serif text-xl">150k+</span>
              <span className="text-muted text-[10px] font-bold tracking-widest uppercase">GUESTS SERVED</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
