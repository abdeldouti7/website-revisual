import React, { useEffect, useRef } from 'react';
import { EyeOff, TrendingDown, Hammer } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';
import t from '../translations';
import img1 from '../../../footage/ChatGPT Image 3 mrt 2026, 15_47_54.png';
import img2 from '../../../footage/badkamer 1.png';
import img3 from '../../../footage/badkamerafter.png';

gsap.registerPlugin(ScrollTrigger);

const Problem = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const { lang } = useLanguage();
  const c = t[lang].problem;

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".problem-title", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      });
      gsap.from(cardsRef.current, {
        y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: "power4.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
      });
      gsap.from(".problem-banner", {
        scale: 0.95, opacity: 0, duration: 1, ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".problem-banner", start: "top 90%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cards = [
    { img: img1, imgAlt: c.card1.imgAlt, Icon: EyeOff, title: c.card1.title, body: c.card1.body },
    { img: img2, imgAlt: c.card2.imgAlt, Icon: TrendingDown, title: c.card2.title, body: c.card2.body },
    { img: img3, imgAlt: c.card3.imgAlt, Icon: Hammer, title: c.card3.title, body: c.card3.body },
  ];

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="py-12 lg:py-24 px-5 lg:px-10 max-w-7xl mx-auto overflow-hidden bg-white"
    >
      <div className="text-center mb-16 problem-title">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary tracking-tight max-w-3xl mx-auto leading-[1.1]">
          {c.heading1}<span className="italic font-serif text-primary/70">{c.heading2}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {cards.map(({ img, imgAlt, Icon, title, body }, i) => (
          <div key={i} ref={el => cardsRef.current[i] = el} className="group flex flex-col items-start">
            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 shadow-2xl shadow-black/5 border border-black/5 relative">
              <img src={img} alt={imgAlt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 relative shrink-0">
                <Icon className="w-5 h-5 text-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-sm animate-pulse"></div>
              </div>
              <h3 className="font-heading font-bold text-2xl text-primary leading-tight">
                {title.split('\n').map((line, j) => (
                  <React.Fragment key={j}>{line}{j < title.split('\n').length - 1 && <br />}</React.Fragment>
                ))}
              </h3>
            </div>
            <p className="font-sans text-[16px] text-dark/60 leading-relaxed font-medium">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 md:mt-24 max-w-4xl mx-auto problem-banner">
        <div className="bg-primary/5 border border-primary/10 rounded-[2.5rem] md:rounded-full py-6 md:py-8 px-8 md:px-12 text-center shadow-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="font-heading font-bold italic text-lg md:text-2xl text-primary relative z-10 leading-tight">
            {c.quote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
