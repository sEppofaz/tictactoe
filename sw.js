const CACHE = 'tictactoe-v1';
const SHELL = ['/tictactoe/', '/tictactoe/manifest.json', '/tictactoe/icon-192.png', '/tictactoe/icon-512.png', '/tictactoe/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.destination === 'document') {
    e.respondWith(fetch(e.request).catch(() => caches.match('/tictactoe/')));
    return;
  }
  e.respondWith(caches.match(e.request).then(c => c || fetch(e.request)));
});
