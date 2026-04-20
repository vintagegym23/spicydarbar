import React, { useState } from 'react';
import { Instagram, Facebook, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setShowToast(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-bg-base pt-20 pb-10 px-4 md:px-8 border-t border-gold-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 text-gold">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <span className="font-serif text-2xl text-cream">Spice Darbar</span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Experience the royal heritage of Indian cuisine through our curated dishes,
              crafted with passion and served with tradition.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/thespicedarbar?igsh=MWtzandjN2drOWFlOA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-muted/30 flex items-center justify-center text-gold hover:bg-gold hover:text-btn-dark transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/share/1BbEkt5LS9/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-muted/30 flex items-center justify-center text-gold hover:bg-gold hover:text-btn-dark transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Experience */}
          <div>
            <h4 className="text-gold font-sans text-xs font-bold tracking-widest uppercase mb-6">Experience</h4>
            <ul className="flex flex-col gap-4">
              {['Chef\'s Table', 'Tasting Menu', 'Wine Cellar', 'Private Events'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted text-sm hover:text-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h4 className="text-gold font-sans text-xs font-bold tracking-widest uppercase mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              {['Privacy Policy', 'Terms of Service', 'Sustainability', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted text-sm hover:text-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-gold font-sans text-xs font-bold tracking-widest uppercase mb-6">Newsletter</h4>
            <p className="text-muted text-sm mb-6">Join our inner circle for exclusive updates and royal invitations.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-bg-card border border-gold-muted/30 rounded-md px-4 py-2 text-cream text-sm focus:outline-none focus:border-gold w-full"
                required
              />
              <Button type="submit" className="px-4 py-2 text-xs">Join</Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gold-muted/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-[10px] tracking-widest uppercase">
            © 2024 SPICE DARBAR RESTAURANTS
          </p>
          <p className="text-muted text-[10px] tracking-widest uppercase">
            HANDCRAFTED IN NEW DELHI · ALL RIGHTS RESERVED
          </p>
        </div>
      </div>

      {/* Floating Phone Button */}
      <a
        href="tel:+91 75020 23334"
        className="fixed bottom-[30px] right-[30px] w-14 h-14 bg-gold rounded-full flex items-center justify-center text-btn-dark shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform z-40"
      >
        <Phone size={24} />
      </a>

      <Toast
        message="Welcome to the Inner Circle."
        visible={showToast}
        onClose={() => setShowToast(false)}
      />
    </footer>
  );
};
