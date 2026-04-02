import React, { useEffect, useRef } from 'react';
import { Check, ArrowRight, Image as ImageIcon, X, MousePointer2, Video, Play } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../LanguageContext';
import t from '../translations';

const TransformationMockup = () => {
  const containerRef = useRef(null);
  const mockupRef = useRef(null);
  const buttonRef = useRef(null);
  const handleRef = useRef(null);
  const closeRef = useRef(null);
  const { lang } = useLanguage();
  const c = t[lang].mockup;

  useEffect(() => {
    let ctx = gsap.context(() => {
      const getCenter = (el) => {
        if (!el || !mockupRef.current) return { x: 50, y: 50 };
        const rect = el.getBoundingClientRect();
        const parentRect = mockupRef.current.getBoundingClientRect();
        return { x: rect.left - parentRect.left + rect.width / 2, y: rect.top - parentRect.top + rect.height / 2 };
      };
      const getPos = () => {
        if (!mockupRef.current) return { width: 300, center: 150 };
        const modalArea = document.querySelector('.ui-comparison-area');
        if (!modalArea) return { width: 300, center: 150, left: 24, top: 100 };
        const parentRect = mockupRef.current.getBoundingClientRect();
        const modalRect = modalArea.getBoundingClientRect();
        return { width: modalRect.width, left: modalRect.left - parentRect.left, top: modalRect.top - parentRect.top + modalRect.height / 2, center: modalRect.left - parentRect.left + modalRect.width / 2 };
      };

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      gsap.set(".ui-cursor", { x: 40, y: 80, opacity: 0, scale: 1 });
      gsap.set(".ui-modal", { opacity: 0, scale: 0.95, pointerEvents: 'none' });
      gsap.set(".ui-slider-handle", { left: '50%' });
      gsap.set(".ui-reveal-mask", { width: '50%' });

      const points = () => ({ button: getCenter(buttonRef.current), handle: getPos(), close: getCenter(closeRef.current) });

      tl.to(".ui-cursor", { opacity: 1, duration: 0.4 })
        .to(".ui-cursor", { x: () => points().button.x, y: () => points().button.y, duration: 1, ease: "power3.inOut" })
        .to(".ui-cursor", { scale: 0.7, duration: 0.1 })
        .to(".ui-button", { scale: 0.94, duration: 0.1 }, "<")
        .to(".ui-button", { scale: 1, duration: 0.2 })
        .to(".ui-cursor", { scale: 1, duration: 0.2 }, "<")
        .to(".ui-modal", { opacity: 1, scale: 1, pointerEvents: 'auto', duration: 0.4, ease: "back.out(1.2)" }, "+=0.1")
        .to(".ui-cursor", { x: () => points().handle.center, y: () => points().handle.top, duration: 0.7, ease: "power2.inOut" }, "+=0.3")
        .to(".ui-cursor", { scale: 0.85, duration: 0.2, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '100%' })
        .to([".ui-slider-handle", ".ui-reveal-mask"], { left: '75%', width: '75%', duration: 1.2, ease: "sine.inOut" })
        .to(".ui-cursor", { x: () => points().handle.left + (points().handle.width * 0.75), duration: 1.2, ease: "sine.inOut" }, "<")
        .to({}, { duration: 0.4 })
        .to([".ui-slider-handle", ".ui-reveal-mask"], { left: '35%', width: '35%', duration: 1.5, ease: "sine.inOut" })
        .to(".ui-cursor", { x: () => points().handle.left + (points().handle.width * 0.35), duration: 1.5, ease: "sine.inOut" }, "<")
        .to({}, { duration: 0.4 })
        .to([".ui-slider-handle", ".ui-reveal-mask"], { left: '50%', width: '50%', duration: 1, ease: "sine.inOut" })
        .to(".ui-cursor", { x: () => points().handle.center, duration: 1, ease: "sine.inOut" }, "<")
        .to(".ui-cursor", { scale: 1, duration: 0.3, backgroundColor: 'transparent' }, "+=0.3")
        .to(".ui-cursor", { x: () => points().close.x, y: () => points().close.y, duration: 0.8, ease: "power2.inOut" }, "+=0.4")
        .to(".ui-cursor", { scale: 0.7, duration: 0.1 })
        .to(".ui-close-btn", { scale: 0.8, duration: 0.1 }, "<")
        .to(".ui-modal", { opacity: 0, scale: 0.95, duration: 0.3, ease: "power2.in" })
        .to(".ui-cursor", { opacity: 0, duration: 0.4 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-cream py-14 px-5 lg:px-8 overflow-hidden" ref={containerRef}>
      <div className="max-w-[950px] mx-auto scale-90 lg:scale-100 origin-center">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 lg:gap-8 items-center">

          {/* Left: Photo Grid */}
          <div className="lg:col-span-4 lg:translate-y-2">
            <div className="mb-4">
              <h4 className="font-heading font-semibold text-lg text-silver-fern">{c.selectPhotos}</h4>
            </div>
            <div className="bg-white p-4 rounded-[2rem] border border-silver-fern/10 shadow-premium relative">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-lg bg-silver-fern/5 border border-silver-fern/10 relative flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1B5E3B_1px,transparent_1px)] [background-size:8px_8px]"></div>
                    <ImageIcon className="w-4 h-4 text-silver-fern/10" />
                    <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-silver-fern rounded-full flex items-center justify-center border border-white shadow-sm">
                      <Check className="w-2 h-2 text-white stroke-[3]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Arrow */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center py-6 lg:py-0">
            <div className="mb-2 text-center">
              <p className="font-sans text-[9px] font-bold text-lemon-grass uppercase tracking-[0.15em] leading-tight">
                {c.generateLabel.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>)}
              </p>
            </div>
            <div className="relative flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-silver-fern/10 shadow-md relative z-10">
                <ArrowRight className="w-4 h-4 text-silver-fern" />
              </div>
              <div className="absolute -inset-8 bg-lemon-grass/5 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>

          {/* Right: Outputs */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="mb-3">
                <h4 className="font-heading font-semibold text-lg text-silver-fern">{c.addedToListing}</h4>
              </div>
              <div ref={mockupRef} className="bg-white p-4 rounded-[2rem] shadow-premium border border-silver-fern/10 relative overflow-hidden h-[250px]">
                <div className="ui-cursor absolute z-50 pointer-events-none text-silver-fern opacity-0">
                  <MousePointer2 className="w-5 h-5 drop-shadow-md fill-white" />
                </div>
                <div className="aspect-[16/9] rounded-xl bg-silver-fern/5 mb-3 relative flex items-center justify-center overflow-hidden border border-silver-fern/5">
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#1B5E3B_1px,transparent_1px),linear-gradient(-45deg,#1B5E3B_1px,transparent_1px)] [background-size:20px_20px]"></div>
                  <ImageIcon className="w-6 h-6 text-silver-fern/10" />
                </div>
                <div className="flex items-end justify-between px-1">
                  <div className="flex flex-col">
                    <span className="font-heading font-bold italic text-[11px] text-silver-fern leading-tight">{c.yourListing}</span>
                    <span className="font-sans text-[10px] text-pebbles/60 leading-tight">{c.listingAddress}</span>
                  </div>
                  <button ref={buttonRef} className="ui-button bg-silver-fern text-cream px-3 py-2 rounded-lg text-[9px] font-bold shadow-sm whitespace-nowrap">
                    {c.seePotential}
                  </button>
                </div>
                {/* Modal */}
                <div className="ui-modal absolute inset-0 bg-cream/98 backdrop-blur-sm z-40 p-4 flex flex-col justify-center">
                  <div className="ui-comparison-area relative aspect-video rounded-lg overflow-hidden border border-silver-fern/10 bg-white shadow-sm">
                    <div ref={closeRef} className="ui-close-btn absolute top-2 right-2 z-10 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-silver-fern/5 shadow-md">
                      <X className="w-3.5 h-3.5 text-silver-fern" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-white">
                      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#1B5E3B_2px,transparent_2px)] [background-size:15px_15px]"></div>
                      <ImageIcon className="w-8 h-8 text-silver-fern/5" />
                      <div className="ui-reveal-mask absolute inset-0 overflow-hidden bg-white">
                        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(45deg,#1B5E3B_2px,transparent_2px)] [background-size:12px_12px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-silver-fern/10" />
                        </div>
                      </div>
                      <div ref={handleRef} className="ui-slider-handle absolute top-0 bottom-0 w-6 -ml-3 z-20 flex items-center justify-center cursor-ew-resize">
                        <div className="w-[1px] h-full bg-lemon-grass"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border border-lemon-grass shadow-premium flex items-center justify-center">
                          <div className="flex gap-[1px]">
                            <div className="w-[1px] h-2.5 bg-lemon-grass"></div>
                            <div className="w-[1px] h-2.5 bg-lemon-grass"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-white border border-silver-fern/5 text-silver-fern/30 rounded text-[6px] font-bold tracking-widest uppercase">before</div>
                      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-lemon-grass/20 border border-lemon-grass/30 text-lemon-grass rounded text-[6px] font-bold tracking-widest uppercase">after</div>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <p className="font-sans text-[8px] font-bold text-silver-fern/30 uppercase tracking-[0.2em] leading-tight">{c.upgradePreview}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3">
                <h4 className="font-heading font-semibold text-lg text-silver-fern">{c.readySocial}</h4>
              </div>
              <div className="bg-white p-4 rounded-[1.75rem] shadow-premium border border-silver-fern/10 flex gap-5 items-center">
                <div className="w-[60px] aspect-[9/16] bg-silver-fern rounded-lg overflow-hidden relative shrink-0 border border-silver-fern shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-silver-fern via-silver-fern/90 to-lemon-grass/10 opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="mb-2">
                    <h5 className="font-heading font-bold text-[11px] text-silver-fern leading-tight mb-0.5">{c.shortForm}</h5>
                    <p className="font-sans text-[10px] text-pebbles/60 leading-tight">{c.autoReels}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-3.5 h-3.5 text-lemon-grass" />
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

export default TransformationMockup;
