import React from 'react';
import { useLanguage } from '../LanguageContext';
import t from '../translations';
import AboutAnimation from './AboutAnimation';

const About = () => {
  const { lang } = useLanguage();
  const c = t[lang].about;

  return (
    <section id="about" className="bg-cream border-t border-silver-fern/5 overflow-hidden">
      <div className="py-24 3xl:py-32 4xl:py-48 px-5 lg:px-10 max-w-7xl 3xl:max-w-9xl 4xl:max-w-10xl mx-auto">
        {/* Heading & Text */}
        <div className="flex flex-col gap-8 max-w-3xl 3xl:max-w-5xl 4xl:max-w-7xl">
          <div className="space-y-4">
            <span className="font-mono text-[10px] 3xl:text-xs uppercase tracking-[0.3em] text-silver-fern/60 font-bold block">
              Our Philosophy
            </span>
            <h2 className="font-heading font-semibold text-3xl md:text-5xl 3xl:text-7xl 4xl:text-8xl text-silver-fern tracking-tight leading-[1.15]">
              {c.heading}
            </h2>
          </div>
          <div className="flex flex-col gap-6 font-sans text-lg 3xl:text-xl 4xl:text-2xl text-pebbles/70 leading-relaxed font-normal">
            <p dangerouslySetInnerHTML={{ __html: c.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.p2 }}></p>
            {c.p3 && <p className="font-bold text-silver-fern mt-2 3xl:text-2xl 4xl:text-[2rem]" dangerouslySetInnerHTML={{ __html: c.p3 }}></p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
