(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function d(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=d(t);fetch(t.href,e)}})();const y="modulepreload",v=function(r){return"/vite-web-app/"+r},g={},w=function(o,d,l){if(!d||d.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(d.map(e=>{if(e=v(e),e in g)return;g[e]=!0;const n=e.endsWith(".css"),u=n?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const c=t[a];if(c.href===e&&(!n||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${u}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":y,n||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),n)return new Promise((a,c)=>{i.addEventListener("load",a),i.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};function E(r={}){const{immediate:o=!1,onNeedRefresh:d,onOfflineReady:l,onRegistered:t,onRegisteredSW:e,onRegisterError:n}=r;let u,m;const i=async(c=!0)=>{await m};async function a(){if("serviceWorker"in navigator){const{Workbox:c}=await w(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);u=new c("/vite-web-app/sw.js",{scope:"/vite-web-app/",type:"classic"}),u.addEventListener("activated",s=>{(s.isUpdate||s.isExternal)&&window.location.reload()}),u.addEventListener("installed",s=>{s.isUpdate||l==null||l()}),u.register({immediate:o}).then(s=>{e?e("/vite-web-app/sw.js",s):t==null||t(s)}).catch(s=>{n==null||n(s)})}}return m=a(),i}console.log("Initializing PWA...");"serviceWorker"in navigator&&!/localhost/.test(window.location)&&E();let p;const f=document.querySelector(".add-button");window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),p=r,f.style.display="block",f.addEventListener("click",()=>{f.style.display="none",p.prompt(),p.userChoice.then(o=>{o.outcome==="accepted"?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),p=null})})});(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)&&(f.style.display="none");const L=()=>{var r;return!!((r=window.matchMedia)!=null&&r.call(window,"(display-mode: standalone)").matches||window.navigator.standalone)};L()&&(f.style.display="none");window.addEventListener("appinstalled",r=>{console.log("success app install!")});const h=document.querySelector("#app .grid");console.log("grid:",h);Array.from({length:100}).forEach(()=>{console.log(" -"),h.innerHTML+='<div class="box"></div>'});
