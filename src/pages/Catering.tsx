import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/ui/SectionHeader';

const Catering: React.FC = () => {
  return (
    <main className="bg-bg-base min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden bg-gradient-to-r from-bg-base to-bg-base/80">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561a1b?w=1920"
            alt="Catering Service"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-base via-bg-base/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl text-cream mb-4">
              Catering Services
            </h1>
            <p className="text-lg text-gold-muted max-w-2xl">
              Make your special moments unforgettable with authentic Indian cuisine
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <SectionHeader
          title="Our Catering Offerings"
          subtitle="Customized menu options for your event"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Corporate Events',
              description: 'Professional catering for business meetings, conferences, and corporate gatherings with customizable menus.',
              items: ['Team lunches', 'Conference catering', 'Business dinners', 'Office parties']
            },
            {
              title: 'Weddings & Celebrations',
              description: 'Celebrate your special day with authentic Indian flavors and personalized service.',
              items: ['Wedding receptions', 'Engagement parties', 'Birthday celebrations', 'Anniversary dinners']
            },
            {
              title: 'Private Functions',
              description: 'Intimate gatherings with customized menus tailored to your preferences and dietary requirements.',
              items: ['Family gatherings', 'Small parties', 'Intimate dinners', 'Special occasions']
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg p-8 border border-gold/20 hover:border-gold/40 transition-all"
            >
              <h3 className="font-serif text-2xl text-cream mb-3">{service.title}</h3>
              <p className="text-muted mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-cream">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="bg-gold/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="Catering Packages"
            subtitle="Flexible options to fit your budget and requirements"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: 'Essential',
                price: 'Starting from ₹500/person',
                features: [
                  'Choice of 3 main dishes',
                  'Rice & bread selection',
                  'Single vegetable curry',
                  'Dessert option',
                  'Minimum 20 guests'
                ]
              },
              {
                name: 'Premium',
                price: 'Starting from ₹800/person',
                features: [
                  'Choice of 5 main dishes',
                  'Multiple rice & bread options',
                  'Multiple vegetable curries',
                  'Appetizers included',
                  'Dessert selection',
                  'Minimum 20 guests'
                ],
                highlight: true
              },
              {
                name: 'Luxury',
                price: 'Starting from ₹1200/person',
                features: [
                  'Unlimited dish selection',
                  'Premium meat options',
                  'Multiple vegetable dishes',
                  'Full appetizer range',
                  'Multiple desserts',
                  'Beverages included',
                  'Dedicated staff service'
                ]
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg p-8 transition-all ${
                  pkg.highlight
                    ? 'bg-gradient-to-br from-gold/20 to-gold/10 border-2 border-gold shadow-lg'
                    : 'bg-bg-base border border-gold/20'
                }`}
              >
                <h3 className="font-serif text-2xl text-cream mb-2">{pkg.name}</h3>
                <p className="text-gold text-lg font-semibold mb-6">{pkg.price}</p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-cream">
                      <span className="text-gold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <SectionHeader
          title="How to Book"
          subtitle="Simple steps to arrange your catering"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: '1', title: 'Inquiry', description: 'Contact us with your event details and guest count' },
            { number: '2', title: 'Menu Selection', description: 'Choose from our offerings or create a custom menu' },
            { number: '3', title: 'Confirmation', description: 'Confirm date, menu, and finalize the booking' },
            { number: '4', title: 'Service', description: 'We handle setup, service, and cleanup' }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gold text-bg-dark rounded-full flex items-center justify-center font-serif text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h4 className="font-serif text-lg text-cream mb-2">{step.title}</h4>
              <p className="text-muted text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gold/10 to-gold/5 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
              Ready to Plan Your Event?
            </h2>
            <p className="text-lg text-gold-muted mb-8">
              Contact us today to discuss your catering needs and get a personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gold text-btn-dark font-semibold rounded-lg hover:bg-gold/90 transition-all"
              >
                Get in Touch
              </a>
              <a
                href="tel:+44 7502 023334"
                className="px-8 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Catering;
