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
    <section className="py-24 bg-cream px-5 lg:px-10 border-t border-silver-fern/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading font-semibold text-3xl text-silver-fern mb-3">{c.heading}</h2>
          <p className="font-sans text-base text-pebbles/70 font-normal max-w-xl mx-auto">{c.sub}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-silver-fern/10 rounded-[1.5rem] overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white shadow-sm' : 'bg-white/50 hover:border-lemon-grass/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
              >
                <span className="font-heading font-semibold text-base md:text-lg text-silver-fern">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-pebbles/30 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-silver-fern' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 md:px-5 pb-4 md:pb-5 font-sans text-pebbles/70 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-4xl mx-auto mt-24 text-center bg-silver-fern text-cream p-10 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lemon-grass/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl tracking-tight text-cream mb-3">{c.ctaHeading}</h2>
          <p className="font-sans text-base md:text-lg text-cream/80 font-normal max-w-xl mb-8">{c.ctaSub}</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="magnetic-btn bg-lemon-grass text-pebbles px-10 py-4 rounded-[2rem] font-bold text-base hover:bg-cream hover:text-silver-fern transition-all duration-300 shadow-xl"
          >
            {c.ctaBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
