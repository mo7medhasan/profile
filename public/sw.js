var APP_NAME = "Mo7med";
var APP_VER = "2.3L";
var CACHE_NAME = APP_NAME + "-" + APP_VER;
var REQUIRED_FILES = [
  "/",
  "index.html",
  "M.png",
  
];
const cacheName = "Mo7med";
const resourcesToPrecache = [
  "/",
  "index.html",
  "M.png",
  "../src/assets/mo7med about component.webp",
  "../src/assets/mo7med.jpeg",
  "../src/assets/mohamed person image png.webp",
  "../src/assets/line zigzag.png",
];
self.addEventListener("install", (event) => {
  console.log("Install event !");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
  event.waitUntil(
    //Check cache number, clear all assets and re-add if cache number changed
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith(APP_NAME + "-"))
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  if (APP_DIAG) {
    console.log("Service Worker: Activated");
  }
});
self.addEventListener("fetch", (event) => {
  console.log("Fetch intercepted for :", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cashedResponse) => {
      return cashedResponse || fetch(event.request);
    })
  );
});

var APP_DIAG = false;

// //Service Worker Function Below.
// self.addEventListener('install', function(event) {
// 	event.waitUntil(
// 		caches.open(CACHE_NAME)
// 		.then(function(cache) {
// 			//Adding files to cache
// 			return cache.addAll(REQUIRED_FILES);
// 		}).catch(function(error) {
// 			//Output error if file locations are incorrect
// 			if(APP_DIAG){console.log('Service Worker Cache: Error Check REQUIRED_FILES array in _service-worker.js - files are missing or path to files is incorrectly written -  ' + error);}
// 		})
// 		.then(function() {
// 			//Install SW if everything is ok
// 			return self.skipWaiting();
// 		})
// 		.then(function(){
// 			if(APP_DIAG){console.log('Service Worker: Cache is OK');}
// 		})
// 	);
// 	if(APP_DIAG){console.log('Service Worker: Installed');}
// });

// self.addEventListener('fetch', function(event) {
// 	event.respondWith(
// 		//Fetch Data from cache if offline
// 		caches.match(event.request)
// 			.then(function(response) {
// 				if (response) {return response;}
// 				return fetch(event.request);
// 			}
// 		)
// 	);
// 	if(APP_DIAG){console.log('Service Worker: Fetching '+APP_NAME+'-'+APP_VER+' files from Cache');}
// });

// self.addEventListener('activate', function(event) {
// 	event.waitUntil(self.clients.claim());
// 	event.waitUntil(
// 		//Check cache number, clear all assets and re-add if cache number changed
// 		caches.keys().then(cacheNames => {
// 			return Promise.all(
// 				cacheNames
// 					.filter(cacheName => (cacheName.startsWith(APP_NAME + "-")))
// 					.filter(cacheName => (cacheName !== CACHE_NAME))
// 					.map(cacheName => caches.delete(cacheName))
// 			);
// 		})
// 	);
// 	if(APP_DIAG){console.log('Service Worker: Activated')}
// });
