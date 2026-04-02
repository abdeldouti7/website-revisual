import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import t from '../translations';

import Logo from './Logo';

const Footer = () => {
  const { lang } = useLanguage();
  const c = t[lang].footer;

  return (
    <footer className="bg-pebbles text-cream pt-16 pb-10 px-5 lg:px-10 rounded-t-[3rem] mt-[-3rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] border-t border-lemon-grass/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-cream/10 pb-12">
        <div className="md:col-span-6">
          <div className="mb-6 flex items-center">
            <Logo variant="creme" className="h-10 md:h-12 w-auto" />
          </div>
          <p className="font-sans text-cream/50 text-sm max-w-sm mb-6 font-normal leading-relaxed">{c.tagline}</p>
        </div>
        <div className="md:col-span-3 md:col-start-8">
          <h5 className="font-sans font-bold mb-6 text-cream/90 text-sm uppercase tracking-widest">{c.platform}</h5>
          <ul className="space-y-4 font-sans text-cream/60 text-sm">
            <li><a href="#how-it-works" className="hover:text-lemon-grass transition-colors font-medium">{c.howItWorks}</a></li>
            <li><a href="#demo" className="hover:text-lemon-grass transition-colors font-medium">{c.solutions}</a></li>
            <li><a href="#pricing" className="hover:text-lemon-grass transition-colors font-medium">{c.pricing}</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-sans font-bold mb-6 text-cream/90 text-sm uppercase tracking-widest">{c.company}</h5>
          <ul className="space-y-4 font-sans text-cream/60 text-sm">
            <li><a href="#contact" className="hover:text-lemon-grass transition-colors font-medium">{c.contact}</a></li>
            <li><a href="#" className="hover:text-lemon-grass transition-colors font-medium">{c.privacy}</a></li>
            <li><a href="#" className="hover:text-lemon-grass transition-colors font-medium">{c.terms}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-sans text-[10px] text-cream/30 font-medium uppercase tracking-widest">{c.copyright}</span>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="magnetic-btn bg-lemon-grass text-pebbles px-8 py-3 rounded-full font-bold font-sans flex items-center gap-2 hover:bg-cream hover:text-pebbles transition-all duration-300 text-sm shadow-xl"
        >
          {c.requestPilot} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
