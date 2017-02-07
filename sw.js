importScripts('/sw/sw-helpers/sw-lib.js');

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

