import{P as b,j as L,k as j,l as q}from"./disclose-version.CEbLymSa.js";import{s as g,j as O,k as K,L as T,l as U,g as a,n as M,o as N,v as d,i as Y,w as R,x as $,m as y,y as z}from"./runtime.Bfoy81my.js";function F(e,r=1){const n=e();return e(n+r),n}const B={get(e,r){if(!e.exclude.includes(r))return a(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=G({get[r](){return e.props[r]}},r,b)),e.special[r](n),N(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function H(e,r){return new Proxy({props:e,exclude:r,special:{},version:g(0)},B)}const C={get(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(d(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(d(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return O(s,r)}},has(e,r){for(let n of e.props)if(d(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){d(n)&&(n=n());for(const s in n)r.includes(s)||r.push(s)}return r}};function J(...e){return new Proxy({props:e},C)}function G(e,r,n,s){var S;var m=(n&L)!==0,v=(n&j)!==0,D=(n&q)!==0,o=e[r],t=(S=O(e,r))==null?void 0:S.set,p=s,P=!0,w=()=>(D&&P&&(P=!1,p=Y(s)),p);o===void 0&&s!==void 0&&(t&&v&&K(),o=w(),t&&t(o));var i;if(v)i=()=>{var u=e[r];return u===void 0?w():(P=!0,u)};else{var I=(m?R:$)(()=>e[r]);I.f|=T,i=()=>{var u=a(I);return u!==void 0&&(p=void 0),u===void 0?p:u}}if(!(n&b))return i;if(t){var E=e.$$legacy;return function(u,l){return arguments.length>0?((!v||!l||E)&&t(l?i():u),u):i()}}var c=!1,h=!1,_=y(o),f=R(()=>{var u=i(),l=a(_);return c?(c=!1,h=!0,l):(h=!1,_.v=u)});return m||(f.equals=U),function(u,l){var A=a(f);if(z&&(c=h,i(),a(_)),arguments.length>0){const x=l?a(f):u;return f.equals(x)||(c=!0,M(_,x),a(f)),u}return A}}export{H as l,G as p,J as s,F as u};
