import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Hammer, Users, Star } from 'lucide-react';
import { PrismaHero } from '../components/ui/prisma-hero';
import { servicesData, testimonialsData } from '../data/websiteData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  isInitialLoading?: boolean;
  loaderStep?: number;
}

export default function HomePage({ onNavigate, isInitialLoading = false, loaderStep = 1 }: HomePageProps) {
  // Select top 3 services for display
  const featuredServices = servicesData.slice(0, 3);
  const topFeedback = testimonialsData[0];

  return (
    <div className="space-y-0">
      {/* Visual Hero Section */}
      <PrismaHero 
        onEstimatorClick={() => onNavigate('estimator')} 
        isInitialLoading={isInitialLoading}
        loaderStep={loaderStep}
      />

      {/* Corporate Highlights Banner */}
      <section className="py-12 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,224,204,0.05),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <Shield className="h-7 w-7 text-[#E1E0CC]" />
            <span className="text-sm font-bold uppercase tracking-wider font-display">Vic-State Compliant</span>
            <span className="text-[10px] text-zinc-400 font-mono">AS3600 Structural Standard</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Hammer className="h-7 w-7 text-[#E1E0CC]" />
            <span className="text-sm font-bold uppercase tracking-wider font-display">Premium Steel Reinforce</span>
            <span className="text-[10px] text-zinc-400 font-mono">SL82 / SL92 Spec Mesh</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Users className="h-7 w-7 text-[#E1E0CC]" />
            <span className="text-sm font-bold uppercase tracking-wider font-display">Melbourne Experts</span>
            <span className="text-[10px] text-zinc-400 font-mono">Precinct-wide Local Operatives</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Star className="h-7 w-7 text-[#E1E0CC]" fill="currentColor" />
            <span className="text-sm font-bold uppercase tracking-wider font-display">100% Verified Quality</span>
            <span className="text-[10px] text-zinc-400 font-mono">Complete 5-Star Reviews</span>
          </div>
        </div>
      </section>

      {/* Professional Introduction Block with Bento Grid */}
      <section className="py-24 bg-white text-[#161412] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-text/50">
                Melbourne Premium Concreting
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-[#161412] uppercase leading-[0.95]">
                Engineering <br className="hidden md:inline" />
                <span className="font-extrabold text-[#161412]">Ground Integrity</span>
              </h2>
              <p className="text-brand-text-muted text-sm sm:text-base font-light leading-relaxed">
                Elitepour Dynamics is Melbourne's premium crew of concrete specialists. Headquartered in the Wollert precinct, we combine advanced engineering calculations, rigid formwork setup, heavy-duty reinforcing steel, and supreme concrete aggregate mixtures to pour pavements built for decades of constant loading.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Engineered Class 3 structural roadbase compacted to refusal',
                  'Rigid steel-reinforced concrete piers for sub-grade support',
                  'Double-layer heavy-duty reinforcement on vehicular zones',
                  'Vapor barrier standard and expansion contraction cuts control'
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#161412] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-brand-text">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature Box 1 */}
              <div className="bg-brand-surface border border-brand-border p-8 rounded-sm space-y-4">
                <span className="text-2xl font-display font-bold text-zinc-300">01</span>
                <h3 className="font-display font-bold uppercase tracking-wider text-sm">Residential Foundation Slabs</h3>
                <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                  From shed foundations to house extension slabs, we configure proper trenching, SL82 reinforcement mesh layout, vapor barriers, and level-locked finishes on site.
                </p>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="text-[10px] uppercase font-mono font-bold text-[#161412] flex items-center gap-1.5 hover:underline"
                >
                  View Details <ArrowRight className="h-3 w-3" />
                </button>
              </div>

              {/* Feature Box 2 */}
              <div className="bg-brand-surface border border-brand-border p-8 rounded-sm space-y-4">
                <span className="text-2xl font-display font-bold text-zinc-300">02</span>
                <h3 className="font-display font-bold uppercase tracking-wider text-sm">Exposed Aggregate Specialists</h3>
                <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                  A modern, non-slip designer finish perfect for modern Melbourne driveways and pathways. Available in an array of clean natural stone styles.
                </p>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="text-[10px] uppercase font-mono font-bold text-[#161412] flex items-center gap-1.5 hover:underline"
                >
                  View Details <ArrowRight className="h-3 w-3" />
                </button>
              </div>

              {/* Feature Box 3 */}
              <div className="bg-brand-surface border border-brand-border p-8 rounded-sm space-y-4 col-span-1 sm:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2 max-w-md">
                    <span className="text-2xl font-display font-bold text-zinc-300">03</span>
                    <h3 className="font-display font-bold uppercase tracking-wider text-sm">Interactive Rate Estimator</h3>
                    <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                      Calculate exact concrete volume, excavation depths, steel reinforcement ratios, and secure transparent local rates in real-time.
                    </p>
                  </div>
                  <button 
                    onClick={() => onNavigate('estimator')}
                    className="group inline-flex items-center gap-3.5 rounded-full bg-[#161412] hover:bg-black text-white py-1.5 pl-6 pr-1.5 text-xs sm:text-sm font-semibold transition-all hover:gap-4.5 cursor-pointer shadow-lg shrink-0 self-start sm:self-center"
                  >
                    Launch Estimator
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                      <ArrowRight className="h-4 w-4 text-black" />
                    </span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="py-24 bg-brand-surface/50 border-t border-brand-border relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-text/50">
                Our Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-[#161412] uppercase leading-[0.95]">
                Specialized <br className="hidden md:inline" />
                <span className="font-extrabold text-[#161412]">Pour Solutions</span>
              </h2>
            </div>
            <button 
              onClick={() => onNavigate('services')}
              className="group inline-flex items-center gap-3 rounded-full bg-[#161412] hover:bg-black text-white text-xs px-5 py-2.5 font-bold uppercase tracking-wider cursor-pointer shadow transition-all duration-200"
            >
              Explore All Services
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-brand-border rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col group overflow-hidden"
              >
                <div className="h-48 relative overflow-hidden bg-zinc-900 border-b border-brand-border">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-4 font-mono text-[10px] font-bold text-white bg-zinc-950/80 px-2.5 py-1 tracking-wider uppercase rounded-sm border border-white/10">
                    Est. Rate: ${service.basePricePerSqm}/m²
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold uppercase text-brand-text text-base leading-snug group-hover:text-black transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                      {service.shortDesc}
                    </p>
                  </div>
                  <button 
                    onClick={() => onNavigate('services')}
                    className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#161412] flex items-center gap-1.5 group-hover:underline "
                  >
                    View Specifications <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work / Project Showcase Bento Grid */}
      <section className="py-24 bg-white relative border-t border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-text/50">
                Craftsmanship In Action
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-[#161412] uppercase leading-[0.95]">
                Recent Melbourne <br className="hidden md:inline" />
                <span className="font-extrabold text-[#161412]">Pours Showcase</span>
              </h2>
            </div>
            <button 
              onClick={() => onNavigate('gallery')}
              className="group inline-flex items-center gap-3 rounded-full bg-[#161412] hover:bg-black text-white text-xs px-5 py-2.5 font-bold uppercase tracking-wider cursor-pointer shadow transition-all duration-200"
            >
              View Full Gallery
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Featured Project - Left column (spans 7 cols on desktop) */}
            <div 
              onClick={() => onNavigate('gallery')}
              className="md:col-span-7 group relative h-[420px] rounded-sm overflow-hidden border border-brand-border bg-zinc-950 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <img 
                src="/driveway.jpeg" 
                alt="Exposed Aggregate Driveway Wollert" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-102 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-brand-accent text-white font-mono text-[9px] font-bold px-2.5 py-1 tracking-widest uppercase rounded-sm z-10">
                Featured Project
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest font-bold">
                  Exposed Aggregate • Wollert
                </span>
                <h3 className="font-display text-2xl font-black uppercase tracking-wide">
                  Wollert Exclusive Aggregate Driveway
                </h3>
                <p className="text-xs text-zinc-300 font-light leading-relaxed max-w-lg group-hover:text-white transition-colors duration-200">
                  Premium river aggregate concrete formulated for heavy-load domestic vehicles. Finished with a protective UV gloss sealer and precision-cut stress lines.
                </p>
              </div>
            </div>

            {/* Right column - 2 stacked projects (spans 5 cols on desktop) */}
            <div className="md:col-span-5 flex flex-col gap-6">
              
              {/* Project 2 - Epoxy floor */}
              <div 
                onClick={() => onNavigate('gallery')}
                className="group relative h-[197px] rounded-sm overflow-hidden border border-brand-border bg-zinc-950 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <img 
                  src="/service2.webp" 
                  alt="High-Gloss Epoxy Garage Floor" 
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-102 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[9px] font-mono text-brand-gold uppercase tracking-widest font-bold">
                    High-Gloss Epoxy • Wollert
                  </span>
                  <h3 className="font-display text-lg font-black uppercase tracking-wide">
                    Double Garage Flake Epoxy Floor
                  </h3>
                </div>
              </div>

              {/* Project 3 - Retaining Wall */}
              <div 
                onClick={() => onNavigate('gallery')}
                className="group relative h-[197px] rounded-sm overflow-hidden border border-brand-border bg-zinc-950 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <img 
                  src="/service1.webp" 
                  alt="Concrete Retaining Wall" 
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-102 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[9px] font-mono text-brand-gold uppercase tracking-widest font-bold">
                    Retaining Wall • Craigieburn
                  </span>
                  <h3 className="font-display text-lg font-black uppercase tracking-wide">
                    Reinforced Concrete Sleeper Wall
                  </h3>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Testimonial Feature Highlight Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="bg-brand-surface border border-brand-border p-8 sm:p-12 md:p-16 rounded-sm shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-9xl font-serif text-brand-border/30 select-none pointer-events-none">
              “
            </div>
            <div className="space-y-6 max-w-3xl relative z-10">
              <span className="text-brand-accent font-display text-[10px] tracking-[0.3em] font-bold uppercase block">
                Latest Client Feedback
              </span>
              <div className="flex gap-1">
                {[...Array(topFeedback.rating)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 text-[#161412] fill-current" />
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl font-medium font-sans text-brand-text italic leading-relaxed">
                "{topFeedback.text}"
              </p>
              <div className="flex items-center gap-3 pt-2">
                <img
                  src={topFeedback.avatarUrl}
                  alt={topFeedback.author}
                  className="h-11 w-11 object-cover rounded-full border border-brand-border shadow-sm shrink-0"
                />
                <div>
                  <h4 className="font-display font-bold uppercase tracking-wider text-xs text-[#161412]">
                    {topFeedback.author}
                  </h4>
                  <span className="text-[10px] text-zinc-400 font-mono tracking-wider block">
                    Verified Customer • {topFeedback.date}
                  </span>
                </div>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button 
                  onClick={() => onNavigate('gallery')}
                  className="group inline-flex items-center gap-3.5 rounded-full bg-[#161412] hover:bg-black text-white py-1.5 pl-6 pr-1.5 text-xs sm:text-sm font-semibold transition-all hover:gap-4.5 cursor-pointer shadow-lg"
                >
                  View Client Showcases
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </span>
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-xs uppercase font-mono font-bold tracking-widest text-[#161412] hover:underline px-4 py-3"
                >
                  Request references
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Action conversion Grid banner */}
      <section className="py-24 bg-[#161412] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(225,224,204,0.06),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-6">
          <span className="text-[#E1E0CC] font-mono text-[10px] tracking-[0.3em] font-bold uppercase">
            Start Your Project Today
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-[#E1E0CC] uppercase max-w-2xl mx-auto leading-none">
            Ready to Lock in Your <br />
            <span className="font-extrabold text-white">Elite Standard Pour?</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto font-light leading-relaxed">
            Headquartered out of Wollert, we engineer flatwork built to last decades. Access our premium volume calculators or fill out our structural specification brief.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('estimator')}
              className="group inline-flex items-center gap-3.5 rounded-full bg-[#161412] hover:bg-black text-white py-1.5 pl-6 pr-1.5 text-xs sm:text-sm font-semibold transition-all hover:gap-4.5 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Free Estimate
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                <ArrowRight className="h-4 w-4 text-black" />
              </span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs uppercase font-mono font-bold tracking-widest text-white hover:text-[#E1E0CC] px-4 py-3 transition-colors"
            >
              Submit Specs Direct →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
