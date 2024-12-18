export const routes = new Map(Object.entries({
	"/rose": "https://www.amazon.com/hz/wishlist/ls/MAWRXNA3K831?ref_=wl_share",
	"/kolbe": "https://www.amazon.com/hz/wishlist/ls/2P3OPVP58R440?ref_=wl_share",
	"/leo": "https://www.amazon.com/hz/wishlist/ls/2MS23GBEMCO6S?ref_=wl_share",
	"/chiara": "https://www.amazon.com/hz/wishlist/ls/OQ5FDNAL1IFW?ref_=wl_share",
	"/mike": "https://www.amazon.com/hz/wishlist/ls/1NKT0C1LMV4P7?ref_=wl_share",
	"/becky": "https://www.amazon.com/hz/wishlist/ls/2C16Q3JHY6J00?ref_=wl_share",
	"/xmas": "https://christmas.mcbrides.us",
	"/doodle": "https://doodle.mcbrides.us",
}))

export default {
	async fetch(request) {
		const url = new URL(request.url);
		if (routes.get(url.pathname) !== undefined) {
			return Response.redirect(routes.get(url.pathname))
		}
		return new Response('Not Found', { status: 404, statusText: "Not Found" });
	},
};
