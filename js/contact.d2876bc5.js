(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"0df1":function(t,e,n){},"83d0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"AppGridLayout grid mt-10",attrs:{justify:"center",align:"start"}},[n("v-col",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12 pa-0 grid-title"}},[n("h1",{staticClass:"text-h1 grid-title"},[t._v(t._s(t.title))])])],1),n("v-row",{staticClass:"grid-item-list",attrs:{"no-gutters":t.noGutters}},t._l(t.elements,(function(e,a){return n("v-col",{key:a,staticClass:"grid-item",class:{"grid-item-padding":!t.padless,"min-height-present":t.minHeightPresent},attrs:{cols:"12",sm:a%3?6:12}},[t._t("default",null,{element:e})],2)})),1),t._t("after")],2)],1)},o=[],s={name:"AppGridLayout",props:{title:{type:String,required:!0},elements:{type:Array,default:function(){return[{}]}},noGutters:{type:Boolean,default:!1},padless:{type:Boolean,default:!1},minHeightPresent:{type:Boolean,default:!0}}},i=s,l=(n("b0b9"),n("2877")),r=n("6544"),c=n.n(r),d=n("62ad"),u=n("0fd9"),p=Object(l["a"])(i,a,o,!1,null,"6012ee3e",null);e["a"]=p.exports;c()(p,{VCol:d["a"],VRow:u["a"]})},"88ee":function(t,e,n){"use strict";var a=n("cee9"),o=n.n(a);o.a},b0b9:function(t,e,n){"use strict";var a=n("0df1"),o=n.n(a);o.a},b8fa:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppGridLayout",{attrs:{title:"Contact me","no-gutters":""}},[n("div",{staticClass:"red lighten-5 content"},[n("v-row",{attrs:{justify:"end"}},[n("v-col",{staticClass:"text-right"},[n("span",[t._v("You can send an email to")]),n("div",{staticClass:"text-h3 text-sm-h3 text-h5 email"},[t.$vuetify.breakpoint.mdAndUp?n("v-btn",{staticClass:"mt-n7 mr-1",attrs:{text:"",icon:"","x-small":""},on:{click:function(e){return t.copyTextToClipboard(t.email)}}},[n("v-icon",[t._v("mdi-content-copy")])],1):t._e(),t.$vuetify.breakpoint.mdAndUp?n("span",[t._v(t._s(t.email))]):t._e(),t.$vuetify.breakpoint.mdAndUp?t._e():n("span",[t._v(t._s("simonecarletti.work\n@gmail.com"))])],1),t.$vuetify.breakpoint.mdAndUp?t._e():n("v-btn",{staticClass:"mt-2",attrs:{text:"",icon:"","x-small":""},on:{click:function(e){return t.copyTextToClipboard(t.email)}}},[n("v-icon",[t._v("mdi-content-copy")])],1)],1)],1)],1)])},o=[],s=n("83d0"),i={name:"Contact",components:{AppGridLayout:s["a"]},data:function(){return{email:"simonecarletti.work@gmail.com"}},methods:{copyTextToClipboard:function(t){var e=document.createElement("textarea");e.style.position="fixed",e.style.top=0,e.style.left=0,e.style.width="2em",e.style.height="2em",e.style.padding=0,e.style.border="none",e.style.outline="none",e.style.boxShadow="none",e.style.background="transparent",e.value=t,document.body.appendChild(e),e.focus(),e.select();try{var n=document.execCommand("copy"),a=n?"successful":"unsuccessful";console.log("Copying text command was "+a)}catch(o){console.log("Oops, unable to copy")}document.body.removeChild(e)}}},l=i,r=(n("88ee"),n("2877")),c=n("6544"),d=n.n(c),u=n("8336"),p=n("62ad"),m=n("132d"),f=n("0fd9"),y=Object(r["a"])(l,a,o,!1,null,"0c295228",null);e["default"]=y.exports;d()(y,{VBtn:u["a"],VCol:p["a"],VIcon:m["a"],VRow:f["a"]})},cee9:function(t,e,n){}}]);
//# sourceMappingURL=contact.d2876bc5.js.map