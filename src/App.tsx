/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Core structural layouts
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import BackToTop from './components/BackToTop';

// Page components
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import EstimatorPage from './pages/EstimatorPage';
import GalleryPage from './pages/GalleryPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

import { servicesData } from './data/websiteData';

export default function App() {
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);
  const [prefilledQuote, setPrefilledQuote] = useState<{
    serviceName: string;
    area: number;
    details: string;
  } | null>(null);

  // Synchronise state with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/services')) {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.startsWith('#/estimator')) {
        setCurrentPage('estimator');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.startsWith('#/gallery')) {
        setCurrentPage('gallery');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.startsWith('#/process')) {
        setCurrentPage('process');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.startsWith('#/contact')) {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Execute hash change code on load
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    if (page === 'home') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  // Callback when a user clicks "Interactive Estimate" on a Service
  const handleSelectServiceForQuote = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleNavigate('estimator');
  };

  // Callback when user generates complete estimated volumes and clicks to lock & submit quote
  const handleSelectQuoteDetails = (quoteDetails: {
    serviceName: string;
    area: number;
    details: string;
  }) => {
    setPrefilledQuote(quoteDetails);
    handleNavigate('contact');
  };

  const handleClearPrefilledQuote = () => {
    setPrefilledQuote(null);
  };

  // Select component to render
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return (
          <ServicesPage
            onSelectServiceForQuote={handleSelectServiceForQuote}
            onNavigate={handleNavigate}
          />
        );
      case 'estimator':
        return (
          <EstimatorPage
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            onSelectQuote={handleSelectQuoteDetails}
          />
        );
      case 'gallery':
        return <GalleryPage />;
      case 'process':
        return <ProcessPage />;
      case 'contact':
        return (
          <ContactPage
            prefilledQuoteDetails={prefilledQuote}
            onClearPrefilledQuote={handleClearPrefilledQuote}
          />
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-text font-sans antialiased overflow-x-hidden selection:bg-brand-accent/20 selection:text-brand-text flex flex-col justify-between">


      <div>
        {/* Navigation Bar with routing controls */}
        <Header currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Dynamic page area - Snappy, instant rendering on internal shifts */}
        <main className="flex-grow">
          {renderPage()}
        </main>
      </div>

      {/* Persistent global layout fixtures */}
      <div>
        {/* Back to top button */}
        <BackToTop />

        {/* Cookies banner */}
        <CookieConsent />

        {/* Dynamic Footer with multi-page triggers */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
