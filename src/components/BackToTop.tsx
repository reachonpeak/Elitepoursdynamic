/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Experience has shown that 450px is scroll past the hero section threshold
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Call once initially to verify scroll state on mount/render
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 group flex h-12 w-12 items-center justify-center rounded-full bg-[#161412] hover:bg-black text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl border border-white/5 cursor-pointer"
          aria-label="Back to top"
          id="back-to-top-btn"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-110">
            <ArrowUp className="h-4.5 w-4.5 text-black stroke-[2.5]" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
