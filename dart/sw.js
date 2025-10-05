if (!self.define) {
    const e = e => {
        "require" !== e && (e += ".js");
        let s = Promise.resolve();
        return n[e] || (s = new Promise((async s => {
            if ("document"in self) {
                const n = document.createElement("script");
                n.src = e,
                document.head.appendChild(n),
                n.onload = s
            } else
                importScripts(e),
                s()
        }
        ))),
        s.then(( () => {
            if (!n[e])
                throw new Error(`Module ${e} didn’t register its module`);
            return n[e]
        }
        ))
    }
      , s = (s, n) => {
        Promise.all(s.map(e)).then((e => n(1 === e.length ? e[0] : e)))
    }
      , n = {
        require: Promise.resolve(s)
    };
    self.define = (s, a, t) => {
        n[s] || (n[s] = Promise.resolve().then(( () => {
            let n = {};
            const i = {
                uri: location.origin + s.slice(1)
            };
            return Promise.all(a.map((s => {
                switch (s) {
                case "exports":
                    return n;
                case "module":
                    return i;
                default:
                    return e(s)
                }
            }
            ))).then((e => {
                const s = t(...e);
                return n.default || (n.default = s),
                n
            }
            ))
        }
        )))
    }
}
define("./sw.js", ["./workbox-4a677df8"], (function(e) {
    "use strict";
    importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute([{
        url: "/_next/static/chunks/framework-2191d16384373197bc0a.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/chunks/main-a5b53a415f5700a425bf.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/chunks/pages/%5Blang%5D-20dd6eb2c245db348dd7.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/chunks/pages/_app-3cae53cdb6c14f3b4ca3.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/chunks/pages/index-7442fad8627226ca3fde.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/chunks/pages/simulations-f032cd8dbc5ad5b355f1.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/chunks/pages/simulations/%5Bid%5D/elements-9dcf5fd8daecc74d7c57.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/chunks/pages/simulations/%5Bid%5D/jumps-15036d4ee489e0f3905b.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/chunks/pages/simulations/%5Bid%5D/program-64a5f7fc9239f7c8b3ab.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/chunks/pages/simulations/%5Bid%5D/spins-de58cae6ac9d98d230ba.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/chunks/webpack-f47d69457824065d04c3.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/e6sxusqIF1oUJswbQZK9V/_buildManifest.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/_next/static/e6sxusqIF1oUJswbQZK9V/_ssgManifest.js",
        revision: "e6sxusqIF1oUJswbQZK9V"
    }, {
        url: "/favicon.ico",
        revision: "c30c7d42707a47a3f4591831641e50dc"
    }, {
        url: "/icon-512x512.png",
        revision: "98e60b9da052957212dcbee5c280ca69"
    }, {
        url: "/icon.png",
        revision: "1ea33a54a091d3e9d4f94e5fa36ba573"
    }, {
        url: "/manifest.json",
        revision: "a1d65e398f7c62cfaa00d38ef222ba83"
    }, {
        url: "/robots.txt",
        revision: "5e0bd1c281a62a380d7a948085bfe2d1"
    }, {
        url: "/sitemap.xml",
        revision: "c8f370a9a9e941b354af611e8f9bd1d0"
    }], {
        ignoreURLParametersMatching: []
    }),
    e.cleanupOutdatedCaches(),
    e.registerRoute("/", new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
            cacheWillUpdate: async ({request: e, response: s, event: n, state: a}) => s && "opaqueredirect" === s.type ? new Response(s.body,{
                status: 200,
                statusText: "OK",
                headers: s.headers
            }) : s
        }]
    }), "GET"),
    e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3
        })]
    }), "GET"),
    e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"),
    e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"),
    e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(( ({url: e}) => {
        if (!(self.origin === e.origin))
            return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
    }
    ), new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(( ({url: e}) => {
        if (!(self.origin === e.origin))
            return !1;
        return !e.pathname.startsWith("/api/")
    }
    ), new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(( ({url: e}) => !(self.origin === e.origin)), new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600
        })]
    }), "GET")
}
));
