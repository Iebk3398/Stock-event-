// Hors ligne : l'app et ses bibliothèques sont gardées sur le téléphone.
// Mise à jour : changer VERSION (le même numéro est affiché sur l'accueil de l'app).
const VERSION = "13";
const CACHE = "stock-evenements-v" + VERSION;
const FILES = ["./", "index.html", "manifest.json", "lib/exceljs.min.js", "lib/jspdf.umd.min.js",
  "lib/jspdf.plugin.autotable.min.js", "lib/pdf.min.js", "lib/pdf.worker.min.js", "lib/tf.min.js", "lib/coco-ssd.min.js", "fonts/barlow-condensed-latin-600-normal.woff2", "fonts/barlow-condensed-latin-700-normal.woff2", "fonts/barlow-latin-400-normal.woff2", "fonts/barlow-latin-600-normal.woff2", "fonts/barlow-latin-700-normal.woff2", "fonts/ibm-plex-mono-latin-500-normal.woff2", "fonts/ibm-plex-mono-latin-600-normal.woff2", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];
self.addEventListener("install", (e) => {
  // cache: "reload" = on ignore le cache HTTP du téléphone, on prend les fichiers frais.
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: "reload" })))));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Page : toujours le réseau d'abord (sans cache HTTP), le cache seulement hors ligne.
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(url.href, { cache: "no-store" }).then((r) => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put("index.html", copy)); } return r; })
      .catch(() => caches.match("index.html", { ignoreSearch: true })));
    return;
  }
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request).then((r) => {
    if (r.ok && (url.origin === location.origin || url.host.endsWith("gstatic.com") || url.host.endsWith("googleapis.com"))) {
      const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy));
    }
    return r;
  })));
});
