if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";importScripts("src/js/sw-functional.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-0f010c7f.css",revision:null},{url:"assets/index-d46333b9.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"2fdb7a209d5e021cb9063e838dd31a4d"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"icon.png",revision:"f7afa5ec966acb8575d35a26aa2eb0ea"},{url:"manifest.webmanifest",revision:"6423a91e43b015ebec95792febb5f8c0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
