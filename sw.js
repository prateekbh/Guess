importScripts('/sw/sw-helpers/sw-lib.js');

// Have the service worker take control as soon as possible.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

goog.swlib.cacheRevisionedAssets([
  {
    url: '/',
    revision: '1'
  },
  {
    url: '/play',
    revision: '1'
  }
]);

goog.swlib.router.registerRoute('/', goog.swlib.staleWhileRevalidate());
goog.swlib.router.registerRoute('/play', goog.swlib.staleWhileRevalidate());
goog.swlib.router.registerRoute(
  /https:\/\/images.pexels.com\//, goog.swlib.cacheFirst());