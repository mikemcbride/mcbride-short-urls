const routes = require('./_routes')

module.exports = (req, res) => {
    const { route } = req.query
    const path = route.toLowerCase().trim()

    if (routes[path] !== undefined) {
        res.writeHead(302, { 'Location': routes[path] })
    } else {
        res.status(404).json({ message: 'Not Found' })
    }

    res.end()
}
