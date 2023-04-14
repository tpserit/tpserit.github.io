const cacheName = 'serit-bakgaarden-site-v1'
const staticAssets = [
    './',
    './index.html',
    './index.php',
    './program.html',
    './weather.html',
    './info.html',
    './main.css',
    './manifest.json',
    './images/Serit-bakgaarden-logo-192x192.png',
    './images/Serit-bakgaarden-logo-512x512.png',
    './images/Serit-bakgaarden-logo.ico',
    './images/Serit-bakgaarden-logo.png',
    './images/bakgaarden-logo.svg',
    './images/oversiktskart.webp',
    './images/clear_sky.svg',
    './images/partly_clouded.svg',
    './images/light_clouds.svg',
    './images/cloudy.svg',
    './images/light_rain.svg',
    './images/rain.svg',
    './images/heavy_rain.svg',
    './images/fair_night.svg',
    './images/partly_clouded_night.svg',
    './script/app.js',
    './script/FetchWeatherAPIData.js',
    './script/GetAverageWeatherData.js',
    './script/GetWeatherSymbol.js',
    './script/index.js',
    './script/ParseWeatherData.js',
    './script/script.js',
];

self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', e => {
    self.clients.claim();
});

// self.addEventListener('fetch', async e => {
//     const req = e.request;
//     const url = new URL(req.url);

//     if (url.origin == location.origin) {
//         e.respondWith(cacheFirst(req));
//     } else {
//         e.respondWith(networkAndCache(req));
//     }
// });

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cached = await cache.match(req);
        return cached;
    }
}