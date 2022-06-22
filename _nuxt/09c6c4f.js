(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{591:function(t,e,r){"use strict";r(279);var o=r(280);e.a=Object(o.a)("layout")},592:function(t,e,r){"use strict";r(279);var o=r(280);e.a=Object(o.a)("flex")},880:function(t,e,r){"use strict";r.r(e);r(42),r(228),r(12);var o={name:"Reservation",data:function(){return{totalData:0,allData:[],dataFilter:[],searchStatus:"All",documentStatus:[],counter:0,loading:!0,dialogLoading:!1,dialogFilter:!1,options:{},itemSearch:[],search:"",searchItem:"",loadNewBtn:!1,headers:[{text:"",value:"Action",sortable:!1,filterable:!1},{text:"DocNum",value:"DocNum",sortable:!1,filterable:!1,cellClass:"disable-wrap"},{text:"DocDate",value:"DocDate",sortable:!1,filterable:!1,cellClass:"disable-wrap"},{text:"WH",value:"WhsCode",sortable:!1,filterable:!1,cellClass:"disable-wrap"},{text:"ReqType",value:"RequestType",sortable:!1,filterable:!1,cellClass:"disable-wrap"},{text:"ItemType",value:"ItemType",sortable:!1,filterable:!1,cellClass:"disable-wrap"},{text:"Remarks",value:"Memo",sortable:!1,filterable:!1},{text:"ReqDate",value:"RequiredDate",sortable:!1,filterable:!1,cellClass:"disable-wrap"},{text:"Requester",value:"RequestName",sortable:!1,filterable:!1,cellClass:"disable-wrap"},{text:"Status",value:"DocumentStatus",sortable:!1,filterable:!1,cellClass:"disable-wrap"},{text:"App Status",value:"AppStatus",sortable:!1,filterable:!1,cellClass:"disable-wrap"},{text:"GIR NO",value:"SAP_GIRNo",sortable:!1,filterable:!1},{text:"PR NO",value:"SAP_PRNo",sortable:!1,filterable:!1},{text:"PO NO",value:"PONum",sortable:!1,filterable:!1},{text:"GRPO NO",value:"GRPONum",sortable:!1,filterable:!1},{text:"GI NO",value:"SAP_GINo",sortable:!1,filterable:!1},{text:"Transfer NO",value:"SAP_TrfNo",sortable:!1,filterable:!1},{text:"Created By",value:"CreatedName",sortable:!1,filterable:!1,cellClass:"disable-wrap"},{text:"",value:"ApprovalStatus",sortable:!1,filterable:!1,cellClass:"disable-wrap"}]}},head:function(){return{title:"Reservation Request"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},search:function(){this.getDataFromApi()}},mounted:function(){},methods:{emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.getDataFromApi()},itemRowBackground:function(t){switch(t.DocumentStatus){case"Open":return"bg-orange";case"Cancel":return"bg-red";case"Closed":return"bg-green";default:return"bg-white"}},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/reservation/master",{params:{options:e.options,search:e.search,searchItem:e.searchItem,searchStatus:e.searchStatus}}).then((function(e){t.loading=!1,t.allData=e.data.rows,t.totalData=e.data.total,t.itemSearch=e.data.filter,t.documentStatus=e.data.status})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message}),t.loading=!1}))},nextPages:function(t){this.$router.push({path:"/reservation/request",query:{id:t.U_DocEntry,status:"update"}}),this.$refs.resvForm.openForm("Edit Reservation #"+t.DocNum,"update",t.U_DocEntry)},newData:function(){var t=this;this.loadNewBtn=!0,this.$axios.get("/api/reservation/max-doc-resv").then((function(e){t.loadNewBtn=!1,t.$router.push({path:"/reservation/request",query:{id:e.data.max_num.DocEntry,status:"add"}}),t.$refs.resvForm.openForm("New Reservation","add",null)}))},printDocument:function(t,e){var r=this;this.dialogLoading=!0,this.$axios.get("/api/reservation/print",{params:{form:e,type:t}}).then((function(t){window.open(t.data.message,"_blank"),r.dialogLoading=!1})).catch((function(t){r.dialogLoading=!1,r.$swal({type:"error",title:"Error",text:t.response.data.message})}))},cancelDocument:function(t){var e=this;this.$swal({title:"Apakah anda yakin?",text:"Status approval dokumen ini akan diubah menjadi Cancel!",type:"warning",showCancelButton:!0,confirmButtonText:"Ya, Cancel!",cancelButtonText:"Tidak, Batal!",reverseButtons:!0}).then((function(r){if(!0===r.value){var o=e.$auth.user.username,data={form:t,username:o};e.$axios.put("/api/reservation/cancel-document",data).then((function(t){t.data.error?e.$swal({title:"Error!",text:t.data.message,type:"error"}):(e.$swal({title:"Success!",text:t.data.message,type:"success"}),e.getDataFromApi())})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})}))}}))},deleteItem:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(r){r.isConfirmed&&e.$axios.delete("/api/reservation/"+t.U_DocEntry).then((function(t){t.data.error?e.$swal("Error!",t.data.message,"error"):(e.$swal("Deleted!","Data has been deleted.","success"),e.getDataFromApi())}))}))}}},n=r(81),l=r(89),c=r.n(l),d=r(106),v=r(123),m=r(54),h=r(851),f=r(278),_=r(592),x=r(130),w=r(591),D=r(261),S=r(257),y=r(277),C=r(71),k=r(131),A=r(560),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",{attrs:{sm12:""}},[r("div",{staticClass:"mt-2"},[r("v-overlay",{attrs:{value:t.loading}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{dense:"","mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":15,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-class":t.itemRowBackground,"footer-props":{"items-per-page-options":[15,50,100,-1]},"fixed-header":"",height:"70vh"},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[r("v-toolbar-title",[t._v(" Reservation Request ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.dialogFilter,callback:function(e){t.dialogFilter=e},expression:"dialogFilter"}},[r("v-card",[r("v-card-title",[t._v("Filter Form")]),t._v(" "),r("v-card-text",[r("LazyTableFilter",{staticClass:"hidden-sm-and-up",attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search},on:{getDataFromApi:t.emitData}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogFilter=!1}}},[t._v("\n                    Close\n                  ")])],1)],1)],1),t._v(" "),r("LazyTableFilter",{staticClass:"hidden-sm-and-down",attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search},on:{getDataFromApi:t.emitData}}),t._v(" "),r("v-btn",{staticClass:"d-md-none d-lg-none d-sm-flex d-xs-flex",attrs:{icon:"",color:"green",dark:""},on:{click:function(e){t.dialogFilter=!0}}},[r("v-icon",[t._v("mdi-filter-variant")])],1),t._v(" "),r("v-btn",{attrs:{small:"",elevation:"0",loading:t.loadNewBtn,color:"green",dark:""},on:{click:t.newData}},[t._v("\n              New Reservation\n            ")]),t._v(" "),r("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.getDataFromApi}},[r("v-icon",[t._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.Action",fn:function(e){var o=e.item;return[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),n),[r("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.nextPages(o)}}},[t._v("\n                  mdi-arrow-right-bold\n                ")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Open details")])])]}},{key:"item.ApprovalStatus",fn:function(e){var o=e.item;return["-"!==o.AppStatus?r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),n),[r("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.approvalStages.openApprovalStages(o)}}},[t._v("\n                  mdi-format-line-weight\n                ")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Approval Details")])]):t._e(),t._v(" "),"Waiting"===o.AppStatus?r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:"","x-small":""}},"v-btn",l,!1),n),[r("v-icon",{staticClass:"mr-1",attrs:{color:"red"},on:{click:function(e){return t.cancelDocument(o)}}},[t._v("\n                  mdi-cancel\n                ")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Cancel Document")])]):t._e(),t._v(" "),"Y"===o.ApprovalStatus&&"Non Ready Stock"===o.ItemType?r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:"","x-small":""}},"v-btn",l,!1),n),[r("v-icon",{staticClass:"mr-1",attrs:{color:"green"},on:{click:function(e){return t.printDocument("all",o)}}},[t._v("\n                  mdi-printer\n                ")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Print All")])]):t._e(),t._v(" "),"Y"===o.ApprovalStatus||"Restock"===o.RequestType?r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:"","x-small":""}},"v-btn",l,!1),n),[r("v-icon",{staticClass:"mr-1",attrs:{color:"black"},on:{click:function(e){return t.printDocument("partial",o)}}},[t._v("\n                  mdi-printer-check\n                ")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Print")])]):t._e()]}}],null,!0)})],1)]),t._v(" "),t.dialogLoading?r("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e(),t._v(" "),r("LazyResvApprovalDetails",{ref:"approvalStages"}),t._v(" "),r("LazyResvForm",{ref:"resvForm",on:{getDataFromApi:t.getDataFromApi}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDataTable:h.a,VDialog:f.a,VFlex:_.a,VIcon:x.a,VLayout:w.a,VOverlay:D.a,VProgressCircular:S.a,VSpacer:y.a,VToolbar:C.a,VToolbarTitle:k.a,VTooltip:A.a})}}]);