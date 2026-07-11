const topNavigation = [
  { label: 'About', href: '/about/', key: 'about' },
  { label: 'Research', href: '/research/', key: 'research' },
  { label: 'Study', href: '/study/', key: 'study' },
  { label: 'Platform', href: '/platform/', key: 'platform' },
  { label: 'Innovation', href: '/innovation/', key: 'innovation' },
  { label: 'Partnerships', href: '/partnerships/', key: 'partnerships' },
  { label: 'Knowledge Hub', href: '/knowledge-hub/', key: 'knowledge-hub' },
  { label: 'Opportunities', href: '/opportunities/', key: 'opportunities' }
];

const utilityLinks = [
  { label: 'People', href: '/people/', key: 'people' },
  { label: 'Contact', href: '/contact/', key: 'contact' },
  { label: 'Search', href: '/search/', key: 'search' },
  { label: 'Login', href: '/login/', key: 'login' }
];

const workPackages = [
  {
    id: 'wp1',
    slug: 'wp1',
    title: 'WP1: Hydroclimate Observation and Data Readiness',
    summary: 'Build trusted field, laboratory, and remote sensing datasets that improve potable water planning.',
    focus: [
      'Standardise aquifer observation protocols for partner sites.',
      'Create interoperable groundwater and potable water quality baselines.',
      'Train learners in field-to-dashboard data stewardship.'
    ],
    leadIds: ['amina-ndlovu', 'leila-haddad'],
    moduleSlugs: ['gia-601', 'gia-602', 'gia-603'],
    projectSlugs: ['delta-aquifer-observatory'],
    publicationSlugs: ['aquifer-readiness-blueprint']
  },
  {
    id: 'wp2',
    slug: 'wp2',
    title: 'WP2: Integrated Framework Modelling',
    summary: 'Connect hydrogeology, data science, and systems thinking in an integrated framework for potable water decisions.',
    focus: [
      'Translate research questions into shared modelling architectures.',
      'Combine spatial, temporal, and governance indicators in one workflow.',
      'Support reproducible scenario planning across all academy projects.'
    ],
    leadIds: ['daniel-mensah', 'priya-raman'],
    moduleSlugs: ['gia-604', 'gia-605', 'gia-606'],
    projectSlugs: ['potable-water-resilience-atlas'],
    publicationSlugs: ['potable-water-data-standard']
  },
  {
    id: 'wp3',
    slug: 'wp3',
    title: 'WP3: Forecasting, Risk, and Decision Support',
    summary: 'Use forecasting and decision intelligence to anticipate groundwater stress and protect potable water access.',
    focus: [
      'Prototype groundwater forecasting pipelines for seasonal planning.',
      'Link recharge uncertainty to service resilience decisions.',
      'Test decision support tools with utilities and basin managers.'
    ],
    leadIds: ['amina-ndlovu', 'jacob-okoye'],
    moduleSlugs: ['gia-607', 'gia-608'],
    projectSlugs: ['community-recharge-intelligence-pilot'],
    publicationSlugs: ['studio-scenario-planning-guide']
  },
  {
    id: 'wp4',
    slug: 'wp4',
    title: 'WP4: Governance, Policy, and Digital Public Goods',
    summary: 'Shape policy-ready outputs and open methods for groundwater intelligence and potable water services.',
    focus: [
      'Assess governance bottlenecks that limit aquifer stewardship.',
      'Develop digital public goods that partners can adapt locally.',
      'Integrate evidence into policy, compliance, and investment pathways.'
    ],
    leadIds: ['daniel-mensah', 'jacob-okoye'],
    moduleSlugs: ['gia-609', 'gia-610', 'gia-611'],
    projectSlugs: ['potable-water-resilience-atlas'],
    publicationSlugs: ['potable-water-data-standard']
  },
  {
    id: 'wp5',
    slug: 'wp5',
    title: 'WP5: Studio Delivery and Partner Collaboration',
    summary: 'Operationalise the Groundwater Intelligence Studio as the practice environment for partner-facing delivery.',
    focus: [
      'Create repeatable studio methods for challenge scoping and prototyping.',
      'Support multidisciplinary team teaching and partner residencies.',
      'Document delivery patterns that can scale in later phases.'
    ],
    leadIds: ['sofia-alvarez', 'jacob-okoye'],
    moduleSlugs: ['gia-612', 'gia-613'],
    projectSlugs: ['community-recharge-intelligence-pilot'],
    publicationSlugs: ['studio-scenario-planning-guide']
  },
  {
    id: 'wp6',
    slug: 'wp6',
    title: 'WP6: Knowledge Mobilisation and Venture Pathways',
    summary: 'Translate academy outputs into publications, ventures, and adoption pathways that strengthen potable water systems.',
    focus: [
      'Support publication, communication, and open learning assets.',
      'Prepare venture and implementation pathways for validated innovations.',
      'Extend learner and partner impact through reusable knowledge products.'
    ],
    leadIds: ['leila-haddad', 'priya-raman'],
    moduleSlugs: ['gia-614', 'gia-615', 'gia-616'],
    projectSlugs: ['delta-aquifer-observatory'],
    publicationSlugs: ['aquifer-readiness-blueprint', 'studio-scenario-planning-guide']
  }
];

