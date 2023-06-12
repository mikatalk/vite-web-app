var N=Object.defineProperty;var O=(o,e,t)=>e in o?N(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var l=(o,e,t)=>(O(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const W="modulepreload",F=function(o){return"/"+o},M={},q=function(e,t,n){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=F(s),s in M)return;M[s]=!0;const a=s.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!n)for(let p=i.length-1;p>=0;p--){const g=i[p];if(g.href===s&&(!a||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":W,a||(d.as="script",d.crossOrigin=""),d.href=s,document.head.appendChild(d),a)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function K(o={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:i,onRegisteredSW:s,onRegisterError:a}=o;let c,m;const d=async(g=!0)=>{await m};async function p(){if("serviceWorker"in navigator){const{Workbox:g}=await q(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);c=new g("/sw.js",{scope:"/",type:"classic"}),c.addEventListener("activated",r=>{(r.isUpdate||r.isExternal)&&window.location.reload()}),c.addEventListener("installed",r=>{r.isUpdate||n==null||n()}),c.register({immediate:e}).then(r=>{s?s("/sw.js",r):i==null||i(r)}).catch(r=>{a==null||a(r)})}}return m=p(),d}console.log("Initializing PWA...");"serviceWorker"in navigator&&!/localhost/.test(window.location)&&K();let I;const w=document.querySelector("#main-install-app-button");console.log("Running");window.addEventListener("beforeinstallprompt",o=>{o.preventDefault(),I=o,w.style.display="block",w.addEventListener("click",()=>{console.log("CLICK!"),w.style.display="none",I.prompt(),I.userChoice.then(e=>{e.outcome==="accepted"?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),I=null})})});(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)&&(w.style.display="none");const G=()=>{var o;return!!((o=window.matchMedia)!=null&&o.call(window,"(display-mode: standalone)").matches||window.navigator.standalone)};G()&&(w.style.display="none");window.addEventListener("appinstalled",o=>{console.log("success app install!")});const C=class{constructor(e,t,n=C.UNSET){this.x=e,this.y=t,this.value=n}};let u=C;l(u,"UNSET",""),l(u,"SET","set"),l(u,"PREVIEW","preview");class J{constructor(){l(this,"cells",Array.from({length:100}).map((e,t)=>new u(t%10,Math.floor(t/10))))}getCellValueAtIndex(e){return this.cells[e].value}setCellValueAtIndex(e,t){if(e<0||e>this.cells.length)return console.log("ERROR - index out of range:",e),null;this.cells[e].value=t}getCellValueAtPoint(e,t){return e<0||e>9||t<0||t>9?(console.log("ERROR - index out of range:",index),null):this.getCellValueAtIndex(this.pointToIndex(e,t))}setCellValueAtPoint(e,t,n){this.setCellValueAtIndex(this.pointToIndex(e,t),n)}pointToIndex(e,t){return e+10*t}doesItFitAt(e,t,n,i=u.SET){this.cells.forEach(r=>{r.value===u.PREVIEW&&(r.value=u.UNSET)});const s=1+Math.max(...n.map(([r])=>r))-Math.min(...n.map(([r])=>r)),a=1+Math.max(...n.map(([,r])=>r))-Math.min(...n.map(([,r])=>r)),c=Math.floor(e*10),m=Math.floor(t*10);if(c<-1||c>9||m<-1||m>9)return!1;const d=c-Math.floor(s/2),p=m-Math.floor(a/2);let g=!0;return n.forEach(([r,P])=>{const y=d+r,E=p+P;y>-1&&y<10&&E>-1&&E<10?this.getCellValueAtPoint(y,E)===u.SET&&(g=!1):g=!1}),n.forEach(([r,P])=>{const y=d+r,E=p+P;if(y>-1&&y<10&&E>-1&&E<10){const L=this.getCellValueAtPoint(y,E);this.setCellValueAtPoint(y,E,L===u.SET?u.SET:g?i:u.UNSET)}}),g}}const B=class{static loadImages(e,t,n){let i=0;for(let{name:s,url:a}of e){const c=new Image;c.onload=()=>{i+=1/e.length,t(i),i==1&&n()},c.src=a,B.files[s]=c}}static getImage(e){return B.files[e]}};let v=B;l(v,"files",{});const A=class{constructor(e=A.getRandomType()){l(this,"thumbnail",null);this.type=e,this.polyline=A.PIECES.find(t=>t.type===e),this.thumbnail=this.makeThumbnail()}static getRandomType(){return A.PIECES[Math.floor(A.PIECES.length*Math.random())].type}makeThumbnail(){const e=new Image;e.width=A.canvas.width=100,e.height=A.canvas.height=100;const t=A.context;t.clearRect(0,0,100,100);const n=v.getImage("tile"),i=1+Math.max(...this.polyline.points.map(([a])=>a))-Math.min(...this.polyline.points.map(([a])=>a)),s=1+Math.max(...this.polyline.points.map(([,a])=>a))-Math.min(...this.polyline.points.map(([,a])=>a));if(n)for(let[a,c]of this.polyline.points)t.drawImage(n,50-i*10+a*20,50-s*10+c*20,18,18);return e.src=A.canvas.toDataURL("image/png").replace("image/png","image/octet-stream"),e}};let b=A;l(b,"PIECES",[{type:"BigL",rotationAble:!0,points:[[0,0],[1,0],[2,0],[2,1],[2,2]]},{type:"SmallL",rotationAble:!0,points:[[0,0],[1,0],[1,1]]},{type:"Dot",rotationAble:!1,points:[[0,0]]},{type:"SmallSquare",rotationAble:!1,points:[[0,0],[1,0],[0,1],[1,1]]},{type:"BigSquare",rotationAble:!1,points:[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]]},{type:"Line2",rotationAble:!0,points:[[0,0],[1,0]]},{type:"Line3",rotationAble:!0,points:[[0,0],[1,0],[2,0]]},{type:"Line4",rotationAble:!0,points:[[0,0],[1,0],[2,0],[3,0]]},{type:"Line5",rotationAble:!0,points:[[0,0],[1,0],[2,0],[3,0],[4,0]]}]),l(b,"canvas",document.createElement("canvas")),l(b,"context",A.canvas.getContext("2d"));const h={score:0,bankPieces:[],backupPiece:null,grid:new J,changes:{grid:{previous:0,value:1},bank:{previous:0,value:1}}},f={state:h,mutate:{addPieceToBank(){h.bankPieces.push(new b),h.changes.bank.value+=1},addBackupPiece(){h.backupPiece=new b,h.changes.bank.value+=1},hasRendered(o){h.changes[o].previous=h.changes[o].value},bumpScoreBy(o){h.score+=o}},getters:{getPieceById:o=>{switch(o){case"bank-piece-1":return h.bankPieces[0];case"bank-piece-2":return h.bankPieces[1];case"bank-piece-3":return h.bankPieces[2];case"backup-piece":return h.backupPiece}},gridChanged:()=>h.changes.grid.previous!==h.changes.grid.value,bankChanged:()=>h.changes.bank.previous!==h.changes.bank.value}};class Q{constructor(e,t,n){l(this,"image",new Image);l(this,"pieceId","");l(this,"lastX",-1);l(this,"lastY",-1);l(this,"touchStart",e=>{e.stopPropagation(),e.preventDefault();const[t]=e.touches;"pageX"in e||(e.pageX=t.pageX,e.pageY=t.pageY),this.dragStart(e)});l(this,"dragStart",e=>{this.pieceId=e.target.id,this.callBack("drag",{pieceId:this.pieceId}),this.image.src=e.target.src,this.showImage();const{width:t}=this.dragTo.getBoundingClientRect(),n=t/2.1;this.image.style.width=this.image.style.height=n+"px",this.image.style.top=e.pageY-window.scrollY-n/2+"px",this.image.style.left=e.pageX-n/2+"px",this.image.focus()});l(this,"touchMove",e=>{const[t]=e.touches;"pageX"in e||(e.pageX=t.pageX,e.pageY=t.pageY),this.dragMove(e)});l(this,"dragMove",e=>{if(!this.dragging)return;const{width:t}=this.dragTo.getBoundingClientRect(),n=t/2.2;this.image.style.width=this.image.style.height=n+"px",this.image.style.top=e.pageY-window.scrollY-n/2+"px",this.image.style.left=e.pageX-n/2+"px";const{x:i,y:s}=this.getDropPosition(e);this.lastX=i,this.lastY=s,this.callBack("move",{x:i,y:s,pieceId:this.pieceId})});l(this,"dragStop",e=>{this.dragging&&(e.preventDefault(),e.stopPropagation(),this.callBack("drop",{x:this.lastX,y:this.lastY,pieceId:this.pieceId}),this.pieceId=null,this.hideImage(),navigator.vibrate(60))});this.dragFromElements=e,this.dragTo=t,this.callBack=n,this.image.id="draggable-image",this.image.draggable=!1,this.image.style.imageRendering="pixelated",this.image.style.position="fixed",document.body.appendChild(this.image),this.hideImage(),e.forEach((i,s)=>{i.addEventListener("mousedown",this.dragStart),i.addEventListener("touchstart",this.touchStart),document.addEventListener("touchmove",this.touchMove),document.addEventListener("mousemove",this.dragMove),document.addEventListener("touchup",this.dragStop),document.addEventListener("touchend",this.dragStop),document.addEventListener("touchcancel",this.dragStop),document.addEventListener("mouseleave",this.dragStop),document.addEventListener("mouseup",this.dragStop)})}getDropPosition(e){const t=e.pageX,n=e.pageY-window.scrollY,i=10,s=5,{left:a,top:c,width:m,height:d}=this.dragTo.getBoundingClientRect(),p=(t-a-i)/(m-i*2),g=(n-c-s)/(d-s*2);return{x:p,y:g}}showImage(){this.image.style.display="block",document.body.style.overflow="hidden",document.body.style.touchAction="none"}hideImage(){this.image.style.display="none",document.body.style.overflow="auto",document.body.style.touchAction=u.UNSET}get dragging(){return this.pieceId!==null&&this.pieceId!==""}}const j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAkElEQVQ4je2TsQ2EMBAE5yxniBKQaOGroJKviqJoAR0lIGJ/5MdgbBmLkI0u2J07nbSiqgB86Rw3NbIIgKjqH9C35YB53UEyqIsAnyYdnrYYJIM65wG5cAo2r2BKtl8p9Ju0rVzWD/68kovCvxwgV4YQeA5mIbmNKT3ykxcSy8LegZoCwqnFNRpZxPihFgDwA8xLMfsgKlu+AAAAAElFTkSuQmCC",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAnUlEQVQ4je3UsRGAIAwF0ITDHWzcx9YpnMkpaN3Hxh0sYiHh4hlEoqW/EozvcngEiQhi0oMhCADgJdQv9crcpe8RKbbG0NA+h8J6AgGJiDRobPLItOlgwhi6Q3JoWA/MyZc1kFbv9DJbvFxw2086lOemYlqhhDWgiJU6yOXTM/ux+qS/yXfMctE5l6lhCU8NB3Gw8YYVgjjPePF60u7kPTzr9IUubAAAAABJRU5ErkJggg==",z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAkElEQVQ4je2TsRHDIBAEF0aZEjVAEerKXXjUhbtyD/8NOFGMorcwGAYxDn3RB3f78DPnRASAEMKdi1LVDcCJyBtwe/UDHssJcjHGArDO9fBzL0E+BaxzG5B7LOd7ttdgJl+39Wuywf7a86L0Lh+Qb4YUmAebkNbGmn5ykz+k1ARnB0YKCFmLR6Sqm7dhFABwAK+SM/VZKn/WAAAAAElFTkSuQmCC",{state:k,getters:S}=f,{grid:R}=k,{cells:Y}=R,U=document.querySelector("#app .grid"),X=[];Y.forEach(({value:o})=>{const e=document.createElement("div");e.classList.add("box"),o===u.SET&&e.classList.add("active"),X.push(e),U.appendChild(e)});const Z=document.querySelector("#app .score-header .score-value"),D=document.querySelector("#app .footer .bank"),x=[...D.querySelectorAll(".next.piece img")],T=D.querySelector(".backup.piece img");new Q([...x,T],U,(o,e)=>{switch(o){case"drag":{const{pieceId:c}=e;document.getElementById(c).style.opacity=0}break;case"move":const{x:t,y:n,pieceId:i}=e,s=S.getPieceById(i),{points:a}=s.polyline;R.doesItFitAt(t,n,a,u.PREVIEW),k.changes.grid.value+=1;break;case"drop":{const{x:c,y:m,pieceId:d}=e;c>.75&&m>1&&console.log("BANK DROP!");const p=S.getPieceById(d),{points:g}=p.polyline;R.doesItFitAt(c,m,g,u.SET)?f.mutate.bumpScoreBy(g.length*5):document.getElementById(d).style.opacity=1,k.changes.grid.value+=1}break}});v.loadImages([{name:"tile",url:j},{name:"tile-highlight",url:H},{name:"tile-hover",url:z}],o=>console.log("Progress:",o),()=>{f.mutate.addPieceToBank(),f.mutate.addPieceToBank(),f.mutate.addPieceToBank(),f.mutate.addBackupPiece(),V()});function V(){window.requestAnimationFrame(V),S.gridChanged()&&(_(),$()),S.bankChanged()&&ee()}function $(){Z.innerHTML=k.score.toLocaleString()}function _(){console.log("redraw grid"),Y.forEach(({value:o},e)=>{const t=X[e];t.className="box "+o}),f.mutate.hasRendered("grid")}function ee(){console.log("redraw bank"),f.state.bankPieces.forEach((o,e)=>{x[e].src=o.thumbnail.src,x[e].setAttribute("piece-type",o.type)}),T.src=f.state.backupPiece.thumbnail.src,T.setAttribute("piece-type",f.state.backupPiece.type),f.mutate.hasRendered("bank")}console.log("v1");
