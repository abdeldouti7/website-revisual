import React from 'react';
import { MousePointer2, Sparkles, Tag, Check, TrendingUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import t from '../translations';

const WhyRevisual = () => {
  const { lang } = useLanguage();
  const c = t[lang].why;

  const cards = [
    {
      Icon: MousePointer2,
      title: c.card1title,
      bullets: [c.card1b1, c.card1b2, c.card1b3],
      artifact: (
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-neutral rounded-full flex items-center justify-center border border-black/5 opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-1 items-center scale-50">
            <div className="p-2 bg-white rounded-lg shadow-sm border border-black/5 animate-pulse" style={{ animationDuration: '3s' }}>
              <div className="w-6 h-1.5 bg-primary/20 rounded-full mb-1"></div>
              <div className="w-4 h-1.5 bg-primary/10 rounded-full"></div>
            </div>
            <div className="w-4 h-[2px] bg-accent/30 relative">
              <div className="absolute inset-0 bg-accent w-full h-full animate-scan"></div>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-sm border border-black/5">
              <div className="w-6 h-6 rounded flex items-center justify-center bg-primary/5">
                <MousePointer2 className="w-3.5 h-3.5 text-primary opacity-50" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      Icon: Sparkles,
      title: c.card2title,
      bullets: [c.card2b1, c.card2b2, c.card2b3],
      artifact: (
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-neutral rounded-full flex items-center justify-center border border-black/5 opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="relative w-12 h-8 bg-white rounded shadow-sm border border-black/5 overflow-hidden scale-75">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent w-[200%] h-full animate-shimmer" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-1 left-1 w-2 h-2 rounded-full border border-primary/20 flex items-center justify-center">
              <div className="w-0.5 h-0.5 bg-accent rounded-full"></div>
            </div>
            <div className="absolute bottom-1 right-1 w-5 h-1 bg-primary/10 rounded-full"></div>
            <div className="absolute inset-0 border border-accent/20 rounded animate-flicker"></div>
          </div>
        </div>
      ),
    },
    {
      Icon: Tag,
      title: c.card3title,
      bullets: [c.card3b1, c.card3b2, c.card3b3],
      artifact: (
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-neutral rounded-full flex items-center justify-center border border-black/5 opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="flex items-end gap-0.5 px-2 scale-75">
            <div className="w-2 bg-primary/10 rounded-t h-3"></div>
            <div className="w-2 bg-primary/20 rounded-t h-4"></div>
            <div className="w-2 bg-primary/40 rounded-t h-5"></div>
            <div className="w-2 bg-accent rounded-t h-6"></div>
          </div>
        </div>
      ),
    },
    {
      Icon: TrendingUp,
      title: c.card4title,
      bullets: [c.card4b1, c.card4b2, c.card4b3],
      artifact: (
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-neutral rounded-full flex items-center justify-center border border-black/5 opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="relative flex flex-col items-center scale-[0.6]">
            <TrendingUp className="w-8 h-8 text-accent mb-1" />
            <div className="font-heading font-bold text-xl text-primary leading-none text-center">2X</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 px-5 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl text-primary tracking-tight">{c.heading}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {cards.map(({ Icon, title, bullets, artifact }, i) => (
          <div key={i} className="bg-white p-6 lg:p-8 rounded-[2rem] shadow-sm border border-black/5 hover-lift flex flex-col group transition-all duration-300 hover:border-accent/50 hover:shadow-md relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-neutral rounded-2xl flex items-center justify-center border border-black/5 shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary leading-tight">{title}</h3>
            </div>
            <ul className="space-y-4 font-sans text-dark/80 text-sm mt-auto relative z-10 pr-16">
              {bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
                  <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: b }} />
                </li>
              ))}
            </ul>
            {artifact}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyRevisual;
