/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  X, 
  CheckCircle2, 
  Flame, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { ProjectItem } from '../types';

// Concrete projects portfolio matching actual Melbourne operations
const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Wollert Premium Garden Shed Slab',
    category: 'shed-slabs',
    location: 'Wollert, VIC 3750',
    image: '/images/shed_slab_after_finished.jpeg',
    beforeImage: '/images/shed_slab_before_reinforcement.jpeg',
    dimensions: '24 sqm',
    completion: 'June 2026',
    specs: [
      '32MPa High-Strength Structural Concrete',
      'Rigid F4 formwork setup with deep pegs',
      'Single-layer SL82 High-Tensile Steel Mesh',
      'Precision laser-levelled tolerance within +-2mm'
    ],
    description: 'Engineered backyard shed slab designed for structural equipment load. Features thorough subgrade compaction, moisture vapor barrier installation, and precise edge tooling to prevent cracks.',
  },

  {
    id: 'proj-4',
    title: 'Wollert Decorative Exposed Aggregate Side Pathway',
    category: 'exposed-aggregate',
    location: 'Wollert, VIC 3750',
    image: '/images/exposed_aggregate_side_pathway.jpeg',
    dimensions: '35 sqm',
    completion: 'May 2026',
    specs: [
      'Charcoal and river pebble aggregate blend',
      'Acid washed post-cure to reveal stone texture',
      'Concrete sleeper plinth border integration',
      'Dual-coat UV stabilized acrylic sealer'
    ],
    description: 'Premium exposed aggregate pathway along the side of a residential house. Combines structural durability with slip-resistant natural rock texture, sloped for drainage.',
  },
  {
    id: 'proj-5',
    title: 'Wollert Exposed Aggregate Backyard Patio',
    category: 'exposed-aggregate',
    location: 'Wollert, VIC 3750',
    image: '/images/exposed_aggregate_play_area.jpeg',
    dimensions: '80 sqm',
    completion: 'May 2026',
    specs: [
      '32MPa high density decorative stone mix',
      'Medium aggregate exposure for slip resistance',
      'Tooled expansion control joint cuts',
      'Seamless border integration with play turf'
    ],
    description: 'A gorgeous decorative stone patio wrapping around the backyard play area. Designed to offer a robust, maintenance-free, and weed-free entertaining space.',
  },
  {
    id: 'proj-6',
    title: 'Wollert Exposed Aggregate Landscaping Surrounds',
    category: 'exposed-aggregate',
    location: 'Wollert, VIC 3750',
    image: '/images/exposed_aggregate_trampoline_area.jpeg',
    dimensions: '95 sqm',
    completion: 'May 2026',
    specs: [
      'Premium decorative pebble aggregate concrete',
      'Precision laser-levelled drainage falls',
      'Acid washed for vibrant stone exposure',
      'Sealed with high-solids protective coat'
    ],
    description: 'Exposed aggregate pathway wrapping around backyard landscaping and trampoline area. Adds significant value and clean aesthetic borders to the garden zone.',
  },
  {
    id: 'proj-7',
    title: 'South Morang Charcoal Stamped flagstone Driveway',
    category: 'stamped-concrete',
    location: 'South Morang, VIC 3752',
    image: '/images/stamped_concrete_flagstone_driveway.jpeg',
    dimensions: '110 sqm',
    completion: 'April 2026',
    specs: [
      'Precision flagstone stamp mold impressions',
      'Integrated UV-resistant charcoal powder color release',
      'Anti-slip high-solids clear penetrant wet-look sealer',
      'Control joints tooled at 2.5m centers'
    ],
    description: 'Immaculate stamped concrete driveway reproducing high-end slate flagstone textures. Weed-free, low-maintenance alternative providing rustic paving style.',
  },
  {
    id: 'proj-8',
    title: 'South Morang Stamped Driveway - Detail Angle',
    category: 'stamped-concrete',
    location: 'South Morang, VIC 3752',
    image: '/images/stamped_concrete_flagstone_driveway_2.jpeg',
    dimensions: '110 sqm',
    completion: 'April 2026',
    specs: [
      'Interlocking slate flagstone concrete stamp molds',
      'Integrated UV-safe charcoal powder release agent',
      'High-solids clear penetrant wet-look sealer finish',
      'Tooled control joints and edges'
    ],
    description: 'Alternate angle view showcasing the clean, interlocking stone crevices and premium charcoal aesthetic matching the brick residence facade.',
  },
  {
    id: 'proj-9',
    title: 'Craigieburn Timber Sleeper Retaining Wall',
    category: 'retaining-walls',
    location: 'Craigieburn, VIC 3064',
    image: '/images/wooden_sleeper_retaining_wall.jpeg',
    dimensions: '18m long x 0.8m high',
    completion: 'June 2026',
    specs: [
      'H4 treated pine heavy timber sleepers',
      'Hot-dip galvanized steel H and C upright posts',
      'Backfilled drainage gravel and slotted ag-pipe',
      'Cored pier concrete foundations for uprights'
    ],
    description: 'Robust boundary retaining wall using treated timber sleepers. Designed to secure soil grade heights in front of wooden fence, finished with slotted ag-pipe sub-surface drainage.',
  },
  {
    id: 'proj-10',
    title: 'Craigieburn Timber Sleeper Wall & Flatwork',
    category: 'retaining-walls',
    location: 'Craigieburn, VIC 3064',
    image: '/images/wooden_sleeper_retaining_wall_wide.jpeg',
    dimensions: '25m long / 120 sqm concrete',
    completion: 'June 2026',
    specs: [
      'Heavy-duty treated timber sleepers',
      'Galvanized structural steel upright supports',
      'Moisture drainage geo-textile layer',
      'Plain grey concrete driveway flatwork'
    ],
    description: 'Wider view of timber sleeper boundary retaining wall and associated grey concrete driveway area. Poured and built to direct water run-off into main drainage points.',
  },
  {
    id: 'proj-11',
    title: 'Wollert Slate Textured Concrete Sleeper Wall',
    category: 'retaining-walls',
    location: 'Wollert, VIC 3750',
    image: '/images/concrete_sleeper_retaining_wall.jpeg',
    dimensions: '15m long x 1.2m high',
    completion: 'May 2026',
    specs: [
      'Slate-textured reinforced concrete sleepers',
      'Heavy galvanized steel upright posts',
      'Sub-surface agricultural pipe drainage',
      'Deep cored piers core-filled with 32MPa mix'
    ],
    description: 'Grey textured concrete sleeper retaining wall providing structural earth retention. Reinforced steel posts ensure complete stability under heavy slope pressure.',
  },
  {
    id: 'proj-12',
    title: 'Campbellfield Plain Concrete Side Pathways',
    category: 'plain-concrete',
    location: 'Campbellfield, VIC 3061',
    image: '/images/plain_concrete_around_house.jpeg',
    dimensions: '55 sqm',
    completion: 'June 2026',
    specs: [
      '25MPa Normal Grey Class Concrete',
      'Single-layer SL72 steel mesh',
      'Hand-tooled expansion joints at 1.5m intervals',
      'Non-slip stipple broom finish'
    ],
    description: 'Clean grey concrete side paths running alongside red brick residence. Poured with falls away from the house foundations to prevent water ingress.',
  },
  {
    id: 'proj-13',
    title: 'Campbellfield Plain Concrete Pathway Detail',
    category: 'plain-concrete',
    location: 'Campbellfield, VIC 3061',
    image: '/images/plain_concrete_around_house_2.jpeg',
    dimensions: '55 sqm',
    completion: 'June 2026',
    specs: [
      '25MPa standard concrete mix',
      'Uniform non-slip broom texture',
      'Deep formwork leveling',
      'Clean tooled edge margins'
    ],
    description: 'Detailed angle of plain concrete pathway during final clean-up phase. Formwork removed showing solid concrete depth and level falls.',
  },
  {
    id: 'proj-14',
    title: 'Epping Normal Grey Plain Concrete Driveway',
    category: 'plain-concrete',
    location: 'Epping, VIC 3076',
    image: '/images/plain_concrete_long_driveway.jpeg',
    dimensions: '140 sqm',
    completion: 'June 2026',
    specs: [
      '125mm thick 32MPa heavy-duty concrete mix',
      'SL82 high-tensile steel mesh reinforcement',
      'Council standard crossover ramp details',
      'Slip-resistant medium broom finish texture'
    ],
    description: 'Long residential driveway leading to garage, poured with high-strength concrete to resist heavy vehicle point-loads and satisfy crossover parameters.',
  },
  {
    id: 'proj-15',
    title: 'Epping Plain Concrete Side Driveway',
    category: 'plain-concrete',
    location: 'Epping, VIC 3076',
    image: '/images/plain_concrete_side_driveway.jpeg',
    dimensions: '45 sqm',
    completion: 'June 2026',
    specs: [
      'Standard grey 25MPa concrete',
      'Steel reinforcement mesh layout',
      'Deep compacted roadbase base',
      'Smooth tooled border details'
    ],
    description: 'Pathway/driveway extension alongside red brick residence boundary next to high hedge, providing a clean, durable pedestrian and light vehicle access route.',
  },
  {
    id: 'proj-16',
    title: 'Wollert Engineered House Slab',
    category: 'house-slabs',
    location: 'Wollert, VIC 3750',
    image: '/images/house_slab_finished.jpg',
    beforeImage: '/images/residential_slabs_before.jpeg',
    dimensions: '210 sqm',
    completion: 'June 2026',
    specs: [
      'Dual-layer SL82 reinforcing steel mesh',
      'High-density EPS waffle pod formwork',
      '200-micron heavy-duty moisture vapor barrier',
      'Precision laser-levelled tolerance within +-2mm'
    ],
    description: 'Engineered residential house slab foundation featuring high-density waffle pods, dual SL82 reinforcing steel mesh, and deep concrete piling piers.',
  },

  {
    id: 'proj-18',
    title: 'Wollert Backyard Landscaping & Grass Borders',
    category: 'landscaping',
    location: 'Wollert, VIC 3750',
    image: '/images/landscaping_after.jpeg',
    beforeImage: '/images/landscaping_before.jpeg',
    dimensions: '120 sqm',
    completion: 'May 2026',
    specs: [
      'Premium synthetic/natural turf installation',
      'Excavated loam and topsoil preparation',
      'Treated pine garden sleeper borders',
      'Exposed aggregate perimeter pathways'
    ],
    description: 'Backyard landscaping work including turf layout, garden sleeper plinths, and integrated exposed aggregate walking zones to produce a modern maintenance-free yard.'
  },
  {
    id: 'proj-19',
    title: 'Wollert Metallic Designer Epoxy Garage',
    category: 'epoxy',
    location: 'Wollert, VIC 3750',
    image: '/images/epoxy_garage_floor.jpeg',
    dimensions: '45 sqm',
    completion: 'June 2026',
    specs: [
      'Premium multi-layered designer metallic epoxy base',
      'High-gloss UV protective polyaspartic topcoat',
      'Oil, grease and chemical resistant surface',
      'Non-slip texture additive integration'
    ],
    description: 'A stunning decorative metallic flake epoxy floor poured inside a newly renovated double-garage. The floor was diamond-ground to reveal aggregate pores before application, creating a mirror-like seamless finish.'
  }
];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showBefore, setShowBefore] = useState<boolean>(false);
  
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
    { id: 'exposed-aggregate', label: 'Exposed Aggregate' },
    { id: 'plain-concrete', label: 'Plain Concrete (Normal Grey)' },
    { id: 'stamped-concrete', label: 'Stamped Concrete' },
    { id: 'house-slabs', label: 'House Slabs' },
    { id: 'shed-slabs', label: 'Shed Slabs' },
    { id: 'retaining-walls', label: 'Retaining Walls' },
    { id: 'epoxy', label: 'High Gloss Epoxy' },
    { id: 'landscaping', label: 'Landscaping & Turf' }
  ];

  // Slide to next project in Lightbox
  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
    setShowBefore(false);
  };

  // Slide to previous project in Lightbox
  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
    setShowBefore(false);
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
                Before &amp; After: Premium Stamped Driveway
              </h3>
              <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed font-light">
                Use your cursor or touch swipe on the slider to slide between the **Steel Reinforcement &amp; Base Preparation** stage (Left) and the **Completed Stamped Slate Driveway** layout (Right).
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex gap-3.5 items-start">
                  <div className="bg-brand-surface border border-brand-border h-8 w-8 rounded-sm flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs font-bold text-brand-accent">01</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-text uppercase tracking-wide block">Base &amp; Steel Layout (Before)</span>
                    <span className="text-[11px] text-brand-text-muted">Heavy subgrade compaction and SL82 steel reinforcement mesh laid on concrete spacers prior to pouring.</span>
                  </div>
                </div>
                <div className="flex gap-3.5 items-start">
                  <div className="bg-brand-surface border border-brand-border h-8 w-8 rounded-sm flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs font-bold text-brand-accent">02</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-text uppercase tracking-wide block">Finished Stamped Driveway (After)</span>
                    <span className="text-[11px] text-brand-text-muted">Immaculate stamped concrete driveway replicating high-end slate flagstone textures with a dark charcoal finish.</span>
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
                  src="/images/driveway_slider_after.jpg"
                  alt="Finished Stamped Slate driveway layout" 
                  className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                />
                
                {/* BEFORE IMAGE (Clipped block, stays fully aligned on the left half based on boundary width) */}
                <div 
                  className="absolute inset-0 h-full overflow-hidden transition-all duration-75 pointer-events-none z-10"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src="/images/driveway_slider_before.jpg"
                    alt="Steel reinforcement grid base stage" 
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
                  Before: Bobcat Excavation
                </div>
                <div className="absolute top-4 right-4 bg-brand-accent text-white font-mono text-[9px] font-bold px-2 py-1 rounded-sm uppercase z-10">
                  After: Finished Synthetic Turf
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                onClick={() => { setSelectedProject(project); setShowBefore(false); }}
                className="group bg-white border border-brand-border rounded-sm overflow-hidden shadow-sm hover:shadow-md hover:border-brand-accent/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3] relative"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
          className="mt-16 bg-white border border-brand-border/60 p-5 rounded-sm flex items-center gap-3.5 shadow-sm"
        >
          <div className="h-10 w-10 bg-brand-accent/10 border border-brand-accent/20 rounded-sm flex items-center justify-center shrink-0 text-brand-accent">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h4 className="font-display font-bold uppercase text-brand-text tracking-wide text-md leading-none mb-1">
              Victorian Structurally Compliant Concrete Pours
            </h4>
            <p className="text-brand-text-muted text-[11px] font-sans">
              All driveways, deep-footing crossovers, retaining walls, and load slabs shown above comply with AS3600 (Concrete Structures) civil parameters.
            </p>
          </div>
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
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white border border-brand-border rounded-sm w-full max-w-4xl shadow-2xl relative z-10 overflow-hidden max-h-[90vh]"
            >
              {/* Top-Right Absolute Close element */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 h-9 w-9 bg-brand-text/70 text-white rounded-full flex items-center justify-center border border-white/20 hover:bg-brand-accent transition-all cursor-pointer shadow-md"
                aria-label="Close Project Detail Modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Slider Left-Right Arrow Buttons */}
              <button
                onClick={handlePrevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/40 hover:bg-brand-accent text-white flex items-center justify-center shadow-lg border border-white/10 hover:border-transparent transition-all cursor-pointer"
                aria-label="Previous portfolio project"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/40 hover:bg-brand-accent text-white flex items-center justify-center shadow-lg border border-white/10 hover:border-transparent transition-all cursor-pointer"
                aria-label="Next portfolio project"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Photo display panel */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-brand-text/5 overflow-hidden flex items-center justify-center">
                <img
                  src={showBefore && selectedProject.beforeImage ? selectedProject.beforeImage : selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-all duration-300"
                />

                {/* Before/After stage toggles when beforeImage exists */}
                {selectedProject.beforeImage && (
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-xs p-1 rounded-sm border border-white/10 flex gap-1 animate-fade">
                    <button
                      onClick={() => setShowBefore(true)}
                      className={`text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${showBefore ? 'bg-brand-accent text-white font-extrabold' : 'text-zinc-300 hover:text-white'}`}
                    >
                      Excavation/Prep
                    </button>
                    <button
                      onClick={() => setShowBefore(false)}
                      className={`text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${!showBefore ? 'bg-brand-accent text-white font-extrabold' : 'text-zinc-300 hover:text-white'}`}
                    >
                      Finished Pour
                    </button>
                  </div>
                )}
                
                {/* Visual specifications marker scale */}
                <div className="absolute bottom-4 left-4 bg-brand-text/85 border border-brand-border/20 text-white px-3 py-1.5 rounded-sm font-mono text-[9px] font-semibold tracking-wider uppercase select-none flex items-center gap-1.5 backdrop-blur-sm shadow-md">
                  <CheckCircle2 className="h-3 w-3 text-brand-accent" />
                  <span>{showBefore ? 'Stage: Excavation & Rebar Prep' : 'Melbourne VIC Project Audit: COMPLETED'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
