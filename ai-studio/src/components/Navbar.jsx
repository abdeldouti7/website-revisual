import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full px-5 py-3 transition-all duration-700 ease-in-out flex items-center justify-between ${scrolled ? 'bg-background/90 backdrop-blur-xl border border-primary/10 shadow-lg text-primary' : 'bg-white/60 backdrop-blur-md border border-black/5 text-primary'
        }`}
    >
      <div 
        onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
        className="font-heading font-semibold text-lg tracking-[0.1em] uppercase cursor-pointer hover:opacity-70 transition-opacity"
      >
        REVISUAL
      </div>
      <div className="hidden md:flex items-center gap-6 font-sans text-[13px] font-medium">
        {[
          { name: 'Solutions', href: '#demo' },
          { name: 'How it works', href: '#how-it-works' },
          { name: 'Plans', href: '#pricing' },
          { name: 'About', href: '#about' }
        ].map(item => (
          <a key={item.name} href={item.href} className="hover-lift hover:opacity-70 transition-opacity">
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-3">
        <a 
          href="https://dashboard.revisual.io/login" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`font-sans font-medium text-[13px] px-4 py-1.5 rounded-full border transition-colors hover:opacity-70 ${scrolled ? 'border-primary/20 text-primary hover:bg-primary/5' : 'border-primary/30 text-primary hover:bg-primary/5'}`}
        >
          Sign in
        </a>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="magnetic-btn flex items-center justify-center px-5 py-2 rounded-full font-sans font-medium text-[13px] transition-opacity bg-primary text-white hover:opacity-90 shadow-md shadow-primary/20">
          <span className="relative z-10">Book a demo</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
