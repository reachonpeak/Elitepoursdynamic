import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, Calendar, Clock, MapPin, Building2 } from 'lucide-react';
import { businessDetails } from '../data/websiteData';

interface ContactPageProps {
  prefilledQuoteDetails: {
    serviceName: string;
    area: number;
    details: string;
  } | null;
  onClearPrefilledQuote: () => void;
}

export default function ContactPage({
  prefilledQuoteDetails,
  onClearPrefilledQuote
}: ContactPageProps) {
  return (
    <div className="pt-20">
      {/* Contact Header Banner */}
      <section className="bg-zinc-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(225,224,204,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-4 relative z-10">
          <span className="text-[#E1E0CC] font-mono text-[10px] tracking-[0.3em] font-bold uppercase">
            Start Your Construction File
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight uppercase leading-none text-[#E1E0CC]">
            Request An <span className="font-extrabold text-white">On-Site Measurement</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            Fill out our dynamic construction request desk below. Our coordinators review your sizing constraints, evaluate soil classifications, and schedule direct on-site measurements.
          </p>
        </div>
      </section>

      {/* Form and side panels mount */}
      <div className="bg-white">
        <ContactForm
          prefilledQuoteDetails={prefilledQuoteDetails}
          onClearPrefilledQuote={onClearPrefilledQuote}
        />
      </div>
    </div>
  );
}
