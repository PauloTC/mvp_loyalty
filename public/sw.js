<<<<<<< HEAD
if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/192x192.png",revision:"5de332b971d4eacf63bc4066710fcc72"},{url:"/384x384.png",revision:"aa13640c0130785fdacbd2ccb8fd2ff8"},{url:"/512x512.png",revision:"bb4cd401f89385c10c2cdf4f4251ed54"},{url:"/_next/app-build-manifest.json",revision:"b38f1af317c71eb8e41e1277f383af4d"},{url:"/_next/static/_wuPsy2uIwLGuKMfJwyYe/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/_wuPsy2uIwLGuKMfJwyYe/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/186-dd4abf5f6519366c.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/23-8ba23532baf9ee56.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/271-49bb4cdac2708af8.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/479-4800a222e244337e.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/681-b0c0e75e59b91f1c.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/app/_not-found/page-204ae098e9f8bb88.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/app/home/page-ee4d059649177b4f.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/app/layout-17175f753e17d149.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/app/login/page-135c1869fbb7a4b0.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/app/page-2b70c3b343149294.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/app/prueba/page-3b296126179734ed.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/c610528b-2b0a55ac021294a6.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/fd9d1056-78e5f27b69484e13.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/main-app-ee0cf2edc39a4542.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/main-d67e41419daf5fdb.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-f0961a92bb4306ff.js",revision:"_wuPsy2uIwLGuKMfJwyYe"},{url:"/_next/static/css/217fc613fe006fa9.css",revision:"217fc613fe006fa9"},{url:"/_next/static/css/7af45e702404777a.css",revision:"7af45e702404777a"},{url:"/_next/static/css/e27dc859bc7f33b6.css",revision:"e27dc859bc7f33b6"},{url:"/_next/static/media/3B23C8_2_0.0ba0fe9d.woff",revision:"0ba0fe9d"},{url:"/_next/static/media/3B23C8_2_0.45d27de9.eot",revision:"45d27de9"},{url:"/_next/static/media/3B23C8_2_0.a2750cdf.svg",revision:"a2750cdf"},{url:"/_next/static/media/3B23C8_2_0.c0d1e4ee.woff2",revision:"c0d1e4ee"},{url:"/_next/static/media/3B23C8_7_0.1e4c0244.woff",revision:"1e4c0244"},{url:"/_next/static/media/3B23C8_7_0.1e7f4858.woff2",revision:"1e7f4858"},{url:"/_next/static/media/3B23C8_7_0.1f304c85.eot",revision:"1f304c85"},{url:"/_next/static/media/3B23C8_7_0.246c6975.svg",revision:"246c6975"},{url:"/_next/static/media/3B23C8_9_0.55583bdc.eot",revision:"55583bdc"},{url:"/_next/static/media/3B23C8_9_0.7dc670a4.woff2",revision:"7dc670a4"},{url:"/_next/static/media/3B23C8_9_0.8713c933.woff",revision:"8713c933"},{url:"/_next/static/media/3B23C8_9_0.bf438068.svg",revision:"bf438068"},{url:"/_next/static/media/3B23C8_C_0.19c06b7c.woff",revision:"19c06b7c"},{url:"/_next/static/media/3B23C8_C_0.bcce86f1.svg",revision:"bcce86f1"},{url:"/_next/static/media/3B23C8_C_0.d3ff95ab.woff2",revision:"d3ff95ab"},{url:"/_next/static/media/3B23C8_C_0.ff0b6542.eot",revision:"ff0b6542"},{url:"/_next/static/media/AlicorpSans-Bold.033ff035.svg",revision:"033ff035"},{url:"/_next/static/media/AlicorpSans-Bold.067f5ef8.woff",revision:"067f5ef8"},{url:"/_next/static/media/AlicorpSans-Bold.93e65706.ttf",revision:"93e65706"},{url:"/_next/static/media/AlicorpSans-Bold.ac41e6f5.woff2",revision:"ac41e6f5"},{url:"/_next/static/media/AlicorpSans-Bold.e8426be9.eot",revision:"e8426be9"},{url:"/_next/static/media/AlicorpSans-Light.78112eb0.svg",revision:"78112eb0"},{url:"/_next/static/media/AlicorpSans-Light.a5e6bf86.woff",revision:"a5e6bf86"},{url:"/_next/static/media/AlicorpSans-Light.b06a0366.ttf",revision:"b06a0366"},{url:"/_next/static/media/AlicorpSans-Light.cbcdeb1e.woff2",revision:"cbcdeb1e"},{url:"/_next/static/media/AlicorpSans-Light.f5269a90.eot",revision:"f5269a90"},{url:"/_next/static/media/AlicorpSans-Regular.739f8729.eot",revision:"739f8729"},{url:"/_next/static/media/AlicorpSans-Regular.9a3292fb.ttf",revision:"9a3292fb"},{url:"/_next/static/media/AlicorpSans-Regular.b7b69de9.woff",revision:"b7b69de9"},{url:"/_next/static/media/AlicorpSans-Regular.c4403a1f.woff2",revision:"c4403a1f"},{url:"/_next/static/media/AlicorpSans-Regular.d16a65e1.svg",revision:"d16a65e1"},{url:"/_next/static/media/AlicorpSans-SemiBold.0ed1f178.woff2",revision:"0ed1f178"},{url:"/_next/static/media/AlicorpSans-SemiBold.2bd899f2.woff",revision:"2bd899f2"},{url:"/_next/static/media/AlicorpSans-SemiBold.63da53f3.ttf",revision:"63da53f3"},{url:"/_next/static/media/AlicorpSans-SemiBold.813e760c.svg",revision:"813e760c"},{url:"/_next/static/media/AlicorpSans-SemiBold.c3d93c14.eot",revision:"c3d93c14"},{url:"/_next/static/media/dali-icons.4fa08da1.woff",revision:"4fa08da1"},{url:"/_next/static/media/dali-icons.94be334a.woff2",revision:"94be334a"},{url:"/_next/static/media/dali-icons.ce31257d.ttf",revision:"ce31257d"},{url:"/_next/static/media/dali-icons.ed93db89.eot",revision:"ed93db89"},{url:"/favicon.png",revision:"cecbc21a823024d30d464bac3fabe436"},{url:"/font.css",revision:"def5d2157466376305d4f0a17cadfb6b"},{url:"/fonts/AlicorpSans-Bold.ttf",revision:"b7ce4b018d1a70786aec4cb937eff965"},{url:"/fonts/AlicorpSans-Medium.ttf",revision:"069fd38b09bac7ea74ca8af536bf2d1a"},{url:"/fonts/AlicorpSans-Regular.ttf",revision:"dadddea8ad0ac7e84fba7a997a251aa1"},{url:"/fonts/AlicorpSans-SemiBold.ttf",revision:"715fdb3d25709545a952ad6e10263f26"},{url:"/header/profile.svg",revision:"0848fd8db356deeb7d7cddae1b5036d9"},{url:"/home/Icon.svg",revision:"4ff469734024018303ea172cfab0ce09"},{url:"/home/banner.png",revision:"572e57a35d4d2848fc2478a5427c884a"},{url:"/home/canjea.png",revision:"bc1c5b973577bf365390c220e9280ca4"},{url:"/home/estrellas.svg",revision:"b8cde4ce2688dcdcecb64bd81f2f8ca4"},{url:"/home/first_star.svg",revision:"5ca541d322f734d22846516533749321"},{url:"/home/funciona.png",revision:"13443c6b9aa4bbe2af262ebaaaf80c4f"},{url:"/home/historial.png",revision:"43e623b64e98f43b1e626e6377a417cc"},{url:"/home/second_star.svg",revision:"d18467a51c8e9861a35661e800c80fb9"},{url:"/home/stars-banner-points.svg",revision:"ff2ad08d89f554e7a0de372869f66715"},{url:"/home/whatsapp.svg",revision:"e46561797a990c9cfd8ee5bfa38c2b34"},{url:"/icon.png",revision:"76cc580e4c0eedcb3d7c7855af255943"},{url:"/login/Frame.svg",revision:"b65e71cc2dbd9971945eeae8af757da9"},{url:"/login/WsppImage.svg",revision:"a44424106d43e55c5aeb25ae12021175"},{url:"/logo.svg",revision:"54fc6742033be89c1498209491bf8105"},{url:"/logo_step.png",revision:"0eebd3bc98ba558c430c095b79d89877"},{url:"/manifest.json",revision:"b4e56c6efb104868f68d05d5a7ffa216"},{url:"/modals/hands.svg",revision:"745ccce305296f0b47fe5a062a399001"},{url:"/modals/muy satisfecho.svg",revision:"a8bb50e292e381841429dad2a7f1c999"},{url:"/modals/nada satisfecho.svg",revision:"5365b442b339c65ecdea01dc3146f4d9"},{url:"/modals/poco satisfecho.svg",revision:"10e09989f6d20fb8e1e4a71bc85754d9"},{url:"/modals/satisfecho.svg",revision:"2edf647234f17f4eadeb85f4d2903223"},{url:"/modals/totalmente satisfecho.svg",revision:"265b4627ccd489aa1dcc3ab6278b2da5"},{url:"/modals/umbrella.png",revision:"fa9228402442397c9fc05beb66da4502"},{url:"/orders/arrow.svg",revision:"2eb7149f10a95e2635117d52c61c3b2b"},{url:"/orders/arrow_left.svg",revision:"0569ad47ca00c72753fad8c0c73a9ae6"},{url:"/orders/empty_order.svg",revision:"5fb0d5301b05ddcbe613ad18195d2e9d"},{url:"/orders/insuma_box.svg",revision:"fa652d5e900b4a1e56ad393ffc4fedf7"},{url:"/orders/warning.svg",revision:"88293d641475048aaf17d11e1f3f7fb5"},{url:"/products/nicolini.png",revision:"ff6fc5a5306bf53c03bbcb209c1eb194"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
=======
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-8817a5e5'], (function (workbox) { 'use strict';

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      cacheWillUpdate: async ({
        request,
        response,
        event,
        state
      }) => {
        if (response && response.type === 'opaqueredirect') {
          return new Response(response.body, {
            status: 200,
            statusText: 'OK',
            headers: response.headers
          });
        }
        return response;
      }
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: []
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
>>>>>>> 3a2cbc05ba916165fea6e5c69e12bad2fd02c444
