(window.webpackJsonp=window.webpackJsonp||[]).push([[47,4,9,11,44],{402:function(t,e,n){var r=n(18),o="["+n(403)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},403:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},405:function(t,e,n){"use strict";var r=n(10),o=n(4),l=n(80),c=n(14),d=n(12),f=n(35),h=n(159),m=n(58),v=n(5),w=n(60),_=n(59).f,y=n(25).f,x=n(13).f,C=n(402).trim,A="Number",S=o.Number,T=S.prototype,E=f(w(T))==A,N=function(t){var e,n,r,o,l,c,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=C(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(l(A,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var O,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(E?v((function(){T.valueOf.call(n)})):f(n)!=A)?h(new S(N(e)),n,I):N(e)},k=r?_(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;k.length>D;D++)d(S,O=k[D])&&!d(I,O)&&x(I,O,y(S,O));I.prototype=T,T.constructor=I,c(o,A,I)}},406:function(t,e,n){"use strict";n.r(e);n(37),n(405),n(26),n(36),n(81),n(111),n(45),n(47),n(160),n(61),n(158),n(82),n(46);var r={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){n(408)},408:function(t,e,n){"use strict";var r=n(2),o=n(18),l=n(83),c=n(84),d=n(161),f=n(3),h=n(21),m=f("replace"),v=RegExp.prototype,w=Math.max,_=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,f,y,x,C,A,S,T=o(this),E=0,N=0,O="";if(null!=t){if((n=l(t))&&!~String(o("flags"in v?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=t[m]))return r.call(t,T,e);if(h&&n)return String(T).replace(t,e)}for(f=String(T),y=String(t),(x="function"==typeof e)||(e=String(e)),C=y.length,A=w(1,C),E=_(f,y,0);-1!==E;)S=x?String(e(y,E,f)):d(y,f,E,[],void 0,e),O+=f.slice(N,E)+S,N=E+C,E=_(f,y,E+A);return N<f.length&&(O+=f.slice(N)),O}})},409:function(t,e,n){"use strict";var r=n(2),o=n(402).trim;r({target:"String",proto:!0,forced:n(410)("trim")},{trim:function(){return o(this)}})},410:function(t,e,n){var r=n(5),o=n(403);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},411:function(t,e,n){"use strict";n.r(e);n(407),n(409),n(111);var r={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var r,o=new Array(1+n++).join("  "),l=new Array(n-1).join("  "),i=0;i<e.children.length;i++)r=document.createTextNode("\n"+o),e.insertBefore(r,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(r=document.createTextNode("\n"+l),e.appendChild(r));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(406).default})},412:function(t,e,n){"use strict";n.r(e);var r={props:["data"]},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overflow-x-auto mt-6"},[n("table",{staticClass:"table table-compact w-full"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,r){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-success w-20"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,r){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-info w-20"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"text-xl font-bold mt-6"},[t._v("Examples")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},423:function(t,e,n){"use strict";n.r(e);var r={props:{classes:String}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar"},[n("div",{class:t.classes},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},459:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"daisyUI — Tailwind CSS avatar component",meta:[{hid:"description",name:"description",content:"Tailwind CSS avatar component - Tailwind CSS avatar examples"}]}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"avatar",desc:"Container element"},{class:"avatar-group",desc:"Container for grouping multiple avatars"}],utilities:[{class:"online",desc:"shows a green dot as online indicator"},{class:"offline",desc:"shows a gray dot as online indicator"},{class:"placeholder",desc:"to show some letters as avatar placeholder"}]}}}),t._v(" "),n("Wrapper",{attrs:{title:"avatar",classes:"flex items-center space-x-8 flex-wrap"}},[n("Avatar",{attrs:{classes:"mb-8 rounded-btn w-24 h-24"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"mb-8 rounded-btn w-14 h-14"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@56w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"mb-8 rounded-btn w-10 h-10"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@40w.png"}})])],1),t._v(" "),n("Wrapper",{attrs:{title:"avatar-group",classes:"flex items-center space-x-8 flex-wrap"}},[n("div",{staticClass:"-space-x-6 avatar-group"},[n("Avatar",{attrs:{classes:"w-16 h-16"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@56w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"w-16 h-16"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-2@56w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"w-16 h-16"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-3@56w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"w-16 h-16"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-5@56w.png"}})])],1)]),t._v(" "),n("Wrapper",{attrs:{title:"avatar-group",classes:"flex items-center space-x-8 flex-wrap"}},[n("div",{staticClass:"-space-x-5 avatar-group"},[n("Avatar",{attrs:{classes:"w-10 h-10"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@40w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"w-10 h-10"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-2@40w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"w-10 h-10"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-3@40w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"w-10 h-10"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-5@40w.png"}})]),t._v(" "),n("div",{staticClass:"avatar placeholder"},[n("div",{staticClass:"w-10 h-10 rounded-full bg-neutral-focus text-neutral-content"},[n("span",[t._v("+99")])])])],1)]),t._v(" "),n("Wrapper",{attrs:{title:"avatar circle",classes:"flex items-center space-x-8 flex-wrap"}},[n("Avatar",{attrs:{classes:"mb-8 rounded-full w-24 h-24"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"mb-8 rounded-full w-14 h-14"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@56w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"mb-8 rounded-full w-10 h-10"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@40w.png"}})])],1),t._v(" "),n("Wrapper",{attrs:{title:"avatar with mask",classes:"flex items-center space-x-8 flex-wrap"}},[n("Avatar",{attrs:{classes:"mb-8 w-24 h-24 mask mask-squircle"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"mb-8 w-24 h-24 mask mask-hexagon"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"mb-8 w-24 h-24 mask mask-decagon"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}})])],1),t._v(" "),n("Wrapper",{attrs:{title:"avatar with border",classes:"flex items-center space-x-8 flex-wrap"}},[n("Avatar",{attrs:{classes:"mb-8 rounded-box w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"mb-8 rounded-box w-14 h-14 ring ring-primary ring-offset-base-100 ring-offset-2"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@56w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"mb-8 rounded-box w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@40w.png"}})])],1),t._v(" "),n("Wrapper",{attrs:{title:"avatar circle",classes:"flex items-center space-x-8 flex-wrap"}},[n("Avatar",{attrs:{classes:"mb-8 rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"mb-8 rounded-full w-14 h-14 ring ring-primary ring-offset-base-100 ring-offset-2"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@56w.png"}})]),t._v(" "),n("Avatar",{attrs:{classes:"mb-8 rounded-full w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@40w.png"}})])],1),t._v(" "),n("Wrapper",{attrs:{title:"avatar with presense indicator",classes:"flex items-center space-x-8 flex-wrap"}},[n("Avatar",{staticClass:"online",attrs:{classes:"rounded-btn w-24 h-24"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}})]),t._v(" "),n("Avatar",{staticClass:"offline",attrs:{classes:"rounded-btn w-14 h-14"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@56w.png"}})]),t._v(" "),n("Avatar",{staticClass:"online",attrs:{classes:"rounded-btn w-10 h-10"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@40w.png"}})])],1),t._v(" "),n("Wrapper",{attrs:{title:"avatar with presense indicator",classes:"flex items-center space-x-8 flex-wrap"}},[n("Avatar",{staticClass:"online",attrs:{classes:"rounded-full w-24 h-24"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}})]),t._v(" "),n("Avatar",{staticClass:"offline",attrs:{classes:"rounded-full w-14 h-14"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@56w.png"}})]),t._v(" "),n("Avatar",{staticClass:"online",attrs:{classes:"rounded-full w-10 h-10"}},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@40w.png"}})])],1),t._v(" "),n("Wrapper",{attrs:{title:"avatar placeholder",classes:"flex items-center space-x-8 flex-wrap"}},[n("Avatar",{staticClass:"placeholder",attrs:{classes:"bg-neutral-focus text-neutral-content rounded-full w-32 h-32"}},[n("span",{staticClass:"text-3xl"},[t._v("K")])]),t._v(" "),n("Avatar",{staticClass:"online placeholder",attrs:{classes:"bg-neutral-focus text-neutral-content rounded-full w-24 h-24"}},[n("span",{staticClass:"text-xl"},[t._v("JO")])]),t._v(" "),n("Avatar",{staticClass:"placeholder",attrs:{classes:"bg-neutral-focus text-neutral-content rounded-full w-16 h-16"}},[n("span",[t._v("MX")])]),t._v(" "),n("Avatar",{staticClass:"placeholder",attrs:{classes:"bg-neutral-focus text-neutral-content rounded-full w-10 h-10"}},[n("span",[t._v("AA")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(412).default,Avatar:n(423).default,Wrapper:n(411).default})}}]);