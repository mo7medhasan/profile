
const cacheName ='cache-v1';
const resourcesToPrecache=[
    '/','index.html','M.png','../src/assets/mo7med about component.png','../src/assets/mo7med.jpeg',
    '../src/assets/mohamed person image png.png','../src/assets/line zigzag.png'
]
self.addEventListener('install',event =>{
    console.log('Install event !');
    event.waitUntil(caches.open(cacheName).then(cache =>{

        return cache.addAll(resourcesToPrecache);
    }))
});
self.addEventListener('activate',event =>{
    console.log('Activate event !');
});
self.addEventListener('fetch',event =>{
    console.log('Fetch intercepted for :' , event.request.url);
    event.respondWith(caches.match(event.request)
    .then(cashedResponse =>{
        return cashedResponse || fetch(event.request);
    }))
})
 