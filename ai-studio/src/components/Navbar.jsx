import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import t from '../translations';

import Logo from './Logo';

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const c = t[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: c.solutions,   href: '#demo' },
    { name: c.howItWorks,  href: '#how-it-works' },
    { name: c.plans,       href: '#pricing' },
    { name: c.about,       href: '#about' },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Pill navbar */}
      <nav
        ref={navRef}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl rounded-full px-5 py-3 3xl:px-8 3xl:py-4 transition-all duration-700 ease-in-out flex items-center justify-between ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border border-silver-fern/10 shadow-lg text-silver-fern'
            : 'bg-white/60 backdrop-blur-md border border-pebbles/5 text-silver-fern'
        }`}
      >
        {/* Logo */}
        <div
          onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          className="cursor-pointer hover:opacity-70 transition-opacity shrink-0 flex items-center"
        >
          <Logo variant="green" className="h-7 md:h-8 w-auto" />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 font-sans text-[13px] font-medium">
          {navLinks.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="hover-lift hover:text-lemon-grass transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* EN / NL Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'nl' : 'en')}
            className={`font-mono font-semibold text-[12px] px-3 py-1.5 rounded-full border transition-colors ${
              scrolled
                ? 'border-silver-fern/20 text-silver-fern hover:bg-silver-fern/5'
                : 'border-silver-fern/30 text-silver-fern hover:bg-silver-fern/5'
            }`}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'NL' : 'EN'}
          </button>
          <a
            href="https://app.revisual.be/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-sans font-medium text-[13px] px-4 py-1.5 rounded-full border transition-colors hover:text-lemon-grass ${
              scrolled
                ? 'border-silver-fern/20 text-silver-fern hover:bg-silver-fern/5'
                : 'border-silver-fern/30 text-silver-fern hover:bg-silver-fern/5'
            }`}
          >
            {c.signUp}
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="magnetic-btn flex items-center justify-center px-5 py-2 rounded-full font-sans font-medium text-[13px] transition-all duration-300 bg-silver-fern text-cream hover:bg-lemon-grass hover:text-pebbles shadow-md shadow-silver-fern/20"
          >
            <span className="relative z-10">{c.bookDemo}</span>
          </button>
        </div>

        {/* Mobile: hamburger */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-silver-fern/20 text-silver-fern hover:bg-silver-fern/5 transition-colors"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-cream/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer content */}
        <div className="relative z-10 flex flex-col gap-6 px-8 pt-28 pb-12">
          {navLinks.map(item => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="font-heading font-semibold text-2xl text-silver-fern text-left hover:text-lemon-grass transition-colors"
            >
              {item.name}
            </button>
          ))}

          <div className="mt-4 flex flex-col gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'nl' : 'en')}
              className="font-mono font-semibold text-sm px-5 py-3 rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-colors w-full"
            >
              {lang === 'en' ? 'Switch to NL' : 'Switch to EN'}
            </button>
            <a
              href="https://app.revisual.be/login"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-medium text-sm px-5 py-3 rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-colors text-center"
            >
              {c.signUp}
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="magnetic-btn px-5 py-3 rounded-full font-sans font-medium text-sm bg-silver-fern text-cream hover:bg-lemon-grass hover:text-pebbles transition-all duration-300 shadow-md shadow-silver-fern/20 w-full"
            >
              {c.bookDemo}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
