/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Eye, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('epd_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDecline = () => {
    localStorage.setItem('epd_cookie_consent', 'declined');
    setVisible(false);
  };

  const handleAccept = () => {
    localStorage.setItem('epd_cookie_consent', 'accepted');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-white border border-brand-border p-5 rounded-sm shadow-2xl z-50 text-brand-text flex flex-col gap-4 font-sans"
        >
          {/* Top Details Header */}
          <div className="flex gap-3.5 items-start">
            <div className="bg-brand-text/5 text-brand-text p-2 rounded-sm border border-brand-text/15 shrink-0">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold tracking-wider uppercase text-brand-text mb-1">
                Privacy Cookies Notice
              </h4>
              <p className="text-brand-text-muted text-[11px] leading-relaxed font-light">
                We use essential cookies to analyze load speed and optimize concrete project deliveries. Agree to permit diagnostic cookies.
              </p>
            </div>
          </div>

          {/* Decision CTAs */}
          <div className="grid grid-cols-2 gap-2 text-[10px] font-bold tracking-wider uppercase">
            <button
              onClick={handleDecline}
              className="bg-white border border-brand-border hover:border-brand-text-muted text-brand-text-muted hover:text-brand-text py-2.5 rounded-sm transition-colors cursor-pointer"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="bg-brand-accent hover:bg-brand-accent-dark text-white py-2.5 rounded-sm transition-colors cursor-pointer text-center shadow-sm"
            >
              Accept Core
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
