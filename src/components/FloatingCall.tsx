/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCall() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after a short 1-second delay for smooth page entrance feel
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          href="tel:+61455217023"
          className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-40 group flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#E07B39] hover:bg-[#B35E24] text-white px-5 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10 cursor-pointer"
          aria-label="Call Elite Pour Dynamics"
          id="floating-call-btn"
        >
          <Phone className="h-4.5 w-4.5 text-white fill-white stroke-none group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-sans text-[11px] sm:text-xs font-black tracking-widest uppercase">
            Call Now
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