const moduleDefinitions = [
  ['gia-601', 'GIA 601', 'Foundations of Groundwater Intelligence', 'Semester 1', ['wp1']],
  ['gia-602', 'GIA 602', 'Hydrogeology for Potable Water Systems', 'Semester 1', ['wp1']],
  ['gia-603', 'GIA 603', 'Data Stewardship and Field Sensing', 'Semester 1', ['wp1']],
  ['gia-604', 'GIA 604', 'Spatial Analytics for Aquifers', 'Semester 1', ['wp2']],
  ['gia-605', 'GIA 605', 'Integrated Framework Design', 'Semester 2', ['wp2']],
  ['gia-606', 'GIA 606', 'Environmental Systems Modelling', 'Semester 2', ['wp2']],
  ['gia-607', 'GIA 607', 'Decision Intelligence for Potable Water Services', 'Semester 2', ['wp3']],
  ['gia-608', 'GIA 608', 'Climate Risk and Recharge Analytics', 'Semester 2', ['wp3']],
  ['gia-609', 'GIA 609', 'Groundwater Governance and Policy', 'Semester 3', ['wp4']],
  ['gia-610', 'GIA 610', 'Applied Machine Learning for Water', 'Semester 3', ['wp4']],
  ['gia-611', 'GIA 611', 'Digital Twins and Scenario Planning', 'Semester 3', ['wp4']],
  ['gia-612', 'GIA 612', 'Studio Methods for Partner Delivery', 'Semester 3', ['wp5']],
  ['gia-613', 'GIA 613', 'Research Design and Impact Evaluation', 'Semester 4', ['wp5']],
  ['gia-614', 'GIA 614', 'Publication and Knowledge Translation', 'Semester 4', ['wp6']],
  ['gia-615', 'GIA 615', 'Venture Pathways for Water Innovation', 'Semester 4', ['wp6']],
  ['gia-616', 'GIA 616', 'Capstone in Groundwater Intelligence', 'Semester 4', ['wp6']]
];

const modules = moduleDefinitions.map(([slug, code, title, term, wpIds], index) => ({
  slug,
  code,
  title,
  term,
  credits: 15,
  summary: `${title} prepares learners to apply groundwater intelligence methods to potable water challenges through research, analysis, and studio practice.`,
  outcomes: [
    `Apply the core methods and concepts introduced in ${code}.`,
    'Interpret interdisciplinary groundwater evidence for decision-making.',
    'Produce partner-ready outputs with clear analytical reasoning.'
  ],
  wpIds,
  peopleIds: index < 6 ? ['amina-ndlovu', 'priya-raman'] : index < 11 ? ['daniel-mensah', 'sofia-alvarez'] : ['jacob-okoye', 'leila-haddad'],
  projectSlugs: index % 3 === 0 ? ['delta-aquifer-observatory'] : index % 3 === 1 ? ['potable-water-resilience-atlas'] : ['community-recharge-intelligence-pilot']
}));

