(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{593:function(t,e,n){"use strict";var o=n(7),r=n(606).start;o({target:"String",proto:!0,forced:n(607)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},606:function(t,e,n){var o=n(22),r=n(134),l=n(47),c=n(288),d=n(76),f=o(c),h=o("".slice),w=Math.ceil,m=function(t){return function(e,n,o){var c,m,v=l(d(e)),R=r(n),C=v.length,D=void 0===o?" ":l(o);return R<=C||""==D?v:((m=f(D,w((c=R-C)/D.length))).length>c&&(m=h(m,0,c)),t?v+m:m+v)}};t.exports={start:m(!1),end:m(!0)}},607:function(t,e,n){var o=n(111);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},629:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=629},911:function(t,e,n){"use strict";n.r(e);n(11),n(56);var o=n(628),r=(n(630),{name:"TableSimple",components:{HotTable:o.a},data:function(){return{settings:{licenseKey:"non-commercial-and-evaluation"},detailsRoot:"detailsRoot",colHeaders:[],formData:null}},created:function(){this.setInstance()},methods:{setInstance:function(){window.details=this},addLine:function(){var t=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",t+1)},updateTableSettings:function(header,t){this.$refs.details.hotInstance.updateSettings({colHeaders:header,columns:t,currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:1,manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,filters:!0,autoRowSize:!1,height:"70vh",autoColumnSize:{syncLimit:300},viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,dropdownMenu:!0,columnSorting:!0,persistentState:!0,width:"100%",stretchH:"all",hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[0]},contextMenu:{callback:function(t,e){var n=window.details;"remove_row"===t&&(n.isInvDetailChanges=!0,n.isInvChanges=!0)}},beforeRemoveRow:function(t,e,n,source){var o=window.details,r=prompt("Are your sure want to delete this rows?"),l=[];return""===r&&(n.forEach((function(t,e){var n=o.$refs.details.hotInstance.getDataAtCell(t,0);n&&l.push(n)})),l.length>0&&o.$emit("removeData",{id:l}),!0)}})},setDataToDetails:function(data,t,e,n){this.formData=n,this.updateTableSettings(e,t);var o=this;setTimeout((function(){o.$refs.details.hotInstance.loadData(data)}),300)},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()},checkIfEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)}}}),l=n(82),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hot-table",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);