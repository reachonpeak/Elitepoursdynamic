import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Info, Hammer, CheckSquare, Layers } from 'lucide-react';
import ServicesList from '../components/ServicesList';

interface ServicesPageProps {
  onSelectServiceForQuote: (serviceId: string) => void;
  onNavigate?: (page: string) => void;
}

export default function ServicesPage({ onSelectServiceForQuote, onNavigate }: ServicesPageProps) {
  return (
    <div className="pt-20">
      {/* Services Sub-Header Banner */}
      <section className="bg-zinc-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(225,224,204,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-4 relative z-10 font-sans">
          <span className="text-[#E1E0CC] font-mono text-[10px] tracking-[0.3em] font-bold uppercase">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight uppercase leading-none text-[#E1E0CC]">
            Our <span className="font-extrabold text-white">Concrete Services</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            Retaining walls, epoxy, exposed aggregate, residential slabs, stamped concrete and civil footpaths — durable concrete solutions built to last across Melbourne.
          </p>
        </div>
      </section>

      {/* Main interactive services list */}
      <ServicesList 
        onSelectServiceForQuote={onSelectServiceForQuote} 
        onNavigate={onNavigate}
      />

      {/* Industrial Grade Specifications Table */}
      <section className="py-20 bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-xl mb-12 space-y-2">
            <span className="font-mono text-[10px] text-zinc-400 font-bold uppercase tracking-widest block">
              Reference Sheet
            </span>
            <h2 className="font-display font-bold uppercase tracking-wide text-2xl text-brand-text">
              Concrete Grades &amp; Application Spec
            </h2>
            <p className="text-brand-text-muted text-xs sm:text-sm font-light">
              We guide our clients on selecting the appropriate aggregate grading and tensile reinforcement meshes according to exact vehicle loads and sub-soil classifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Grade 1 */}
            <div className="bg-white border border-brand-border p-6 rounded-sm space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-zinc-400">Class 1</span>
                <span className="bg-zinc-100 text-[#161412] font-mono text-[9px] font-bold uppercase px-2 py-0.5 border border-zinc-200">
                  Standard Load
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg uppercase text-brand-text">
                25 MPa Strength Grade
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                Industry benchmark for pedestrian walks, backyard domestic patios, and garden pathways with standard point loading.
              </p>
              <div className="space-y-2 pt-2 border-t border-brand-border/40 text-[11px] text-brand-text">
                <div className="flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  <span>SL72 Steel Mesh Reinforcement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Hammer className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  <span>100mm standard wet bed thickness</span>
                </div>
              </div>
            </div>

            {/* Grade 2 */}
            <div className="bg-white border-2 border-brand-text p-6 rounded-sm space-y-4 shadow-sm relative">
              <span className="absolute -top-3.5 left-4 bg-black text-[#E1E0CC] font-mono text-[8px] font-bold uppercase px-3 py-1 tracking-wider rounded-full">
                Most Popular for Driveways
              </span>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-zinc-400">Class 2</span>
                <span className="bg-black text-[#E1E0CC] font-mono text-[9px] font-bold uppercase px-2 py-0.5">
                  Heavy Vehicle
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg uppercase text-brand-text">
                32 MPa Strength Grade
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                High-density concrete containing custom granite stone aggregate blends. Essential for heavy vehicular garage ports and crossovers.
              </p>
              <div className="space-y-2 pt-2 border-t border-brand-border/40 text-[11px] text-brand-text">
                <div className="flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
                  <span>SL82 Premium Steel Concrete Mesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Hammer className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
                  <span>110mm - 125mm bed on compacted roadbase</span>
                </div>
              </div>
            </div>

            {/* Grade 3 */}
            <div className="bg-white border border-brand-border p-6 rounded-sm space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-zinc-400">Class 3</span>
                <span className="bg-zinc-100 text-zinc-600 font-mono text-[9px] font-bold uppercase px-2 py-0.5 border border-zinc-200">
                  Industrial
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg uppercase text-brand-text">
                40 MPa Custom Pour
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                Engineered for commercial parking precincts, heavy commercial vehicle loading bays, and deep multi-car crossovers.
              </p>
              <div className="space-y-2 pt-2 border-t border-brand-border/40 text-[11px] text-brand-text">
                <div className="flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  <span>SL82 Dual Heavy Steel reinforcement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Hammer className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  <span>150mm bed with custom engineered piers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Notice Banner */}
          <div className="mt-8 bg-zinc-950 text-white p-6 rounded-sm flex flex-col sm:flex-row items-center gap-4 border border-white/5">
            <ShieldAlert className="h-8 w-8 text-[#E1E0CC] shrink-0 animate-pulse" />
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-display text-white">
                Victoria Civil Concrete Curing Compliance Warning
              </h4>
              <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                Freshly poured concrete can take up to 28 days to reach its full designed compressive strength (MPa rating). Please do not drive vehicles on aggregate driveways or residential house slabs for at least 7 to 10 days post curing sealer wash application.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
