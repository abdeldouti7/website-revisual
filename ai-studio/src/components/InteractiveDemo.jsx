import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InteractiveDemo = () => {
  const [mode, setMode] = useState('staging');
  const [style, setStyle] = useState('Japandi');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [showInfo, setShowInfo] = useState(false);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  // Use public paths for stability
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

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".demo-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // One-time automatic slider animation on scroll into view
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to({ value: 50 }, {
            value: 100,
            duration: 1.2,
            ease: "power2.inOut",
            delay: 0.5,
            onUpdate: function() {
              setSliderPosition(this.targets()[0].value);
            },
            onComplete: () => {
              gsap.to({ value: 100 }, {
                value: 50,
                duration: 1,
                ease: "power2.out",
                delay: 0.2,
                onUpdate: function() {
                  setSliderPosition(this.targets()[0].value);
                }
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
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <section id="demo" ref={containerRef} className="py-24 px-5 lg:px-10 max-w-7xl mx-auto">
      <div className="demo-anim text-center mb-10 max-w-3xl mx-auto">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl text-primary tracking-tight max-w-2xl mx-auto leading-tight mb-4">
          See the potential{' '}
          <span className="text-primary font-drama italic tracking-normal relative inline-block group cursor-default">
            instantly
            <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-primary rounded-full animate-line-swipe"></span>
          </span>
        </h2>
        <p className="mt-5 font-sans text-base text-dark/70 leading-relaxed font-normal">
          Instantly reveal a property’s potential without adding work for your team.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column (60%) */}
        <div className="demo-anim w-full lg:w-[60%] flex flex-col items-center">
          
          {/* Style Selector */}
          <div className="flex items-center justify-center gap-2 mb-6 bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-primary/10 shadow-sm w-full max-w-md">
            {['Modern', 'Japandi', 'Scandinavian'].map((s) => (
              <button
                key={s}
                onClick={() => setStyle(s)}
                className={`flex-1 px-4 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                  style === s 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-primary/70 hover:text-primary hover:bg-black/5'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Interactive Slider */}
          <div 
            ref={sliderRef}
            className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-background/50 rounded-[2rem] overflow-hidden select-none touch-none shadow-2xl border border-primary/5 cursor-ew-resize group"
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              handlePointerMove(e);
            }}
            onPointerMove={(e) => e.buttons === 1 && handlePointerMove(e)}
            onPointerUp={(e) => e.currentTarget.releasePointerCapture(e.pointerId)}
          >
            {/* After Image */}
            <div className="absolute inset-0">
              <img 
                src={images[mode][style]} 
                alt="Revisualized version" 
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                After
              </div>
            </div>

            {/* Before Image */}
            <div 
              className="absolute inset-0 overflow-hidden" 
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={images[mode].before} 
                alt="Original property" 
                className="w-full h-full object-cover pointer-events-none"
                draggable="false"
              />
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md text-primary text-xs font-medium px-3 py-1.5 rounded-full border border-primary/20 shadow-lg">
                Before
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border border-primary/10 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/80 backdrop-blur-md text-primary px-2.5 py-1 rounded text-[10px] font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Slide to compare
                </div>
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-primary/40 rounded-full" />
                  <div className="w-0.5 h-4 bg-primary/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Mode Selector */}
          <div className="flex flex-col items-center w-full max-w-md mt-8">
            <div className="flex w-full items-center justify-center gap-4">
              {[
                { id: 'staging', label: 'Virtual Staging' },
                { id: 'renovation', label: 'Virtual Renovation' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`flex-1 px-4 py-2.5 rounded-[1.5rem] font-sans text-sm font-medium transition-all duration-300 border ${
                    mode === m.id 
                      ? 'border-primary bg-primary text-white shadow-md' 
                      : 'bg-white border-primary/10 text-primary/70 hover:border-primary/30'
                  }`}
                >
                  {m.label}
                </button>
              ))}
              <button 
                onClick={() => setShowInfo(!showInfo)}
                className={`w-10 h-10 rounded-[1.5rem] flex items-center justify-center font-medium text-base transition-all duration-300 border ${
                  showInfo 
                    ? 'border-primary bg-primary text-white shadow-md' 
                    : 'bg-white border-primary/10 text-primary/70 hover:border-primary/30'
                }`}
                aria-label="Toggle explanations"
              >
                ?
              </button>
            </div>
            
            {/* Info Explanation Box */}
            <div className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${showInfo ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
              <div className="bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-4 text-left shadow-sm">
                <div className="mb-3">
                  <strong className="block text-primary text-sm font-bold mb-0.5">Virtual Staging</strong>
                  <span className="text-dark/70 text-xs leading-relaxed">Adds realistic furniture and styling to empty spaces so buyers can imagine living there.</span>
                </div>
                <div>
                  <strong className="block text-primary text-sm font-bold mb-0.5">Virtual Renovation</strong>
                  <span className="text-dark/70 text-xs leading-relaxed">Shows a renovated version of outdated interiors without physical construction.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (40%) */}
        <div className="demo-anim w-full lg:w-[40%] flex flex-col justify-center">
          <h3 className="font-heading font-semibold text-2xl md:text-3xl text-primary mb-6 leading-tight">
            From uncertainty to clear value
          </h3>
          
          <ul className="space-y-4 mb-8">
            {[
              'More qualified buyer inquiries',
              'Less price pressure during negotiations',
              'Faster sales for empty or outdated properties',
              'Avoid thousands in negotiation losses caused by poor presentations.'
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="font-sans text-dark/80 font-medium text-base leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white border border-primary/10 shadow-sm p-6 rounded-[1.5rem] mt-2 mb-6 relative">
            <div className="absolute -top-3 -left-3 text-4xl text-primary font-serif leading-none">"</div>
            <p className="font-sans text-primary/90 italic text-base font-medium leading-relaxed relative z-10">
              81% of buyers say staging helps visualize a property’s potential
            </p>
            <p className="font-sans text-primary/50 text-xs mt-3 uppercase tracking-wider font-bold">
              — National Association of Realtors
            </p>
          </div>

          <p className="font-sans text-[13px] md:text-sm text-dark/70 mb-6 font-bold italic leading-relaxed md:pr-4">
            Automatically add Revisuals (visual upgrades) to your listings with an interactive slider.
          </p>

          <div className="pt-2">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-btn w-full md:w-auto bg-primary text-white px-6 py-3 rounded-[2rem] font-medium text-base hover:opacity-90 transition-opacity shadow-md shadow-primary/20 inline-block text-center"
            >
              Upgrade your properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
