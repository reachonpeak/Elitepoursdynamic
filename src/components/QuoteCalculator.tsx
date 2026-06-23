/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, HelpCircle, AlertCircle, Info } from 'lucide-react';
import { servicesData } from '../data/websiteData';
import { motion, AnimatePresence } from 'motion/react';

interface QuoteCalculatorProps {
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
  onSelectQuote: (quoteDetails: {
    serviceName: string;
    area: number;
    details: string;
  }) => void;
}

export default function QuoteCalculator({
  selectedServiceId,
  setSelectedServiceId,
  onSelectQuote
}: QuoteCalculatorProps) {
  const [inputMode, setInputMode] = useState<'dimensions' | 'direct'>('dimensions');
  const [width, setWidth] = useState<number>(3.5);
  const [length, setLength] = useState<number>(12);
  const [directArea, setDirectArea] = useState<number>(42);
  const [thickness, setThickness] = useState<100 | 125 | 150>(100);
  const [reinforcement, setReinforcement] = useState<'sl62' | 'sl72' | 'sl82' | 'sl92'>('sl82');
  const [excavation, setExcavation] = useState<boolean>(true);
  const [sleeperType, setSleeperType] = useState<'wooden' | 'concrete'>('concrete');

  // States for calculated totals
  const [calculatedArea, setCalculatedArea] = useState<number>(42);
  const [estMin, setEstMin] = useState<number>(0);
  const [estMax, setEstMax] = useState<number>(0);

  // Auto calculate values
  useEffect(() => {
    const area = inputMode === 'dimensions' ? Math.round(width * length * 10) / 10 : directArea;
    setCalculatedArea(area);

    const service = servicesData.find(s => s.id === selectedServiceId);
    if (!service) return;

    let ratePerSqm = service.basePricePerSqm;

    if (selectedServiceId === 'retaining-walls') {
      // Sleeper type modifier
      if (sleeperType === 'wooden') ratePerSqm *= 0.85;
      else ratePerSqm *= 1.0; // concrete sleepers = base rate
    } else if (selectedServiceId === 'epoxy-flooring') {
      // Epoxy: no modifiers
    } else {
      // Standard concrete services
      if (thickness === 125) ratePerSqm *= 1.15;
      else if (thickness === 150) ratePerSqm *= 1.35;

      if (reinforcement === 'sl72') ratePerSqm += 8;
      else if (reinforcement === 'sl82') ratePerSqm += 12;
      else if (reinforcement === 'sl92') ratePerSqm += 25;

      if (excavation) ratePerSqm += 15;
    }

    const baseCost = area * ratePerSqm;
    setEstMin(Math.round(baseCost * 0.95));
    setEstMax(Math.round(baseCost * 1.12));
  }, [selectedServiceId, inputMode, width, length, directArea, thickness, reinforcement, excavation, sleeperType]);

  const applyPreset = (w: number, l: number) => {
    setInputMode('dimensions');
    setWidth(w);
    setLength(l);
  };

  const handleExportQuote = () => {
    const service = servicesData.find(s => s.id === selectedServiceId);
    if (!service) return;

    const areaLine = `- Area Sizing: ${calculatedArea} sqm (${inputMode === 'dimensions' ? `${width}m x ${length}m` : 'Direct input'})`;
    const detailsText = isRetainingWall
      ? `Calculated Estimate details:
- Service Selected: ${service.title}
${areaLine}
- Sleeper Type: ${sleeperType === 'wooden' ? 'Wooden Sleepers' : 'Concrete Sleepers'}
- Automatic Preliminary Estimate: $${estMin.toLocaleString()} - $${estMax.toLocaleString()} AUD`
      : isEpoxy
      ? `Calculated Estimate details:
- Service Selected: ${service.title}
${areaLine}
- Automatic Preliminary Estimate: $${estMin.toLocaleString()} - $${estMax.toLocaleString()} AUD`
      : `Calculated Estimate details:
- Service Selected: ${service.title}
${areaLine}
- Concrete Thickness: ${thickness}mm
- Reinforcement Mesh: ${reinforcement.toUpperCase()} steel mesh
- Excavation / Base Preparation Required: ${excavation ? 'Yes' : 'No'}
- Automatic Preliminary Estimate: $${estMin.toLocaleString()} - $${estMax.toLocaleString()} AUD`;

    onSelectQuote({
      serviceName: service.title,
      area: calculatedArea,
      details: detailsText
    });

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const topOffset = 85;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isRetainingWall = selectedServiceId === 'retaining-walls';
  const isEpoxy = selectedServiceId === 'epoxy-flooring';

  const selectedService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  return (
    <section id="estimator" className="py-24 bg-white text-brand-text relative border-t border-brand-border/40 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-surface/30 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 font-sans">
        
        {/* Title Block with Scroll Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mb-16 font-sans"
        >
          <div className="inline-flex items-center gap-2.5 mb-4 font-sans">
            <span className="block w-5 h-[2px] bg-brand-accent animate-pulse" />
            <span className="font-display text-[11px] sm:text-xs tracking-[0.25em] text-brand-accent uppercase font-bold">
              Cost Transparency
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-brand-text leading-none mb-4">
            Interactive Cost Estimator
          </h2>

          <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed font-light">
            Adjust measurements &amp; steel reinforcing parameters below to generate a transparent, instant preliminary price breakdown.
          </p>
        </motion.div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls - Left Column (7 cols) with Slide-In */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 bg-brand-surface border border-brand-border p-6 sm:p-8 space-y-8 rounded-sm shadow-sm"
          >
            
            {/* Step 1: Select Concrete Service Grade */}
            <div className="space-y-4">
              <label className="block text-[10px] font-semibold text-brand-accent uppercase tracking-[0.2em]">
                1. Select Concrete Finish Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servicesData.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`flex flex-col text-left p-4 rounded-sm border transition-all duration-200 cursor-pointer ${
                      selectedServiceId === s.id
                        ? 'border-brand-accent bg-brand-accent/5 text-brand-text'
                        : 'border-brand-border/60 bg-white text-brand-text-muted hover:border-brand-text-dim'
                    }`}
                  >
                    <span className="font-display font-bold text-base tracking-wide uppercase">{s.title}</span>
                    <span className="text-[11px] text-brand-text-muted mt-1 truncate">
                      Base: ~${s.basePricePerSqm}/sqm
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions */}
            <div className="space-y-4 pt-6 border-t border-brand-border/40">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <label className="text-[10px] font-semibold text-brand-accent uppercase tracking-[0.2em]">
                  2. Area Sizing Specifications
                </label>
                
                {/* Input Switch Toggles */}
                <div className="bg-white p-1 flex gap-1 border border-brand-border rounded-sm">
                  <button
                    onClick={() => setInputMode('dimensions')}
                    className={`text-[9px] font-semibold uppercase px-2.5 py-1 tracking-wider transition-colors rounded-sm cursor-pointer ${
                      inputMode === 'dimensions'
                        ? 'bg-brand-accent text-white'
                        : 'text-brand-text-muted hover:text-brand-text'
                    }`}
                  >
                    Dimensions Setup
                  </button>
                  <button
                    onClick={() => setInputMode('direct')}
                    className={`text-[9px] font-semibold uppercase px-2.5 py-1 tracking-wider transition-colors rounded-sm cursor-pointer ${
                      inputMode === 'direct'
                        ? 'bg-brand-accent text-white'
                        : 'text-brand-text-muted hover:text-brand-text'
                    }`}
                  >
                    Direct Sqm
                  </button>
                </div>
              </div>

              {/* AnimatePresence for input mode changes */}
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  {inputMode === 'dimensions' ? (
                    <motion.div
                      key="dimensions"
                      initial={{ opacity: 0, height: 0, y: 10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="space-y-6"
                    >
                      {/* Presets buttons */}
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[10px] text-brand-text-muted font-mono uppercase tracking-wider mr-1">Presets:</span>
                        <button
                          onClick={() => applyPreset(1, 10)}
                          className="text-[10px] bg-white hover:bg-brand-surface border border-brand-border rounded-sm px-2.5 py-1 text-brand-text transition-all"
                        >
                          Pathway (1m x 10m)
                        </button>
                        <button
                          onClick={() => applyPreset(3.5, 6)}
                          className="text-[10px] bg-white hover:bg-brand-surface border border-brand-border rounded-sm px-2.5 py-1 text-brand-text transition-all"
                        >
                          Car Port (3.5m x 6m)
                        </button>
                        <button
                          onClick={() => applyPreset(3.5, 12)}
                          className="text-[10px] bg-white hover:bg-brand-surface border border-brand-border rounded-sm px-2.5 py-1 text-brand-text transition-all"
                        >
                          Driveway (3.5m x 12m)
                        </button>
                        <button
                          onClick={() => applyPreset(7, 10)}
                          className="text-[10px] bg-white hover:bg-brand-surface border border-brand-border rounded-sm px-2.5 py-1 text-brand-text transition-all"
                        >
                          Double Drive (7m x 10m)
                        </button>
                      </div>

                      {/* Width slider */}
                      <div className="space-y-3">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-brand-text-muted">Slab Width:</span>
                          <span className="text-brand-accent font-mono">{width} meters</span>
                        </div>
                        <input
                          type="range"
                          min="0.5"
                          max="15"
                          step="0.5"
                          value={width}
                          onChange={(e) => setWidth(parseFloat(e.target.value))}
                          className="w-full h-1 bg-brand-border-dim rounded-lg appearance-none cursor-pointer accent-brand-accent"
                        />
                      </div>

                      {/* Length slider */}
                      <div className="space-y-3">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-brand-text-muted">Slab Length:</span>
                          <span className="text-brand-accent font-mono">{length} meters</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="50"
                          step="0.5"
                          value={length}
                          onChange={(e) => setLength(parseFloat(e.target.value))}
                          className="w-full h-1 bg-brand-border-dim rounded-lg appearance-none cursor-pointer accent-brand-accent"
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="direct"
                      initial={{ opacity: 0, height: 0, y: 10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="space-y-4 font-sans"
                    >
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-brand-text-muted font-sans">Total Surface Area Size:</span>
                        <span className="text-brand-accent font-mono">{directArea} sqm</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="300"
                        step="5"
                        value={directArea}
                        onChange={(e) => setDirectArea(parseInt(e.target.value))}
                        className="w-full h-1 bg-brand-border-dim rounded-lg appearance-none cursor-pointer accent-brand-accent"
                      />
                      <span className="text-[11px] text-brand-text-muted block font-mono">
                        Slide to choose your estimated square meters target size directly.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Step 3+: Service-specific options */}
            {isRetainingWall && (
              <div className="pt-6 border-t border-brand-border/40 space-y-3">
                <label className="text-[10px] font-semibold text-brand-accent uppercase tracking-[0.2em] block">
                  3. Sleeper Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['wooden', 'concrete'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSleeperType(s)}
                      className={`py-3 px-4 rounded-sm text-xs font-bold font-mono text-center border transition-all cursor-pointer ${
                        sleeperType === s
                          ? 'border-brand-accent bg-brand-accent/5 text-brand-text'
                          : 'border-brand-border bg-white text-brand-text-muted hover:text-brand-text'
                      }`}
                    >
                      {s === 'wooden' ? 'Wooden Sleepers' : 'Concrete Sleepers'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!isRetainingWall && !isEpoxy && (
              <>
                {/* Step 3: Project Depth & Reinforcing Mesh specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-brand-border/40">

                  {/* Thickness Selector */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5">
                      <label className="text-[10px] font-semibold text-brand-accent uppercase tracking-[0.2em] block">
                        3. Concrete Thickness
                      </label>
                      <div className="group relative">
                        <HelpCircle className="h-3.5 w-3.5 text-brand-text-dim cursor-help" />
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-brand-text text-[10px] p-2.5 rounded-sm text-white font-sans shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50">
                          Standard walkways/patios use 100mm. Regular vehicle driveways require 125mm. Heavy point load machinery requires 150mm.
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[100, 125, 150].map((t) => (
                        <button
                          key={t}
                          onClick={() => setThickness(t as 100 | 125 | 150)}
                          className={`py-2 px-1 rounded-sm text-xs font-bold font-mono text-center border transition-all cursor-pointer ${
                            thickness === t
                              ? 'border-brand-accent bg-brand-accent/5 text-brand-text'
                              : 'border-brand-border bg-white text-brand-text-muted hover:text-brand-text'
                          }`}
                        >
                          {t}mm
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Steel Reinforcement Mesh Selector */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5">
                      <label className="text-[10px] font-semibold text-brand-accent uppercase tracking-[0.2em] block">
                        4. Steel Mesh Size
                      </label>
                      <div className="group relative">
                        <HelpCircle className="h-3.5 w-3.5 text-brand-text-dim cursor-help" />
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-brand-text text-[10px] p-2.5 rounded-sm text-white font-sans shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50">
                          Steel mesh bonds the pour to handle ground temperatures without cracking. Options: SL62, SL72, SL82, SL92.
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {(['sl62', 'sl72', 'sl82', 'sl92'] as const).map((r) => (
                        <button
                          key={r}
                          onClick={() => setReinforcement(r)}
                          className={`py-2 px-1 rounded-sm text-[10px] uppercase font-bold font-mono text-center border transition-all cursor-pointer ${
                            reinforcement === r
                              ? 'border-brand-accent bg-brand-accent/5 text-brand-text'
                              : 'border-brand-border bg-white text-brand-text-muted hover:text-brand-text'
                          }`}
                        >
                          {r.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Excavation Prep check */}
                <div className="pt-6 border-t border-brand-border/40 flex items-center justify-between">
                  <div className="space-y-1 pr-4">
                    <span className="text-[10px] font-semibold text-brand-accent uppercase tracking-[0.2em] block">
                      5. Exc. / Prep Grading
                    </span>
                    <span className="text-xs text-brand-text-muted block leading-relaxed font-light">
                      Required if the soil target features existing grass, concrete demolition or site leveling base.
                    </span>
                  </div>

                  <button
                    onClick={() => setExcavation(!excavation)}
                    className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      excavation ? 'bg-brand-accent' : 'bg-brand-border'
                    }`}
                    role="switch"
                    aria-checked={excavation}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        excavation ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </>
            )}

          </motion.div>

          {/* Results Summary Box - Right Column with Slide-In */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 lg:sticky lg:top-24 space-y-6"
          >
            <div className="bg-white border border-brand-border p-6 sm:p-8 relative overflow-hidden rounded-sm shadow-md">
              <div className="absolute top-0 right-0 bg-brand-surface text-brand-text-muted font-mono text-[9px] tracking-widest uppercase py-1 px-3 border-b border-l border-brand-border">
                ACTIVE CALC
              </div>

              {/* Title */}
              <h3 className="text-sm font-display tracking-[0.1em] font-semibold text-brand-text uppercase mb-6 flex items-center gap-2">
                <Info className="h-4 w-4 text-brand-accent" />
                <span>Estimate Breakdown</span>
              </h3>

              {/* Calculated Area Display */}
              <div className="bg-brand-surface border border-brand-border p-4 rounded-sm mb-6 flex justify-between items-center">
                <div>
                  <span className="text-[9px] text-brand-text-muted block font-mono uppercase tracking-wider">Surface Area Range</span>
                  <span className="text-3xl font-display font-black text-brand-text">{calculatedArea} <span className="text-xs font-mono font-normal text-brand-text-muted">SQM</span></span>
                </div>
                {!isRetainingWall && !isEpoxy && (
                  <div className="text-right">
                    <span className="text-[9px] text-brand-text-muted block font-mono uppercase tracking-wider">Estimated Thickness</span>
                    <span className="text-brand-text font-display font-bold text-lg">{thickness}mm</span>
                  </div>
                )}
                {isRetainingWall && (
                  <div className="text-right">
                    <span className="text-[9px] text-brand-text-muted block font-mono uppercase tracking-wider">Sleeper Type</span>
                    <span className="text-brand-text font-display font-bold text-sm capitalize">{sleeperType === 'wooden' ? 'Wooden' : 'Concrete'}</span>
                  </div>
                )}
              </div>

              {/* Preliminary Pricing big badge */}
              <div className="space-y-2 mb-8">
                <span className="text-[10px] text-brand-text-muted font-semibold uppercase tracking-wider font-mono">ESTIMATED PRICE RANGE:</span>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-4xl sm:text-5xl font-display font-black text-brand-accent tracking-tight">
                    ${estMin.toLocaleString()}
                  </span>
                  <span className="text-brand-text-muted text-sm italic font-medium">to</span>
                  <span className="text-2xl sm:text-3xl font-display font-black text-brand-text tracking-tight">
                    ${estMax.toLocaleString()}
                  </span>
                  <span className="text-brand-text-muted text-xs font-mono ml-1">AUD*</span>
                </div>
                <p className="text-[11px] text-brand-text-muted leading-relaxed font-light">
                  *Non-binding estimate only. Concrete delivery pumping access, site grade elevation slopes, and civil crossover configurations can vary ultimate quotes.
                </p>
              </div>

              {/* Checklist details summary */}
              <div className="space-y-4 border-t border-brand-border/40 pt-6 text-xs text-brand-text">
                <div className="flex justify-between">
                  <span className="text-brand-text-muted">Service Target:</span>
                  <span className="font-semibold text-right text-brand-text">{selectedService.title}</span>
                </div>
                {isRetainingWall && (
                  <div className="flex justify-between">
                    <span className="text-brand-text-muted">Sleeper Type:</span>
                    <span className="font-semibold text-brand-text capitalize">{sleeperType === 'wooden' ? 'Wooden Sleepers' : 'Concrete Sleepers'}</span>
                  </div>
                )}
                {!isRetainingWall && !isEpoxy && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-brand-text-muted">Concrete Volume:</span>
                      <span className="font-semibold text-brand-text">{Math.round(calculatedArea * (thickness / 1000) * 10) / 10} m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-text-muted">Steel mesh size:</span>
                      <span className="font-semibold text-brand-text uppercase">{reinforcement.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-text-muted">Exc prep:</span>
                      <span className="font-semibold text-brand-accent">{excavation ? 'Required' : 'Plain Overlay'}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Dynamic conversion CTA */}
              <button
                onClick={handleExportQuote}
                className="group w-full mt-8 inline-flex items-center justify-between rounded-full bg-[#161412] hover:bg-black text-white py-1.5 pl-6 pr-1.5 text-xs sm:text-sm font-semibold transition-all hover:gap-4.5 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Lock &amp; Prefill Quote Form</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                  <ArrowRight className="h-4 w-4 text-black" />
                </span>
              </button>

            </div>

            {/* Alert / Notice block */}
            <div className="bg-brand-surface border border-brand-border p-4 flex gap-3 text-xs text-brand-text-muted rounded-sm shadow-sm">
              <AlertCircle className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="text-brand-text font-bold block mb-1">COMPLIANCE ASSURED</span>
                We use minimum 25MPa/32MPa compressive grading concrete. Structural crossovers comply with Melbourne council standards. Code-conforming steel support bars included.
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
