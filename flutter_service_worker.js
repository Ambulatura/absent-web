'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e6ba529cc382beb10534bc106425b73e",
".git/config": "96e05c002237ac24e34c01efd69bef74",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "79babda5d7f7e68ee257b659a3a50c16",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ba3626b4d80b66e2ead0a22ee0570c1b",
".git/logs/refs/heads/master": "ba3626b4d80b66e2ead0a22ee0570c1b",
".git/logs/refs/remotes/origin/master": "a4a95c935f948f029acab14c9e09a10e",
".git/objects/07/0ac7691f74166f75f21695b2af7b4eef01b54c": "bf0d1dcf715a41ec28a239a590230f41",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/15/6d4a109956c1e9eb1f172d4fc26f3f4a18c26f": "47855ee823ec5e091cdeabd41e2082ab",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/e1396fcca8017b91c1f472f30f43f53750491a": "ef606ce2cf919748bc82458d0518b876",
".git/objects/44/c65fbaa605a9ba3f55c64a7201b0ff3351549b": "eaa572c5c9e974e2b017910cdc319f61",
".git/objects/4a/96448111b7690b0909ec340ecb594ba7545dae": "c6f5c682c09fca402d356598857395c8",
".git/objects/58/b4a09d4c99c1b64897a819cf9e5eab8ca46f04": "9b44f966b4970ba2aa743f2d82b136dc",
".git/objects/61/35f9637ea84eecb06bf3cb6a93714dda6afb38": "b0e64fdb0fd05df5284bacdc99c5c541",
".git/objects/68/b2ec153c1db48ffe2f53d29db0c1c60859b083": "9fe75f62fd8e33c8529935805906d408",
".git/objects/73/0366db8c62061bbd14c2254487faa99227f3ed": "12f9011727f4a2eee982411f990e5fd5",
".git/objects/74/6c2423833c7d2dbcb7bd41a678a6bf585c5a38": "f507d59002a65010d339632cde80fafc",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/64c6ac56d2c7552cc69ca158594ac750a17591": "724d85159ce9f5637fbd242c148e4b6d",
".git/objects/8e/fd75923e8890223c4eb1063f4dc2f1c2f133da": "a051bc4a8411050748de949eb6ab49b9",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a0/157a56895035d8fb8d57b675782a418d4abc3d": "a3e3c7ab409178af05eeffed27e20267",
".git/objects/b0/20f39be5d7f30e3aff6788fecc6924dc018a57": "20431cdaf4e80fed1cb024b4bedee606",
".git/objects/b1/dab380717584de433679722d59ccb69096f7cb": "fdd9f4b8c9d12baa1d0a83052ff3c132",
".git/objects/b5/ec48606046c16a75279085f594a90509745449": "2e6d59f6f6bf84e302d062fbebd73151",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/528da70b9efa0d2cab7f0c113409e2fe11f5f1": "a5a542c5ccc1830de145954b3bfed2e5",
".git/objects/c1/a8f23f0a0244204d6fd5bfd2781ca16050b736": "cd4f2d9270a9a7805e32bc3d5b6c4fa6",
".git/objects/c6/8441450272923f05251b177495d2a7285aef1c": "2b535894ee8b03ad80928f10f27c4f79",
".git/objects/cc/88d81b5c095c837a755e9387c6d901aadaa2db": "28e09f3feff4aba612c46b284d42d7ad",
".git/objects/e6/02fb4cf2e4f8f3141bb68483d120a0b2ac4192": "7db88faa831422097de6b728fe860ace",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "53bc25eb5a6c8fb09be3e34f6a07ff21",
".git/refs/heads/master": "faf34c56bbc19ff21d1ffbd3c6b7467f",
".git/refs/remotes/origin/master": "faf34c56bbc19ff21d1ffbd3c6b7467f",
"assets/AssetManifest.json": "067f9d22c9ebb6d0ab51ffc81e0ecc79",
"assets/FontManifest.json": "e9e7ebe70a7ea47f8f0255b34f478243",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Raleway-Bold.ttf": "f49f3d2d9df5013c9bfaab7e3d39ee57",
"assets/fonts/Raleway-Italic.ttf": "b43297391b7d5d5d7b135958668c1876",
"assets/fonts/Raleway-Light.ttf": "466d154fedd98f85c9deb363ccf859a7",
"assets/fonts/Raleway-Medium.ttf": "bb5ae98e4ce1a64042093dc235c305ed",
"assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/NOTICES": "5aae3270bde1daccf5db43cf00bb9691",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1598d4815023aebf6347d4144d6a8dd2",
"/": "1598d4815023aebf6347d4144d6a8dd2",
"main.dart.js": "084d8a859beb31f6902ec9897e7e4a94",
"manifest.json": "2954182aed49fa09c8b39954c2bb81de"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
