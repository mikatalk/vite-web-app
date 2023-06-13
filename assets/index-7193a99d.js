var V=Object.defineProperty;var D=(o,e,t)=>e in o?V(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var h=(o,e,t)=>(D(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const F="modulepreload",W=function(o){return"/"+o},M={},J=function(e,t,s){if(!t||t.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=W(i),i in M)return;M[i]=!0;const n=i.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(!!s)for(let A=a.length-1;A>=0;A--){const y=a[A];if(y.href===i&&(!n||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${r}`))return;const p=document.createElement("link");if(p.rel=n?"stylesheet":F,n||(p.as="script",p.crossOrigin=""),p.href=i,document.head.appendChild(p),n)return new Promise((A,y)=>{p.addEventListener("load",A),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function q(o={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:s,onRegistered:a,onRegisteredSW:i,onRegisterError:n}=o;let r,u;const p=async(y=!0)=>{await u};async function A(){if("serviceWorker"in navigator){const{Workbox:y}=await J(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);r=new y("/sw.js",{scope:"/",type:"classic"}),r.addEventListener("activated",l=>{(l.isUpdate||l.isExternal)&&window.location.reload()}),r.addEventListener("installed",l=>{l.isUpdate||s==null||s()}),r.register({immediate:e}).then(l=>{i?i("/sw.js",l):a==null||a(l)}).catch(l=>{n==null||n(l)})}}return u=A(),p}console.log("Initializing PWA...");"serviceWorker"in navigator&&!/localhost/.test(window.location)&&q();let k;const I=document.querySelector("#main-install-app-button");console.log("Running");window.addEventListener("beforeinstallprompt",o=>{o.preventDefault(),k=o,I.style.display="block",I.addEventListener("click",()=>{console.log("CLICK!"),I.style.display="none",k.prompt(),k.userChoice.then(e=>{e.outcome==="accepted"?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),k=null})})});(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)&&(I.style.display="none");const K=()=>{var o;return!!((o=window.matchMedia)!=null&&o.call(window,"(display-mode: standalone)").matches||window.navigator.standalone)};K()&&(I.style.display="none");window.addEventListener("appinstalled",o=>{console.log("success app install!")});const T=class{constructor(e,t,s=T.UNSET){this.x=e,this.y=t,this.value=s}};let g=T;h(g,"UNSET",""),h(g,"SET","set"),h(g,"PREVIEW","preview");class G{constructor(){h(this,"cells",Array.from({length:100}).map((e,t)=>new g(t%10,Math.floor(t/10))))}getCellValueAtIndex(e){return this.cells[e].value}setCellValueAtIndex(e,t){if(e<0||e>this.cells.length)return console.log("ERROR - index out of range:",e),null;this.cells[e].value=t}getCellValueAtPoint(e,t){return e<0||e>9||t<0||t>9?(console.log("ERROR - index out of range:",index),null):this.getCellValueAtIndex(this.pointToIndex(e,t))}setCellValueAtPoint(e,t,s){this.setCellValueAtIndex(this.pointToIndex(e,t),s)}pointToIndex(e,t){return e+10*t}doesItFitAt(e,t,s,a=g.SET){this.cells.forEach(l=>{l.value===g.PREVIEW&&(l.value=g.UNSET)});const i=1+Math.max(...s.map(([l])=>l))-Math.min(...s.map(([l])=>l)),n=1+Math.max(...s.map(([,l])=>l))-Math.min(...s.map(([,l])=>l)),r=Math.floor(e*10),u=Math.floor(t*10);if(r<-1||r>9||u<-1||u>9)return!1;const p=r-Math.floor(i/2),A=u-Math.floor(n/2);let y=!0;return s.forEach(([l,N])=>{const E=p+l,b=A+N;E>-1&&E<10&&b>-1&&b<10?this.getCellValueAtPoint(E,b)===g.SET&&(y=!1):y=!1}),s.forEach(([l,N])=>{const E=p+l,b=A+N;if(E>-1&&E<10&&b>-1&&b<10){const R=this.getCellValueAtPoint(E,b);this.setCellValueAtPoint(E,b,R===g.SET?g.SET:y?a:g.UNSET)}}),y}}const C=class{static loadImages(e,t,s){let a=0;for(let{name:i,url:n}of e){const r=new Image;r.onload=()=>{a+=1/e.length,t(a),a==1&&s()},r.src=n,C.files[i]=r}}static getImage(e){return C.files[e]}};let w=C;h(w,"files",{});const d=class{constructor(e=d.getRandomType()){h(this,"imageString","");this.type=e,this.polyline=JSON.parse(JSON.stringify(e===d.PIECE_NONE.type?d.PIECE_NONE:d.PIECES.find(t=>t.type===e))),this.makeThumbnail()}static getRandomType(){return d.PIECES[Math.floor(d.PIECES.length*Math.random())].type}rotatePiece(){const e=1+Math.max(...this.polyline.points.map(([n])=>n))-Math.min(...this.polyline.points.map(([n])=>n)),t=1+Math.max(...this.polyline.points.map(([,n])=>n))-Math.min(...this.polyline.points.map(([,n])=>n)),s=Math.max(e,t),{points:a}=this.polyline;let i=[];for(let n=0;n<s;n+=1){i.push([]);for(let r=0;r<s;r+=1){const u=a.find(([p,A])=>r===p&&n===A);i[n].push(u?1:0)}}i=i.map((n,r)=>i.map(u=>u[r]).reverse()),this.polyline.points=[];for(let n=0;n<s;n+=1)for(let r=0;r<s;r+=1)i[n][r]===1&&this.polyline.points.push([r-Math.max(0,e-t),n-Math.max(0,t-e)]);this.makeThumbnail()}copyPiece(e){this.type=e.type,this.polyline=JSON.parse(JSON.stringify(this.type===d.PIECE_NONE.type?d.PIECE_NONE:d.PIECES.find(({type:t})=>t===this.type))),this.makeThumbnail()}shuffle(){this.type=d.getRandomType(),this.polyline=JSON.parse(JSON.stringify(this.type===d.PIECE_NONE.type?d.PIECE_NONE:d.PIECES.find(({type:e})=>e===this.type))),this.makeThumbnail()}disable(){this.polyline=d.PIECE_NONE,this.type=d.PIECE_NONE.type,this.makeThumbnail()}makeThumbnail(){d.canvas.width=100,d.canvas.height=100;const e=d.context;e.clearRect(0,0,100,100);const t=w.getImage("tile"),s=1+Math.max(...this.polyline.points.map(([i])=>i))-Math.min(...this.polyline.points.map(([i])=>i)),a=1+Math.max(...this.polyline.points.map(([,i])=>i))-Math.min(...this.polyline.points.map(([,i])=>i));if(t)for(let[i,n]of this.polyline.points)e.drawImage(t,50-s*10+i*20,50-a*10+n*20,18,18);this.imageString=d.canvas.toDataURL("image/png").replace("image/png","image/octet-stream")}};let m=d;h(m,"PIECE_NONE",{type:"none",points:[]}),h(m,"PIECES",[{type:"BigL",rotationAble:!0,points:[[0,0],[1,0],[2,0],[2,1],[2,2]]},{type:"SmallL",rotationAble:!0,points:[[0,0],[1,0],[1,1]]},{type:"Dot",rotationAble:!1,points:[[0,0]]},{type:"SmallSquare",rotationAble:!1,points:[[0,0],[1,0],[0,1],[1,1]]},{type:"BigSquare",rotationAble:!1,points:[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]]},{type:"Line2",rotationAble:!0,points:[[0,0],[1,0]]},{type:"Line3",rotationAble:!0,points:[[0,0],[1,0],[2,0]]},{type:"Line4",rotationAble:!0,points:[[0,0],[1,0],[2,0],[3,0]]},{type:"Line5",rotationAble:!0,points:[[0,0],[1,0],[2,0],[3,0],[4,0]]}]),h(m,"canvas",document.createElement("canvas")),h(m,"context",d.canvas.getContext("2d"));const c={score:0,bankPieces:[new m(m.PIECE_NONE.type),new m(m.PIECE_NONE.type),new m(m.PIECE_NONE.type)],backupPiece:new m(m.PIECE_NONE.type),grid:new G,changes:{grid:{previous:0,value:1},bank:{previous:0,value:1}}},f={state:c,mutate:{resetBank(){c.bankPieces.forEach(o=>o.shuffle()),c.changes.bank.value+=1},hasRendered(o){c.changes[o].previous=c.changes[o].value},bumpScoreBy(o){c.score+=o},setBackupPiece(o){c.changes.bank.value+=1,c.backupPiece.copyPiece(o)},removeFromBank(o){c.changes.bank.value+=1,o.disable(),c.bankPieces.filter(({type:e})=>e===m.PIECE_NONE.type).length===3&&(f.mutate.resetBank(),c.changes.bank.value+=1)},checkWins(){const o=[],e=[];for(let t=0;t<10;t+=1){let s=0,a=0;for(let i=0;i<10;i+=1)c.grid.getCellValueAtPoint(i,t)===g.SET&&(s+=1),c.grid.getCellValueAtPoint(t,i)===g.SET&&(a+=1);o.push(s),e.push(a)}for(let t=0;t<10;t+=1){if(o[t]==10)for(let s=0;s<10;s+=1)c.grid.setCellValueAtPoint(s,t,g.UNSET);if(e[t]==10)for(let s=0;s<10;s+=1)c.grid.setCellValueAtPoint(t,s,g.UNSET)}}},getters:{getPieceById:o=>{switch(o){case"bank-piece-1":return c.bankPieces[0];case"bank-piece-2":return c.bankPieces[1];case"bank-piece-3":return c.bankPieces[2];case"backup-piece":return c.backupPiece}},canAcceptBackup:()=>c.backupPiece.type===m.PIECE_NONE.type,gridChanged:()=>c.changes.grid.previous!==c.changes.grid.value,bankChanged:()=>c.changes.bank.previous!==c.changes.bank.value}};class Q{constructor(e,t,s){h(this,"image",new Image);h(this,"pieceId","");h(this,"lastX",-1);h(this,"lastY",-1);h(this,"startX",-1);h(this,"startY",-1);h(this,"touchStart",e=>{e.stopPropagation(),e.preventDefault();const[t]=e.touches;"pageX"in e||(e.pageX=t.pageX,e.pageY=t.pageY),this.dragStart(e)});h(this,"dragStart",e=>{if(this.dragging)return;this.pieceId=e.target.id,this.callBack("drag",{pieceId:this.pieceId}),this.image.src=e.target.src,this.showImage();const{width:t}=this.dragTo.getBoundingClientRect(),s=t/2.1;this.image.style.width=this.image.style.height=s+"px",this.image.style.top=e.pageY-window.scrollY-s/2+"px",this.image.style.left=e.pageX-s/2+"px",this.image.focus();const{x:a,y:i}=this.getDropPosition(e);this.startX=a,this.startY=i});h(this,"touchMove",e=>{const[t]=e.touches;"pageX"in e||(e.pageX=t.pageX,e.pageY=t.pageY),this.dragMove(e)});h(this,"dragMove",e=>{if(!this.dragging)return;const{width:t}=this.dragTo.getBoundingClientRect(),s=t/2.2;this.image.style.width=this.image.style.height=s+"px",this.image.style.top=e.pageY-window.scrollY-s/2+"px",this.image.style.left=e.pageX-s/2+"px";const{x:a,y:i}=this.getDropPosition(e);this.lastX=a,this.lastY=i,this.callBack("move",{x:a,y:i,pieceId:this.pieceId})});h(this,"dragStop",e=>{this.dragging&&(e.preventDefault(),e.stopPropagation(),this.lastX===-1&&this.lastY===-1?(console.log("ROTATE"),this.callBack("rotate",{x:this.lastX,y:this.lastY,pieceId:this.pieceId}),this.pieceId=null,this.hideImage()):(this.callBack("drop",{x:this.lastX,y:this.lastY,pieceId:this.pieceId}),this.pieceId=null,this.hideImage(),navigator.vibrate(60)),this.lastX=this.lastY=-1)});this.dragFromElements=e,this.dragTo=t,this.callBack=s,this.image.id="draggable-image",this.image.draggable=!1,this.image.style.imageRendering="pixelated",this.image.style.position="fixed",document.body.appendChild(this.image),this.hideImage(),e.forEach((a,i)=>{a.addEventListener("mousedown",this.dragStart),a.addEventListener("touchstart",this.touchStart),document.addEventListener("touchmove",this.touchMove),document.addEventListener("mousemove",this.dragMove),document.addEventListener("touchup",this.dragStop),document.addEventListener("touchend",this.dragStop),document.addEventListener("touchcancel",this.dragStop),document.addEventListener("mouseleave",this.dragStop),document.addEventListener("mouseup",this.dragStop)})}getDropPosition(e){const t=e.pageX,s=e.pageY-window.scrollY,a=10,i=5,{left:n,top:r,width:u,height:p}=this.dragTo.getBoundingClientRect(),A=(t-n-a)/(u-a*2),y=(s-r-i)/(p-i*2);return{x:A,y}}showImage(){this.image.style.display="block",document.body.style.overflow="hidden",document.body.style.touchAction="none"}hideImage(){this.image.style.display="none",document.body.style.overflow="auto",document.body.style.touchAction=g.UNSET}get dragging(){return this.pieceId!==null&&this.pieceId!==""}}const j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAkElEQVQ4je2TsQ2EMBAE5yxniBKQaOGroJKviqJoAR0lIGJ/5MdgbBmLkI0u2J07nbSiqgB86Rw3NbIIgKjqH9C35YB53UEyqIsAnyYdnrYYJIM65wG5cAo2r2BKtl8p9Ju0rVzWD/68kovCvxwgV4YQeA5mIbmNKT3ykxcSy8LegZoCwqnFNRpZxPihFgDwA8xLMfsgKlu+AAAAAElFTkSuQmCC",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAnUlEQVQ4je3UsRGAIAwF0ITDHWzcx9YpnMkpaN3Hxh0sYiHh4hlEoqW/EozvcngEiQhi0oMhCADgJdQv9crcpe8RKbbG0NA+h8J6AgGJiDRobPLItOlgwhi6Q3JoWA/MyZc1kFbv9DJbvFxw2086lOemYlqhhDWgiJU6yOXTM/ux+qS/yXfMctE5l6lhCU8NB3Gw8YYVgjjPePF60u7kPTzr9IUubAAAAABJRU5ErkJggg==",z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAkElEQVQ4je2TsRHDIBAEF0aZEjVAEerKXXjUhbtyD/8NOFGMorcwGAYxDn3RB3f78DPnRASAEMKdi1LVDcCJyBtwe/UDHssJcjHGArDO9fBzL0E+BaxzG5B7LOd7ttdgJl+39Wuywf7a86L0Lh+Qb4YUmAebkNbGmn5ykz+k1ARnB0YKCFmLR6Sqm7dhFABwAK+SM/VZKn/WAAAAAElFTkSuQmCC",{state:P,getters:x}=f,{grid:B}=P,{cells:L}=B,O=document.querySelector("#app .grid"),Y=[];L.forEach(({value:o})=>{const e=document.createElement("div");e.classList.add("box"),o===g.SET&&e.classList.add("active"),Y.push(e),O.appendChild(e)});const Z=document.querySelector("#app .score-header .score-value"),U=document.querySelector("#app .footer .bank"),v=[...U.querySelectorAll(".next.piece img")],S=U.querySelector(".backup.piece img");new Q([...v,S],O,(o,e)=>{const{x:t,y:s,pieceId:a}=e,i=document.getElementById(a),n=x.getPieceById(a);switch(o){case"rotate":console.log("ROTATE",i),n.rotatePiece(),i.src=n.imageString,i.style.opacity=1;break;case"drag":i.style.opacity=0;break;case"move":const{points:r}=n.polyline;B.doesItFitAt(t,s,r,g.PREVIEW),P.changes.grid.value+=1;break;case"drop":{if(t>.75&&s>1&&f.getters.canAcceptBackup()){console.log("BANK DROP!"),f.mutate.setBackupPiece(n),f.mutate.removeFromBank(n);return}const{points:u}=n.polyline;B.doesItFitAt(t,s,u,g.SET)?(f.mutate.bumpScoreBy(u.length),f.mutate.removeFromBank(n),f.mutate.checkWins(),i.style.opacity=0):i.style.opacity=1,P.changes.grid.value+=1}break}});w.loadImages([{name:"tile",url:j},{name:"tile-highlight",url:H},{name:"tile-hover",url:z}],o=>console.log("Progress:",o),()=>{f.mutate.resetBank(),X()});function X(){window.requestAnimationFrame(X),x.gridChanged()&&(_(),$()),x.bankChanged()&&ee()}function $(){Z.innerHTML=P.score.toLocaleString()}function _(){console.log("redraw grid"),L.forEach(({value:o},e)=>{const t=Y[e];t.className="box "+o}),f.mutate.hasRendered("grid")}function ee(){console.log("redraw bank"),f.state.bankPieces.forEach((o,e)=>{v[e].src=o.imageString,v[e].setAttribute("piece-type",o.type),v[e].style.opacity=1}),S.src=f.state.backupPiece.imageString,S.style.opacity=1,S.setAttribute("piece-type",f.state.backupPiece.type),f.mutate.hasRendered("bank")}console.log("v1");
