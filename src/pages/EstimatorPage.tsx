import React from 'react';
import { motion } from 'framer-motion';
import { Info, Calculator, FileText, Sparkles } from 'lucide-react';
import QuoteCalculator from '../components/QuoteCalculator';

interface EstimatorPageProps {
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
  onSelectQuote: (quote: { serviceName: string; area: number; details: string }) => void;
}

export default function EstimatorPage({
  selectedServiceId,
  setSelectedServiceId,
  onSelectQuote
}: EstimatorPageProps) {
  return (
    <div className="pt-20">
      {/* Cost Estimator Banner */}
      <section className="bg-zinc-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(225,224,204,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-4 relative z-10">
          <span className="text-[#E1E0CC] font-mono text-[10px] tracking-[0.3em] font-bold uppercase">
            Interactive Costing Console
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight uppercase leading-none text-[#E1E0CC]">
            Instant <span className="font-extrabold text-white">Rate Estimator</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            Specify your dimensions, choose thickness multipliers, and toggles for excavation. Review dynamic volumetric breakdowns and lock concrete specifications instantly.
          </p>
        </div>
      </section>

      {/* Calculator Container */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Costing Help/Guidance Alert */}
          <div className="mb-10 bg-brand-surface border border-brand-border p-6 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-zinc-100 text-[#161412] rounded-full border border-zinc-200 shrink-0">
                <Calculator className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="font-display font-bold uppercase text-[11px] text-zinc-900 tracking-wider">
                  Select Service Aggregate
                </h4>
                <p className="text-[11px] text-brand-text-muted leading-relaxed font-light mt-1">
                  Square metre rates vary depending on whether we wash exposed stones or layer clean, seamless industrial epoxies.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="p-2 bg-zinc-100 text-[#161412] rounded-full border border-zinc-200 shrink-0">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="font-display font-bold uppercase text-[11px] text-zinc-900 tracking-wider">
                  Thickness &amp; Heavy Steel
                </h4>
                <p className="text-[11px] text-brand-text-muted leading-relaxed font-light mt-1">
                  100mm is code-standard for footpaths. Driveways carrying utility vans require 110mm-125mm with thicker steel.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="p-2 bg-zinc-100 text-[#161412] rounded-full border border-zinc-200 shrink-0">
                <FileText className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="font-display font-bold uppercase text-[11px] text-zinc-900 tracking-wider">
                  Pre-fill Quote Form
                </h4>
                <p className="text-[11px] text-brand-text-muted leading-relaxed font-light mt-1">
                  Exporting the estimate automatically pre-fills our contact form desk, saving you repetitive specifications entry!
                </p>
              </div>
            </div>
          </div>

          {/* Calculator actual component */}
          <QuoteCalculator
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            onSelectQuote={onSelectQuote}
          />

        </div>
      </div>
    </div>
  );
}
