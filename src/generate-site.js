const fs = require('node:fs');
const path = require('node:path');
const site = require('./content');
const {
  heroSection,
  cardGrid,
  relatedContent,
  renderParagraphs,
  renderFactList,
  renderBullets,
  contentLayout,
  page,
  workPackageTemplate,
  moduleTemplate,
  escapeHtml
} = require('./templates');

const distDir = path.join(__dirname, '..', 'dist');

const bySlug = (collection) => new Map(collection.map((item) => [item.slug, item]));
const byId = (collection) => new Map(collection.map((item) => [item.id, item]));

const workPackagesById = byId(site.workPackages);
const modulesBySlug = bySlug(site.modules);
const peopleBySlug = bySlug(site.people);
const projectsBySlug = bySlug(site.projects);
const publicationsBySlug = bySlug(site.publications);
const routes = [];

function resetDist() {
  fs.rmSync(distDir, { recursive: true, force: true });
  fs.mkdirSync(distDir, { recursive: true });
  fs.copyFileSync(path.join(__dirname, 'styles.css'), path.join(distDir, 'styles.css'));
}

function writePage(route, html) {
  const cleanRoute = route.replace(/^\//, '').replace(/\/$/, '');
  const filePath = cleanRoute ? path.join(distDir, cleanRoute, 'index.html') : path.join(distDir, 'index.html');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html);
  routes.push(route || '/');
}

function detailTemplate({ eyebrow, title, summary, currentSection, currentUtility, facts = [], paragraphs = [], bulletsTitle, bullets = [], related = [] }) {
  return page({
    title,
    description: summary,
    currentSection,
    currentUtility,
    body: [
      heroSection({ eyebrow, title, text: summary }),
      contentLayout([
        `<section class="content-block"><h2>Overview</h2>${renderParagraphs(paragraphs.length ? paragraphs : [summary])}${facts.length ? renderFactList(facts) : ''}</section>`,
        bullets.length ? renderBullets(bulletsTitle, bullets) : ''
      ].filter(Boolean)),
      ...related.map((section) => relatedContent(section.title, section.cards))
    ].join('')
  });
}

function renderHomePage() {
  const sectionCards = [
    { href: '/research/', title: 'Research', summary: 'Explore the integrated framework, work packages, and research projects.' },
    { href: '/study/', title: 'Study', summary: 'See the programme structure and all 16 GIA modules.' },
    { href: '/platform/groundwater-intelligence-studio/', title: 'Groundwater Intelligence Studio', summary: 'Understand how partner delivery and applied learning work together.' },
    { href: '/knowledge-hub/', title: 'Knowledge Hub', summary: 'Browse publications, news, and events from the academy.' }
  ];

  return page({
    title: 'Home',
    description: site.description,
    body: [
      heroSection({
        eyebrow: 'Groundwater Intelligence Academy',
        title: 'Institutional research and learning for potable water resilience',
        text: site.description,
        actions: [
          { label: 'Explore research', href: '/research/' },
          { label: 'View study pathways', href: '/study/', variant: 'secondary' }
        ]
      }),
      cardGrid('Academy pathways', sectionCards),
      relatedContent('Featured work packages', site.workPackages.slice(0, 3).map((workPackage) => ({
        href: `/research/work-packages/${workPackage.slug}/`,
        title: workPackage.title,
        summary: workPackage.summary
      }))),
      relatedContent('Latest knowledge hub updates', [
        ...site.news.map((item) => ({ href: `/knowledge-hub/news/${item.slug}/`, title: item.title, summary: item.summary })),
        ...site.events.map((item) => ({ href: `/knowledge-hub/events/${item.slug}/`, title: item.title, summary: item.summary }))
      ])
    ].join('')
  });
}

