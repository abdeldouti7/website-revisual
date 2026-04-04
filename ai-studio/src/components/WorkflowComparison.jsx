import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
    Cpu, 
    Timer, 
    AlertCircle, 
    Hand,
    Zap,
    Layers,
    Bot,
    ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import t from '../translations';

gsap.registerPlugin(ScrollTrigger);

const WorkflowComparison = () => {
    const { lang } = useLanguage();
    const c = t[lang].workflowComparison;
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".workflow-anim", {
                y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [lang]);

    const leftIcons = [Cpu, Timer, AlertCircle, Hand];
    const rightIcons = [Zap, Layers, Bot, ShieldCheck];

    return (
        <section ref={sectionRef} className="py-[60px] 3xl:py-[100px] 4xl:py-[140px] px-5 lg:px-10 max-w-7xl 3xl:max-w-9xl 4xl:max-w-10xl mx-auto bg-cream" id="workflow-comparison">
            {/* SECTION HEADING */}
            <div className="text-center mb-10 3xl:mb-14 workflow-anim">
                <h2 
                    className="font-heading font-semibold text-3xl md:text-[2.8rem] lg:text-[3.2rem] 3xl:text-5xl 4xl:text-[6.5rem] text-silver-fern tracking-tight leading-[1.05] max-w-6xl 3xl:max-w-7xl 4xl:max-w-8xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: c.sectionHeading }}
                />
            </div>

            {/* MAIN UNIT CONTAINER — Removed overflow-hidden from here to allow card escape */}
            <div className="workflow-anim relative max-w-6xl 3xl:max-w-8xl 4xl:max-w-9xl mx-auto">
                <div className="relative group">
                    {/* The shared container split box — Kept overflow-hidden here for the rounded background clipping */}
                    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch rounded-[3rem] overflow-hidden border border-silver-fern/10 shadow-premium relative bg-white z-10">
                        
                        {/* VERTICAL DIVIDER */}
                        <div className="hidden md:block absolute left-1/2 top-10 bottom-24 w-px bg-silver-fern/15 z-20"></div>

                        {/* LEFT COLUMN — Traditional */}
                        <div className="p-8 md:p-10 lg:p-12 3xl:p-16 pt-10 md:pt-14 pb-12 md:pb-44 3xl:pb-64 flex flex-col items-center justify-start h-full bg-white relative">
                            <div className="relative z-10 w-full text-center md:text-left">
                                <div className="mb-4 min-h-[100px] md:min-h-[110px] 3xl:min-h-[140px]">
                                    <span className="inline-block px-3 py-1 rounded-full bg-silver-fern/5 text-silver-fern font-sans text-[10px] font-bold uppercase tracking-widest mb-4 border border-silver-fern/10">
                                        {c.leftLabel}
                                    </span>
                                    <h3 className="font-heading font-semibold text-[26px] 3xl:text-[32px] 4xl:text-[40px] text-silver-fern leading-tight mb-4">
                                        {c.leftTitle}
                                    </h3>
                                </div>
                                
                                <ul className="space-y-6 inline-block text-left pb-8 md:pb-20">
                                    {[c.leftB1, c.leftB2, c.leftB3, c.leftB4].map((bullet, i) => {
                                        const Icon = leftIcons[i];
                                        return (
                                            <li key={i} className="flex items-start gap-4 text-silver-fern font-sans font-medium text-[16px] 3xl:text-lg leading-[1.4]">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-silver-fern/5 flex items-center justify-center flex-shrink-0">
                                                    <Icon className="w-3 h-3 text-silver-fern/60" />
                                                </div>
                                                <span dangerouslySetInnerHTML={{ __html: bullet }}></span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT COLUMN — Revisual */}
                        <div className="p-8 md:p-10 lg:p-12 3xl:p-16 pt-10 md:pt-14 pb-32 md:pb-44 3xl:pb-64 flex flex-col items-center justify-start h-full bg-silver-fern relative text-cream">
                            <div className="relative z-10 w-full text-center md:text-left">
                                <div className="mb-4 min-h-[100px] md:min-h-[110px] 3xl:min-h-[140px]">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-cream font-sans text-[10px] font-bold uppercase tracking-widest mb-4 border border-white/5">
                                        {c.rightLabel}
                                    </span>
                                    <h3 className="font-heading font-semibold text-[22px] lg:text-[24px] xl:text-[26px] 3xl:text-[32px] 4xl:text-[40px] text-cream leading-tight mb-4 tracking-tight">
                                        {c.rightTitle}
                                    </h3>
                                </div>
 
                                <ul className="space-y-6 inline-block text-left pb-16 md:pb-20">
                                    {[c.rightB1, c.rightB2, c.rightB3, c.rightB4].map((bullet, i) => {
                                        const Icon = rightIcons[i];
                                        return (
                                            <li key={i} className="flex items-start gap-4 text-cream font-sans font-medium text-[16px] 3xl:text-lg leading-[1.4] group">
                                                <div className="mt-1 w-[22px] h-[22px] rounded-full bg-lemon-grass flex items-center justify-center flex-shrink-0 shadow-lg shadow-lemon-grass/20 group-hover:scale-110 transition-transform duration-300">
                                                    <Icon className="w-3 h-3 text-silver-fern" />
                                                </div>
                                                <span dangerouslySetInnerHTML={{ __html: bullet }}></span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Backdrops */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-lemon-grass rounded-full blur-[100px] opacity-[0.05] z-0"></div>
                            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-lemon-grass rounded-full blur-[80px] opacity-[0.05] z-0"></div>
                        </div>
                    </div>

                    {/* CONCLUSION CARD — Adjusted to sit slightly higher and feel more premium */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] w-full max-w-5xl px-6 md:px-10 z-40">
                        <div className="bg-white/95 backdrop-blur-md border border-silver-fern/10 rounded-[2rem] p-6 md:p-10 shadow-2xl transition-all duration-500">
                            <p 
                                className="italic text-base md:text-xl text-silver-fern/90 leading-relaxed font-bold text-center"
                                dangerouslySetInnerHTML={{ __html: c.rightSub }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra clearance for the overlapping card */}
            <div className="h-16 md:h-24 3xl:h-32"></div>
        </section>
    );
};

export default WorkflowComparison;
