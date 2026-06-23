/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface InitialLoaderProps {
  onComplete: () => void;
}

type StructuralPhase = {
  code: string;
  label: string;
  gaugeValue: string;
};

const SHIELD_PHASES: StructuralPhase[] = [
  { code: 'PH-01/PREP', label: 'COMPACTING SUBGRADE CORE strata', gaugeValue: '98.4%' },
  { code: 'PH-02/REBAR', label: 'TENSION SPLICE STEEL INTEGRATION', gaugeValue: 'SL82 GRID' },
  { code: 'PH-03/CAST', label: 'MONOLITHIC PUMP PLACEMENT [32MPa]', gaugeValue: 'COMPRESS' },
  { code: 'PH-04/CURE', label: 'REVEAL CONCRETE MATRIX MATTE HONED', gaugeValue: '100% DONE' }
];

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [binaryTicker, setBinaryTicker] = useState<string>('00');

  useEffect(() => {
    // Step progression - fast, precise jumps that mimic a scientific gauge
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= SHIELD_PHASES.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 450);

    // Minor technical noise simulator to make the sidebar feel like real machinery/measuring gear
    const noiseInterval = setInterval(() => {
      const hex = Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0');
      setBinaryTicker(hex);
    }, 90);

    // Complete overall introduction after curing completes
    const endTimeout = setTimeout(() => {
      onComplete();
    }, 2100);

    return () => {
      clearInterval(stepInterval);
      clearInterval(noiseInterval);
      clearTimeout(endTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.85, ease: [0.82, 0.01, 0.15, 1.01] }
      }}
      className="fixed inset-0 bg-[#0F0E0D] text-white z-[10000] select-none overflow-hidden font-mono"
      id="app-initial-loader"
    >
      {/* 1. Fine layout guidelines mapping the screen's canvas centers */}
      <div className="absolute inset-x-0 top-1/2 h-[0.5px] bg-white/5 pointer-events-none" />
      <div className="absolute inset-y-0 left-1/2 w-[0.5px] bg-white/5 pointer-events-none" />
      
      {/* 2. Delicate Outer Frame Grid and Crosshairs */}
      <div className="absolute inset-4 sm:inset-8 border border-white/5 pointer-events-none" />
      
      {/* Corner Tick lines to mimic architectural blueprint bounding limits */}
      <div className="absolute top-2 left-6 w-[1px] h-4 bg-white/10" />
      <div className="absolute top-2 right-6 w-[1px] h-4 bg-white/10" />
      <div className="absolute bottom-2 left-6 w-[1px] h-4 bg-white/10" />
      <div className="absolute bottom-2 right-6 w-[1px] h-4 bg-white/10" />

      {/* 3. TECHNICAL METADATA MARGIN PANELS (Understated human craftsmanship touch) */}
      
      {/* Top Left: Melbourne Geographic Anchor coords */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 text-[8px] sm:text-[9px] tracking-[0.25em] text-white/40 space-y-1">
        <div className="flex items-center gap-1.5 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A84C] animate-ping" />
          <span>PORT / PORT PHILLIP BAY BOUND</span>
        </div>
        <div className="font-light">LOC: 37° 48&apos; 49.7&quot; S / 144° 57&apos; 47.3&quot; E</div>
      </div>

      {/* Top Right: Authorized Building Practitioner Registration metadata */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 text-right text-[8px] sm:text-[9px] tracking-[0.2em] text-white/40 space-y-1">
        <div className="font-bold text-[#E1E0CC]">AS3600 COMPLIANT CODE</div>
        <div className="font-light text-[7px] opacity-75">REGIST. PRACTITIONER: DB-U 41258</div>
      </div>

      {/* Bottom Left: Hex structural stream telemetry data */}
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-[8px] sm:text-[9px] tracking-[0.3em] text-white/35 space-y-1">
        <div>STREAM LOGS: <span className="text-[#C8A84C]">0x{binaryTicker}7F_SYS</span></div>
        <div className="font-light text-[7px] uppercase tracking-wider">Formboard Leveler Calibration: OK</div>
      </div>

      {/* Bottom Right: Digital Progress index */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 text-right text-[9px] tracking-[0.2em] text-white/50">
        <div className="text-[17px] font-light text-[#E1E0CC]/80 font-display">
          {(currentStep + 1).toString().padStart(2, '0')}<span className="text-white/20 text-xs">/04</span>
        </div>
        <div className="text-[7.5px] uppercase text-[#C8A84C] tracking-[0.3em]">
          EXEC PROTOCOL
        </div>
      </div>

      {/* 4. MAIN CENTRAL STRUCTURE AREA */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-8 z-10 text-center">
        
        {/* Fine coordinate guidelines enclosure */}
        <div className="max-w-xl w-full border-y border-white/5 py-12 relative">
          
          {/* Symmetrical fine corner markers */}
          <div className="absolute top-0 left-0 w-3 h-[1px] bg-[#C8A84C]/50" />
          <div className="absolute top-0 left-0 h-3 w-[1px] bg-[#C8A84C]/50" />
          <div className="absolute top-0 right-0 w-3 h-[1px] bg-[#C8A84C]/50" />
          <div className="absolute top-0 right-0 h-3 w-[1px] bg-[#C8A84C]/50" />
          <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-[#C8A84C]/50" />
          <div className="absolute bottom-0 left-0 h-3 w-[1px] bg-[#C8A84C]/50" />
          <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-[#C8A84C]/50" />
          <div className="absolute bottom-0 right-0 h-3 w-[1px] bg-[#C8A84C]/50" />

          {/* Core branding reveal - minimalist and massive */}
          <motion.div
            initial={{ opacity: 0, tracking: "0.15em" }}
            animate={{ opacity: 1, tracking: "0.3em" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#E1E0CC] uppercase leading-none select-none">
              ELITE POUR
            </h1>
            <div className="text-[#C8A84C] text-[10px] tracking-[0.45em] uppercase font-bold pl-1 font-mono">
              DYNAMICS CONCRETE
            </div>
          </motion.div>
        </div>

        {/* 5. LIVE STRUCTURAL LOG SEQUENCE FOOTER */}
        <div className="mt-8 h-8 flex flex-col items-center justify-center">
          <div className="text-[9px] uppercase tracking-[0.25em] text-white/30 flex items-center gap-3">
            <span className="text-[#C8A84C] font-bold">
              {SHIELD_PHASES[currentStep].code}
            </span>
            <span className="h-2 w-[1px] bg-white/20" />
            <motion.span
              key={currentStep}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#E1E0CC]/80"
            >
              {SHIELD_PHASES[currentStep].label}
            </motion.span>
            <span className="h-2 w-[1px] bg-white/20" />
            <span className="text-zinc-500 text-[8px] bg-white/5 px-1.5 py-0.5 rounded-xs font-bold font-mono">
              {SHIELD_PHASES[currentStep].gaugeValue}
            </span>
          </div>
        </div>

      </div>

      {/* Symmetrical framing lines overlay */}
      <div className="absolute inset-y-16 left-6 w-[0.5px] bg-white/5 hidden lg:block" />
      <div className="absolute inset-y-16 right-6 w-[0.5px] bg-white/5 hidden lg:block" />
    </motion.div>
  );
}
