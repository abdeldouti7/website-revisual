import React from 'react';
import { Check, Minus, Info } from 'lucide-react';

const Tooltip = ({ content }) => {
  return (
    <div className="group relative inline-flex items-center justify-center cursor-help ml-2 align-middle">
      <Info className="w-4 h-4 text-primary/40 hover:text-accent transition-colors" />
      <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-64 p-3 bg-dark text-white text-xs font-sans rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] pointer-events-none text-center leading-relaxed whitespace-normal drop-shadow-2xl font-normal">
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-2 h-2 bg-dark rotate-45"></div>
      </div>
    </div>
  );
};

const ComparisonTable = () => {
  const features = [
    { name: 'Property Visualization', min: true, std: true, pro: true, hasTooltip: true, tooltipContent: 'Virtual Staging, Virtual Renovation, Virtual Optimization' },
    { name: 'Number of Photos', min: '3', std: '6', pro: 'Unlimited' },
    { name: 'Included Styles', min: '3', std: '5', pro: 'Unlimited' },
    { name: 'High-res exports', min: true, std: true, pro: true },
    { name: 'Property presentation document', min: false, std: true, pro: true, hasTooltip: true, tooltipContent: 'A hybrid presentation document for property viewings, available in both digital and physical format, allowing agents to present the property professionally and leave it behind with clients.' },
    { name: 'Buyer Analytics', min: false, std: true, pro: true, hasTooltip: true, tooltipContent: 'Understand real buyer interest through data. See which styles, rooms, and properties attract the most attention and engagement.' },
    { name: 'Investment Scenario Calculator', min: false, std: false, pro: true, hasTooltip: true, tooltipContent: 'Simulate renovation costs, projected returns, and long-term property value scenarios to support investment decisions.' },
    { name: 'Lead Qualification & Follow-up', min: false, std: false, pro: true, hasTooltip: true, tooltipContent: 'Track visitor interactions, identify warm leads, and automate follow-ups to focus on the most promising buyers.' },
    { name: 'Custom branded solution', min: false, std: false, pro: true, hasTooltip: true, tooltipContent: 'Receive a branded solution of our product tailored to your real estate team, allowing you to present the experience under your own brand.' }
  ];

  return (
    <section className="py-24 bg-white px-5 lg:px-10 border-t border-black/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-primary tracking-tight">Overview of our solutions</h2>
        </div>

        <div className="overflow-x-auto pb-4">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-neutral">
                <th className="p-3 border-b border-black/10 font-sans font-medium text-dark/50 w-2/5">Features</th>
                <th className="p-3 border-b border-black/10 font-heading font-semibold text-primary text-center w-1/5">Minimum</th>
                <th className="p-3 border-b border-black/10 font-heading font-semibold text-white bg-primary text-center rounded-t-xl w-1/5 shadow-md">Growth</th>
                <th className="p-3 border-b border-black/10 font-heading font-semibold text-primary text-center w-1/5">Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="group hover:bg-white/50 transition-colors">
                  <td className="p-3 border-b border-black/5 font-sans text-dark/80 font-medium text-sm">
                    {feature.name}
                    {feature.hasTooltip && <Tooltip content={feature.tooltipContent} />}
                  </td>
                  <td className="p-3 border-b border-black/5 text-center">
                    {typeof feature.min === 'boolean' ? (
                      feature.min ? <Check className="w-4 h-4 mx-auto text-primary" /> : <Minus className="w-4 h-4 mx-auto text-dark/20" />
                    ) : (
                      <span className="font-mono text-[13px] text-primary font-semibold">{feature.min}</span>
                    )}
                  </td>
                  <td className="p-3 border-b border-black/5 text-center bg-primary/5 shadow-inner">
                    {typeof feature.std === 'boolean' ? (
                      feature.std ? <Check className="w-4 h-4 mx-auto text-primary" /> : <Minus className="w-4 h-4 mx-auto text-dark/20" />
                    ) : (
                      <span className="font-mono text-[13px] text-primary font-semibold">{feature.std}</span>
                    )}
                  </td>
                  <td className="p-3 border-b border-black/5 text-center">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? <Check className="w-4 h-4 mx-auto text-primary" /> : <Minus className="w-4 h-4 mx-auto text-dark/20" />
                    ) : (
                      <span className="font-mono text-[13px] text-primary font-semibold">{feature.pro}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
