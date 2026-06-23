/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { businessDetails } from '../data/websiteData';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolid = scrolled || currentPage !== 'home';

  const handleLinkClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(pageId);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'estimator', label: 'Estimator' },
    { id: 'process', label: 'Process & FAQ' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Get in Touch' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-transparent py-4 border-b border-transparent shadow-none'
            : isSolid
              ? 'bg-white/95 backdrop-blur-md py-4 border-b border-brand-border/40 shadow-sm'
              : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between w-full relative">
          
          {/* Left Column: Brand Logo */}
          <div className={`flex-shrink-0 flex items-center transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}>
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-2.5 sm:gap-3.5 group"
            >
              <img
                src="https://img1.wsimg.com/isteam/ip/426ef587-78bb-4986-95b4-3c780d59c7a8/IMG_1163.png"
                alt="Elite Pour Dynamics Logo"
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain border border-brand-accent/25 rounded-full group-hover:border-brand-accent/60 transition-colors shrink-0"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className={`font-display font-black text-lg sm:text-xl tracking-wider uppercase leading-none transition-colors ${
                isSolid ? 'text-brand-text group-hover:text-brand-accent' : 'text-white group-hover:text-brand-accent'
              }`}>
                Elite Pour
                <span className="block text-[8px] sm:text-[9px] tracking-[0.28em] text-brand-accent font-semibold mt-1 transition-colors group-hover:text-brand-accent-dark">
                  Dynamics
                </span>
              </div>
            </a>
          </div>

          {/* Center Column: Desktop Nav Links */}
          <div className="hidden lg:flex items-center justify-center flex-grow mx-8">
            <ul className="flex items-center gap-5 xl:gap-7">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#/${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      className={`relative group py-1.5 text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                        isActive
                          ? 'text-brand-accent font-black'
                          : isSolid
                            ? 'text-brand-text-muted hover:text-brand-text'
                            : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-accent transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Call, Free Quote, and Hamburger */}
          <div className="flex items-center gap-4 sm:gap-6 justify-end flex-shrink-0">
            {/* Quick Contact Link */}
            <div className={`transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              <a
                href="tel:+61455217023"
                className={`inline-flex items-center gap-2 py-1.5 px-3 rounded-full border transition-all duration-200 group ${
                  isSolid 
                    ? 'border-brand-border/40 hover:bg-brand-surface' 
                    : 'border-white/10 hover:bg-white/5'
                }`}
                aria-label="Call Elite Pour Dynamics"
              >
                <Phone className="h-3.5 w-3.5 text-brand-accent fill-brand-accent stroke-none group-hover:scale-110 transition-transform" />
                <span className={`inline-block font-sans text-[11px] font-bold tracking-wider transition-colors ${
                  isSolid ? 'text-brand-text-muted group-hover:text-brand-text' : 'text-white/80 group-hover:text-white'
                }`}>
                  +61 455 217 023
                </span>
              </a>
            </div>

            {/* Quote Action call out */}
            <a
              href="#/contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className={`hidden sm:inline-flex items-center gap-2 rounded-full py-1 pl-4.5 pr-1 text-xs font-semibold tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md ${
                currentPage === 'contact'
                  ? 'bg-brand-accent text-white'
                  : 'bg-[#161412] hover:bg-black text-white border border-white/5'
              } ${
                mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Free Quote</span>
              <span className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-white transition-transform">
                <ArrowRight className="h-3.5 w-3.5 text-black" />
              </span>
            </a>

            {/* Mobile hamburger menu toggler */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex flex-col gap-1.5 p-2.5 rounded-md border transition-all cursor-pointer z-50 shrink-0 ${
                mobileMenuOpen
                  ? 'border-white/10 hover:bg-white/5' 
                  : isSolid
                    ? 'border-brand-border/30 hover:bg-brand-surface' 
                    : 'border-white/10 hover:bg-white/5'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              <span
                className={`block w-5.5 h-[2px] transition-transform duration-300 ${
                  mobileMenuOpen
                    ? 'bg-white'
                    : isSolid
                      ? 'bg-brand-text'
                      : 'bg-white'
                } ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-5.5 h-[2px] transition-opacity duration-300 ${
                  mobileMenuOpen
                    ? 'bg-white'
                    : isSolid
                      ? 'bg-brand-text'
                      : 'bg-white'
                } ${mobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5.5 h-[2px] transition-transform duration-300 ${
                  mobileMenuOpen
                    ? 'bg-white'
                    : isSolid
                      ? 'bg-brand-text'
                      : 'bg-white'
                } ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer (Dark Warm Theme) */}
      <div
        className={`fixed inset-0 z-40 bg-[#161412]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-5 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-3.5 text-center px-6 w-full max-w-sm mt-8">
          <span className="text-[#C8A84C] font-mono text-[10px] tracking-[0.3em] font-bold uppercase mb-3 opacity-90">
            Navigation
          </span>
          {[
            { id: 'home', label: 'Home Page', num: '01' },
            { id: 'services', label: 'Our Services', num: '02' },
            { id: 'estimator', label: 'Rate Estimator', num: '03' },
            { id: 'process', label: 'Our Process & FAQ', num: '04' },
            { id: 'gallery', label: 'Our Gallery', num: '05' },
            { id: 'contact', label: 'Get In Touch', num: '06' },
          ].map((item, index) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={`#/${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`group flex items-baseline gap-3.5 text-2xl sm:text-3xl font-display font-black uppercase tracking-wider transition-all duration-200 ${
                  isActive ? 'text-[#E1E0CC]' : 'text-white/80 hover:text-[#C8A84C] hover:translate-x-1.5'
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 55}ms` : '0ms',
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(15px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transitionProperty: 'all',
                  transitionDuration: '300ms',
                }}
              >
                <span className={`text-[10px] font-mono font-bold tracking-normal transition-colors ${
                  isActive ? 'text-[#C8A84C]/80' : 'text-white/30 group-hover:text-[#C8A84C]/80'
                }`}>
                  {item.num}.
                </span>
                {item.label}
              </a>
            );
          })}
        </div>

        <div 
          className="flex flex-col items-center gap-2.5 mt-8 pt-6 border-t border-white/5 w-60 text-center transition-all duration-300 delay-350"
          style={{
            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(15px)',
            opacity: mobileMenuOpen ? 1 : 0,
          }}
        >
          <a
            href="tel:+61455217023"
            className="flex items-center gap-2 text-md font-bold text-white hover:text-[#C8A84C] transition-colors duration-200"
          >
            <Phone className="h-3.5 w-3.5 text-[#C8A84C] fill-[#C8A84C] stroke-none" />
            <span>+61 455 217 023</span>
          </a>
          <span className="text-[9px] text-white/40 tracking-widest uppercase font-bold">
            Melbourne local experts
          </span>
        </div>

        {/* Subtle Watermark Branding */}
        <div className="absolute bottom-8 opacity-[0.03] flex flex-col items-center gap-1 pointer-events-none select-none">
          <img
            src="https://img1.wsimg.com/isteam/ip/426ef587-78bb-4986-95b4-3c780d59c7a8/IMG_1163.png"
            alt=""
            className="h-9 w-9 object-contain filter invert"
          />
          <span className="font-display font-black text-[9px] tracking-[0.25em] uppercase text-white">
            Elite Pour Dynamics
          </span>
        </div>
      </div>
    </>
  );
}
