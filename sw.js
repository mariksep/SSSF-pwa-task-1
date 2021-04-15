var cacheName = "hello-pwa";
var filesToCache = [
  "./",
  "./index.html",
  "./css/style.css",
  "./css/fonts/stylesheet.css",
  "./js/main.js",
  "./images/pwa.png",
  "./images/icons/icon-72x72.png",
  "./css/fonts/Roboto-Regular-webfont.woff",
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
