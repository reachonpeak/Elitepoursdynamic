/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  category: 'Exposed Aggregate' | 'Honed Concrete' | 'Polished Internal' | 'Architectural Retaining' | 'Epoxy Coatings' | 'Civil Concrete' | 'Concrete Slabs' | 'Stamped Concrete';
  image: string;
  aspectRatio: 'aspect-[3/4]' | 'aspect-[4/3]' | 'aspect-square' | 'aspect-[16/10]';
  metrics: { label: string; value: string }[];
  clientBrief: string;
  engineeringChallenge: string;
  solutionSpecs: string[];
  materialsUsed: string[];
  stepDetail: {
    excavation: string;
    steelReinforcement: string;
    pourAndFinishing: string;
    curingAndSealer: string;
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-toorak',
    title: 'The Toorak Geometric Estate Driveway',
    subtitle: 'Bespoke Charcoal Granite Exposed Aggregate',
    location: 'Toorak, VIC 3142',
    category: 'Exposed Aggregate',
    image: '/images/exposed_aggregate_side_pathway.jpeg',
    aspectRatio: 'aspect-[3/4]', // Tall for masonry layout variety
    metrics: [
      { label: 'Total Area', value: '240 sqm' },
      { label: 'Strength Grade', value: '32MPa Premium' },
      { label: 'Base Thickness', value: '125mm Depth' },
      { label: 'Cure Duration', value: '14 Days' },
    ],
    clientBrief: 'The client demanded a striking, deep charcoal driveway to align with their newly constructed ultra-minimalist geometric architectural estate. The surface required high loading capacity for multiple premium SUVs while completely avoiding standard commercial grey cracking and showing zero joint erosion.',
    engineeringChallenge: 'The terrain had a steep 12-degree slope from the boundary line to the double garage threshold, creating massive drainage and downhill slide risks if standard pours were used. Surface water had to be perfectly intercepted before pooling at the primary garage gate.',
    solutionSpecs: [
      'Executed full deep-subgrade clay excavation down to 225mm with customized Bobcat profiling.',
      'Installed deep-channel concrete side-drains hidden beneath modern steel grate rails.',
      'Constructed a 100mm compacted depth crushed limestone F1 road-base subgrade.',
      'Engineered a double-mesh support layout using dual SL82 high-tensile steel meshes elevated on 65mm concrete bar spacers.',
    ],
    materialsUsed: [
      '32MPa Charcoal Base Liquid Concrete Mix',
      'Charcoal oxide liquid pigment (10% high density saturation)',
      'Premium River Stone aggregate blend (7mm - 10mm white granite & gold quartz stones)',
      'Solvent-based high-solids slip-resistant acrylic high-gloss sealer (UV-proof)',
    ],
    stepDetail: {
      excavation: 'Scraped 22.5cm of loose clay loam. Rolled and compacted the subgrade to 98% density using a 3.5-tonne vibration drum roller to prevent any future organic settling.',
      steelReinforcement: 'Laid heavy SL82 reinforcing mesh with standard 300mm overlaps. Tied structural starter steel bars back into the municipal crossover concrete path.',
      pourAndFinishing: 'Poured concrete uniformly using a truck-mount concrete pump. Hand-screeded the slope, then carefully applied an even coat of chemical surface retarder to slow the surface cement paste setting.',
      curingAndSealer: 'Used a high-pressure 3500 PSI water cleaner 16 hours after pouring to strip the retarded surface cement skin, beautifully exposing the glittering white granite aggregate. Air-dried for 48 hours, then roll-coated dual layers of UV protective high-grade acrylic sealer.',
    },
  },

  {
    id: 'case-fitzroy',
    title: 'The Fitzroy Designer Epoxy Studio',
    subtitle: 'High-Gloss Seamless Metallic Epoxy Coating',
    location: 'Fitzroy, VIC 3065',
    category: 'Epoxy Coatings',
    image: '/images/epoxy_case_study.webp',
    aspectRatio: 'aspect-square', // Neutral square
    metrics: [
      { label: 'Total Area', value: '120 sqm' },
      { label: 'Base Prep', value: 'Diamond Ground' },
      { label: 'Coating Layers', value: '4-Stage System' },
      { label: 'Gloss Level', value: 'High Reflective' },
    ],
    clientBrief: 'The client requested a high-performance, seamless designer epoxy floor for their boutique art and design studio in Fitzroy. The surface needed to be chemically resistant, stain-proof, and capable of reflecting overhead track lighting to enhance the feeling of space while providing a modern industrial aesthetic.',
    engineeringChallenge: 'The old concrete subgrade was highly porous, contaminated with historic industrial oils, and had multiple structural cracks. Failure to properly prepare the surface and block rising damp would lead to moisture bubbling and delamination of the epoxy.',
    solutionSpecs: [
      'Conducted deep mechanical diamond grinding to remove the contaminated top layer and open concrete pores.',
      'Applied a high-solids moisture vapor barrier primer to seal the substrate and prevent outgassing.',
      'Injected structural crack-bridging epoxy compound to stabilize stress fissures.',
      'Applied a multi-layered metallic pigmented epoxy basecoat followed by a crystal-clear UV-resistant polyaspartic topcoat.',
    ],
    materialsUsed: [
      'Industrial-grade 100% solids epoxy base resin',
      'Metallic color pigments (Silver and Charcoal blend)',
      'High-solids moisture vapor barrier primer',
      'Aliphatic polyurethane UV-stable clear protective topcoat',
    ],
    stepDetail: {
      excavation: 'Surface preparation began with mechanical diamond grinding using 25-grit metal-bond diamond shoes to strip all oil stains and create a clean, profiled concrete profile (CSP-3) for maximum bonding.',
      steelReinforcement: 'Repaired and stabilized concrete cracks by routing them out, inserting carbon-fiber stitch pins, and filling them with a fast-curing structural epoxy paste before grinding them completely flush.',
      pourAndFinishing: 'Laid the moisture-barrier primer layer. Once cured, the metallic pigmented epoxy basecoat was applied using squeegees and rollers, then back-rolled and manipulated with denatured alcohol sprays to create a unique organic metallic flow pattern.',
      curingAndSealer: 'After the basecoat cured, the floor was vacuumed and sealed with an elite aliphatic polyurethane topcoat infused with fine anti-slip glass beads, delivering a durable, scratch-resistant, high-gloss finish.',
    },
  },
  {
    id: 'case-templestowe',
    title: 'Templestowe Municipal Concrete Pathways',
    subtitle: 'High-Strength Pedestrian Civil Pathways',
    location: 'Templestowe, VIC 3106',
    category: 'Civil Concrete',
    image: '/images/concrete_pathway_case_study.jpg',
    aspectRatio: 'aspect-[3/4]', // Tall
    metrics: [
      { label: 'Pathway Length', value: '180 meters' },
      { label: 'Strength Grade', value: '25MPa Commercial' },
      { label: 'Base Depth', value: '100mm Depth' },
      { label: 'Finish Type', value: 'Broom Finished' },
    ],
    clientBrief: 'The local municipal authority requested the installation of a high-durability, slip-resistant concrete pedestrian pathway linking the residential estate to the parkland. The path needed to withstand constant foot traffic, light maintenance vehicles, and heavy weather conditions without cracking or soil erosion.',
    engineeringChallenge: 'The path ran alongside a sloped grass reserve with highly active clay subsoil. Proper excavation, subgrade compaction, drainage runoff slopes, and precise expansion joints were critical to prevent ground movement from buckling or shifting the concrete slabs.',
    solutionSpecs: [
      'Excavated clay loam to a uniform depth of 180mm with structural grade leveling.',
      'Laid a 75mm compacted Class 3 Fine Crushed Rock (FCR) road base to create a stable foundation.',
      'Installed SL72 steel reinforcing mesh elevated on bar chairs.',
      'Poured 25MPa concrete with a cross-fall gradient of 2% to ensure self-draining water runoff.',
    ],
    materialsUsed: [
      '25MPa Commercial Grade Concrete mix',
      'SL72 reinforcing mesh and expansion foam strips',
      'Class 3 Fine Crushed Rock (FCR)',
      'Slip-resistant sealer with broom texture finish',
    ],
    stepDetail: {
      excavation: 'Excavated 18cm depth of organic topsoil and clay. Compacted the exposed subgrade with a 2.5-tonne vibration plate compactor to achieve 98% relative compaction.',
      steelReinforcement: 'Placed SL72 steel mesh on 50mm plastic chairs to position the steel reinforcement in the middle of the pour, ensuring maximum tensile strength against cracking.',
      pourAndFinishing: 'Poured the concrete via pump-out and hand-screeded to a 2% gradient for drainage. Applied a professional hand-broom finish to provide a high-traction, slip-resistant surface for pedestrians.',
      curingAndSealer: 'Clean-cut tool joints at precise 2.5-meter intervals to control shrinkage cracking. Sprayed water-based acrylic curing compound to retard drying and achieve full design strength.',
    },
  },
  {
    id: 'case-wollert',
    title: 'Wollert Engineered House Slab',
    subtitle: 'Structural Steel-Reinforced House Foundation',
    location: 'Wollert, VIC 3750',
    category: 'Concrete Slabs',
    image: '/images/house_slab_finished.jpg',
    aspectRatio: 'aspect-[16/10]', // Wide landscape
    metrics: [
      { label: 'Total Area', value: '210 sqm' },
      { label: 'Strength Grade', value: '32MPa Premium' },
      { label: 'Slab Thickness', value: '100mm Depth' },
      { label: 'Steel Reinforcement', value: 'SL82 Dual Mesh' },
    ],
    clientBrief: 'The client required a premium, structurally engineered slab foundation for a new double-story residential home in Wollert. The foundation had to meet strict soil reports (Class H1 highly active clay) and support substantial structural loads while ensuring zero water penetration or settling cracks.',
    engineeringChallenge: 'Wollert\'s reactive clay soil is prone to severe swelling and shrinking. To prevent foundation shifting, a waffle pod slab design was engineered with deep concrete piles anchored into stable soil layers and continuous vapor barrier protection.',
    solutionSpecs: [
      'Drilled 18 foundation piers down to 1.8 meters to anchor the slab into stable clay layers.',
      'Constructed waffle pod formwork utilizing high-density thermal pods and deep perimeter beams.',
      'Laid a heavy-duty 200um moisture vapor barrier to block rising ground moisture.',
      'Engineered a dual-layer SL82 steel reinforcement mesh layout on 50/65mm bar chairs.',
    ],
    materialsUsed: [
      '32MPa structural grade concrete mix',
      'SL82 high-tensile steel reinforcing mesh',
      '200-micron heavy-duty polythene vapor barrier',
      'High-density EPS waffle pods and plastic spacers',
    ],
    stepDetail: {
      excavation: 'Excavated and leveled the building pad down to a flat subgrade. Bored 18 foundation piers at key load-bearing junctions and poured them with structural concrete.',
      steelReinforcement: 'Placed 300mm waffle pods, laid the moisture vapor barrier, and constructed the dual-layer SL82 steel mesh framework with perimeter starter bars and trench meshes.',
      pourAndFinishing: 'Poured 32MPa concrete using a concrete pump. Screeded and laser-leveled the slab surface, then finished with a ride-on power trowel to achieve a class-one burnished finish.',
      curingAndSealer: 'Applied a specialized solvent-based curing compound to slow moisture loss. Wet-cured the slab for 7 days to maximize structural strength and concrete durability.',
    },
  },
  {
    id: 'case-templestowe-retaining',
    title: 'Templestowe Brutalist Terraced Gardens',
    subtitle: 'Architectural Off-Form Structural Retaining Structure',
    location: 'Templestowe, VIC 3106',
    category: 'Architectural Retaining',
    image: '/images/concrete_sleeper_retaining_wall.jpeg',
    aspectRatio: 'aspect-[3/4]', // Tall
    metrics: [
      { label: 'Wall Length', value: '45 meters' },
      { label: 'Max Height', value: '2.8 meters' },
      { label: 'Piling Depth', value: '1.8m Piers' },
      { label: 'Finish Type', value: 'Wood-Grain Textured' },
    ],
    clientBrief: 'Excavate a steep structural clay bluff in Templestowe and replace it with a magnificent multi-tired terrace system. The exposed retaining walls needed to be structural masterpieces themselves, showcasing a raw, industrial off-form organic cedar-grain timber texture.',
    engineeringChallenge: 'The retaining wall is retaining over 120 tonnes of highly hydrostatic clay soil block. Retaining walls higher than 1m in Melbourne require strict structural drawings, registered building practitioner sign-off, and heavy subsurface water drainage systems.',
    solutionSpecs: [
      'Engineered detailed structural plans with independent structural engineering endorsement.',
      'Drilled 14 high-depth concrete piling piers (450mm diameter) down 1.8m deep filled with heavy-reinforced cages.',
      'Constructed a robust modular structural formwork from custom selected high-grain Oregon pine boards.',
    ],
    materialsUsed: [
      '32MPa Retaining Structural Concrete mix',
      'Oregon Pine tongue-and-groove textured formwork boards',
      'N16 High-Tensile Steel deformed bars',
      'Geofabric wrapped 100mm slotted PVC agricultural drainage pipe',
    ],
    stepDetail: {
      excavation: 'Excavated 80 cubic meters of heavy damp clay. Placed FCR (Fine Crushed Rock) base pads beneath formwork zones and compacted them to 100% relative density.',
      steelReinforcement: 'Assembled a massive grid of structural N16 vertical rebar bars and N12 horizontal steel hoops, tied at all crossover junctions to create a massive monolithic structural steel cage.',
      pourAndFinishing: 'Executed the high-strength concrete pour using a 40m boom pump, discharging concrete in 500mm layers. Used high-frequency mechanical immersion vibrators to strip all trapped air bubbles from the formwork face.',
      curingAndSealer: 'Left the concrete to cure inside the formwork for 7 days to reach 75% strength. Stripped the boards carefully to reveal a gorgeous, organic timber grain texture. Painted back of wall with waterproofing rubber bitumen emulsion and backfilled with aggregate drainage stones.',
    },
  },
  {
    id: 'case-stamped-concrete',
    title: 'Craigieburn Slate Stamped Driveway',
    subtitle: 'Immaculate Decorative Stamped Concrete',
    location: 'Craigieburn, VIC 3064',
    category: 'Stamped Concrete',
    image: '/images/stamped_concrete_flagstone_driveway.jpeg',
    aspectRatio: 'aspect-[4/3]', // Wide
    metrics: [
      { label: 'Total Area', value: '145 sqm' },
      { label: 'Strength Grade', value: '32MPa Premium' },
      { label: 'Base Thickness', value: '110mm Depth' },
      { label: 'Pattern Type', value: 'Slate Flagstone' },
    ],
    clientBrief: 'The homeowner wanted a rustic, high-end slate flagstone driveway to complement their suburban home. Traditional slate tiles were ruled out due to cost, high maintenance, and weed growth. Stamped concrete was chosen as the perfect alternative to deliver the elegant look of hand-laid masonry with single-slab structural strength.',
    engineeringChallenge: 'The driveway had a gentle slope and had to match the grade of the municipal sidewalk and the garage floor perfectly. The stamp texture had to be applied uniformly across the entire 145 sqm slab within the strict concrete setting window to avoid shallow, uneven patterns.',
    solutionSpecs: [
      'Conducted 160mm subgrade scraping and laid a 100mm compacted crushed aggregate road base.',
      'Engineered slab strength with SL82 reinforcing steel mesh elevated on 50/65mm spacers.',
      'Poured 32MPa concrete mixed with integral slate grey liquid color pigment.',
      'Applied decorative slate texture mats systematically during the plastic phase of concrete curing.'
    ],
    materialsUsed: [
      '32MPa Integrally Coloured (Slate Grey) concrete mix',
      'SL82 structural reinforcing steel mesh',
      'Dark charcoal powder release agent (for highlight shading)',
      'High-solids semi-gloss acrylic sealer (UV and oil resistant)'
    ],
    stepDetail: {
      excavation: 'Excavated 160mm of clay loam. Rolled and compacted the subgrade, then laid a 100mm depth of Fine Crushed Rock (FCR), compacting it to 98% density to prevent settling.',
      steelReinforcement: 'Set up durable F4 timber formwork and installed SL82 steel mesh on plastic chairs, incorporating starter bars tied back into the garage entry slab.',
      pourAndFinishing: 'Poured the integrally colored concrete, screeded, and bull-floated the surface. Applied a dry-shake charcoal release agent before stamping the surface systematically with heavy polyurethane flagstone mats.',
      curingAndSealer: 'Pressure-washed the release agent 24 hours later to expose the beautiful dual-tone shaded flagstone grooves. Cut control joints and sealed with two coats of premium acrylic sealer.'
    }
  }
];
