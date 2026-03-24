self.addEventListener('install', (event) => {
  console.log('Service Worker zainstalowany');
});

self.addEventListener('fetch', (event) => {
  // To pozwala aplikacji działać płynnie
  event.respondWith(fetch(event.request));
});
