(window.webpackJsonp=window.webpackJsonp||[]).push([[70,9,11,44],{402:function(t,e,n){var r=n(18),l="["+n(403)+"]",o=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},403:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},405:function(t,e,n){"use strict";var r=n(10),l=n(4),o=n(80),c=n(14),d=n(12),m=n(35),h=n(159),f=n(58),v=n(5),k=n(60),_=n(59).f,C=n(25).f,y=n(13).f,w=n(402).trim,x="Number",A=l.Number,S=A.prototype,T=m(k(S))==x,E=function(t){var e,n,r,l,o,c,d,code,m=f(t,!1);if("string"==typeof m&&m.length>2)if(43===(e=(m=w(m)).charCodeAt(0))||45===e){if(88===(n=m.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+m}for(c=(o=m.slice(2)).length,d=0;d<c;d++)if((code=o.charCodeAt(d))<48||code>l)return NaN;return parseInt(o,r)}return+m};if(o(x,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var N,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(T?v((function(){S.valueOf.call(n)})):m(n)!=x)?h(new A(E(e)),n,O):E(e)},W=r?_(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;W.length>I;I++)d(A,N=W[I])&&!d(O,N)&&y(O,N,C(A,N));O.prototype=S,S.constructor=O,c(l,x,O)}},406:function(t,e,n){"use strict";n.r(e);n(37),n(405),n(26),n(36),n(81),n(111),n(45),n(47),n(160),n(61),n(158),n(82),n(46);var r={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){n(408)},408:function(t,e,n){"use strict";var r=n(2),l=n(18),o=n(83),c=n(84),d=n(161),m=n(3),h=n(21),f=m("replace"),v=RegExp.prototype,k=Math.max,_=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,m,C,y,w,x,A,S=l(this),T=0,E=0,N="";if(null!=t){if((n=o(t))&&!~String(l("flags"in v?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=t[f]))return r.call(t,S,e);if(h&&n)return String(S).replace(t,e)}for(m=String(S),C=String(t),(y="function"==typeof e)||(e=String(e)),w=C.length,x=k(1,w),T=_(m,C,0);-1!==T;)A=y?String(e(C,T,m)):d(C,m,T,[],void 0,e),N+=m.slice(E,T)+A,E=T+w,T=_(m,C,T+x);return E<m.length&&(N+=m.slice(E)),N}})},409:function(t,e,n){"use strict";var r=n(2),l=n(402).trim;r({target:"String",proto:!0,forced:n(410)("trim")},{trim:function(){return l(this)}})},410:function(t,e,n){var r=n(5),l=n(403);t.exports=function(t){return r((function(){return!!l[t]()||"​᠎"!="​᠎"[t]()||l[t].name!==t}))}},411:function(t,e,n){"use strict";n.r(e);n(407),n(409),n(111);var r={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var r,l=new Array(1+n++).join("  "),o=new Array(n-1).join("  "),i=0;i<e.children.length;i++)r=document.createTextNode("\n"+l),e.insertBefore(r,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(r=document.createTextNode("\n"+o),e.appendChild(r));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(406).default})},412:function(t,e,n){"use strict";n.r(e);var r={props:["data"]},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overflow-x-auto mt-6"},[n("table",{staticClass:"table table-compact w-full"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,r){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-success w-20"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,r){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-info w-20"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"text-xl font-bold mt-6"},[t._v("Examples")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},475:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"daisyUI — Tailwind CSS mask component",meta:[{hid:"description",name:"description",content:"Tailwind CSS image mask component - Tailwind CSS image mask examples"}]}}},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"mask",desc:"Masks the content with shape"}],utilities:[{class:"mask-squircle",desc:"Applies `squircle` shape"},{class:"mask-heart",desc:"Applies `heart` shape"},{class:"mask-hexagon",desc:"Applies `hexagon` shape"},{class:"mask-hexagon-2",desc:"Applies `hexagon` alternative shape"},{class:"mask-decagon",desc:"Applies `decagon` shape"},{class:"mask-pentagon",desc:"Applies `pentagon` shape"},{class:"mask-diamond",desc:"Applies `diamond` shape"},{class:"mask-square",desc:"Applies `square` shape"},{class:"mask-circle",desc:"Applies `circle` shape"},{class:"mask-parallelogram",desc:"Applies `parallelogram` shape"},{class:"mask-parallelogram-2",desc:"Applies `parallelogram` alternative shape"},{class:"mask-parallelogram-3",desc:"Applies `parallelogram` alternative shape"},{class:"mask-parallelogram-4",desc:"Applies `parallelogram` alternative shape"},{class:"mask-star",desc:"Applies `star` shape"},{class:"mask-star-2",desc:"Applies `star` alternative shape"},{class:"mask-triangle",desc:"Applies `triangle` shape"},{class:"mask-triangle-2",desc:"Applies `triangle` alternative shape"},{class:"mask-triangle-3",desc:"Applies `triangle` alternative shape"},{class:"mask-triangle-4",desc:"Applies `triangle` alternative shape"}]}}}),t._v(" "),n("Wrapper",{attrs:{title:"mask-squircle"}},[n("img",{staticClass:"mask mask-squircle",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-heart"}},[n("img",{staticClass:"mask mask-heart",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-hexagon"}},[n("img",{staticClass:"mask mask-hexagon",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-hexagon-2"}},[n("img",{staticClass:"mask mask-hexagon-2",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-decagon"}},[n("img",{staticClass:"mask mask-decagon",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-pentagon"}},[n("img",{staticClass:"mask mask-pentagon",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-diamond"}},[n("img",{staticClass:"mask mask-diamond",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-square"}},[n("img",{staticClass:"mask mask-square",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-circle"}},[n("img",{staticClass:"mask mask-circle",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-parallelogram"}},[n("img",{staticClass:"mask mask-parallelogram",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-parallelogram-2"}},[n("img",{staticClass:"mask mask-parallelogram-2",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-parallelogram-3"}},[n("img",{staticClass:"mask mask-parallelogram-3",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-parallelogram-4"}},[n("img",{staticClass:"mask mask-parallelogram-4",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-star"}},[n("img",{staticClass:"mask mask-star",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-star-2"}},[n("img",{staticClass:"mask mask-star-2",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-triangle"}},[n("img",{staticClass:"mask mask-triangle",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-triangle-2"}},[n("img",{staticClass:"mask mask-triangle-2",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-triangle-3"}},[n("img",{staticClass:"mask mask-triangle-3",attrs:{src:"https://picsum.photos/id/1005/200/200"}})]),t._v(" "),n("Wrapper",{attrs:{title:"mask-triangle-4"}},[n("img",{staticClass:"mask mask-triangle-4",attrs:{src:"https://picsum.photos/id/1005/200/200"}})])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(412).default,Wrapper:n(411).default})}}]);