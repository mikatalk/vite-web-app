if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-428c2240.js",revision:null},{url:"assets/index-95cca21d.css",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"a7ab9dd3afb52d35054b6aca0cc82268"},{url:"icon.png",revision:"f7afa5ec966acb8575d35a26aa2eb0ea"},{url:"manifest.webmanifest",revision:"d707c7610e2fd8f6676abc6fa8776836"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
