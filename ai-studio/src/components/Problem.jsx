import React, { useEffect, useRef } from 'react';
import { EyeOff, TrendingDown, Hammer } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../../footage/ChatGPT Image 3 mrt 2026, 15_47_54.png';
import img2 from '../../../footage/badkamer 1.png';
import img3 from '../../../footage/badkamerafter.png';

gsap.registerPlugin(ScrollTrigger);

const Problem = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".problem-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      gsap.from(".problem-banner", {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".problem-banner",
          start: "top 90%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="problem" 
      ref={sectionRef}
      className="py-12 lg:py-24 px-5 lg:px-10 max-w-7xl mx-auto overflow-hidden bg-white"
    >
      <div className="text-center mb-16 problem-title">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary tracking-tight max-w-3xl mx-auto leading-[1.1]">
          Buyers struggle to imagine what a property <span className="italic font-serif text-primary/70">could become.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {/* Card 1 */}
        <div 
          ref={el => cardsRef.current[0] = el}
          className="group flex flex-col items-start"
        >
          <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 shadow-2xl shadow-black/5 border border-black/5 relative">
            <img src={img1} alt="Empty room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 relative shrink-0">
              <EyeOff className="w-5 h-5 text-primary" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-sm animate-pulse"></div>
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary leading-tight">Empty spaces <br/>feel cold</h3>
          </div>
          
          <p className="font-sans text-[16px] text-dark/60 leading-relaxed font-medium">
            Empty rooms leave too much to the imagination. Buyers struggle to picture how the space could actually feel when furnished and styled.
          </p>
        </div>

        {/* Card 2 */}
        <div 
          ref={el => cardsRef.current[1] = el}
          className="group flex flex-col items-start"
        >
          <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 shadow-2xl shadow-black/5 border border-black/5 relative">
            <img src={img2} alt="Outdated interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 relative shrink-0">
              <TrendingDown className="w-5 h-5 text-primary" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-sm animate-pulse"></div>
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary leading-tight">Outdated interiors <br/>turn buyers away</h3>
          </div>
          
          <p className="font-sans text-[16px] text-dark/60 leading-relaxed font-medium">
            Outdated spaces make a property feel less attractive at first glance. Instead of seeing the home's potential, buyers are put off by the dated look.
          </p>
        </div>

        {/* Card 3 */}
        <div 
          ref={el => cardsRef.current[2] = el}
          className="group flex flex-col items-start"
        >
          <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 shadow-2xl shadow-black/5 border border-black/5 relative">
            <img src={img3} alt="Renovated interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 relative shrink-0">
              <Hammer className="w-5 h-5 text-primary" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-sm animate-pulse"></div>
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary leading-tight">Buyers see a project, <br/>not a home</h3>
          </div>
          
          <p className="font-sans text-[16px] text-dark/60 leading-relaxed font-medium">
            Outdated or unfinished spaces make buyers think about renovation work, time, and costs. Instead of imagining living there, they see effort and investment.
          </p>
        </div>
      </div>

      <div className="mt-20 md:mt-24 max-w-4xl mx-auto problem-banner">
        <div className="bg-primary/5 border border-primary/10 rounded-full py-6 md:py-8 px-8 md:px-12 text-center shadow-sm relative overflow-hidden group shrink-0">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="font-heading font-bold italic text-lg md:text-2xl text-primary relative z-10 leading-tight whitespace-nowrap">
            "When buyers can't see the potential, they don't inquire."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
