const { parse } = require('url')
const routes = require('./routes')

const htmlRoutes = Object.entries(routes).map(([k, v]) => `<a href="${v}">${k}</a>`).join('')

const html = `<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>mcbrid.es</title>
    <style>body{font-family:system-ui,BlinkMacSystemFont,-apple-system,sans-serif;font-size:16px;margin:0;padding: 3rem;}main{max-width:40em;width:100%}h3{font-weight:600;margin-top:0;margin-bottom:1em}a{color:#4763ff;display:inline-block;font-family:monospace;margin-bottom:1rem;text-decoration:none}a:not(:last-child){border-right:1px solid #aaa;margin-right:1rem;padding-right:1rem}a:focus,a:hover{text-decoration:underline}</style>
  </head>
  <body>
    <main>
      <h3>mcbrid.es url directory</h3>
      ${htmlRoutes}
    </main>
  </body>
</html>`

module.exports = (req, res) => {
  const { pathname } = parse(req.url, true)
  const path = pathname.toLowerCase().trim().replace('/', '')
  
  if (routes[path] !== undefined) {
    res.writeHead(302, { 'Location': routes[path] })
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(html)
  }
  
  res.end()
}
