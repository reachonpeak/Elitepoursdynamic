/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, ProcessStep, Testimonial } from '../types';

export const servicesData: Service[] = [
  {
    id: 'exposed-aggregate',
    title: 'Exposed Aggregate Concrete',
    shortDesc: 'Premium concrete combining industrial durability with a decorative natural stone finish.',
    fullDesc: 'Premium exposed aggregate concrete that combines extreme structural durability with a textured, decorative natural stone finish. Ideal for modern driveways, pathways, patios, and outdoor entertainment areas, it provides a strong, slip-resistant surface that enhances architectural style and adds significant value to your property.',
    image: '/images/exposed_aggregate_side_pathway.jpeg',
    basePricePerSqm: 110,
    specs: [
      'High-durability decorative stone mix',
      'Non-slip natural rock exposure texture',
      'Individually washed & acid-etched for highlight',
      'Dual-coat UV stabilized gloss/matte sealer finish'
    ]
  },
  {
    id: 'retaining-walls',
    title: 'Concrete Retaining Walls',
    shortDesc: 'Structural masonry retaining walls providing earth support and visual clean edges.',
    fullDesc: 'Elite Pour Dynamics designs and constructs high-strength concrete sleeper and core-filled block retaining walls that provide essential structural earth retention and elegant landscape zoning. Built with proper sub-base leveling, internal steel-reinforced pillars, and drainage systems.',
    image: '/images/concrete_sleeper_retaining_wall.jpeg',
    basePricePerSqm: 220,
    specs: [
      'Core-filled blockwork or reinforced columns',
      'Geofabric membrane & slotted ag-pipe sub-drainage',
      'Engineered load bearing up to 2.4 meters high',
      'Aesthetic smooth concrete finishes or rock-face profiles'
    ]
  },
  {
    id: 'epoxy-flooring',
    title: 'High-Performance Epoxy Flooring',
    shortDesc: 'Seamless, chemically resistant protective coatings for garages and premium workshops.',
    fullDesc: 'High-performance commercial and domestic epoxy flooring solutions designed for supreme durability, physical protection, and a polished contemporary finish. Creates a seamless, ultra-hygienic surface resistant to heavy vehicle traffic, chemical stains, machine oils, and moisture infiltration.',
    image: '/images/epoxy_garage_finished.jpg',
    basePricePerSqm: 85,
    specs: [
      'Industrial-grade self-levelling polyurethane/epoxy base',
      'Custom color flake or metallic patterns',
      'High resistance to oils, chemicals & hot tire pickups',
      'Available with slip-resistant glass bead additives'
    ]
  },
  {
    id: 'residential-slabs',
    title: 'Residential Slabs',
    shortDesc: 'Formidable structural house, shed, and extension slabs with engineered integrity.',
    fullDesc: 'Strong and highly reliable residential concrete slabs built with meticulous base preparation, laser-guided levelling, rigid formwork, and heavy-duty steel reinforcement. Designed for new homes, extensions, garages, and modular sheds, providing a stable, crack-resistant foundation to standard building codes.',
    image: '/images/house_slab_finished.jpg',
    basePricePerSqm: 125,
    specs: [
      'Engineered SL82/SL92 reinforcement mesh',
      'F4 class rigid engineered formwork',
      'Precision laser-levelled tolerance within +-2mm',
      'Moisture vapor barrier installation'
    ]
  },
  {
    id: 'stamped-concrete',
    title: 'Stamped Concrete (Patterned)',
    shortDesc: 'Decorative stamped impressions replicating slate, slate brick, or wood textures.',
    fullDesc: 'Robust decorative stamped concrete designed to realistically replicate the texture of high-end natural slate, flagstone, cobblestone, brick, or cedar wood planking. Offering the visual grandeur of hand-laid masonry with the robust durability, cost-efficiency, and low maintenance of standard solid concrete.',
    image: '/images/stamped_concrete_flagstone_driveway.jpeg',
    basePricePerSqm: 95,
    specs: [
      'Precision interlocking texture stamp molds',
      'Integrated UV-stable shake powder release colors',
      'Low upkeep - weeds cannot grow between joints',
      'Enhanced with multi-layer high-solids clear sealer'
    ]
  },
  {
    id: 'civil-footpaths',
    title: 'Civil Footpaths & Crossovers',
    shortDesc: 'Council-approval-standard driveways, sidewalks, and wheelchair-accessible paths.',
    fullDesc: 'Professional council-standard concrete footpaths, pedestrian walkways, suburban crossovers, and kerb channels engineered to withstand public use and council specifications. Built under strict compliance with local Victorian regulations and accessible transport requirements.',
    image: '/images/civil_pathways.jpeg',
    basePricePerSqm: 80,
    specs: [
      'Built in strict accordance with municipal guidelines',
      'Integrated tactile indicators and pram ramps',
      'Heavy pedestrian and light vehicle reinforcement rating',
      'Non-slip heavy broom finish standard'
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Site Inspection & Planning',
    tagline: 'Precision Begins with Pre-Visualisation',
    desc: 'Our engineers conduct on-site evaluations, measuring terrain slope, evaluating soil composition, identifying localized water drainage lines, and mapping structural elevations to ensure structural concrete stability.'
  },
  {
    stepNumber: 2,
    title: 'Excavation & Base Preparation',
    tagline: 'The Unseen Crucial Foundation',
    desc: 'We clear standard weeds, topsoil, and soft mud. The ground is excavated to specified depth, backfilled with premium crushed structural rock (Class 3 roadbase), and fully compacted with heavy vibrating plates to eliminate future sinkage.'
  },
  {
    stepNumber: 3,
    title: 'Formwork Structural Setup',
    tagline: 'The Definitive Mold of Integrity',
    desc: 'Heavy-duty timber or steel F4 form rails are anchored using deep reinforced timber pegs, aligning precisely with structural survey markers to contain the wet concrete and direct slopes correctly.'
  },
  {
    stepNumber: 4,
    title: 'Steel Reinforcement Installation',
    tagline: 'Tensile Strength That Never Fails',
    desc: 'Concrete holds great compressive strength, but requires steel reinforcement to withstand high bending or heavy loads. We lay premium Australian SL82 or SL92 engineered steel concrete mesh supported on high-chairs so it sits perfectly in the center third of the slab.'
  },
  {
    stepNumber: 5,
    title: 'The Concrete Pour',
    tagline: 'Pristine Material Integration',
    desc: 'High-strength premium concrete (minimum 25MPa to 32MPa spec) is laid uniformly from concrete agitator trucks. Air pockets are vibrated out to eliminate structural honeycombs and ensure a dense, solid mix.'
  },
  {
    stepNumber: 6,
    title: 'Finishing & Detailing',
    tagline: 'Exquisite Architectural Craftsmanship',
    desc: 'Depending on user specification, our master screeders and finishers execute an immaculate finish: slip-resistant heavy brooming, polished steel trowel shine, decorative stamped mold impressions, or high-exposure natural aggregate washing.'
  },
  {
    stepNumber: 7,
    title: 'Curing & Protection Sealing',
    tagline: 'Sealing the Deal for Decades',
    desc: 'We apply professional curing retardants to regulate moisture evaporation, preventing early micro-cracking, and follow with two applications of supreme acrylic sealer to protect the concrete against hot-tire marks, oil spill staining, and harsh Australian UV fading.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Karan Khara',
    date: '19/05/2026',
    text: 'We recently hired Elite Pour Dynamics for our project in Melbourne. Absolute professionals from start to finish! The communication was excellent, the base preparation was incredibly thorough, and the final exposed aggregate driveway looks outstanding. Highly recommend their skilled team for anyone looking for premium, long-lasting concrete work.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Anindita Dhadwal',
    date: '17/05/2026',
    text: 'They did a fantastic job at our property installing beautiful clean pathways. They arrived on time, completed the excavation quickly without making unnecessary mess, and put strong reinforcement steel everywhere. The team was extremely reliable and our yard has never looked better. Professional concrete specialists!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Happy Manes',
    date: '17/05/2026',
    text: 'We recently had high-gloss epoxy flooring done at our new double-garage in Wollert by Elite Pour Dynamics. The surface preparation has been done to absolute perfection, filling every tiny hairline crack beforehand. The epoxy flake finish is smooth, dust-free, oil-resistant and incredibly beautiful. Top tier customer satisfaction!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    verified: true
  }
];

export const businessDetails = {
  name: 'Elite Pour Dynamics',
  phone: '+61 455 217 023',
  phoneRaw: 'tel:+61455217023',
  email: 'info@elitepourdynamics.com.au',
  emailRaw: 'mailto:info@elitepourdynamics.com.au',
  address: 'Melbourne, Victoria, Australia',
  operatingHours: 'Mon - Sun: 09:00 am – 06:00 pm',
  googleMapsUrl: 'https://www.google.com/maps/place/Elitepour+dynamics/@-37.5910535,144.9989454,19.92z/data=!4m8!3m7!1s0x6ad64dac0ac363d1:0x8fd5c6ae8e89b955!8m2!3d-37.5935919!4d144.9985881!9m1!1b1!16s%2Fg%2F11xmr5ljzf?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D',
  social: {
    facebook: 'https://www.facebook.com/751723431350413',
    instagram: 'https://www.instagram.com/elitepourdynamics?igsh=MXhzZWF4MnhiN3U2YQ=='
  }
};
