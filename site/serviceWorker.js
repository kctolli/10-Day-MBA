const staticCache = "static-ten-day-mba-v1";
const assets = [
  "/",
  "/index.html",
  "/manifest.json",
  "/serviceWorker.js",
  "/assets/",  
  "/assets/index.js",
  "/assets/index.css",
  "/assets/The_Ten-day_MBA_3E.pdf",
  "/assets/marketing_strategy_development.png",
  "/assets/icons/",
  "/assets/icons/icon.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCache).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== staticCache) {
            console.log('Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
