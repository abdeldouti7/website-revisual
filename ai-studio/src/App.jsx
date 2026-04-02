import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import InteractiveDemo from './components/InteractiveDemo';
import ContentGeneration from './components/ContentGeneration';
import TransformationMockup from './components/TransformationMockup';
import HowItWorks from './components/HowItWorks';
import WhyRevisual from './components/WhyRevisual';
import Pricing from './components/Pricing';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="relative w-full bg-cream overflow-x-hidden selection:bg-lemon-grass selection:text-pebbles text-pebbles font-sans leading-normal">
        <div className="noise-overlay"></div>
        <Navbar />
        <Hero />
        <Problem />
        <InteractiveDemo />
        <ContentGeneration />
        <HowItWorks />
        <TransformationMockup />
        <WhyRevisual />
        <Pricing />
        <ComparisonTable />
        <FAQ />
        <About />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
