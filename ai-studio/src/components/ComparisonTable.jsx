import React from 'react';
import { Check, Minus, Info } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import t from '../translations';

const Tooltip = ({ content }) => (
  <div className="group relative inline-flex items-center justify-center cursor-help ml-2 align-middle">
    <Info className="w-4 h-4 text-silver-fern/40 hover:text-lemon-grass transition-colors" />
    <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-64 p-3 bg-pebbles text-cream text-xs font-sans rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] pointer-events-none text-center leading-relaxed whitespace-normal drop-shadow-2xl font-normal">
      {content}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-2 h-2 bg-pebbles rotate-45"></div>
    </div>
  </div>
);

const ComparisonTable = () => {
  const { lang } = useLanguage();
  const c = t[lang].table;

  const features = [
    { name: 'Property Visualization', min: true, std: true, pro: true, hasTooltip: true, tooltipContent: 'Virtual Staging, Virtual Renovation, Virtual Optimization' },
    { name: c.numPhotos, min: '3', std: '6', pro: c.unlimited },
    { name: c.styles, min: '3', std: '5', pro: c.unlimited },
    { name: 'High-res exports', min: true, std: true, pro: true },
    { name: 'Property presentation document', min: false, std: true, pro: true, hasTooltip: true, tooltipContent: 'A hybrid presentation document for property viewings, available in both digital and physical format, allowing agents to present the property professionally and leave it behind with clients.' },
    { name: 'Buyer Analytics', min: false, std: true, pro: true, hasTooltip: true, tooltipContent: 'Understand real buyer interest through data. See which styles, rooms, and properties attract the most attention and engagement.' },
    { name: 'Investment Scenario Calculator', min: false, std: false, pro: true, hasTooltip: true, tooltipContent: 'Simulate renovation costs, projected returns, and long-term property value scenarios to support investment decisions.' },
    { name: 'Lead Qualification & Follow-up', min: false, std: false, pro: true, hasTooltip: true, tooltipContent: 'Track visitor interactions, identify warm leads, and automate follow-ups to focus on the most promising buyers.' },
    { name: 'Custom branded solution', min: false, std: false, pro: true, hasTooltip: true, tooltipContent: 'Receive a branded solution of our product tailored to your real estate team, allowing you to present the experience under your own brand.' },
  ];

  return (
    <section className="py-24 bg-cream px-5 lg:px-10 border-t border-silver-fern/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-silver-fern tracking-tight">{c.heading}</h2>
        </div>
        <div className="overflow-x-auto pb-4">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-white/50">
                <th className="p-3 border-b border-silver-fern/10 font-sans font-bold text-pebbles/50 w-2/5 uppercase text-[10px] tracking-widest">{c.features}</th>
                <th className="p-3 border-b border-silver-fern/10 font-heading font-semibold text-silver-fern text-center w-1/5">Starter</th>
                <th className="p-3 border-b border-silver-fern/10 font-heading font-semibold text-cream bg-silver-fern text-center rounded-t-xl w-1/5 shadow-md">Growth</th>
                <th className="p-3 border-b border-silver-fern/10 font-heading font-semibold text-silver-fern text-center w-1/5">Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="group hover:bg-white/50 transition-colors">
                  <td className="p-3 border-b border-silver-fern/10 font-sans text-pebbles/80 font-medium text-sm">
                    {feature.name}
                    {feature.hasTooltip && <Tooltip content={feature.tooltipContent} />}
                  </td>
                  <td className="p-3 border-b border-silver-fern/10 text-center">
                    {typeof feature.min === 'boolean' ? (
                      feature.min ? <Check className="w-4 h-4 mx-auto text-lemon-grass" /> : <Minus className="w-4 h-4 mx-auto text-pebbles/20" />
                    ) : (
                      <span className="font-mono text-[13px] text-silver-fern font-semibold">{feature.min}</span>
                    )}
                  </td>
                  <td className="p-3 border-b border-silver-fern/10 text-center bg-silver-fern/5 shadow-inner">
                    {typeof feature.std === 'boolean' ? (
                      feature.std ? <Check className="w-4 h-4 mx-auto text-lemon-grass" /> : <Minus className="w-4 h-4 mx-auto text-pebbles/20" />
                    ) : (
                      <span className="font-mono text-[13px] text-silver-fern font-semibold">{feature.std}</span>
                    )}
                  </td>
                  <td className="p-3 border-b border-silver-fern/10 text-center">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? <Check className="w-4 h-4 mx-auto text-lemon-grass" /> : <Minus className="w-4 h-4 mx-auto text-pebbles/20" />
                    ) : (
                      <span className="font-mono text-[13px] text-silver-fern font-semibold">{feature.pro}</span>
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
