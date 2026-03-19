import React from 'react';

const AboutAnimation = () => {
  return (
    <div className="about-anim-wrapper" aria-hidden="true">
      <svg
        viewBox="0 0 340 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="about-anim-svg"
      >
        <defs>
          {/* HORIZONTAL reveal mask */}
          <clipPath id="horizontal-scan-mask">
            <rect x="0" y="0" width="0" height="240" className="anim-mask-rect-h" />
          </clipPath>
          
          <pattern id="floor-grid-pattern" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#0E3B2A" strokeWidth="0.15" strokeOpacity="0.2"/>
          </pattern>
        </defs>

        {/* ── BASE LAYER: THE GHOST SYSTEM (Ambient) ── */}
        <g opacity="0.05" stroke="#0E3B2A">
          <path d="M60 85 L170 35 L280 85" strokeWidth="0.3" /> {/* Roof outline */}
          <path d="M170 140 V220" strokeWidth="1" /> {/* Rear Corner */}
          <path d="M60 170 V90" strokeWidth="0.5" />
          <path d="M280 170 V90" strokeWidth="0.5" />
          <path d="M60 170 L170 220 L280 170" strokeWidth="0.25" /> {/* Front threshold */}
        </g>

        {/* ── REVEAL LAYER: THE FURNISHED INTERIOR (Horizontal Mask) ── */}
        <g clipPath="url(#horizontal-scan-mask)">
          {/* Grounded Floor */}
          <path d="M60 170 L170 220 L280 170 L170 120 Z" fill="#F5F3EE" />
          <path d="M60 170 L170 220 L280 170 L170 120 Z" fill="url(#floor-grid-pattern)" />

          {/* Staged Walls */}
          <g stroke="#0E3B2A" strokeWidth="1">
            <path d="M170 140 V220" strokeWidth="1.4" /> {/* Focus point corner */}
            <path d="M60 170 V90 L170 140" />
            <path d="M170 140 L280 90 V170" />
            <path d="M60 170 L170 120 L280 170" strokeWidth="0.8" />
          </g>

          {/* ── RECOGNIZABLE FURNITURE (Grounded) ── */}
          <g stroke="#0E3B2A" strokeWidth="0.8" fill="#0E3B2A" fillOpacity="0.04">
            
            {/* 1. SOFA (Living Room Area) - Grounded at floor left */}
            <g transform="translate(100, 168)">
              {/* Grounded base */}
              <path d="M0 0 L40 20 L55 12 L15 -8 Z" fillOpacity="0.08" />
              {/* Sofa silhouette: Backrest + Seat cushions */}
              <path d="M0 0 V-15 L40 5 V20 Z" />
              <path d="M15 -8 V-23 L55 -3 V12 Z" />
              <path d="M0 -15 L15 -23 L55 -3 L40 5 Z" /> {/* Top shelf of cushions */}
            </g>

            {/* 2. TALL CABINET (Back Wall) - Grounded at rear corner */}
            <g transform="translate(180, 125)">
              <path d="M0 0 V-40 L25 -52 V-12 Z" /> {/* Front panel */}
              <path d="M0 -40 L25 -52 L15 -58 L-10 -46 Z" /> {/* Top lid */}
              <line x1="12" y1="-5" x2="12" y2="-45" strokeWidth="0.5" strokeOpacity="0.4" /> {/* Door split */}
            </g>

            {/* 3. DINING TABLE (Right Area) - Clearly on legs */}
            <g transform="translate(200, 185)">
              <path d="M0 0 L40 -20 L30 -25 L-10 -5 Z" /> {/* Table top */}
              <line x1="0" y1="0" x2="0" y2="12" strokeWidth="0.6" /> {/* Front leg */}
              <line x1="38" y1="-20" x2="38" y2="-8" strokeWidth="0.6" /> {/* Rear leg */}
              <line x1="-8" y1="-5" x2="-8" y2="7" strokeWidth="0.6" /> {/* Side leg */}
            </g>

          </g>

          {/* Window Reflection Bloom */}
          <rect x="85" y="105" width="22" height="35" transform="skewY(24)" fill="#0E3B2A" fillOpacity="0.03" />
        </g>

        {/* ── THE HORIZONTAL SCANNING BAR (A vertical line moving X) ── */}
        <line x1="0" y1="20" x2="0" y2="220" stroke="#0E3B2A" strokeWidth="1.5" className="anim-scan-bar-h" />
      </svg>
    </div>
  );
};

export default AboutAnimation;
