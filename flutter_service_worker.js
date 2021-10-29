'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "cbfca19b70eac1fcc9895f239c4d72d4",
"/": "cbfca19b70eac1fcc9895f239c4d72d4",
"main.dart.js": "e8535fcaa792d033587f8050f701fdd4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f52bccce2c014f9b2de9e0d908424d63",
".git/config": "1f73c21c9af334f2387531b77a14529c",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/149411371529971c22faaf6632a1afc1653b0f": "3cb3d20024903c61d284d81d41ba5964",
".git/objects/56/e71a4c9979dda07bc0359030e593b0734e8f7d": "4dba7bf11a161b5b32879028fec70b50",
".git/objects/51/432c103e0e117f955e528d6d086596fb667d06": "fdef493a3543f39ae601a9fc06d3913b",
".git/objects/5a/47b82f93bb6329654d4ded41462983d4668513": "63deb2c4513faeaef2d97b9d55fe3542",
".git/objects/a3/db356398880db281acf59ebbedd9a88e3f5de2": "beb64ef54b2da0f0fd630aad95f58a49",
".git/objects/da/e9b0794336115291e7db8ce3381d021b32aed8": "4a37f8fe5480d5cd81328dad422171f1",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/cf/831d9f94601ff156abbc4523f2a8a54bf26b8c": "b0317237e5200c4806795fbdc4938b99",
".git/objects/c8/48af4b04d601b1dfff2d5b5793da581fea8a4c": "e75908d4c6701841f05fff2670c5da83",
".git/objects/ed/5f1f24aa747b7be9ec0e825db2920dd020852a": "3e16a8e6bafc02076cee33102e6fea7d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/4be2df5467216899b4bb10336b3d175b29d5f3": "5d7d834d94efb0a96311f6b13889a843",
".git/objects/17/8643be30b0e1d338374f97702d24193b7f06cc": "7241ad6528ac2304f70e441ff9742e20",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/ea01c999e28ce70a36b18a357c0e013d66a6e2": "c65e64b98173d392d2270b93663f0d14",
".git/objects/21/a5c708de732e78cea1f0f1e29128f7ae5fca61": "c02bc07463697cff1a41ed88ed7f2dc1",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/8f1211d94f8728afd51a85f57917f4929fa21c": "8e8e12ed133cdbc77c87b0ed8c4e9435",
".git/objects/9a/6aec69b58347a372f3a91e5fc4e00c6b2a24a1": "4ec1b5a550a7919b517a8120ec3a3b3f",
".git/objects/98/2d46f3bebbe036923787becd3d899b12c99fff": "887a5207618d0f1b9add655db0555bae",
".git/objects/3f/3002f8c95768f88c43ff54b1a3f8e454f81fbc": "0b22f60f6a9602a04019ea20587672d9",
".git/objects/37/7ccf8eed0f2f0b9e7bba06b96d4a8f6040e5c3": "30cabe625618f04f91dba154941fc354",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ef/0efc9918dfd59d57d660d873aa4edbef2c4224": "88afb4325ad9632507d21a840a18a570",
".git/objects/c3/aee0aeee1ea0f63b25654ec1ff557724f6a77e": "81f8e526a33ddd251351c09ae2bec92e",
".git/objects/f7/6b491430297ed5f06b50354adc1f95893ae5e6": "29cba5e2e65a818cfe34782e5ae4940b",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/e9/4a3a3b9ab23564a3704bea94ff3f49212c90f8": "73025c3b6f077515811b860cc804955a",
".git/objects/e9/b029c59f65b24bb486b3630eb17202e3151137": "0645912609c8fcc802300d62bb493b95",
".git/objects/ce/4625f27fd3ea52ecc65b3b52946e8cd9e845d6": "75cb91d26e4e9a57c8abc7fa1dcecea3",
".git/objects/2d/fae6f863defad6635ef9fdc0df51439a786af7": "da2640902b8849daac133ca5f01bd9e5",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/15/bc78f27913a984c8234355f9c8ea366f2e5a1f": "0c440bb7a32547acf08f56d3ad0ea0f6",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/ef1adcf9b5736c7cce527d61e9db9c08e9263d": "19d2a56b8ebc80ef2155e3513286fa03",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/14/e40411bd5f914b6baf80c1ce0d7545e872091a": "9faeeaa2e5dc1d67a278d9c9930158ce",
".git/objects/22/779bce66899c8049a0a6bd47053be9338bf5d1": "8ba673ee43d0694ab00dc6bf2a201550",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a393fabb1f7fb4cc506d834da30de26c",
".git/logs/refs/heads/main": "7249e88faa63562f6b7a62565d7aa39f",
".git/logs/refs/remotes/origin/main": "4d3549ad1e6e180a8e1c2fe31cac32eb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8f36b069468fd8df6a3e1f19824f0ee0",
".git/refs/remotes/origin/main": "8f36b069468fd8df6a3e1f19824f0ee0",
".git/index": "76b81935289078b5c0f85043b76c99f0",
".git/COMMIT_EDITMSG": "395009571924a561c59a9ef551454cb0",
"assets/images/galaxy.png": "173fac3aafd715dfc9ea13e6920ba518",
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
"assets/AssetManifest.json": "99a627056540e0fe6d42298ecb66a5ec",
"assets/NOTICES": "cce43f7831e0ecd4a38e81752b867549",
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
