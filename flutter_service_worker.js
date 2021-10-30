'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "373b6840c700e1c1b22eda05932d490a",
"/": "373b6840c700e1c1b22eda05932d490a",
"main.dart.js": "d36bbf93694cc8cfae2a4a994192492d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eb94e48f9d33b116cc6e0ce0de0e6c49",
"assets/images/intellidoc/IMG_5408.PNG": "7eed102f91034660022169366fb5e33b",
"assets/images/intellidoc/IMG_5409.PNG": "b30ed0f7571a053fd036a15e852faaf2",
"assets/images/intellidoc/intellidoc_landing.png": "91cadd0262a81f22cc3565c71a840c67",
"assets/images/intellidoc/IMG_5407.PNG": "cc694e240a258081fcf9135f28c12e28",
"assets/images/intellidoc/IMG_5406.PNG": "3ecf53ac07edf8d9ad46f6178ec2eea4",
"assets/images/intellidoc/IMG_5410.PNG": "b0579be4d6dea6c8eafcca1116a21010",
"assets/images/galaxy.png": "173fac3aafd715dfc9ea13e6920ba518",
"assets/images/au.JPG": "1841f5718203c09d8d82fa061cf168c2",
"assets/images/fontline/fontline_landing.png": "80dea83bee9ef0ee6cf4a87bec7107e9",
"assets/images/others/me.jpg": "bed20fd924fb325b915c556a5b0c724e",
"assets/images/others/65313-running-alien.json": "ca541af96319fac4d821bdc46e95afb5",
"assets/images/others/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/images/others/cert1.pdf": "488763d60a011c28a27e453f5da9ca16",
"assets/images/others/outlook.png": "7e97261765b6c2170e23ccad2be09334",
"assets/images/others/cert2.pdf": "f371125b045eb662be5c6d916d9333e5",
"assets/images/others/github.png": "472739dfb5857b1f659f4c4c6b4568d0",
"assets/images/others/gc.png": "b4b568712f8c2835a3b10bf8b5fb4725",
"assets/images/others/choejur.png": "83cfe49d370e881a29dfe7e06fd04fff",
"assets/images/others/choejur.pdf": "eb552adcdaa1b1c56c983cdc37abe246",
"assets/images/others/7301-loader-animation.json": "03028686fd3f4c219c140d19a7e6dcf4",
"assets/images/others/c1.png": "0ebdc61f19aab4ebc878a01b7cb837ab",
"assets/images/others/c2.png": "171bcf0fb3537b49a37d93b2540c77b7",
"assets/images/others/stackoverflow.png": "acb71e0f82f275957f59f032221e25d1",
"assets/images/others/ufo.json": "32879923d8c1315aa6fb44f6fe53919d",
"assets/images/solar-system.png": "724e42be0be2edcc1c24d48bff37a18b",
"assets/images/project.png": "dac08c46c06f62bbe1332839ab6d36d5",
"assets/images/control-panel.png": "f1947988cf4793f79333b66dbb587d61",
"assets/images/scientist.png": "2f062e652f2f95533f07c3ddfcbebac0",
"assets/images/alien.png": "1b47dd21c9399432bb6a29cba751a6f3",
"assets/images/bg1.png": "936104869cc73097e8b0c7591cb25b1e",
"assets/images/robot.png": "5ff425292631778a7228bf854c196af6",
"assets/images/apple_card.png": "48dbc892dedf050e203703d8132ed898",
"assets/images/teleportation.png": "d47fe774ff5aec965b73a3ad52cb5e4d",
"assets/images/bg2.png": "35851e0e4e816b7f813403dda2a15b72",
"assets/images/2616075.jpg": "afd08fb3b185afa7570b6097fb233b5e",
"assets/images/science-fiction.png": "3ac56ec607253263b77283dad9df6ef9",
"assets/images/launch.png": "7bfb030875fafaf609c5a15e65bd6a9c",
"assets/AssetManifest.json": "5156dba29c54dad8e84684bc1a559aaa",
"assets/NOTICES": "b209d5b2f191ccffd56d82fcf2827ce0",
"assets/FontManifest.json": "b3e7dd1915298857b39395e3d98dcee1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/nasalization-rg.otf": "3e5a870c6d7a4be23b299043400eae98",
"assets/fonts/PressStart2P-Regular.ttf": "2c404fd06cd67770807d242b2d2e5a16",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Shoguns%2520Clan.ttf": "11789e061eb6eda9f9d8109d29f1224b",
"assets/fonts/Qomolangma-Drutsa.ttf": "fa0dde4e7699a1791b514f7bc1c3dc2d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
