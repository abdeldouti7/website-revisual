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
    <section className="py-24 bg-white px-5 lg:px-10 border-t border-black/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading font-semibold text-3xl text-primary mb-3">{c.heading}</h2>
          <p className="font-sans text-base text-dark/70 font-normal max-w-xl mx-auto">{c.sub}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-black/5 rounded-[1.5rem] overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-background shadow-sm' : 'bg-white hover:border-black/10'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
              >
                <span className="font-heading font-semibold text-base md:text-lg text-primary">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary/50 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 md:px-5 pb-4 md:pb-5 font-sans text-dark/70 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-4xl mx-auto mt-24 text-center bg-primary text-background p-10 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl tracking-tight mb-3">{c.ctaHeading}</h2>
          <p className="font-sans text-base md:text-lg text-background/80 font-normal max-w-xl mb-8">{c.ctaSub}</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="magnetic-btn bg-white text-primary px-8 py-4 rounded-[2rem] font-medium text-base hover:bg-neutral transition-colors shadow-xl"
          >
            {c.ctaBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
