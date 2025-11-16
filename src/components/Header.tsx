
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import type { NavLinkItem } from '../types';

const navLinks: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Diensten', path: '/diensten' },
  { name: 'Cases', path: '/case-studies' },
  { name: 'Prijzen', path: '/prijzen' },
  { name: 'Resources', path: '/resources' },
  { name: 'Blog', path: '/blog' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-[#09031b]/90 backdrop-blur-xl shadow-2xl shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="text-3xl md:text-4xl font-bold gradient-text tracking-tight">
            Webbiecorn
          </Link>
          <div className="hidden md:flex flex-col text-xs uppercase tracking-[0.3em] text-white/60">
            <span>Social Studio</span>
            <span>Amsterdam</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase tracking-wide transition-colors ${
                    isActive ? 'text-[#F472B6]' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2 text-sm font-semibold text-[#0F052B] bg-white rounded-full shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              Plan Kennismaking
            </Link>
          </nav>
          <button
            className="lg:hidden w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Open navigatie"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#050014]/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 text-2xl font-semibold">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `${isActive ? 'text-[#F472B6]' : 'text-white'} hover:text-[#A78BFA] transition-colors`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="px-8 py-3 text-lg font-semibold text-[#050014] bg-white rounded-full"
          >
            Plan Kennismaking
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
