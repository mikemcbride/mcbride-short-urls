const { parse } = require('url')

const routes = {
  'mike': 'https://mikemcbride.me',
  'mike-bday': 'https://smile.amazon.com/hz/wishlist/ls/1NKT0C1LMV4P7?ref_=wl_share', 
  'mike-xmas': 'https://smile.amazon.com/hz/wishlist/ls/1NKT0C1LMV4P7?ref_=wl_share',
  
  'becky': 'https://putting-on-love.com',
  'becky-bday': 'https://smile.amazon.com/hz/wishlist/ls/2C16Q3JHY6J00?ref_=wl_share',
  'becky-xmas': 'https://smile.amazon.com/hz/wishlist/ls/2C16Q3JHY6J00?ref_=wl_share',
  
  'rose': 'https://smile.amazon.com/hz/wishlist/ls/MAWRXNA3K831?ref_=wl_share',
  'rose-bday': 'https://smile.amazon.com/hz/wishlist/ls/MAWRXNA3K831?ref_=wl_share',
  'rose-xmas': 'https://smile.amazon.com/hz/wishlist/ls/MAWRXNA3K831?ref_=wl_share',
  
  'kolbe': 'https://smile.amazon.com/hz/wishlist/ls/3D4RIPZ1P14C8?ref_=wl_share',
  'kolbe-bday': 'https://smile.amazon.com/hz/wishlist/ls/3D4RIPZ1P14C8?ref_=wl_share',
  'kolbe-xmas': 'https://smile.amazon.com/hz/wishlist/ls/3D4RIPZ1P14C8?ref_=wl_share',
  
  'leo': 'https://smile.amazon.com/baby-reg/michael-mcbride-becky-mcbride-november-2018-ballwin/1IPTVKO44O453',
  'leo-bday': 'https://smile.amazon.com/baby-reg/michael-mcbride-becky-mcbride-november-2018-ballwin/1IPTVKO44O453',
  'leo-xmas': 'https://smile.amazon.com/baby-reg/michael-mcbride-becky-mcbride-november-2018-ballwin/1IPTVKO44O453'
}

const fallbackUrl = 'https://github.com/mikemcbride/mcbride-short-urls'

module.exports = (req, res) => {
  const { pathname } = parse(req.url, true)
  const path = pathname.toLowerCase().trim().replace('/', '')
  let location = routes[path] || fallbackUrl
  res.writeHead(302, { 'Location': location })
  res.end()
}