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
