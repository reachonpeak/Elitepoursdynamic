/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Calendar, AlertTriangle, ShieldCheck, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  id: string;
  category: 'curing' | 'maintenance' | 'timeline' | 'quality';
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-curing');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      id: 'faq-curing',
      category: 'curing',
      question: 'How long does concrete take to cure before I can drive my vehicle on it?',
      answer: 'Typically, you can walk on newly poured concrete after 24 to 48 hours. However, standard vehicles must be kept off the surface for a minimum of 7 to 10 days to let the engineered slab build 70-80% of its designed load strength (32MPa+). For extremely heavy loads—such as large commercial vehicles, loaded caravans, or heavy machinery—we strictly advise waiting a full 28 days for an optimal high-performance cure.',
    },
    {
      id: 'faq-maintenance',
      category: 'maintenance',
      question: 'What is the recommended maintenance schedule for exposed aggregate concrete?',
      answer: 'To retain the natural stone highlight depth and guard against Victoria’s severe UV rays, wash the driveway with a light pressure washer once a year and apply a fresh coat of commercial-grade UV-stabilized decorative sealer every 2 to 3 years. Promptly clean localized grease, soil, or motor oil spills with standard mild soap to avoid permanent staining of the porous aggregate matrices.',
    },
    {
      id: 'faq-timeline',
      category: 'timeline',
      question: 'What is the step-by-step project timeline from excavation to final completion?',
      answer: 'A standard driveway or residential concrete slab installation averages 3 to 5 clear working days. Day 1 focuses on machine excavation, grading, and compacting the base stone substrate. Day 2 is centered on building rigid structural formwork and anchoring steel reinforcement mesh (such as SL82/SL92 panels) on bar chairs. Day 3 is the direct engineered concrete pour, screeding, and aggregate washing. Days 4 and 5 are dedicated to stress relief joint cutting, acid washing, and protective sealing.',
    },
    {
      id: 'faq-cracks',
      category: 'quality',
      question: 'How do you prevent unsightly structural cracking in your concrete pours?',
      answer: 'While concrete naturally undergoes curing contraction, we proactively mitigate structural cracks through three primary engineering safeguards: First, we compact a robust 100mm class-3 crushed rock subbase to prevent organic settling; second, we insert heavy-tensile steel mesh elevated on high-grade plastic support chairs; and third, we saw-cut relief expansion joints at strategic locations within 24 hours of pouring to guide natural slab movement along controlled, hidden lines.',
    },
    {
      id: 'faq-rain',
      category: 'quality',
      question: 'What protocols are in place if unexpected heavy rain occurs during a pour?',
      answer: 'Our experienced directors actively track local Melbourne BOM weather radars with maximum accuracy. If high precipitation thresholds are predicted, we will proactively reschedule the concrete pour to prevent washaway damage. If light, unforeseen rain begins, we carry heavy-duty waterproof poly-tarpaulins to cover and isolate the curing concrete surface immediately, preserving the structural design parameters and surface texture.',
    },
    {
      id: 'faq-licensing',
      category: 'quality',
      question: 'Are you licensed to handle structural civil works under Victorian regulations?',
      answer: 'Yes. Elite Pour Dynamics is structured in strict alignment with Victorian building protocols and concrete structures standards (AS 3600). We hold a $20M civil public liability insurance policy, and every on-site supervisor maintains comprehensive certifications for heavy machinery machinery handling, steel reinforcement design, and decorative concrete applications.',
    },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Animation variants for staggered entrance
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 110, 
        damping: 15 
      } 
    }
  };

  return (
    <section id="faq" className="py-24 bg-brand-surface text-brand-text relative border-t border-brand-border/40 font-sans shadow-inner overflow-hidden">
      {/* Decorative Warm Accent Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,rgba(224,123,57,0.015),transparent_40%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 font-sans">
        
        {/* Section Header with Scroll Trigger */}
        <motion.div 
          className="text-center space-y-4 mb-14" 
          id="faq-section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-brand-accent font-display text-[10px] tracking-[0.35em] font-black uppercase text-center block" id="faq-pill-label">
            KNOWLEDGE BASE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-brand-text" id="faq-title">
            Frequently Asked <span className="text-brand-accent">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-text-muted max-w-xl mx-auto leading-relaxed font-light font-sans" id="faq-description">
            Transparent, professional guidance on engineering parameters, Victoria civic curing requirements, and aggregate pavement maintenance.
          </p>
        </motion.div>

        {/* Category Filters with scroll fade */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10 w-full" 
          id="faq-categories-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          {[
            { id: 'all', label: 'All Queries' },
            { id: 'curing', label: 'Curing Parameters' },
            { id: 'maintenance', label: 'Care & Sealers' },
            { id: 'timeline', label: 'Project Timelines' },
            { id: 'quality', label: 'Quality Safeguards' }
          ].map((cat) => (
            <button
              key={cat.id}
              id={`faq-cat-btn-${cat.id}`}
              onClick={() => {
                setActiveCategory(cat.id);
                // Auto-open first item of filtered list if available
                const firstFound = faqs.find(f => cat.id === 'all' || f.category === cat.id);
                if (firstFound) setOpenId(firstFound.id);
              }}
              className={`px-4 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest border transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-accent text-white border-brand-accent shadow-sm'
                  : 'bg-white text-brand-text-muted border-brand-border hover:border-brand-text-muted hover:bg-brand-surface'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion Rows with Staggered Scroll-Trigger Entry */}
        <motion.div 
          className="space-y-3.5" 
          id="faq-accordion-rows"
          key={activeCategory} // Refreshes and replays motion stagger dynamically on category filter!
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                id={`faq-panel-${faq.id}`}
                variants={listItemVariants}
                className={`bg-white border rounded-sm transition-colors duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-brand-accent shadow-md bg-white' 
                    : 'border-brand-border/60 hover:border-brand-text-dim'
                }`}
              >
                {/* Header Interactive Trigger */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-accent/35"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="text-[10px] font-mono font-bold text-brand-accent/50 mt-1 shrink-0 bg-brand-surface-2 px-1.5 py-0.5 rounded-sm">
                      Q{idx + 1}
                    </span>
                    <span className={`text-[15px] sm:text-[17px] font-bold tracking-tight leading-snug transition-colors ${
                      isOpen ? 'text-brand-text' : 'text-brand-text/90'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-brand-text-muted">
                    {isOpen ? (
                      <ChevronUp className="h-5.5 w-5.5 text-brand-accent transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="h-5.5 w-5.5 text-brand-text-dim hover:text-brand-text transition-transform duration-200" />
                    )}
                  </div>
                </button>

                {/* Micro-Interaction collapsible height with pure framer-motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-brand-border/30 bg-brand-surface/20"
                    >
                      <div className="p-5 sm:p-6 pl-12 sm:pl-14 text-xs sm:text-sm text-brand-text-muted leading-relaxed font-light font-sans space-y-3">
                        <p>{faq.answer}</p>
                        
                        {/* Small contextual badge decoration inside answer panels */}
                        {faq.category === 'curing' && (
                          <div className="inline-flex items-center gap-2 text-[10px] font-mono text-brand-text bg-brand-text/5 border border-brand-text/15 px-2.5 py-1 rounded-sm mt-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>Rule of Thumb: Water daily during peak summer curing cycles.</span>
                          </div>
                        )}
                        {faq.category === 'maintenance' && (
                          <div className="inline-flex items-center gap-2 text-[10px] font-mono text-brand-gold bg-[#C8A84C]/5 border border-[#C8A84C]/20 px-2.5 py-1 rounded-sm mt-1">
                            <Heart className="h-3.5 w-3.5 fill-current stroke-none animate-pulse" />
                            <span>Aggregates thrive under simple water washing. Avoid strong hydrochloric acids.</span>
                          </div>
                        )}
                        {faq.category === 'quality' && (
                          <div className="inline-flex items-center gap-2 text-[10px] font-mono text-emerald-700 bg-emerald-500/5 border border-emerald-500/15 px-2.5 py-1 rounded-sm mt-1">
                            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                            <span>100% compliant with standard civil code parameters (AS 3600-2018).</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Card */}
        <motion.div 
          className="mt-14 p-6 sm:p-8 bg-white border border-brand-border rounded-sm text-center space-y-4 shadow-sm" 
          id="faq-footer-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-sans max-w-lg mx-auto">
            Have a structural load constraint, high-fall water runoff, or custom decorative stone selection inquiries?
          </p>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-3.5 rounded-full bg-[#161412] hover:bg-black text-white py-1.5 pl-6 pr-1.5 text-xs sm:text-sm font-semibold transition-all hover:gap-4.5 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Speak Direct To Estimator
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
              <Calendar className="h-4 w-4 text-black" />
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

