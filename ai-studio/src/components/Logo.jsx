import React from 'react';

const Logo = ({ variant = 'green', className = "" }) => {
  const color = variant === 'green' ? '#1B5E3B' : '#F3EFE6';
  
  return (
    <svg 
      viewBox="0 0 160 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMinYMid meet"
    >
      <text 
        x="0" 
        y="30" 
        fill={color} 
        className="font-heading font-bold"
        style={{ 
          fontFamily: "'Urbanist', sans-serif", 
          fontWeight: 700, 
          fontSize: '32px',
          letterSpacing: '-0.01em'
        }}
      >
        Revisual
      </text>
    </svg>
  );
};

export default Logo;
