var V=Object.defineProperty;var D=(n,e,t)=>e in n?V(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var h=(n,e,t)=>(D(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const F="modulepreload",W=function(n){return"/"+n},M={},J=function(e,t,s){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=W(i),i in M)return;M[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!s)for(let A=o.length-1;A>=0;A--){const y=o[A];if(y.href===i&&(!a||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const p=document.createElement("link");if(p.rel=a?"stylesheet":F,a||(p.as="script",p.crossOrigin=""),p.href=i,document.head.appendChild(p),a)return new Promise((A,y)=>{p.addEventListener("load",A),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function q(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:s,onRegistered:o,onRegisteredSW:i,onRegisterError:a}=n;let l,u;const p=async(y=!0)=>{await u};async function A(){if("serviceWorker"in navigator){const{Workbox:y}=await J(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);l=new y("/sw.js",{scope:"/",type:"classic"}),l.addEventListener("activated",r=>{(r.isUpdate||r.isExternal)&&window.location.reload()}),l.addEventListener("installed",r=>{r.isUpdate||s==null||s()}),l.register({immediate:e}).then(r=>{i?i("/sw.js",r):o==null||o(r)}).catch(r=>{a==null||a(r)})}}return u=A(),p}console.log("Initializing PWA...");"serviceWorker"in navigator&&!/localhost/.test(window.location)&&q();let k;const I=document.querySelector("#main-install-app-button");console.log("Running");window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),k=n,I.style.display="block",I.addEventListener("click",()=>{console.log("CLICK!"),I.style.display="none",k.prompt(),k.userChoice.then(e=>{e.outcome==="accepted"?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),k=null})})});(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)&&(I.style.display="none");const K=()=>{var n;return!!((n=window.matchMedia)!=null&&n.call(window,"(display-mode: standalone)").matches||window.navigator.standalone)};K()&&(I.style.display="none");window.addEventListener("appinstalled",n=>{console.log("success app install!")});const T=class{constructor(e,t,s=T.UNSET){this.x=e,this.y=t,this.value=s}};let g=T;h(g,"UNSET",""),h(g,"SET","set"),h(g,"PREVIEW","preview");class G{constructor(){h(this,"cells",Array.from({length:100}).map((e,t)=>new g(t%10,Math.floor(t/10))))}getCellValueAtIndex(e){return this.cells[e].value}setCellValueAtIndex(e,t){if(e<0||e>this.cells.length)return console.log("ERROR - index out of range:",e),null;this.cells[e].value=t}getCellValueAtPoint(e,t){return e<0||e>9||t<0||t>9?(console.log("ERROR - index out of range:",index),null):this.getCellValueAtIndex(this.pointToIndex(e,t))}setCellValueAtPoint(e,t,s){this.setCellValueAtIndex(this.pointToIndex(e,t),s)}pointToIndex(e,t){return e+10*t}doesItFitAt(e,t,s,o=g.SET){this.cells.forEach(r=>{r.value===g.PREVIEW&&(r.value=g.UNSET)});const i=1+Math.max(...s.map(([r])=>r))-Math.min(...s.map(([r])=>r)),a=1+Math.max(...s.map(([,r])=>r))-Math.min(...s.map(([,r])=>r)),l=Math.floor(e*10),u=Math.floor(t*10);if(l<-1||l>9||u<-1||u>9)return!1;const p=l-Math.floor(i/2),A=u-Math.floor(a/2);let y=!0;return s.forEach(([r,N])=>{const E=p+r,b=A+N;E>-1&&E<10&&b>-1&&b<10?this.getCellValueAtPoint(E,b)===g.SET&&(y=!1):y=!1}),s.forEach(([r,N])=>{const E=p+r,b=A+N;if(E>-1&&E<10&&b>-1&&b<10){const R=this.getCellValueAtPoint(E,b);this.setCellValueAtPoint(E,b,R===g.SET?g.SET:y?o:g.UNSET)}}),y}}const C=class{static loadImages(e,t,s){let o=0;for(let{name:i,url:a}of e){const l=new Image;l.onload=()=>{o+=1/e.length,t(o),o==1&&s()},l.src=a,C.files[i]=l}}static getImage(e){return C.files[e]}};let w=C;h(w,"files",{});const d=class{constructor(e=d.getRandomType()){h(this,"thumbnail",null);h(this,"imageString","");this.type=e,this.polyline=JSON.parse(JSON.stringify(e===d.PIECE_NONE.type?d.PIECE_NONE:d.PIECES.find(t=>t.type===e))),this.thumbnail=this.makeThumbnail()}static getRandomType(){return d.PIECES[Math.floor(d.PIECES.length*Math.random())].type}rotatePiece(){const e=1+Math.max(...this.polyline.points.map(([a])=>a))-Math.min(...this.polyline.points.map(([a])=>a)),t=1+Math.max(...this.polyline.points.map(([,a])=>a))-Math.min(...this.polyline.points.map(([,a])=>a)),s=Math.max(e,t),{points:o}=this.polyline;let i=[];for(let a=0;a<s;a+=1){i.push([]);for(let l=0;l<s;l+=1){const u=o.find(([p,A])=>l===p&&a===A);i[a].push(u?1:0)}}console.log("Piece rotation 1:",i),i=i.map((a,l)=>i.map(u=>u[l]).reverse()),console.log("Piece rotation 2:",i),this.polyline.points=[];for(let a=0;a<s;a+=1)for(let l=0;l<s;l+=1)i[a][l]===1&&this.polyline.points.push([l-Math.max(0,e-t),a-Math.max(0,t-e)]);this.makeThumbnail()}copyPiece(e){console.log("COPY PIECE",e),this.type=e.type,this.polyline=JSON.parse(JSON.stringify(this.type===d.PIECE_NONE.type?d.PIECE_NONE:d.PIECES.find(({type:t})=>t===this.type))),this.thumbnail=this.makeThumbnail()}shuffle(){this.type=d.getRandomType(),this.polyline=JSON.parse(JSON.stringify(this.type===d.PIECE_NONE.type?d.PIECE_NONE:d.PIECES.find(({type:e})=>e===this.type))),this.thumbnail=this.makeThumbnail()}disable(){this.polyline=d.PIECE_NONE,this.type=d.PIECE_NONE.type,this.thumbnail=this.makeThumbnail()}makeThumbnail(){const e=new Image;e.width=d.canvas.width=100,e.height=d.canvas.height=100;const t=d.context;t.clearRect(0,0,100,100);const s=w.getImage("tile"),o=1+Math.max(...this.polyline.points.map(([a])=>a))-Math.min(...this.polyline.points.map(([a])=>a)),i=1+Math.max(...this.polyline.points.map(([,a])=>a))-Math.min(...this.polyline.points.map(([,a])=>a));if(s)for(let[a,l]of this.polyline.points)t.drawImage(s,50-o*10+a*20,50-i*10+l*20,18,18);return this.imageString=d.canvas.toDataURL("image/png").replace("image/png","image/octet-stream"),e.src=this.imageString,e}};let m=d;h(m,"PIECE_NONE",{type:"none",points:[]}),h(m,"PIECES",[{type:"BigL",rotationAble:!0,points:[[0,0],[1,0],[2,0],[2,1],[2,2]]},{type:"SmallL",rotationAble:!0,points:[[0,0],[1,0],[1,1]]},{type:"Dot",rotationAble:!1,points:[[0,0]]},{type:"SmallSquare",rotationAble:!1,points:[[0,0],[1,0],[0,1],[1,1]]},{type:"BigSquare",rotationAble:!1,points:[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]]},{type:"Line2",rotationAble:!0,points:[[0,0],[1,0]]},{type:"Line3",rotationAble:!0,points:[[0,0],[1,0],[2,0]]},{type:"Line4",rotationAble:!0,points:[[0,0],[1,0],[2,0],[3,0]]},{type:"Line5",rotationAble:!0,points:[[0,0],[1,0],[2,0],[3,0],[4,0]]}]),h(m,"canvas",document.createElement("canvas")),h(m,"context",d.canvas.getContext("2d"));const c={score:0,bankPieces:[new m(m.PIECE_NONE.type),new m(m.PIECE_NONE.type),new m(m.PIECE_NONE.type)],backupPiece:new m(m.PIECE_NONE.type),grid:new G,changes:{grid:{previous:0,value:1},bank:{previous:0,value:1}}},f={state:c,mutate:{resetBank(){c.bankPieces.forEach(n=>n.shuffle()),c.changes.bank.value+=1},hasRendered(n){c.changes[n].previous=c.changes[n].value},bumpScoreBy(n){c.score+=n},setBackupPiece(n){c.changes.bank.value+=1,c.backupPiece.copyPiece(n)},removeFromBank(n){c.changes.bank.value+=1,n.disable(),c.bankPieces.filter(({type:e})=>e===m.PIECE_NONE.type).length===3&&(f.mutate.resetBank(),c.changes.bank.value+=1)},checkWins(){const n=[],e=[];for(let t=0;t<10;t+=1){let s=0,o=0;for(let i=0;i<10;i+=1)c.grid.getCellValueAtPoint(i,t)===g.SET&&(s+=1),c.grid.getCellValueAtPoint(t,i)===g.SET&&(o+=1);n.push(s),e.push(o)}for(let t=0;t<10;t+=1){if(n[t]==10)for(let s=0;s<10;s+=1)c.grid.setCellValueAtPoint(s,t,g.UNSET);if(e[t]==10)for(let s=0;s<10;s+=1)c.grid.setCellValueAtPoint(t,s,g.UNSET)}}},getters:{getPieceById:n=>{switch(n){case"bank-piece-1":return c.bankPieces[0];case"bank-piece-2":return c.bankPieces[1];case"bank-piece-3":return c.bankPieces[2];case"backup-piece":return c.backupPiece}},canAcceptBackup:()=>c.backupPiece.type===m.PIECE_NONE.type,gridChanged:()=>c.changes.grid.previous!==c.changes.grid.value,bankChanged:()=>c.changes.bank.previous!==c.changes.bank.value}};class Q{constructor(e,t,s){h(this,"image",new Image);h(this,"pieceId","");h(this,"lastX",-1);h(this,"lastY",-1);h(this,"startX",-1);h(this,"startY",-1);h(this,"touchStart",e=>{e.stopPropagation(),e.preventDefault();const[t]=e.touches;"pageX"in e||(e.pageX=t.pageX,e.pageY=t.pageY),this.dragStart(e)});h(this,"dragStart",e=>{if(this.dragging)return;this.pieceId=e.target.id,this.callBack("drag",{pieceId:this.pieceId}),this.image.src=e.target.src,this.showImage();const{width:t}=this.dragTo.getBoundingClientRect(),s=t/2.1;this.image.style.width=this.image.style.height=s+"px",this.image.style.top=e.pageY-window.scrollY-s/2+"px",this.image.style.left=e.pageX-s/2+"px",this.image.focus();const{x:o,y:i}=this.getDropPosition(e);this.startX=o,this.startY=i});h(this,"touchMove",e=>{const[t]=e.touches;"pageX"in e||(e.pageX=t.pageX,e.pageY=t.pageY),this.dragMove(e)});h(this,"dragMove",e=>{if(!this.dragging)return;const{width:t}=this.dragTo.getBoundingClientRect(),s=t/2.2;this.image.style.width=this.image.style.height=s+"px",this.image.style.top=e.pageY-window.scrollY-s/2+"px",this.image.style.left=e.pageX-s/2+"px";const{x:o,y:i}=this.getDropPosition(e);this.lastX=o,this.lastY=i,this.callBack("move",{x:o,y:i,pieceId:this.pieceId})});h(this,"dragStop",e=>{this.dragging&&(e.preventDefault(),e.stopPropagation(),this.lastX===-1&&this.lastY===-1?(console.log("ROTATE"),this.callBack("rotate",{x:this.lastX,y:this.lastY,pieceId:this.pieceId}),this.pieceId=null,this.hideImage()):(this.callBack("drop",{x:this.lastX,y:this.lastY,pieceId:this.pieceId}),this.pieceId=null,this.hideImage(),navigator.vibrate(60)),this.lastX=this.lastY=-1)});this.dragFromElements=e,this.dragTo=t,this.callBack=s,this.image.id="draggable-image",this.image.draggable=!1,this.image.style.imageRendering="pixelated",this.image.style.position="fixed",document.body.appendChild(this.image),this.hideImage(),e.forEach((o,i)=>{o.addEventListener("mousedown",this.dragStart),o.addEventListener("touchstart",this.touchStart),document.addEventListener("touchmove",this.touchMove),document.addEventListener("mousemove",this.dragMove),document.addEventListener("touchup",this.dragStop),document.addEventListener("touchend",this.dragStop),document.addEventListener("touchcancel",this.dragStop),document.addEventListener("mouseleave",this.dragStop),document.addEventListener("mouseup",this.dragStop)})}getDropPosition(e){const t=e.pageX,s=e.pageY-window.scrollY,o=10,i=5,{left:a,top:l,width:u,height:p}=this.dragTo.getBoundingClientRect(),A=(t-a-o)/(u-o*2),y=(s-l-i)/(p-i*2);return{x:A,y}}showImage(){this.image.style.display="block",document.body.style.overflow="hidden",document.body.style.touchAction="none"}hideImage(){this.image.style.display="none",document.body.style.overflow="auto",document.body.style.touchAction=g.UNSET}get dragging(){return this.pieceId!==null&&this.pieceId!==""}}const j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAkElEQVQ4je2TsQ2EMBAE5yxniBKQaOGroJKviqJoAR0lIGJ/5MdgbBmLkI0u2J07nbSiqgB86Rw3NbIIgKjqH9C35YB53UEyqIsAnyYdnrYYJIM65wG5cAo2r2BKtl8p9Ju0rVzWD/68kovCvxwgV4YQeA5mIbmNKT3ykxcSy8LegZoCwqnFNRpZxPihFgDwA8xLMfsgKlu+AAAAAElFTkSuQmCC",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAnUlEQVQ4je3UsRGAIAwF0ITDHWzcx9YpnMkpaN3Hxh0sYiHh4hlEoqW/EozvcngEiQhi0oMhCADgJdQv9crcpe8RKbbG0NA+h8J6AgGJiDRobPLItOlgwhi6Q3JoWA/MyZc1kFbv9DJbvFxw2086lOemYlqhhDWgiJU6yOXTM/ux+qS/yXfMctE5l6lhCU8NB3Gw8YYVgjjPePF60u7kPTzr9IUubAAAAABJRU5ErkJggg==",z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAkElEQVQ4je2TsRHDIBAEF0aZEjVAEerKXXjUhbtyD/8NOFGMorcwGAYxDn3RB3f78DPnRASAEMKdi1LVDcCJyBtwe/UDHssJcjHGArDO9fBzL0E+BaxzG5B7LOd7ttdgJl+39Wuywf7a86L0Lh+Qb4YUmAebkNbGmn5ykz+k1ARnB0YKCFmLR6Sqm7dhFABwAK+SM/VZKn/WAAAAAElFTkSuQmCC",{state:S,getters:x}=f,{grid:B}=S,{cells:O}=B,L=document.querySelector("#app .grid"),Y=[];O.forEach(({value:n})=>{const e=document.createElement("div");e.classList.add("box"),n===g.SET&&e.classList.add("active"),Y.push(e),L.appendChild(e)});const Z=document.querySelector("#app .score-header .score-value"),U=document.querySelector("#app .footer .bank"),v=[...U.querySelectorAll(".next.piece img")],P=U.querySelector(".backup.piece img");new Q([...v,P],L,(n,e)=>{const{x:t,y:s,pieceId:o}=e,i=document.getElementById(o),a=x.getPieceById(o);switch(n){case"rotate":console.log("ROTATE",i),a.rotatePiece(),i.src=a.imageString,i.style.opacity=1;break;case"drag":i.style.opacity=0;break;case"move":const{points:l}=a.polyline;B.doesItFitAt(t,s,l,g.PREVIEW),S.changes.grid.value+=1;break;case"drop":{if(t>.75&&s>1&&f.getters.canAcceptBackup()){console.log("BANK DROP!"),f.mutate.setBackupPiece(a),f.mutate.removeFromBank(a);return}const{points:u}=a.polyline;B.doesItFitAt(t,s,u,g.SET)?(f.mutate.bumpScoreBy(u.length),f.mutate.removeFromBank(a),f.mutate.checkWins(),i.style.opacity=0):i.style.opacity=1,S.changes.grid.value+=1}break}});w.loadImages([{name:"tile",url:j},{name:"tile-highlight",url:H},{name:"tile-hover",url:z}],n=>console.log("Progress:",n),()=>{f.mutate.resetBank(),X()});function X(){window.requestAnimationFrame(X),x.gridChanged()&&(_(),$()),x.bankChanged()&&ee()}function $(){Z.innerHTML=S.score.toLocaleString()}function _(){console.log("redraw grid"),O.forEach(({value:n},e)=>{const t=Y[e];t.className="box "+n}),f.mutate.hasRendered("grid")}function ee(){console.log("redraw bank"),f.state.bankPieces.forEach((n,e)=>{v[e].src=n.imageString,v[e].setAttribute("piece-type",n.type),v[e].style.opacity=1}),P.src=f.state.backupPiece.imageString,P.style.opacity=1,P.setAttribute("piece-type",f.state.backupPiece.type),f.mutate.hasRendered("bank")}console.log("v1");
