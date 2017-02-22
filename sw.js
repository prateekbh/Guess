importScripts('/sw/sw-helpers/sw-lib.js');
importScripts('https://cdn.rawgit.com/jakearchibald/idb-keyval/master/dist/idb-keyval-min.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.9/firebase-messaging.js');

goog.swlib.cacheRevisionedAssets([
  '/images/logo.png',
  '/public/css/userapp-e610a3a40d50aebf99f6.css',
  '/public/js/0-4b142d12f09568f95f60.js',
  '/public/js/userapp-e610a3a40d50aebf99f6.js',
  '/public/js/vendor-ce90025418faae738d99.js',
])

goog.swlib.warmRuntimeCache([
  '/',
  '/play',
]);

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
goog.swlib.router.registerRoute('/', goog.swlib.staleWhileRevalidate());
goog.swlib.router.registerRoute('/play', goog.swlib.staleWhileRevalidate());
goog.swlib.router.registerRoute(
  /https:\/\/images.pexels.com\//, goog.swlib.cacheFirst());

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
