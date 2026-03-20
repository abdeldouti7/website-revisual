import React from 'react';
import { useLanguage } from '../LanguageContext';
import t from '../translations';


const About = () => {
  const { lang } = useLanguage();
  const c = t[lang].about;

  return (
    <section id="about" className="bg-white border-t border-black/5">
      <div className="py-24 px-5 lg:px-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-24 items-start">

        {/* Left column: heading */}
        <div className="w-full md:w-[45%]">
          <h2 className="font-heading font-semibold text-3xl md:text-5xl text-primary tracking-tight leading-[1.15]">
            {c.heading}
          </h2>
        </div>

        {/* Right column: body text */}
        <div className="w-full md:w-[55%] flex flex-col gap-6 font-sans text-lg text-dark/70 leading-relaxed font-normal md:pt-4">
          <p>{c.p1}</p>
          <p>{c.p2}</p>
        </div>

      </div>
    </section>
  );
};

export default About;
