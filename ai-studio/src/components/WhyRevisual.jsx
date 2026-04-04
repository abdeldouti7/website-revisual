import React from 'react';
import { MousePointer2, Sparkles, Zap, Check, TrendingUp } from 'lucide-react';
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
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-pebbles/5 opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-1 items-center scale-50">
            <div className="p-2 bg-white rounded-lg shadow-sm border border-pebbles/5 animate-pulse" style={{ animationDuration: '3s' }}>
              <div className="w-6 h-1.5 bg-silver-fern/20 rounded-full mb-1"></div>
              <div className="w-4 h-1.5 bg-silver-fern/10 rounded-full"></div>
            </div>
            <div className="w-4 h-[2px] bg-lemon-grass/30 relative">
              <div className="absolute inset-0 bg-lemon-grass w-full h-full animate-scan"></div>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-sm border border-pebbles/5">
              <div className="w-6 h-6 rounded flex items-center justify-center bg-silver-fern/5">
                <MousePointer2 className="w-3.5 h-3.5 text-silver-fern opacity-50" />
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
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-pebbles/5 opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="relative w-12 h-8 bg-white rounded shadow-sm border border-pebbles/5 overflow-hidden scale-75">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lemon-grass/10 to-transparent w-[200%] h-full animate-shimmer" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-1 left-1 w-2 h-2 rounded-full border border-silver-fern/20 flex items-center justify-center">
              <div className="w-0.5 h-0.5 bg-lemon-grass rounded-full"></div>
            </div>
            <div className="absolute bottom-1 right-1 w-5 h-1 bg-silver-fern/10 rounded-full"></div>
            <div className="absolute inset-0 border border-lemon-grass/20 rounded animate-flicker"></div>
          </div>
        </div>
      ),
    },
    {
      Icon: Zap,
      title: c.card3title,
      bullets: [c.card3b1, c.card3b2, c.card3b3],
      artifact: (
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-pebbles/5 opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center justify-center scale-75">
            <Zap className="w-8 h-8 text-lemon-grass animate-pulse" />
          </div>
        </div>
      ),
    },
    {
      Icon: TrendingUp,
      title: c.card4title,
      bullets: [c.card4b1, c.card4b2, c.card4b3],
      artifact: (
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-pebbles/5 opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="relative flex flex-col items-center scale-[0.6]">
            <TrendingUp className="w-8 h-8 text-lemon-grass mb-1" />
            <div className="font-heading font-bold text-xl text-silver-fern leading-none text-center">2X</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 3xl:py-32 4xl:py-48 px-5 lg:px-10 w-full bg-cream">
      <div className="max-w-7xl 3xl:max-w-9xl 4xl:max-w-10xl mx-auto">
        <div className="text-center mb-12 3xl:mb-16">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl 3xl:text-5xl 4xl:text-6xl text-silver-fern tracking-tight max-w-2xl mx-auto leading-tight">
            {c.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl 3xl:max-w-9xl 4xl:max-w-10xl mx-auto">
          {cards.map(({ Icon, title, bullets, artifact }, i) => (
            <div key={i} className="bg-white p-6 lg:p-8 3xl:p-12 rounded-[2rem] shadow-premium border border-white/5 hover-lift flex flex-col group transition-all duration-300 hover:border-lemon-grass/50 hover:shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 3xl:w-16 3xl:h-16 bg-cream rounded-2xl flex items-center justify-center border border-pebbles/5 shrink-0">
                  <Icon className="w-6 h-6 3xl:w-8 3xl:h-8 text-silver-fern" />
                </div>
                <h3 className="font-heading font-semibold text-xl 3xl:text-2xl text-silver-fern leading-tight">{title}</h3>
              </div>
              <ul className="space-y-4 font-sans text-pebbles/80 text-sm 3xl:text-base mt-auto relative z-10 pr-16 3xl:pr-24">
                {bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-lemon-grass shrink-0 mt-[1px]" />
                    <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>
              {artifact}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRevisual;
