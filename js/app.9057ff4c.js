(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-6852768f":"0f77b3ff","chunk-7144fa4c":"9033bda8","chunk-d1ebbc42":"c7be21f0"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-6852768f":1,"chunk-7144fa4c":1,"chunk-d1ebbc42":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-6852768f":"cfad3d86","chunk-7144fa4c":"016b1d93","chunk-d1ebbc42":"31aa94dc"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],h.parentNode.removeChild(h),n(i)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("19b3"),r=n.n(a);r.a},"0f1a":function(t,e,n){},"19b3":function(t,e,n){},"230e":function(t,e,n){t.exports=n.p+"img/WelcomeImage.6bb06b06.jpg"},"2c23":function(t,e,n){var a={"./0.jpg":"5125","./1.jpg":"98a8","./2.jpg":"593c","./3.jpg":"6800"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="2c23"},"3c56":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"resize",rawName:"v-resize",value:t.updateHeight,expression:"updateHeight"}],staticClass:"WelcomeImage",style:"height: "+t.appHeight+"px"},[a("v-img",{staticClass:"welcomeImg pa-3",attrs:{src:n("230e"),height:t.appHeight,position:t.position,dark:""}},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",[a("v-col",{staticClass:"text-center mb-7",attrs:{cols:"12"}},[t.landingPage?a("h1",{staticClass:"white--text logo noselect"},[t._v(t._s(t.title))]):a("h1",{staticClass:"text px-4 pt-3 noselect"},[t._v(t._s(t.title))])])],1)],1)],1),t.alt?t._e():a("svg",{staticClass:"arrow",staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",viewBox:"0 0 512 512","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:function(e){return t.$emit("scroll")}}},[a("polygon",{attrs:{points:"396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 "}})])],1)},r=[],o=(n("25f0"),{name:"WelcomeImage",props:{height:{type:String,default:""},position:{type:String,default:"center center"},alt:{type:Boolean,default:!1},landingPage:{type:Boolean,default:!1},title:String},data(){return{space:"&nbsp;",appHeight:"100vh"}},methods:{updateHeight(){navigator.maxTouchPoints||"ontouchstart"in document.documentElement||(""===this.height?this.appHeight=window.innerHeight.toString():this.appHeight=this.height)}},created(){(navigator.maxTouchPoints||"ontouchstart"in document.documentElement)&&(""===this.height?this.appHeight=window.innerHeight.toString():this.appHeight=this.height)}}),i=o,s=(n("4373"),n("2877")),c=n("6544"),l=n.n(c),u=n("62ad"),p=n("a523"),h=n("adda"),f=n("0fd9"),d=n("269a"),v=n.n(d),g=n("dc22"),m=Object(s["a"])(i,a,r,!1,null,"2c953909",null);e["a"]=m.exports;l()(m,{VCol:u["a"],VContainer:p["a"],VImg:h["a"],VRow:f["a"]}),v()(m,{Resize:g["a"]})},4373:function(t,e,n){"use strict";var a=n("4608"),r=n.n(a);r.a},4608:function(t,e,n){},5125:function(t,e,n){t.exports=n.p+"img/0.ebc6d884.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{staticClass:"font-weight-medium black white--text"},[n("v-row",{staticClass:"pa-3",attrs:{justify:"space-between",align:"center"}},[n("v-col",{staticClass:"text-center text-md-left"},t._l(t.links,(function(e){return n("v-btn",{key:e.name,attrs:{to:e.url,color:"white",text:""}},[t._v(t._s(e.name))])})),1),t.$vuetify.breakpoint.mdAndUp?n("v-col",{staticClass:"text-right mr-6 font-weight-light body-2",attrs:{md:"auto"}},[t._v(t._s(t.copyright))]):t._e()],1),t.$vuetify.breakpoint.smAndDown?n("v-row",[n("v-col",{staticClass:"text-center font-weight-light body-2 pt-0"},[t._v(t._s(t.copyright))])],1):t._e()],1)],1)},o=[],i={name:"App",data(){return{links:[{name:"Home",url:"/"},{name:"About",url:"/about"},{name:"Contacts",url:"/contacts"}],copyright:"This site is in development, I DO NOT own any of the images"}}},s=i,c=(n("034f"),n("2877")),l=n("6544"),u=n.n(l),p=n("7496"),h=n("8336"),f=n("62ad"),d=n("a523"),v=n("a75b"),g=n("553a"),m=n("0fd9"),b=Object(c["a"])(s,r,o,!1,null,null,null),w=b.exports;u()(b,{VApp:p["a"],VBtn:h["a"],VCol:f["a"],VContainer:d["a"],VContent:v["a"],VFooter:g["a"],VRow:m["a"]});n("e6cf");var y=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}]},[n("v-row",[n("v-col",{staticClass:"pa-0 mt-n3"},[n("WelcomeImage",{attrs:{title:"Simone Carletti",landingPage:""},on:{scroll:function(e){return t.$vuetify.goTo(t.$refs.navbar,t.options)}}})],1)],1),n("v-row",[n("v-col",{staticClass:"pa-0 pt-1 mb-n1",staticStyle:{height:"7vh"}},[n("v-app-bar",{ref:"navbar",style:{opacity:t.navbarOpacity,height:"7vh",transition:"none"},attrs:{flat:"",color:t.showNavbarAtTop?"":"transparent",fixed:t.showNavbarAtTop,scroll:""}},[n("v-toolbar-title",{staticClass:"typewriter noselect"},[t._v("Simone Carletti")]),n("v-spacer"),n("v-btn",{attrs:{text:"",ripple:!1},on:{click:function(e){t.overlay=!t.overlay}}},[n("v-toolbar-title",{staticClass:"typewriter"},[t._v("Menu")])],1)],1)],1)],1),n("div",{staticClass:"tiles",staticStyle:{"min-height":"100vh"}},[n("masonry",{attrs:{cols:{default:3,1100:2,400:1},gutter:{default:"20px",700:"15px"}}},t._l(t.images,(function(e,a){return n("v-img",{key:a,staticClass:"py-2",attrs:{src:e.src,contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})})),1)],1),n("v-btn",{attrs:{icon:"",txt:"",color:"black","x-large":"",ripple:!1,fixed:"",bottom:"",right:""},on:{click:function(e){return t.goTo("https://www.instagram.com/iostreet/")}}},[n("v-icon",[t._v("mdi-instagram")])],1),n("v-overlay",{attrs:{value:t.overlay,color:"white",opacity:"0.91"}},[n("v-container",[n("v-row",{staticClass:"text-right"},[n("v-col",[n("v-btn",{attrs:{text:"",icon:"",fixed:"",top:"",right:"","x-large":"",color:"black"},on:{click:function(e){t.overlay=!t.overlay}}},[n("v-icon",{attrs:{light:""}},[t._v("mdi-close")])],1)],1)],1),n("v-row",{staticClass:"text-center"},[n("v-col",[n("router-link",{staticClass:"black--text link",attrs:{to:"/about"}},[t._v("ABOUT")])],1)],1),n("v-row",[n("v-col",[n("router-link",{staticClass:"black--text link",attrs:{to:"/contacts"}},[t._v("CONTACTS")])],1)],1),n("v-row",{staticClass:"mt-12"},[n("v-col",[n("v-btn",{staticClass:"ma-auto",attrs:{text:"",icon:"","x-large":"",color:"black"}},[n("v-icon",{attrs:{light:""}},[t._v("mdi-instagram")])],1)],1)],1)],1)],1)],1)},k=[],C=(n("e260"),n("ddb0"),n("3c56")),_={name:"home",components:{WelcomeImage:C["a"]},data(){return{images:[],overlay:!1,showNavbarAtTop:!1,lastScrollPosition:0,navbarOpacity:0}},created(){this.importAll(n("2c23"))},methods:{goTo(t){window.open(t)},importAll(t){t.keys().forEach(e=>this.images.push({src:t(e)}))},handleScroll(){var t=window.pageYOffset||document.documentElement.scrollTop;if(!(t<0))if(this.showNavbarAtTop=t>=window.innerHeight,navigator.maxTouchPoints||"ontouchstart"in document.documentElement)this.navbarOpacity=.95;else{var e=-1*((window.innerHeight-t)/(.3*window.innerHeight)-1);e<.95&&(this.navbarOpacity=e)}}},computed:{options(){return{duration:300,offset:0,easing:"easeInOutCubic"}}}},O=_,S=(n("9ae7"),n("40dc")),T=n("132d"),j=n("adda"),V=n("a797"),A=n("490a"),P=n("2fa4"),E=n("2a7f"),H=n("269a"),N=n.n(H),I=n("f977"),B=Object(c["a"])(O,x,k,!1,null,"5d5a390a",null),$=B.exports;u()(B,{VAppBar:S["a"],VBtn:h["a"],VCol:f["a"],VContainer:d["a"],VIcon:T["a"],VImg:j["a"],VOverlay:V["a"],VProgressCircular:A["a"],VRow:m["a"],VSpacer:P["a"],VToolbarTitle:E["a"]}),N()(B,{Scroll:I["b"]}),a["a"].use(y["a"]);var D=[{path:"/",name:"index",component:$},{path:"/about",name:"about",component:()=>Promise.all([n.e("chunk-6852768f"),n.e("chunk-d1ebbc42")]).then(n.bind(null,"f820"))},{path:"/contacts",name:"contacts",component:()=>Promise.all([n.e("chunk-6852768f"),n.e("chunk-7144fa4c")]).then(n.bind(null,"c93c"))},{path:"*",name:"404",redirect:{name:"index"}}],L=new y["a"]({base:"/",routes:D,scrollBehavior(){return{x:0,y:0}}}),M=L,U=n("f309");a["a"].use(U["a"]);var W=new U["a"]({}),R=n("95ae");a["a"].use(R["a"]),a["a"].config.productionTip=!1,new a["a"]({router:M,vuetify:W,render:t=>t(w)}).$mount("#app")},"593c":function(t,e,n){t.exports=n.p+"img/2.04981e71.jpg"},6800:function(t,e,n){t.exports=n.p+"img/3.70e1e212.jpg"},"98a8":function(t,e,n){t.exports=n.p+"img/1.3d2c01b8.jpg"},"9ae7":function(t,e,n){"use strict";var a=n("0f1a"),r=n.n(a);r.a}});
//# sourceMappingURL=app.9057ff4c.js.map