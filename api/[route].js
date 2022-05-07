const routes = require('./_routes')

module.exports = (req, res) => {
    const { route } = req.query
    const path = route.toLowerCase().trim()

    if (routes[path] !== undefined) {
        res.writeHead(302, { 'Location': routes[path] })
    } else {
        const html = require('./_buildHtml')(routes)
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(html)
    }

    res.end()
}
