var zt=t=>{throw TypeError(t)};var je=(t,e,n)=>e.has(t)||zt("Cannot "+n);var A=(t,e,n)=>(je(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?zt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{o as Tt}from"./Cih6xMaF.js";import{w as Nt}from"./rxEzY6r1.js";import{al as C,g as N,T as O,aL as $e}from"./C4PvZKYF.js";new URL("sveltekit-internal://");function De(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Fe(t){return t.split("%25").map(decodeURI).join("%25")}function Ve(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Rt({href:t}){return t.split("#")[0]}function Be(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}const Ge="/__data.json",Me=".html__data.json";function qe(t){return t.endsWith(".html")?t.replace(/\.html$/,Me):t.replace(/\/$/,"")+Ge}function He(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Ke(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const We=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&K.delete(Ot(t)),We(t,e));const K=new Map;function Ye(t,e){const n=Ot(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&K.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Ke(a)),Promise.resolve(new Response(a,s))}return window.fetch(t,e)}function ze(t,e,n){if(K.size>0){const r=Ot(t,n),a=K.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);K.delete(r)}}return window.fetch(e,n)}function Ot(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${He(...a)}"]`}return r}const Je=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Xe(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Qe(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return It(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return It(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Je.exec(c),[,u,y,h,m]=d;return e.push({name:h,matcher:m,optional:!!u,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return It(c)}).join("")}).join("")}/?$`),params:e}}function Ze(t){return!/^\([^)]+\)$/.test(t)}function Qe(t){return t.slice(1).split("/").filter(Ze)}function tn(t,e,n){const r={},a=t.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let f=a[o-i];if(c.chained&&c.rest&&i&&(f=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const d=e[o+1],u=a[o+1];d&&!d.rest&&d.optional&&u&&c.chained&&(i=0),!d&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function It(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function en({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([o,[c,f,d]])=>{const{pattern:u,params:y}=Xe(o),h={id:o,exec:m=>{const l=u.exec(m);if(l)return tn(l,y,r)},errors:[1,...d||[]].map(m=>t[m]),layouts:[0,...f||[]].map(i),leaf:s(c)};return h.errors.length=h.layouts.length=Math.max(h.errors.length,h.layouts.length),h});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[a.has(o),t[o]]}}function fe(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Jt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}var oe;const x=((oe=globalThis.__sveltekit_8b1fzp)==null?void 0:oe.base)??"";var se;const nn=((se=globalThis.__sveltekit_8b1fzp)==null?void 0:se.assets)??x,rn="1741858047498",ue="sveltekit:snapshot",he="sveltekit:scroll",de="sveltekit:states",an="sveltekit:pageurl",B="sveltekit:history",z="sveltekit:navigation",ft={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},lt=location.origin;function pe(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function jt(){return{x:pageXOffset,y:pageYOffset}}function V(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Xt={...ft,"":ft.hover};function ge(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function me(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=ge(t)}}function xt(t,e,n){let r;try{if(r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!r||!!a||vt(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===lt&&t.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function ut(t){let e=null,n=null,r=null,a=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)r===null&&(r=V(o,"preload-code")),a===null&&(a=V(o,"preload-data")),e===null&&(e=V(o,"keepfocus")),n===null&&(n=V(o,"noscroll")),s===null&&(s=V(o,"reload")),i===null&&(i=V(o,"replacestate")),o=ge(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Xt[r??"off"],preload_data:Xt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Zt(t){const e=Nt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const ye={v:()=>{}};function on(){const{set:t,subscribe:e}=Nt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${nn}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==rn;return i&&(t(!0),ye.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function vt(t,e,n){return t.origin!==lt||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Qt(t){const e=cn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const sn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function cn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=sn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const ln=-1,fn=-2,un=-3,hn=-4,dn=-5,pn=-6;function gn(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(s,i=!1){if(s===ln)return;if(s===un)return NaN;if(s===hn)return 1/0;if(s===dn)return-1/0;if(s===pn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=e==null?void 0:e[c];if(f)return r[s]=f(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let h=1;h<o.length;h+=1)d.add(a(o[h]));break;case"Map":const u=new Map;r[s]=u;for(let h=1;h<o.length;h+=2)u.set(a(o[h]),a(o[h+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let h=1;h<o.length;h+=2)y[o[h]]=a(o[h+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const h=globalThis[c],m=o[1],l=Qt(m),g=new h(l);r[s]=g;break}case"ArrayBuffer":{const h=o[1],m=Qt(h);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let f=0;f<o.length;f+=1){const d=o[f];d!==fn&&(c[f]=a(d))}}else{const c={};r[s]=c;for(const f in o){const d=o[f];c[f]=a(d)}}return r[s]}return a(0)}const we=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...we];const mn=new Set([...we]);[...mn];function yn(t){return t.filter(e=>e!=null)}class bt{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class $t{constructor(e,n){this.status=e,this.location=n}}class Dt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const wn="x-sveltekit-invalidated",_n="x-sveltekit-trailing-slash";function ht(t){return t instanceof bt||t instanceof Dt?t.status:500}function vn(t){return t instanceof Dt?t.text:"Internal Error"}let U,J,Ut;const bn=Tt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Tt.toString());var Q,tt,et,nt,rt,at,ot,st,ie,it,ce,ct,le;bn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},J={current:null},Ut={current:!1}):(U=new(ie=class{constructor(){P(this,Q,C({}));P(this,tt,C(null));P(this,et,C(null));P(this,nt,C({}));P(this,rt,C({id:null}));P(this,at,C({}));P(this,ot,C(-1));P(this,st,C(new URL("https://example.com")))}get data(){return N(A(this,Q))}set data(e){O(A(this,Q),e)}get form(){return N(A(this,tt))}set form(e){O(A(this,tt),e)}get error(){return N(A(this,et))}set error(e){O(A(this,et),e)}get params(){return N(A(this,nt))}set params(e){O(A(this,nt),e)}get route(){return N(A(this,rt))}set route(e){O(A(this,rt),e)}get state(){return N(A(this,at))}set state(e){O(A(this,at),e)}get status(){return N(A(this,ot))}set status(e){O(A(this,ot),e)}get url(){return N(A(this,st))}set url(e){O(A(this,st),e)}},Q=new WeakMap,tt=new WeakMap,et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,ie),J=new(ce=class{constructor(){P(this,it,C(null))}get current(){return N(A(this,it))}set current(e){O(A(this,it),e)}},it=new WeakMap,ce),Ut=new(le=class{constructor(){P(this,ct,C(!1))}get current(){return N(A(this,ct))}set current(e){O(A(this,ct),e)}},ct=new WeakMap,le),ye.v=()=>Ut.current=!0);function An(t){Object.assign(U,t)}const Sn=new Set(["icon","shortcut icon","apple-touch-icon"]),F=fe(he)??{},X=fe(ue)??{},$={url:Zt({}),page:Zt({}),navigating:Nt(null),updated:on()};function Ft(t){F[t]=jt()}function kn(t,e){let n=t+1;for(;F[n];)delete F[n],n+=1;for(n=e+1;X[n];)delete X[n],n+=1}function M(t){return location.href=t.href,new Promise(()=>{})}async function _e(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function te(){}let At,Pt,dt,j,Ct,S;const pt=[],gt=[];let L=null;const ve=new Set,be=new Set,W=new Set;let _={branch:[],error:null,url:null},Vt=!1,mt=!1,ee=!0,Z=!1,q=!1,Ae=!1,Bt=!1,Se,I,T,yt;const Y=new Set;async function Mn(t,e,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),S=t,await((s=(a=t.hooks).init)==null?void 0:s.call(a)),At=en(t),j=document.documentElement,Ct=e,Pt=t.nodes[0],dt=t.nodes[1],Pt(),dt(),I=(i=history.state)==null?void 0:i[B],T=(o=history.state)==null?void 0:o[z],I||(I=T=Date.now(),history.replaceState({...history.state,[B]:I,[z]:T},""));const r=F[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Nn(Ct,n):xn(S.hash?Oe(new URL(location.href)):location.href,{replaceState:!0}),Cn()}function En(){pt.length=0,Bt=!1}function ke(t){gt.some(e=>e==null?void 0:e.snapshot)&&(X[t]=gt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Ee(t){var e;(e=X[t])==null||e.forEach((n,r)=>{var a,s;(s=(a=gt[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function ne(){Ft(I),Jt(he,F),ke(T),Jt(ue,X)}async function Gt(t,e,n,r){return H({type:"goto",url:pe(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Bt=!0),e.invalidate&&e.invalidate.forEach(Pn)}})}async function Rn(t){if(t.id!==(L==null?void 0:L.id)){const e={};Y.add(e),L={id:t.id,token:e,promise:Ie({...t,preload:e}).then(n=>(Y.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Lt(t){const e=Ue(t);if(!e)return;const n=At.find(r=>r.exec(Le(e)));n&&await Promise.all([...n.layouts,n.leaf].map(r=>r==null?void 0:r[1]()))}function Re(t,e,n){var s;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,t.props.page),Se=new S.root({target:e,props:{...t.props,stores:$,components:gt},hydrate:n,sync:!1}),Ee(T);const a={from:null,to:{params:_.params,route:{id:((s=_.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};W.forEach(i=>i(a)),mt=!0}function wt({url:t,params:e,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(t.pathname===x||t.pathname===x+"/"))o="always";else for(const h of n)(h==null?void 0:h.slash)!==void 0&&(o=h.slash);t.pathname=De(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:s},props:{constructors:yn(n).map(h=>h.node.component),page:Kt(U)}};i!==void 0&&(c.props.form=i);let f={},d=!U,u=0;for(let h=0;h<Math.max(n.length,_.branch.length);h+=1){const m=n[h],l=_.branch[h];(m==null?void 0:m.data)!==(l==null?void 0:l.data)&&(d=!0),m&&(f={...f,...m.data},d&&(c.props[`data_${u}`]=f),u+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==U.form||d)&&(c.props.page={error:a,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?f:U.data}),c}async function Mt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:s}){var d,u,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((d=f.universal)!=null&&d.load){let h=function(...l){for(const g of l){const{href:w}=new URL(g,n);c.dependencies.add(w)}};const m={route:new Proxy(a,{get:(l,g)=>(o&&(c.route=!0),l[g])}),params:new Proxy(r,{get:(l,g)=>(o&&c.params.add(g),l[g])}),data:(s==null?void 0:s.data)??null,url:Be(n,()=>{o&&(c.url=!0)},l=>{o&&c.search_params.add(l)},S.hash),async fetch(l,g){let w;l instanceof Request?(w=l.url,g={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...g}):w=l;const R=new URL(w,n);return o&&h(R.href),R.origin===n.origin&&(w=R.href.slice(n.origin.length)),mt?ze(w,R.href,g):Ye(w,g)},setHeaders:()=>{},depends:h,parent(){return o&&(c.parent=!0),e()},untrack(l){o=!1;try{return l()}finally{o=!0}}};i=await f.universal.load.call(null,m)??null}return{node:f,loader:t,server:s,universal:(u=f.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function re(t,e,n,r,a,s){if(Bt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==_.params[i])return!0;for(const i of a.dependencies)if(pt.some(o=>o(new URL(i))))return!0;return!1}function qt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function In(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),s=e.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function ae({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Kt(U),constructors:[]}}}async function Ie({id:t,invalidating:e,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===t)return Y.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,f=[...o,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const u=_.url?t!==_t(_.url):!1,y=_.route?a.id!==_.route.id:!1,h=In(_.url,n);let m=!1;const l=f.map((p,v)=>{var D;const k=_.branch[v],E=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||re(m,y,u,h,(D=k.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(l.some(Boolean)){try{d=await Pe(n,l)}catch(p){const v=await G(p,{url:n,params:r,route:{id:t}});return Y.has(s)?ae({error:v,url:n,params:r,route:a}):St({status:ht(p),error:v,url:n,route:a})}if(d.type==="redirect")return d}const g=d==null?void 0:d.nodes;let w=!1;const R=f.map(async(p,v)=>{var kt;if(!p)return;const k=_.branch[v],E=g==null?void 0:g[v];if((!E||E.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!re(w,y,u,h,(kt=k.universal)==null?void 0:kt.uses,r))return k;if(w=!0,(E==null?void 0:E.type)==="error")throw E;return Mt({loader:p[1],url:n,params:r,route:a,parent:async()=>{var Yt;const Wt={};for(let Et=0;Et<v;Et+=1)Object.assign(Wt,(Yt=await R[Et])==null?void 0:Yt.data);return Wt},server_data_node:qt(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of R)p.catch(()=>{});const b=[];for(let p=0;p<f.length;p+=1)if(f[p])try{b.push(await R[p])}catch(v){if(v instanceof $t)return{type:"redirect",location:v.location};if(Y.has(s))return ae({error:await G(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let k=ht(v),E;if(g!=null&&g.includes(v))k=v.status??k,E=v.error;else if(v instanceof bt)E=v.body;else{if(await $.updated.check())return await _e(),await M(n);E=await G(v,{params:r,url:n,route:{id:a.id}})}const D=await Un(p,b,i);return D?wt({url:n,params:r,branch:b.slice(0,D.idx).concat(D.node),status:k,error:E,route:a}):await xe(n,{id:a.id},E,k)}else b.push(void 0);return wt({url:n,params:r,branch:b,status:200,error:null,route:a,form:e?void 0:null})}async function Un(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function St({status:t,error:e,url:n,route:r}){const a={};let s=null;if(S.server_loads[0]===0)try{const o=await Pe(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==lt||n.pathname!==location.pathname||Vt)&&await M(n)}try{const o=await Mt({loader:Pt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:qt(s)}),c={node:await dt(),loader:dt,universal:null,server:null,data:null};return wt({url:n,params:a,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof $t)return Gt(new URL(o.location,location.href),{},0);throw o}}function Ue(t){let e;try{if(e=S.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);S.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}function Ht(t,e){if(!t||vt(t,x,S.hash))return;const n=Ue(t);if(!n)return;const r=Le(n);for(const a of At){const s=a.exec(r);if(s)return{id:_t(t),invalidating:e,route:a,params:Ve(s),url:t}}}function Le(t){return Fe(S.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function _t(t){return(S.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Te({url:t,type:e,intent:n,delta:r}){let a=!1;const s=Ne(_,n,t,e);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return Z||ve.forEach(o=>o(i)),a?null:s}async function H({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=te,block:d=te}){const u=Ht(e,!1),y=Te({url:e,type:t,delta:n==null?void 0:n.delta,intent:u});if(!y){d();return}const h=I,m=T;f(),Z=!0,mt&&$.navigating.set(J.current=y.navigation),yt=c;let l=u&&await Ie(u);if(!l){if(vt(e,x,S.hash))return await M(e);l=await xe(e,{id:null},await G(new Dt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(u==null?void 0:u.url)||e,yt!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(o>=20)l=await St({status:500,error:await G(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Gt(new URL(l.location,e).href,{},o+1,c),!1;else l.props.page.status>=400&&await $.updated.check()&&(await _e(),await M(e));if(En(),Ft(h),ke(m),l.props.page.url.pathname!==e.pathname&&(e.pathname=l.props.page.url.pathname),i=n?n.state:i,!n){const b=s?0:1,p={[B]:I+=b,[z]:T+=b,[de]:i};(s?history.replaceState:history.pushState).call(history,p,"",e),s||kn(I,T)}if(L=null,l.props.page.state=i,mt){_=l.state,l.props.page&&(l.props.page.url=e);const b=(await Promise.all(Array.from(be,p=>p(y.navigation)))).filter(p=>typeof p=="function");if(b.length>0){let p=function(){b.forEach(v=>{W.delete(v)})};b.push(p),b.forEach(v=>{W.add(v)})}Se.$set(l.props),An(l.props.page),Ae=!0}else Re(l,Ct,!1);const{activeElement:g}=document;await $e();const w=n?n.scroll:a?jt():null;if(ee){const b=e.hash&&document.getElementById(decodeURIComponent(S.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));w?scrollTo(w.x,w.y):b?b.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==g&&document.activeElement!==document.body;!r&&!R&&On(),ee=!0,l.props.page&&Object.assign(U,l.props.page),Z=!1,t==="popstate"&&Ee(T),y.fulfil(void 0),W.forEach(b=>b(y.navigation)),$.navigating.set(J.current=null)}async function xe(t,e,n,r){return t.origin===lt&&t.pathname===location.pathname&&!Vt?await St({status:r,error:n,url:t,route:e}):await M(t)}function Ln(){let t;j.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(s){s.defaultPrevented||r(s.composedPath()[0],1)}j.addEventListener("mousedown",e),j.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(Lt(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=me(s,j);if(!o)return;const{url:c,external:f,download:d}=xt(o,x,S.hash);if(f||d)return;const u=ut(o),y=c&&_t(_.url)===_t(c);if(!u.reload&&!y)if(i<=u.preload_data){const h=Ht(c,!1);h&&Rn(h)}else i<=u.preload_code&&Lt(c)}function a(){n.disconnect();for(const s of j.querySelectorAll("a")){const{url:i,external:o,download:c}=xt(s,x,S.hash);if(o||c)continue;const f=ut(s);f.reload||(f.preload_code===ft.viewport&&n.observe(s),f.preload_code===ft.eager&&Lt(i))}}W.add(a),a()}function G(t,e){if(t instanceof bt)return t.body;const n=ht(t),r=vn(t);return S.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Tn(t,e){Tt(()=>(t.add(e),()=>{t.delete(e)}))}function qn(t){Tn(be,t)}function xn(t,e={}){return t=new URL(pe(t)),t.origin!==lt?Promise.reject(new Error("goto: invalid URL")):Gt(t,e,0)}function Pn(t){if(typeof t=="function")pt.push(t);else{const{href:e}=new URL(t,location.href);pt.push(n=>n.href===e)}}function Cn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ne(),!Z){const a=Ne(_,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ve.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ne()}),(e=navigator.connection)!=null&&e.saveData||Ln(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=me(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=xt(r,x,S.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ut(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[d,u]=(S.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=d===Rt(location);if(s||c.reload&&(!y||!u)){Te({url:a,type:"link"})?Z=!0:n.preventDefault();return}if(u!==void 0&&y){const[,h]=_.url.href.split("#");if(h===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(q=!0,Ft(I),t(a),!c.replace_state)return;q=!1}n.preventDefault(),await new Promise(h=>{requestAnimationFrame(()=>{setTimeout(h,0)}),setTimeout(h,100)}),H({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(vt(o,x,!1))return;const c=n.target,f=ut(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&d.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(d).toString(),H({type:"form",url:o,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[B]){const a=n.state[B];if(yt={},a===I)return;const s=F[a],i=n.state[de]??{},o=new URL(n.state[an]??location.href),c=n.state[z],f=_.url?Rt(location)===Rt(_.url):!1;if(c===T&&(Ae||f)){i!==U.state&&(U.state=i),t(o),F[I]=jt(),s&&scrollTo(s.x,s.y),I=a;return}const u=a-I;await H({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{I=a,T=c},block:()=>{history.go(-u)},nav_token:yt})}else if(!q){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{q?(q=!1,history.replaceState({...history.state,[B]:++I,[z]:T},"",location.href)):S.hash&&_.url.hash===location.hash&&H({type:"goto",url:Oe(_.url)})});for(const n of document.querySelectorAll("link"))Sn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(J.current=null)});function t(n){_.url=U.url=n,$.page.set(Kt(U)),$.page.notify()}}async function Nn(t,{status:e=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){Vt=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Ht(c,!1)||{});let f,d=!0;try{const u=r.map(async(m,l)=>{const g=i[l];return g!=null&&g.uses&&(g.uses=Ce(g.uses)),Mt({loader:S.nodes[m],url:c,params:a,route:s,parent:async()=>{const w={};for(let R=0;R<l;R+=1)Object.assign(w,(await u[R]).data);return w},server_data_node:qt(g)})}),y=await Promise.all(u),h=At.find(({id:m})=>m===s.id);if(h){const m=h.layouts;for(let l=0;l<m.length;l++)m[l]||y.splice(l,0,void 0)}f=wt({url:c,params:a,branch:y,status:e,error:n,form:o,route:h??null})}catch(u){if(u instanceof $t){await M(new URL(u.location,location.href));return}f=await St({status:ht(u),error:await G(u,{url:c,params:a,route:s}),url:c,route:s}),t.textContent="",d=!1}f.props.page&&(f.props.page.state={}),Re(f,t,d)}async function Pe(t,e){var s;const n=new URL(t);n.pathname=qe(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(_n,"1"),n.searchParams.append(wn,e.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new bt(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),f=new TextDecoder;function d(h){return gn(h,{...S.decoders,Promise:m=>new Promise((l,g)=>{o.set(m,{fulfil:l,reject:g})})})}let u="";for(;;){const{done:h,value:m}=await c.read();if(h&&!u)break;for(u+=!m&&u?`
`:f.decode(m,{stream:!0});;){const l=u.indexOf(`
`);if(l===-1)break;const g=JSON.parse(u.slice(0,l));if(u=u.slice(l+1),g.type==="redirect")return i(g);if(g.type==="data")(y=g.nodes)==null||y.forEach(w=>{(w==null?void 0:w.type)==="data"&&(w.uses=Ce(w.uses),w.data=d(w.data))}),i(g);else if(g.type==="chunk"){const{id:w,data:R,error:b}=g,p=o.get(w);o.delete(w),b?p.reject(d(b)):p.fulfil(d(R))}}}})}function Ce(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function On(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Ne(t,e,n,r){var c,f;let a,s;const i=new Promise((d,u)=>{a=d,s=u});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((f=e==null?void 0:e.route)==null?void 0:f.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:s}}function Kt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function Oe(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{Mn as a,xn as g,qn as o,$ as s};
