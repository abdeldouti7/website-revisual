import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';
import t from '../translations';

gsap.registerPlugin(ScrollTrigger);

// Custom hook to handle count up animation, respecting prefers-reduced-motion
function useCountUp(endVal, duration, triggerRef) {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCount(endVal);
      return;
    }

    if (!triggerRef.current || hasTriggered) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setHasTriggered(true);
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          // ease-out quart
          const easeOut = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOut * endVal));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    
    observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [endVal, duration, triggerRef, hasTriggered]);

  return count;
}

const Stats = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const sourceRef = useRef([]);
  const numberRef = useRef(null);
  const { lang } = useLanguage();
  const c = t[lang].stats;

  const count97 = useCountUp(97, 1800, numberRef);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const noMotion = mediaQuery.matches;

      // Cards stagger entrance
      gsap.fromTo(cardsRef.current, 
        { y: noMotion ? 0 : 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        }
      );

      // Fractional value slide & fade
      gsap.fromTo(".stat-fraction",
        { y: noMotion ? 0 : 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );

      // Sources fade in with delay
      gsap.fromTo(sourceRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 1.2, // wait for numbers to settle
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 lg:py-12 px-5 lg:px-10 max-w-7xl mx-auto bg-cream">
      {/* Visual Transition Support (Header) */}
      <div className="text-center mb-8 lg:mb-10">
        <h2 className="font-heading font-semibold text-xl md:text-2xl lg:text-3xl text-silver-fern/90 tracking-tight">
          {c.heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Stat 1: Percentage */}
        <article ref={el => cardsRef.current[0] = el} className="bg-white/40 border border-silver-fern/10 rounded-[2rem] p-6 lg:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-500">
          <span className="text-lemon-grass uppercase tracking-wider text-xs md:text-sm font-bold mb-3 md:mb-4">
            {c.stat1Label}
          </span>
          <div className="font-heading font-bold text-5xl md:text-6xl text-silver-fern leading-none tracking-tighter mb-3 md:mb-4 relative">
            <span ref={numberRef} className="inline-block min-w-[2ch] text-right">{count97}</span>
            <span>{c.stat1Unit}</span>
          </div>
          <p className="font-sans text-base lg:text-[17px] text-pebbles/80 leading-relaxed max-w-xs mx-auto my-auto pt-2 pb-4">
            {c.stat1Body}
          </p>
          <div ref={el => sourceRef.current[0] = el} className="">
            <p className="text-[13px] text-pebbles/50 italic">
              {c.stat1Source}
            </p>
          </div>
        </article>

        {/* Stat 2: Fraction */}
        <article ref={el => cardsRef.current[1] = el} className="bg-white/40 border border-silver-fern/10 rounded-[2rem] p-6 lg:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-500">
          <span className="text-lemon-grass uppercase tracking-wider text-xs md:text-sm font-bold mb-3 md:mb-4">
            {c.stat2Label}
          </span>
          <div className="stat-fraction font-heading font-bold text-5xl md:text-6xl text-silver-fern leading-none tracking-tighter mb-3 md:mb-4">
            {c.stat2Value}
          </div>
          <p className="font-sans text-base lg:text-[17px] text-pebbles/80 leading-relaxed max-w-xs mx-auto my-auto pt-2 pb-4">
            {c.stat2Body}
          </p>
          <div ref={el => sourceRef.current[1] = el} className="">
            <p className="text-[13px] text-pebbles/50 italic">
              {c.stat2Source}
            </p>
          </div>
        </article>

        {/* Stat 3: Fraction */}
        <article ref={el => cardsRef.current[2] = el} className="bg-white/40 border border-silver-fern/10 rounded-[2rem] p-6 lg:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-500">
          <span className="text-lemon-grass uppercase tracking-wider text-xs md:text-sm font-bold mb-3 md:mb-4">
            {c.stat3Label}
          </span>
          <div className="stat-fraction font-heading font-bold text-5xl md:text-6xl text-silver-fern leading-none tracking-tighter mb-3 md:mb-4">
            {c.stat3Value}
          </div>
          <p className="font-sans text-base lg:text-[17px] text-pebbles/80 leading-relaxed max-w-xs mx-auto my-auto pt-2 pb-4">
            {c.stat3Body}
          </p>
          <div ref={el => sourceRef.current[2] = el} className="">
            <p className="text-[13px] text-pebbles/50 italic">
              {c.stat3Source}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Stats;
