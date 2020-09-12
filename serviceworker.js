/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];

const self = this;


// install SW
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            // eslint-disable-next-line arrow-body-style
            .then(cache => {
                return cache.addAll(urlsToCache);
            }),
    );
});


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'));
            }),
    );
});

self.addEventListener('activate', event => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(
            // eslint-disable-next-line consistent-return
            // eslint-disable-next-line array-callback-return
            cacheNames.map(cacheName => {
                if (!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            }),
        )),
    );
});
