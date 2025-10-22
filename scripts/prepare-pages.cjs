const fs = require('fs')
const path = require('path')

const docsDir = path.resolve(__dirname, '..', 'docs')
const indexPath = path.join(docsDir, 'index.html')
const notFoundPath = path.join(docsDir, '404.html')

function copyIndexTo404() {
  if (!fs.existsSync(indexPath)) {
    console.error('docs/index.html not found. Build first.')
    process.exit(1)
  }
  const content = fs.readFileSync(indexPath, 'utf8')
  fs.writeFileSync(notFoundPath, content, 'utf8')
  console.log('Wrote docs/404.html from index.html')
}

function writeRouteIndex(route) {
  const routeDir = path.join(docsDir, route)
  if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true })
  const redirectTo = `/Gideon/?redirect=/Gideon/${route}`
  const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=${redirectTo}" />
    <script>try{location.replace('${redirectTo}' + location.search + location.hash)}catch(e){}
</script>
    <title>Redirecting...</title>
  </head>
  <body>
    Redirecting to <a href="${redirectTo}">${redirectTo}</a>
  </body>
</html>
`
  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8')
  console.log('Wrote', path.join('docs', route, 'index.html'))
}

function main() {
  copyIndexTo404()
  const routes = [
    'login',
    'register',
    'dashboard',
    'pricing',
    'chat',
    'forgot-password',
    'terms-of-service',
    'pricing-policy'
  ]
  routes.forEach(writeRouteIndex)
}

main()
