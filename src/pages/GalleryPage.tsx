import React from 'react';
import ProjectGallery from '../components/ProjectGallery';
import TestimonialSlider from '../components/TestimonialSlider';
import CaseStudiesSection from '../components/CaseStudiesSection';
import { Camera, Star, Award, CheckCircle } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="pt-20">
      {/* Portfolio Showcase Header */}
      <section className="bg-zinc-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(225,224,204,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-4 relative z-10">
          <span className="text-[#E1E0CC] font-mono text-[10px] tracking-[0.3em] font-bold uppercase">
            Completed Projects Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight uppercase leading-none text-[#E1E0CC]">
            Proven <span className="font-extrabold text-white">Visual Mastery</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            Drag the customized before/after visual sliders to inspect our initial structured rock bases, dual SL82 reinforcement layouts, and the beautiful aggregate stones post curing washes.
          </p>
        </div>
      </section>

      {/* Proof/Metrics Summary Strip */}
      <section className="py-6 bg-brand-surface border-b border-brand-border text-[#161412] font-mono text-[11px] font-bold uppercase tracking-wider">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-wrap gap-4 items-center justify-around text-center">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>450+ Completed Melbourne Pours</span>
          </div>
          <span className="hidden sm:inline-block text-zinc-300">•</span>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            <span>Conforming to AS3600 Standards</span>
          </div>
          <span className="hidden sm:inline-block text-zinc-300">•</span>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4" fill="currentColor" />
            <span>4.9 Star Google Business Rating</span>
          </div>
        </div>
      </section>

      {/* Featured Case Studies / Past Works Section */}
      <CaseStudiesSection />

      {/* Main interactive Project Gallery module */}
      <div className="bg-white py-12 border-t border-brand-border/40">
        <ProjectGallery />
      </div>

      {/* Verified Customer Feedback slide deck */}
      <div className="bg-brand-surface/50 border-t border-brand-border py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-sm mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
              Reviews &amp; Ratings
            </span>
            <h2 className="font-display font-bold uppercase tracking-wide text-2xl text-brand-text">
              What Melbourne Homeowners Say
            </h2>
            <div className="h-[2px] w-12 bg-black mx-auto" />
          </div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
}
