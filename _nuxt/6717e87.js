(window.webpackJsonp=window.webpackJsonp||[]).push([[28,21],{608:function(t,e,o){"use strict";o.r(e);var n={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},r=o(65),l=o(83),c=o.n(l),m=o(108),d=o(126),f=o(52),h=o(587),v=o(283),y=o(579),_=o(132),x=o(282),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[o("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",{staticClass:"pl-0 pr-0"},[o("v-container",{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:m.a,VCard:d.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VContainer:h.a,VDialog:v.a,VDivider:y.a,VIcon:_.a,VSpacer:x.a})},921:function(t,e,o){"use strict";o.r(e);o(56);var n={name:"FormDocument",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},url:{type:String,default:""},formData:{type:Object,default:function(){return{}}},itemCustomer:{type:Array,default:function(){return[]}}},data:function(){return{buttonKey:1,dialog:!1,submitLoad:!1,form:this.formData,selectedItem:[],documentType:[],itemSubType:[],itemCategory:[],itemBank:[],itemTax:[],items:[],menu:"",statusProcessing:"insert",currentFile:void 0,options:{url:"/backendcore/api/attachment",timeout:9e9,thumbnailWidth:50,thumbnailHeight:50,addRemoveLinks:!0,acceptedFiles:"application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getLocalStorage("_token.local")},parallelUploads:1,maxFilesize:1e3,autoProcessQueue:!1,autoQueue:!1,file:""}}},mounted:function(){},methods:{newData:function(t,e){this.$refs.dialogForm.openDialog(),this.documentType=t,this.statusProcessing="insert",this.form=Object.assign({},e),this.changeDocumentType(),this.buttonKey++},changeDocumentType:function(){var t=this;this.$axios.get("/api/document/sub-type/"+this.form.type).then((function(e){t.itemSubType=e.data.data}))},changeIdentify:function(){"NPWP"===this.form.identity_type?(this.form.identity_number="033109851014000",this.form.identity_name="PT INDONESIA MOROWALI INDUSTRIAL PARK"):(this.form.identity_number="-",this.form.identity_name="-")},selectFile:function(t){this.currentFile=t},editItem:function(t,e){this.documentType=e,this.form=Object.assign({},t),this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.changeDocumentType(),this.buttonKey++},returnData:function(data){"Banks"===data.type?this.itemBank=data.item:"Item Unit"===data.type&&(this.itemUnit=data.item)},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},save:function(){var t=this,e=this.statusProcessing,data=this.form;if("insert"===e){var o=this;this.submitLoad=!0;for(var n=new FormData,i=0;i<this.$refs.file.files.length;i++){var r=this.$refs.file.files[i];n.append("files["+i+"]",r)}n.append("data",JSON.stringify(this.form)),this.$axios.post(this.url,n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.$refs.dialogForm.closeDialog(),o.submitLoad=!1,t.$emit("getDataFromApi")})).catch((function(e){t.buttonKey++,t.$swal({type:"error",title:"Error",text:e.response.data.message}),o.submitLoad=!1}))}else"update"===e&&this.store("put",this.url+"/"+this.form.id,data)},store:function(t,e,data){var o=this,n=this;n.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){o.$refs.dialogForm.closeDialog(),o.$emit("getDataFromApi")})).catch((function(t){o.buttonKey++,o.$swal({type:"error",title:"Error",text:t.response.data.message}),n.submitLoad=!1}))},sendingParams:function(t,e,o){o.append("source_id",this.form.temp_id),o.append("type","peruri")},handleError:function(t,e,o){this.$swal({type:"error",title:"Oops...",text:e.message})},reloadAttachment:function(t,e){var o=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(this.$emit("eventCountAttachment",{total:e.data.count,row:this.row}),setTimeout((function(){o.getAttachment()}),300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},deleteFile:function(t){var e=this,o=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&e.$axios.delete("/api/attachment",{params:{id:t.id}}).then((function(t){e.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),o.getAttachment()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))},getAttachment:function(){var t=this;this.showLoadingAttachment=!0;var e=this;this.$axios.get("/api/attachment",{params:{type:"peruri",source_id:e.form.temp_id}}).then((function(t){e.items=t.data.data.rows,e.showLoadingAttachment=!1})).catch((function(e){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Oops...",text:e.response.message})}))}}},r=o(65),l=o(83),c=o.n(l),m=o(615),d=o(108),f=o(387),h=o(869),v=o(587),y=o(870),_=o(604),x=o(580),$=o(264),k=o(260),D=o(389),C=o(613),T=o(190),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("DialogForm",{ref:"dialogForm",attrs:{"max-width":"500px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-form",{staticClass:"pt-0"},[o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{dense:""}},[o("v-col",{staticClass:"mb-1",attrs:{cols:"12",md:"6"}},[o("v-select",{attrs:{items:["PT IMIP","PT SMI"],label:"Company",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),t._v(" "),o("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[o("v-combobox",{attrs:{items:t.itemCustomer,"item-text":"CardName","item-value":"CardName",label:"Customer",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.customer_name,callback:function(e){t.$set(t.form,"customer_name",e)},expression:"form.customer_name"}})],1),t._v(" "),o("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[o("v-select",{attrs:{items:t.documentType,"item-text":"nama","item-value":"nama",label:"Document Type",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},on:{change:t.changeDocumentType},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),o("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[o("v-autocomplete",{attrs:{items:t.itemSubType,"item-text":"name","item-value":"id",label:"Sub Type",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.document_sub_type_id,callback:function(e){t.$set(t.form,"document_sub_type_id",e)},expression:"form.document_sub_type_id"}})],1),t._v(" "),o("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[o("v-select",{attrs:{label:"Identify Type",items:["NPWP","NIK"],outlined:"",dense:"","hide-details":"auto"},on:{change:t.changeIdentify},model:{value:t.form.identity_type,callback:function(e){t.$set(t.form,"identity_type",e)},expression:"form.identity_type"}})],1),t._v(" "),o("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Identify Number",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.identity_number,callback:function(e){t.$set(t.form,"identity_number",e)},expression:"form.identity_number"}})],1),t._v(" "),o("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Identify Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.identity_name,callback:function(e){t.$set(t.form,"identity_name",e)},expression:"form.identity_name"}})],1),t._v(" "),o("v-col",{staticClass:"mb-1",attrs:{cols:"12",md:"6"}},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"Document Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.document_date,callback:function(e){t.$set(t.form,"document_date",e)},expression:"form.document_date"}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.form.document_date,callback:function(e){t.$set(t.form,"document_date",e)},expression:"form.document_date"}})],1)],1),t._v(" "),o("v-col",{staticClass:"mb-1",attrs:{cols:"12",md:"6"}},[o("v-text-field",{attrs:{label:"Location",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.location,callback:function(e){t.$set(t.form,"location",e)},expression:"form.location"}})],1),t._v(" "),o("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Remark",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),t._v(" "),"insert"===t.statusProcessing?o("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[o("input",{ref:"file",staticClass:"form-control",staticStyle:{display:"block !important"},attrs:{type:"file",accept:"application/pdf",multiple:""},on:{change:t.selectFile}})]):t._e()],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[o("v-btn",{key:t.buttonKey,attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{"~click":function(e){return t.save()}}},[t._v("\n        "+t._s(t.buttonTitle)+"\n      ")])]},proxy:!0}])}),t._v(" "),o("v-overlay",{attrs:{value:t.submitLoad}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DialogForm:o(608).default}),c()(component,{VAutocomplete:m.a,VBtn:d.a,VCol:f.a,VCombobox:h.a,VContainer:v.a,VDatePicker:y.a,VForm:_.a,VMenu:x.a,VOverlay:$.a,VProgressCircular:k.a,VRow:D.a,VSelect:C.a,VTextField:T.a})}}]);