function renderAboutPage() {
  return page({
    title: 'About',
    description: 'About the Groundwater Intelligence Academy.',
    currentSection: 'about',
    body: [
      heroSection({
        eyebrow: 'About',
        title: 'An academy for groundwater intelligence and potable water systems',
        text: 'The Groundwater Intelligence Academy links public research, modular study, and partner-facing innovation to improve how groundwater evidence supports potable water outcomes.'
      }),
      contentLayout([
        `<section class="content-block"><h2>Mission</h2>${renderParagraphs([
          'GIA convenes researchers, learners, and partners around practical groundwater intelligence challenges.',
          'Phase 1 establishes a public institutional website, a coherent route map, and a reusable content foundation for future growth.'
        ])}</section>`,
        renderBullets('Phase 1 priorities', [
          'Present a coherent public identity for the academy.',
          'Connect research work packages to study modules and partner innovation.',
          'Provide a maintainable content model that can evolve into a full CMS later.'
        ])
      ]),
      relatedContent('Meet the academy', site.people.slice(0, 4).map((person) => ({ href: `/people/${person.slug}/`, title: person.name, summary: person.summary })))
    ].join('')
  });
}

function renderResearchOverview() {
  return page({
    title: 'Research',
    description: 'Research overview for the Groundwater Intelligence Academy.',
    currentSection: 'research',
    body: [
      heroSection({
        eyebrow: 'Research',
        title: 'Integrated groundwater research for public impact',
        text: 'The research programme combines hydroclimate observation, integrated frameworks, forecasting, governance, and knowledge mobilisation for potable water resilience.',
        actions: [
          { label: 'Integrated Framework', href: '/research/integrated-framework/' },
          { label: 'Work Packages', href: '/research/work-packages/', variant: 'secondary' }
        ]
      }),
      cardGrid('Research structure', [
        { href: '/research/integrated-framework/', title: 'Integrated Framework', summary: 'See how GIA connects datasets, models, policy, and delivery.' },
        { href: '/research/work-packages/', title: 'Work Packages', summary: 'Explore WP1–WP6 and the academy’s core research architecture.' },
        { href: '/innovation/projects/', title: 'Research Projects', summary: 'Browse applied projects built on the academy’s research agenda.' }
      ]),
      relatedContent('Work packages', site.workPackages.map((workPackage) => ({ href: `/research/work-packages/${workPackage.slug}/`, title: workPackage.title, summary: workPackage.summary })))
    ].join('')
  });
}

function renderIntegratedFramework() {
  return page({
    title: 'Integrated Framework',
    description: 'Integrated framework for the academy.',
    currentSection: 'research',
    body: [
      heroSection({
        eyebrow: 'Research / Integrated Framework',
        title: 'A shared framework from observation to potable water decisions',
        text: 'The integrated framework aligns aquifer observation, modelling, studio delivery, governance, and knowledge translation so projects and teaching work from the same evidence backbone.'
      }),
      contentLayout([
        `<section class="content-block"><h2>Framework layers</h2>${renderParagraphs([
          'Phase 1 frames research as a connected system rather than isolated outputs.',
          'Each layer supports a clear progression from data readiness through decision support to implementation and communication.'
        ])}</section>`,
        renderBullets('Shared layers', [
          'Observation and data stewardship',
          'Integrated modelling and analytics',
          'Decision support and governance',
          'Studio delivery, knowledge products, and venture pathways'
        ])
      ]),
      relatedContent('Connected routes', [
        { href: '/research/work-packages/', title: 'Work packages', summary: 'WP1–WP6 operationalise the framework.' },
        { href: '/study/programme-structure/', title: 'Programme structure', summary: 'Study pathways mirror the research framework.' },
        { href: '/platform/groundwater-intelligence-studio/', title: 'Groundwater Intelligence Studio', summary: 'The studio translates framework outputs into partner delivery.' }
      ])
    ].join('')
  });
}

function renderWorkPackagesIndex() {
  return page({
    title: 'Work Packages',
    description: 'Work packages index.',
    currentSection: 'research',
    body: [
      heroSection({
        eyebrow: 'Research / Work Packages',
        title: 'WP1–WP6 structure the academy research portfolio',
        text: 'Each work package links research questions to modules, people, projects, and publications.'
      }),
      cardGrid('All work packages', site.workPackages.map((workPackage) => ({
        href: `/research/work-packages/${workPackage.slug}/`,
        title: workPackage.title,
        summary: workPackage.summary
      })))
    ].join('')
  });
}

