                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/index.html","revision":"ce0ac2f6b680a8a4dc84a4dc47025c49"},{"url":"/posts/sec-ctf-htb-m-blunder/","revision":"aa38ef581d196d50f303acf2a6de98cd"},{"url":"/posts/sec-ctf-htb-m-cache/","revision":"04ac3aff5f051a353950205b8dc5f213"},{"url":"/posts/sec-ctf-htb-m-admirer/","revision":"9ac542a29e2367aa1d43f6c44104a52e"},{"url":"/posts/sec-ctf-htb-m-traceback/","revision":"76df38bde6614c84c6db15b0f3838e6c"}];
            // service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
	prefix: 'rios0rios0',
	suffix: 'v1',
	precache: 'precache',
	runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
	/\.html$/,
	workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
	/assets\/(img|icons)/,
	workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
	/^https?:\/\/cdn.staticfile.org/,
	workbox.strategies.staleWhileRevalidate()
);

