import React from 'react';
import { useLanguage } from '../LanguageContext';
import t from '../translations';
import AboutAnimation from './AboutAnimation';

const About = () => {
  const { lang } = useLanguage();
  const c = t[lang].about;

  return (
    <section id="about" className="bg-white border-t border-black/5">
      <div className="py-24 px-5 lg:px-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-16 items-start">

        {/* Left column: heading + animation */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h2 className="font-heading font-semibold text-2xl md:text-4xl text-primary tracking-tight leading-tight">
            {c.heading}
          </h2>
          <AboutAnimation />
        </div>

        {/* Right column: body text */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 font-sans text-base text-dark/70 leading-relaxed font-normal md:pt-2">
          <p>{c.p1}</p>
          <p>{c.p2}</p>
        </div>

      </div>
    </section>
  );
};

export default About;
