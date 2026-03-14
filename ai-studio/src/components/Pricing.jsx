import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

const Tooltip = ({ content }) => {
  return (
    <div className="group relative inline-flex items-center justify-center cursor-help ml-1.5 align-middle">
      <Info className="w-4 h-4 opacity-40 group-hover:text-accent group-hover:opacity-100 transition-colors" />
      <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-64 p-3 bg-dark text-white text-xs font-sans rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] pointer-events-none text-center leading-relaxed">
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-2 h-2 bg-dark rotate-45"></div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white px-4 lg:px-8 relative z-10 border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-primary tracking-tight mb-2">A plan for every real estate team</h2>
          <p className="font-sans text-[15px] md:text-base text-dark/70 max-w-xl font-normal">
            Transparent and flexible packages for every real estate need.
          </p>
        </div>

        {/* ROW 1: CORE PACKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
          
          {/* Minimum Pack */}
          <div className="bg-neutral p-5 lg:p-6 rounded-2xl border border-black/5 hover-lift flex flex-col">
            <h3 className="font-mono text-lg tracking-widest text-dark/50 uppercase font-semibold mb-3">Starter</h3>
            <div className="flex flex-col gap-1 mb-6 pb-5 border-b border-black/5">
              <span className="text-dark/50 font-sans text-xs">Starting from</span>
              <span className="font-heading font-semibold text-3xl text-primary">€99 <span className="text-sm font-sans text-dark/50 font-normal">/ month</span></span>
              <span className="text-dark/50 font-sans text-xs mt-1">Starting from 5 properties</span>
            </div>

            <h4 className="font-heading font-semibold text-base text-primary mb-4">What do you get</h4>
            
            <div className="mb-5">
              <h5 className="font-sans text-xs font-semibold text-dark/50 uppercase tracking-wider mb-2">Per property</h5>
              <div className="font-sans text-dark flex flex-col gap-1 text-[13px] md:text-sm">
                <span className="font-semibold">3 photos</span>
                <span className="font-semibold">3 styles per photo</span>
                <span className="text-dark/60 text-xs">9 Revisuals total</span>
              </div>
            </div>

            <div className="mb-8 flex-1">
              <h5 className="font-sans text-xs font-semibold text-dark/50 uppercase tracking-wider mb-2">Included</h5>
              <ul className="space-y-2 font-sans text-dark/80 text-[13px] leading-snug">
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-primary shrink-0 mt-[1px]" /> <span className="flex-1">Virtual Renovation</span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-primary shrink-0 mt-[1px]" /> <span className="flex-1">Virtual Staging</span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-primary shrink-0 mt-[1px]" /> <span className="flex-1">Virtual Optimization</span></li>
              </ul>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-2.5 rounded-full font-sans text-sm font-medium text-primary border-2 border-primary hover:bg-primary/5 transition-colors mt-auto"
            >
              Select Starter
            </button>
          </div>

          {/* Standard Pack (Featured) */}
          <div className="bg-primary p-5 lg:p-6 rounded-2xl shadow-xl relative transform md:scale-[1.03] z-10 hover-lift flex flex-col border border-accent/20">
            <div className="absolute top-0 right-5 -translate-y-1/2 bg-accent text-white px-3 py-1 rounded-full text-[9px] font-medium uppercase tracking-wider shadow-md">Most Popular</div>
            <h3 className="font-mono text-lg tracking-widest text-white/50 uppercase font-semibold mb-3">Growth</h3>
            <div className="flex flex-col gap-1 mb-6 pb-5 border-b border-white/10">
              <span className="text-white/50 font-sans text-xs">Starting from</span>
              <span className="font-heading font-semibold text-4xl text-white">€145 <span className="text-sm font-sans text-white/50 font-normal">/ month</span></span>
              <span className="text-white/50 font-sans text-xs mt-1">Starting from 5 properties</span>
            </div>

            <h4 className="font-heading font-semibold text-base text-white mb-4">What do you get</h4>
            
            <div className="mb-5">
              <h5 className="font-sans text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Per property</h5>
              <div className="font-sans text-white flex flex-col gap-1 text-[13px] md:text-sm">
                <span className="font-semibold">6 photos</span>
                <span className="font-semibold">5 styles per photo</span>
                <span className="text-white/60 text-xs">30 Revisuals total</span>
              </div>
            </div>

            <div className="mb-8 flex-1">
              <h5 className="font-sans text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Included</h5>
              <ul className="space-y-2 font-sans text-white/90 text-[13px] leading-snug">
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-white shrink-0 mt-[1px]" /> <span className="flex-1">Everything from Starter</span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-white shrink-0 mt-[1px]" /> <span className="flex items-center">Buyer Analytics <Tooltip content="Understand real buyer interest through data. See which styles, rooms, and properties attract the most attention and engagement." /></span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-white shrink-0 mt-[1px]" /> <span className="flex items-center break-words">Property presentation document <Tooltip content="A hybrid presentation document for property viewings, available in both digital and physical format, allowing agents to present the property professionally and leave it behind with clients." /></span></li>
              </ul>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-btn w-full py-2.5 rounded-full font-sans text-sm font-medium text-primary bg-white hover:bg-neutral transition-colors mt-auto shadow-sm"
            >
              Select Growth
            </button>
          </div>

          {/* Pro Pack */}
          <div className="bg-neutral p-5 lg:p-6 rounded-2xl border border-black/5 hover-lift flex flex-col">
            <h3 className="font-mono text-lg tracking-widest text-dark/50 uppercase font-semibold mb-3">Pro</h3>
            <div className="flex flex-col gap-1 mb-6 pb-5 border-b border-black/5">
              <span className="text-dark/50 font-sans text-xs">Starting from</span>
              <span className="font-heading font-semibold text-3xl text-primary">€225 <span className="text-sm font-sans text-dark/50 font-normal">/ month</span></span>
              <span className="text-dark/50 font-sans text-xs mt-1">Starting from 5 properties</span>
            </div>

            <h4 className="font-heading font-semibold text-base text-primary mb-4">What do you get</h4>
            
            <div className="mb-5">
              <h5 className="font-sans text-xs font-semibold text-dark/50 uppercase tracking-wider mb-2">Per property</h5>
              <div className="font-sans text-dark flex flex-col gap-1 text-[13px] md:text-sm">
                <span className="font-semibold">Unlimited photos</span>
                <span className="font-semibold">Unlimited styles per photo</span>
                <span className="text-dark/60 text-xs opacity-0 select-none">Spacer</span>
              </div>
            </div>

            <div className="mb-8 flex-1">
              <h5 className="font-sans text-xs font-semibold text-dark/50 uppercase tracking-wider mb-2">Included</h5>
              <ul className="space-y-2 font-sans text-dark/80 text-[13px] leading-snug">
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-primary shrink-0 mt-[1px]" /> <span className="flex-1">Everything from Growth</span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-primary shrink-0 mt-[1px]" /> <span className="flex items-center break-words">Investment Scenario Calculator <Tooltip content="Simulate renovation costs, projected returns, and long-term property value scenarios to support investment decisions." /></span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-primary shrink-0 mt-[1px]" /> <span className="flex items-center break-words">Lead Qualification & Follow-up <Tooltip content="Track visitor interactions, identify warm leads, and automate follow-ups to focus on the most promising buyers." /></span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-primary shrink-0 mt-[1px]" /> <span className="flex items-center break-words">Custom branded solution <Tooltip content="Receive a branded solution of our product tailored to your real estate team, allowing you to present the experience under your own brand." /></span></li>
              </ul>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-2.5 rounded-full font-sans text-sm font-medium text-primary border-2 border-primary hover:bg-primary/5 transition-colors mt-auto"
            >
              Select Enterprise
            </button>
          </div>
        </div>

        {/* ROW 2: BUNDLES & SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-4 w-full">
          
          {/* Content Bundles */}
          <div className="bg-white p-5 lg:p-6 rounded-2xl border border-black/5 hover-lift md:col-span-2 flex flex-col">
            <div className="text-center mb-6">
              <h3 className="font-heading font-semibold text-xl md:text-2xl text-primary mb-2">Content Bundles</h3>
              <p className="font-sans text-sm text-dark/70 font-normal">Turn your property listings into ready-to-post social media content every week.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
              {/* Left Side: Options */}
              <div className="flex flex-col h-full">
                <h4 className="font-heading font-semibold text-lg text-primary mb-5">Choose your monthly volume</h4>
                
                <div className="space-y-3 mb-5 relative">
                  {/* Option 1 */}
                  <div className="flex justify-between items-center py-3 border-b border-black/5">
                    <div>
                      <div className="font-sans text-sm text-dark font-semibold">10 posts <span className="text-xs font-normal text-dark/50">/ month</span></div>
                      <div className="font-sans text-[11px] text-dark/50">≈ 2–3 posts per week</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-semibold text-primary text-base">€199 <span className="text-[11px] font-sans text-dark/50 font-normal">/ month</span></div>
                      <div className="font-sans text-[11px] text-dark/50">€19.9 per post</div>
                    </div>
                  </div>

                  {/* Option 2 (Most Popular) */}
                  <div className="flex justify-between items-center py-4 px-3 -mx-3 border border-accent/20 bg-accent/5 rounded-xl relative shadow-sm">
                    <div className="absolute -top-3 left-3 bg-accent text-white px-2.5 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider shadow-sm">Most Popular</div>
                    <div>
                      <div className="font-sans text-sm text-dark font-semibold">20 posts <span className="text-xs font-normal text-dark/50">/ month</span></div>
                      <div className="font-sans text-[11px] text-dark/50">≈ 5 posts per week</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-semibold text-primary text-lg">€349 <span className="text-[11px] font-sans text-dark/50 font-normal">/ month</span></div>
                      <div className="font-sans text-[11px] text-dark/50 font-medium text-primary">€17.45 per post</div>
                    </div>
                  </div>

                  {/* Option 3 */}
                  <div className="flex justify-between items-center py-3 border-b border-black/5">
                    <div>
                      <div className="font-sans text-sm text-dark font-semibold">40 posts <span className="text-xs font-normal text-dark/50">/ month</span></div>
                      <div className="font-sans text-[11px] text-dark/50">≈ 10 posts per week</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-semibold text-primary text-base">€599 <span className="text-[11px] font-sans text-dark/50 font-normal">/ month</span></div>
                      <div className="font-sans text-[11px] text-dark/50">€14.97 per post</div>
                    </div>
                  </div>
                </div>

                <p className="font-sans text-xs text-dark/50 italic mt-auto pt-2">Generated from your property listings.</p>
              </div>

              {/* Right Side: What's included */}
              <div className="flex flex-col h-full">
                <h4 className="font-heading font-semibold text-lg text-primary mb-5">What's included</h4>
                <ul className="space-y-3 font-sans text-dark/80 text-sm mb-6">
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-primary shrink-0 mt-[1px]" /> Mix of short videos, posts and stories</li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-primary shrink-0 mt-[1px]" /> Ready-to-post social formats</li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-primary shrink-0 mt-[1px]" /> Optimized for reach and engagement</li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-primary shrink-0 mt-[1px]" /> Consistent weekly publishing</li>
                </ul>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="magnetic-btn w-full py-2.5 rounded-full font-sans text-sm font-medium text-white bg-primary hover:opacity-90 transition-opacity mt-auto shadow-sm shadow-primary/20"
                >
                  Upgrade your content
                </button>
              </div>
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="bg-neutral p-5 lg:p-6 rounded-2xl border border-black/5 hover-lift md:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-semibold text-lg md:text-xl text-primary mb-2">Custom Solutions</h3>
              <p className="font-sans text-[13px] md:text-sm text-dark/70 mb-5 font-normal">For teams managing high property volumes.</p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-2.5 rounded-full font-sans text-sm font-medium text-primary border-2 border-primary hover:bg-primary/5 transition-colors mt-auto"
            >
              Contact sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
