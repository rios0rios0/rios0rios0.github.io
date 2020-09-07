                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/index.html","revision":"c3e475ee6c707c749afff5838c49cb79"},{"url":"/posts/sec-ctf-htb-m-blunder/","revision":"cd891883f3e5ca1480110ba7f6c78e23"},{"url":"/posts/sec-ctf-htb-m-cache/","revision":"9026180f1d25fff0ad729cfcbd56b9a4"},{"url":"/posts/sec-ctf-htb-m-admirer/","revision":"af5d2974db78449bf48177c542523e16"},{"url":"/posts/sec-ctf-htb-m-traceback/","revision":"bec220ca2f309c28cee57fc97ea215f9"}];
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