function renderStudyOverview() {
  return page({
    title: 'Study',
    description: 'Study overview.',
    currentSection: 'study',
    body: [
      heroSection({
        eyebrow: 'Study',
        title: 'A modular pathway through groundwater intelligence',
        text: 'The study experience combines programme structure, 16 modules, and studio-linked research to prepare learners for potable water challenges.',
        actions: [
          { label: 'Programme Structure', href: '/study/programme-structure/' },
          { label: 'All Modules', href: '/study/modules/', variant: 'secondary' }
        ]
      }),
      cardGrid('Study routes', [
        { href: '/study/programme-structure/', title: 'Programme Structure', summary: 'See how the curriculum progresses across semesters and work packages.' },
        { href: '/study/modules/', title: 'Module Catalogue', summary: 'Browse GIA 601–616 and their linked research contexts.' },
        { href: '/platform/groundwater-intelligence-studio/', title: 'Studio Practice', summary: 'Understand how teaching connects to partner delivery.' }
      ]),
      relatedContent('Module highlights', site.modules.slice(0, 6).map((module) => ({ href: `/study/modules/${module.slug}/`, title: `${module.code} · ${module.title}`, summary: module.summary })))
    ].join('')
  });
}

function renderProgrammeStructure() {
  return page({
    title: 'Programme Structure',
    description: 'Programme structure for GIA study.',
    currentSection: 'study',
    body: [
      heroSection({
        eyebrow: 'Study / Programme Structure',
        title: 'Programme structure aligned to research and practice',
        text: 'The programme moves from foundations and integrated methods into governance, studio delivery, and capstone application.'
      }),
      contentLayout([
        `<section class="content-block"><h2>Semester design</h2>${renderParagraphs([
          'Semester 1 establishes foundations in hydrogeology, stewardship, and spatial analysis.',
          'Semesters 2 and 3 deepen integrated framework modelling, forecasting, governance, and studio practice.',
          'Semester 4 emphasises research design, publication, innovation pathways, and the capstone.'
        ])}</section>`,
        renderBullets('How the structure works', [
          'Modules are linked to one or more work packages.',
          'Projects and publications reinforce teaching with live research examples.',
          'The Groundwater Intelligence Studio anchors partner-facing practice.'
        ])
      ]),
      relatedContent('Browse modules', site.modules.map((module) => ({ href: `/study/modules/${module.slug}/`, title: `${module.code} · ${module.title}`, summary: module.term })))
    ].join('')
  });
}

function renderModulesIndex() {
  return page({
    title: 'Modules',
    description: 'Modules index.',
    currentSection: 'study',
    body: [
      heroSection({
        eyebrow: 'Study / Modules',
        title: 'GIA 601–616 module catalogue',
        text: 'The module catalogue gives a public snapshot of the academy’s teaching sequence and related research context.'
      }),
      cardGrid('All modules', site.modules.map((module) => ({
        href: `/study/modules/${module.slug}/`,
        title: `${module.code} · ${module.title}`,
        summary: module.summary,
        meta: module.term
      })))
    ].join('')
  });
}

function renderPlatformOverview() {
  return page({
    title: 'Platform',
    description: 'Platform overview.',
    currentSection: 'platform',
    body: [
      heroSection({
        eyebrow: 'Platform',
        title: 'The Groundwater Intelligence Studio is the academy platform for delivery',
        text: 'The platform connects partner challenge scoping, analytics, prototyping, and communication into one practice environment.'
      }),
      cardGrid('Platform routes', [
        { href: '/platform/groundwater-intelligence-studio/', title: 'Groundwater Intelligence Studio', summary: 'See the academy’s applied delivery environment.' },
        { href: '/innovation/projects/', title: 'Projects', summary: 'Explore partner-facing work developed through the platform.' }
      ])
    ].join('')
  });
}

function renderStudioPage() {
  return detailTemplate({
    eyebrow: 'Platform / Groundwater Intelligence Studio',
    title: 'Groundwater Intelligence Studio',
    summary: 'The studio is the academy’s applied environment for partner collaboration, scenario planning, and knowledge production.',
    currentSection: 'platform',
    facts: [
      { label: 'Focus', value: 'Challenge scoping, prototyping, and partner delivery' },
      { label: 'Connected work packages', value: 'WP3, WP5, WP6' }
    ],
    paragraphs: [
      'The studio turns academy research and teaching into structured delivery for utilities, public agencies, and civic collaborators.',
      'It is the main setting where learners and staff test groundwater intelligence approaches for potable water resilience.'
    ],
    bulletsTitle: 'Studio functions',
    bullets: ['Frame partner challenges', 'Prototype decision support workflows', 'Translate outputs into public and professional knowledge products'],
    related: [
      { title: 'Linked projects', cards: site.projects.map((project) => ({ href: `/innovation/projects/${project.slug}/`, title: project.title, summary: project.summary })) },
      { title: 'Partner entry points', cards: site.partners.map((partner) => ({ href: `/partnerships/${partner.slug}/`, title: partner.name, summary: partner.summary })) }
    ]
  });
}

