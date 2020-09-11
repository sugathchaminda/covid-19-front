console.log('public folder')

const cacheData = 'appV1';
this.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheData).then(cache => {
            cache.addAll([
                'main.js',
                '1.js',
                '0.1.js',
                '2.1.js',
                '1.css',
                'main.e20ac1929422ad9f94d2.css',
                'assets/images/loading_icon.gif',
                'assets/images/favicon.png',
                '/index.html',
                '/country/distance',
                '/',
            ]);
        }),
    );
});

this.addEventListener('fetch', event => {

    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then(resp => {
                if (resp) {
                    return resp;
                }

                const requestUrl = event.request.clone();
                fetch(requestUrl);
            }),
        );
    }
});
