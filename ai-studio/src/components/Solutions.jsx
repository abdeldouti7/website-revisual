import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MousePointer2, UploadCloud, CheckSquare, Globe } from 'lucide-react';

const Solutions = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".solution-card", {
        y: 80,
        opacity: 0,
        duration: 1,
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

  return (
    <section id="product" ref={containerRef} className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-silver-fern tracking-tight">Solutions</h2>
        <p className="mt-4 font-sans text-lg text-pebbles/70 max-w-2xl mx-auto font-light">
          We make it possible to visualize the potential of every property listing without creating extra work for your team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Solution 1: Virtual Staging (Diagnostic Shuffler) */}
        <div className="solution-card bg-white p-8 rounded-[2.5rem] shadow-sm border border-silver-fern/10 hover:border-lemon-grass/50 transition-colors flex flex-col justify-between group">
          <div className="relative h-48 bg-cream rounded-[1.5rem] overflow-hidden p-6 mb-8 flex flex-col items-center justify-center">
            {/* Mock Shuffler UI */}
            <div className="w-full relative h-full">
              <div className="absolute inset-0 bg-white rounded-xl shadow-md p-4 transform transition-all duration-700 ease-in-out group-hover:-translate-y-4 group-hover:scale-[0.98] z-30 flex flex-col justify-center border border-silver-fern/5">
                <div className="text-xs font-mono text-pebbles/50 mb-1">METRIC 01</div>
                <div className="font-heading font-bold text-lg text-silver-fern">Style switch</div>
                <div className="mt-4 flex items-end gap-2 text-silver-fern font-bold text-2xl">
                  +32% <span className="text-xs text-pebbles/50 mb-1 font-sans">time-on-listing</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/80 rounded-xl shadow-sm p-4 transform translate-y-3 scale-[0.95] z-20 border border-black/5"></div>
              <div className="absolute inset-0 bg-white/40 rounded-xl shadow-sm p-4 transform translate-y-6 scale-[0.90] z-10 border border-black/5"></div>
            </div>
          </div>
          <div>
            <h3 className="font-heading font-bold text-2xl text-silver-fern mb-3">Virtual Staging</h3>
            <p className="font-sans text-pebbles/70 leading-relaxed text-sm">
              We add highly realistic furniture and decor to empty spaces, fully handled by our team from start to finish.
            </p>
          </div>
        </div>

        {/* Solution 2: Virtual Renovation (Cursor Protocol Scheduler) */}
        <div className="solution-card bg-white p-8 rounded-[2.5rem] shadow-sm border border-silver-fern/10 hover:border-lemon-grass/50 transition-colors flex flex-col justify-between">
          <div className="relative h-48 bg-cream rounded-[1.5rem] p-6 mb-8 flex items-center justify-center">
            <div className="flex flex-col gap-3 w-full max-w-[200px] relative">
              <div className="bg-white px-3 py-2 rounded-xl shadow-sm border border-silver-fern/5 flex items-center gap-3">
                <UploadCloud className="w-4 h-4 text-pebbles/40" />
                <span className="font-sans text-xs font-semibold text-silver-fern">Provide photos</span>
              </div>
              <div className="bg-white px-3 py-2 rounded-xl shadow-sm border border-silver-fern/5 flex items-center gap-3">
                <CheckSquare className="w-4 h-4 text-lemon-grass" />
                <span className="font-sans text-xs font-semibold text-silver-fern">We process</span>
              </div>
              <div className="bg-silver-fern px-3 py-2 rounded-xl shadow-md flex items-center gap-3 text-cream">
                <Globe className="w-4 h-4 text-lemon-grass" />
                <span className="font-sans text-xs font-semibold">Receive renders</span>
              </div>
              {/* Fake cursor */}
              <div className="absolute -right-4 bottom-2 text-pebbles transform -rotate-12 animate-bounce">
                <MousePointer2 className="w-5 h-5 fill-lemon-grass stroke-[1.5]" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-heading font-bold text-2xl text-silver-fern mb-3">Virtual Renovation</h3>
            <p className="font-sans text-pebbles/70 leading-relaxed text-sm">
              Visualize complete renovations without physical work. We deliver a polished, updated version of outdated spaces.
            </p>
          </div>
        </div>

        {/* Solution 3: Property Revisualisation (Telemetry Typewriter) */}
        <div className="solution-card bg-silver-fern text-cream p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lemon-grass/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative h-48 bg-pebbles/50 rounded-[1.5rem] p-6 mb-8 border border-cream/10 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-lemon-grass animate-pulse"></div>
              <div className="text-[10px] font-mono tracking-wider text-cream/50 uppercase">Live Feed</div>
            </div>
            <div className="font-mono text-[10px] space-y-3 text-lemon-grass/80 overflow-hidden relative h-full">
              <div className="flex gap-2 opacity-50"><span className="text-cream/30">12:04</span> High intent session</div>
              <div className="flex gap-2 opacity-70"><span className="text-cream/30">12:05</span> Configure started: living</div>
              <div className="flex gap-2 bg-lemon-grass/20 -mx-2 px-2 py-1 rounded text-lemon-grass"><span className="text-cream/30">12:06</span> Generate clicked: Japandi</div>
              <div className="flex gap-2 opacity-50"><span className="text-cream/30">12:08</span> Lead warmed & captured</div>
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-2xl text-cream mb-3">Multi-style Property Visuals</h3>
            <p className="font-sans text-cream/70 leading-relaxed text-sm">
              We generate brand new styles automatically, allowing buyers to see multiple possibilities for the same room instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
