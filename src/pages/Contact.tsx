import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ContactHeader } from '../components/sections/contact/ContactHeader';
import { InfoCards } from '../components/sections/contact/InfoCards';
import { MapCard } from '../components/sections/contact/MapCard';

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('subject') || '';

  return (
    <main className="bg-bg-base min-h-screen pb-24">
      <ContactHeader />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <InfoCards />
        <div className="w-full mt-12">
          <MapCard />
        </div>
      </div>
    </main>
  );
};

export default Contact;
