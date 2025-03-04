import{c as rt,a as g,t as L,n as Kt,f as Qt}from"../chunks/LFhyL0Oe.js";import{G as Ct,J as Xt,aQ as te,aR as ee,e as ae,O as re,aS as se,aH as ne,P as oe,n as tt,a7 as It,a6 as Dt,ab as ie,p as Pt,T as z,am as de,f as G,g as o,a as At,al as pt,Z as le,s as w,c as v,a1 as Mt,t as $,r as l,b as et}from"../chunks/C4PvZKYF.js";import{a as ce,s as at}from"../chunks/BXGwz8DI.js";import{a as ve}from"../chunks/DtU4Hkfk.js";import{i as U}from"../chunks/CDDWqkxC.js";import{e as mt,i as bt}from"../chunks/a146k34_.js";import{s as R}from"../chunks/CUPybZ0j.js";import{s as jt}from"../chunks/BaLOgukX.js";import{d as ue}from"../chunks/BYC5jH_O.js";import{p as ht,a as ot}from"../chunks/D6tDoBIA.js";import{o as Tt}from"../chunks/Cih6xMaF.js";import{S as fe}from"../chunks/Fb63ZLvU.js";import{S as pe}from"../chunks/Cj-s7IfF.js";import"../chunks/gclTb0SW.js";import{d as M,a as me,u as be,t as he,c as xe,s as _e}from"../chunks/EgSAc1lH.js";import{i as ge}from"../chunks/Dl204hFz.js";const we=()=>performance.now(),j={tick:a=>requestAnimationFrame(a),now:()=>we(),tasks:new Set};function Ut(){const a=j.now();j.tasks.forEach(t=>{t.c(a)||(j.tasks.delete(t),t.f())}),j.tasks.size!==0&&j.tick(Ut)}function ye(a){let t;return j.tasks.size===0&&j.tick(Ut),{promise:new Promise(s=>{j.tasks.add(t={c:a,f:s})}),abort(){j.tasks.delete(t)}}}function it(a,t){a.dispatchEvent(new CustomEvent(t))}function ke(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function Lt(a){const t={},s=a.split(";");for(const i of s){const[m,c]=i.split(":");if(!m||c===void 0)break;const f=ke(m.trim());t[f]=c.trim()}return t}const Se=a=>a;function dt(a,t,s,i){var m=(a&se)!==0,c="both",f,p=t.inert,F=t.style.overflow,r,d;function C(){var x=ie,b=Ct;It(null),Dt(null);try{return f??(f=s()(t,(i==null?void 0:i())??{},{direction:c}))}finally{It(x),Dt(b)}}var I={is_global:m,in(){t.inert=p,it(t,"introstart"),r=xt(t,C(),d,1,()=>{it(t,"introend"),r==null||r.abort(),r=f=void 0,t.style.overflow=F})},out(x){t.inert=!0,it(t,"outrostart"),d=xt(t,C(),r,0,()=>{it(t,"outroend"),x==null||x()})},stop:()=>{r==null||r.abort(),d==null||d.abort()}},y=Ct;if((y.transitions??(y.transitions=[])).push(I),ce){var S=m;if(!S){for(var u=y.parent;u&&u.f&Xt;)for(;(u=u.parent)&&!(u.f&te););S=!u||(u.f&ee)!==0}S&&ae(()=>{re(()=>I.in())})}}function xt(a,t,s,i,m){var c=i===1;if(ne(t)){var f,p=!1;return oe(()=>{if(!p){var x=t({direction:c?"in":"out"});f=xt(a,x,s,i,m)}}),{abort:()=>{p=!0,f==null||f.abort()},deactivate:()=>f.deactivate(),reset:()=>f.reset(),t:()=>f.t()}}if(s==null||s.deactivate(),!(t!=null&&t.duration))return m(),{abort:tt,deactivate:tt,reset:tt,t:()=>i};const{delay:F=0,css:r,tick:d,easing:C=Se}=t;var I=[];if(c&&s===void 0&&(d&&d(0,1),r)){var y=Lt(r(0,1));I.push(y,y)}var S=()=>1-i,u=a.animate(I,{duration:F});return u.onfinish=()=>{var x=(s==null?void 0:s.t())??1-i;s==null||s.abort();var b=i-x,O=t.duration*Math.abs(b),V=[];if(O>0){var Y=!1;if(r)for(var W=Math.ceil(O/16.666666666666668),n=0;n<=W;n+=1){var e=x+b*C(n/W),h=Lt(r(e,1-e));V.push(h),Y||(Y=h.overflow==="hidden")}Y&&(a.style.overflow="hidden"),S=()=>{var _=u.currentTime;return x+b*C(_/O)},d&&ye(()=>{if(u.playState!=="running")return!1;var _=S();return d(_,1-_),!0})}u=a.animate(V,{duration:O,fill:"forwards"}),u.onfinish=()=>{S=()=>i,d==null||d(i,1-i),m()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=tt)},deactivate:()=>{m=tt},reset:()=>{i===0&&(d==null||d(1,0))},t:()=>S()}}function Fe(a,t){Pt(t,!1),M.extend(me),M.extend(be),M.extend(he),M.extend(xe);let s=ht(t,"from",8),i=ht(t,"dateFormat",12),m=ht(t,"zone",8),c=de({years:0,months:0,weeks:0,days:0,hours:0,minutes:0,seconds:0,done:!0}),f=0,p,F,r,d;Tt(()=>{i()||i("YYYY-MM-DD H:m:s");try{F=m()?M(s(),i(),m()):M(s(),i())}catch(y){y.message.indexOf("Invalid time zone")>-1?(F=M(s(),i()),console.warn("[svelte-countdown] Countdown might not be precice as a proper timezone was not defined.")):console.warn('[svelte-countdown] Could not calculate date, make sure your "from" and "dateFormat" inputs are correct.')}M.isDayjs(F)&&(r=M(),f=F.valueOf()-r.valueOf()),d=setInterval(function(){f>0?(p=M.duration(f),z(c,{years:p.years(),months:p.months(),weeks:p.weeks(),days:p.days(),hours:p.hours(),minutes:p.minutes(),seconds:p.seconds(),done:!1}),f-=1e3):(z(c,{years:0,months:0,weeks:0,days:0,hours:0,minutes:0,seconds:0,done:!0}),clearInterval(d))},1e3)}),ge();var C=rt(),I=G(C);_e(I,t,"default",{get remaining(){return o(c)}},null),g(a,C),At()}const Ce=a=>a;function Ie(a){const t=a-1;return t*t*t+1}function Et(a,{delay:t=0,duration:s=400,easing:i=Ce}={}){const m=+getComputedStyle(a).opacity;return{delay:t,duration:s,easing:i,css:c=>`opacity: ${c*m}`}}function Ot(a,{delay:t=0,duration:s=400,easing:i=Ie,axis:m="y"}={}){const c=getComputedStyle(a),f=+c.opacity,p=m==="y"?"height":"width",F=parseFloat(c[p]),r=m==="y"?["top","bottom"]:["left","right"],d=r.map(b=>`${b[0].toUpperCase()}${b.slice(1)}`),C=parseFloat(c[`padding${d[0]}`]),I=parseFloat(c[`padding${d[1]}`]),y=parseFloat(c[`margin${d[0]}`]),S=parseFloat(c[`margin${d[1]}`]),u=parseFloat(c[`border${d[0]}Width`]),x=parseFloat(c[`border${d[1]}Width`]);return{delay:t,duration:s,easing:i,css:b=>`overflow: hidden;opacity: ${Math.min(b*20,1)*f};${p}: ${b*F}px;padding-${r[0]}: ${b*C}px;padding-${r[1]}: ${b*I}px;margin-${r[0]}: ${b*y}px;margin-${r[1]}: ${b*S}px;border-${r[0]}-width: ${b*u}px;border-${r[1]}-width: ${b*x}px;min-${p}: 0`}}var De=(a,t,s)=>t(o(s)),Me=Kt('<svg aria-label="Clear filters" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path></svg>'),je=L("<button><!></button>"),Le=(a,t,s)=>t(o(s).data.attributes.code),Ee=L('<div class="border-neutral-content/40 rounded-field border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">day</span></div>'),Oe=L('<div class="tooltip shrink-0 after:hidden" data-tip="Remaining time"><date><!> <div class="border-neutral-content/40 rounded-field border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">hour</span></div> <div class="border-neutral-content/40 rounded-field border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">min</span></div> <div class="border-neutral-content/40 rounded-field border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">sec</span></div></date></div>'),Pe=L('<div class="text-neutral-content/20 rounded-field shrink-0 border border-dashed p-2">Ended</div>'),Ae=L('<div class="mb-12"><div class="alert bg-neutral text-neutral-content min-h-24 border-transparent"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-4 size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path></svg> <div class="flex w-full flex-col items-center justify-between gap-10 sm:flex-row"><div class="flex flex-col gap-1"><h2 class="text-lg font-bold"> </h2> <div class="text-neutral-content/70 text-sm [text-wrap:balance]">Use <span class="tooltip tooltip-info"><button class="badge badge-info cursor-copy px-2 font-mono tracking-wide"> </button></span> </div></div> <!></div></div></div>'),Te=L('<div class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20 py-32">Coming soon…</div>'),Ue=L('<div class="rounded-box border-base-300 text-base-content/30 flex h-72 flex-col items-center justify-center gap-6 border-2 border-dashed p-10 text-center [text-wrap:balance]"><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="40" height="30" rx="2" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M14 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path><path d="M25 23L14 23" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path><path d="M34 31L14 31" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path><path d="M34 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path></svg> <div> </div></div>'),Re=L('<div class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20">Coming soon…</div>'),ze=L(`<!> <div class="mx-4 flex flex-col justify-between gap-6 lg:flex-row"><div class="flex flex-col gap-2"><h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl">daisyUI store</h1> <p class="text-base-content/60 text-sm">Official templates made by daisyUI</p></div> <div class="flex flex-col gap-3"><div class="text-base-content/50 text-end text-xs">Filter by</div> <div class="flex items-center gap-2"></div></div></div> <hr class="border-base-content/10 mx-4 mt-10 mb-16"> <div><!> <div class="*:border-base-content/10 mx-auto grid *:border-t *:border-dashed *:px-4 *:py-16 *:nth-[1]:border-t-0 md:*:px-16 lg:grid-cols-2 lg:px-4 lg:*:border-e lg:*:even:border-e-0 lg:*:nth-[2]:border-t-0"></div> <div class="divider text-base-content/30 my-20">In development</div> <div class="grid gap-12 lg:grid-cols-3"></div> <div class="divider text-base-content/30 my-20"></div> <div id="mc_embed_shell" class="card bg-base-200 mt-10"><div class="card-body flex flex-col gap-4"><h2 class="text-xl font-black lg:text-4xl">Get notified about upcoming products and discounts!</h2> <div><p class="font-bold">Subscribe to daisyUI store newsletter to get updates about new products and discounts
          codes.</p> <p class="text-base-content/60 text-xs">You will only receive a single email when a new product is added or when a new discount
          code is available. No spam. No ads.</p></div> <div id="mc_embed_signup"><form action="https://gmail.us8.list-manage.com/subscribe/post?u=42813cff910e47b1bd132369a&amp;id=9fd7333f07&amp;f_id=003d03e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate=""><input type="checkbox" name="group[347002][8]" value="1" class="hidden" checked="checked"> <input type="checkbox" name="group[347002][1]" value="1" class="hidden" checked="checked"> <div class="flex w-full max-w-sm flex-col gap-2"><label for="mce-EMAIL">Email Address</label> <div class="join"><input type="email" name="EMAIL" class="join-item input input-bordered w-full max-w-sm" id="mce-EMAIL" placeholder="mail@site.com" required> <button name="subscribe" class="join-item btn btn-success">Subscribe</button></div></div> <div aria-hidden="true" class="hidden"><input type="text" name="b_42813cff910e47b1bd132369a_9fd7333f07" tabindex="-1" value=""></div></form></div></div></div></div>`,1);function ra(a,t){Pt(t,!0);let s=pt(ot(new Date().toISOString()));le(()=>{const n=setInterval(()=>{z(s,ot(new Date().toISOString()))},1e3);return()=>clearInterval(n)});const i=n=>{var e;if((e=n.data)!=null&&e.attributes.expires_at){const h=new Date(n.data.attributes.expires_at).toISOString(),_=new Date().toISOString();return h>_}return!1},m=(async()=>{const[n,e]=await Promise.all([fetch("https://api.daisyui.com/api/discount_shorttime.json"),fetch("https://api.daisyui.com/api/discount_special.json")]),h=await n.json(),_=await e.json();return i(_)?_:i(h)?h:null})();function c(n){const e=(n/100).toFixed(2);return`$${e.endsWith(".00")?e.slice(0,-3):e}`}const f={year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};let p=pt(!1);const F=n=>{navigator.clipboard.writeText(n),z(p,!0),setTimeout(()=>{z(p,!1)},2e3)};let r=pt("");Tt(()=>{const e=new URLSearchParams(window.location.search).get("filter")||"";z(r,ot(e))});function d(n,e){const h=new URL(window.location);h.searchParams.set(n,e),window.history.pushState({},"",h)}function C(n){z(r,ot(n==="all"?"":n)),d("filter",o(r))}let I=Mt(()=>t.data.products.filter(n=>{var e;return o(r)===""||((e=n.tech)==null?void 0:e.includes(o(r)))}).sort((n,e)=>0));var y=ze(),S=G(y);fe(S,{title:"Official daisyUI Store",desc:"daisyUI Store - Professional templates made by daisyUI"});var u=w(S,2),x=w(v(u),2),b=w(v(x),2);mt(b,21,()=>t.data.techFilters,bt,(n,e)=>{var h=rt(),_=G(h);{var q=P=>{var k=je();k.__click=[De,C,e];var E=v(k);{var Z=D=>{var B=Me();g(D,B)},J=D=>{var B=Qt();$(()=>at(B,t.data.tech[o(e)])),g(D,B)};U(E,D=>{o(e)==="all"?D(Z):D(J,!1)})}l(k),$(()=>{jt(k,`btn btn-sm rounded-full ${o(e)==="all"?"btn-circle":""} ${o(r)===o(e)?"btn-neutral":""}`),R(k,"aria-label",o(e)==="all"?"×":t.data.tech[o(e)])}),dt(3,k,()=>Ot,()=>({duration:50,axis:"x"})),g(P,k)};U(_,P=>{(o(r)===""&&o(e)!=="all"||o(r)==="all"||o(r)!==""&&(o(e)===o(r)||o(e)==="all"))&&P(q)})}g(n,h)}),l(b),l(x),l(u);var O=w(u,4),V=v(O);ve(V,()=>m,null,(n,e)=>{var h=rt(),_=G(h);{var q=P=>{var k=Ae(),E=v(k),Z=w(v(E),2),J=v(Z),D=v(J),B=v(D,!0);l(D);var _t=w(D,2),st=w(v(_t)),lt=v(st);lt.__click=[Le,F,e];var Rt=v(lt,!0);l(lt),l(st);var zt=w(st);l(_t),l(J);var Yt=w(J,2);{var Bt=ct=>{const Ht=Mt(()=>new Date(o(e).data.attributes.expires_at).toLocaleString("en-GB",f));Fe(ct,{get from(){return o(Ht)},dateFormat:"DD/MM/YYYY, HH:mm:ss",children:(Nt,vt)=>{let A=()=>vt==null?void 0:vt().remaining;var gt=rt(),$t=G(gt);{var Gt=H=>{var T=Oe(),N=v(T),nt=v(N);{var K=X=>{var ft=Ee(),Ft=v(ft),Jt=v(Ft);l(Ft),et(2),l(ft),$(()=>R(Jt,"style",`--value:${A().days};`)),g(X,ft)};U(nt,X=>{A().days>0&&X(K)})}var Q=w(nt,2),wt=v(Q),Wt=v(wt);l(wt),et(2),l(Q);var ut=w(Q,2),yt=v(ut),qt=v(yt);l(yt),et(2),l(ut);var kt=w(ut,2),St=v(kt),Zt=v(St);l(St),et(2),l(kt),l(N),l(T),$(X=>{R(N,"datetime",X),jt(N,`grid ${A().days>0?"grid-cols-4":"grid-cols-3"} gap-2 text-center font-mono text-xs`),R(Wt,"style",`--value:${A().hours};`),R(qt,"style",`--value:${A().minutes};`),R(Zt,"style",`--value:${A().seconds};`)},[()=>new Date(o(e).data.attributes.expires_at).toLocaleString("en-GB",f)]),dt(3,T,()=>Et,()=>({duration:400})),g(H,T)},Vt=H=>{var T=rt(),N=G(T);{var nt=K=>{var Q=Pe();g(K,Q)};U(N,K=>{t.data||K(nt)},!0)}g(H,T)};U($t,H=>{A().done===!1?H(Gt):H(Vt,!1)})}g(Nt,gt)},$$slots:{default:!0}})};U(Yt,ct=>{o(e).data.attributes.expires_at&&ct(Bt)})}l(Z),l(E),l(k),$(()=>{at(B,o(e).data.attributes.name),R(st,"data-tip",o(p)?"copied":"copy"),at(Rt,o(e).data.attributes.code),at(zt,` code at checkout to get ${o(e).data.attributes.amount??""}% discount on all products.`)}),dt(3,Z,()=>Et,()=>({duration:400})),dt(3,E,()=>Ot,()=>({duration:400})),g(P,k)};U(_,P=>{var k,E;(k=o(e))!=null&&k.data.attributes.expires_at&&new Date((E=o(e))==null?void 0:E.data.attributes.expires_at).toISOString()>o(s)&&P(q)})}g(n,h)});var Y=w(V,2);mt(Y,21,()=>o(I),bt,(n,e)=>{pe(n,{get product(){return o(e)},convertCurrency:c})},n=>{var e=Te();g(n,e)}),l(Y);var W=w(Y,4);mt(W,21,()=>t.data.futureProducts,bt,(n,e)=>{var h=Ue(),_=w(v(h),2),q=v(_,!0);l(_),l(h),$(()=>at(q,o(e))),g(n,h)},n=>{var e=Re();g(n,e)}),l(W),et(4),l(O),g(a,y),At()}ue(["click"]);export{ra as component};
