(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a="/vite-web-app/assets/javascript-8dac5379.svg",d="/vite-web-app/vite.svg";function u(r){let o=0;const s=i=>{o=i,r.innerHTML=`count is ${o}`};r.addEventListener("click",()=>s(o+1)),s(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${d}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${a}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;u(document.querySelector("#counter"));"serviceWorker"in navigator&&navigator.serviceWorker.register("/src/js/sw.js").then(()=>{console.log("Service Worker Registered")});let n;const l=document.querySelector(".add-button");window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),n=r,l.style.display="block",l.addEventListener("click",()=>{l.style.display="none",n.prompt(),n.userChoice.then(o=>{o.outcome==="accepted"?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),n=null})})});
