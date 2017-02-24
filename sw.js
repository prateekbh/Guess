importScripts('/sw/sw-helpers/sw-lib.js');
importScripts('https://cdn.rawgit.com/jakearchibald/idb-keyval/master/dist/idb-keyval-min.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.9/firebase-messaging.js');

goog.swlib.cacheRevisionedAssets([
  '/images/logo.svg',
  '/images/logo.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500'
])

goog.swlib.warmRuntimeCache([
  '/',
  '/play',
]);

goog.swlib.router.registerRoute('/',
    goog.swlib.staleWhileRevalidate());
goog.swlib.router.registerRoute('/play', goog.swlib.staleWhileRevalidate());
goog.swlib.router.registerRoute(/\/public\/css\//, goog.swlib.cacheFirst());
goog.swlib.router.registerRoute(/\/public\/js\//, goog.swlib.cacheFirst());
goog.swlib.router.registerRoute(
  /https:\/\/images.pexels.com\//, goog.swlib.cacheFirst({
    cacheName: 'word-images',
  }));

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

firebase.initializeApp({
  'messagingSenderId': '678578574774'
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(async function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const gameData = await idbKeyval.get('game-data');
  gameData.wordReducer.giveNotificateionHint = true;
  await idbKeyval.set('game-data', gameData);
  // Customize notification here
  const notificationTitle = 'Guess!';
  const notificationOptions = {
    body: 'Free hint has arrived',
    icon: '/images/icons/icon-512x512.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});

self.addEventListener('notificationclick', event => {
    const rootUrl = new URL('/', location).href;
    event.notification.close();
    // Enumerate windows, and call window.focus(), or open a new one.
    event.waitUntil(
      clients.matchAll().then(matchedClients => {
        for (let client of matchedClients) {
          if (client.url === rootUrl) {
            return client.focus();
          }
        }
        return clients.openWindow("/");
      })
    );
});
