import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What are Revisuals?",
      a: "Revisuals are AI-generated visualizations that help buyers see the full potential of a property. They include the total virtual upgrade: virtual staging, renovation previews and additional visuals that make listings more engaging and easier to understand."
    },
    {
      q: "Does Revisual replace traditional staging?",
      a: (
        <div className="flex flex-col gap-4">
          <p>Not necessarily. Revisual offers a digital alternative that helps buyers visualize the potential of a property without the cost and logistics of physical staging. While traditional staging can cost up to €1,000–€3,000 per property, Revisual’s virtual upgrades start at around €20 per listing, making it up to 50–100× more cost-efficient.</p>
          <p>Because the process is fully digital, Revisual is also much faster and scalable, allowing real estate teams to enhance multiple listings instantly and give buyers a clearer vision of a property’s potential.</p>
        </div>
      )
    },
    {
      q: "How long does it take to generate Revisuals?",
      a: "After selecting the photos and styles you want, Revisuals are generated automatically and are usually ready within minutes. Once created, they are automatically added to your property listings."
    },
    {
      q: "Does Revisual work with my website or CRM system?",
      a: "Yes. Revisual is designed to integrate with real estate websites and systems. Once connected, you can add Revisual to a listing with one click, and the visual upgrades will automatically appear on the property page."
    },
    {
      q: "Do I need to prepare anything before using it?",
      a: "No special preparation is required. Simply add your listings and photos to the system and Revisual processes them automatically."
    },
    {
      q: "Can the visuals be used for listings and marketing?",
      a: "Yes. The generated visuals can be used in property listings, on your website and across your marketing channels to better showcase the potential of a property. You can also use our presentation document during property visits to boost sales."
    },
    {
      q: "Which solution is most suitable for me?",
      a: "It depends on the number of listings you manage each month. Plans start from 5 listings, with most agencies choosing the Growth plan for the best balance between upgraded property visuals and listing performance. For extra visibility, you can add a Content Bundle to turn listings into ready-to-post social media content."
    }
  ];

  return (
    <section className="py-24 bg-white px-5 lg:px-10 border-t border-black/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading font-semibold text-3xl text-primary mb-3">Questions worth reading</h2>
          <p className="font-sans text-base text-dark/70 font-normal max-w-xl mx-auto">
            Everything you need to know about Revisual.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-black/5 rounded-[1.5rem] overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-background shadow-sm' : 'bg-white hover:border-black/10'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
              >
                <span className="font-heading font-semibold text-base md:text-lg text-primary">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary/50 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-4 md:px-5 pb-4 md:pb-5 font-sans text-dark/70 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA BLOCK */}
      <div className="max-w-4xl mx-auto mt-24 text-center bg-primary text-background p-10 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl tracking-tight mb-3">
            Ready to upgrade your listings?
          </h2>
          <p className="font-sans text-base md:text-lg text-background/80 font-normal max-w-xl mb-8">
            Start showing buyers the real potential of every property.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="magnetic-btn bg-white text-primary px-8 py-4 rounded-[2rem] font-medium text-base hover:bg-neutral transition-colors shadow-xl"
          >
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
