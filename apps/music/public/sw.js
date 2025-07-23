const CACHE_NAME = "audio-cache-v1";
const AUDIO_CACHE_URL_PATTERN = /\/api\/upload\/files\/.*/;

self.addEventListener("install", (event) => {
  self.skipWaiting(); // 立即接管
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = event.request.url;
  if (AUDIO_CACHE_URL_PATTERN.test(url)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          return cachedResponse; // 直接返回缓存
        }
        // 从网络获取并缓存
        const fetchResponse = await fetch(event.request);
        if (fetchResponse.ok) {
          cache.put(event.request, fetchResponse.clone());
        }
        return fetchResponse;
      })
    );
  }
});
