(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70f0875e"],{"166a":function(t,e,i){},"26e9":function(t,e,i){"use strict";var n=i("23e7"),s=i("e8b5"),r=[].reverse,a=[1,2];n({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),r.call(this)}})},3408:function(t,e,i){},"3ad0":function(t,e,i){},5012:function(t,e,i){},"61d2":function(t,e,i){},"899c":function(t,e,i){},"9d26":function(t,e,i){"use strict";var n=i("132d");e["a"]=n["a"]},a434:function(t,e,i){"use strict";var n=i("23e7"),s=i("23cb"),r=i("a691"),a=i("50c4"),o=i("7b0b"),l=i("65f0"),c=i("8418"),u=i("1dde"),h=Math.max,d=Math.min,p=9007199254740991,f="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,e){var i,n,u,v,m,b,g=o(this),y=a(g.length),O=s(t,y),j=arguments.length;if(0===j?i=n=0:1===j?(i=0,n=y-O):(i=j-2,n=d(h(r(e),0),y-O)),y+i-n>p)throw TypeError(f);for(u=l(g,n),v=0;v<n;v++)m=O+v,m in g&&c(u,v,g[m]);if(u.length=n,i<n){for(v=O;v<y-n;v++)m=v+n,b=v+i,m in g?g[b]=g[m]:delete g[b];for(v=y;v>y-n+i;v--)delete g[v-1]}else if(i>n)for(v=y-n;v>O;v--)m=v+n-1,b=v+i-1,m in g?g[b]=g[m]:delete g[b];for(v=0;v<i;v++)g[v+O]=arguments[v+2];return g.length=y-n+i,u}})},c740:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").findIndex,r=i("44d2"),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)},c93c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("PageWithText",{attrs:{title:"Contacts"},scopedSlots:t._u([{key:"content",fn:function(){return[i("div",[i("v-list",t._l(t.items,(function(e,n){return i("v-list-item",{key:n,on:{click:function(i){return t.goTo(e.url)}}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)]},proxy:!0}])})],1)},s=[],r=i("4127"),a={name:"contacts",components:{PageWithText:r["a"]},data:function(){return{items:[{text:"iostreet@gmail.com",icon:"mdi-email",url:"mailto:iostreet@gmail.com"},{text:"@iostreet",icon:"mdi-instagram",url:"https://www.instagram.com/iostreet/"},{text:"@simone_carletti",icon:"mdi-instagram",url:"https://www.instagram.com/simone_carletti/"}]}},methods:{goTo:function(t){window.open(t)}}},o=a,l=(i("f689"),i("2877")),c=i("6544"),u=i.n(c),h=i("132d"),d=(i("a4d3"),i("e01a"),i("d28b"),i("4de4"),i("c740"),i("0481"),i("4160"),i("a434"),i("4069"),i("e439"),i("dbb4"),i("b64b"),i("d3b7"),i("3ca3"),i("159b"),i("ddb0"),i("2fa7")),p=(i("3ad0"),i("8dd9"));function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(i,!0).forEach((function(e){Object(d["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var m=p["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,shaped:Boolean,subheader:Boolean,threeLine:Boolean,tile:{type:Boolean,default:!0},twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return v({},p["a"].options.computed.classes.call(this),{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--shaped":this.shaped,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e=!0,i=!1,n=void 0;try{for(var s,r=this.groups[Symbol.iterator]();!(e=(s=r.next()).done);e=!0){var a=s.value;a.toggle(t)}}catch(o){i=!0,n=o}finally{try{e||null==r.return||r.return()}finally{if(i)throw n}}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:v({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t("div",this.setBackgroundColor(this.color,e),[this.$slots.default])}}),b=(i("61d2"),i("a9ad")),g=i("1c87"),y=i("4e82"),O=i("7560"),j=i("f2e7"),w=i("5607"),I=i("80d2"),P=i("d9bd"),x=i("58df");function C(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?C(i,!0).forEach((function(e){Object(d["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):C(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var k=Object(x["a"])(b["a"],g["a"],O["a"],Object(y["a"])("listItemGroup"),Object(j["b"])("inputValue")),A=k.extend().extend({name:"v-list-item",directives:{Ripple:w["a"]},inheritAttrs:!1,inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return _({"v-list-item":!0},g["a"].options.computed.classes.call(this),{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(g["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(P["d"])("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=_({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="listitem",t["aria-selected"]=String(this.isActive)):this.isInMenu?t.role=this.isClickable?"menuitem":void 0:this.isInList&&(t.role="listitem")),t}},render:function(t){var e=this,i=this.generateRouteLink(),n=i.tag,s=i.data;s.attrs=_({},s.attrs,{},this.genAttrs()),s.on=_({},s.on,{click:this.click,keydown:function(t){t.keyCode===I["k"].enter&&e.click(t),e.$emit("keydown",t)}});var r=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return n=this.inactive?"div":n,t(n,this.setTextColor(this.color,s),r)}}),V=(i("ac1f"),i("466d"),i("db42"),i("9d26")),$=(i("498a"),i("2b0e")),S=$["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,n=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,n)}}),B=i("7e2b"),D=$["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(P["d"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent?t:void 0}}}),E=i("3206"),L=i("0789");function M(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function z(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?M(i,!0).forEach((function(e){Object(d["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):M(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var G=Object(x["a"])(B["a"],D,b["a"],Object(E["a"])("list"),j["a"]),T=(G.extend().extend({name:"v-list-group",directives:{ripple:w["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(V["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(S,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(A,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(d["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:z({},this.listeners$,{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){return this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},this.showLazyContent([this.$createElement("div",this.$slots.default)]))},genPrependIcon:function(){var t=this.prependIcon?this.prependIcon:!!this.subGroup&&"$subgroup";return t||this.$slots.prependIcon?this.$createElement(S,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,i=this._uid===t;i&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=i}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(L["a"],[this.genItems()])])}}),i("899c"),i("7db0"),i("caad"),i("c975"),i("26e9"),i("fb6a"),i("a9e3"),i("2532"),i("166a"),i("a452"));function N(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function R(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?N(i,!0).forEach((function(e){Object(d["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):N(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var W=Object(x["a"])(T["a"],O["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return R({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(P["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});W.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}});function H(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function J(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?H(i,!0).forEach((function(e){Object(d["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):H(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}Object(x["a"])(W,b["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return J({},W.options.computed.classes.call(this),{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,J({},W.options.methods.genData.call(this),{attrs:{role:"listbox"}}))}}}),$["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var i=e.data,n=e.children,s=void 0===n?[]:n;i.staticClass=i.staticClass?"v-list-item__action ".concat(i.staticClass):"v-list-item__action";var r=s.filter((function(t){return!1===t.isComment&&" "!==t.text}));return r.length>1&&(i.staticClass+=" v-list-item__action--stack"),t("div",i,s)}}),i("3408");var q=i("24b2");function F(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function K(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?F(i,!0).forEach((function(e){Object(d["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):F(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var Q=Object(x["a"])(b["a"],q["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes:function(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles:function(){return K({height:Object(I["d"])(this.size),minWidth:Object(I["d"])(this.size),width:Object(I["d"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),U=Q;function X(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function Y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?X(i,!0).forEach((function(e){Object(d["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):X(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}U.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Y({"v-list-item__avatar--horizontal":this.horizontal},U.options.computed.classes.call(this),{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=U.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}}),Object(I["f"])("v-list-item__action-text","span");var Z=Object(I["f"])("v-list-item__content","div"),tt=Object(I["f"])("v-list-item__title","div"),et=(Object(I["f"])("v-list-item__subtitle","div"),Object(l["a"])(o,n,s,!1,null,"47ecc11c",null));e["default"]=et.exports;u()(et,{VIcon:h["a"],VList:m,VListItem:A,VListItemContent:Z,VListItemIcon:S,VListItemTitle:tt})},db42:function(t,e,i){},f689:function(t,e,i){"use strict";var n=i("5012"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-70f0875e-legacy.ef0a506e.js.map