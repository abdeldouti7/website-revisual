import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../LanguageContext';
import t from '../translations';
import bathBefore from '../../../footage/badkamer 1.png';
import bathAfter from '../../../footage/badkamerafter.png';
import roomBefore from '../../../footage/room 1.png';
import roomAfter from '../../../footage/room 2.png';

const Hero = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);
  const sliderRef = useRef(null);
  const pairsRef = useRef([]);
  const { lang } = useLanguage();
  const c = t[lang].hero;

  const imagePairs = [
    { base: bathBefore, reveal: bathAfter },
    { base: roomBefore, reveal: roomAfter }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(elementsRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      if (sliderRef.current && pairsRef.current.length > 0) {
        gsap.set('.gsap-reveal-layer', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' });
        gsap.set(sliderRef.current, { left: '0%' });

        const tl = gsap.timeline({ repeat: -1 });
        const slideDur = 2.55;
        const pauseDelay = "+=0.5";

        tl.to('.gsap-reveal-layer', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: slideDur, ease: "power2.inOut" }, "+=1.5")
          .to(sliderRef.current, { left: '100%', duration: slideDur, ease: "power2.inOut" }, "<");

        tl.to('.gsap-reveal-layer', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', duration: slideDur, ease: "power2.inOut" }, pauseDelay)
          .to(sliderRef.current, { left: '0%', duration: slideDur, ease: "power2.inOut" }, "<");

        tl.to(pairsRef.current[0], { opacity: 0, duration: 0.8 }, pauseDelay)
          .to(pairsRef.current[1], { opacity: 1, duration: 0.8 }, "<");

        tl.to('.gsap-reveal-layer', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: slideDur, ease: "power2.inOut" }, pauseDelay)
          .to(sliderRef.current, { left: '100%', duration: slideDur, ease: "power2.inOut" }, "<");

        tl.to('.gsap-reveal-layer', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', duration: slideDur, ease: "power2.inOut" }, pauseDelay)
          .to(sliderRef.current, { left: '0%', duration: slideDur, ease: "power2.inOut" }, "<");

        tl.to(pairsRef.current[1], { opacity: 0, duration: 0.8 }, pauseDelay)
          .to(pairsRef.current[0], { opacity: 1, duration: 0.8 }, "<");
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden flex items-end pb-12 lg:pb-16 px-6 lg:px-12 bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80"
          alt="Cinematic architectural space"
          className="w-full h-full object-cover scale-105 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-primary flex flex-col leading-[0.9]">
            <span ref={el => elementsRef.current[0] = el} className="font-heading font-semibold text-5xl md:text-6xl tracking-tighter">
              {c.line1}
            </span>
            <span ref={el => elementsRef.current[1] = el} className="font-heading font-semibold text-5xl md:text-6xl tracking-tighter mt-1">
              {c.line2}
            </span>
            <span ref={el => elementsRef.current[2] = el} className="font-drama italic text-5xl md:text-7xl text-primary mt-2 md:mt-1 leading-[0.9]">
              {c.line3}<br/>{c.line4}
            </span>
          </h1>
          <p ref={el => elementsRef.current[3] = el} className="mt-6 text-primary/80 font-sans text-base md:text-lg max-w-lg font-normal">
            {c.sub}
          </p>
          <div ref={el => elementsRef.current[4] = el} className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-btn bg-primary text-white px-7 py-3.5 rounded-[2rem] font-medium text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              {c.ctaPrimary}
            </button>
            <button
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-btn bg-white border-2 border-primary text-primary px-7 py-3.5 rounded-[2rem] font-medium text-base flex items-center gap-2 hover:bg-primary/5 transition-colors"
            >
              {c.ctaSecondary}
            </button>
          </div>
        </div>

        <div ref={el => elementsRef.current[5] = el} className="w-full lg:w-[40%] pt-12 lg:pt-0">
          <div className="bg-white/80 backdrop-blur-xl border border-primary/10 p-3 lg:p-4 rounded-[2.5rem] shadow-2xl">
            <div className="bg-background rounded-[2rem] overflow-hidden relative aspect-[4/3]">
              {imagePairs.map((pair, idx) => (
                <div
                  key={idx}
                  ref={el => pairsRef.current[idx] = el}
                  className="absolute inset-0 w-full h-full"
                  style={{ opacity: idx === 0 ? 1 : 0, zIndex: idx }}
                >
                  <img
                    src={pair.base}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                    alt={c.beforeLabel}
                  />
                  <div
                    className="gsap-reveal-layer absolute inset-0 w-full h-full z-10"
                    style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                  >
                    <img
                      src={pair.reveal}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                      alt={c.afterLabel}
                    />
                  </div>
                </div>
              ))}

              <div
                ref={sliderRef}
                className="absolute top-0 bottom-0 left-0 w-[1px] bg-accent/80 shadow-[0_0_10px_rgba(245,158,11,0.8)] z-20"
                style={{ left: '0%' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-accent rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-3 bg-accent rounded-full" />
                    <div className="w-0.5 h-3 bg-accent rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
