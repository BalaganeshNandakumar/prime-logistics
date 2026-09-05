import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Truck, ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import Button from './Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-navy-950/95 backdrop-blur-md py-3 shadow-nav-shadow border-b border-slate-800/80'
            : 'bg-brand-navy-950/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-4 sm:py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BRAND LOGO */}
            <Link
              to="/"
              className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
              aria-label="Prime Logistics Home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 shadow-md group-hover:shadow-accent-glow transition-all duration-300">
                <Truck className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-amber-400 transition-colors">
                  PRIME<span className="text-amber-500">-LOGISTICS</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-slate-300 uppercase">
                  Complete Logistics Solution
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                      isActive
                        ? 'text-amber-400 bg-white/5'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-amber-500 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA & CONTACT DESKTOP */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="hidden xl:flex flex-col text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Headquarters
                </span>
                <span className="text-xs font-semibold text-white">
                  Chennai, Tamil Nadu
                </span>
              </div>

              <Button
                to="/contact"
                variant="primary"
                size="sm"
                icon={ArrowRight}
                className="shadow-sm"
              >
                Contact Us
              </Button>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="text-xs px-3 py-1.5"
              >
                Contact
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content Drawer */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-brand-navy-950 border-l border-slate-800 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out z-50 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Mobile Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-base text-white tracking-wide">
                    PRIME<span className="text-amber-500">-LOGISTICS</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-slate-400">
                    Complete Logistics Solution
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="mt-6 flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Drawer Footer */}
          <div className="pt-6 border-t border-slate-800 space-y-4">
            <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Sister Concern</span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                Tejas Logistics Service Network
              </p>
            </div>

            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
