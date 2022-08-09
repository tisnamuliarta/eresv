(window.webpackJsonp=window.webpackJsonp||[]).push([[87,21],{601:function(t,e,r){"use strict";r(284);var o=r(285);e.a=Object(o.a)("layout")},603:function(t,e,r){"use strict";r(284);var o=r(285);e.a=Object(o.a)("flex")},604:function(t,e,r){"use strict";var o=r(3),n=(r(47),r(67),r(286),r(12),r(11),r(56),r(101),r(13),r(10),r(16),r(17),r(6)),l=r(111),c=r(134);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},608:function(t,e,r){"use strict";r.r(e);var o={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},n=r(65),l=r(83),c=r.n(l),d=r(108),f=r(126),m=r(52),h=r(587),v=r(283),y=r(579),_=r(132),x=r(282),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[r("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pl-0 pr-0"},[r("v-container",{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VContainer:h.a,VDialog:v.a,VDivider:y.a,VIcon:_.a,VSpacer:x.a})},738:function(t,e,r){"use strict";r.r(e);r(56);var o=r(310),n={name:"FormTask",components:{TiptapVuetify:o.p},props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,submitLoad:!1,form:this.formData,statusProcessing:"insert",itemSubCategoy:[],extensions:[o.g,o.a,o.k,o.r,o.o,o.j,o.l,o.c,o.m,o.i,[o.f,{options:{levels:[1,2,3]}}],o.b,o.k,o.d,o.h,o.n,o.e]}},methods:{selectSubCategory:function(){var t=this,e=this.form.department;this.$axios.get("/api/master/department-sub-category/1",{params:{category:e}}).then((function(e){t.$auth.$storage.setState("subCategory",e.data.data),t.itemSubCategoy=t.$auth.$storage.getState("subCategory")}))},returnData:function(data){this.itemSubCategoy=data},newData:function(){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem)},editItem:function(t){this.form=Object.assign({},t),this.statusProcessing="update",this.$refs.dialogForm.openDialog()},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},save:function(){var form=this.form,t=this.statusProcessing,data={form:form,status:t};"insert"===t?(this.store("post","/api/tasks/task",data),this.submitLoad=!1):"update"===t&&(this.store("put","/api/tasks/task/"+this.form.id,data),this.submitLoad=!1)},getDataFromApi:function(){},store:function(t,e,data){var r=this,o=this;o.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){r.submitLoad=!1,r.$refs.dialogForm.closeDialog(),r.$emit("getDataFromApi")})).catch((function(t){r.$swal({type:"error",title:"Error",text:t.response.data.message}),o.submitLoad=!1}))}}},l=r(65),c=r(83),d=r.n(c),f=r(108),m=r(603),h=r(604),v=r(132),y=r(601),_=r(613),x=r(190),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("DialogForm",{ref:"dialogForm",attrs:{"max-width":"800px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[r("v-form",{staticClass:"pt-2"},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[r("v-select",{attrs:{items:t.$auth.$storage.getLocalStorage("departments"),label:"Department",placeholder:"Department",outlined:"",dense:"","hide-details":"auto"},on:{change:function(e){return t.selectSubCategory()}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[r("v-btn",{attrs:{small:"",icon:""}},[r("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.formMaster.openForm("/api/products/category","Department","")}}},[t._v("\n                        mdi-arrow-right-bold\n                      ")])],1)]},proxy:!0}]),model:{value:t.form.department,callback:function(e){t.$set(t.form,"department",e)},expression:"form.department"}})],1),t._v(" "),r("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[r("v-select",{attrs:{items:t.itemSubCategoy,label:"Sub category",placeholder:"Sub category",outlined:"",dense:"","hide-details":"auto"},scopedSlots:t._u([{key:"append-outer",fn:function(){return[r("v-btn",{attrs:{small:"",icon:""}},[r("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.formMaster.openForm("/api/master/department-sub-category","Sub category "+t.form.department,t.form.department)}}},[t._v("\n                        mdi-arrow-right-bold\n                      ")])],1)]},proxy:!0}]),model:{value:t.form.sub_category,callback:function(e){t.$set(t.form,"sub_category",e)},expression:"form.sub_category"}})],1),t._v(" "),r("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[r("v-text-field",{attrs:{label:"Title",placeholder:"Title",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[r("span",[t._v("Description")]),t._v(" "),r("client-only",{scopedSlots:t._u([{key:"placeholder",fn:function(){return[t._v(" Loading... ")]},proxy:!0}])},[r("tiptap-vuetify",{attrs:{extensions:t.extensions},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[r("v-btn",{attrs:{color:"blue darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n        "+t._s(t.buttonTitle)+"\n      ")])]},proxy:!0}])}),t._v(" "),r("LazyFormMaster",{ref:"formMaster",on:{returnData:t.returnData}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{DialogForm:r(608).default}),d()(component,{VBtn:f.a,VFlex:m.a,VForm:h.a,VIcon:v.a,VLayout:y.a,VSelect:_.a,VTextField:x.a})}}]);