import React from 'react';
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
    <div className="relative w-full bg-background overflow-x-hidden selection:bg-accent selection:text-primary text-dark font-sans leading-normal">
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
  );
}

export default App;
