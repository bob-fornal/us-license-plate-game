// In your service worker
importScripts('cache.adderall.js');

const cachename = 'v6';

const STATIC_ASSETS = [
  '/',
  '404.html',
  'cache.adderall.js',
  'cache.adderall.js.map',
  'favicon.ico',
  'manifest.json',

  'images/icons/icon-72x72.png',
  'images/icons/icon-96x96.png',
  'images/icons/icon-128x128.png',
  'images/icons/icon-144x144.png',
  'images/icons/icon-152x152.png',
  'images/icons/icon-192x192.png',
  'images/icons/icon-384x384.png',
  'images/icons/icon-512x512.png'
];
const MUTABLE_ASSETS = [
  'game.html',
  'ideas.html',
  'index.html',
  'service-worker.js',
  'storage.js',
  'new-trip.html',
  'styles.css'
];

// call install event
self.addEventListener('install', event => {
  console.log('Service Worker installed');
  event.waitUntil(
    caches.open(cachename)
      .then(cache => {
        console.log('Service Worker caching files');
        try {
          adderall.addAll(cache, STATIC_ASSETS, MUTABLE_ASSETS);
        } catch (error) {
          console.log(error);
        }
      })
      .then(() => {
        self.skipWaiting();
      })
  );
});

// call activate event
self.addEventListener('activate', event => {
  console.log('Service Worker activated');
  // remove unwanted caches
  event.waitUntil(
    caches.keys()
      .then(cachenames => {
        return Promise.all(
          cachenames.map(cache => {
            if (cache !== cachename) {
              console.log('Service Worker clearing old cache');
              return caches.delete(cache);
            }
          })
        );
      })
  );
});

// call fetch event
self.addEventListener('fetch', event => {
  console.log('Service Worker fetching');
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // copy clone of response
        const responseClone = response.clone();
        caches.open(cachename)
          .then(cache => {
            cache.put(event.request, responseClone);
          });
        return response;
      })
      .catch((err) => {
        console.log(`Fetch Error ${err}`, event.request);
        return caches.match(event.request)
          .then(response => response);
      })
  );

  // event.respondWith(
  //   caches.open(cachename)
  //     .then((cache) => {
  //       return cache.match(event.request)
  //         .then((response) => {
  //           return response || fetch(event.request)
  //             .then((response) => {
  //               cache.put(event.request, response.clone());
  //               return response;
  //             });
  //         });
  //     })
  // );
});
