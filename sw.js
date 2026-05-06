/* PWA Service Worker - Hola Mundo Store */

const SW_VERSION = "2026-05-06_1";
const CACHE_PREFIX = "hms";
const PRECACHE = `${CACHE_PREFIX}:precache:${SW_VERSION}`;
const RUNTIME = `${CACHE_PREFIX}:runtime:${SW_VERSION}`;

const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/carrito.html",
  "/contacto.html",
  "/faq.html",
  "/favoritos.html",
  "/gracias.html",
  "/nosotros.html",
  "/producto.html",
  "/404.html",
  "/offline.html",
  "/css/styles.css",
  "/js/template.js",
  "/manifest.webmanifest",
  "/img/pwa/icon.svg",
  "/img/pwa/maskable.svg",
  "/img/logo.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PRECACHE);
      await cache.addAll(PRECACHE_URLS);
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k.startsWith(`${CACHE_PREFIX}:`) && k !== PRECACHE && k !== RUNTIME)
          .map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

function isNavigationRequest(request) {
  return request.mode === "navigate" || (request.method === "GET" && request.headers.get("accept")?.includes("text/html"));
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navegación: network-first con fallback offline
  if (isNavigationRequest(request)) {
    event.respondWith(
      (async () => {
        try {
          const network = await fetch(request);
          const cache = await caches.open(RUNTIME);
          cache.put(request, network.clone());
          return network;
        } catch {
          const cached = await caches.match(request);
          if (cached) return cached;
          return (await caches.match("/offline.html")) || Response.error();
        }
      })()
    );
    return;
  }

  // Assets: stale-while-revalidate (cache-first con actualización en background)
  const isAsset =
    url.pathname.startsWith("/css/") ||
    url.pathname.startsWith("/js/") ||
    url.pathname.startsWith("/img/") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".jpeg") ||
    url.pathname.endsWith(".webp") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".ico") ||
    url.pathname.endsWith(".webmanifest");

  if (!isAsset) return;

  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      const cache = await caches.open(RUNTIME);

      const fetchPromise = fetch(request)
        .then((response) => {
          if (response && response.ok) cache.put(request, response.clone());
          return response;
        })
        .catch(() => undefined);

      return cached || (await fetchPromise) || Response.error();
    })()
  );
});

