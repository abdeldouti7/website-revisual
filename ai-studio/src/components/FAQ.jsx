import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import t from '../translations';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { lang } = useLanguage();
  const c = t[lang].faq;

  const faqs = [
    { q: c.q1, a: c.a1 },
    {
      q: c.q2,
      a: (
        <div className="flex flex-col gap-4">
          <p>{c.a2p1}</p>
          <p>{c.a2p2}</p>
        </div>
      )
    },
    { q: c.q3, a: c.a3 },
    { q: c.q4, a: c.a4 },
    { q: c.q5, a: c.a5 },
    {
      q: c.q6,
      a: c.a6
    },
    { q: c.q7, a: c.a7 },
  ];

  return (
    <section className="py-24 bg-silver-fern px-5 lg:px-10 border-t border-white/5 relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lemon-grass/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-cream mb-3">{c.heading}</h2>
          <p className="font-sans text-base md:text-lg text-cream/70 font-normal max-w-xl mx-auto">{c.sub}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-white/10 rounded-[1.5rem] overflow-hidden transition-all duration-500 ${
                openIndex === index 
                ? 'bg-cream shadow-2xl shadow-black/20' 
                : 'bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
              >
                <span className={`font-heading font-semibold text-base md:text-lg transition-colors duration-300 ${
                  openIndex === index ? 'text-silver-fern' : 'text-cream'
                }`}>
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${
                  openIndex === index ? 'rotate-180 text-silver-fern' : 'text-cream/30'
                }`} />
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className={`px-5 md:px-6 pb-6 font-sans leading-relaxed text-sm md:text-base ${
                  openIndex === index ? 'text-silver-fern/70' : 'text-cream/70'
                }`}>
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-4xl mx-auto mt-24 text-center bg-cream text-silver-fern p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lemon-grass/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-lemon-grass/30 transition-colors duration-700" />
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl tracking-tight text-silver-fern mb-3">{c.ctaHeading}</h2>
          <p className="font-sans text-base md:text-lg text-silver-fern/70 font-normal max-w-xl mb-8">{c.ctaSub}</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="magnetic-btn bg-silver-fern text-cream px-10 py-4 rounded-[2rem] font-bold text-base hover:bg-lemon-grass hover:text-silver-fern transition-all duration-300 shadow-xl"
          >
            {c.ctaBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
