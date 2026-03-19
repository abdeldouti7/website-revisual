import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Heart, MessageCircle, Share2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';
import t from '../translations';

gsap.registerPlugin(ScrollTrigger);

const ContentGeneration = () => {
  const containerRef = useRef(null);
  const visualContainerRef = useRef(null);
  const timelineRef = useRef(null);
  const timerRef = useRef(null);
  const { lang } = useLanguage();
  const c = t[lang].content;

  useEffect(() => {
    let ctx = gsap.context(() => {
      const playBigAnimation = () => {
        if (timelineRef.current && timelineRef.current.isActive()) return;
        const tl = gsap.timeline();
        timelineRef.current = tl;
        tl.to(".mockup-photo", {
          x: (i, el) => {
            const rect = el.getBoundingClientRect();
            const parentRect = visualContainerRef.current.getBoundingClientRect();
            return (parentRect.width / 2) - (rect.left - parentRect.left + rect.width / 2);
          },
          y: (i, el) => {
            const rect = el.getBoundingClientRect();
            const innerRect = el.closest('.mockup-inner-container').getBoundingClientRect();
            return (innerRect.height / 2) - (rect.top - innerRect.top + rect.height / 2);
          },
          scale: 0.1, opacity: 0, duration: 0.7, stagger: 0.04, ease: "power2.in"
        })
        .to(".video-mockup-frame", { boxShadow: "0 0 40px rgba(14, 59, 42, 0.4)", duration: 0.3, yoyo: true, repeat: 1, ease: "power2.out" }, "-=0.1")
        .to(".mockup-photo", {
          x: 0, y: 0, opacity: 1, scale: 1, duration: 1.2,
          stagger: { each: 0.08, from: "end" }, ease: "back.out(1.7)",
          onComplete: () => {
            gsap.to(".mockup-photo", { y: "-=6", rotation: "1deg", duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: { each: 0.5, from: "random" } });
          }
        }, "-=0.2");
      };

      gsap.from(".content-anim-left", {
        x: -40, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 70%" }
      });

      ScrollTrigger.create({
        trigger: ".mockup-visual-container",
        start: "top 80%",
        once: true,
        onEnter: () => playBigAnimation()
      });
    }, containerRef);

    return () => { ctx.revert(); if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const bullets = [c.bullet1, c.bullet2, c.bullet3, c.bullet4];

  return (
    <section id="content-generation" ref={containerRef} className="py-24 px-5 lg:px-10 max-w-7xl mx-auto border-t border-primary/5 bg-white overflow-hidden">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading font-semibold text-3xl md:text-5xl text-primary tracking-tight">{c.heading}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
        <div className="content-anim-left lg:col-span-5 order-2 lg:order-1">
          <h3 className="font-heading font-semibold text-3xl md:text-4xl text-primary leading-tight mb-8">{c.subheading}</h3>
          <div className="space-y-8 mb-12">
            <div>
              <p className="font-sans text-sm font-bold text-accent uppercase tracking-widest mb-4">{c.formatsLabel}</p>
              <ul className="space-y-4">
                {bullets.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="font-sans text-primary/80 text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mb-10 p-6 bg-primary/5 rounded-2xl border border-primary/5 inline-block">
            <p className="font-sans text-lg text-primary font-bold">{c.ctaBox}</p>
          </div>
          <div>
            <button className="group relative inline-flex items-center justify-center px-10 py-4 font-sans text-sm font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]">
              <span className="absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/20"></span>
              <span className="relative">{c.cta}</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2" ref={visualContainerRef}>
          <div className="relative mockup-visual-container">
            <div className="relative mockup-inner-container h-[550px] flex items-center justify-center mb-0">
              <div className="mockup-photo absolute -top-12 left-1/2 -translate-x-1/2 z-0 w-40 h-56 rounded-xl overflow-hidden shadow-2xl border-2 border-white -rotate-2">
                <img src="/images/mockup/photo4.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="mockup-photo absolute top-12 right-[calc(50%+120px)] z-10 w-40 h-56 rounded-xl overflow-hidden shadow-2xl border-2 border-white -rotate-[15deg]">
                <img src="/images/mockup/photo1.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="mockup-photo absolute top-12 left-[calc(50%+120px)] z-10 w-40 h-56 rounded-xl overflow-hidden shadow-2xl border-2 border-white rotate-[15deg]">
                <img src="/images/mockup/photo2.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="mockup-photo absolute bottom-12 right-[calc(50%+120px)] z-20 w-44 h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white -rotate-6">
                <img src="/images/mockup/photo3.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="mockup-photo absolute bottom-12 left-[calc(50%+120px)] z-20 w-44 h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white rotate-6">
                <img src="/images/mockup/photo5.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-30 video-mockup-frame w-[220px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border-[8px] border-white bg-zinc-100 group">
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto">
                  <source src="/reel-content.mov" />
                </video>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end text-left h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-2 mb-2 translate-y-0">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-accent border border-white/20 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-white">R</span>
                        </div>
                        <p className="font-sans text-[11px] font-bold text-white shadow-sm">revisual.pro</p>
                      </div>
                      <p className="font-sans text-[10px] text-white/90 leading-tight">High-end property content. ✨</p>
                    </div>
                  </div>
                  <div className="absolute right-3 bottom-24 flex flex-col gap-5 items-center">
                    <Heart className="w-5 h-5 text-white/90 drop-shadow-md" />
                    <MessageCircle className="w-5 h-5 text-white/90 drop-shadow-md" />
                    <Share2 className="w-5 h-5 text-white/90 drop-shadow-md" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-[-32px]">
              <h4 className="font-heading font-semibold text-2xl text-primary mb-1">{c.video1Title}</h4>
              <p className="font-sans text-base text-dark/70">{c.video1Desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Showcase */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-32">
        <div className="flex-1 flex flex-col">
          <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden bg-primary/5 shadow-sm border border-primary/10 relative">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src="/staging-content.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mt-8 text-center px-4">
            <h4 className="font-heading font-semibold text-xl text-primary mb-2">{c.video2Title}</h4>
            <p className="font-sans text-base text-dark/70 font-medium">{c.video2Desc}</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden bg-primary/5 shadow-sm border border-primary/10 relative">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src="/renovation-content.mov" />
            </video>
          </div>
          <div className="mt-8 text-center px-4">
            <h4 className="font-heading font-semibold text-xl text-primary mb-2">{c.video3Title}</h4>
            <p className="font-sans text-base text-dark/70 font-medium">{c.video3Desc}</p>
          </div>
        </div>
      </div>

      {/* Value Statement */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading font-semibold text-3xl md:text-5xl text-primary tracking-tight text-balance mb-6">{c.tableHeading}</h2>
        <p className="font-sans text-lg text-dark/70 leading-relaxed font-normal">{c.tableSub}</p>
      </div>

      {/* Comparison Table */}
      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-premium border border-primary/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-primary/10 bg-neutral">
                <th className="py-6 px-8 font-sans font-medium text-dark/60 text-sm"></th>
                <th className="py-6 px-8 font-sans font-semibold text-primary text-base whitespace-nowrap">{c.colInHouse}</th>
                <th className="py-6 px-8 font-sans font-semibold text-primary text-base whitespace-nowrap">{c.colFreelance}</th>
                <th className="py-6 px-8 font-sans font-semibold text-primary text-base whitespace-nowrap">{c.colAgency}</th>
                <th className="py-6 px-8 font-sans font-medium text-primary text-base bg-accent/10">Revisual</th>
              </tr>
            </thead>
            <tbody className="font-sans text-sm">
              <tr className="border-b border-primary/5 hover:bg-black/[0.02] transition-colors">
                <td className="py-6 px-8 text-primary font-medium whitespace-nowrap">{c.row1Label}</td>
                <td className="py-6 px-8 text-dark/70">{c.row1InHouse}</td>
                <td className="py-6 px-8 text-dark/70">{c.row1Freelance}</td>
                <td className="py-6 px-8 text-dark/70">{c.row1Agency}</td>
                <td className="py-6 px-8 font-medium text-primary bg-accent/10 text-base">{c.row1Revisual}</td>
              </tr>
              <tr className="border-b border-primary/5 hover:bg-black/[0.02] transition-colors">
                <td className="py-6 px-8 text-primary font-medium whitespace-nowrap">{c.row2Label}</td>
                <td className="py-6 px-8 text-dark/70">{c.row2InHouse}</td>
                <td className="py-6 px-8 text-dark/70">{c.row2Freelance}</td>
                <td className="py-6 px-8 text-dark/70">{c.row2Agency}</td>
                <td className="py-6 px-8 font-medium text-primary bg-accent/10 text-base">{c.row2Revisual}</td>
              </tr>
              <tr className="border-b border-primary/5 hover:bg-black/[0.02] transition-colors">
                <td className="py-6 px-8 text-primary font-medium whitespace-nowrap">{c.row3Label}</td>
                <td className="py-6 px-8 text-dark/70">{c.row3InHouse}</td>
                <td className="py-6 px-8 text-dark/70">{c.row3Freelance}</td>
                <td className="py-6 px-8 text-dark/70">{c.row3Agency}</td>
                <td className="py-6 px-8 font-medium text-primary bg-accent/10 text-base">{c.row3Revisual}</td>
              </tr>
              <tr className="hover:bg-black/[0.02] transition-colors">
                <td className="py-6 px-8 text-primary font-medium whitespace-nowrap">{c.row4Label}</td>
                <td className="py-6 px-8 text-dark/70">{c.row4InHouse}</td>
                <td className="py-6 px-8 text-dark/70">{c.row4Freelance}</td>
                <td className="py-6 px-8 text-dark/70">{c.row4Agency}</td>
                <td className="py-6 px-8 font-medium text-primary bg-accent/10 text-base">{c.row4Revisual}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="font-sans text-xl text-primary font-medium tracking-tight">{c.footer}</p>
      </div>
    </section>
  );
};

export default ContentGeneration;