function renderPeopleIndex() {
  return page({
    title: 'People',
    description: 'People directory.',
    currentUtility: 'people',
    body: [
      heroSection({
        eyebrow: 'People',
        title: 'Academy people directory',
        text: 'Meet the researchers, educators, editors, and partnership leads shaping the Groundwater Intelligence Academy.'
      }),
      cardGrid('Directory', site.people.map((person) => ({
        href: `/people/${person.slug}/`,
        title: person.name,
        summary: person.summary,
        meta: person.role
      })))
    ].join('')
  });
}

function renderInnovationOverview() {
  return page({
    title: 'Innovation',
    description: 'Innovation overview.',
    currentSection: 'innovation',
    body: [
      heroSection({
        eyebrow: 'Innovation',
        title: 'Innovation pathways for groundwater intelligence',
        text: 'Innovation at GIA connects applied projects, studio practice, and venture pathways that strengthen potable water systems.'
      }),
      cardGrid('Innovation routes', [
        { href: '/innovation/projects/', title: 'Research Projects', summary: 'See current applied projects and their linked research.' },
        { href: '/opportunities/', title: 'Opportunities', summary: 'Find ways to join as a learner or partner.' }
      ])
    ].join('')
  });
}

function renderProjectsIndex() {
  return page({
    title: 'Research Projects',
    description: 'Research projects index.',
    currentSection: 'innovation',
    body: [
      heroSection({
        eyebrow: 'Innovation / Projects',
        title: 'Applied research projects',
        text: 'Projects provide a bridge from the academy’s work packages to partner-facing innovation and public value.'
      }),
      cardGrid('Current projects', site.projects.map((project) => ({
        href: `/innovation/projects/${project.slug}/`,
        title: project.title,
        summary: project.summary,
        meta: project.status
      })))
    ].join('')
  });
}

function renderKnowledgeHubOverview() {
  return page({
    title: 'Knowledge Hub',
    description: 'Knowledge hub overview.',
    currentSection: 'knowledge-hub',
    body: [
      heroSection({
        eyebrow: 'Knowledge Hub',
        title: 'Publications, news, and events in one place',
        text: 'The knowledge hub makes academy outputs discoverable for researchers, partners, and the wider potable water community.'
      }),
      cardGrid('Knowledge hub routes', [
        { href: '/knowledge-hub/publications/', title: 'Publications', summary: 'Browse papers, technical notes, and practice guides.' },
        { href: '/knowledge-hub/news/', title: 'News', summary: 'Read academy updates and announcements.' },
        { href: '/knowledge-hub/events/', title: 'Events', summary: 'Find workshops, open days, and upcoming sessions.' }
      ])
    ].join('')
  });
}

function renderPublicationsIndex() {
  return page({
    title: 'Publications',
    description: 'Publications index.',
    currentSection: 'knowledge-hub',
    body: [
      heroSection({
        eyebrow: 'Knowledge Hub / Publications',
        title: 'Publications',
        text: 'Starter publications show how GIA translates research and practice into reusable knowledge products.'
      }),
      cardGrid('Publication list', site.publications.map((publication) => ({
        href: `/knowledge-hub/publications/${publication.slug}/`,
        title: publication.title,
        summary: publication.summary,
        meta: `${publication.type} · ${publication.year}`
      })))
    ].join('')
  });
}

function renderNewsIndex() {
  return page({
    title: 'News',
    description: 'News index.',
    currentSection: 'knowledge-hub',
    body: [
      heroSection({
        eyebrow: 'Knowledge Hub / News',
        title: 'News',
        text: 'Follow milestones, launches, and public updates from the Groundwater Intelligence Academy.'
      }),
      cardGrid('Latest news', site.news.map((item) => ({
        href: `/knowledge-hub/news/${item.slug}/`,
        title: item.title,
        summary: item.summary,
        meta: item.date
      })))
    ].join('')
  });
}

