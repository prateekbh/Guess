importScripts('/sw/sw-helpers/sw-lib.js');

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