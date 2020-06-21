                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/index.html","revision":"31d2a42e0279572f11e74dc95c383621"},{"url":"/posts/sec-ctf-htb-m-blunder/","revision":"4666b05a89b9f5ff25095b7eb879ff3f"},{"url":"/posts/sec-ctf-htb-m-cache/","revision":"8b98baaf7dd4ad46cfd7e1409f39b5cf"},{"url":"/posts/sec-ctf-htb-m-admirer/","revision":"6d29eaab0c9bbed36efc4bb9050046aa"},{"url":"/posts/sec-ctf-htb-m-traceback/","revision":"1e731755e47dc72ecb03a6a46304802f"},{"url":"/posts/customize-the-favicon/","revision":"508bc6e4c2c6d41e12335139123763af"}];
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

