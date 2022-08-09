(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{888:function(t,e,o){"use strict";o.r(e);o(44),o(231),o(56);var n={name:"MasterRole",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,dialogWindow:!1,dialogLoading:!1,statusProcessing:"insert",dialog:!1,message:!1,loading:!0,insertDivision:!0,insert:!0,loadingPermission:!0,allData:[],documentType:[],documentStatus:[],itemSearch:[],selected:[],searchStatus:"draft",searchItem:"",search:"",department:{},form:{},defaultItem:{},options:{},optionDivision:{},headers:[{text:"Approval Name",value:"name"},{text:"Callback",value:"callback"},{text:"Action",value:"ACTIONS",align:"center"}],url:"/api/master/approval"}},head:function(){return{title:"Approval"}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"},batchItems:function(){return["Delete","Duplicate"]}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){},methods:{emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},actions:function(t,e){switch(t){case"Edit":this.editItem(e);break;case"View Files":this.openAttchment(e);break;case"Submit Approval":this.submitDocument(e);break;case"Cancel Approval":this.cancelDocument(e);break;case"Download Document":this.downloadDocument(e);break;case"Delete":this.batchDeleteDocument([e.id]);break;case"Approval Stages":this.$refs.approvalStages.openApprovalStages(e);break;case"Open Editor":this.$refs.formEditor.newData(e.attachment.file_path,e)}},getItemActions:function(t){return"draft"===t.status?["View Files","Open Editor","Submit Approval","Delete"]:"pending"===t.status?["Approval Stages","Cancel Approval"]:"approved"===t.status?["Edit"]:["Edit","Duplicate","Delete"]},getDataFromApi:function(){var t=this;this.loading=!0;this.$axios.get(this.url,{params:{options:this.options}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.defaultItem=Object.assign({},e.data.data.form),t.form=Object.assign({},e.data.data.form),t.documentType=e.data.data.document_type,t.$refs.forms.setDocumentType(t.documentType)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form,this.defaultItem),this.$refs.forms.setDocumentType(this.documentType)},editItem:function(t){this.$refs.forms.editItem(t,"")},close:function(){var t=this;this.dialog=!1,this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},batchActions:function(t){},save:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=this,form=this.form,o=this.statusProcessing;"insert"===o?(this.store("post",this.url,form,"insert",t),e.submitLoad=!1):"update"===o&&(this.store("put",this.url+"/"+this.form.id,form,"update",t),e.submitLoad=!1)},store:function(t,e,data,o){var n=this,r=this;r.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){"Error"===t.data.status?(n.$swal({type:"error",title:"Error",text:t.data.message}),r.submitLoad=!1):(n.dialog=!1,n.message=t.data.message,setTimeout((function(){return n.message=!1}),8e3),n.getDataFromApi())})).catch((function(t){n.$swal({type:"error",title:"Error",text:t.response.data.message}),r.submitLoad=!1}))}}},r=o(65),c=o(83),l=o.n(c),d=o(108),m=o(390),h=o(587),f=o(871),v=o(132),D=o(261),w=o(178),I=o(33),A=o(580),y=o(264),k=o(260),S=o(392),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"mt-0"},[o("v-overlay",{attrs:{value:t.loading}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),o("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"73vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[o("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Approval Rules","new-data-text":"New Approval","show-batch-action":!0,"batch-actions":t.batchItems,"show-search-button":!0,"show-search-data":!0,"show-search-item":!1,"show-document-status":!1},on:{emitData:t.emitData,newData:t.newData,batchActions:t.batchActions}})]},proxy:!0},{key:"item.ACTIONS",fn:function(e){var n=e.item;return[o("v-btn",{staticClass:"font-weight-bold text-right",attrs:{color:"primary",text:"",small:""},on:{click:function(e){return t.actions("Edit",n)}}},[t._v("\n              Edit\n            ")]),t._v(" "),o("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"black",dark:"",icon:""}},"v-btn",r,!1),n),[o("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),o("v-list",t._l(t.getItemActions(n),(function(e,i){return o("v-list-item",{key:i,on:{click:function(o){return t.actions(e,n)}}},[o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e))])],1)],1)})),1)],1)]}},{key:"item.id",fn:function(e){var n=e.item;return[o("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.editItem(n)}}},[t._v("\n              mdi-pencil-circle\n            ")]),t._v(" "),o("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.dialogPermission.openRolePermissions(n,"Role Permissions","role")}}},[t._v("\n              mdi-gate\n            ")])]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),o("LazyMasterFormApproval",{ref:"forms",attrs:{"form-data":t.form,"document-type":t.documentType,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url},on:{getDataFromApi:t.getDataFromApi}}),t._v(" "),t.dialogLoading?o("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:m.a,VContainer:h.a,VDataTable:f.a,VIcon:v.a,VList:D.a,VListItem:w.a,VListItemContent:I.a,VListItemTitle:I.c,VMenu:A.a,VOverlay:y.a,VProgressCircular:k.a,VRow:S.a})}}]);