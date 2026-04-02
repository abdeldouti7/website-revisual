import React from 'react';
import { useLanguage } from '../LanguageContext';
import t from '../translations';
import AboutAnimation from './AboutAnimation';

const About = () => {
  const { lang } = useLanguage();
  const c = t[lang].about;

  return (
    <section id="about" className="bg-cream border-t border-silver-fern/5 overflow-hidden">
      <div className="py-24 px-5 lg:px-10 max-w-7xl mx-auto">
        {/* Heading & Text */}
        <div className="flex flex-col gap-8 max-w-3xl">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver-fern/60 font-bold block">
              Our Philosophy
            </span>
            <h2 className="font-heading font-semibold text-3xl md:text-5xl text-silver-fern tracking-tight leading-[1.15]">
              {c.heading}
            </h2>
          </div>
          <div className="flex flex-col gap-6 font-sans text-lg text-pebbles/70 leading-relaxed font-normal">
            <p>{c.p1}</p>
            <p>{c.p2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
