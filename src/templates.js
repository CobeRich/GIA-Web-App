const site = require('./content');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderLink(link, currentSection, className = 'site-nav__link') {
  const isCurrent = link.key === currentSection;
  return `<a class="${className}${isCurrent ? ` ${className}--active` : ''}" href="${escapeHtml(link.href)}"${isCurrent ? ' aria-current="page"' : ''}>${escapeHtml(link.label)}</a>`;
}

function renderHeader(currentSection, currentUtility) {
  return `
    <header class="site-header">
      <div class="shell site-header__inner">
        <a class="site-brand" href="/">${escapeHtml(site.title)}</a>
        <div class="site-header__navs">
          <nav class="site-nav" aria-label="Primary">
            ${site.topNavigation.map((link) => renderLink(link, currentSection)).join('')}
          </nav>
          <nav class="site-nav site-nav--utility" aria-label="Utility">
            ${site.utilityLinks.map((link) => renderLink(link, currentUtility, 'site-nav__utility-link')).join('')}
          </nav>
        </div>
      </div>
    </header>`;
}

function heroSection({ eyebrow, title, text, actions = [] }) {
  return `
    <section class="hero">
      <div class="shell hero__inner">
        <div class="hero__content">
          ${eyebrow ? `<p class="eyebrow">${escapeHtml(eyebrow)}</p>` : ''}
          <h1>${escapeHtml(title)}</h1>
          <p class="hero__text">${escapeHtml(text)}</p>
          ${actions.length ? ctaGroup(actions) : ''}
        </div>
      </div>
    </section>`;
}

function ctaGroup(actions) {
  return `<div class="cta-group">${actions
    .map((action) => `<a class="button${action.variant === 'secondary' ? ' button--secondary' : ''}" href="${escapeHtml(action.href)}">${escapeHtml(action.label)}</a>`)
    .join('')}</div>`;
}

function cardGrid(title, cards) {
  return `
    <section class="section">
      <div class="shell">
        <div class="section__heading">
          <h2>${escapeHtml(title)}</h2>
        </div>
        <div class="card-grid">
          ${cards
            .map(
              (card) => `
                <article class="card">
                  ${card.eyebrow ? `<p class="card__eyebrow">${escapeHtml(card.eyebrow)}</p>` : ''}
                  <h3><a href="${escapeHtml(card.href)}">${escapeHtml(card.title)}</a></h3>
                  ${card.meta ? `<p class="card__meta">${escapeHtml(card.meta)}</p>` : ''}
                  <p>${escapeHtml(card.summary)}</p>
                </article>`
            )
            .join('')}
        </div>
      </div>
    </section>`;
}

function relatedContent(title, cards) {
  if (!cards.length) {
    return '';
  }

  return `
    <section class="section section--alt">
      <div class="shell">
        <div class="section__heading">
          <h2>${escapeHtml(title)}</h2>
        </div>
        <div class="card-grid card-grid--compact">
          ${cards
            .map(
              (card) => `
                <article class="card card--compact">
                  <h3><a href="${escapeHtml(card.href)}">${escapeHtml(card.title)}</a></h3>
                  <p>${escapeHtml(card.summary)}</p>
                </article>`
            )
            .join('')}
        </div>
      </div>
    </section>`;
}

function renderParagraphs(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('');
}

function renderBullets(title, items) {
  return `
    <section class="content-block">
      <h2>${escapeHtml(title)}</h2>
      <ul class="bullet-list">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </section>`;
}

function renderFactList(items) {
  return `
    <dl class="facts">
      ${items
        .map(
          (item) => `
            <div>
              <dt>${escapeHtml(item.label)}</dt>
              <dd>${escapeHtml(item.value)}</dd>
            </div>`
        )
        .join('')}
    </dl>`;
}

