import React from 'react';
import { MousePointer2, Sparkles, Tag, Check, TrendingUp } from 'lucide-react';

const WhyRevisual = () => {
  return (
    <section className="py-24 px-5 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl text-primary tracking-tight">Why Real Estate Teams Choose Revisual</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-white p-6 lg:p-8 rounded-[2rem] shadow-sm border border-black/5 hover-lift flex flex-col group transition-all duration-300 hover:border-accent/50 hover:shadow-md relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 bg-neutral rounded-2xl flex items-center justify-center border border-black/5 shrink-0">
              <MousePointer2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-primary leading-tight">Effortless to use</h3>
          </div>
          
          <ul className="space-y-4 font-sans text-dark/80 text-sm mt-auto relative z-10 pr-16">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
              <span className="leading-relaxed"><strong>Integrates directly</strong> with your website and listing platforms</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
              <span className="leading-relaxed"><strong>No complex workflows</strong> or review processes</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
              <span className="leading-relaxed">No <strong>manual editing</strong>, freelancers, or revisions</span>
            </li>
          </ul>

          {/* Visual Artifact 1: Integrations - Moved & Shrunk */}
          <div className="absolute bottom-6 right-6 w-16 h-16 bg-neutral rounded-full flex items-center justify-center border border-black/5 opacity-40 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-1 items-center scale-50">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-black/5 animate-pulse" style={{ animationDuration: '3s' }}>
                <div className="w-6 h-1.5 bg-primary/20 rounded-full mb-1"></div>
                <div className="w-4 h-1.5 bg-primary/10 rounded-full"></div>
              </div>
              <div className="w-4 h-[2px] bg-accent/30 relative">
                <div className="absolute inset-0 bg-accent w-full h-full animate-scan"></div>
              </div>
              <div className="p-2 bg-white rounded-lg shadow-sm border border-black/5">
                <div className="w-6 h-6 rounded flex items-center justify-center bg-primary/5">
                  <MousePointer2 className="w-3.5 h-3.5 text-primary opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 lg:p-8 rounded-[2rem] shadow-sm border border-black/5 hover-lift flex flex-col group transition-all duration-300 hover:border-accent/50 hover:shadow-md relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 bg-neutral rounded-2xl flex items-center justify-center border border-black/5 shrink-0">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-primary leading-tight">Unmatched visual quality</h3>
          </div>

          <ul className="space-y-4 font-sans text-dark/80 text-sm mt-auto relative z-10 pr-16">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
              <span className="leading-relaxed"><strong>Photorealistic visuals</strong> powered by advanced AI</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
              <span className="leading-relaxed">Help buyers <strong>instantly visualize</strong> a property’s potential</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
              <span className="leading-relaxed"><strong>Consistent high-quality results</strong> across all listings</span>
            </li>
          </ul>

          {/* Visual Artifact 2: Visual Fidelity - Moved & Shrunk */}
          <div className="absolute bottom-6 right-6 w-16 h-16 bg-neutral rounded-full flex items-center justify-center border border-black/5 opacity-40 group-hover:opacity-100 transition-opacity">
            <div className="relative w-12 h-8 bg-white rounded shadow-sm border border-black/5 overflow-hidden scale-75">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent w-[200%] h-full animate-shimmer" style={{ animationDuration: '4s' }}></div>
              <div className="absolute top-1 left-1 w-2 h-2 rounded-full border border-primary/20 flex items-center justify-center">
                 <div className="w-0.5 h-0.5 bg-accent rounded-full"></div>
              </div>
              <div className="absolute bottom-1 right-1 w-5 h-1 bg-primary/10 rounded-full"></div>
              <div className="absolute inset-0 border border-accent/20 rounded animate-flicker"></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 lg:p-8 rounded-[2rem] shadow-sm border border-black/5 hover-lift flex flex-col group transition-all duration-300 hover:border-accent/50 hover:shadow-md relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 bg-neutral rounded-2xl flex items-center justify-center border border-black/5 shrink-0">
              <Tag className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-primary leading-tight">Predictable, scalable pricing</h3>
          </div>

          <ul className="space-y-4 font-sans text-dark/80 text-sm mt-auto relative z-10 pr-16">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
              <span className="leading-relaxed"><strong>Without freelancers, revisions or production delays</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
              <span className="leading-relaxed"><strong>50–150× cheaper</strong> than traditional staging</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
              <span className="leading-relaxed">No <strong>unpredictable production costs</strong> or delays</span>
            </li>
          </ul>

          {/* Visual Artifact 3: Pricing/Scale - Moved & Shrunk */}
          <div className="absolute bottom-6 right-6 w-16 h-16 bg-neutral rounded-full flex items-center justify-center border border-black/5 opacity-40 group-hover:opacity-100 transition-opacity">
            <div className="flex items-end gap-0.5 px-2 scale-75">
              <div className="w-2 bg-primary/10 rounded-t h-3 "></div>
              <div className="w-2 bg-primary/20 rounded-t h-4 "></div>
              <div className="w-2 bg-primary/40 rounded-t h-5 "></div>
              <div className="w-2 bg-accent rounded-t h-6 "></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 lg:p-8 rounded-[2rem] shadow-sm border border-black/5 hover-lift flex flex-col group transition-all duration-300 hover:border-accent/50 hover:shadow-md relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 bg-neutral rounded-2xl flex items-center justify-center border border-black/5 shrink-0">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-primary leading-tight">Sell properties faster</h3>
          </div>

          <ul className="space-y-4 font-sans text-dark/80 text-sm mt-auto relative z-10 pr-16">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
              <span className="leading-relaxed">Listings sell up to <strong>2× faster</strong> with better presentation</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
              <span className="leading-relaxed">Generate <strong>more buyer inquiries</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-[1px]" />
              <span className="leading-relaxed"><strong>Reduce price pressure</strong> during negotiations</span>
            </li>
          </ul>

          {/* Visual Artifact 4: Speed - Moved & Shrunk */}
          <div className="absolute bottom-6 right-6 w-16 h-16 bg-neutral rounded-full flex items-center justify-center border border-black/5 opacity-40 group-hover:opacity-100 transition-opacity">
            <div className="relative flex flex-col items-center scale-[0.6]">
                <TrendingUp className="w-8 h-8 text-accent mb-1" />
                <div className="font-heading font-bold text-xl text-primary leading-none text-center">2X</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRevisual;
