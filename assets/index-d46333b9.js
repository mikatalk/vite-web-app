(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const m="/vite-web-app/assets/javascript-8dac5379.svg",h="/vite-web-app/vite.svg";function y(n){let r=0;const s=i=>{r=i,n.innerHTML=`count is ${r}`};n.addEventListener("click",()=>s(r+1)),s(0)}const w="modulepreload",L=function(n){return"/vite-web-app/"+n},g={},b=function(r,s,i){if(!s||s.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=L(e),e in g)return;g[e]=!0;const o=e.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(!!i)for(let a=t.length-1;a>=0;a--){const d=t[a];if(d.href===e&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${u}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":w,o||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),o)return new Promise((a,d)=>{l.addEventListener("load",a),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())};function S(n={}){const{immediate:r=!1,onNeedRefresh:s,onOfflineReady:i,onRegistered:t,onRegisteredSW:e,onRegisterError:o}=n;let u,f;const l=async(d=!0)=>{await f};async function a(){if("serviceWorker"in navigator){const{Workbox:d}=await b(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);u=new d("/vite-web-app/sw.js",{scope:"/vite-web-app/",type:"classic"}),u.addEventListener("activated",c=>{(c.isUpdate||c.isExternal)&&window.location.reload()}),u.addEventListener("installed",c=>{c.isUpdate||i==null||i()}),u.register({immediate:r}).then(c=>{e?e("/vite-web-app/sw.js",c):t==null||t(c)}).catch(c=>{o==null||o(c)})}}return f=a(),l}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${h}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${m}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;y(document.querySelector("#counter"));"serviceWorker"in navigator&&!/localhost/.test(window.location)&&S();let p;const v=document.querySelector(".add-button");console.log("LOADED!");window.addEventListener("beforeinstallprompt",n=>{console.log("INSTALL STARTING!"),n.preventDefault(),p=n,v.style.display="block",v.addEventListener("click",()=>{v.style.display="none",p.prompt(),p.userChoice.then(r=>{r.outcome==="accepted"?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),p=null})})});
