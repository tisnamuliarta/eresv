(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{609:function(t,e,o){"use strict";var n=o(7),r=o(619).start;n({target:"String",proto:!0,forced:o(620)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},619:function(t,e,o){var n=o(22),r=o(135),c=o(48),d=o(292),l=o(77),h=n(d),f=n("".slice),w=Math.ceil,m=function(t){return function(e,o,n){var d,m,v=c(l(e)),D=r(o),R=v.length,y=void 0===n?" ":c(n);return D<=R||""==y?v:((m=h(y,w((d=D-R)/y.length))).length>d&&(m=f(m,0,d)),t?v+m:m+v)}};t.exports={start:m(!1),end:m(!0)}},620:function(t,e,o){var n=o(113);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},636:function(t,e){function o(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=636},946:function(t,e,o){"use strict";o.r(e);var n=o(31),r=(o(56),o(11),o(635)),c=(o(638),{name:"GuestVisit",components:{HotTable:r.a},data:function(){return{httpMethod:"",countAttachment:0,detailsRoot:"detailsRoot",settings:{licenseKey:"non-commercial-and-evaluation",startRows:1,renderAllRows:!1,colHeaders:["Title","Name","Position","Company","Transportation","Arriving Date","Status","Room No","Alternative"],columns:[{data:"name_title",width:50,height:26,wordWrap:!1,type:"dropdown",source:["Mr.","Mrs.","Ms."]},{data:"name",width:220,height:26,wordWrap:!1,type:"autocomplete",strict:!1,filter:!0,allowInvalid:!0,source:function(t,e){e(window.details.$auth.$storage.getState("employee_pluck"))}},{data:"position",width:130,height:26,wordWrap:!1},{data:"company",width:70,height:26,wordWrap:!1},{data:"transport_from",width:100,height:26,wordWrap:!1},{data:"arrival_date",width:100,height:26,wordWrap:!1,type:"date",dateFormat:"MM/DD/YYYY",correctFormat:!0},{data:"status",width:100,height:26,wordWrap:!1,readOnly:!0},{data:"room_no",width:100,height:26,wordWrap:!1,readOnly:!0},{data:"alternative_room_no",width:100,height:26,wordWrap:!1,readOnly:!0},{data:"id",width:130,height:26,wordWrap:!1}],currentRowClassName:"currentRow",currentColClassName:"currentCol",manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,filters:!1,autoRowSize:!1,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,dropdownMenu:!1,columnSorting:!0,rowHeights:23,persistentState:!0,width:"100%",stretchH:"all",hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[9]}}}},computed:{checkIsDataSet:function(){return this.isDataSet}},watch:{checkIsDataSet:function(){if(this.checkIsDataSet){var data=JSON.parse(localStorage.getItem("approvalDetails"));this.setDataToDetails(data)}}},created:function(){this.instance()},methods:{getDetailSourceData:function(){return this.$refs.details.hotInstance.getSourceData()},checkEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)},insertRow:function(t,form){var e=form.total_guest;this.$refs.details.hotInstance.loadData([]),this.$refs.details.hotInstance.alter("insert_row",t,e);for(var o=this.$refs.details.hotInstance.countRows(),i=0;i<o;i++)this.$refs.details.hotInstance.setDataAtRowProp([[i,"arrival_date",form.date_in]])},instance:function(){window.details=this},countDetailsRows:function(){return this.$refs.details.hotInstance.countRows()},addLine:function(){var t=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",t+1),this.$refs.details.hotInstance.setDataAtRowProp([[t,"ReqDate",this.form.DocDate],[t,"WhsCode",this.form.WhsCode]])},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()},checkIfEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)},getDataAtRowPropDetails:function(t,e){return this.$refs.details.hotInstance.getDataAtRowProp(t,e)},setDataToHttpMethod:function(t){this.httpMethod=t},setDataToDetails:function(data){var t=this;this.updateTableSettings(),setTimeout((function(){t.$refs.details.hotInstance.loadData(data)}),300)},removeData:function(t){var e=this;this.$axios.delete("/api/reservation/master/1",{params:{doc_entry:t}}).then((function(t){e.$swal({type:"success",title:"Success!",text:t.data.message}),e.$emit("getData")})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message}),e.$emit("getData")}))},setCountAttachment:function(t,e){this.$refs.details.hotInstance.setDataAtRowProp(e,"CountAttachment",t)},updateTableSettings:function(){this.$refs.details.hotInstance.updateSettings({beforeRemoveRow:function(t,e,o,source){var n=window.details,r=prompt("Do you want to delete a row? Type y to remove"),c=[];return"y"===r&&(o.forEach((function(t,e){var o=n.$refs.details.hotInstance.getDataAtRowProp(t,"LineEntry");o&&c.push(o)})),c.length>0&&n.removeData(c),!0)},dataSchema:{name_title:"Mr."},afterChange:function(t,source){var e=window.details;t&&("edit"!==source&&"autofill"!==source&&"paste"!==source||t.forEach((function(t){var o=Object(n.a)(t,4),r=o[0],c=o[1],d=(o[2],o[3]);"name"===c&&e.$axios.get("/api/master/employee-by-name",{params:{name:d}}).then((function(t){t.data&&(e.$refs.details.hotInstance.setDataAtRowProp(r,"position",t.data.JobPosition),e.$refs.details.hotInstance.setDataAtRowProp(r,"company",t.data.Company))}))})))},cells:function(t,col,e){var o={},n=window.details;if("patch"===n.httpMethod)for(var i=0;i<=20;i++)col===i&&(o.readOnly=!0);for(var r=6;r<=8;r++)col===r&&n.$gates.hasAnyRole("I-Tracc")&&(o.readOnly=!1);return o},contextMenu:{callback:function(t,e){var o=window.details;"remove_row"===t&&(o.isInvDetailChanges=!0,o.isInvChanges=!0)}},hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[9]}})}}}),d=o(65),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("HotTable",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);