function contentLayout(blocks) {
  return `<section class="section"><div class="shell content-layout">${blocks.join('')}</div></section>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="shell site-footer__inner">
        <div>
          <h2>${escapeHtml(site.title)}</h2>
          <p>${escapeHtml(site.tagline)}</p>
        </div>
        <div>
          <h3>Explore</h3>
          <ul class="footer-list">
            ${site.topNavigation.map((link) => `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <h3>Utility</h3>
          <ul class="footer-list">
            ${site.utilityLinks.map((link) => `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`).join('')}
          </ul>
        </div>
      </div>
    </footer>`;
}

function page({ title, description, currentSection, currentUtility, body }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)} | ${escapeHtml(site.title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    ${renderHeader(currentSection, currentUtility)}
    <main>
      ${body}
    </main>
    ${footer()}
  </body>
</html>`;
}

function workPackageTemplate(workPackage, context) {
  return page({
    title: workPackage.title,
    description: workPackage.summary,
    currentSection: 'research',
    body: [
      heroSection({
        eyebrow: 'Research / Work Package',
        title: workPackage.title,
        text: workPackage.summary,
        actions: [{ label: 'All work packages', href: '/research/work-packages/', variant: 'secondary' }]
      }),
      contentLayout([
        `<section class="content-block"><h2>Focus</h2>${renderParagraphs([workPackage.summary])}${renderFactList([
          { label: 'Lead team', value: context.people.map((person) => person.name).join(', ') },
          { label: 'Modules linked', value: context.modules.map((module) => module.code).join(', ') },
          { label: 'Projects linked', value: context.projects.map((project) => project.title).join(', ') }
        ])}</section>`,
        renderBullets('Core priorities', workPackage.focus)
      ]),
      relatedContent('Related modules', context.modules.map((module) => ({ href: `/study/modules/${module.slug}/`, title: `${module.code} · ${module.title}`, summary: module.summary }))),
      relatedContent('Related projects', context.projects.map((project) => ({ href: `/innovation/projects/${project.slug}/`, title: project.title, summary: project.summary }))),
      relatedContent('Related people and publications', [
        ...context.people.map((person) => ({ href: `/people/${person.slug}/`, title: person.name, summary: person.summary })),
        ...context.publications.map((publication) => ({ href: `/knowledge-hub/publications/${publication.slug}/`, title: publication.title, summary: publication.summary }))
      ])
    ].join('')
  });
}

function moduleTemplate(module, context) {
  return page({
    title: `${module.code} ${module.title}`,
    description: module.summary,
    currentSection: 'study',
    body: [
      heroSection({
        eyebrow: 'Study / Module',
        title: `${module.code} · ${module.title}`,
        text: module.summary,
        actions: [{ label: 'View all modules', href: '/study/modules/', variant: 'secondary' }]
      }),
      contentLayout([
        `<section class="content-block"><h2>Module snapshot</h2>${renderFactList([
          { label: 'Term', value: module.term },
          { label: 'Credits', value: `${module.credits}` },
          { label: 'Linked work packages', value: context.workPackages.map((workPackage) => workPackage.id.toUpperCase()).join(', ') }
        ])}</section>`,
        renderBullets('Learning outcomes', module.outcomes)
      ]),
      relatedContent('Teaching team', context.people.map((person) => ({ href: `/people/${person.slug}/`, title: person.name, summary: person.role }))),
      relatedContent('Connected research and projects', [
        ...context.workPackages.map((workPackage) => ({ href: `/research/work-packages/${workPackage.slug}/`, title: workPackage.title, summary: workPackage.summary })),
        ...context.projects.map((project) => ({ href: `/innovation/projects/${project.slug}/`, title: project.title, summary: project.summary }))
      ])
    ].join('')
  });
}

module.exports = {
  escapeHtml,
  heroSection,
  ctaGroup,
  cardGrid,
  relatedContent,
  renderParagraphs,
  renderBullets,
  renderFactList,
  contentLayout,
  page,
  workPackageTemplate,
  moduleTemplate
};