function renderEventsIndex() {
  return page({
    title: 'Events',
    description: 'Events index.',
    currentSection: 'knowledge-hub',
    body: [
      heroSection({
        eyebrow: 'Knowledge Hub / Events',
        title: 'Events',
        text: 'Events connect the academy’s research, teaching, and partner community.'
      }),
      cardGrid('Upcoming events', site.events.map((event) => ({
        href: `/knowledge-hub/events/${event.slug}/`,
        title: event.title,
        summary: event.summary,
        meta: `${event.date} · ${event.location}`
      })))
    ].join('')
  });
}

function renderPartnershipsIndex() {
  return page({
    title: 'Partnerships',
    description: 'Partnerships index.',
    currentSection: 'partnerships',
    body: [
      heroSection({
        eyebrow: 'Partnerships',
        title: 'Partnerships that support research and potable water impact',
        text: 'GIA works with research institutes, utilities, and civic organisations to ground its work in public need and practical implementation.'
      }),
      cardGrid('Partner directory', site.partners.map((partner) => ({
        href: `/partnerships/${partner.slug}/`,
        title: partner.name,
        summary: partner.summary,
        meta: partner.type
      })))
    ].join('')
  });
}

function renderOpportunitiesPage() {
  return page({
    title: 'Opportunities',
    description: 'Opportunities.',
    currentSection: 'opportunities',
    body: [
      heroSection({
        eyebrow: 'Opportunities',
        title: 'Ways to study, collaborate, and contribute',
        text: 'Phase 1 opportunities focus on learner interest, studio challenge partnerships, and future participation pathways.'
      }),
      cardGrid('Current opportunities', site.opportunities.map((item) => ({ href: '/contact/', title: item.title, summary: `${item.summary} ${item.action}` })))
    ].join('')
  });
}

function renderContactPage() {
  return page({
    title: 'Contact',
    description: 'Contact.',
    currentUtility: 'contact',
    body: [
      heroSection({
        eyebrow: 'Contact',
        title: 'Contact the Groundwater Intelligence Academy',
        text: 'Use the contact point below for admissions, partnerships, media, or research enquiries.'
      }),
      contentLayout([
        `<section class="content-block"><h2>Contact details</h2>${renderFactList([
          { label: 'Email', value: 'contact@gia.academy' },
          { label: 'Focus', value: 'Admissions, partnerships, research, and public information' }
        ])}</section>`,
        renderBullets('Useful next steps', [
          'Browse opportunities for learner and partner pathways.',
          'Explore people profiles to find relevant expertise.',
          'Use the search placeholder while the full discovery experience is being built.'
        ])
      ])
    ].join('')
  });
}

function renderPlaceholderPage(title, summary, currentUtility) {
  return page({
    title,
    description: summary,
    currentUtility,
    body: [
      heroSection({
        eyebrow: title,
        title,
        text: summary
      }),
      contentLayout([
        `<section class="content-block"><h2>Phase 1 placeholder</h2><p>${escapeHtml(summary)}</p><p>Deeper functionality will arrive in later phases once the content model, discovery requirements, and access workflows are finalised.</p></section>`
      ])
    ].join('')
  });
}

function renderPersonPage(person) {
  const workPackages = person.wpIds.map((id) => workPackagesById.get(id));
  const modules = person.moduleSlugs.map((slug) => modulesBySlug.get(slug)).filter(Boolean);
  const projects = person.projectSlugs.map((slug) => projectsBySlug.get(slug)).filter(Boolean);
  const publications = person.publicationSlugs.map((slug) => publicationsBySlug.get(slug)).filter(Boolean);

  return detailTemplate({
    eyebrow: 'People / Profile',
    title: person.name,
    summary: person.summary,
    currentUtility: 'people',
    facts: [
      { label: 'Role', value: person.role },
      { label: 'Email', value: person.email },
      { label: 'Expertise', value: person.expertise.join(', ') }
    ],
    paragraphs: person.bio,
    bulletsTitle: 'Linked work',
    bullets: workPackages.map((workPackage) => `${workPackage.id.toUpperCase()} · ${workPackage.title.replace(/^WP\d:\s*/, '')}`),
    related: [
      { title: 'Modules', cards: modules.map((module) => ({ href: `/study/modules/${module.slug}/`, title: `${module.code} · ${module.title}`, summary: module.summary })) },
      { title: 'Projects and publications', cards: [
        ...projects.map((project) => ({ href: `/innovation/projects/${project.slug}/`, title: project.title, summary: project.summary })),
        ...publications.map((publication) => ({ href: `/knowledge-hub/publications/${publication.slug}/`, title: publication.title, summary: publication.summary }))
      ] }
    ]
  });
}

