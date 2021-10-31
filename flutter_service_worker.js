'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "aed4f9337cb5f77119d152599a5e05b7",
"/": "aed4f9337cb5f77119d152599a5e05b7",
"main.dart.js": "2693a3070b6f4dd9d85d5fb7998dac2d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eb94e48f9d33b116cc6e0ce0de0e6c49",
".git/config": "af83d7d6f752daf3372ac922d3d2b5e1",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/0d/18a5a8a136356e7ef80bb1f1113b051e60e421": "cd0b889e8cdf99f623125a7ee02a4048",
".git/objects/0d/dda2e809cf3939fb361c66c1301af5dca56d50": "91193a0055f752ae5e99f2355de71bfc",
".git/objects/59/8c409f31f4b155ff2dbe566110385702ae470b": "ad26f5a9f6ef7bdff6996e1ce9eaf941",
".git/objects/3e/c413bb6836c3f73cde66989c4b440047f39acc": "3d9d437f7c6a6c282da3d70c9f16a209",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/2a6345d5219b7b5e5aa01f4446c52388b689da": "9ba8a97612667d649e1c1cb0e5d1c527",
".git/objects/57/07c6dac9f07a61af719486483738c38e284f3f": "624fa1f7ba3d2e0b3f708c9f9a7afda6",
".git/objects/57/faeadf99faa3d0ebf27373ec3efce5a814f4f2": "e3895c85dde0725c3d3a0f94ac331e2b",
".git/objects/6a/fc476cfe5559cefde6d97aafbd1e503fc7a4ae": "a732b655821486e1f296a50757f5be17",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/149411371529971c22faaf6632a1afc1653b0f": "3cb3d20024903c61d284d81d41ba5964",
".git/objects/32/ffaca2b07201696812943dd1a0fdddf97712cf": "bc7e4516ec63a1d6909799a1daa5b472",
".git/objects/56/e71a4c9979dda07bc0359030e593b0734e8f7d": "4dba7bf11a161b5b32879028fec70b50",
".git/objects/51/432c103e0e117f955e528d6d086596fb667d06": "fdef493a3543f39ae601a9fc06d3913b",
".git/objects/3d/c8df061a791d4d07591533150bbedc58152ac4": "d3d12c16640c01a0aa8c3cbd6f78dc02",
".git/objects/5f/e81b2284f0958d71d49d2207ab7eaef6a26868": "50635658b7daa991823e19e63ad70867",
".git/objects/05/6db6f2e93e2e859f80869e50d14eee029b909e": "1ebd9d66fb3c1104e84da16dc061e794",
".git/objects/da/e9b0794336115291e7db8ce3381d021b32aed8": "4a37f8fe5480d5cd81328dad422171f1",
".git/objects/ab/9714bf264e63316188a579cc5a50aa5d18e5de": "8e9500917a82d699403b908130945bae",
".git/objects/c9/285be6de0941a0f1e63ab227204533b8bf771c": "0b190b346baadb86f32f6fe26eb09e60",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/e3/63c2b78ec8fcc47d21c978b6e64dedcfeb0511": "b36ded834335ba2b88fa22746594f25d",
".git/objects/cf/831d9f94601ff156abbc4523f2a8a54bf26b8c": "b0317237e5200c4806795fbdc4938b99",
".git/objects/c8/72939eab4aac5e634a5ce272b4d293692959e8": "b6d2aeade9f05f9d41920293d1ea7f57",
".git/objects/c8/48af4b04d601b1dfff2d5b5793da581fea8a4c": "e75908d4c6701841f05fff2670c5da83",
".git/objects/c8/c48b7de4bf3bc7d5a0d87fc1210709dd9fae38": "a7f6ad01be8ca1cebd9fc731534b8d3d",
".git/objects/ed/5f1f24aa747b7be9ec0e825db2920dd020852a": "3e16a8e6bafc02076cee33102e6fea7d",
".git/objects/c1/6f36b782e7732652826c965b5501bcb921fb29": "e0c64c5ca06e385acd3859a96bf09ff5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/2447ae0e657dd3de3de513806cab834966398b": "80a020483621da57414686b98019da10",
".git/objects/17/8643be30b0e1d338374f97702d24193b7f06cc": "7241ad6528ac2304f70e441ff9742e20",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/2846a12085914cc0e38d9b48036b11d2a4d7c4": "1ceaceb9e2b3af1e9c752c4cbb2367e5",
".git/objects/4c/eec73d51e39f1039f20a74a3291bc27227a2c7": "9c298d0118f6384733a8e0a0ca9e5aed",
".git/objects/4d/623ecc3e300cd21ab42f72f12352dce117fcb8": "f9c2a082a821e62c69c91dbe80ca4753",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/792eeb64e573d96e85d9129f8ad87409cf5fd6": "dd1b4f36caf3e5e745223629a6c18590",
".git/objects/00/bc900ccd6aca65faaeb94a875acd43d43b20da": "2136fcc030ff8ac99f6998edaefece4d",
".git/objects/6e/3c797a525dd7a236d7403d1722012d18c72be2": "05031b5a7c38fbb7653369d0b00e0e57",
".git/objects/9a/8f1211d94f8728afd51a85f57917f4929fa21c": "8e8e12ed133cdbc77c87b0ed8c4e9435",
".git/objects/9a/6aec69b58347a372f3a91e5fc4e00c6b2a24a1": "4ec1b5a550a7919b517a8120ec3a3b3f",
".git/objects/54/a278b99573c620f563f8a5f1f8c327c979ca1a": "5463932c4dbd500f186cb89144cded5e",
".git/objects/3f/3002f8c95768f88c43ff54b1a3f8e454f81fbc": "0b22f60f6a9602a04019ea20587672d9",
".git/objects/37/7ccf8eed0f2f0b9e7bba06b96d4a8f6040e5c3": "30cabe625618f04f91dba154941fc354",
".git/objects/6d/5ccf77336578a9a8ffec524a6a7ad083e5e4e2": "4c0b35673041cc5415ef3919d8bb3b2c",
".git/objects/55/89c1901f64ef5253bd501088504c0961bab7ed": "11d0e0d8abaf17d4dd21e5ba1376cf75",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/97/a5f8b21c51797617f6407ceb228e4e8f7262f0": "0d66cb5d28d80e32232421700eada9ab",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0a/7aa7ea254a7f30fca1358e9ba98003483c2db5": "a96596ea32773984e0983625ce3380fb",
".git/objects/64/26f45355c6416500099d2686309cdb5a951b54": "6e36634b705d98e2b5c01c3143ce3ce3",
".git/objects/90/517eecfd8c8a8c8a388b26aa15d526bcb3a70f": "5e51205008597ac90838d8e151d51676",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c3/1490fabc477ab19b74ab3e43a527a70f917f7f": "36d45dbf878a98440a336a8503aa78a2",
".git/objects/c3/b6440c8d376d8ec8da55794396fc4638717b6f": "09dcc10c2c305f34069fd495ad6149e6",
".git/objects/c3/aee0aeee1ea0f63b25654ec1ff557724f6a77e": "81f8e526a33ddd251351c09ae2bec92e",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/4be67004bf57e206d88be8f155bd0eaa2e1796": "9e434879beae6d2ee95dc2750203489b",
".git/objects/f0/68c7698dca384286c7192ef82270600250d3e3": "4c1aa4e4782887784b48fd7f3ea27773",
".git/objects/e8/03ce98a2234e0bb88a84eaabcea25e84c50662": "6a78820dac8f114c5201d6d3bc19b377",
".git/objects/e8/4306459ae24af7f35a97dae49842527bd3a102": "6aa8d6f2fa63e57ec36d149e7d458720",
".git/objects/e9/b029c59f65b24bb486b3630eb17202e3151137": "0645912609c8fcc802300d62bb493b95",
".git/objects/cb/a7a3608668db526432a59e64ee78b96935652b": "f36f676f04509507bd942b3aafb93643",
".git/objects/f8/4d6f0fdd174a5dc7c30ca4ea33740c88871c68": "ab785c940ee01a984629ecf5fb31d0a0",
".git/objects/ce/4625f27fd3ea52ecc65b3b52946e8cd9e845d6": "75cb91d26e4e9a57c8abc7fa1dcecea3",
".git/objects/2d/fae6f863defad6635ef9fdc0df51439a786af7": "da2640902b8849daac133ca5f01bd9e5",
".git/objects/41/5f5355bb431cb95f079f745bba36663a4d6833": "da52daa07bc9105a4a283a05591b79e9",
".git/objects/70/01a5324f39bd7f4565745082c87f65fe96c98f": "284cfe2c2defa8a0135e95331b489f3a",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/8d/f279e7c2aae51e85fc91857a73935c9d848d86": "86b6acdf06b99cffd3c6d4e76999c62f",
".git/objects/15/bc78f27913a984c8234355f9c8ea366f2e5a1f": "0c440bb7a32547acf08f56d3ad0ea0f6",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/71/721c8a78fe980bd7f40889fe12b6748affa5c7": "defa04177fd95b0361f7bfac1f14b6e2",
".git/objects/1c/ef1adcf9b5736c7cce527d61e9db9c08e9263d": "19d2a56b8ebc80ef2155e3513286fa03",
".git/objects/49/8a8094ebf318353db7aeb5df367e37fd31942f": "5269ec772dfde2a9bbd4eafa2a81f85c",
".git/objects/7f/4b96bbc9a4e8072c03ffcd743b67f61eba7982": "feb7d51fe24ef2e0eb24e6a0be0a8c3d",
".git/objects/14/cc645b6392d1665538b5ae515e2e855a9236fd": "074b45b82adfb3338687d5fe1610f291",
".git/objects/14/409a07e40a11f275ca3172b8490c45afb956ef": "f226c3dd25d53d6637f3ffb72403e3c4",
".git/objects/14/e40411bd5f914b6baf80c1ce0d7545e872091a": "9faeeaa2e5dc1d67a278d9c9930158ce",
".git/objects/22/779bce66899c8049a0a6bd47053be9338bf5d1": "8ba673ee43d0694ab00dc6bf2a201550",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8219824499a99fcf8dac8e79672ae0b7",
".git/logs/refs/heads/master": "8219824499a99fcf8dac8e79672ae0b7",
".git/logs/refs/remotes/portfolio/master": "980e672baf17d19dd5a0f0fa764ec535",
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
".git/refs/heads/master": "d5b95a9bf9afb556bbc0c7fbba62d47e",
".git/refs/remotes/portfolio/master": "d5b95a9bf9afb556bbc0c7fbba62d47e",
".git/index": "0abb0de58588cff610a1a0ff0ed8866c",
".git/COMMIT_EDITMSG": "7fa88f6c9feb1a14b1b60f1aee15c6c6",
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
"assets/NOTICES": "b070c23bfeb2a52282f49249f8acfe57",
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
