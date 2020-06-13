                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/index.html","revision":"d55f7715892c1b7ee95a7d19a92169c5"},{"url":"/posts/customize-the-favicon/","revision":"508bc6e4c2c6d41e12335139123763af"},{"url":"/posts/getting-started/","revision":"c8df5b61e27c62c4e87b3e0108137810"},{"url":"/posts/write-a-new-post/","revision":"4aefb42da81ecfd5f519468d339cdf0d"},{"url":"/posts/text-and-typography/","revision":"2fccd5eaaca796f3be383b1aef787843"}];
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