function renderProjectPage(project) {
  const workPackages = project.wpIds.map((id) => workPackagesById.get(id));
  const people = project.peopleIds.map((slug) => peopleBySlug.get(slug)).filter(Boolean);
  const modules = project.moduleSlugs.map((slug) => modulesBySlug.get(slug)).filter(Boolean);
  const publications = project.publicationSlugs.map((slug) => publicationsBySlug.get(slug)).filter(Boolean);

  return detailTemplate({
    eyebrow: 'Innovation / Project',
    title: project.title,
    summary: project.summary,
    currentSection: 'innovation',
    facts: [
      { label: 'Status', value: project.status },
      { label: 'Linked work packages', value: workPackages.map((workPackage) => workPackage.id.toUpperCase()).join(', ') }
    ],
    paragraphs: project.description,
    bulletsTitle: 'Project connections',
    bullets: people.map((person) => `${person.name} · ${person.role}`),
    related: [
      { title: 'Connected modules', cards: modules.map((module) => ({ href: `/study/modules/${module.slug}/`, title: `${module.code} · ${module.title}`, summary: module.summary })) },
      { title: 'Publications and work packages', cards: [
        ...publications.map((publication) => ({ href: `/knowledge-hub/publications/${publication.slug}/`, title: publication.title, summary: publication.summary })),
        ...workPackages.map((workPackage) => ({ href: `/research/work-packages/${workPackage.slug}/`, title: workPackage.title, summary: workPackage.summary }))
      ] }
    ]
  });
}

function renderPublicationPage(publication) {
  const people = publication.peopleIds.map((slug) => peopleBySlug.get(slug)).filter(Boolean);
  const workPackages = publication.wpIds.map((id) => workPackagesById.get(id));
  const projects = publication.projectSlugs.map((slug) => projectsBySlug.get(slug)).filter(Boolean);

  return detailTemplate({
    eyebrow: 'Knowledge Hub / Publication',
    title: publication.title,
    summary: publication.summary,
    currentSection: 'knowledge-hub',
    facts: [
      { label: 'Type', value: publication.type },
      { label: 'Year', value: `${publication.year}` }
    ],
    paragraphs: publication.description,
    bulletsTitle: 'Contributors',
    bullets: people.map((person) => `${person.name} · ${person.role}`),
    related: [
      { title: 'Connected work', cards: [
        ...projects.map((project) => ({ href: `/innovation/projects/${project.slug}/`, title: project.title, summary: project.summary })),
        ...workPackages.map((workPackage) => ({ href: `/research/work-packages/${workPackage.slug}/`, title: workPackage.title, summary: workPackage.summary }))
      ] }
    ]
  });
}

function renderNewsPage(item) {
  return detailTemplate({
    eyebrow: 'Knowledge Hub / News',
    title: item.title,
    summary: item.summary,
    currentSection: 'knowledge-hub',
    facts: [{ label: 'Date', value: item.date }],
    paragraphs: item.description,
    related: [
      { title: 'Keep exploring', cards: [
        { href: '/knowledge-hub/events/', title: 'Events', summary: 'Find workshops and sessions connected to academy news.' },
        { href: '/knowledge-hub/publications/', title: 'Publications', summary: 'Browse related knowledge products and technical notes.' }
      ] }
    ]
  });
}

function renderEventPage(event) {
  return detailTemplate({
    eyebrow: 'Knowledge Hub / Event',
    title: event.title,
    summary: event.summary,
    currentSection: 'knowledge-hub',
    facts: [
      { label: 'Date', value: event.date },
      { label: 'Location', value: event.location }
    ],
    paragraphs: event.description,
    related: [
      { title: 'Prepare for the event', cards: [
        { href: '/platform/groundwater-intelligence-studio/', title: 'Groundwater Intelligence Studio', summary: 'See the delivery model featured in academy events.' },
        { href: '/study/modules/', title: 'Module catalogue', summary: 'Review the public study pathway that supports event themes.' }
      ] }
    ]
  });
}