const people = [
  {
    slug: 'amina-ndlovu',
    name: 'Dr. Amina Ndlovu',
    role: 'Director of Groundwater Intelligence',
    summary: 'Leads hydroinformatics research that connects aquifer monitoring, forecasting, and potable water resilience.',
    email: 'contact@gia.academy',
    expertise: ['Hydroinformatics', 'Forecasting', 'Aquifer systems'],
    bio: [
      'Dr. Ndlovu leads the academy’s research strategy across observation, modelling, and decision support.',
      'Her work centres on building evidence pipelines that improve potable water planning in climate-stressed regions.'
    ],
    wpIds: ['wp1', 'wp3'],
    moduleSlugs: ['gia-601', 'gia-602', 'gia-607', 'gia-608'],
    projectSlugs: ['delta-aquifer-observatory', 'community-recharge-intelligence-pilot'],
    publicationSlugs: ['aquifer-readiness-blueprint']
  },
  {
    slug: 'daniel-mensah',
    name: 'Prof. Daniel Mensah',
    role: 'Research Lead for Integrated Frameworks',
    summary: 'Designs integrated groundwater intelligence frameworks for modelling, governance, and policy translation.',
    email: 'contact@gia.academy',
    expertise: ['Systems modelling', 'Policy analytics', 'Integrated frameworks'],
    bio: [
      'Prof. Mensah stewards the academy’s integrated framework work and ensures research methods stay usable across disciplines.',
      'He works closely with basin institutions to embed potable water priorities in model design and governance workflows.'
    ],
    wpIds: ['wp2', 'wp4'],
    moduleSlugs: ['gia-604', 'gia-605', 'gia-609', 'gia-610', 'gia-611'],
    projectSlugs: ['potable-water-resilience-atlas'],
    publicationSlugs: ['potable-water-data-standard']
  },
  {
    slug: 'priya-raman',
    name: 'Dr. Priya Raman',
    role: 'Programme Director',
    summary: 'Shapes the curriculum, programme structure, and assessment design for the academy.',
    email: 'contact@gia.academy',
    expertise: ['Curriculum design', 'Assessment', 'Research methods'],
    bio: [
      'Dr. Raman develops the modular study experience and coordinates teaching across the academy.',
      'She aligns coursework and research outputs so learners can contribute to potable water innovation from the first semester.'
    ],
    wpIds: ['wp2', 'wp6'],
    moduleSlugs: ['gia-601', 'gia-605', 'gia-613', 'gia-614', 'gia-616'],
    projectSlugs: ['potable-water-resilience-atlas'],
    publicationSlugs: ['aquifer-readiness-blueprint']
  },
  {
    slug: 'sofia-alvarez',
    name: 'Eng. Sofia Alvarez',
    role: 'Platform and Studio Lead',
    summary: 'Builds the academy’s practice environment for partner delivery, digital twins, and studio operations.',
    email: 'contact@gia.academy',
    expertise: ['Studio delivery', 'Digital platforms', 'Scenario planning'],
    bio: [
      'Eng. Alvarez leads the Groundwater Intelligence Studio and its delivery methods for partner-facing work.',
      'Her team prototypes tools that make groundwater intelligence actionable for potable water services.'
    ],
    wpIds: ['wp5'],
    moduleSlugs: ['gia-611', 'gia-612', 'gia-613'],
    projectSlugs: ['community-recharge-intelligence-pilot'],
    publicationSlugs: ['studio-scenario-planning-guide']
  },
  {
    slug: 'jacob-okoye',
    name: 'Dr. Jacob Okoye',
    role: 'Innovation and Partnerships Lead',
    summary: 'Connects academy projects with utilities, public agencies, and venture pathways.',
    email: 'contact@gia.academy',
    expertise: ['Partnerships', 'Innovation pipelines', 'Utility collaboration'],
    bio: [
      'Dr. Okoye manages external collaboration across the studio, applied research, and venture development.',
      'He focuses on how groundwater intelligence can strengthen equitable potable water services through implementation.'
    ],
    wpIds: ['wp3', 'wp4', 'wp5'],
    moduleSlugs: ['gia-607', 'gia-609', 'gia-612', 'gia-615'],
    projectSlugs: ['community-recharge-intelligence-pilot', 'potable-water-resilience-atlas'],
    publicationSlugs: ['potable-water-data-standard']
  },
  {
    slug: 'leila-haddad',
    name: 'Leila Haddad',
    role: 'Knowledge Hub Editor',
    summary: 'Curates publications, events, and public knowledge products for the academy.',
    email: 'contact@gia.academy',
    expertise: ['Knowledge translation', 'Editorial strategy', 'Open learning'],
    bio: [
      'Haddad leads the public-facing knowledge hub and coordinates publication workflows.',
      'Her work ensures academy outputs remain accessible to researchers, practitioners, and potable water decision-makers.'
    ],
    wpIds: ['wp1', 'wp6'],
    moduleSlugs: ['gia-603', 'gia-614'],
    projectSlugs: ['delta-aquifer-observatory'],
    publicationSlugs: ['aquifer-readiness-blueprint', 'studio-scenario-planning-guide']
  }
];

