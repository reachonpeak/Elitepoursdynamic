/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, ProcessStep, Testimonial } from '../types';

export const servicesData: Service[] = [
  {
    id: 'exposed-aggregate',
    title: 'Exposed Aggregate Concrete',
    shortDesc: 'Premium concrete combining durability with a decorative natural stone finish.',
    fullDesc: 'Premium exposed aggregate concrete that combines durability with a decorative natural stone finish. Ideal for driveways, pathways, patios and outdoor areas, it provides a strong, slip-resistant surface that enhances the appearance and value of your property while ensuring long-lasting performance.',
    image: '/service3.webp',
    basePricePerSqm: 110,
    specs: [
      'High-durability decorative stone mix',
      'Non-slip natural rock exposure texture',
      'Individually washed & acid-etched for highlight',
      'Dual-coat UV stabilized gloss/matte sealer finish'
    ]
  },
  {
    id: 'residential-slabs',
    title: 'Residential Slabs',
    shortDesc: 'Strong and reliable residential concrete slabs built with proper base preparation.',
    fullDesc: 'Strong and reliable residential concrete slabs built with proper base preparation, reinforcement and high-quality concrete. Ideal for new homes, extensions and sheds, providing a stable foundation designed for durability, structural strength and long-term performance.',
    image: '/service4.webp',
    basePricePerSqm: 125,
    specs: [
      'Engineered SL72/SL82 reinforcement mesh',
      'F4 class rigid engineered formwork',
      'Precision laser-levelled tolerance within +-2mm',
      'Moisture vapor barrier installation'
    ]
  },
  {
    id: 'epoxy-flooring',
    title: 'High-Performance Epoxy Flooring',
    shortDesc: 'Seamless, protective coatings designed for durability, protection, and a modern finish.',
    fullDesc: 'Elitepour Dynamics provides high-quality epoxy flooring solutions designed for durability, protection, and a modern finish. Epoxy coatings create a seamless, strong surface that is resistant to stains, chemicals, moisture, and heavy traffic, making it ideal for garages, workshops, warehouses, and commercial spaces. Our team ensures proper surface preparation and professional application to deliver a flawless finish.',
    image: '/service2.webp',
    basePricePerSqm: 85,
    specs: [
      'Industrial-grade self-levelling polyurethane/epoxy base',
      'Custom color flake or metallic patterns',
      'High resistance to oils, chemicals & hot tire pickups',
      'Available with slip-resistant glass bead additives'
    ]
  },
  {
    id: 'retaining-walls',
    title: 'Concrete Retaining Walls',
    shortDesc: 'High-quality concrete retaining walls providing structural support and aesthetic appeal.',
    fullDesc: 'Elitepour Dynamics specialises in constructing high-quality concrete retaining walls that provide both structural support and aesthetic appeal. Our retaining walls are built with proper reinforcement and drainage to ensure durability and stability for years to come.',
    image: '/service1.webp',
    basePricePerSqm: 220,
    specs: [
      'Core-filled blockwork or reinforced columns',
      'Geofabric membrane & slotted ag-pipe sub-drainage',
      'Engineered load bearing up to 2.4 meters high',
      'Aesthetic smooth concrete finishes or rock-face profiles'
    ]
  },
  {
    id: 'stamped-concrete',
    title: 'Stamped Concrete (Patterned)',
    shortDesc: 'Decorative stamped concrete replicating natural stone, brick or tile.',
    fullDesc: 'Decorative stamped concrete designed to replicate the look of natural stone, brick or tile while providing the strength of concrete. Ideal for driveways, patios and outdoor areas, offering a durable, low-maintenance surface that enhances the style and value of your property.',
    image: '/service5.webp',
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
    shortDesc: 'Professional council-standard concrete footpaths constructed to meet local regulations.',
    fullDesc: 'Professional council-standard concrete footpaths constructed to meet local regulations and safety requirements. Built with proper base preparation and quality concrete to ensure durability, smooth finish and long-term performance for public walkways and residential crossovers.',
    image: '/5.webp',
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
    desc: 'Concrete holds great compressive strength, but requires steel reinforcement to withstand high bending or heavy loads. We lay premium Australian SL62, SL72, or SL82 engineered steel concrete mesh supported on high-chairs so it sits perfectly in the center third of the slab.'
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
    text: 'We recently hired Elitepour Dynamics for our project in Melbourne. Absolute professionals from start to finish! The communication was excellent, the base preparation was incredibly thorough, and the final exposed aggregate driveway looks outstanding. Highly recommend their skilled team for anyone looking for premium, long-lasting concrete work.',
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
    text: 'We recently had high-gloss epoxy flooring done at our new double-garage in Wollert by Elitepour Dynamics. The surface preparation has been done to absolute perfection, filling every tiny hairline crack beforehand. The epoxy flake finish is smooth, dust-free, oil-resistant and incredibly beautiful. Top tier customer satisfaction!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    verified: true
  }
];

export const businessDetails = {
  name: 'Elitepour Dynamics',
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
