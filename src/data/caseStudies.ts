/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  category: 'Exposed Aggregate' | 'Honed Concrete' | 'Polished Internal' | 'Architectural Retaining' | 'Epoxy Coatings' | 'Civil Concrete';
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
    image: '/images/gallery/gallery-19.jpg',
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
    id: 'case-brighton',
    title: 'Brighton Coastal Pool Deck & Pavilion',
    subtitle: 'Alabaster Honed Seamless Concrete Decking',
    location: 'Brighton, VIC 3186',
    category: 'Honed Concrete',
    image: '/images/gallery/gallery-09.jpg',
    aspectRatio: 'aspect-[4/3]', // Wide
    metrics: [
      { label: 'Total Area', value: '115 sqm' },
      { label: 'Strength Grade', value: '25MPa-32MPa' },
      { label: 'Base Thickness', value: '110mm Depth' },
      { label: 'Aggregate Finish', value: 'Premium Honed' },
    ],
    clientBrief: 'Create a flat, slip-resistant pool surround in a bright, beachside alabaster-white tone. The surface had to be extremely soft on bare feet, chlorine-safe, salt-exposure certified, and flow seamlessly from the indoor porcelain tiles to the outdoor pavilion landscape.',
    engineeringChallenge: 'Positioned right on Port Phillip Bay border, coastal sand shifting poses severe foundation settling threats. Additionally, being a pool deck, the perimeter concrete had to align perfectly flat with the heavy frameless glass pool fencing tracks without cracking or setting stresses.',
    solutionSpecs: [
      'Embedded deep screw-piers at critical load corners to anchor the slab into stable sub-sand gravel strata.',
      'Incorporated specialized salt-resistant crystalline admixture directly into the concrete blend to prevent reinforcing bar corrosion.',
      'Cut micro expansion joints using diamond-tipped track saws at precise 2.2m centers and filled them with color-matched polyurethane sealant.',
    ],
    materialsUsed: [
      'Off-White Alabaster Oxide Cement mixture base',
      'Fine silica quartz sand & rounded white marble matrix aggregate (5mm smooth pebbles)',
      'Salt-resistant penetrating invisible silane-siloxane impregnating sealer',
      'Polyethylene foam expanding joint strips',
    ],
    stepDetail: {
      excavation: 'Excavated 180mm of light sandy soil. Constructed rigorous formwork utilizing waterproof timber edgeboards backed by heavy structural timber stakes spaced every 450mm.',
      steelReinforcement: 'Tied SL72 rebar mesh throughout, incorporating stainless-steel structural pins positioned where the heavy frameless glass pool fencing boots would be core-drilled later.',
      pourAndFinishing: 'Screeded and flat-steeled the pour. After standard curing of 10 days, a commercial concrete grinder fitted with metal-bond diamond abrasives ground the surface flat, exposing a gorgeous snowy marble aggregate.',
      curingAndSealer: 'Cleaned with neutral organic soap washes. Finished by applying a premium penetrating impregnating sealer which leaves a completely natural matte appearance while shielding against salt, pool chemicals, and coastal damp.',
    },
  },
  {
    id: 'case-fitzroy',
    title: 'The Fitzroy Industrial Loft Refurbishment',
    subtitle: 'Mirror-Gloss Diamond Polished Internal Flooring',
    location: 'Fitzroy, VIC 3065',
    category: 'Polished Internal',
    image: '/images/gallery/gallery-15.jpg',
    aspectRatio: 'aspect-square', // Neutral square
    metrics: [
      { label: 'Total Area', value: '95 sqm' },
      { label: 'Strength Grade', value: '32_10 High Cement' },
      { label: 'Polish Grit', value: '3000 Mirror Finish' },
      { label: 'Reflectivity', value: '88% Gloss Index' },
    ],
    clientBrief: 'Convert a rugged historic Fitzroy shoe-factory sub-floor into an incredibly smooth, mirror-finish light reflective polished concrete floor. The floor needed to endure heavy heavy foot traffic from art exhibition openings without staining from red wine, oils, or dragging furniture.',
    engineeringChallenge: 'The existing 85-year-old concrete slab was structurally uneven, severely oil-stained, and cracked in several key stress sections. Normal overlayment was ruled out due to strict ceiling height restrictions.',
    solutionSpecs: [
      'Applied intensive diamond grinding to shave off 6mm of irregular historic concrete and expose a fresh slab matrix.',
      'Saturated all slab fissures and cracks with a low-viscosity high-strength epoxy resin consolidation compound.',
      'Injected industrial structural non-shrink grouting into structural cracks prior to final burnish stages.',
    ],
    materialsUsed: [
      'Existing structural historic foundation slab',
      'Lithium Silicate liquid concrete chemical densifier (high penetration)',
      'Premium stone matrix resinous grout kit',
      'Advanced water-based polyurethane sealer guard (non-yellowing, extreme scratch-proof, stain-safe)',
    ],
    stepDetail: {
      excavation: 'No excavation required; structural preparation involved heavy mechanical diamond scraping with 16-grit metal-bond segments to strip grease, dirt, and historic adhesives.',
      steelReinforcement: 'Injected carbon-fiber stitch pins across structural crack paths to mechanical couple the moving crack-halves together and prevent future slab shifting.',
      pourAndFinishing: 'Honed the floor incrementally using diamond polishing pads from 50 to 800 grit. Applied the chemical lithium silicosilicate densifier which reacts with free lime to double the surface marble mineral hardness.',
      curingAndSealer: 'Polished up to 3000 grit using premium resin-bonds. Sealed using a high-performance chemical guard coating, high-speed burnished with specialized natural hair pads to achieve a stellar 88% light-reflectivity mirror surface.',
    },
  },
  {
    id: 'case-templestowe',
    title: 'Templestowe Brutalist Terraced Gardens',
    subtitle: 'Architectural Off-Form Structural Retaining Structure',
    location: 'Templestowe, VIC 3106',
    category: 'Architectural Retaining',
    image: '/images/gallery/gallery-18.jpg',
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
    id: 'case-wollert',
    title: 'Wollert Engineered Civil Crossover',
    subtitle: 'High-Strength Municipality Crossover & Curb',
    location: 'Wollert, VIC 3750',
    category: 'Civil Concrete',
    image: '/images/services/civil-footpaths.jpg',
    aspectRatio: 'aspect-[16/10]', // Wide landscape
    metrics: [
      { label: 'Total Area', value: '45 sqm' },
      { label: 'Strength Grade', value: '32MPa Civil' },
      { label: 'Crossover Depth', value: '150mm Depth' },
      { label: 'Compliance Code', value: 'VIC Civil Standard' },
    ],
    clientBrief: 'Demolish an unsafe, cracked old domestic asphalt crossover and pour a robust, reinforced concrete crossover that complies perfectly with City of Whittlesea crossover engineering standards. The crossover needed to support constant heavy delivery trucks.',
    engineeringChallenge: 'The crossover bounds a high-tilt main road with complex utility channels (gas, water, and fiber optical cables) running barely 300mm below the concrete excavation scrape level.',
    solutionSpecs: [
      'Obtained Whittlesea Council Crossover permit and conducted Dial Before You Dig utility mapping inquiries.',
      'Used precise hand-shoveling to locate and safeguard the underlying telecom conduit lines.',
      'Constructed full timber expansion joint boundaries separating council curb from private driveway boundary.',
    ],
    materialsUsed: [
      '32MPa municipal-grade aggregate concrete mix',
      'SL82 structural mesh centered on 75mm plastic chairs',
      '12mm bitumen impregnated expansion joint filler board',
      'Industrial non-slip curing compound sealer',
    ],
    stepDetail: {
      excavation: 'Sawcut the road interface asphalt cleanly. Excavated the old tarmac and unstable clay to a uniform depth of 150mm, manually smoothing around high-priority service utility ducts.',
      steelReinforcement: 'Laid heavy SL82 structural mesh. Drilled and epoxied 16mm steel dural-dowels directly into the adjacent concrete curb to avoid shifting of joint sections over time.',
      pourAndFinishing: 'Poured 32MPa concrete with strict 2-3% fall mapping. Stamped flat-troweled side borders and applied a heavy broom texture finish to guarantee vehicle grip under wet coastal conditions.',
      curingAndSealer: 'Clean-cut neat 25mm deep control joints to manage core drying stress. Hand-painted the fresh slab with specialized curing compound to retard water moisture evaporation, letting it reach full civil compression load metrics.',
    },
  },
];
