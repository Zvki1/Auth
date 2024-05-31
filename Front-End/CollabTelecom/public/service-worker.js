const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/',
  "../index.html",
  "./public/logo192.png",
  './public/manifest.json',
  '/public/logo512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', event => {
  console.log("activating service worker");
  // event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  console.log("fetching", event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
}
);