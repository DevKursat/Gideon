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