const projects = [
  {
    slug: 'delta-aquifer-observatory',
    title: 'Delta Aquifer Observatory',
    summary: 'Creates a shared monitoring baseline for aquifer dynamics and potable water quality across partner field sites.',
    status: 'Active field programme',
    description: [
      'The observatory aligns field sensing, laboratory workflows, and data governance for groundwater intelligence research.',
      'It supplies core datasets used in teaching, publications, and partner analysis for potable water resilience.'
    ],
    wpIds: ['wp1', 'wp6'],
    peopleIds: ['amina-ndlovu', 'leila-haddad'],
    moduleSlugs: ['gia-601', 'gia-603', 'gia-616'],
    publicationSlugs: ['aquifer-readiness-blueprint']
  },
  {
    slug: 'potable-water-resilience-atlas',
    title: 'Potable Water Resilience Atlas',
    summary: 'Builds an integrated evidence atlas to compare groundwater risk, infrastructure dependence, and service vulnerability.',
    status: 'Design and modelling',
    description: [
      'This project translates the academy’s integrated framework into maps, indicators, and policy-ready narratives.',
      'It helps partners prioritise interventions where groundwater intelligence can most improve potable water outcomes.'
    ],
    wpIds: ['wp2', 'wp4'],
    peopleIds: ['daniel-mensah', 'priya-raman', 'jacob-okoye'],
    moduleSlugs: ['gia-605', 'gia-609', 'gia-610'],
    publicationSlugs: ['potable-water-data-standard']
  },
  {
    slug: 'community-recharge-intelligence-pilot',
    title: 'Community Recharge Intelligence Pilot',
    summary: 'Tests forecasting and studio delivery methods with local partners responsible for drought readiness and potable water access.',
    status: 'Partner pilot',
    description: [
      'The pilot combines forecasting, partner workshops, and scenario planning for groundwater recharge decisions.',
      'Its outputs feed directly into studio learning and later-phase innovation pathways for potable water services.'
    ],
    wpIds: ['wp3', 'wp5'],
    peopleIds: ['amina-ndlovu', 'sofia-alvarez', 'jacob-okoye'],
    moduleSlugs: ['gia-607', 'gia-612', 'gia-615'],
    publicationSlugs: ['studio-scenario-planning-guide']
  }
];

const publications = [
  {
    slug: 'aquifer-readiness-blueprint',
    title: 'Aquifer Readiness Blueprint',
    type: 'Working paper',
    year: 2026,
    summary: 'A starter blueprint for observation, stewardship, and quality assurance workflows that support potable water planning.',
    description: [
      'The blueprint packages the academy’s early work on field readiness, data design, and cross-team collaboration.',
      'It is used as a teaching reference in research and study pathways.'
    ],
    wpIds: ['wp1', 'wp6'],
    peopleIds: ['amina-ndlovu', 'priya-raman', 'leila-haddad'],
    projectSlugs: ['delta-aquifer-observatory']
  },
  {
    slug: 'potable-water-data-standard',
    title: 'Potable Water Quality Data Standard',
    type: 'Technical note',
    year: 2026,
    summary: 'Defines interoperable fields, metadata, and governance rules for potable water and groundwater datasets.',
    description: [
      'This technical note supports integrated framework modelling and public-sector reuse of academy outputs.',
      'It establishes a common language for projects, teaching, and partner collaborations.'
    ],
    wpIds: ['wp2', 'wp4'],
    peopleIds: ['daniel-mensah', 'jacob-okoye'],
    projectSlugs: ['potable-water-resilience-atlas']
  },
  {
    slug: 'studio-scenario-planning-guide',
    title: 'Studio Guide for Aquifer Scenario Planning',
    type: 'Practice guide',
    year: 2026,
    summary: 'Documents studio methods for partner workshops, scenario framing, and decision support in potable water contexts.',
    description: [
      'The guide captures facilitation patterns, artefacts, and governance questions used in the Groundwater Intelligence Studio.',
      'It helps the academy scale partner-ready delivery in future phases.'
    ],
    wpIds: ['wp3', 'wp5', 'wp6'],
    peopleIds: ['sofia-alvarez', 'leila-haddad'],
    projectSlugs: ['community-recharge-intelligence-pilot']
  }
];

