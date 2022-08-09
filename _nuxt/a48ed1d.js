(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{597:function(t,e,r){"use strict";r(282);var n=r(283);e.a=Object(n.a)("layout")},599:function(t,e,r){"use strict";r(282);var n=r(283);e.a=Object(n.a)("flex")},600:function(t,e,r){"use strict";var n=r(3),o=(r(46),r(66),r(285),r(12),r(11),r(56),r(99),r(13),r(10),r(16),r(17),r(6)),l=r(109),c=r(133);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},883:function(t,e,r){"use strict";r.r(e);r(43),r(229),r(12),r(56);var n={name:"MasterPaper",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,loadingAddUser:!1,submitLoad:!1,singleSelect:!1,show:!1,dialog:!1,dialogExportUser:!1,message:!1,loading:!0,statusProcessing:"insert",searchItem:"",listDevices:[],privilege:[{id:0,name:"Ordinary User"},{id:14,name:"Administrator"}],search:"",allData:[],itemSearch:[],itemDeviceBrand:[],itemDeviceType:[],itemAccessType:[],itemCompany:[],selected:[],allDevice:[],options:{},dataItem:{},sub_id:{},itemYesNo:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],form:{id:null,name:null,code:null,background:null,is_active:"Y"},defaultItem:{id:null,name:null,code:null,background:null,is_active:"Y"},headers:[{text:"Code",value:"code"},{text:"Name",value:"name"},{text:"Action",value:"actions"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"New Data":"Edit Data"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.getInit()},methods:{getInit:function(){window.details=this},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/master/airport",{params:{options:e.options,searchItem:e.searchItem,search:e.search}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.itemSearch=e.data.data.filter,t.allDevice=e.data.data.all_device})).catch((function(e){t.loading=!1,t.$swal({title:"Error!",text:e.response.data.message,type:"error"})}))},newData:function(){var t=this;this.dialog=!0,setTimeout((function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1}),300),this.statusProcessing="insert"},editItem:function(t){this.statusProcessing="update",this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},t),this.dataItem=t,this.dialog=!0,this.insert=!1},openAttachment:function(t){this.$refs.attachment.openAttachment(t.id,"background",this.$store.state.auth.user.username)},close:function(){var t=this;this.statusProcessing="insert",this.dialog=!1,setTimeout((function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=this,r=this.statusProcessing,form=this.form,data={form:form,status:r};"insert"===r?(this.store("post","/api/master/airport",data,"insert",t),e.submitLoad=!1):"update"===r&&(this.store("put","/api/master/airport/"+this.form.id,data,"update",t),e.submitLoad=!1)},store:function(t,e,data,r){var n=this,o=this;o.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){n.$swal({title:"Success!",text:t.data.message,type:"success"}),o.submitLoad=!1,n.dialog=!1,n.getDataFromApi()})).catch((function(t){o.submitLoad=!1,n.$swal({title:"Error!",text:t.response.data.message,type:"error"})}))}}},o=r(82),l=r(90),c=r.n(l),d=r(107),f=r(124),v=r(55),m=r(583),h=r(867),x=r(281),_=r(574),y=r(599),w=r(600),k=r(131),O=r(597),D=r(609),V=r(280),C=r(187),I=r(72),j=r(132),$=r(567),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",[r("v-flex",{attrs:{sm12:"",md8:"","offset-md-2":""}},[r("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[r("v-toolbar-title",{staticClass:"hidden-xs-only"},[t._v("Master Airport")]),t._v(" "),r("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-form",{attrs:{"d-flex":""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getDataFromApi.apply(null,arguments)}}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{sm5:"",xs6:""}},[r("v-select",{staticClass:"mt-1",attrs:{items:t.itemSearch,label:"Search Type",outlined:"",dense:"","hide-details":"auto"},model:{value:t.searchItem,callback:function(e){t.searchItem=e},expression:"searchItem"}})],1),t._v(" "),r("v-flex",{attrs:{sm1:""}}),t._v(" "),r("v-flex",{staticStyle:{"margin-top":"4px"},attrs:{sm6:"",xs6:""}},[r("v-text-field",{attrs:{label:"search",outlined:"",dense:"","hide-details":"auto"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),t._v(" "),r("v-btn",{attrs:{icon:"",color:"green",dark:""},on:{click:t.newData}},[r("v-icon",[t._v("mdi-plus-circle")])],1),t._v(" "),r("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.getDataFromApi}},[r("v-icon",[t._v("mdi-refresh")])],1)],1),t._v(" "),r("div",{staticClass:"mt-2"},[r("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"body",fn:function(e){var n=e.items;return[r("tbody",t._l(n,(function(e){return r("tr",{key:e.id,staticClass:"test-tr",style:{backgroundColor:e.Color}},[r("td",{staticClass:"text-xs-center"},[t._v(t._s(e.code))]),t._v(" "),r("td",{staticClass:"text-xs-center"},[t._v(t._s(e.name))]),t._v(" "),r("td",{staticClass:"d-flex"},[r("v-tooltip",{staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),o),[r("v-icon",{attrs:{small:""},on:{click:function(r){return t.editItem(e)}}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Edit")])])],1)])})),0)]}},{key:"footer",fn:function(){},proxy:!0}])})],1)],1),t._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",[t._v(t._s(t.formTitle))])]),t._v(" "),r("v-card-text",[r("v-form",[r("v-layout",{attrs:{wrap:""}},[t.message?r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"red darken-2 text-xs-center"},[r("span",{staticClass:"white--text"},[t._v(t._s(t.message))])])]):t._e(),t._v(" "),r("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Code",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1)],1)],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){return t.close()}}},[t._v("\n            Close\n          ")]),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n            Save\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VContainer:m.a,VDataTable:h.a,VDialog:x.a,VDivider:_.a,VFlex:y.a,VForm:w.a,VIcon:k.a,VLayout:O.a,VSelect:D.a,VSpacer:V.a,VTextField:C.a,VToolbar:I.a,VToolbarTitle:j.a,VTooltip:$.a})}}]);