const { parse } = require('url')
const routes = require('./redirects')

module.exports = (req, res) => {
  const { pathname } = parse(req.url, true)
  const route = pathname.toLowerCase().trim().replace('/', '')
  let location = routes[route] || 'https://github.com/mikemcbride/mcbride-short-urls'
  res.writeHead(302, { 'Location': location })
  res.end()
}