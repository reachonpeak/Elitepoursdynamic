/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layers, CalendarCheck, HelpCircle, ArrowRight, ClipboardCheck, Timer } from 'lucide-react';
import { processSteps } from '../data/websiteData';
import { motion, AnimatePresence } from 'motion/react';

export default function ProcessStepper() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentStepData = processSteps.find(step => step.stepNumber === activeStep) || processSteps[0];

  return (
    <section id="process" className="py-24 bg-white border-t border-brand-border/40 text-brand-text relative font-sans">
      <div className="absolute top-[20%] right-[-10%] w-[35%] aspect-square rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 font-sans">
        
        {/* Section Header with Scroll Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl mb-16 font-sans"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="block w-5 h-[2px] bg-brand-accent" />
            <span className="font-display text-[11px] sm:text-xs tracking-[0.25em] text-brand-accent uppercase font-bold">
              How We Work
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-brand-text leading-none mb-4">
            Our <br />
            Process
          </h2>

          <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed font-light">
            Pouring premium structural concrete is a precise chemical and structural science. We verify and reinforce every single square meter with zero shortcuts.
          </p>
        </motion.div>

        {/* Stepper Interactive Interface with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-brand-surface border border-brand-border p-6 sm:p-8 lg:p-10 rounded-sm shadow-sm font-sans"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Steps Left List (4 Cols) on Desktop / Top Slider on Mobile */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-brand-text-muted uppercase block">
                Operational Framework
              </span>

              {/* Steps Progress list */}
              <div className="flex flex-row lg:flex-col overflow-x-auto pb-4 lg:pb-0 gap-2.5 lg:gap-2 scrollbar-thin scrollbar-thumb-brand-border">
                {processSteps.map((step) => {
                  const isActive = step.stepNumber === activeStep;
                  return (
                    <button
                      key={step.stepNumber}
                      onClick={() => setActiveStep(step.stepNumber)}
                      className={`flex flex-col text-left py-3 px-4 rounded-sm border shrink-0 lg:shrink-1 transition-all duration-200 cursor-pointer max-w-[240px] sm:max-w-xs lg:max-w-none ${
                        isActive
                          ? 'border-brand-accent bg-brand-accent/5 text-brand-text'
                          : 'border-brand-border/60 bg-white text-brand-text-muted hover:border-brand-accent/40'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] px-2 py-0.5 font-mono font-bold ${
                          isActive ? 'bg-brand-accent text-white' : 'bg-brand-surface-2 text-brand-text-muted'
                        }`}>
                          STAGE 0{step.stepNumber}
                        </span>
                      </div>
                      <span className="font-display text-sm font-bold uppercase tracking-wide mt-2 truncate w-full">{step.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Step Panel Right Card (8 Cols) */}
            <div className="lg:col-span-8 bg-white border border-brand-border rounded-sm p-6 sm:p-8 relative min-h-[340px] flex flex-col justify-between shadow-sm overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="space-y-4 flex flex-col h-full justify-between"
                >
                  {/* Background badge indicator */}
                  <div className="absolute bottom-16 right-6 font-display text-8xl sm:text-9xl font-black text-brand-accent/5 select-none leading-none pointer-events-none">
                    0{currentStepData.stepNumber}
                  </div>

                  <div>
                    <span className="text-[10px] text-brand-accent font-mono tracking-[0.2em] font-semibold uppercase block mb-1">
                      Active Framework Phase
                    </span>
                    
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-brand-text mb-2 animate-fade">
                      {currentStepData.title}
                    </h3>

                    <p className="font-mono text-xs text-brand-accent/80 italic mb-6">
                      "{currentStepData.tagline}"
                    </p>

                    <p className="text-brand-text-muted text-sm leading-relaxed max-w-xl font-light">
                      {currentStepData.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Footer specs details / Step navigation triggers */}
              <div className="flex items-center justify-between border-t border-brand-border/40 pt-6 mt-8 z-10">
                <div className="flex items-center gap-2 text-brand-text-muted font-mono text-[10px]">
                  <Timer className="h-4 w-4 text-brand-accent" />
                  <span>QUALITY SUPERVISED DAILY</span>
                </div>

                <div className="flex gap-2">
                  <button
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                    className="p-2.5 border border-brand-border bg-white text-brand-text-muted hover:text-brand-text hover:bg-brand-surface-2 disabled:opacity-20 disabled:cursor-not-allowed transition-colors rounded-sm cursor-pointer"
                    aria-label="Previous step"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                  </button>
                  
                  <button
                    disabled={activeStep === processSteps.length}
                    onClick={() => setActiveStep(prev => Math.min(processSteps.length, prev + 1))}
                    className="p-2.5 border border-brand-border bg-white text-brand-text-muted hover:text-brand-text hover:bg-brand-surface-2 disabled:opacity-20 disabled:cursor-not-allowed transition-colors rounded-sm cursor-pointer"
                    aria-label="Next step"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Quick estimate nudge block with entrance animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mt-12 bg-brand-surface rounded-sm py-4 border border-brand-border/50 shadow-sm font-sans"
        >
          <p className="text-brand-text-muted text-[11px] sm:text-xs inline-flex items-center justify-center gap-2 flex-wrap px-4 font-sans">
            <ClipboardCheck className="h-4 w-4 text-brand-accent" />
            <span>All subgrade preparations comply with local Municipal requirements.</span>
            <button
              onClick={() => {
                const estEl = document.getElementById('estimator');
                if (estEl) {
                  const topOffset = 85;
                  const pos = estEl.getBoundingClientRect().top + window.pageYOffset - topOffset;
                  window.scrollTo({ top: pos, behavior: 'smooth' });
                }
              }}
              className="text-brand-accent hover:text-brand-text transition-colors font-bold uppercase tracking-wider ml-1 cursor-pointer font-mono text-[11px]"
            >
              Examine square-meter base rates →
            </button>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
