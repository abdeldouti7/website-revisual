import React, { useEffect, useRef } from 'react';
import { UploadCloud, Palette, Sparkles, Megaphone } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../LanguageContext';
import t from '../translations';

const HowItWorks = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const { lang } = useLanguage();
  const c = t[lang].howItWorks;

  const steps = [
    { num: c.step1num, title: c.step1title, desc: c.step1desc, icon: <UploadCloud className="w-10 h-10 text-silver-fern mb-8" /> },
    { num: c.step2num, title: c.step2title, desc: c.step2desc, icon: <Palette className="w-10 h-10 text-silver-fern mb-8" /> },
    { num: c.step3num, title: c.step3title, desc: c.step3desc, icon: <Sparkles className="w-10 h-10 text-silver-fern mb-8" /> },
    { num: c.step4num, title: c.step4title, desc: c.step4desc, icon: <Megaphone className="w-10 h-10 text-silver-fern mb-8" /> },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.step-card');
      const tl = gsap.timeline({ repeat: -1 });
      timelineRef.current = tl;
      cards.forEach((card, i) => {
        const content = card.querySelector('.step-content');
        tl.to(card, { backgroundColor: 'rgba(27, 94, 59, 0.08)', borderColor: 'rgba(27, 94, 59, 0.2)', duration: 1, ease: "power2.inOut" })
          .to(content, { opacity: 1, duration: 0.5 }, "<")
          .to(card, { backgroundColor: 'rgba(27, 94, 59, 0.03)', borderColor: 'rgba(27, 94, 59, 0.05)', duration: 1, ease: "power2.inOut", delay: 2 })
          .to(content, { opacity: 0.3, duration: 0.5 }, i === cards.length - 1 ? ">" : "<");
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (e) => {
    if (timelineRef.current) timelineRef.current.pause();
    const card = e.currentTarget;
    const content = card.querySelector('.step-content');
    gsap.to(card, { backgroundColor: 'rgba(27, 94, 59, 0.15)', borderColor: 'rgba(27, 94, 59, 0.4)', scale: 1.05, boxShadow: '0 15px 35px rgba(27, 94, 59, 0.1)', duration: 0.4, overwrite: true, ease: "power2.out" });
    gsap.to(content, { opacity: 1, duration: 0.4, overwrite: true, ease: "power2.out" });
  };

  const handleMouseLeave = (e) => {
    if (timelineRef.current) timelineRef.current.play();
    const card = e.currentTarget;
    const content = card.querySelector('.step-content');
    gsap.to(card, { backgroundColor: 'rgba(27, 94, 59, 0.03)', borderColor: 'rgba(27, 94, 59, 0.05)', scale: 1, boxShadow: '0 0px 0px rgba(27, 94, 59, 0)', duration: 0.4, overwrite: 'auto', ease: "power2.inOut" });
    gsap.to(content, { opacity: 0.3, duration: 0.4, overwrite: 'auto', ease: "power2.inOut" });
  };

  return (
    <section id="how-it-works" ref={containerRef} className="bg-cream relative py-24 px-5 lg:px-10 border-t border-silver-fern/5">
      <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
        <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-silver-fern tracking-tight">{c.heading}</h2>
      </div>
      <div className="max-w-7xl mx-auto relative z-10 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="step-card bg-silver-fern/[0.03] p-6 lg:p-8 rounded-[1.5rem] border border-silver-fern/5 flex flex-col relative overflow-hidden cursor-default transition-all duration-300"
            >
              <div className="step-content opacity-30 h-full flex flex-col pointer-events-none">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-lemon-grass/5 rounded-full blur-2xl"></div>
                {step.icon}
                <div className="font-mono text-[10px] tracking-widest text-pebbles/40 font-medium mb-3 uppercase">{c.stepLabel} {step.num}</div>
                <h3 className="font-heading font-semibold text-xl text-silver-fern mb-3 leading-snug">{step.title}</h3>
                <p className="font-sans text-pebbles/70 text-[13px] leading-relaxed font-normal mt-auto">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
