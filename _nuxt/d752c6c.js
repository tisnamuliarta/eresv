(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{593:function(t,e,n){"use strict";var o=n(7),r=n(606).start;o({target:"String",proto:!0,forced:n(607)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},597:function(t,e,n){"use strict";n(282);var o=n(283);e.a=Object(o.a)("layout")},599:function(t,e,n){"use strict";n(282);var o=n(283);e.a=Object(o.a)("flex")},606:function(t,e,n){var o=n(22),r=n(134),l=n(47),c=n(288),d=n(76),h=o(c),f=o("".slice),m=Math.ceil,v=function(t){return function(e,n,o){var c,v,w=l(d(e)),D=r(n),C=w.length,$=void 0===o?" ":l(o);return D<=C||""==$?w:((v=h($,m((c=D-C)/$.length))).length>c&&(v=f(v,0,c)),t?w+v:v+w)}};t.exports={start:v(!1),end:v(!0)}},607:function(t,e,n){var o=n(111);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},629:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=629},901:function(t,e,n){"use strict";n.r(e);n(11),n(28),n(56);var o=n(628),r=(n(630),{name:"MasterRole",components:{HotTable:o.a},data:function(){return{totalData:0,loading:!1,submitLoad:!1,statusProcessing:"insert",dialog:!1,formData:[],url:"/api/master/task-section",settings:{licenseKey:"non-commercial-and-evaluation",colHeaders:["ID","Document","Title","Order"],columns:[{data:"id",width:30,height:26,wordWrap:!1},{data:"department",type:"dropdown",width:150,height:26,wordWrap:!1,source:function(t,e){e(window.details.$auth.$storage.getLocalStorage("departments"))},strict:!0,filter:!1,allowInvalid:!1},{data:"title",width:150,height:26,wordWrap:!1},{data:"order_line",width:80,height:26,wordWrap:!1}],currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:1,manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,filters:!0,autoRowSize:!1,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,dropdownMenu:!0,columnSorting:!0,persistentState:!0,width:"100%",stretchH:"all",hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[0]},contextMenu:{callback:function(t,e){var n=window.details;"remove_row"===t&&(n.isInvDetailChanges=!0,n.isInvChanges=!0)}},beforeRemoveRow:function(t,e,n,source){var o=window.details,r=prompt("Are your sure want to delete this rows?"),l=[];return""===r&&(n.forEach((function(t,e){var n=o.$refs.details.hotInstance.getDataAtCell(t,0);n&&l.push(n)})),l.length>0&&o.removeData(l),!0)}},detailsRoot:"detailsRoot"}},head:function(){return{title:"Milestone"}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},created:function(){this.setInstance()},mounted:function(){this.getData(),this.getDepartments()},methods:{setInstance:function(){window.details=this},getDepartments:function(){var t=this;this.$axios.get("/api/master/departments").then((function(e){t.$auth.$storage.setLocalStorage("departments",e.data)}))},getData:function(){var t=this;this.loading=!0,this.$axios.get(this.url).then((function(e){t.loading=!1,t.$auth.$storage.setLocalStorage("document_type",e.data.data.document_type);var n=t;setTimeout((function(){n.$refs.details.hotInstance.loadData(e.data.data.rows)}),300)})).finally((function(){t.loading=!1}))},addLine:function(){var t=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",t+1)},removeData:function(data){var t=this;this.$axios.delete(this.url+"/0",{params:{id:data.id}}).then((function(e){t.$swal({type:"success",title:"Success!",text:e.data.message}),t.getData()})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message}),t.getData()}))},save:function(){var t=this;this.submitLoad=!0;var details=this.$refs.details.hotInstance.getSourceData();this.$axios.post(this.url,{details:details,formData:this.formData}).then((function(e){t.$swal({type:"success",title:"Success",text:e.data.message}),t.getData()})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(e){t.submitLoad=!1}))}}}),l=n(82),c=n(90),d=n.n(c),h=n(107),f=n(124),m=n(55),v=n(599),w=n(131),D=n(597),C=n(280),$=n(72),x=n(132),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{sm12:"",md6:"","offset-md3":""}},[n("v-card",{staticClass:"mt-2"},[n("v-card-title",[n("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[n("v-toolbar-title",{staticClass:"hidden-xs-only"},[t._v("Milestone")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.getData}},[n("v-icon",[t._v("mdi-refresh")])],1)],1)],1),t._v(" "),n("div",{staticClass:"scroll-container"},[n("hot-table",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})],1),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"white--text",attrs:{small:"",color:"orange darken-1"},on:{click:function(e){return t.addLine()}}},[t._v("\n          Add Line\n        ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:h.a,VCard:f.a,VCardActions:m.a,VCardTitle:m.d,VFlex:v.a,VIcon:w.a,VLayout:D.a,VSpacer:C.a,VToolbar:$.a,VToolbarTitle:x.a})}}]);