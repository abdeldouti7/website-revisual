import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import t from '../translations';

const Footer = () => {
  const { lang } = useLanguage();
  const c = t[lang].footer;

  return (
    <footer className="bg-primary text-background pt-16 pb-10 px-5 lg:px-10 rounded-t-[2rem] mt-[-2rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12">
        <div className="md:col-span-6">
          <div className="font-heading font-semibold text-2xl mb-3 tracking-[0.1em] text-white">REVISUAL</div>
          <p className="font-sans text-background/50 text-sm max-w-sm mb-6 font-normal leading-relaxed">{c.tagline}</p>
        </div>
        <div className="md:col-span-3 md:col-start-8">
          <h5 className="font-sans font-semibold mb-6 text-background/90 text-sm">{c.platform}</h5>
          <ul className="space-y-4 font-sans text-background/50 text-sm">
            <li><a href="#how-it-works" className="hover:text-white transition-colors">{c.howItWorks}</a></li>
            <li><a href="#demo" className="hover:text-white transition-colors">{c.solutions}</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors">{c.pricing}</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-sans font-semibold mb-6 text-background/90 text-sm">{c.company}</h5>
          <ul className="space-y-4 font-sans text-background/50 text-sm">
            <li><a href="#contact" className="hover:text-white transition-colors">{c.contact}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{c.privacy}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{c.terms}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-sans text-xs text-background/30 font-normal">{c.copyright}</span>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="magnetic-btn bg-white text-primary px-6 py-2.5 rounded-full font-medium font-sans flex items-center gap-2 hover:bg-neutral transition-colors text-sm shadow-xl"
        >
          {c.requestPilot} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
