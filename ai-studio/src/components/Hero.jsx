import React, { useEffect, useRef } from 'react';
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
    { base: roomBefore, reveal: roomAfter },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(elementsRef.current.filter(Boolean), {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      });

      if (sliderRef.current && pairsRef.current.length > 0) {
        gsap.set('.gsap-reveal-layer', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' });
        gsap.set(sliderRef.current, { left: '0%' });

        const tl = gsap.timeline({ repeat: -1 });
        const slideDur = 2.55;
        const pauseDelay = '+=0.5';

        tl.to('.gsap-reveal-layer', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: slideDur, ease: 'power2.inOut' }, '+=1.5')
          .to(sliderRef.current, { left: '100%', duration: slideDur, ease: 'power2.inOut' }, '<');

        tl.to('.gsap-reveal-layer', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', duration: slideDur, ease: 'power2.inOut' }, pauseDelay)
          .to(sliderRef.current, { left: '0%', duration: slideDur, ease: 'power2.inOut' }, '<');

        tl.to(pairsRef.current[0], { opacity: 0, duration: 0.8 }, pauseDelay)
          .to(pairsRef.current[1], { opacity: 1, duration: 0.8 }, '<');

        tl.to('.gsap-reveal-layer', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: slideDur, ease: 'power2.inOut' }, pauseDelay)
          .to(sliderRef.current, { left: '100%', duration: slideDur, ease: 'power2.inOut' }, '<');

        tl.to('.gsap-reveal-layer', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', duration: slideDur, ease: 'power2.inOut' }, pauseDelay)
          .to(sliderRef.current, { left: '0%', duration: slideDur, ease: 'power2.inOut' }, '<');

        tl.to(pairsRef.current[1], { opacity: 0, duration: 0.8 }, pauseDelay)
          .to(pairsRef.current[0], { opacity: 1, duration: 0.8 }, '<');
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-cream"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80"
          alt="Cinematic architectural space"
          className="w-full h-full object-cover scale-105 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/95 to-cream/40" />
      </div>

      {/* Main content — responsive grid */}
      <div className="relative z-10 w-full max-w-7xl 3xl:max-w-9xl 4xl:max-w-10xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 4xl:pt-64 4xl:pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT — Text */}
          <div className="flex flex-col">
            <h1 className="flex flex-col leading-[0.92] tracking-tighter">
              <span
                ref={el => elementsRef.current[0] = el}
                className="font-drama italic text-lemon-grass text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl 4xl:text-[8rem]"
              >
                {c.line1}
              </span>
              <span
                ref={el => elementsRef.current[1] = el}
                className="font-heading font-semibold text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl 4xl:text-[8rem] mt-1"
              >
                {c.line2}
              </span>
              <span
                ref={el => elementsRef.current[2] = el}
                className="font-heading font-semibold text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl 4xl:text-[8rem] mt-2 leading-[0.92]"
              >
                {c.line3}
              </span>
            </h1>

            <p
              ref={el => elementsRef.current[3] = el}
              className="mt-8 text-pebbles/80 font-sans text-lg md:text-xl 3xl:text-2xl 4xl:text-3xl max-w-xl 3xl:max-w-2xl font-semibold leading-relaxed"
            >
              {c.sub}
            </p>

            <div
              ref={el => elementsRef.current[4] = el}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="magnetic-btn bg-silver-fern text-cream px-7 py-3.5 rounded-[2rem] font-medium text-base hover:bg-lemon-grass hover:text-pebbles transition-all duration-300 shadow-lg shadow-silver-fern/20 w-full sm:w-auto text-center"
              >
                {c.ctaPrimary}
              </button>
              <button
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="magnetic-btn bg-white border-2 border-silver-fern text-silver-fern px-7 py-3.5 rounded-[2rem] font-medium text-base flex items-center justify-center gap-2 hover:bg-cream transition-colors w-full sm:w-auto"
              >
                {c.ctaSecondary}
              </button>
            </div>
          </div>

          {/* RIGHT — Before/After card */}
          <div ref={el => elementsRef.current[5] = el} className="w-full">
            <div className="bg-white/80 backdrop-blur-xl border border-primary/10 p-3 lg:p-4 rounded-[2.5rem] shadow-2xl">
              <div className="bg-background rounded-[2rem] overflow-hidden relative aspect-[4/3] w-full">
                {imagePairs.map((pair, idx) => (
                  <div
                    key={idx}
                    ref={el => pairsRef.current[idx] = el}
                    className="absolute inset-0 w-full h-full"
                    style={{ opacity: idx === 0 ? 1 : 0, zIndex: idx }}
                  >
                    <img
                      src={pair.base}
                      className="absolute inset-0 w-full h-full object-cover opacity-90"
                      alt={c.beforeLabel}
                    />
                    <div
                      className="gsap-reveal-layer absolute inset-0 w-full h-full z-10"
                      style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                    >
                      <img
                        src={pair.reveal}
                        className="w-full h-full object-cover opacity-90"
                        alt={c.afterLabel}
                      />
                    </div>
                  </div>
                ))}

                {/* Slider line */}
                <div
                  ref={sliderRef}
                  className="absolute top-0 bottom-0 w-[1px] bg-lemon-grass/80 shadow-[0_0_10px_rgba(140,207,63,0.8)] z-20"
                  style={{ left: '0%' }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-accent rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm">
                    <div className="flex gap-1">
                      <div className="w-0.5 h-3 bg-lemon-grass rounded-full" />
                      <div className="w-0.5 h-3 bg-lemon-grass rounded-full" />
                    </div>
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
