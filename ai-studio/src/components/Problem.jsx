import React from 'react';
import { EyeOff, TrendingDown, Hammer } from 'lucide-react';
import img1 from '../../../footage/ChatGPT Image 3 mrt 2026, 15_47_54.png';
import img2 from '../../../footage/badkamer 1.png';
import img3 from '../../../footage/badkamerafter.png';

const Problem = () => {
  return (
    <section id="problem" className="py-24 px-5 lg:px-10 max-w-6xl mx-auto">
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl text-primary tracking-tight">Buyers struggle to imagine what a property could become.</h2>
        <p className="mt-3 font-sans text-base text-dark/70 leading-relaxed font-normal">
          Properties often fail to show their true potential.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-5">
        {/* Card 1 */}
        <div className="problem-card group bg-white p-5 rounded-[1.5rem] shadow-sm border border-primary/5 flex flex-col items-start transition-all duration-300 hover:border-primary/20 hover:shadow-md">
          <div className="w-full h-32 rounded-[1rem] bg-slate-100 overflow-hidden mb-4 relative">
            <img src={img1} alt="Empty room" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center border border-primary/10 relative group-hover:bg-primary/10 transition-colors shrink-0">
              <EyeOff className="w-4 h-4 text-primary" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full border border-white shadow-sm"></div>
            </div>
            <h3 className="font-heading font-semibold text-lg md:text-xl text-primary leading-tight">Empty spaces feel uninviting</h3>
          </div>
          <p className="font-sans text-dark/70 leading-relaxed text-[13px]">
            Empty rooms leave too much to the imagination. Buyers struggle to picture how the space could actually feel when furnished and styled.
          </p>
        </div>

        {/* Card 2 */}
        <div className="problem-card group bg-white p-5 rounded-[1.5rem] shadow-sm border border-primary/5 flex flex-col items-start transition-all duration-300 hover:border-primary/20 hover:shadow-md">
          <div className="w-full h-32 rounded-[1rem] bg-slate-100 overflow-hidden mb-4 relative">
            <img src={img2} alt="Renovation needed" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center border border-primary/10 relative group-hover:bg-primary/10 transition-colors shrink-0">
              <TrendingDown className="w-4 h-4 text-primary" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full border border-white shadow-sm"></div>
            </div>
            <h3 className="font-heading font-semibold text-lg md:text-xl text-primary leading-tight">Outdated interiors distact buyers</h3>
          </div>
          <p className="font-sans text-dark/70 leading-relaxed text-[13px]">
            Buyers focus on renovation costs and the work required instead of seeing the property’s true potential and lifestyle value.
          </p>
        </div>

        {/* Card 3 */}
        <div className="problem-card group bg-white p-5 rounded-[1.5rem] shadow-sm border border-primary/5 flex flex-col items-start transition-all duration-300 hover:border-primary/20 hover:shadow-md">
          <div className="w-full h-32 rounded-[1rem] bg-slate-100 overflow-hidden mb-4 relative">
            <img src={img3} alt="Boring listings" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center border border-primary/10 relative group-hover:bg-primary/10 transition-colors shrink-0">
              <Hammer className="w-4 h-4 text-primary" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full border border-white shadow-sm"></div>
            </div>
            <h3 className="font-heading font-semibold text-lg md:text-xl text-primary leading-tight">Buyers see projects instead of a home</h3>
          </div>
          <p className="font-sans text-dark/70 leading-relaxed text-[13px]">
            Unfinished or outdated spaces make buyers think about effort and investment costs, which leads to lower offers and longer time on market.
          </p>
        </div>
      </div>

      <div className="text-center mt-5 mb-4 max-w-fit mx-auto problem-card border border-primary/20 rounded-2xl py-4 px-8 shadow-sm">
        <p className="font-heading font-bold italic text-xl text-dark/80">When buyers can’t see the potential, they don’t inquire.</p>
      </div>
    </section>
  );
};

export default Problem;
