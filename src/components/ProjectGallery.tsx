/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, 
  MapPin, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  CheckCircle2, 
  Flame, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { ProjectItem } from '../types';

// Concrete projects portfolio matching GoDaddy's Melbourne operations
const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Wollert Exclusive Exposed Aggregate Driveway',
    category: 'driveways',
    location: 'Wollert, VIC 3750',
    image: '/images/gallery/gallery-01.jpg',
    beforeImage: '/images/gallery/gallery-20.jpg',
    dimensions: '180 sqm',
    completion: 'March 2026',
    specs: [
      '32MPa Premium Exposed Aggregate',
      'Class 3 Compaction Crushed Rock Sub-Base',
      'Single-layer SL82 High-Tensile Steel Mesh',
      'UV Stabilized Acrylic Semi-Gloss Curing Sealer'
    ],
    description: 'This premium exposed aggregate driveway features our signature river pebble and charcoal granite stone blend. Formulated to resist point loading for heavy domestic SUVs, the pour was executed with laser-guided falls to channel rainfall safely away from the residential foundation structural border.',
    testimonialId: 'rev-1'
  },
  {
    id: 'proj-2',
    title: 'High-Gloss Flake Epoxy Double Garage Floor',
    category: 'epoxy',
    location: 'Wollert, VIC 3750',
    image: '/images/gallery/gallery-02.jpg',
    dimensions: '42 sqm',
    completion: 'April 2026',
    specs: [
      'Industrial Polyurethane self-levelling epoxies',
      'Granite-Look Heavy Color Flake Broadcast',
      'Hot-Tire Pick-Up Resistant Primer Base',
      'Slip-Resistant Glass Bead Micro-Additive Dual Finish'
    ],
    description: 'Executed for high chemical resilience and premium style. The concrete subgrade was first diamond-ground to an open profile, then patched with expansion-joint polymer to secure a seamless, non-porous structure before broadcasting standard metallic charcoal flake.',
    testimonialId: 'rev-3'
  },
  {
    id: 'proj-3',
    title: 'Reinforced Concrete Retaining Boundary Wall',
    category: 'masonry',
    location: 'Craigieburn, VIC 3064',
    image: '/images/gallery/gallery-03.jpg',
    dimensions: '22m long x 1.4m high',
    completion: 'May 2026',
    specs: [
      'Core-filled structural concrete blocks',
      'Internal N12 Steel Starter Bars at 400mm centers',
      'Slotted PVC Subsoil ag-pipe drainage system',
      'Architectural Charcoal Render SealingCoat'
    ],
    description: 'Constructed under strict structural engineering parameters to secure a sloped backyard boundary. Soil pressure was safely counteracted via deep-drilled concrete piers and structural starter bar integrations, finished with professional geofabric drainage layers.',
  },
  {
    id: 'proj-4',
    title: 'Textured Stamped Flagstone Patio & BBQ Crossover',
    category: 'driveways',
    location: 'South Morang, VIC 3752',
    image: '/images/gallery/gallery-04.jpg',
    dimensions: '65 sqm',
    completion: 'April 2026',
    specs: [
      'Flagstone Interlocking Stamp Mold Impressions',
      'UV-Safe Color powder release agents',
      'Deep expansion joint control cuts at 2.5m centers',
      'High-solids clear penetrant wet-look sealer finish'
    ],
    description: 'Designed as a beautiful, weed-free brick patio alternative. We poured 110mm standard concrete mix, added high-end slate patterns with interlocking stamp plates, and hand-highlighted the rock crevices for a pristine, ancient flagstone tone.',
  },
  {
    id: 'proj-5',
    title: 'Heavy Machinery Base Slab & Foundation',
    category: 'slabs',
    location: 'Campbellfield Industrial Park, VIC 3061',
    image: '/images/gallery/gallery-05.jpg',
    dimensions: '120 sqm',
    completion: 'February 2026',
    specs: [
      'Heavy-duty 40_20 32MPa High-Strength Structural concrete',
      'Dual-layer SL92 Engineering Steel Meshes',
      'Deep compacted F1 class base rock (200mm depth)',
      'Perimeter keyway footing support load channels'
    ],
    description: 'Constructed as an anchor pad for localized CNC plasma and heavy steel stamping equipment. Poured to a standard thickness of 150mm with massive load distribution perimeter borders, reinforcing key intersection points with extra starter cages.',
  },
  {
    id: 'proj-6',
    title: 'Council Standard Suburban Crossover & Kerb Repair',
    category: 'slabs',
    location: 'Epping, VIC 3076',
    image: '/images/gallery/gallery-06.jpg',
    dimensions: '35 sqm',
    completion: 'January 2026',
    specs: [
      'Council approved 150mm thick driveway crossing standard',
      'S82 steel mesh centered on heavy-duty pins',
      'Melbourne municipal regulations compliant falls',
      'Slip-resistant structured tool expansion borders'
    ],
    description: 'Designed to replace an existing cracked domestic crossover. The concrete crossover was demolished, re-excavated to 150mm depth to comply with local municipality regulations, reinforced with heavy steel rods, and finished with a robust, wet-swept non-slip broom texture.'
  },
  {
    id: 'proj-7',
    title: 'Wollert Textured Stamped Driveway',
    category: 'driveways',
    location: 'Wollert, VIC 3750',
    image: '/images/gallery/gallery-07.jpg',
    dimensions: '85 sqm',
    completion: 'May 2026',
    specs: [
      'Textured concrete slate stamp patterns',
      'UV-stabilized slate charcoal release agent',
      'Dual-coat high-solids slip-resistant acrylic sealer'
    ],
    description: 'Stamped slate driveway poured in Wollert to coordinate with modern home architectural features. Features high traction and custom slate design aesthetics.'
  },
  {
    id: 'proj-8',
    title: 'Epping Exposed Aggregate Footpath',
    category: 'driveways',
    location: 'Epping, VIC 3076',
    image: '/images/gallery/gallery-08.jpg',
    dimensions: '45 sqm',
    completion: 'June 2026',
    specs: [
      'Exposed river aggregate granite blend',
      'Acid washed surface finish',
      'Slip-resistant concrete seal protection'
    ],
    description: 'Beautiful exposed aggregate footpath poured alongside home garden and boundary borders, presenting clean lines and natural stone design highlights.'
  }
];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  // Before & After comparison slider state (0 to 100 representing percentage slider position)
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Filter project lists
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  // Categories helper
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'driveways', label: 'Exposed Aggregate & Driveways' },
    { id: 'masonry', label: 'Masonry & Retaining Walls' },
    { id: 'slabs', label: 'Residential & Civil Slabs' },
    { id: 'epoxy', label: 'High Gloss Epoxy' }
  ];

  // Slide to next project in Lightbox
  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  // Slide to previous project in Lightbox
  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  // Drag interaction for before/after comparison slider
  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, container);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isResizing) {
      const container = e.currentTarget.getBoundingClientRect();
      handleSliderMove(e.clientX, container);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-brand-surface border-t border-brand-border/40 font-sans relative overflow-hidden">
      {/* Background ambient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(224,123,57,0.015),transparent_40%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Title Block with Scroll Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="block w-5 h-[2px] bg-brand-accent animate-pulse" />
            <span className="font-display text-[11px] sm:text-xs tracking-[0.25em] text-brand-accent uppercase font-bold">
              Completed Foundations
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-brand-text leading-none mb-4">
            Our Melbourne <br />
            Project Showcase
          </h2>
          <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Examine our active concrete installations, modern exposed aggregate coatings, stamped paving patterns, and structural retaining walls poured across Melbourne northern suburbs to strict Victoria Civil Concrete codes.
          </p>
        </motion.div>

        {/* 1. INTERACTIVE BEFORE/AFTER DRIVEWAY SLIDER with Scroll Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-20 bg-white border border-brand-border p-6 rounded-sm shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 border border-brand-accent/25 rounded-full text-brand-accent text-[10px] font-mono tracking-wider uppercase font-semibold">
                <Flame className="h-3 w-3 animate-bounce" />
                <span>Interactive Workmanship Audit</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-brand-text leading-tight">
                Before &amp; After: Wollert Residence Pour
              </h3>
              <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed font-light">
                Use your cursor or touch swipe on the slider to slide between the **Excavated Sub-Base Reinforcement** stage (Left) and the **Final Acid-Washed Cured Exposed Aggregate** driveway surface (Right). 
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex gap-3.5 items-start">
                  <div className="bg-brand-surface border border-brand-border h-8 w-8 rounded-sm flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs font-bold text-brand-accent">01</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-text uppercase tracking-wide block">Excavated Roadbase Subgrade (Before)</span>
                    <span className="text-[11px] text-brand-text-muted">Cleared clay sub-grade compacted with Class 3 structural base, SL82 steel mesh positioned centered on concrete spacers.</span>
                  </div>
                </div>
                <div className="flex gap-3.5 items-start">
                  <div className="bg-brand-surface border border-brand-border h-8 w-8 rounded-sm flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs font-bold text-brand-accent">02</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-text uppercase tracking-wide block">Final Exposed Aggregate Pour (After)</span>
                    <span className="text-[11px] text-brand-text-muted">High density 32MPa mix, washed to reveal white granite stones, sealed with premium dual-coat UV proof protection.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* Interaction Canvas container */}
              <div 
                ref={containerRef}
                className="relative h-[250px] sm:h-[400px] w-full overflow-hidden rounded-sm border border-brand-border cursor-ew-resize select-none"
                onTouchMove={handleTouchMove}
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsResizing(true)}
                onMouseUp={() => setIsResizing(false)}
                onMouseLeave={() => setIsResizing(false)}
              >
                {/* AFTER IMAGE (Default base, stays fully visible on the right half) */}
                <img 
                  src="/images/gallery/gallery-01.jpg"
                  alt="Finished Exposed Aggregate driveway in Wollert"
                  className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                />
                
                {/* BEFORE IMAGE (Clipped block, stays fully aligned on the left half based on boundary width) */}
                <div 
                  className="absolute inset-0 h-full overflow-hidden pointer-events-none z-10"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src="/images/gallery/gallery-20.jpg"
                    alt="Excavation and subbase prep stage"
                    className="absolute inset-y-0 left-0 h-full object-cover pointer-events-none"
                    style={{ width: `${containerWidth}px`, maxWidth: 'none', height: '100%' }}
                  />
                </div>

                {/* Handle slidebar marker line */}
                <div 
                  className="absolute top-0 bottom-0 w-[2.5px] bg-brand-accent z-20 pointer-events-none shadow-md"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* central double arrow widget slider button */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-lg border border-white">
                    <span className="text-[10px] tracking-wide font-black uppercase text-center flex items-center gap-0.5 whitespace-nowrap px-1">
                      <ChevronLeft className="h-3.5 w-3.5 shrink-0" />
                      <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                    </span>
                  </div>
                </div>

                {/* Stage Badges overlays */}
                <div className="absolute top-4 left-4 bg-brand-text/80 text-white font-mono text-[9px] font-bold px-2 py-1 rounded-sm uppercase z-10">
                  Before: Subgrade mesh / Base
                </div>
                <div className="absolute top-4 right-4 bg-brand-accent text-white font-mono text-[9px] font-bold px-2 py-1 rounded-sm uppercase z-10">
                  After: Exposed Aggregate Driveway
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. FILTERING TABS with Scroll Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-start gap-2.5 mb-10 border-b border-brand-border/40 pb-6"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4.5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-brand-accent text-white shadow-sm border border-brand-accent font-bold scale-[1.02]'
                  : 'bg-white text-brand-text-muted hover:text-brand-text border border-brand-border hover:bg-brand-surface-2'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* 3. IMAGES GRID CONTAINER */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                id={`project-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 60, 
                  damping: 18, 
                  mass: 0.9 
                }}
                onClick={() => setSelectedProject(project)}
                className="group bg-white border border-brand-border rounded-sm h-[380px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-gold/40 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer transform-gpu"
              >
                {/* Thumb frame */}
                <div className="relative h-[250px] w-full overflow-hidden bg-brand-text/5 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu"
                  />
                  
                  {/* Category bubble */}
                  <span className="absolute top-4 left-4 bg-brand-text/90 text-brand-border-dim font-mono text-[9px] font-bold px-2.5 py-1 tracking-widest uppercase rounded-sm z-10 border border-brand-border/20">
                    {project.category}
                  </span>

                  {/* Spec bubble quick tracker */}
                  <span className="absolute bottom-4 left-4 bg-brand-accent text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase z-10 shadow-sm">
                    {project.dimensions}
                  </span>

                  {/* Hover visual frame block */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(22,20,18,0.85)_0%,rgba(22,20,18,0.2)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-brand-text h-11 w-11 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-brand-border">
                      <Eye className="h-5 w-5 text-brand-accent" />
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-5 flex-grow flex flex-col justify-between items-start">
                  <div className="w-full">
                    <div className="flex items-center gap-1 text-[10px] text-brand-accent font-semibold mb-1 uppercase font-mono tracking-wider">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg leading-tight uppercase text-brand-text tracking-wide group-hover:text-brand-accent transition-colors truncate">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between w-full pt-3.5 border-t border-brand-surface-2 mt-auto">
                    <span className="text-[10px] font-mono text-brand-text-dim uppercase tracking-wider block">
                      Built: {project.completion}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Inspect Specs <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 4. CODES AND ACCREDITATIONS COMPLIANCE BADGE with Scroll Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 bg-white border border-brand-border/60 p-5 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm"
        >
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 bg-brand-accent/10 border border-brand-accent/20 rounded-sm flex items-center justify-center shrink-0 text-brand-accent">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-left">
              <h4 className="font-display font-bold uppercase text-brand-text tracking-wide text-md leading-none mb-1">
                High-Strength Concrete Structure Alignment
              </h4>
              <p className="text-brand-text-muted text-[11px] font-sans">
                All driveways, deep-footing crossovers, retaining walls, and load slabs shown above conform to AS3600 (Concrete Structures) design parameters.
              </p>
            </div>
          </div>
          <a
            href="tel:+61455217023"
            className="text-[10px] uppercase font-mono tracking-widest text-brand-text font-bold bg-brand-surface hover:bg-white border border-brand-border px-4 py-3.5 rounded-sm shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            Audit Map G-Reviews →
          </a>
        </motion.div>

      </div>

      {/* 5. PORTFOLIO RICH LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Modal backdrop background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-brand-text/92 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.98 }}
              transition={{ type: 'spring', damping: 28, stiffness: 120, mass: 0.9 }}
              className="bg-white border border-brand-border rounded-sm w-full max-w-5xl shadow-2xl relative z-10 overflow-hidden flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[85vh]"
            >
              {/* Top-Right Absolute Close element */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 h-9 w-9 bg-brand-text/70 text-white rounded-full flex items-center justify-center border border-white/20 hover:bg-brand-accent transition-all cursor-pointer"
                aria-label="Close Project Detail Modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Slider Left-Right Arrow Buttons (Overlay on visual half block) */}
              <button
                onClick={handlePrevProject}
                className="absolute left-4 top-1/3 sm:top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/40 hover:bg-brand-accent text-white flex items-center justify-center shadow-lg border border-white/10 hover:border-transparent transition-all cursor-pointer"
                aria-label="Previous portfolio project"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNextProject}
                className="absolute right-4 lg:right-[36%] top-1/3 sm:top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/40 hover:bg-brand-accent text-white flex items-center justify-center shadow-lg border border-white/10 hover:border-transparent transition-all cursor-pointer"
                aria-label="Next portfolio project"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Left Photo display panel (2/3 width on large) */}
              <div className="relative w-full lg:w-[65%] bg-brand-text/5 overflow-hidden flex items-center justify-center h-[280px] sm:h-[400px] lg:h-auto min-h-[300px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                
                {/* Visual specifications marker scale */}
                <div className="absolute bottom-4 left-4 bg-brand-text/85 border border-brand-border/20 text-white px-3 py-1.5 rounded-sm font-mono text-[9px] font-semibold tracking-wider uppercase select-none flex items-center gap-1.5 backdrop-blur-sm shadow-md">
                  <CheckCircle2 className="h-3 w-3 text-brand-accent" />
                  <span>Melbourne VIC Project Audit: COMPLETED</span>
                </div>
              </div>

              {/* Right project metadata details (1/3 width) */}
              <div className="w-full lg:w-[35%] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-brand-surface border-t lg:border-t-0 lg:border-l border-brand-border/60">
                <div className="space-y-6">
                  {/* Category marker */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase font-bold px-2 py-0.5 bg-brand-accent/10 border border-brand-accent/20 rounded-md">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-brand-text leading-tight mt-3">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {/* Operational parameters cards block */}
                  <div className="grid grid-cols-2 gap-3.5 border-y border-brand-border/50 py-4.5 bg-white px-4 rounded-sm shadow-sm select-none">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-brand-text-dim uppercase tracking-wider block">PROJECT LOCATION</span>
                      <span className="text-xs font-semibold text-brand-text block">{selectedProject.location}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-brand-text-dim uppercase tracking-wider block">COMPLETED IN</span>
                      <span className="text-xs font-semibold text-brand-text block">{selectedProject.completion}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-brand-text-dim uppercase tracking-wider block">MEASURED AREA</span>
                      <span className="text-xs font-bold text-brand-accent block">{selectedProject.dimensions}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-brand-text-dim uppercase tracking-wider block">CIVIL PROTECTION</span>
                      <span className="text-xs font-semibold text-brand-text block text-green-700 inline-flex items-center gap-0.5">
                        <ShieldCheck className="h-3.5 w-3.5" /> Approved
                      </span>
                    </div>
                  </div>

                  {/* Project description text */}
                  <div>
                    <span className="text-[10px] font-mono font-bold text-brand-text-dim uppercase tracking-widest block mb-2">PROJECT DESCRIPTION</span>
                    <p className="text-brand-text text-xs leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Full structural specifications lists */}
                  <div>
                    <span className="text-[10px] font-mono font-bold text-brand-text-dim uppercase tracking-widest block mb-2.5">ENGINEERED SPECIFICATIONS</span>
                    <ul className="space-y-2">
                      {selectedProject.specs.map((spec, i) => (
                        <li key={i} className="flex gap-2 items-start text-xs text-brand-text leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Testimonial reference, if any */}
                {selectedProject.testimonialId && (
                  <div className="border-t border-brand-border/60 pt-6 mt-8">
                    <span className="text-[9px] font-mono font-bold text-brand-accent uppercase tracking-widest block mb-2.5">VERIFIED TESTIMONIAL ATTACHED</span>
                    <p className="text-brand-text-muted text-[11px] leading-relaxed italic border-l-2 border-brand-accent pl-3">
                      "Absolute professionals from start to finish! The communication was excellent, the base preparation was thorough, and the aggregate driveway looks outstanding."
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
