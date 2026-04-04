import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import t from '../translations';

gsap.registerPlugin(ScrollTrigger);

const InteractiveDemo = () => {
  const [mode, setMode] = useState('staging');
  const [style, setStyle] = useState('Japandi');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [showInfo, setShowInfo] = useState(false);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const { lang } = useLanguage();
  const c = t[lang].demo;

  const images = {
    staging: {
      before: '/footage/room 1.png',
      Modern: '/footage/modern room.png',
      Japandi: '/footage/japandi.png',
      Scandinavian: '/footage/scandinavian.png',
    },
    renovation: {
      before: '/footage/badkamer 1.png',
      Modern: '/footage/modern bathroom.png',
      Japandi: '/footage/japandibathroom.png',
      Scandinavian: '/footage/scandibathroom.png',
    }
  };

  const styleKeys = ['Modern', 'Japandi', 'Scandinavian'];
  const styleLabels = {
    Modern: c.styleModern,
    Japandi: c.styleJapandi,
    Scandinavian: c.styleScandinavian,
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".demo-anim", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to({ value: 50 }, {
            value: 100, duration: 1.2, ease: "power2.inOut", delay: 0.5,
            onUpdate: function() { setSliderPosition(this.targets()[0].value); },
            onComplete: () => {
              gsap.to({ value: 100 }, {
                value: 50, duration: 1, ease: "power2.out", delay: 0.2,
                onUpdate: function() { setSliderPosition(this.targets()[0].value); }
              });
            }
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handlePointerMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const benefits = [c.benefit1, c.benefit2, c.benefit3, c.benefit4];

  return (
    <section id="demo" ref={containerRef} className="py-16 sm:py-24 3xl:py-32 4xl:py-44 px-4 sm:px-5 lg:px-10 max-w-7xl 3xl:max-w-9xl 4xl:max-w-10xl mx-auto bg-cream">
      <div className="demo-anim text-center mb-10 3xl:mb-16 max-w-3xl 3xl:max-w-5xl mx-auto">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl 3xl:text-7xl 4xl:text-8xl text-silver-fern tracking-tight max-w-2xl 3xl:max-w-4xl mx-auto leading-tight mb-4">
          {c.heading1}{' '}
          <span className="text-lemon-grass font-drama italic tracking-normal relative inline-block group cursor-default">
            {c.headingItalic}
            <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-lemon-grass rounded-full animate-line-swipe"></span>
          </span>
        </h2>
        <p className="mt-5 font-sans text-base 3xl:text-xl 4xl:text-2xl text-pebbles/70 leading-relaxed font-normal">
          {c.sub}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="demo-anim w-full lg:w-[60%] flex flex-col items-center">
          {/* Style Selector */}
          <div className="flex items-center justify-center gap-1.5 mb-5 bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-primary/10 shadow-sm w-full max-w-md">
            {styleKeys.map((s) => (
              <button
                key={s}
                onClick={() => setStyle(s)}
                className={`flex-1 px-2 sm:px-4 py-2 sm:py-2.5 rounded-full font-sans text-xs sm:text-sm font-medium transition-all duration-300 ${
                  style === s ? 'bg-silver-fern text-cream shadow-md' : 'text-silver-fern/70 hover:text-silver-fern hover:bg-lemon-grass/10'
                }`}
              >
                {styleLabels[s]}
              </button>
            ))}
          </div>

          {/* Interactive Slider */}
          <div
            onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); handlePointerMove(e); }}
            onPointerMove={(e) => e.buttons === 1 && handlePointerMove(e)}
            onPointerUp={(e) => e.currentTarget.releasePointerCapture(e.pointerId)}
            ref={sliderRef}
            className="relative w-full aspect-[16/10] bg-white rounded-[2rem] overflow-hidden select-none touch-none shadow-2xl border border-silver-fern/10 cursor-ew-resize group"
          >
            <div className="absolute inset-0">
              <img src={images[mode][style]} alt="Revisualized version" className="w-full h-full object-cover" draggable="false" />
              <div className="absolute bottom-4 right-4 bg-silver-fern/80 backdrop-blur-md text-cream text-xs font-medium px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                {c.afterLabel}
              </div>
            </div>
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
              <img src={images[mode].before} alt="Original property" className="w-full h-full object-cover pointer-events-none" draggable="false" />
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md text-silver-fern text-xs font-medium px-3 py-1.5 rounded-full border border-lemon-grass/20 shadow-lg">
                {c.beforeLabel}
              </div>
            </div>
            <div
              className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-10"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 pointer-events-none">
                <div className="absolute inset-0 bg-silver-fern/10 rounded-full animate-pulse-handle" />
                <div className="absolute inset-2 bg-white rounded-full shadow-2xl flex items-center justify-center border border-silver-fern/10 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-silver-fern text-cream px-3 py-1 rounded-md text-[11px] font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    {c.slideCompare}
                  </div>
                  <div className="flex gap-1.5 translate-y-0.5">
                    <div className="w-[3px] h-4 bg-silver-fern/30 rounded-full group-hover:bg-silver-fern/60 transition-colors" />
                    <div className="w-[3px] h-4 bg-silver-fern/30 rounded-full group-hover:bg-silver-fern/60 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mode Selector */}
          <div className="flex flex-col items-center w-full max-w-md mt-8">
            <div className="flex w-full items-center justify-center gap-4">
              {[
                { id: 'staging', label: c.modeStaging },
                { id: 'renovation', label: c.modeRenovation }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`flex-1 px-4 py-2.5 rounded-[1.5rem] font-sans text-sm font-medium transition-all duration-300 border ${
                    mode === m.id ? 'border-silver-fern bg-silver-fern text-cream shadow-md' : 'bg-white border-silver-fern/10 text-silver-fern/70 hover:border-silver-fern/30'
                  }`}
                >
                  {m.label}
                </button>
              ))}
              <button
                onClick={() => setShowInfo(!showInfo)}
                className={`w-10 h-10 rounded-[1.5rem] flex items-center justify-center font-medium text-base transition-all duration-300 border ${
                  showInfo ? 'border-silver-fern bg-silver-fern text-cream shadow-md' : 'bg-white border-silver-fern/10 text-silver-fern/70 hover:border-silver-fern/30'
                }`}
                aria-label="Toggle explanations"
              >
                ?
              </button>
            </div>

            <div className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${showInfo ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
              <div className="bg-white border border-silver-fern/10 rounded-2xl p-4 text-left shadow-sm">
                <div className="mb-3">
                  <strong className="block text-silver-fern text-sm font-bold mb-0.5">{c.vsTitle}</strong>
                  <span className="text-pebbles/70 text-xs leading-relaxed">{c.vsDesc}</span>
                </div>
                <div>
                  <strong className="block text-silver-fern text-sm font-bold mb-0.5">{c.vrTitle}</strong>
                  <span className="text-pebbles/70 text-xs leading-relaxed">{c.vrDesc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="demo-anim w-full lg:w-[40%] flex flex-col justify-center">
          <h3 className="font-heading font-semibold text-2xl md:text-3xl text-silver-fern mb-6 leading-tight">
            {c.rightHeading}
          </h3>

          <ul className="space-y-4 mb-8">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-lemon-grass shrink-0 mt-0.5" />
                <span className="font-sans text-pebbles/80 font-medium text-base leading-snug" dangerouslySetInnerHTML={{ __html: benefit }}></span>
              </li>
            ))}
          </ul>

          <div className="bg-white border border-silver-fern/10 shadow-sm p-6 rounded-[1.5rem] mt-2 mb-6 relative">
            <div className="absolute -top-3 -left-3 text-4xl text-silver-fern font-serif leading-none">"</div>
            <p className="font-sans text-silver-fern/90 italic text-base font-medium leading-relaxed relative z-10">
              {c.stat}
            </p>
            <p className="font-sans text-silver-fern/50 text-xs mt-3 uppercase tracking-wider font-bold">
              {c.statSource}
            </p>
          </div>

          <p className="font-sans text-[13px] md:text-sm text-pebbles/70 mb-6 font-bold italic leading-relaxed md:pr-4">
            {c.desc}
          </p>

          <div className="pt-2">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-btn w-full md:w-auto bg-silver-fern text-cream px-6 py-3 rounded-[2rem] font-medium text-base hover:bg-lemon-grass hover:text-pebbles transition-all duration-300 shadow-md shadow-silver-fern/20 inline-block text-center"
            >
              {c.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
