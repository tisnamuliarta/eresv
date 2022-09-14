(window.webpackJsonp=window.webpackJsonp||[]).push([[92,20],{609:function(t,e,n){"use strict";n.r(e);var o={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},r=n(65),c=n(83),l=n.n(c),d=n(108),m=n(126),h=n(52),f=n(588),v=n(284),w=n(580),D=n(132),x=n(283),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[n("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"pl-0 pr-0"},[n("v-container",{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:m.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VContainer:f.a,VDialog:v.a,VDivider:w.a,VIcon:D.a,VSpacer:x.a})},702:function(t,e,n){"use strict";(function(t){n(657),n(26),n(28),n(39),n(46),n(289),n(57),n(85),n(44),n(231),n(11),n(12);e.a={name:"Account",data:function(){return{totalData:0,editedIndex:-1,loading:!1,dialogLoading:!1,submitLoad:!1,selected:[],allData:[],documentType:[],itemCustomer:[],itemInvoiceType:[],documentStatus:[],itemSearch:[],coordinateData:[],arrayEsign:[],arrayMaterai:[],searchStatus:"All",searchItem:"",search:"",pdfSource:"",form:{},defaultItem:{},defaultAction:"Edit",defaultActionText:"Edit",options:{},headers:[],url:"/api/invoice",page:1,numPages:0,pdfdata:void 0,errors:[],scale:"page-width"}},head:function(){return{title:"Documents"}},computed:{formTitle:function(){return-1===this.editedIndex?"New Data":"Edit Data"},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"},formattedZoom:function(){return Number.parseInt(100*this.scale)},batchItems:function(){return["Generate Sign Document"]}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){var t=this;this.getHeaders(),this.$echo.channel("Document."+this.$auth.user.id).on("document.updated",(function(e){t.getDataFromApi()}))},methods:{getHeaders:function(){this.headers=[{text:"Number",value:"document_number",cellClass:"disable-wrap"},{text:"Document Type",value:"title",class:"disable-wrap",sortable:!1,filterable:!1},{text:"Ref Number",value:"document.document_number",class:"disable-wrap",sortable:!1,filterable:!1},{text:"Customer",value:"customer",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Document Date",value:"document_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Due",value:"due_date"},{text:"Sub Total",value:"sub_total",cellClass:"disable-wrap"},{text:"Vat",value:"vat",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"amount",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"id",align:"right",width:"50px",sortable:!1,filterable:!1,cellClass:"disable-wrap"}]},getColorStatus:function(t){switch(t){case"draft":return"grey";case"pending":return"orange";case"canceled":case"approved - failed":return"red";case"finish":case"approved":case"approved - finish":return"green";case"approved - on process":return"blue"}},reProcess:function(t){var e=this;this.btnLoading=!0,this.$axios.post("/api/approval/batch-reprocess/"+t).then((function(t){e.btnLoading=!1,e.getDataFromApi()})).catch((function(t){e.btnLoading=!1,e.$swal({type:"error",title:"Error",text:t.response.data.message})}))},openBatchApproval:function(t){"approved"!==t.status&&"approved - finish"!==t.status&&"approved - on process"!==t.status&&"approved - failed"!==t.status&&"finish"!==t.status&&"pending"!==t.status||this.$refs.batchApproval.openApprovalDialog(t)},checkColorStatus:function(t){switch(t.status){case"pending":return"bg-orange";case"canceled":return"bg-red";case"approved":return"bg-green";default:return"bg-white"}},newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.documentType,this.defaultItem)},openEditor:function(t){"draft"===t.status&&this.$refs.formEditor.newData(t.attachment.file_path,t)},openAttchment:function(t){this.$refs.formUpload.newData(t)},eventCountAttachment:function(data){this.getDataFromApi()},actions:function(t,e){var n=[e.id];switch(t){case"Edit":this.editItem(e);break;case"View PDF":this.viewPdf(e);break;case"View Files":this.openAttchment(e);break;case"Submit Approval":this.submitDocument(e);break;case"Cancel Approval":this.cancelDocument(e);break;case"Download":this.downloadDocument(e);break;case"Delete":this.generateSignDocument([e.id]);break;case"Approval Stages":this.$refs.approvalStages.openApprovalStages(e);break;case"Reject":this.$refs.formApproval.editItem(e,"Reject");break;case"Generate Sign Document":this.generateSignDocument(n);break;case"Open Editor":this.$refs.formEditor.newData(e.attachment.file_path,e)}},handle_pdf_link:function(t){document.getElementById(String(t.pageNumber)).scrollIntoView()},viewPdf:function(t){this.$refs.dialogPdf.openDialog(),this.pdfSource="",this.pdfSource=t.attachment.file_path},getItemActions:function(t){return["Generate Sign Document"]},cancelDocument:function(t){var e=this;this.$swal({title:"Are you sure?",text:"Status approval dokumen ini akan diubah menjadi Cancel!",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, Cancel!",cancelButtonText:"No",reverseButtons:!0}).then((function(n){if(!0===n.value){var o=e.url+"/cancel-document";e.$axios.post(o,t).then((function(t){e.$swal({title:"Success!",text:t.data.message,type:"success"}),e.getDataFromApi()})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})}))}}))},batchCancelDocument:function(t){var e=this;this.$swal({title:"Are you sure?",text:"Status approval dokumen ini akan diubah menjadi Cancel!",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, Cancel!",cancelButtonText:"No",reverseButtons:!0}).then((function(n){if(!0===n.value){var o=e.url+"/batch-cancel-document";e.$axios.post(o,t).then((function(t){e.$swal({title:"Success!",text:t.data.message,type:"success"}),e.getDataFromApi()})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})}))}}))},generateSignDocument:function(t){var e=this;this.$swal({title:"Are you sure?",text:"Sign document will be generate!",type:"warning",showCancelButton:!0,confirmButtonText:"Yes!",cancelButtonText:"No",reverseButtons:!0}).then((function(n){if(!0===n.value){var o=e.url+"/generate-document";e.submitLoad=!0,e.$axios.post(o,{id:t}).then((function(t){e.submitLoad=!1,e.$swal({title:"Success!",text:t.data.message,type:"success"}),e.getDataFromApi()})).catch((function(t){e.submitLoad=!1,e.$swal({type:"error",title:"Error",text:t.response.data.message})}))}}))},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.$refs.forms.editItem(t,this.documentType)},openFormApproval:function(t,e){this.editedIndex=this.allData.indexOf(t),this.$refs.formApproval.editItem(t,e)},submitDocument:function(t){var e=this;this.dialogLoading=!0,this.$axios.post(this.url+"/approval",{id:t.id}).then((function(t){e.dialogLoading=!1,e.getDataFromApi()})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})})).finally((function(){return e.dialogLoading=!1}))},batchSubmitDocument:function(t){var e=this;this.dialogLoading=!0,this.$axios.post(this.url+"/batch-approval",t).then((function(t){e.dialogLoading=!1,e.getDataFromApi()})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})})).finally((function(){return e.dialogLoading=!1}))},downloadDocument:function(e){var n=this;this.arrayMaterai=[],this.arrayEsign=[],this.dialogLoading=!0,this.$axios.get(this.url+"/download",{params:{id:e.id,type:"single"},responseType:"arraybuffer"}).then((function(t){n.dialogLoading=!1;var o=new Blob([t.data],{type:"application/pdf"}),r=window.URL.createObjectURL(o),link=document.createElement("a");link.href=window.URL.createObjectURL(o),link.download=e.external_document_number,document.body.appendChild(link),link.click(),setTimeout((function(){document.body.removeChild(link),window.URL.revokeObjectURL(r)}),100)})).finally((function(){return n.dialogLoading=!1})).catch((function(e){var o=JSON.parse(t.from(e.response.data).toString("utf8"));n.$swal({type:"error",title:"Error",text:o.message})}))},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},batchActions:function(t){if(this.selected.length<1)this.$swal({type:"error",title:"Error",text:"Please select at least 1 row!"});else try{var e=[];if("Generate Sign Document"===t)this.selected.forEach((function(t){e.push(t.id)})),this.generateSignDocument(e)}catch(t){this.$swal({type:"error",title:"Error",text:t})}},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,n=this.url;this.$axios.get(n,{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.data.form),t.defaultItem=Object.assign({},e.data.data.form),t.documentStatus=e.data.data.document_status,t.itemSearch=e.data.data.search_item,t.documentType=e.data.data.document_type,t.itemCustomer=e.data.data.customer,t.itemInvoiceType=e.data.data.invoice_type,t.selected=[]})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}}}).call(this,n(656).Buffer)},947:function(t,e,n){"use strict";n.r(e);var o=n(702).a,r=n(65),c=n(83),l=n.n(c),d=n(108),m=n(725),h=n(873),f=n(132),v=n(261),w=n(178),D=n(33),x=n(581),y=n(265),S=n(260),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mx-auto"},[n("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[n("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Invoices","show-batch-action":!0,"batch-actions":t.batchItems,"new-data-text":"New Invoice"},on:{emitData:t.emitData,newData:t.newData,batchActions:t.batchActions}})]},proxy:!0},{key:"item.files",fn:function(e){var o=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.openAttchment(o)}}},[t._v("\n          mdi-attachment\n        ")])]}},{key:"item.id",fn:function(e){var o=e.item;return[n("v-btn",{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"primary",text:"","x-small":""},on:{click:function(e){return t.actions("Edit",o)}}},[t._v("\n          Edit\n        ")]),t._v(" "),n("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"black",dark:"",icon:""}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),n("v-list",t._l(t.getItemActions(o),(function(e,i){return n("v-list-item",{key:i,on:{click:function(n){return t.actions(e,o)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e))])],1)],1)})),1)],1)]}},{key:"item.status",fn:function(e){var o=e.item;return[n("div",[n("v-chip",{staticClass:"text-capitalize",attrs:{label:"",small:"",link:"",dark:"",color:t.getColorStatus(o.status)},on:{click:function(e){return t.openBatchApproval(o)}}},[t._v("\n            "+t._s(o.status)+"\n          ")])],1)]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),n("LazyDocumentFormInvoice",{ref:"forms",attrs:{"form-data":t.form,"document-type":t.documentType,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url,"item-customer":t.itemCustomer,"item-invoice-type":t.itemInvoiceType},on:{getDataFromApi:t.getDataFromApi}}),t._v(" "),n("LazyDocumentBatchApproval",{ref:"batchApproval",on:{getDataFromApi:t.getDataFromApi}}),t._v(" "),t.dialogLoading?n("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e(),t._v(" "),n("LazyDocumentApprovalStages",{ref:"approvalStages"}),t._v(" "),n("v-overlay",{attrs:{value:t.submitLoad}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),n("DialogForm",{ref:"dialogPdf",attrs:{"max-width":"1000px","dialog-title":"Files","button-title":"Close"},scopedSlots:t._u([{key:"content",fn:function(){return[n("iframe",{staticStyle:{width:"100%",height:"100vh",border:"none"},attrs:{src:t.pdfSource}},[t._v("\n        Oops! an error has occurred.\n      ")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{DialogForm:n(609).default}),l()(component,{VBtn:d.a,VChip:m.a,VDataTable:h.a,VIcon:f.a,VList:v.a,VListItem:w.a,VListItemContent:D.a,VListItemTitle:D.c,VMenu:x.a,VOverlay:y.a,VProgressCircular:S.a})}}]);