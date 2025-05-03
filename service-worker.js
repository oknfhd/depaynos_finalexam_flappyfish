const CACHE_NAME = 'flappy-fish-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/audio/bgmusic.mp3',
  '/assets/audio/flap.mp3',
  '/assets/audio/hit.mp3',
  '/assets/images/background.png',
  '/assets/images/fish.png',
  '/assets/images/icon.png',
  'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});