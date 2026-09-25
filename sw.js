// PIH Apps service worker — caches the app shell so it opens instantly and can
// be installed as an app. The Apps Script pages themselves always load live.
const CACHE = 'pih-apps-v1';
const SHELL = ['./', './index.html', './apps.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon.png'];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(SHELL); }));
  self.skipWaiting();
});
self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});
// Network first (so edits to apps.js show up), fall back to cache when offline.
self.addEventListener('fetch', function(e) {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request).then(function(res) {
      const copy = res.clone();
      caches.open(CACHE).then(function(c) { c.put(e.request, copy); });
      return res;
    }).catch(function() { return caches.match(e.request, { ignoreSearch: true }); })
  );
});
