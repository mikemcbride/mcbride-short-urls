package handler

import (
    "net/http"
    "strings"
)

var redirects = map[string]string{
    "rose": "https://www.amazon.com/hz/wishlist/ls/MAWRXNA3K831?ref_=wl_share",
    "kolbe": "https://www.amazon.com/hz/wishlist/ls/2P3OPVP58R440?ref_=wl_share",
    "leo": "https://www.amazon.com/hz/wishlist/ls/2MS23GBEMCO6S?ref_=wl_share",
    "chiara": "https://www.amazon.com/hz/wishlist/ls/OQ5FDNAL1IFW?ref_=wl_share",
    "mike": "https://www.amazon.com/hz/wishlist/ls/1NKT0C1LMV4P7?ref_=wl_share",
    "becky": "https://www.amazon.com/hz/wishlist/ls/2C16Q3JHY6J00?ref_=wl_share",
    "xmas": "https://christmas.mcbrides.us",
    "doodle": "https://doodle.mcbrides.us",
}

func Handler(w http.ResponseWriter, r *http.Request) {
    route := strings.ToLower(strings.TrimSpace(r.URL.Query().Get("route")))
    newUrl := redirects[route]
    if newUrl == "" {
        http.NotFound(w, r)
        return
    }
    http.Redirect(w, r, newUrl, http.StatusTemporaryRedirect)
}
