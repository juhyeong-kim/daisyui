import{m as W,E as P,e as N,n as B,H as $,o as K,r as j,g as O,p as ee,q as h,u as b,v as D,w as re,i as ae,x as ne,y as fe}from"./disclose-version.CEbLymSa.js";import{c as le,z as se,d as U,f as X,h as te,J as ie,q as ue,K as Q,n as V,m as ve,s as F,M as oe,N as de,O as _e,P as Ee,Q as pe,S as Ae}from"./runtime.Bfoy81my.js";let m=null;function Ce(l,e){return e}function Se(l,e,a,i){for(var u=[],d=e.length,v=0;v<d;v++)oe(e[v].e,u,!0);var g=d>0&&u.length===0&&a!==null;if(g){var E=a.parentNode;re(E),E.append(a),i.clear(),C(l,e[0].prev,e[d-1].next)}de(u,()=>{for(var _=0;_<d;_++){var p=e[_];g||(i.delete(p.k),C(l,p.prev,p.next)),_e(p.e,!g)}})}function Ie(l,e,a,i,u,d=null){var v={flags:e,items:new Map,first:null},g=(e&P)!==0;if(g){var E=l;l=N?B(E.firstChild):E.appendChild(W())}var _=null;le(()=>{var p=a(),n=se(p)?p:p==null?[]:Array.from(p),A=n.length,f=v.flags;f&D&&!Ee(n)&&!(pe in n)&&!(Ae in n)&&(f^=D,f&fe&&!(f&h)&&(f^=h));let o=!1;if(N){var S=l.data===$;(S!==(A===0)||K===void 0)&&(j(ae),O(!1),o=!0)}if(N){for(var t=K,y=null,T,r=0;r<A;r++){if(t.nodeType!==8||t.data!==ee){o=!0,O(!1);break}t=B(t);var s=n[r],H=i(s,r);T=Z(t,v,y,null,s,H,r,u,f),v.items.set(H,T),t=t.nextSibling,y=T}if(A>0)for(;t!==l;){var I=t.nextSibling;t.remove(),t=I}}N||Te(n,v,l,u,f,i),d!==null&&(A===0?_?U(_):_=X(()=>d(l)):_!==null&&te(_,()=>{_=null})),o&&O(!0)})}function Te(l,e,a,i,u,d){var M,k,Y,q;var v=(u&ne)!==0,g=(u&(h|b))!==0,E=l.length,_=e.items,p=e.first,n=p,A=new Set,f=null,o=new Set,S=[],t=[],y,T,r,s;if(v)for(s=0;s<E;s+=1)y=l[s],T=d(y,s),r=_.get(T),r!==void 0&&((M=r.a)==null||M.measure(),o.add(r));for(s=0;s<E;s+=1){if(y=l[s],T=d(y,s),r=_.get(T),r===void 0){var H=n?n.e.nodes.start:a;f=Z(H,e,f,f===null?e.first:f.next,y,T,s,i,u),_.set(T,f),S=[],t=[],n=f.next;continue}if(g&&ge(r,y,s,u),r.e.f&ie&&(U(r.e),v&&((k=r.a)==null||k.unfix(),o.delete(r))),r!==n){if(A.has(r)){if(S.length<t.length){var I=t[0],x;f=I.prev;var L=S[0],R=S[S.length-1];for(x=0;x<S.length;x+=1)J(S[x],I,a);for(x=0;x<t.length;x+=1)A.delete(t[x]);C(e,L.prev,R.next),C(e,f,L),C(e,R,I),n=I,f=R,s-=1,S=[],t=[]}else A.delete(r),J(r,n,a),C(e,r.prev,r.next),C(e,r,f===null?e.first:f.next),C(e,f,r),f=r;continue}for(S=[],t=[];n!==null&&n.k!==T;)A.add(n),t.push(n),n=n.next;if(n===null)continue;r=n}S.push(r),f=r,n=r.next}const c=Array.from(A);for(;n!==null;)c.push(n),n=n.next;var w=c.length;if(w>0){var G=u&P&&E===0?a:null;if(v){for(s=0;s<w;s+=1)(Y=c[s].a)==null||Y.measure();for(s=0;s<w;s+=1)(q=c[s].a)==null||q.fix()}Se(e,c,G,_)}v&&ue(()=>{var z;for(r of o)(z=r.a)==null||z.apply()}),Q.first=e.first&&e.first.e,Q.last=f&&f.e}function ge(l,e,a,i){i&h&&V(l.v,e),i&b?V(l.i,a):l.i=a}function Z(l,e,a,i,u,d,v,g,E){var _=m;try{var p=(E&h)!==0,n=(E&D)===0,A=p?n?ve(u):F(u):u,f=E&b?F(v):v,o={i:f,v:A,k:d,a:null,e:null,prev:a,next:i};return m=o,o.e=X(()=>g(l,A,f),N),o.e.prev=a&&a.e,o.e.next=i&&i.e,a===null?e.first=o:(a.next=o,a.e.next=o.e),i!==null&&(i.prev=o,i.e.prev=o.e),o}finally{m=_}}function J(l,e,a){for(var i=l.next?l.next.e.nodes.start:a,u=e?e.e.nodes.start:a,d=l.e.nodes.start;d!==i;){var v=d.nextSibling;u.before(d),d=v}}function C(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{Ie as e,Ce as i};
