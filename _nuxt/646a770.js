(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{586:function(t,e,o){"use strict";var r=o(7),n=o(599).start;r({target:"String",proto:!0,forced:o(600)},{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},599:function(t,e,o){var r=o(22),n=o(133),d=o(45),l=o(285),c=o(75),h=r(l),m=r("".slice),w=Math.ceil,f=function(t){return function(e,o,r){var l,f,R=d(c(e)),D=n(o),I=R.length,y=void 0===r?" ":d(r);return D<=I||""==y?R:((f=h(y,w((l=D-I)/y.length))).length>l&&(f=m(f,0,l)),t?R+f:f+R)}};t.exports={start:f(!1),end:f(!0)}},600:function(t,e,o){var r=o(110);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},622:function(t,e){function o(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=622},912:function(t,e,o){"use strict";o.r(e);o(11),o(55);var r=o(621),n=o(699),d=(o(623),{name:"ReservationDetailRow",components:{HotTable:r.a},props:{form:{type:Object,default:!1},isDataSet:{type:Boolean,default:!1}},data:function(){return{countAttachment:0,detailsRoot:"detailsRoot",settings:{licenseKey:"non-commercial-and-evaluation",startRows:0}}},computed:{checkIsDataSet:function(){return this.isDataSet}},watch:{checkIsDataSet:function(){if(this.checkIsDataSet){var data=JSON.parse(localStorage.getItem("approvalDetails"));this.setDataToDetails(data)}}},created:function(){this.instance()},methods:{instance:function(){window.details=this},countDetailsRows:function(){return this.$refs.details.hotInstance.countRows()},render:function(){this.$refs.details.hotInstance.render()},exportCsv:function(){this.$refs.details.hotInstance.getPlugin("exportFile").downloadFile("csv",{bom:!1,columnDelimiter:",",columnHeaders:!0,exportHiddenColumns:!1,exportHiddenRows:!1,fileExtension:"csv",filename:"export-file_[YYYY]-[MM]-[DD]",mimeType:"text/csv",rowDelimiter:"\r\n",rowHeaders:!0})},addLine:function(){var t=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",t+1),this.$refs.details.hotInstance.setDataAtRowProp([[t,"ReqDate",this.form.DocDate],[t,"WhsCode",this.form.WhsCode]])},changeWhsDetails:function(){for(var t=this,e=this.$refs.details.hotInstance.countRows(),o=0;o<e;o++)t.$refs.details.hotInstance.setDataAtRowProp([[o,"WhsCode",t.form.WhsCode],[o,"ReqDate",t.form.DocDate]])},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()},checkIfEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)},fillCheckboxDetails:function(){for(var t=this,e=this.$refs.details.hotInstance.countRows(),o=t.form.RequestType,r="N",n="N",d=0;d<e;d++)t.$refs.details.hotInstance.setDataAtRowProp([[d,"NPB","N"],[d,"SPB","N"]]);for(var l=0;l<e;l++){var c=this.$refs.details.hotInstance.getDataAtRowProp(l,"ItemCategory");"Normal"===o&&"RS"===c?(n="Y",r="N"):"Normal"===o&&"NRS"===c?(r="Y",n="N"):"For Restock SubWH"===o&&"RS"===c?(n="Y",r="N"):"For Restock SubWH"===o&&"NRS"===c&&(r="Y",n="N"),t.$refs.details.hotInstance.setDataAtRowProp([[l,"NPB",n],[l,"SPB",r]])}},getDataAtRowPropDetails:function(t,e){return this.$refs.details.hotInstance.getDataAtRowProp(t,e)},insertDataAssetToDetails:function(t,e){var o=t.row,r=this;e.forEach((function(t,e){r.$refs.details.hotInstance.setDataAtRowProp([[o,"AssetCode",t.ItemCode],[o,"AssetName",t.ItemName]]),o++}))},insertDataToDetails:function(t,e){var o=t.row,r=this;e.forEach((function(t,e){r.$axios.get("/api/latest-req-item",{params:{ReqDate:r.form.DocDate,WhsCode:r.form.WhsCode,ItemCode:t.ItemCode}}).then((function(e){var n=t.U_ItemType?t.U_ItemType:"RS",d=r.form.RequestType,l="N",c="N";"Normal"===d&&"RS"===n||"Urgent"===d&&"RS"===n||"Normal"===d&&"CRC"===n?c="Y":"Normal"===d&&"NRS"===n||"Urgent"===d&&"NRS"===n?l="Y":"For Restock SubWH"===d&&"RS"===n||"For Restock SubWH"===d&&"CRC"===n?c="Y":("For Restock SubWH"===d&&"NRS"===n||"Restock"===d&&"RS"===n)&&(l="Y"),r.$emit("checkCount"),r.$refs.details.hotInstance.setDataAtRowProp([[o,"ItemCode",t.ItemCode],[o,"ItemGroup",t.ItmsGrpCod],[o,"SubGroup",t.U_SubGroup],[o,"ItemName",t.ItemName],[o,"UoMCode",t.InvntryUom],[o,"WhsCode",r.form.WhsCode],[o,"ReqDate",r.form.DocDate],[o,"OnHand",t.OnHand],[o,"AvailableQty",t.Available],[o,"ItemCategory",n],[o,"InvntItem",t.InvntItem],[o,"NPB",c],[o,"SPB",l],[o,"LastReqBy",e.data.rows?e.data.rows.U_UserName:""],[o,"LastReqDate",e.data.rows?e.data.rows.ReqDate:null],[o,"LastReqNote",e.data.rows?e.data.rows.ReqNotes:null]]),o++}))}))},setDataToDetails:function(data){var t=this;setTimeout((function(){t.$refs.details.hotInstance.render(),t.$refs.details.hotInstance.loadData(data),t.updateTableSettings(),t.showLoadingInvDetail=!1}),300)},removeData:function(t){var e=this;this.$axios.delete("/api/reservation/master/1",{params:{doc_entry:t}}).then((function(t){e.$swal({type:"success",title:"Success!",text:t.data.message}),e.$emit("getData")})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message}),e.$emit("getData")}))},setCountAttachment:function(t,e){this.$refs.details.hotInstance.setDataAtRowProp(e,"CountAttachment",t)},updateTableSettings:function(){this.$refs.details.hotInstance;this.$refs.details.hotInstance.render(),this.$refs.details.hotInstance.updateSettings({colHeaders:["","Item Code","Item Name","","Asset Code","Asset Name","Category","UoM","WH","Req. Qty","Req. Date","Notes","OnHand","Available","Other Resv. No ","SPB","NPB","Last Res. By","Last Res. Date","Last Res. Notes","Delete","DocEntry","LineStatus","OIGRDocNum","InvntItem","GIR Status","Attachment"],copyable:!0,copyPaste:!0,columns:[{data:"ItemCodeRender",width:30,height:26,wordWrap:!1},{data:"ItemCode",width:100,height:26,wordWrap:!1,readOnly:!0},{data:"ItemName",width:200,height:26,wordWrap:!1},{data:"AssetCodeRender",width:30,height:26,wordWrap:!1,renderer:function(t,td,e,col,o,r,d){var button=null,l=window.details;if(155===parseInt(l.$refs.details.hotInstance.getDataAtRowProp(e,"ItemGroup")))return(button=document.createElement("button")).type="button",button.innerText=">",button.className="btnSPB",button.value="Details",n.a.dom.addEvent(button,"mousedown",(function(t){t.preventDefault(),l.$emit("openDialogAsset",{row:e})})),n.a.dom.empty(td),td.appendChild(button),td}},{data:"AssetCode",width:100,height:26,wordWrap:!1,readOnly:!0},{data:"AssetName",width:200,height:26,wordWrap:!1,readOnly:!0},{data:"ItemCategory",width:70,height:26,wordWrap:!1,readOnly:!0},{data:"UoMCode",width:60,height:26,wordWrap:!1},{data:"WhsCode",width:60,height:26,wordWrap:!1,readOnly:!0},{data:"ReqQty",width:80,height:26,wordWrap:!1,type:"numeric",numericFormat:{pattern:"0,0.00"}},{data:"ReqDate",type:"date",width:100,height:26,wordWrap:!1,dateFormat:"YYYY-MM-DD",correctFormat:!0,datePickerConfig:{firstDay:0,showWeekNumber:!0,numberOfMonths:1}},{data:"ReqNotes",width:200,height:26,wordWrap:!1},{data:"OnHand",width:80,height:26,wordWrap:!1,readOnly:!0,type:"numeric",numericFormat:{pattern:"0,0.00"}},{data:"AvailableQty",width:80,height:26,wordWrap:!1,readOnly:!0,type:"numeric",numericFormat:{pattern:"0,0.00"}},{data:"OtherResvNo",width:150,height:26,wordWrap:!1},{data:"SPB",width:50,height:26,wordWrap:!1,className:"htCenter ",type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"NPB",width:50,height:26,wordWrap:!1,className:"htCenter ",type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"LastReqBy",width:150,height:26,readOnly:!0,wordWrap:!1},{data:"LastReqDate",type:"date",width:100,height:26,readOnly:!0,wordWrap:!1,dateFormat:"YYYY-MM-DD",correctFormat:!0,datePickerConfig:{firstDay:0,showWeekNumber:!0,numberOfMonths:1}},{data:"LastReqNote",width:200,height:26,readOnly:!0,wordWrap:!1},{data:"Delete",width:100,height:26,wordWrap:!1},{data:"LineEntry",width:100,height:26,wordWrap:!1},{data:"LineStatus",width:100,height:26,wordWrap:!1},{data:"OIGRDocNum",width:100,height:26,wordWrap:!1},{data:"InvntItem",width:100,height:26,wordWrap:!1},{data:"SAPGIRStatus",width:100,height:26,wordWrap:!1},{data:"Attachment",width:120,height:26,wordWrap:!1,renderer:function(t,td,e,col,o,r,d){var button=null,l=window.details,c=l.$refs.details.hotInstance.getDataAtRowProp(e,"LineEntry");if(c){var h=parseInt(l.countAttachment),m=parseInt(l.$refs.details.hotInstance.getDataAtRowProp(e,"CountAttachment"));h>0&&(m=h),(button=document.createElement("button")).type="button",button.innerText=c&&m>0?"✅ Attachment ("+m+")":m>0?"👍 Attachment ("+m+")":"⌛ Attachment",button.className=c&&m>0||m>0?"btnSPB row-"+e:"myBtRed",button.value="Attachment","test value attachment",n.a.dom.addEvent(button,"mousedown",(function(t){t.preventDefault();var o=l.$refs.details.hotInstance.getDataAtRowProp(e,"LineEntry");l.$emit("openAttachmentDetails",{lineEntry:o,row:e})})),n.a.dom.empty(td),td.appendChild(button)}return td}},{data:"CountAttachment",width:100,height:26,wordWrap:!1},{data:"ItemGroup",width:100,height:26,wordWrap:!1},{data:"SubGroup",width:100,height:26,wordWrap:!1}],currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:0,manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,autoRowSize:!1,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,rowHeights:23,persistentState:!0,width:"100%",stretchH:"all",beforeRemoveRow:function(t,e,o,source){var r=window.details,n=prompt("Do you want to delete a row? Type y to remove"),d=[];return"y"===n&&(o.forEach((function(t,e){var o=r.$refs.details.hotInstance.getDataAtRowProp(t,"LineEntry");o&&d.push(o)})),d.length>0&&r.removeData(d),!0)},afterOnCellMouseDown:function(t,e,o,r){var n=window.details,d=n.$refs.details.hotInstance.propToCol,l=n.$refs.details.hotInstance.getDataAtRowProp(e.row,"LineEntry");e.col===d("ItemCodeRender")&&n.$emit("openDialog",{row:e.row}),e.col===d("LastReqBy")&&n.$emit("openDialogLastResv",{row:e.row,itemCode:n.$refs.details.hotInstance.getDataAtRowProp(e.row,"ItemCode"),itemName:n.$refs.details.hotInstance.getDataAtRowProp(e.row,"ItemName"),reqDate:n.$refs.details.hotInstance.getDataAtRowProp(e.row,"ReqDate"),whsCode:n.$refs.details.hotInstance.getDataAtRowProp(e.row,"WhsCode")}),e.col===d("Delete")&&n.$emit("openDeleteRow",{url:"/api/reservation/"+l,row:e.row})},afterOnCellMouseOut:function(t,e,o,r){var n=window.details,d=n.$refs.details.hotInstance.propToCol;e.col===d("NPB")&&("Y"===n.$refs.details.hotInstance.getDataAtRowProp(e.row,"NPB")&&n.$refs.details.hotInstance.setDataAtRowProp(e.row,"SPB","N"));e.col===d("SPB")&&("Y"===n.$refs.details.hotInstance.getDataAtRowProp(e.row,"SPB")&&n.$refs.details.hotInstance.setDataAtRowProp([[e.row,"NPB","N"],[e.row,"OtherResvNo",null]]))},afterGetColHeader:function(col,t){if("number"!=typeof col)return col;var e=t.parentNode,o=e.parentNode;o.childNodes.length,Array.prototype.indexOf.call(o.childNodes,e)},contextMenu:{callback:function(t,e){var o=window.details;"remove_row"===t&&(o.isInvDetailChanges=!0,o.isInvChanges=!0)}},hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[20,21,22,23,24,25,27,28,29]},cells:function(t,col,e){var o={},r=window.details,d=this.instance.getDataAtRowProp(t,"ItemCategory"),l=this.instance.getDataAtRowProp(t,"LineStatus"),c=this.instance.getDataAtRowProp(t,"InvntItem"),h=this.instance.getDataAtRowProp(t,"ItemGroup"),m=this.instance.getDataAtRowProp(t,"NPB"),w=r.form.ApprovalStatus,f=r.form.RequestType;if("Closed"===l)for(var i=0;i<=22;i++)col===i&&(o.readOnly=!0);else if("-"!==w&&"N"!==w)for(var R=0;R<=22;R++)col===R&&(o.readOnly=!0);else if("ItemName"===e&&(o.readOnly="Y"===c),"UoMCode"===e&&(o.readOnly=!("102"===h||"152"===h)),"SPB"===e&&("Normal"===f&&"RS"===d||"For Restock SubWH"===f&&"RS"===d||"Normal"===f&&"CRC"===d||"For Restock SubWH"===f&&"CRC"===d?o.readOnly=!0:"Restock"===f&&"RS"===d&&(o.readOnly=!1)),"NPB"===e&&("Normal"===f&&"NRS"===d||"For Restock SubWH"===f&&"NRS"===d?(o.readOnly=!1,!0):("Restock"===f&&"NRS"===d||"Restock"===f&&"RS"===d)&&(o.readOnly=!0)),"OtherResvNo"===e&&(o.readOnly=!("Y"===m&&("Normal"===f||"Urgent"===f))),"ItemCodeRender"===e||"LastReqBy"===e||"Delete"===e){var button=null;o.readOnly=!0,o.renderer=function(t,td,e,col,o,r,d){return"LastReqBy"===o&&((button=document.createElement("a")).innerHTML=r),"ItemCodeRender"!==o&&"Delete"!==o||((button=document.createElement("button")).type="button","ItemCodeRender"===o&&(button.innerText=">",button.className="btnSPB"),"Delete"===o&&(button.innerText="Delete",button.className="btnDelete")),n.a.dom.empty(td),td.appendChild(button),td}}return o}})}}}),l=o(81),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("HotTable",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);