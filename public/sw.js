if(!self.define){let e,s={};const c=(c,t)=>(c=new URL(c+".js",t).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(t,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const r=e=>c(e,n),u={module:{uri:n},exports:i,require:r};s[n]=Promise.all(t.map((e=>u[e]||r(e)))).then((e=>(a(...e),i)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/13770e2f-34dad8c31be910e8.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/2671-685360aa9ee58231.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/2714.9f5454629cc5277d.js",revision:"9f5454629cc5277d"},{url:"/_next/static/chunks/2953-cdd0498eaebfecd7.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/3420-8f7d703f539375cc.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/37144445-94dfb3c2e77963af.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/3c746cde-13e995e7450c7be5.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/4219-71c9fb382131fc5c.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/4681-c7c255563e4aa7de.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/4839-481d5ed5ff06a03a.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/5461-19f7d52f68c05f0b.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/65defed1-4bbdc810c342aac9.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/7093-5de7162b51cf5b0e.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/7684-eedc45d7d2a34064.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/8100ded3-3ca2724821b37879.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/8326-748b6c3345e064dc.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/8750-e8fcea3dd0a51e71.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/8895-76668dbe26e28d10.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/8b413569-bbc281e31040a1fc.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/9197-cdea9d5cd74118ed.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/9bb1fbd7-303128f2b3775905.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/_not-found-f8d922ca5ff4c25b.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/amigos/page-b73b249970e50e73.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/cadastro/avancado/page-7649e9484f092515.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/cadastro/page-f3d604aa1ed33199.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/conta/academias/page-140c05bcf2e954ad.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/conta/alterar-senha/page-9e337d0591bf2c31.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/conta/dados-complementares/page-ca30efa0029430cb.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/conta/dados/editar/page-cc537b0e3591d252.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/conta/dados/page-3ed607bb13b8d521.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/conta/page-1ee4121d6304c7e3.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/criar/confirmar/page-d9162cad187417c0.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/criar/page-4120c1a9e5b12476.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/criar/personalizar/page-1994d361999aecae.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/historico/medidas/page-93bbfc0b81255f44.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/historico/page-da23f8b7fe8354c3.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/home/page-67ab92d55a42664e.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/inicio/page-751ef391145af1e6.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/layout-ef7da603bdf9f82f.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/login/page-a0da9108a5160cef.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/meus-treinos/%5Bid%5D/exercicio/%5BidExercicio%5D/page-a792d461b88c3550.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/meus-treinos/%5Bid%5D/page-f0b377b8cce7f1f0.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/meus-treinos/page-86bcc515257df215.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/page-dc63084c0289f203.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/recuperar/page-d6bf542282b9ae62.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/app/sem-conexao/page-7649748e61643541.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/framework-1b14094c1d20e16b.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/main-8d1bd8cc92f07285.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/main-app-9a632fb584fe7ca2.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/pages/_app-885d9aa23ebf2652.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/pages/_error-1199ff8de5853d94.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-3d87824c119bfef4.js",revision:"vscmA-4E00CZ4-CtCGzxu"},{url:"/_next/static/css/93dc0f3c831fb299.css",revision:"93dc0f3c831fb299"},{url:"/_next/static/css/b9b07d7c9a83825f.css",revision:"b9b07d7c9a83825f"},{url:"/_next/static/media/123872b337d6d193-s.woff2",revision:"5bedbd236ece6c43be3bcfa723688df2"},{url:"/_next/static/media/29b9f05b88222499-s.woff2",revision:"6a6564af8a7cafde0ef5690b754fc7b0"},{url:"/_next/static/media/309186acf9d643c3-s.woff2",revision:"fd268d7ad207eda0f572b677aa4d9c3c"},{url:"/_next/static/media/3df6a114c8e9757b-s.woff2",revision:"0c870c82ec734e6fd04acbe07ef27fc4"},{url:"/_next/static/media/56f1a43d36b2cef7-s.woff2",revision:"f2975e9b7774be04cad5434fb5a1e52b"},{url:"/_next/static/media/826398df58e873eb-s.woff2",revision:"8915c4e754439cb05d5ba977377b070a"},{url:"/_next/static/media/ebc2c43700b3816b-s.woff2",revision:"72dc475004bd3e35c04eb1aff968bc36"},{url:"/_next/static/media/ed347bcde018be70-s.p.woff2",revision:"ff6da0bb5a4eed1d99bd5eb0ed65fc0a"},{url:"/_next/static/vscmA-4E00CZ4-CtCGzxu/_buildManifest.js",revision:"031a1e5eb95204157915a10444d53c6b"},{url:"/_next/static/vscmA-4E00CZ4-CtCGzxu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
