importScripts('/sw/sw-helpers/sw-lib.js');

goog.swlib.cacheRevisionedAssets([
  {
    url: '/',
    revision: '1'
  },
  {
    url: '/play',
    revision: '2'
  }
]);

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
console.log(goog.swlib);
debugger;
goog.swlib.router.registerRoute('/', goog.swlib.cacheFirst({
  cacheName: 'sw-precaching-revisioned-v1',
}));
goog.swlib.router.registerRoute('/play', goog.swlib.cacheFirst({
  cacheName: 'sw-precaching-revisioned-v1',
}));
goog.swlib.router.registerRoute(
  /https:\/\/images.pexels.com\//, goog.swlib.cacheFirst());