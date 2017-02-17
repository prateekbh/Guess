importScripts('/sw/sw-helpers/sw-lib.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.9/firebase-messaging.js');

goog.swlib.cacheRevisionedAssets([
  '/images/icons/icon-512x512.png',
])

goog.swlib.warmRuntimeCache([
  '/',
  '/play',
]);

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
goog.swlib.router.registerRoute('/', goog.swlib.staleWhileRevalidate({
  cacheName: goog.swlib._revisionedCacheManager.getCacheName(),
}));
goog.swlib.router.registerRoute('/play', goog.swlib.staleWhileRevalidate({
  cacheName: goog.swlib._revisionedCacheManager.getCacheName(),
}));
goog.swlib.router.registerRoute(
  /https:\/\/images.pexels.com\//, goog.swlib.cacheFirst());

firebase.initializeApp({
  'messagingSenderId': '678578574774'
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Guess!';
  const notificationOptions = {
    body: 'Free hint has arrived',
    icon: '/images/icons/icon-512x512.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