const news = [
  {
    slug: 'phase-one-curriculum-launch',
    title: 'Groundwater Intelligence Academy launches Phase 1 curriculum',
    date: '2026-06-15',
    summary: 'The academy has published its first 16 modules and programme structure for public review.',
    description: [
      'The Phase 1 MVP introduces a public-facing curriculum map, work packages, and starter knowledge hub content.',
      'It establishes a clear route from research to study, studio practice, and potable water impact.'
    ]
  },
  {
    slug: 'studio-partner-onboarding',
    title: 'Groundwater Intelligence Studio opens partner onboarding',
    date: '2026-07-01',
    summary: 'Prospective public, utility, and civil society collaborators can now explore the studio delivery model.',
    description: [
      'The new public site explains how partner challenges move through scoping, analytics, and scenario planning.',
      'This creates an accessible entry point for collaboration around potable water innovation.'
    ]
  }
];

const events = [
  {
    slug: 'studio-open-day',
    title: 'Groundwater Intelligence Studio Open Day',
    date: '2026-08-12',
    location: 'Hybrid | GIA Studio',
    summary: 'A public demonstration of studio methods, partner challenges, and learner outputs.',
    description: [
      'Attendees will see how the studio translates groundwater intelligence into practical delivery formats.',
      'Sessions will focus on partner collaboration, scenario planning, and potable water resilience use cases.'
    ]
  },
  {
    slug: 'integrated-framework-workshop',
    title: 'Integrated Framework Methods Workshop',
    date: '2026-09-03',
    location: 'Online',
    summary: 'A methods workshop introducing the integrated framework that links research, teaching, and practice.',
    description: [
      'The workshop covers core concepts, starter datasets, and modelling pathways used across the academy.',
      'It is designed for researchers, practitioners, and partners working on potable water systems.'
    ]
  }
];

const partners = [
  {
    slug: 'national-water-research-institute',
    name: 'National Water Research Institute',
    summary: 'Supports applied groundwater science, field validation, and public evidence use.',
    type: 'Research partner',
    description: [
      'The institute collaborates on observation design and helps translate academy outputs into sector practice.',
      'Its teams provide a bridge between groundwater intelligence research and potable water policy dialogue.'
    ]
  },
  {
    slug: 'basin-utilities-consortium',
    name: 'Basin Utilities Consortium',
    summary: 'Convenes utility operators interested in groundwater resilience and service planning.',
    type: 'Utility network',
    description: [
      'The consortium informs studio challenge selection and validates decision support outputs.',
      'Its members highlight where groundwater intelligence can most improve potable water reliability.'
    ]
  },
  {
    slug: 'civic-potable-water-lab',
    name: 'Civic Potable Water Lab',
    summary: 'Connects community organisations, service advocates, and open data practitioners.',
    type: 'Civic partner',
    description: [
      'This partner helps ensure the academy’s public content stays accessible and action-oriented.',
      'It contributes community perspectives on equitable potable water outcomes.'
    ]
  }
];

const opportunities = [
  {
    title: 'Applications open for the GIA 601–604 entry sequence',
    summary: 'Prospective learners can register interest for the first module cluster and receive admissions updates.',
    action: 'Email contact@gia.academy to request the admissions brief.'
  },
  {
    title: 'Call for studio challenge partners',
    summary: 'Utilities, agencies, and civic organisations can propose collaboration topics for the Groundwater Intelligence Studio.',
    action: 'Use the contact page to discuss challenge framing and partner expectations.'
  }
];

const site = {
  title: 'Groundwater Intelligence Academy',
  tagline: 'Research, study, and innovation for groundwater intelligence and potable water resilience.',
  description: 'The Groundwater Intelligence Academy connects applied research, modular study, and studio delivery for potable water systems.',
  topNavigation,
  utilityLinks,
  workPackages,
  modules,
  people,
  projects,
  publications,
  news,
  events,
  partners,
  opportunities
};

module.exports = site;
