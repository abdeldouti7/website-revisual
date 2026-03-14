import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white border-t border-black/5">
      <div className="py-24 px-5 lg:px-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
        <div className="w-full md:w-1/2">
          <h2 className="font-heading font-semibold text-2xl md:text-4xl text-primary tracking-tight leading-tight">
            Making the future of real estate visible
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5 font-sans text-base text-dark/70 leading-relaxed font-normal">
          <p>
            Selling potential is one of the biggest challenges in real estate. Buyers often struggle to imagine what a property could become, especially when spaces are empty, outdated, or unfinished.
          </p>
          <p>
            Revisual was created to make that potential visible. By combining AI-powered visual upgrades with data-driven insights, we help real estate teams present properties more clearly and help buyers understand their possibilities faster.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
