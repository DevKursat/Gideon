const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexFile = path.join(distDir, 'index.html');
const outFile = path.join(distDir, '404.html');

if (!fs.existsSync(indexFile)) {
  console.error('index.html not found in dist. Build first.');
  process.exit(1);
}

const htmlContent = fs.readFileSync(indexFile, 'utf8');

// Inject a small redirect snippet to forward SPA routes back to index with a redirect param
const redirectSnippet = `\n<script>\n(function(){\n  try {\n    const pathname = location.pathname;\n    const segments = pathname.split('/').filter(Boolean);\n    const base = segments.length ? '/' + segments[0] + '/' : '/';\n    // If this is a fallback 404 route, redirect to base with the original path as a query param\n    if (location.search.indexOf('redirect=') === -1 && pathname !== base) {\n      location.replace(base + '?redirect=' + encodeURIComponent(location.pathname + location.search + location.hash));\n    }\n  } catch(e) {}\n})();\n</script>\n`;

const outHtml = htmlContent.replace('</head>', `${redirectSnippet}</head>`);
fs.writeFileSync(outFile, outHtml, 'utf8');
console.log('Created 404.html with SPA redirect fallback');
const fs = require('fs');
const path = require('path');

const distIndex = path.join(__dirname, '..', 'dist', 'index.html');
const dist404 = path.join(__dirname, '..', 'dist', '404.html');

if (!fs.existsSync(distIndex)) {
  console.error('dist/index.html not found. Run the build first.');
  process.exit(1);
}

let html = fs.readFileSync(distIndex, 'utf8');

// Inject a redirect script for GitHub Pages 404 fallback
const redirectSnippet = `<script>\n` +
  `  (function(){\n` +
  `    try {\n` +
  `      var p = location.pathname + location.search + location.hash;\n` +
  `      // If this URL is not the root of the site, redirect to the index with a query param pointing to the original path.\n` +
  `      if (p && p !== '/Gideon/' && p !== '/Gideon' && p !== '/') {\n` +
  `        location.replace('/Gideon/?redirect=' + encodeURIComponent(p));\n` +
  `      }\n` +
  `    } catch(e){}\n` +
  `  })();\n` +
  `</script>`;

// Place redirect snippet just before closing head
html = html.replace('</head>', `${redirectSnippet}\n</head>`);

fs.writeFileSync(dist404, html, 'utf8');
console.log('dist/404.html created with redirect snippet');
