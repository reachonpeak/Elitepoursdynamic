/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/websiteData';
import { motion } from 'motion/react';

interface ServicesListProps {
  onSelectServiceForQuote: (serviceId: string) => void;
  onNavigate?: (page: string) => void;
}

export default function ServicesList({ onSelectServiceForQuote, onNavigate }: ServicesListProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleQuickEstimate = (serviceId: string) => {
    onSelectServiceForQuote(serviceId);
  };

  return (
    <section id="services" className="py-24 bg-white text-brand-text relative">
      <div className="absolute top-0 right-0 w-[40%] aspect-square rounded-full bg-brand-surface/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[35%] aspect-square rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header with Scroll Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl mb-16"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="block w-5 h-[2px] bg-brand-accent" />
            <span className="font-display text-[11px] sm:text-xs tracking-[0.25em] text-brand-accent uppercase font-bold">
              What We Do
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-brand-text leading-none mb-4">
            Our Premium <br />
            Concrete Services
          </h2>

          <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed font-light">
            From heavy-load industrial residential foundations to gorgeous stone exposed aggregates, every pour receives standard Melbourne council preps and certified craftsmanship.
          </p>
        </motion.div>

        {/* Services Grid with staggered load on scroll */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 border-t border-b border-brand-border/40 bg-brand-surface/30 pb-0.5"
        >
          {servicesData.map((service) => {
            const isHovered = hoveredId === service.id;
            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      type: 'spring', 
                      stiffness: 100, 
                      damping: 15 
                    } 
                  }
                }}
                className="relative overflow-hidden aspect-[4/3] bg-white group cursor-pointer transition-all duration-350"
              >
                {/* Backdrop Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-[#161412]/50 to-transparent group-hover:via-[#161412]/60 transition-all duration-300" />

                {/* Left Active Accent Border */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-accent transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] z-30"
                />

                {/* Card Content Section */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end">
                  <span className="font-display text-[9px] tracking-[0.25em] text-[#E1E0CC]/85 uppercase font-bold mb-1.5 block">
                    {service.id === 'retaining-walls' || service.id === 'residential-slabs' ? 'Structural' : 'Decorative Finishes'}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white leading-none mb-2">
                    {service.title}
                  </h3>

                  {/* Slider Description - expands on hover */}
                  <div
                    className="overflow-hidden transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      maxHeight: isHovered ? '110px' : '0px',
                      opacity: isHovered ? 1 : 0,
                    }}
                  >
                    <p className="text-xs text-white/90 font-light leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Features checklist snippet */}
                    <div className="space-y-1.5 mb-4">
                      {service.specs.slice(0, 2).map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px] text-white/80 font-mono">
                          <Check className="h-3 w-3 text-brand-accent stroke-[3px]" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Link */}
                  <div className="flex items-center justify-between mt-1 pt-1.5 border-t border-brand-border/30">
                    <button
                      onClick={() => handleQuickEstimate(service.id)}
                      className="text-[10px] uppercase font-mono tracking-widest text-[#E1E0CC] hover:text-white font-bold flex items-center gap-1.5"
                    >
                      <span>Interactive Estimate</span>
                      <ArrowRight className="h-3 w-3 stroke-[2.5px]" />
                    </button>
                    
                    <span className="text-[10px] font-mono text-white/70">
                      Rate: ~${service.basePricePerSqm}/sqm
                    </span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global Structural Quality Guarantee Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mt-16 bg-brand-surface border border-brand-border p-8 md:p-10 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm"
        >
          <div className="space-y-2">
            <span className="font-display text-xs tracking-widest text-brand-accent font-bold uppercase">
              MELBOURNE STANDARDS REGISTRY
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-text tracking-wide">
              Registered Structural Integrity &amp; Compressive strength
            </h4>
            <p className="text-brand-text-muted text-xs sm:text-sm font-light max-w-2xl leading-relaxed">
              We never compromise on aggregate volume ratios or concrete grading. Elite Pour Dynamics provides standard 10,000,000 AUD civil liability registers. All driveways receive standard thick expansion joint cuts.
            </p>
          </div>

          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('contact');
              } else {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-3.5 rounded-full bg-[#161412] hover:bg-black text-white py-1.5 pl-6 pr-1.5 text-xs sm:text-sm font-semibold transition-all hover:gap-4.5 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] self-center md:self-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Audit Insurance Certs
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
              <ArrowRight className="h-4 w-4 text-black" />
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
