(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{603:function(t,e,r){"use strict";r(284);var n=r(285);e.a=Object(n.a)("flex")},604:function(t,e,r){"use strict";var n=r(3),o=(r(47),r(67),r(286),r(12),r(11),r(56),r(101),r(13),r(10),r(16),r(17),r(6)),l=r(111),c=r(134);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},719:function(t,e,r){var content=r(753);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("5e01579e",content,!0,{sourceMap:!1})},752:function(t,e,r){"use strict";r(719)},753:function(t,e,r){var n=r(19)(!1);n.push([t.i,".logo[data-v-42250d44]{max-width:180px;margin:0 auto;text-align:center}",""]),t.exports=n},875:function(t,e,r){"use strict";r.r(e);var n=r(32),o=(r(95),{layout:"auth",middleware:"guest",data:function(){return{form:{username:"",password:"",language:"en",app_name:"E-RESERVATION"},defaultForm:{username:"",password:"",language:"en",app_name:"E-RESERVATION"},appName:"E-RESERVATION",select:null,show:!1,loading:!1,checkbox:null,loadModal:!1,eye:!0,remember:!1,busy:!1,message:"",error:!1,apps:[]}},created:function(){this.getApps()},methods:{getApps:function(){var t=this;this.$axios.get("/api/apps").then((function(e){t.apps=e.data.data.rows}))},clear:function(){this.form=Object.assign({},this.defaultForm)},login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$auth.loginWith("local",{data:t.form});case 4:r=e.sent,t.loading=!1,t.$auth.$storage.setLocalStorage("app.default_name",t.form.app_name),r.data.auth.token||t.$swal({type:"error",title:r.data.auth.MessageTitle,text:r.data.auth.Message}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),void 0!==e.t0.response&&("Error"!==e.t0.response.data.status&&"Error"!==e.t0.response.data.exception||t.$swal({type:"error",title:"Error",text:e.t0.response.data.message})),t.loading=!1;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()}}}),l=(r(752),r(65)),c=r(83),d=r.n(c),f=r(108),h=r(126),m=r(52),v=r(390),w=r(579),x=r(603),_=r(604),y=r(132),O=r(265),V=r(392),E=r(282),j=r(191),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{"no-gutters":"",align:"center","align-content":"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"4",md:"4",lg:"4",xl:"3","align-self":"center"}},[n("v-form",{nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}}},[n("v-card",{staticClass:"mt-3",attrs:{outlined:"",elevation:"0"}},[n("v-card-title",{attrs:{"primary-title":""}},[t.loading?[n("v-progress-linear",{staticClass:"mb-4",attrs:{"background-color":"green lighten-3",color:"green lighten-1",height:"10",indeterminate:""}})]:t._e(),t._v(" "),n("img",{staticClass:"align-items-center justify-center logo",attrs:{src:r(137),alt:"Logo"}})],2),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-flex",{staticClass:"mb-4",attrs:{xs12:""}},[n("v-text-field",{attrs:{readonly:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.app_name,callback:function(e){t.$set(t.form,"app_name",e)},expression:"form.app_name"}})],1),t._v(" "),n("v-flex",{staticClass:"mb-4",attrs:{xs12:""}},[n("v-text-field",{attrs:{outlined:"",dense:"",label:"Username",required:"","hide-details":"auto"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),n("v-flex",{staticClass:"mb-1",attrs:{xs12:""}},[n("v-text-field",{attrs:{"append-icon":t.show?"mdi-eye-off":"mdi-eye",type:t.show?"text":"password",outlined:"",dense:"",label:"Password",required:"","hide-details":"auto"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),t._v(" "),n("v-card-actions",[n("v-flex",{staticClass:"text-right",attrs:{xs12:""}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{small:"",text:"",color:"red"},on:{click:t.clear}},[t._v("clear")]),t._v(" "),n("v-btn",{attrs:{color:"success",small:"",loading:t.loading},on:{click:t.login}},[t._v("\n              Login\n              "),n("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-login-variant ")])],1)],1)],1)],1),t._v(" "),t.error?n("div",{staticClass:"red darken-2 text-xs-center pa-1"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.message))])]):t._e()],1)],1)],1)}),[],!1,null,"42250d44",null);e.default=component.exports;d()(component,{VBtn:f.a,VCard:h.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VCol:v.a,VDivider:w.a,VFlex:x.a,VForm:_.a,VIcon:y.a,VProgressLinear:O.a,VRow:V.a,VSpacer:E.a,VTextField:j.a})}}]);