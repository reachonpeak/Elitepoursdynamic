/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Facebook, Instagram, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { businessDetails } from '../data/websiteData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-brand-surface text-brand-text-muted border-t border-brand-border pt-20 pb-10 font-sans relative shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(224,123,57,0.01),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full font-sans">
        
        {/* Top Split directories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-border/60">
          
          {/* Brand/Identity Column (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <a href="#/" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Elitepour Dynamics Logo"
                  className="h-8 w-8 object-contain border border-brand-accent/20 rounded-full"
                />
                <span className="font-display font-black text-lg tracking-wider text-brand-text uppercase">
                  ELITEPOUR <span className="text-brand-gold">DYNAMICS</span>
                </span>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed max-w-sm font-light">
              Melbourne's leading independent concrete installation firm. We combine specialized heavy machinery, premium steel reinforcement structures, and engineered concrete mixtures to pour pavements built for decades of point loading.
            </p>

            {/* Social Icons row */}
            <div className="flex gap-3">
              <a
                href={businessDetails.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-brand-surface text-brand-text border border-brand-border rounded-sm transition-all shadow-sm"
                aria-label="Facebook social link"
              >
                <Facebook className="h-4.5 w-4.5 fill-current stroke-none text-zinc-900" />
              </a>
              <a
                href={businessDetails.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-brand-surface text-brand-text border border-brand-border rounded-sm transition-all shadow-sm"
                aria-label="Instagram social link"
              >
                <Instagram className="h-4.5 w-4.5 text-zinc-900" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-4">
            <p className="text-[10px] font-mono font-bold tracking-widest text-brand-text uppercase">
              Operations Directory
            </p>
            <nav className="flex flex-col gap-3 text-xs uppercase font-semibold font-display tracking-widest">
              <a
                href="#/"
                onClick={(e) => handleLinkClick(e, 'home')}
                className="hover:text-brand-text text-brand-text-muted transition-colors w-fit"
              >
                Home page
              </a>
              <a
                href="#/services"
                onClick={(e) => handleLinkClick(e, 'services')}
                className="hover:text-brand-text text-brand-text-muted transition-colors w-fit"
              >
                Our Services
              </a>
              <a
                href="#/estimator"
                onClick={(e) => handleLinkClick(e, 'estimator')}
                className="hover:text-brand-text text-brand-text-muted transition-colors w-fit"
              >
                Cost Estimator
              </a>
              <a
                href="#/process"
                onClick={(e) => handleLinkClick(e, 'process')}
                className="hover:text-brand-text text-brand-text-muted transition-colors w-fit"
              >
                Pour Framework
              </a>
              <a
                href="#/gallery"
                onClick={(e) => handleLinkClick(e, 'gallery')}
                className="hover:text-brand-text text-brand-text-muted transition-colors w-fit"
              >
                Project Gallery
              </a>
              <a
                href="#/contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="hover:text-brand-text text-brand-text-muted transition-colors w-fit"
              >
                Get a Free Quote
              </a>
            </nav>
          </div>

          {/* Quick Contacts Column */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[10px] font-mono font-bold tracking-widest text-brand-text uppercase">
              Quick Connections
            </p>
            
            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-zinc-900 fill-zinc-900 stroke-none shrink-0" />
                <a href={businessDetails.phoneRaw} className="hover:text-black text-brand-text transition-colors">
                  {businessDetails.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zinc-900 shrink-0" />
                <a href={businessDetails.emailRaw} className="hover:text-black text-brand-text transition-colors break-all">
                  {businessDetails.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zinc-900 shrink-0" />
                <a
                  href={businessDetails.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black text-brand-text transition-colors cursor-pointer"
                >
                  Locate on Google Maps
                </a>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-brand-text-muted">
                <ShieldCheck className="h-4.5 w-4.5 text-zinc-900" />
                <span>Public Liability Insured</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright details table */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-brand-text-muted/80 text-center md:text-left">
            Copyright © 2026 Elitepour Dynamics - All Rights Reserved. Conforming to AS3600 Concrete Standards.
          </p>

          <div className="flex gap-4 text-brand-text-muted/80 text-[10px] font-mono tracking-wide">
            <p>GoDaddy Redesign Template</p>
            <span>•</span>
            <p>VIC Structural Compliant</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
