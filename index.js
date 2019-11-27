const { parse } = require('url')
const routes = require('./routes.json')

module.exports = (req, res) => {
  const { pathname } = parse(req.url, true)
  const path = pathname.toLowerCase().trim().replace('/', '')
  
  if (routes[path] !== undefined) {
    res.writeHead(302, { 'Location': routes[path] })
  } else {
    const html = require('./buildHtml')(routes)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(html)
  }
  
  res.end()
}
