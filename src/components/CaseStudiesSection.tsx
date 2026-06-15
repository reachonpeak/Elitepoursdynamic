/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  ArrowRight, 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  FolderOpen,
  Anchor,
  Activity,
  HardHat,
  Cpu
} from 'lucide-react';
import { caseStudiesData, CaseStudy } from '../data/caseStudies';

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section className="py-24 bg-white font-sans relative overflow-hidden" id="case-studies">
      {/* Subtle architectural grid guidelines backing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e1e0cc/10_1px,transparent_1px),linear-gradient(to_bottom,#e1e0cc/10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-surface/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="block w-5 h-[2px] bg-[#C8A84C]" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-[#C8A84C] font-bold uppercase">
              Engineering Portfolios
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-[#161412] leading-none">
            Featured Case Studies<br />
            <span className="text-zinc-400 font-light">&amp; Past Works</span>
          </h2>
          <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Deconstruct our high-end private and industrial projects across Melbourne. Every case represents rigorous subgrade prep, heavy-duty SL82 steel layouts, and custom-cured finishes built to survive a lifetime of heavy use.
          </p>
        </div>

        {/* Masonry Column Container */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 [column-fill:_balance]">
          {caseStudiesData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedCase(project)}
              className="break-inside-avoid bg-zinc-50 border border-brand-border/40 hover:border-[#C8A84C]/50 rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col mb-8 relative"
              id={`case-card-${project.id}`}
            >
              {/* Image Frame with Smooth Zoom Effect on Hover */}
              <div className="relative overflow-hidden bg-zinc-900 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-[0.5deg]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Category Badge overlay styled with precision */}
                <div className="absolute top-4 left-4 bg-[#161412]/90 backdrop-blur-xs border border-[#C8A84C]/30 text-[#E1E0CC] font-mono text-[9px] font-bold px-3 py-1 tracking-widest uppercase rounded-xs">
                  {project.category}
                </div>

                {/* Subtitle bottom left */}
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <p className="font-mono text-[9px] text-[#C8A84C] uppercase tracking-wider mb-1 font-bold">
                    {project.subtitle}
                  </p>
                  <p className="text-[10px] text-zinc-300 font-light flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#C8A84C]" />
                    {project.location}
                  </p>
                </div>
              </div>

              {/* Information Block */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-wide text-[#161412] leading-tight group-hover:text-[#C8A84C] transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-brand-text-muted text-xs leading-relaxed font-light line-clamp-3">
                    {project.clientBrief}
                  </p>

                  {/* Summary Metric Grid inside the card */}
                  <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-brand-border/40 my-4">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="bg-white/80 p-2 border border-brand-border/20 rounded-xs">
                        <span className="block text-[8px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                          {m.label}
                        </span>
                        <span className="text-xs font-bold text-[#161412]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Elite consistent Circular Black Button CTA */}
                <div className="mt-6 flex justify-end">
                  <div
                    className="group inline-flex items-center gap-3 rounded-full bg-[#161412] text-white py-1 pl-4 pr-1 text-[11px] font-bold transition-all hover:bg-black cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Inspect Case File</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:scale-110">
                      <ArrowRight className="h-3.5 w-3.5 text-black" />
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Decorative compliance quote banner at footer */}
        <div className="mt-16 bg-zinc-50 border border-brand-border/40 p-6 sm:p-8 rounded-xs text-center">
          <p className="font-mono text-xs text-[#C8A84C] uppercase tracking-widest font-bold mb-2">
            ★ Registered Victoria Building Practitioner Signoffs Included ★
          </p>
          <p className="text-[#161412] text-xs sm:text-sm font-light max-w-2xl mx-auto leading-relaxed">
            Elitepour Dynamics certifies every custom driveway, crossover, and structural element with compliant stress-grade audits. Fully conforming with AS3600-2018 parameters.
          </p>
        </div>
      </div>

      {/* FULL PORTFOLIO RICH LIGHTBOX DRAWER/MODAL DETAIL */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[100] overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Modal Backdrop with elegant glass backdrop-blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-[#161412]/95 backdrop-blur-md cursor-pointer"
            />

            {/* Immersive Case File Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white border border-[#C8A84C]/25 rounded-xs w-full max-w-4xl shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
              id="case-file-modal"
            >
              {/* Dismiss X Corner Control */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-20 h-9 w-9 bg-[#161412]/80 text-white rounded-full flex items-center justify-center border border-white/10 hover:bg-[#C8A84C] hover:text-[#161412] transition-all cursor-pointer shadow-md"
                aria-label="Close Case File"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* Case Visual Left Display Frame (40% width) */}
              <div className="relative w-full md:w-[40%] bg-zinc-900 overflow-hidden flex flex-col justify-between h-[250px] md:h-auto min-h-[250px]">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50" />
                
                {/* Visual tags inside the image */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[9px] font-mono tracking-widest text-[#C8A84C] bg-[#161412]/90 px-2.5 py-1 rounded-xs border border-[#C8A84C]/30 uppercase font-bold">
                    {selectedCase.category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#C8A84C] uppercase font-bold">
                    MELBOURNE PROVE WORKS
                  </span>
                  <h4 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wide text-white leading-tight">
                    {selectedCase.title}
                  </h4>
                  <p className="text-[11px] text-zinc-300 font-light flex items-center gap-1 justify-start">
                    <MapPin className="h-3 w-3 text-[#C8A84C]" />
                    {selectedCase.location}
                  </p>
                </div>
              </div>

              {/* Case Narrative File Right Frame (60% width) */}
              <div className="w-full md:w-[60%] p-6 sm:p-8 md:p-10 overflow-y-auto flex flex-col justify-between bg-[#FDFCFA]">
                <div className="space-y-6">
                  {/* Title and Brief */}
                  <div className="border-b border-brand-border/40 pb-4">
                    <span className="text-xs font-mono font-bold text-[#C8A84C] tracking-widest uppercase">
                      CASE FILE INTEL
                    </span>
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#161412] mt-1">
                      Architectural Analysis
                    </h3>
                  </div>

                  {/* Summary Metric grids */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4.5 rounded-xs border border-brand-border/40 shadow-xs">
                    {selectedCase.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span className="block text-[8px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                          {m.label}
                        </span>
                        <span className="text-xs font-extrabold text-[#161412]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Brief, Challenge & Solution Sections */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold text-[#C8A84C] tracking-wider uppercase block">
                        📂 Client Brief &amp; Demand
                      </span>
                      <p className="text-xs text-brand-text leading-relaxed font-light">
                        {selectedCase.clientBrief}
                      </p>
                    </div>

                    <div className="space-y-1 bg-red-50/50 p-3.5 border-l-2 border-red-500 rounded-r-xs">
                      <span className="text-[9px] font-mono font-bold text-red-700 tracking-wider uppercase block">
                        ⚠️ Code &amp; Terrain Challenge
                      </span>
                      <p className="text-xs text-red-950 leading-relaxed font-light">
                        {selectedCase.engineeringChallenge}
                      </p>
                    </div>

                    {/* Step-by-Step Technical Protocol */}
                    <div className="space-y-3">
                      <span className="text-[9px] font-mono font-bold text-[#C8A84C] tracking-wider uppercase block">
                        ⚙️ Custom Engineering Protocols
                      </span>
                      <div className="space-y-2.5">
                        <div className="border-l border-zinc-200 pl-4 relative">
                          <div className="absolute left-[-4.5px] top-1.5 h-2 w-2 rounded-full bg-zinc-400" />
                          <span className="block text-[10px] font-bold text-[#161412] uppercase tracking-wide">
                            Phase I: Demolition &amp; Excavation
                          </span>
                          <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed font-light">
                            {selectedCase.stepDetail.excavation}
                          </p>
                        </div>
                        <div className="border-l border-zinc-200 pl-4 relative">
                          <div className="absolute left-[-4.5px] top-1.5 h-2 w-2 rounded-full bg-[#C8A84C]" />
                          <span className="block text-[10px] font-bold text-[#161412] uppercase tracking-wide">
                            Phase II: Heavy Steel Reinforcement
                          </span>
                          <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed font-light">
                            {selectedCase.stepDetail.steelReinforcement}
                          </p>
                        </div>
                        <div className="border-l border-zinc-200 pl-4 relative">
                          <div className="absolute left-[-4.5px] top-1.5 h-2 w-2 rounded-full bg-[#161412]" />
                          <span className="block text-[10px] font-bold text-[#161412] uppercase tracking-wide">
                            Phase III: Core Pour &amp; Texturing
                          </span>
                          <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed font-light">
                            {selectedCase.stepDetail.pourAndFinishing}
                          </p>
                        </div>
                        <div className="border-l border-zinc-200 pl-4 relative">
                          <div className="absolute left-[-4.5px] top-1.5 h-2 w-2 rounded-full bg-green-600" />
                          <span className="block text-[10px] font-bold text-[#161412] uppercase tracking-wide">
                            Phase IV: Controlled Dust-Clean &amp; Sealing
                          </span>
                          <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed font-light">
                            {selectedCase.stepDetail.curingAndSealer}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Materials Summary */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[9px] font-mono font-bold text-[#161412] tracking-wider uppercase block">
                        🧱 Materials Specification
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCase.materialsUsed.map((mat, i) => (
                          <span
                            key={i}
                            className="bg-white border border-zinc-200 text-zinc-600 text-[10px] px-2.5 py-1 rounded-sm uppercase font-light"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer compliance seal */}
                <div className="border-t border-brand-border/40 pt-5 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <div>
                      <span className="block text-[9px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                        VICTORIAN CIVIL COMPLIANT
                      </span>
                      <span className="block text-[10px] font-bold text-zinc-800 uppercase">
                        AS3600 STRUCTURAL BLUEPRINT
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="text-[10px] w-full sm:w-auto uppercase font-mono tracking-widest text-white bg-[#161412] hover:bg-black px-6 py-3 rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center"
                  >
                    Confirm &amp; Exit Case
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
