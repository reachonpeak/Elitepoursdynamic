/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, ArrowRight, Quote, MessageSquareDot, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../data/websiteData';
import { motion, AnimatePresence } from 'motion/react';

export default function TestimonialSlider() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const nextReview = () => {
    setActiveIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevReview = () => {
    setActiveIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentReview = testimonialsData[activeIdx];

  return (
    <section id="testimonials" className="py-24 bg-white text-brand-text relative border-t border-brand-border/40 font-sans shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,rgba(224,123,57,0.02),transparent_35%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 font-sans">
        
        {/* Title Block with Scroll Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl mb-16"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="block w-5 h-[2px] bg-brand-accent animate-pulse" />
            <span className="font-display text-[11px] sm:text-xs tracking-[0.25em] text-brand-accent uppercase font-bold">
              Google Maps Reviews
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-brand-text leading-none mb-4">
            Flawless Customer <br />
            Satisfaction
          </h2>

          <div className="flex items-center gap-2.5 mt-2">
            <span className="text-sm font-bold font-mono text-brand-text leading-none">5.0 STAR RATED</span>
            <div className="flex gap-0.5 text-brand-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-brand-accent stroke-none" />
              ))}
            </div>
            <a
              href="https://maps.google.com/maps?cid=10364408570481064277"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-text-muted hover:text-brand-text underline font-mono"
            >
              (11+ Total Reviews)
            </a>
          </div>
        </motion.div>

        {/* Carousel Slide Card with Scroll Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-brand-surface border border-brand-border rounded-sm p-6 sm:p-10 relative shadow-sm overflow-hidden"
        >
          
          {/* Quote watermark */}
          <div className="absolute top-4 left-6 text-brand-accent/10 pointer-events-none self-start">
            <Quote className="h-14 w-14 rotate-180 opacity-20 stroke-[2.5px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            
            <div className="w-full h-full min-h-[140px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex flex-col items-center w-full"
                >
                  <p className="text-brand-text text-base sm:text-lg leading-relaxed text-center font-sans max-w-3xl mb-8 italic">
                    "{currentReview.text}"
                  </p>

                  {/* Author Profile Information row */}
                  <div className="flex items-center gap-4 border-t border-brand-border/60 pt-6 w-full max-w-lg justify-center">
                    
                    <img
                      src={currentReview.avatarUrl}
                      alt={currentReview.author}
                      className="h-10 w-10 rounded-full object-cover border border-brand-border/50"
                    />

                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-brand-text tracking-wide uppercase">{currentReview.author}</span>
                        <div className="flex items-center gap-1 text-[8px] bg-white font-mono tracking-wider font-semibold border border-brand-border text-brand-text-muted px-2 py-0.5 rounded-sm uppercase">
                          <CheckCircle2 className="h-2.5 w-2.5 text-brand-accent" />
                          <span>Verified</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-0.5 text-brand-accent">
                          {[...Array(currentReview.rating)].map((_, i) => (
                            <Star key={i} className="h-2.5 w-2.5 fill-brand-accent stroke-none" />
                          ))}
                        </div>
                        <span className="text-[9px] text-brand-text-muted font-mono block">Date: {currentReview.date}</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrow keys Navigation */}
            <div className="flex gap-2.5 mt-8">
              <button
                onClick={prevReview}
                className="p-3.5 border border-brand-border hover:border-brand-text-muted bg-white text-brand-text-muted hover:text-brand-text rounded-sm transition-all cursor-pointer hover:bg-brand-surface-2"
                aria-label="Previous review"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>

              <button
                onClick={nextReview}
                className="p-3.5 border border-brand-border hover:border-brand-text-muted bg-white text-brand-text-muted hover:text-brand-text rounded-sm transition-all cursor-pointer hover:bg-brand-surface-2"
                aria-label="Next review"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </motion.div>

        {/* Call to Map Link Block with Scroll Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mt-8 bg-brand-surface border border-brand-border p-5 rounded-sm flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-brand-text-muted text-xs sm:text-sm font-sans">Our pride shows in every driveway. Examine our active Google reviews map coordinates.</span>
          </div>
          
          <a
            href="https://maps.google.com/maps?cid=10364408570481064277"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase font-mono tracking-widest text-brand-accent hover:text-brand-text font-bold bg-white px-4 py-3 rounded-sm border border-brand-border hover:bg-brand-surfaceTransition shadow-sm transition-all"
          >
            Audit Map G-Reviews →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
