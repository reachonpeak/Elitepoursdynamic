/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, ArrowRight } from 'lucide-react';
import { businessDetails } from '../data/websiteData';

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[96vh] sm:min-h-screen flex flex-col justify-end pt-36 pb-20 overflow-hidden bg-[#0A0908]">
      {/* CSS Keyframes for Hero animations injected directly in style tag */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes heroPan {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.07) translate(-1.5%, -1%); }
        }
        @keyframes scanDown {
          0% { top: 0%; opacity: 0.9; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes barExpand {
          to { transform: scaleX(1); }
        }
        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-pan {
          animation: heroPan 24s ease-in-out infinite alternate;
        }
        .animate-scan-line {
          animation: scanDown 4.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
        }
        .animate-bar-expand {
          animation: barExpand 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.8s forwards;
        }
        .animate-fade-up-1 {
          animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }
        .animate-fade-up-2 {
          animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
        }
        .animate-fade-up-3 {
          animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both;
        }
        .animate-fade-up-4 {
          animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.6s both;
        }
      `}} />

      {/* Extreme back pan image container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-hero-pan"
          style={{ backgroundImage: `url('/driveway.jpeg')` }}
        />
        {/* Layered vignette masking */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0F0E0D]/98 via-[#0F0E0D]/80 to-[#0F0E0D]/95 z-10" />
      </div>

      {/* Decorative moving laser scanner for interactive tech feel */}
      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E07B39] to-transparent opacity-0 z-20 animate-scan-line" />

      {/* Hero Body Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-30 w-full">
        <div className="max-w-4xl">
          
          {/* Label item */}
          <div className="inline-flex items-center gap-2.5 mb-5 animate-fade-up-1">
            <span className="block w-5 h-[2px] bg-[#E07B39]" />
            <span className="font-display text-[11px] sm:text-xs tracking-[0.25em] text-[#E07B39] uppercase font-bold">
              Melbournian Concrete Specialists
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-black text-6xl sm:text-[7.2rem] md:text-[8.5rem] tracking-tight uppercase leading-[0.91] text-[#EDE9E3]">
            <span className="block animate-fade-up-2">ELITEPOUR</span>
            <span className="relative inline-block animate-fade-up-4">
              DYNAMICS
              <span className="absolute bottom-1 sm:bottom-3 left-0 right-0 h-[3px] sm:h-[5px] bg-[#E07B39] scale-x-0 origin-left animate-bar-expand" />
            </span>
          </h1>

          {/* Description Subtext */}
          <p className="mt-8 max-w-lg text-[#EDE9E3]/70 font-sans text-sm sm:text-base leading-relaxed tracking-wide font-light animate-fade-up-4" style={{ animationDelay: '1.9s' }}>
            Premium driveways, exposed aggregate decorative stone finishes, structural residential slabs, and core-filled masonry retaining walls built to last decades, not years.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mt-10 animate-fade-up-4" style={{ animationDelay: '2.1s' }}>
            <button
              onClick={() => handleScroll('contact')}
              className="px-8 py-4.5 bg-[#E07B39] hover:bg-[#B35E24] text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-sm shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center"
            >
              Get a Free Quote
            </button>

            <a
              href="tel:+61455217023"
              className="group flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#EDE9E3] hover:text-[#E07B39] py-3.5 transition-colors"
            >
              <Phone className="h-4.5 w-4.5 text-[#E07B39] fill-current stroke-none" />
              <span>Call +61 455 217 023</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 group cursor-pointer" onClick={() => handleScroll('about')}>
        <span className="font-display text-[9px] tracking-[0.2em] text-[#7A7672] uppercase font-bold group-hover:text-[#EDE9E3] transition-colors">
          Scroll Down
        </span>
        <div className="w-[1px] h-9 bg-gradient-to-b from-[#E07B39] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
      </div>
    </section>
  );
}