function renderPartnerPage(partner) {
  return detailTemplate({
    eyebrow: 'Partnerships / Partner',
    title: partner.name,
    summary: partner.summary,
    currentSection: 'partnerships',
    facts: [{ label: 'Partner type', value: partner.type }],
    paragraphs: partner.description,
    related: [
      { title: 'How partnership connects', cards: [
        { href: '/platform/groundwater-intelligence-studio/', title: 'Groundwater Intelligence Studio', summary: 'The studio is the main interface for partner challenge work.' },
        { href: '/innovation/projects/', title: 'Research Projects', summary: 'Projects show how partnership shapes applied groundwater intelligence.' }
      ] }
    ]
  });
}

function generateSite() {
  resetDist();

  writePage('', renderHomePage());
  writePage('/about/', renderAboutPage());
  writePage('/research/', renderResearchOverview());
  writePage('/research/integrated-framework/', renderIntegratedFramework());
  writePage('/research/work-packages/', renderWorkPackagesIndex());

  site.workPackages.forEach((workPackage) => {
    writePage(`/research/work-packages/${workPackage.slug}/`, workPackageTemplate(workPackage, {
      people: workPackage.leadIds.map((slug) => peopleBySlug.get(slug)),
      modules: workPackage.moduleSlugs.map((slug) => modulesBySlug.get(slug)),
      projects: workPackage.projectSlugs.map((slug) => projectsBySlug.get(slug)),
      publications: workPackage.publicationSlugs.map((slug) => publicationsBySlug.get(slug))
    }));
  });

  writePage('/study/', renderStudyOverview());
  writePage('/study/programme-structure/', renderProgrammeStructure());
  writePage('/study/modules/', renderModulesIndex());
  site.modules.forEach((module) => {
    writePage(`/study/modules/${module.slug}/`, moduleTemplate(module, {
      workPackages: module.wpIds.map((id) => workPackagesById.get(id)),
      people: module.peopleIds.map((slug) => peopleBySlug.get(slug)).filter(Boolean),
      projects: module.projectSlugs.map((slug) => projectsBySlug.get(slug)).filter(Boolean)
    }));
  });

  writePage('/platform/', renderPlatformOverview());
  writePage('/platform/groundwater-intelligence-studio/', renderStudioPage());
  writePage('/people/', renderPeopleIndex());
  site.people.forEach((person) => writePage(`/people/${person.slug}/`, renderPersonPage(person)));

  writePage('/innovation/', renderInnovationOverview());
  writePage('/innovation/projects/', renderProjectsIndex());
  site.projects.forEach((project) => writePage(`/innovation/projects/${project.slug}/`, renderProjectPage(project)));

  writePage('/knowledge-hub/', renderKnowledgeHubOverview());
  writePage('/knowledge-hub/publications/', renderPublicationsIndex());
  site.publications.forEach((publication) => writePage(`/knowledge-hub/publications/${publication.slug}/`, renderPublicationPage(publication)));
  writePage('/knowledge-hub/news/', renderNewsIndex());
  site.news.forEach((item) => writePage(`/knowledge-hub/news/${item.slug}/`, renderNewsPage(item)));
  writePage('/knowledge-hub/events/', renderEventsIndex());
  site.events.forEach((event) => writePage(`/knowledge-hub/events/${event.slug}/`, renderEventPage(event)));

  writePage('/partnerships/', renderPartnershipsIndex());
  site.partners.forEach((partner) => writePage(`/partnerships/${partner.slug}/`, renderPartnerPage(partner)));
  writePage('/opportunities/', renderOpportunitiesPage());
  writePage('/contact/', renderContactPage());
  writePage('/search/', renderPlaceholderPage('Search', 'Search is included as a Phase 1 placeholder while full-site discovery is deferred to a later phase.', 'search'));
  writePage('/login/', renderPlaceholderPage('Login', 'Login is included as a Phase 1 placeholder while authentication and private learning workflows are deferred to a later phase.', 'login'));

  fs.writeFileSync(path.join(distDir, 'routes.json'), JSON.stringify(routes.sort(), null, 2));
}

generateSite();
