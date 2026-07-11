const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const requiredRoutes = [
  '/',
  '/about/',
  '/research/',
  '/research/integrated-framework/',
  '/research/work-packages/',
  '/study/',
  '/study/programme-structure/',
  '/study/modules/',
  '/platform/',
  '/platform/groundwater-intelligence-studio/',
  '/people/',
  '/innovation/',
  '/innovation/projects/',
  '/knowledge-hub/',
  '/knowledge-hub/publications/',
  '/knowledge-hub/news/',
  '/knowledge-hub/events/',
  '/partnerships/',
  '/opportunities/',
  '/contact/',
  '/search/',
  '/login/'
];

function routeToFile(route) {
  if (route === '/') {
    return path.join(distDir, 'index.html');
  }
  return path.join(distDir, route.slice(1), 'index.html');
}

function listHtmlFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listHtmlFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

function hrefToFile(href) {
  if (href === '/') {
    return path.join(distDir, 'index.html');
  }
  if (href === '/styles.css') {
    return path.join(distDir, 'styles.css');
  }
  const clean = href.endsWith('/') ? `${href.slice(1)}index.html` : href.slice(1);
  return path.join(distDir, clean);
}

test('build creates required static routes', () => {
  requiredRoutes.forEach((route) => {
    assert.equal(fs.existsSync(routeToFile(route)), true, `Missing route ${route}`);
  });

  const modulePages = Array.from({ length: 16 }, (_, index) => `/study/modules/gia-${601 + index}/`);
  modulePages.forEach((route) => assert.equal(fs.existsSync(routeToFile(route)), true, `Missing module route ${route}`));

  const workPackagePages = Array.from({ length: 6 }, (_, index) => `/research/work-packages/wp${index + 1}/`);
  workPackagePages.forEach((route) => assert.equal(fs.existsSync(routeToFile(route)), true, `Missing work package route ${route}`));
});

test('home page includes required primary and utility navigation labels', () => {
  const home = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  ['About', 'Research', 'Study', 'Platform', 'Innovation', 'Partnerships', 'Knowledge Hub', 'Opportunities'].forEach((label) => {
    assert.match(home, new RegExp(`>${label}<`));
  });
  ['People', 'Contact', 'Search', 'Login'].forEach((label) => {
    assert.match(home, new RegExp(`>${label}<`));
  });
});

test('generated site uses potable water terminology consistently', () => {
  const files = [path.join(rootDir, 'README.md'), ...listHtmlFiles(distDir), path.join(rootDir, 'src', 'content.js')];
  const forbiddenTerm = ['port', 'able water'].join('');
  files.forEach((file) => {
    const contents = fs.readFileSync(file, 'utf8').toLowerCase();
    assert.equal(contents.includes(forbiddenTerm), false, `Found forbidden term in ${file}`);
  });
});

test('generated internal links resolve to existing files', () => {
  const htmlFiles = listHtmlFiles(distDir);
  const hrefPattern = /href="([^"]+)"/g;

  htmlFiles.forEach((file) => {
    const contents = fs.readFileSync(file, 'utf8');
    for (const match of contents.matchAll(hrefPattern)) {
      const href = match[1];
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
        continue;
      }
      assert.equal(fs.existsSync(hrefToFile(href)), true, `Broken href ${href} in ${file}`);
    }
  });
});
