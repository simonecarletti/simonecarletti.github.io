(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact~21833f8f"],{"07ee":function(t,e,a){},"83d0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"AppGridLayout grid",attrs:{justify:"center",align:"start"}},[a("v-col",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12 pa-0 grid-title"}},[a("h1",{staticClass:"text-h1 grid-title"},[t._v(t._s(t.title))])])],1),a("v-row",{staticClass:"grid-item-list",attrs:{"no-gutters":t.noGutters}},t._l(t.elements,(function(e,n){return a("v-col",{key:n,staticClass:"grid-item",class:{"grid-item-padding":!t.padless,"min-height-present":t.minHeightPresent},attrs:{cols:"12",sm:n%3?6:12}},[t._t("default",null,{element:e})],2)})),1),t._t("after")],2)],1)},o=[],s={name:"AppGridLayout",props:{title:{type:String,required:!0},elements:{type:Array,default:function(){return[{}]}},noGutters:{type:Boolean,default:!1},padless:{type:Boolean,default:!1},minHeightPresent:{type:Boolean,default:!0}}},i=s,r=(a("8f14"),a("2877")),l=a("6544"),c=a.n(l),u=a("62ad"),d=a("0fd9"),m=Object(r["a"])(i,n,o,!1,null,"30e8a055",null);e["a"]=m.exports;c()(m,{VCol:u["a"],VRow:d["a"]})},"8f14":function(t,e,a){"use strict";var n=a("07ee"),o=a.n(n);o.a},b8fa:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AppGridLayout",{attrs:{title:t.$t("contact.title"),"no-gutters":""}},[a("div",{staticClass:"red lighten-5 content"},[a("v-row",{attrs:{justify:"end"}},[a("v-col",{staticClass:"text-right"},[a("span",[t._v(t._s(t.$t("contact.emailPresentation")))]),a("div",{staticClass:"text-h3 text-sm-h3 text-h5 email"},[a("a",{attrs:{href:"mailto:"+t.email}},[t._v(" simonecarletti.work"),a("wbr"),t._v("@gmail.com ")])]),a("v-btn",{staticClass:"mt-2 mt-lg-3",attrs:{text:"",icon:"","x-small":""},on:{click:function(e){return t.copyTextToClipboard(t.email)}}},[a("v-icon",[t._v("mdi-content-copy")])],1)],1)],1)],1)])},o=[],s=a("83d0"),i={name:"Contact",components:{AppGridLayout:s["a"]},data:function(){return{email:"simonecarletti.work@gmail.com"}},methods:{copyTextToClipboard:function(t){var e=document.createElement("textarea");e.style.position="fixed",e.style.top=0,e.style.left=0,e.style.width="2em",e.style.height="2em",e.style.padding=0,e.style.border="none",e.style.outline="none",e.style.boxShadow="none",e.style.background="transparent",e.value=t,document.body.appendChild(e),e.focus(),e.select();try{var a=document.execCommand("copy");!a&&this.$store.commit("setSnackbarText","Oops, unable to copy"),this.$store.commit("setSnackbarStatus",!0)}catch(n){this.$store.commit("setSnackbarText","Oops, unable to copy")}document.body.removeChild(e)}}},r=i,l=(a("f165"),a("2877")),c=a("6544"),u=a.n(c),d=a("8336"),m=a("62ad"),p=a("132d"),f=a("0fd9"),y=Object(l["a"])(r,n,o,!1,null,"4d42297c",null);e["default"]=y.exports;u()(y,{VBtn:d["a"],VCol:m["a"],VIcon:p["a"],VRow:f["a"]})},f165:function(t,e,a){"use strict";var n=a("f283"),o=a.n(n);o.a},f283:function(t,e,a){}}]);