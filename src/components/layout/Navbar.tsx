import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import Logo from '../../Images/spicydarbar.png';


export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderClick = () => {
    if (location.pathname === '/') {
      document.getElementById('delivery')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('delivery')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 h-24 transition-all duration-300 border-b border-gold/10 ${
          isScrolled ? 'bg-bg-base/95 backdrop-blur-md shadow-lg' : 'bg-bg-base'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <img 
              src={Logo} 
              alt="Spice Darbar" 
              className="h-20 w-auto group-hover:scale-105 transition-transform object-contain" 
            />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'HOME', path: '/' },
              // { name: 'MENU', path: '/menu' },
              // { name: 'GALLERY', path: '/gallery' },
              { name: 'ABOUT', path: '/about' },
              { name: 'CONTACT', path: '/contact' },
            ].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-xs font-semibold tracking-widest transition-all duration-300 pb-1 border-b-2 ${
                    isActive
                      ? 'text-cream border-gold'
                      : 'text-muted border-transparent hover:text-gold'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Button variant="primary" onClick={handleOrderClick}>
                Order Online
              </Button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-cream hover:text-gold transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onOrderClick={handleOrderClick}
      />
    </>
  );
};
