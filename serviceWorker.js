const staticCache = "static-ten-day-mba-v1";
const assets = [
  "/",
  "/index.html",
  "/manifest.json",
  "/assets/UVU.png",
  "/assets/footer.js",
  "/assets/worker.js",
  "/bootcamp",
  "/courses",
  "/materials",
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
