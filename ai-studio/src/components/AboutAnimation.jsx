import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AboutAnimation = () => {
  const containerRef = useRef(null);
  const bloomRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Core Transformation Loop: The "Breath"
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(bloomRef.current, {
        attr: { r: 240 }, // Scale up the "Potential" wave
        duration: 4,
        ease: "power2.inOut",
      })
      .to('.vision-content', {
        opacity: 1,
        duration: 2,
        stagger: 0.1
      }, "-=3")
      .to(bloomRef.current, {
        attr: { r: 0 }, // Recede back to empty
        duration: 4,
        delay: 3,
        ease: "power2.inOut",
      })
      .to('.vision-content', {
        opacity: 0,
        duration: 1.5,
      }, "-=3.5");

      // 2. Subtle rotation for 3D depth
      gsap.to('.room-master', {
        rotateX: 2,
        rotateY: 4,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-square flex items-center justify-center p-4 lg:p-12 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-radial-gradient from-silver-fern/5 to-transparent pointer-events-none" />
      
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        style={{ filter: 'drop-shadow(0 30px 60px rgba(27, 94, 59, 0.12))' }}
      >
        <defs>
          {/* The Liquid Mask of Potential */}
          <mask id="potential-mask">
            <circle ref={bloomRef} cx="200" cy="200" r="0" fill="white" />
          </mask>

          {/* Architectural Textures */}
          <linearGradient id="oak-floor" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C19A6B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B5A2B" stopOpacity="0.6" />
          </linearGradient>
          
          <linearGradient id="wall-shadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B5E3B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1B5E3B" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <g className="room-master" style={{ transformOrigin: '200px 200px' }}>
          
          {/* ──────── LAYER 1: THE RAW SHELL (Base State) ──────── */}
          <g className="base-layer" stroke="#1B5E3B" strokeOpacity="0.1" strokeWidth="0.5">
            {/* The Empty Room Boundaries */}
            <path d="M80 200 L200 280 L320 200 L200 120 Z" /> {/* Floor */}
            <path d="M80 200 V100 L200 180" /> {/* Left Wall */}
            <path d="M200 180 L320 100 V200" /> {/* Right Wall */}
            <line x1="200" y1="180" x2="200" y2="280" /> {/* Corner */}
          </g>

          {/* ──────── LAYER 2: THE VISION (Staged State) ──────── */}
          <g mask="url(#potential-mask)">
            {/* Oak Floor Manifestation */}
            <path d="M80 200 L200 280 L320 200 L200 120 Z" fill="url(#oak-floor)" />
            
            {/* Walls Manifestation */}
            <path d="M80 200 V100 L200 180 V280 Z" fill="url(#wall-shadow)" fillOpacity="0.1" />
            <path d="M200 180 L320 100 V200 L200 280 Z" fill="url(#wall-shadow)" fillOpacity="0.2" />

            {/* Furniture Bloomed from Potential */}
            <g className="vision-content" opacity="0" stroke="#1B5E3B" strokeWidth="1.2">
              {/* Premium Sofa silhouette */}
              <g transform="translate(130, 210)">
                <path d="M0 0 L40 20 L60 10 L20 -10 Z" fill="#1B5E3B" fillOpacity="0.15" /> {/* Seat */}
                <path d="M0 0 V-15 L40 5 V20" /> {/* Back */}
                <path d="M20 -10 V-25 L60 -5 V10" />
              </g>

              {/* Minimal Coffee Table */}
              <g transform="translate(240, 220)">
                <rect x="-20" y="-10" width="40" height="20" rx="4" fill="#1B5E3B" fillOpacity="0.05" transform="skewY(-20)" />
              </g>

              {/* Window Light Stream */}
              <path d="M280 120 L320 140 L320 180 L280 160 Z" fill="white" fillOpacity="0.4" filter="blur(8px)" />
            </g>

            {/* Highlights */}
            <path d="M200 180 V280" stroke="#8CCF3F" strokeWidth="2" strokeOpacity="0.4" />
          </g>

        </g>
        
        {/* Breathing Ambient Dust */}
        {Array.from({ length: 12 }).map((_, i) => (
          <circle
            key={i}
            className="potential-dust"
            cx={100 + Math.random() * 200}
            cy={100 + Math.random() * 200}
            r="1"
            fill="#1B5E3B"
            opacity="0.1"
          />
        ))}
      </svg>
    </div>
  );
};

export default AboutAnimation;
