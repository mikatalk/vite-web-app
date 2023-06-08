var I=Object.defineProperty;var R=(n,e,t)=>e in n?I(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var p=(n,e,t)=>(R(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const T="modulepreload",x=function(n){return"/"+n},L={},B=function(e,t,a){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=x(s),s in L)return;L[s]=!0;const i=s.endsWith(".css"),d=i?'[rel="stylesheet"]':"";if(!!a)for(let m=o.length-1;m>=0;m--){const f=o[m];if(f.href===s&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${d}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":T,i||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),i)return new Promise((m,f)=>{u.addEventListener("load",m),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function O(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:a,onRegistered:o,onRegisteredSW:s,onRegisterError:i}=n;let d,b;const u=async(f=!0)=>{await b};async function m(){if("serviceWorker"in navigator){const{Workbox:f}=await B(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);d=new f("/sw.js",{scope:"/",type:"classic"}),d.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),d.addEventListener("installed",g=>{g.isUpdate||a==null||a()}),d.register({immediate:e}).then(g=>{s?s("/sw.js",g):o==null||o(g)}).catch(g=>{i==null||i(g)})}}return b=m(),u}console.log("Initializing PWA...");"serviceWorker"in navigator&&!/localhost/.test(window.location)&&O();let w;const y=document.querySelector("#main-install-app-button");window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),w=n,y.style.display="block",y.addEventListener("click",()=>{y.style.display="none",w.prompt(),w.userChoice.then(e=>{e.outcome==="accepted"?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),w=null})})});(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)&&(y.style.display="none");const M=()=>{var n;return!!((n=window.matchMedia)!=null&&n.call(window,"(display-mode: standalone)").matches||window.navigator.standalone)};M()&&(y.style.display="none");window.addEventListener("appinstalled",n=>{console.log("success app install!")});const S=class{constructor(e,t,a=S.UNSET){this.x=e,this.y=t,this.value=a}};let v=S;p(v,"UNSET","unset"),p(v,"SET","set");class N{constructor(){p(this,"cells",Array.from({length:100}).map((e,t)=>new v(t%10,Math.floor(t/10))))}getCellValueAtIndex(e){return this.cells[e].value}setCellValueAtIndex(e,t){this.cells[e].value=t}getCellValueAtPoint(e,t){return this.getCellValueAtIndex(this.pointToIndex(e,t))}setCellValueAtPoint(e,t,a){this.setCellValueAtIndex(this.pointToIndex(e,t),a)}pointToIndex(e,t){return e+10*t}}const c=class{constructor(e=null,t,a){p(this,"thumbnail",null);e&&(this.points=c.PIECES.find(o=>o.type===e)),this.points=this.getRandomPiece(),this.thumbnail=c.makeThumbnail(this)}getRandomPiece(){return JSON.parse(JSON.stringify(c.PIECES[Math.floor(c.PIECES.length*Math.random())]))}static makeThumbnail(e){const t=new Image;t.width=c.canvas.width=100,t.height=c.canvas.height=100;const a=c.context;return a.fillStyle="transparent",a.fillRect(0,0,100,100),a.fillStyle="red",a.fillRect(0,0,10,10),a.fillStyle="green",a.fillRect(90,90,10,10),t.src=c.canvas.toDataURL("image/png").replace("image/png","image/octet-stream"),t}};let h=c;p(h,"PIECES",[{type:"BigL",rotationAble:!0,points:[[0,0],[1,0],[2,0],[2,1],[2,2]]},{type:"SmallL",rotationAble:!0,points:[[0,0],[1,0],[1,1]]},{type:"Dot",rotationAble:!1,points:[[0,0]]},{type:"SmallSquare",rotationAble:!1,points:[[0,0],[1,0],[0,1],[1,1]]},{type:"BigSquare",rotationAble:!1,points:[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]]},{type:"Line2",rotationAble:!0,points:[[0,0],[1,0]]},{type:"Line3",rotationAble:!0,points:[[0,0],[1,0],[2,0]]},{type:"Line4",rotationAble:!0,points:[[0,0],[1,0],[2,0],[3,0]]},{type:"Line5",rotationAble:!0,points:[[0,0],[1,0],[2,0],[3,0],[4,0]]}]),p(h,"canvas",document.createElement("canvas")),p(h,"context",c.canvas.getContext("2d"));const l={bankPieces:[],grid:new N,changes:{grid:{previous:0,value:1},bank:{previous:0,value:1}}},r={state:l,mutate:{doSomething(){l.grid.setCellValueAtPoint(Math.floor(Math.random()*10),Math.floor(Math.random()*10),v[Math.random()>.5?"SET":"UNSET"]),l.changes.grid.value+=1},addPieceToBank(){l.bankPieces.push(new h),l.changes.bank.value+=1},hasRendered(n){l.changes[n].previous=l.changes[n].value}},getters:{gridChanged:()=>l.changes.grid.previous!==l.changes.grid.value,bankChanged:()=>l.changes.bank.previous!==l.changes.bank.value}},k=class{static loadImages(e,t,a){console.log("loading...",e);let o=0;for(let{name:s,url:i}of e){const d=new Image;d.onload=()=>{o+=1/e.length,t(o),console.log(" - progress:",o),o==1&&(console.log(" - done:",o),a())},d.src=i,k.files[s]=d}}static getImage(e){return files[e]}};let E=k;p(E,"files",{});console.log("store:",r);console.log("cells:",r.state.grid.cells);const U=document.querySelector("#app .grid"),A=[];r.state.grid.cells.forEach(({value:n})=>{const e=document.createElement("div");e.classList.add("box"),n==="set"&&e.classList.add("active"),A.push(e),U.appendChild(e)});const P=document.querySelector("#app .footer .bank");E.loadImages([{name:"",url:"src/imgs/tile.png"}],n=>console.log("Progress:",n),()=>{r.mutate.addPieceToBank(),r.mutate.addPieceToBank(),r.mutate.addPieceToBank(),C()});function C(){window.requestAnimationFrame(C),r.getters.gridChanged()&&W(),r.getters.bankChanged()&&q()}function W(){console.log("redraw grid"),r.state.grid.cells.forEach(({value:n},e)=>{const t=A[e];n==="set"?t.classList.add("active"):t.classList.remove("active")}),r.mutate.hasRendered("grid")}function q(){console.log("redraw bank"),P.innerHTML="",r.state.bankPieces.forEach((n,e)=>{const t=document.createElement("div");t.appendChild(n.thumbnail),t.classList.add("piece"),P.appendChild(t)}),r.mutate.hasRendered("bank")}
