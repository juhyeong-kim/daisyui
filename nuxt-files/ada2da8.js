(window.webpackJsonp=window.webpackJsonp||[]).push([[51,6,9,11,44],{402:function(t,e,n){var o=n(18),l="["+n(403)+"]",r=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},403:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},404:function(t,e,n){"use strict";n.r(e);var o={props:{classes:String}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(404).default})},405:function(t,e,n){"use strict";var o=n(10),l=n(4),r=n(80),c=n(14),d=n(12),v=n(35),f=n(159),h=n(58),_=n(5),m=n(60),C=n(59).f,y=n(25).f,w=n(13).f,x=n(402).trim,S="Number",T=l.Number,B=T.prototype,E=v(m(B))==S,I=function(t){var e,n,o,l,r,c,d,code,v=h(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=x(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+v}for(c=(r=v.slice(2)).length,d=0;d<c;d++)if((code=r.charCodeAt(d))<48||code>l)return NaN;return parseInt(r,o)}return+v};if(r(S,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var N,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(E?_((function(){B.valueOf.call(n)})):v(n)!=S)?f(new T(I(e)),n,k):I(e)},O=o?C(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;O.length>A;A++)d(T,N=O[A])&&!d(k,N)&&w(k,N,y(T,N));k.prototype=B,B.constructor=k,c(l,S,k)}},406:function(t,e,n){"use strict";n.r(e);n(37),n(405),n(26),n(36),n(81),n(111),n(45),n(47),n(160),n(61),n(158),n(82),n(46);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){n(408)},408:function(t,e,n){"use strict";var o=n(2),l=n(18),r=n(83),c=n(84),d=n(161),v=n(3),f=n(21),h=v("replace"),_=RegExp.prototype,m=Math.max,C=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};o({target:"String",proto:!0},{replaceAll:function(t,e){var n,o,v,y,w,x,S,T,B=l(this),E=0,I=0,N="";if(null!=t){if((n=r(t))&&!~String(l("flags"in _?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(o=t[h]))return o.call(t,B,e);if(f&&n)return String(B).replace(t,e)}for(v=String(B),y=String(t),(w="function"==typeof e)||(e=String(e)),x=y.length,S=m(1,x),E=C(v,y,0);-1!==E;)T=w?String(e(y,E,v)):d(y,v,E,[],void 0,e),N+=v.slice(I,E)+T,I=E+x,E=C(v,y,E+S);return I<v.length&&(N+=v.slice(I)),N}})},409:function(t,e,n){"use strict";var o=n(2),l=n(402).trim;o({target:"String",proto:!0,forced:n(410)("trim")},{trim:function(){return l(this)}})},410:function(t,e,n){var o=n(5),l=n(403);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!="​᠎"[t]()||l[t].name!==t}))}},411:function(t,e,n){"use strict";n.r(e);n(407),n(409),n(111);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var o,l=new Array(1+n++).join("  "),r=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+l),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+r),e.appendChild(o));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(406).default})},412:function(t,e,n){"use strict";n.r(e);var o={props:["data"]},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overflow-x-auto mt-6"},[n("table",{staticClass:"table table-compact w-full"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,o){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-success w-20"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,o){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-info w-20"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"text-xl font-bold mt-6"},[t._v("Examples")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},463:function(t,e,n){"use strict";n.r(e);var o={head:function(){return{title:"daisyUI — Tailwind CSS button group component",meta:[{hid:"description",name:"description",content:"Tailwind CSS button group component - Tailwind CSS button group examples"}]}}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"btn-group",desc:"Container for grouping multiple buttons"}]}}}),t._v(" "),n("Wrapper",{attrs:{classes:"flex items-start flex-col space-y-2",title:"button group"}},[n("div",{staticClass:"btn-group"},[n("Button",{staticClass:"btn-lg btn-active"},[t._v("Large")]),t._v(" "),n("Button",{staticClass:"btn-lg"},[t._v("Large")]),t._v(" "),n("Button",{staticClass:"btn-lg"},[t._v("Large")]),t._v(" "),n("Button",{staticClass:"btn-lg"},[n("Icon",{staticClass:"inline-block w-4 stroke-current",attrs:{glyph:"dots"}})],1)],1),t._v(" "),n("div",{staticClass:"btn-group"},[n("Button",{staticClass:"btn-active"},[t._v("Normal")]),t._v(" "),n("Button",{},[t._v("Normal")]),t._v(" "),n("Button",{},[t._v("Normal")]),t._v(" "),n("Button",{},[n("Icon",{staticClass:"inline-block w-4 stroke-current",attrs:{glyph:"dots"}})],1)],1),t._v(" "),n("div",{staticClass:"btn-group"},[n("Button",{staticClass:"btn-sm btn-active"},[t._v("Small")]),t._v(" "),n("Button",{staticClass:"btn-sm"},[t._v("Small")]),t._v(" "),n("Button",{staticClass:"btn-sm"},[t._v("Small")]),t._v(" "),n("Button",{staticClass:"btn-sm"},[n("Icon",{staticClass:"inline-block w-4 stroke-current",attrs:{glyph:"dots"}})],1)],1),t._v(" "),n("div",{staticClass:"btn-group"},[n("Button",{staticClass:"btn-xs btn-active"},[t._v("Tiny")]),t._v(" "),n("Button",{staticClass:"btn-xs"},[t._v("Tiny")]),t._v(" "),n("Button",{staticClass:"btn-xs"},[t._v("Tiny")]),t._v(" "),n("Button",{staticClass:"btn-xs"},[n("Icon",{staticClass:"inline-block w-4 stroke-current",attrs:{glyph:"dots"}})],1)],1)]),t._v(" "),n("Wrapper",{attrs:{classes:"flex items-start flex-col space-y-2",title:"button group outline"}},[n("div",{staticClass:"btn-group"},[n("Button",{staticClass:"btn-outline btn-lg btn-active"},[t._v("Large")]),t._v(" "),n("Button",{staticClass:"btn-outline btn-lg"},[t._v("Large")]),t._v(" "),n("Button",{staticClass:"btn-outline btn-lg"},[t._v("Large")]),t._v(" "),n("Button",{staticClass:"btn-outline btn-lg"},[n("Icon",{staticClass:"inline-block w-4 stroke-current",attrs:{glyph:"dots"}})],1)],1),t._v(" "),n("div",{staticClass:"btn-group"},[n("Button",{staticClass:"btn-outline btn-active"},[t._v("Normal")]),t._v(" "),n("Button",{staticClass:"btn-outline"},[t._v("Normal")]),t._v(" "),n("Button",{staticClass:"btn-outline"},[t._v("Normal")]),t._v(" "),n("Button",{staticClass:"btn-outline"},[n("Icon",{staticClass:"inline-block w-4 stroke-current",attrs:{glyph:"dots"}})],1)],1),t._v(" "),n("div",{staticClass:"btn-group"},[n("Button",{staticClass:"btn-outline btn-sm btn-active"},[t._v("Small")]),t._v(" "),n("Button",{staticClass:"btn-outline btn-sm"},[t._v("Small")]),t._v(" "),n("Button",{staticClass:"btn-outline btn-sm"},[t._v("Small")]),t._v(" "),n("Button",{staticClass:"btn-outline btn-sm"},[n("Icon",{staticClass:"inline-block w-4 stroke-current",attrs:{glyph:"dots"}})],1)],1),t._v(" "),n("div",{staticClass:"btn-group"},[n("Button",{staticClass:"btn-outline btn-xs btn-active"},[t._v("Tiny")]),t._v(" "),n("Button",{staticClass:"btn-outline btn-xs"},[t._v("Tiny")]),t._v(" "),n("Button",{staticClass:"btn-outline btn-xs"},[t._v("Tiny")]),t._v(" "),n("Button",{staticClass:"btn-outline btn-xs"},[n("Icon",{staticClass:"inline-block w-4 stroke-current",attrs:{glyph:"dots"}})],1)],1)]),t._v(" "),n("Wrapper",{attrs:{classes:"flex items-start flex-col space-y-2",title:"button group with radio buttons"}},[n("div",{staticClass:"btn-group"},[n("input",{staticClass:"btn",attrs:{type:"radio",name:"options",id:"option1","data-title":"1"}}),t._v(" "),n("input",{staticClass:"btn",attrs:{type:"radio",name:"options",id:"option2","data-title":"2",checked:""}}),t._v(" "),n("input",{staticClass:"btn",attrs:{type:"radio",name:"options",id:"option3","data-title":"3"}}),t._v(" "),n("input",{staticClass:"btn",attrs:{type:"radio",name:"options",id:"option4","data-title":"4"}}),t._v(" "),n("input",{staticClass:"btn",attrs:{type:"radio",name:"options",id:"option5","data-title":"5"}})])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(412).default,Button:n(404).default,Icon:n(162).default,Wrapper:n(411).default,Input:n(112).default})}}]);