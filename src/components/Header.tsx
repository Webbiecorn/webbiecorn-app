
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NavLinkItem } from '../types';

const navLinks: NavLinkItem[] = [
  { name: 'Diensten', path: '/diensten' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Prijzen', path: '/prijzen' },
  { name: 'Blog', path: '/blog' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-[#0F052B]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="text-3xl md:text-4xl font-bold gradient-text">
            Webbiecorn
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg hover:text-[#F472B6] transition-colors duration-300 ${isActive ? 'active-nav-link' : 'text-[#E0D9F7]'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#60A5FA] hover:opacity-90 transition-opacity duration-300"
            >
              Offerte
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#E0D9F7] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0F052B]/95 backdrop-blur-xl z-40 pt-20 flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `text-2xl py-2 ${isActive ? 'active-nav-link' : 'text-[#E0D9F7] hover:text-[#F472B6]'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className="mt-4 px-8 py-3 text-2xl font-semibold text-white rounded-full bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#60A5FA] hover:opacity-90 transition-opacity duration-300"
          >
            Offerte
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
