import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);

  const [status, setStatus] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mgonroop", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".content-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-24 px-5 lg:px-10 max-w-7xl mx-auto border-t border-black/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Info */}
        <div className="content-anim">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-primary tracking-tight mb-5">
            Talk to us about your listings
          </h2>
          <p className="font-sans text-base text-dark/70 font-normal mb-10 max-w-md">
            Have a question about Revisual or want to see how it works for your properties? Send us a message and our team will help you get started.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-primary mb-1">Email us</h4>
                <p className="font-sans text-dark/70 text-sm">revisual.be@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-primary mb-1">Call us</h4>
                <p className="font-sans text-dark/70 text-sm">+32 491 555 684</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="content-anim relative bg-white p-6 lg:p-8 rounded-[2rem] shadow-sm border border-black/5 mt-8 lg:mt-0 min-h-[450px] flex flex-col justify-center">
          
          {/* Promotional Badge */}
          <div className="absolute -top-3 right-5 lg:-top-4 lg:right-8 bg-neutral text-primary font-sans font-medium text-xs px-4 py-1.5 rounded-full shadow-sm z-10 uppercase tracking-wide border border-primary/10">
            Try Revisual risk free
          </div>

          {status === "SUCCESS" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-primary mb-3">Message Sent</h3>
              <p className="font-sans text-dark/70 text-sm mb-8">
                Thank you for reaching out. We've received your message and will get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setStatus(null)}
                className="font-sans text-sm font-semibold text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form 
              className="flex flex-col gap-5" 
              onSubmit={handleSubmit}
              action="https://formspree.io/f/mgonroop"
              method="POST"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-sans font-medium text-sm text-primary">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="bg-background px-4 py-3 rounded-lg border border-black/5 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans text-dark placeholder:text-dark/30"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-sans font-medium text-sm text-primary">Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="bg-background px-4 py-3 rounded-lg border border-black/5 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans text-dark placeholder:text-dark/30"
                  placeholder="john@realestate.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sans font-medium text-sm text-primary">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows="4"
                  className="bg-background px-4 py-3 rounded-lg border border-black/5 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans text-dark placeholder:text-dark/30 resize-none"
                  placeholder="How can we help your team?"
                ></textarea>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <button type="submit" className="magnetic-btn w-full py-4 rounded-full font-sans font-medium text-white bg-primary hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  Talk to our team
                  <Send className="w-4 h-4" />
                </button>
                {status === "ERROR" && (
                  <p className="font-sans text-xs text-red-500 text-center font-medium">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <p className="font-sans text-xs text-dark/50 text-center font-medium">
                  Our team typically replies within one business day.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
