import{I as t,R as _,i as p,z as m,W as v}from"./runtime.Bfoy81my.js";function u(e){throw new Error("lifecycle_outside_component")}function h(e){t===null&&u(),t.l!==null?s(t).m.push(e):_(()=>{const n=p(e);if(typeof n=="function")return n})}function d(e,n,{bubbles:o=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:o,cancelable:r})}function x(){const e=t;return e===null&&u(),(n,o,r)=>{var a;const c=(a=e.s.$$events)==null?void 0:a[n];if(c){const f=m(c)?c.slice():[c],l=d(n,o,r);for(const i of f)i.call(e.x,l);return!l.defaultPrevented}return!0}}function b(e){t===null&&u(),t.l===null&&v(),s(t).a.push(e)}function s(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{b as a,x as c,h as o};
