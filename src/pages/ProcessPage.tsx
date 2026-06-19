import React from 'react';
import ProcessStepper from '../components/ProcessStepper';
import FAQSection from '../components/FAQSection';
import { Sparkles, Calendar, HeartHandshake } from 'lucide-react';

export default function ProcessPage() {
  return (
    <div className="pt-20">
      {/* Process Header Banner */}
      <section className="bg-zinc-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(225,224,204,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-4 relative z-10">
          <span className="text-[#E1E0CC] font-mono text-[10px] tracking-[0.3em] font-bold uppercase">
            How We Work
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight uppercase leading-none text-[#E1E0CC]">
            Our <span className="font-extrabold text-white">Process</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            From site inspection and base preparation through to finishing, curing and sealing — every step done with precision and attention to detail.
          </p>
        </div>
      </section>

      {/* Trust guarantees checklist banner */}
      <section className="bg-brand-surface py-16 border-b border-brand-border/40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-surface-2/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-md border border-brand-border/30 hover:border-[#C8A84C]/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex gap-4 items-start group">
              <div className="p-3 bg-[#E1E0CC]/20 border border-[#C8A84C]/20 text-brand-text rounded-full shrink-0 flex items-center justify-center transition-colors group-hover:bg-[#C8A84C]/10 group-hover:border-[#C8A84C]/40">
                <Calendar className="h-5 w-5 text-[#C8A84C] group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-display font-extrabold uppercase tracking-wide text-[13px] text-brand-text mb-1.5">
                  Reliable Timeline Commitments
                </h3>
                <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                  We agree on precise dates for excavation, reinforcement steel delivery, and pours. No disappearing crews or endless weeks in limbo.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-md border border-brand-border/30 hover:border-[#C8A84C]/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex gap-4 items-start group">
              <div className="p-3 bg-[#E1E0CC]/20 border border-[#C8A84C]/20 text-brand-text rounded-full shrink-0 flex items-center justify-center transition-colors group-hover:bg-[#C8A84C]/10 group-hover:border-[#C8A84C]/40">
                <HeartHandshake className="h-5 w-5 text-[#C8A84C] group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-display font-extrabold uppercase tracking-wide text-[13px] text-brand-text mb-1.5">
                  Council Liaison &amp; Permits
                </h3>
                <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                  We handle the municipal crossover permits, footpath barricades, council inspections and standard asset protection details cleanly on your behalf.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-md border border-brand-border/30 hover:border-[#C8A84C]/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex gap-4 items-start group">
              <div className="p-3 bg-[#E1E0CC]/20 border border-[#C8A84C]/20 text-brand-text rounded-full shrink-0 flex items-center justify-center transition-colors group-hover:bg-[#C8A84C]/10 group-hover:border-[#C8A84C]/40">
                <Sparkles className="h-5 w-5 text-[#C8A84C] group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-display font-extrabold uppercase tracking-wide text-[13px] text-brand-text mb-1.5">
                  Elite Site &amp; Roadway Cleanup
                </h3>
                <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                  We scoop and wash all formwork debris, strip the composite boards cleanly, wash adjacent road gutters, and pack-away everything neatly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The full industrial 7-step process stepper */}
      <div className="bg-white py-8">
        <ProcessStepper />
      </div>

      {/* Customer Help accordions / FAQs */}
      <div className="bg-brand-surface/35 border-t border-brand-border/60 py-12">
        <FAQSection />
      </div>
    </div>
  );
}
