import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Heart, MessageCircle, Share2, Music } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Video imports handled via public folder for stability

gsap.registerPlugin(ScrollTrigger);

const ContentGeneration = () => {
  const containerRef = useRef(null);
  const visualContainerRef = useRef(null);
  const timelineRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. High-Energy "Processing" Animation
      const playBigAnimation = () => {
        if (timelineRef.current && timelineRef.current.isActive()) return;
        
        const tl = gsap.timeline();
        timelineRef.current = tl;

        // Step 1: Magnetic Pull (Into Center)
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
          scale: 0.1,
          opacity: 0,
          duration: 0.7,
          stagger: 0.04,
          ease: "power2.in"
        })
        // Step 2: System Pulse (Subtle Glow)
        .to(".video-mockup-frame", {
          boxShadow: "0 0 40px rgba(14, 59, 42, 0.4)", // Deep Green Glow
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: "power2.out"
        }, "-=0.1")
        // Step 3: Burst Reveal (Back to positions)
        .to(".mockup-photo", {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: {
            each: 0.08,
            from: "end"
          },
          ease: "back.out(1.7)",
          onComplete: () => {
            // Step 4: Resume Subtle Floating (Continuous)
            gsap.to(".mockup-photo", {
              y: "-=6",
              rotation: "1deg",
              duration: 4,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              stagger: {
                each: 0.5,
                from: "random"
              }
            });
          }
        }, "-=0.2");
      };

      // 2. Main Entrance Animations (Left Text)
      gsap.from(".content-anim-left", {
        x: -40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      // 3. Trigger Big Animation on Scroll (Exactly Once)
      ScrollTrigger.create({
        trigger: ".mockup-visual-container",
        start: "top 80%",
        once: true,
        onEnter: () => {
          playBigAnimation();
        }
      });

    }, containerRef);

    return () => {
      ctx.revert();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section 
      id="content-generation" 
      ref={containerRef} 
      className="py-24 px-5 lg:px-10 max-w-7xl mx-auto border-t border-primary/5 bg-white overflow-hidden"
    >
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading font-semibold text-3xl md:text-5xl text-primary tracking-tight">
          Receive ready-to-post property content every week
        </h2>
      </div>

      {/* Split Layout: Text on Left, Visuals on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
        
        {/* Left Side: Copy & CTA */}
        <div className="content-anim-left lg:col-span-5 order-2 lg:order-1">
          <h3 className="font-heading font-semibold text-3xl md:text-4xl text-primary leading-tight mb-8">
            We turn your listings into engaging video content
          </h3>
          
          <div className="space-y-8 mb-12">
            <div>
              <p className="font-sans text-sm font-bold text-accent uppercase tracking-widest mb-4">
                Various property video formats:
              </p>
              <ul className="space-y-4">
                {[
                  "Help buyers feel the property before visiting",
                  "Quick property teaser videos",
                  "Highlight the best spaces and features",
                  "Make listings more engaging"
                ].map((item, idx) => (
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
            <p className="font-sans text-lg text-primary font-bold">
              Attract more buyer attention with property videos.
            </p>
          </div>
          
          <div>
            <button className="group relative inline-flex items-center justify-center px-10 py-4 font-sans text-sm font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]">
               <span className="absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/20"></span>
               <span className="relative">Get video content</span>
            </button>
          </div>
        </div>

        {/* Right Side: Visual Mockup Composition */}
        <div className="lg:col-span-7 order-1 lg:order-2" ref={visualContainerRef}>
          <div className="relative mockup-visual-container">
            <div className="relative mockup-inner-container h-[550px] flex items-center justify-center mb-0">
              
              {/* Photo 3: Top Center */}
              <div className="mockup-photo absolute -top-12 left-1/2 -translate-x-1/2 z-0 w-40 h-56 rounded-xl overflow-hidden shadow-2xl border-2 border-white -rotate-2">
                <img src="/images/mockup/photo4.png" alt="" className="w-full h-full object-cover" />
              </div>

              {/* Photo 1: Top Left */}
              <div className="mockup-photo absolute top-12 right-[calc(50%+120px)] z-10 w-40 h-56 rounded-xl overflow-hidden shadow-2xl border-2 border-white -rotate-[15deg]">
                <img src="/images/mockup/photo1.png" alt="" className="w-full h-full object-cover" />
              </div>

              {/* Photo 2: Top Right */}
              <div className="mockup-photo absolute top-12 left-[calc(50%+120px)] z-10 w-40 h-56 rounded-xl overflow-hidden shadow-2xl border-2 border-white rotate-[15deg]">
                <img src="/images/mockup/photo2.png" alt="" className="w-full h-full object-cover" />
              </div>

              {/* Photo 4: Middle Left */}
              <div className="mockup-photo absolute bottom-12 right-[calc(50%+120px)] z-20 w-44 h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white -rotate-6">
                <img src="/images/mockup/photo3.png" alt="" className="w-full h-full object-cover" />
              </div>

              {/* Photo 5: Middle Right */}
              <div className="mockup-photo absolute bottom-12 left-[calc(50%+120px)] z-20 w-44 h-60 rounded-2xl overflow-hidden shadow-2xl border-2 border-white rotate-6">
                <img src="/images/mockup/photo5.png" alt="" className="w-full h-full object-cover" />
              </div>

              {/* Center Floating Video (9:16) - Completely static frame */}
              <div className="relative z-30 video-mockup-frame w-[220px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border-[8px] border-white bg-zinc-100 group">
                 <video 
                   className="w-full h-full object-cover"
                   autoPlay muted loop playsInline preload="auto"
                 >
                   <source src="/reel-content.mov" />
                 </video>
                 
                 {/* UI Overlay - Restored for Icons & Hover Effect */}
                 <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end text-left h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-col gap-2 mb-2 translate-y-0">
                        <div className="flex items-center gap-2">
                           <div className="w-6 h-6 rounded-full bg-accent border border-white/20 flex items-center justify-center">
                              <span className="text-[10px] font-bold text-white">R</span>
                           </div>
                           <p className="font-sans text-[11px] font-bold text-white shadow-sm">revisual.pro</p>
                        </div>
                        <p className="font-sans text-[10px] text-white/90 leading-tight">
                            High-end property content. ✨
                        </p>
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

            {/* Label under visual */}
            <div className="text-center mt-[-32px]">
              <h4 className="font-heading font-semibold text-2xl text-primary mb-1">
                Property highlight video
              </h4>
              <p className="font-sans text-base text-dark/70">
                Give buyers a quick feel for the property’s best spaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Side-by-Side Showcase */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-32">
        <div className="flex-1 flex flex-col">
          <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden bg-primary/5 shadow-sm border border-primary/10 relative">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src="/staging-content.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mt-8 text-center px-4">
            <h4 className="font-heading font-semibold text-xl text-primary mb-2">Virtual Staging Content</h4>
            <p className="font-sans text-base text-dark/70 font-medium">Before → After transformations for empty properties.</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden bg-primary/5 shadow-sm border border-primary/10 relative">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src="/renovation-content.mov" />
            </video>
          </div>
          <div className="mt-8 text-center px-4">
            <h4 className="font-heading font-semibold text-xl text-primary mb-2">Virtual Renovation Content</h4>
            <p className="font-sans text-base text-dark/70 font-medium">Show buyers what outdated spaces can become.</p>
          </div>
        </div>
      </div>

      {/* Value Statement */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading font-semibold text-3xl md:text-5xl text-primary tracking-tight text-balance mb-6">
          Consistent marketing content without expensive production costs
        </h2>
        <p className="font-sans text-lg text-dark/70 leading-relaxed font-normal">
          Generate high-quality social media content instantly from your upgraded listings.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-premium border border-primary/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-primary/10 bg-neutral">
                <th className="py-6 px-8 font-sans font-medium text-dark/60 text-sm"></th>
                <th className="py-6 px-8 font-sans font-semibold text-primary text-base whitespace-nowrap">In-house</th>
                <th className="py-6 px-8 font-sans font-semibold text-primary text-base whitespace-nowrap">Freelance creator</th>
                <th className="py-6 px-8 font-sans font-semibold text-primary text-base whitespace-nowrap">Traditional agency</th>
                <th className="py-6 px-8 font-sans font-medium text-primary text-base bg-accent/10">Revisual</th>
              </tr>
            </thead>
            <tbody className="font-sans text-sm">
              <tr className="border-b border-primary/5 hover:bg-black/[0.02] transition-colors">
                <td className="py-6 px-8 text-primary font-medium whitespace-nowrap">Typical cost</td>
                <td className="py-6 px-8 text-dark/70">€3,000–€3,500 / month</td>
                <td className="py-6 px-8 text-dark/70">€80–€150 per post</td>
                <td className="py-6 px-8 text-dark/70">€200–€400 per post</td>
                <td className="py-6 px-8 font-medium text-primary bg-accent/10 text-base">€15–€19 per post</td>
              </tr>
              <tr className="border-b border-primary/5 hover:bg-black/[0.02] transition-colors">
                <td className="py-6 px-8 text-primary font-medium whitespace-nowrap">Delivery speed</td>
                <td className="py-6 px-8 text-dark/70">Depends on workload</td>
                <td className="py-6 px-8 text-dark/70">Several days</td>
                <td className="py-6 px-8 text-dark/70">1–2 weeks</td>
                <td className="py-6 px-8 font-medium text-primary bg-accent/10 text-base">Automated</td>
              </tr>
              <tr className="border-b border-primary/5 hover:bg-black/[0.02] transition-colors">
                <td className="py-6 px-8 text-primary font-medium whitespace-nowrap">Content quality</td>
                <td className="py-6 px-8 text-dark/70">Requires editing</td>
                <td className="py-6 px-8 text-dark/70">Sometimes ready</td>
                <td className="py-6 px-8 text-dark/70">Often revisions</td>
                <td className="py-6 px-8 font-medium text-primary bg-accent/10 text-base">Ready to post</td>
              </tr>
              <tr className="hover:bg-black/[0.02] transition-colors">
                <td className="py-6 px-8 text-primary font-medium whitespace-nowrap">Effort required</td>
                <td className="py-6 px-8 text-dark/70">Planning, filming & editing</td>
                <td className="py-6 px-8 text-dark/70">Coordination & feedback</td>
                <td className="py-6 px-8 text-dark/70">Meetings & revisions</td>
                <td className="py-6 px-8 font-medium text-primary bg-accent/10 text-base">Almost none</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="font-sans text-xl text-primary font-medium tracking-tight">
          A mix of property videos, posts and stories delivered every week for your social channels.
        </p>
      </div>

    </section>
  );
};

export default ContentGeneration;
