(window.webpackJsonp=window.webpackJsonp||[]).push([[93,39],{589:function(t,e,n){"use strict";n(278);var r=n(279);e.a=Object(r.a)("layout")},590:function(t,e,n){"use strict";n(278);var r=n(279);e.a=Object(r.a)("flex")},591:function(t,e,n){"use strict";var r=n(3),o=(n(44),n(63),n(280),n(11),n(12),n(54),n(97),n(13),n(10),n(16),n(17),n(5)),l=n(108),c=n(130);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},593:function(t,e,n){var content=n(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("50788f08",content,!0,{sourceMap:!1})},594:function(t,e,n){var r=n(19)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},621:function(t,e,n){"use strict";n(13),n(10),n(16),n(12),n(17);var r=n(3),o=(n(80),n(11),n(82),n(97),n(185),n(44),n(63),n(593),n(604)),l=n(186),c=n(73),d=n(0);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=h(h({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return v}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.t)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),h(h({},v),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.z.backspace&&t!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.r)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.r)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.z.home,d.z.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(e=t.clipboardData)||e.setData("text/plain",o),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},637:function(t,e,n){var content=n(638);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("b1bed018",content,!0,{sourceMap:!1})},638:function(t,e,n){var r=n(19)(!1);r.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=r},690:function(t,e,n){"use strict";n(13),n(10),n(11),n(16),n(12),n(17);var r=n(3),o=(n(109),n(637),n(78)),l=n(5);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(l.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return t("li",[t(n,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),h=n(0),v=Object(h.k)("v-breadcrumbs__divider","li"),f=n(24);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(l.a)(f.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(m,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},857:function(t,e,n){"use strict";n.r(e);n(36),n(54),n(109),n(12);var r={name:"ReserVationForm",data:function(){return{buttonKey:1,buttonKey2:2,buttonKey3:3,count_attachment:0,menu1:"",menu:"",date:null,urlDelete:null,dialogLoading:!1,dialogConfirm:!1,submitLoad:!1,submitLoad2:!1,submitLoad3:!1,loading:!1,loadingPrint:!1,isReadOnly:!1,loadingPrint2:!1,message:!1,success:!1,itemDivision:[],itemUserNIK:[],itemCompany:[],itemWhTo:[],itemUserWhs:[],userDivision:[],breadcrumb:[],itemReqType:["Normal","For Restock SubWH"],ItemType:["Ready Stock","Non Ready Stock","Asset","Service"],isDisable:!1,isApprovalDisable:!1,isDataSet:!1,Division:{},U_NIK:{},form:{Company:null,CompanyName:null,DocNum:null,UserName:null,U_NIK:this.$auth.user.username,RequesterName:this.$auth.user.name,Division:this.$auth.user.department,Department:null,DocDate:null,RequiredDate:null,WhsCode:null,RequestType:"Normal",ApprovalStatus:"-",U_DocEntry:null,LastApproved:null,Memo:null,Token:null,WhTo:null,UrgentReason:null,ItemType:null,ItemTypeCheck:null,Is_Urgent:"No"}}},head:function(){return{title:"Reservation Form"}},computed:{btnTitle:function(){return this.$route.query.status,"Save As Draft"}},created:function(){this.getUserRelationship(),this.getData(),this.getDivision()},mounted:function(){var t=this;setTimeout((function(){t.getData(),t.getDivision(),t.getUserRelationship()}),1e3),"N"===this.$auth.user.is_admin_subwh&&(this.itemReqType=["Normal"])},methods:{changeDate:function(){Date.prototype.addDays=function(t){var e=new Date(this.valueOf());return e.setDate(e.getDate()+t),e};var t=new Date(this.form.DocDate);this.form.RequiredDate=this.formatDate(t.addDays(7))},formatDate:function(t){var e=new Date(t),n=""+(e.getMonth()+1),r=""+e.getDate(),o=e.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[o,n,r].join("-")},getUserRelationship:function(){var t=this;localStorage.setItem("request_type",JSON.stringify(["NPB","SPB"])),this.$axios.get("/api/master/users/relationship",{params:{form:this.form}}).then((function(e){t.itemCompany=e.data.items,t.itemUserNIK=e.data.userNik,t.itemUserWhs=e.data.itemUserWhs,t.userDivision=e.data.userDivision}))},getDivision:function(){var t=this;this.$axios.get("/api/master/division").then((function(e){t.itemDivision=e.data.all_division}))},getWhsTo:function(){var t=this;this.$axios.get("/api/master/users/whsto",{params:{form:this.form}}).then((function(e){t.itemWhTo=e.data.itemWhTo}))},openDeleteRow:function(data){this.urlDelete=data.url,this.$refs.dialogDelete.openDialog(data.url,data.row)},showMessage:function(t){var e=this;this.$refs.snackbar.display(1e4,t),this.success=t,this.getData(),setTimeout((function(){return e.success=!1}),8e3)},openDialog:function(t){this.form.CompanyName&&this.form.WhsCode?this.$refs.itemsMaster.openDialog(t):this.$refs.snackbar.display(1e4,"Company and WhsCode Cannot Empty!")},openDialogAsset:function(t){this.$refs.assetsMaster.openDialog(t)},openDialogLastResv:function(data){this.form.CompanyName&&this.form.WhsCode&&this.form.DocDate?this.$refs.lastResv.openDialog(data.row,data.itemCode,data.reqDate,data.whsCode,data.itemName):this.$refs.snackbar.display(1e4,"Company and WhsCode Cannot Empty!")},closeDialog:function(){this.$refs.itemsMaster.closeDialog()},selectItems:function(data){this.$refs.childDetails.insertDataToDetails(data.row,data.selected)},selectAssets:function(data){this.$refs.childDetails.insertDataAssetToDetails(data.row,data.selected)},changeWhs:function(){this.$refs.childDetails.changeWhsDetails()},changeDivision:function(){var t=this.form.U_NIK,e=this;this.userDivision.forEach((function(n){n.U_NIK===t&&(n.Division,e.form.RequesterName=n.U_UserName,e.form.Division=n.Division)}))},fillCheckbox:function(){this.$refs.childDetails.fillCheckboxDetails()},refreshData:function(){this.getData()},eventCountAttachment:function(data){this.$refs.childDetails.setCountAttachment(data.total,data.row)},openAttachmentDetails:function(t){this.$refs.attachment.openAttachment(t.lineEntry,"reservation",t.row)},openAttachment:function(){this.$refs.attachment.openAttachment(this.$route.query.id,"reservation")},addLine:function(){this.form.CompanyName&&this.form.WhsCode&&this.form.RequestType&&this.form.DocDate&&this.form.ItemType?(this.$refs.childDetails.addLine(),this.$refs.childDetails.countDetailsRows()>1&&(this.isReadOnly=!0)):this.$refs.snackbar.display(1e4,"Company, Request Type, Request Date, Item Type and WhsCode Cannot Empty!")},checkCount:function(){this.$refs.childDetails.countDetailsRows()>1&&(this.isReadOnly=!0)},deleteAll:function(){var t=this.$route.query.id;if("update"===this.$route.query.status){var e="/api/reservation/delete-all/"+t;this.$refs.dialogDelete.openDialog(e)}},save:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this,form=this.form,r={},o=this.$route.query.status;n.submitLoad=!0;var details=n.$refs.childDetails.getAddData();details.forEach((function(t,e){n.$refs.childDetails.checkIfEmptyRow(e)||(r[e]=t)}));var data={form:form,details:r,type:t,status:o,Division:this.Division,U_NIK:this.U_NIK,approval:e};"add"===o?(this.store("post","/api/reservation/master",data,"insert",t),n.submitLoad=!1):"update"===o?(this.store("put","/api/reservation/master/"+this.form.U_DocEntry,data,"update",t),n.submitLoad=!1):(this.$router.push({name:"reservation"}),n.submitLoad=!1),n.submitLoad=!1},store:function(t,e,data,n){var r=this,o=this;o.submitLoad=!0,o.isDisable=!0,this.dialogLoading=!0,this.$axios({method:t,url:e,data:data}).then((function(t){r.dialogConfirm=!1,r.$swal({type:"success",title:"Success!",text:t.data.message}),r.success=t.data.message,o.$refs.snackbar.display(1e4,t.data.message),o.submitLoad=!1,o.isDisable=!1,setTimeout((function(){return r.success=!1}),8e3),r.dialogLoading=!1,setTimeout((function(){o.getData(t.data.data.U_DocEntry,"update")}),500),r.$router.push({path:"/reservation/form",query:{id:t.data.data.U_DocEntry,status:"update"}})})).catch((function(t){r.dialogLoading=!1,o.submitLoad=!1,o.isDisable=!1,r.$swal({type:"error",title:"Error",text:t.response.data.message})}))},getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e||this.$route.query.id,o=n||this.$route.query.status,l=void 0!==this.$route.query.entry?this.$route.query.entry:0;this.isApprovalDisable="add"===this.$route.query.status,"update"===o?(this.dialogLoading=!0,this.$axios.get("/api/reservation/master/".concat(r),{params:{entry:l}}).then((function(e){t.count_attachment=e.data.count_attachment,void 0!==e.data.header&&(t.form=Object.assign({},e.data.header),t.Division=Object.assign({},e.data.division),t.U_NIK=Object.assign({},e.data.user_nik),"-"!==t.form.ApprovalStatus&&"N"!==t.form.ApprovalStatus&&(t.isDisable=!0,t.isApprovalDisable=!0),parseInt(e.data.header.CreatedBy)!==parseInt(t.$auth.user.username)&&(t.isDisable=!0,t.isApprovalDisable=!0),"Reject"===e.data.header.AppStatus&&(t.isDisable=!0,t.isApprovalDisable=!0)),void 0!==e.data.rows&&t.$refs.childDetails.setDataToDetails(e.data.rows),t.breadcrumb=[{text:"Dashboard",disabled:!1,to:{path:"/"}},{text:"Reservation",disabled:!1,to:{path:"/reservation/request"}},{text:t.form.DocNum,disabled:!0,to:{path:"/reservation/form",query:{id:t.$route.query.id,status:t.$route.query.status}}}],t.dialogLoading=!1,t.$refs.snackbar.display(6e3,"Data loaded...")})).catch((function(e){t.dialogLoading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))):(this.breadcrumb=[{text:"Dashboard",disabled:!1,to:{path:"/"}},{text:"Reservation",disabled:!1,to:{path:"/reservation/request"}},{text:"Create Reservation",disabled:!0,to:{path:"/reservation/form"}}],this.$axios.get("/api/reservation/fetch-docnum").then((function(e){t.form.DocNum=e.data.DocNum,t.form.Token=e.data.token,t.$refs.childDetails.updateTableSettings()})))},printDocument:function(t){var e=this;"all"===t?this.loadingPrint2=!0:this.loadingPrint=!0,this.$axios.get("/api/reservation/print",{params:{form:this.form,type:t}}).then((function(n){window.open(n.data.message,"_blank"),"all"===t?e.loadingPrint2=!1:e.loadingPrint=!1})).catch((function(n){"all"===t?e.loadingPrint2=!1:e.loadingPrint=!1,e.$swal({type:"error",title:"Error",text:n.response.data.message})}))}}},o=n(88),l=n(107),c=n.n(l),d=n(621),m=n(690),h=n(105),v=n(123),f=n(87),y=n(376),D=n(373),_=n(833),x=n(277),I=n(564),C=n(590),w=n(591),S=n(128),$=n(589),O=n(50),k=n(565),R=n(375),j=n(604),T=n(276),A=n(186),L=n(70),N=n(558),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{xs12:"",sm12:""}},[n("v-card",[n("v-toolbar",{staticClass:"toolbar-content",staticStyle:{height:"32px"},attrs:{flat:"",color:"grey lighten-2",dense:""}},[n("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-breadcrumbs",{staticClass:"hidden-xs-only",attrs:{items:t.breadcrumb,divider:"/"}}),t._v(" "),n("v-spacer",{staticClass:"hidden-xs-only"}),t._v(" "),"Y"===t.form.ApprovalStatus&&"Non Ready Stock"===t.form.ItemType?n("v-btn",{staticClass:"white--text",attrs:{small:"",elevation:"4",color:"green darken-1",loading:t.loadingPrint2},on:{click:function(e){return t.printDocument("all")}}},[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-printer\n          ")]),t._v("\n          Print All\n        ")],1):t._e(),t._v(" "),"Y"===t.form.ApprovalStatus?n("v-btn",{staticClass:"white--text ml-3",attrs:{small:"",elevation:"4",color:"green darken-1",loading:t.loadingPrint},on:{click:function(e){return t.printDocument("partial")}}},[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-printer\n          ")]),t._v("\n          Print\n        ")],1):t._e(),t._v(" "),n("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.refreshData}},[n("v-icon",[t._v("mdi-refresh")])],1)],1),t._v(" "),n("v-form",[n("v-layout",{attrs:{wrap:""}},[t.message?n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"red darken-2 text-xs-center"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.message))])])]):t._e(),t._v(" "),t.success?n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"green darken-2 text-xs-center"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.success))])])]):t._e(),t._v(" "),n("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"pa-2",attrs:{md5:"",sm12:""}},[n("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("Company")])]),t._v(" "),n("v-col",{staticClass:"pr-md-2",attrs:{cols:"8",sm:"9",md:"4",lg:"4",xl:"4"}},[n("v-select",{attrs:{items:t.itemCompany,placeholder:"Company",readonly:t.isReadOnly,solo:"",dense:"","hide-details":"auto"},model:{value:t.form.CompanyName,callback:function(e){t.$set(t.form,"CompanyName",e)},expression:"form.CompanyName"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("Warehouse")])]),t._v(" "),n("v-col",{attrs:{cols:"8",sm:"9",md:"4",lg:"4",xl:"4"}},[n("v-select",{attrs:{clearable:"",items:t.itemUserWhs,placeholder:"Warehouse",readonly:t.isReadOnly,solo:"",dense:"","hide-details":"auto"},on:{change:function(e){return t.changeWhs()}},model:{value:t.form.WhsCode,callback:function(e){t.$set(t.form,"WhsCode",e)},expression:"form.WhsCode"}})],1)],1),t._v(" "),n("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("Requester")])]),t._v(" "),n("v-col",{staticClass:"pr-md-2",attrs:{cols:"8",sm:"9",md:"4",lg:"4",xl:"4"}},[n("v-autocomplete",{attrs:{items:t.itemUserNIK,filled:"",clearable:"",placeholder:"Requester","item-text":"U_UserName","item-value":"U_NIK",readonly:t.isReadOnly,dense:"",solo:"","hide-details":"auto"},on:{change:function(e){return t.changeDivision()}},scopedSlots:t._u([{key:"item",fn:function(data){return["object"!=typeof data.item?[n("v-list-item-content",{domProps:{textContent:t._s(data.item)}})]:[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(data.item.U_NIK)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{textContent:t._s(data.item.U_UserName)}})],1)]]}}]),model:{value:t.form.U_NIK,callback:function(e){t.$set(t.form,"U_NIK",e)},expression:"form.U_NIK"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("Division")])]),t._v(" "),n("v-col",{attrs:{cols:"8",sm:"9",md:"4",lg:"4",xl:"4"}},[n("v-text-field",{attrs:{readonly:"",placeholder:"Division",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.Division,callback:function(e){t.$set(t.form,"Division",e)},expression:"form.Division"}})],1)],1),t._v(" "),n("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("Request Type")])]),t._v(" "),n("v-col",{staticClass:"pr-md-2",attrs:{cols:"8",sm:"9",md:"4",lg:"4",xl:"4"}},[n("v-select",{attrs:{items:t.itemReqType,readonly:t.isReadOnly,placeholder:"Request Type",solo:"",dense:"",clearable:"","hide-details":"auto"},on:{change:function(e){return t.fillCheckbox()}},model:{value:t.form.RequestType,callback:function(e){t.$set(t.form,"RequestType",e)},expression:"form.RequestType"}})],1),t._v(" "),"For Restock SubWH"===t.form.RequestType?n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("Wh Transfer To")])]):t._e(),t._v(" "),"For Restock SubWH"===t.form.RequestType?n("v-col",{attrs:{cols:"8",sm:"9",md:"4",lg:"4",xl:"4"}},[n("v-select",{attrs:{items:t.itemUserWhs,readonly:t.isReadOnly,placeholder:"Wh Transfer To",solo:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.WhTo,callback:function(e){t.$set(t.form,"WhTo",e)},expression:"form.WhTo"}})],1):t._e()],1),t._v(" "),"Yes"===t.form.Is_Urgent?n("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("Urgent Reason")])]),t._v(" "),n("v-col",{attrs:{cols:"8",sm:"9",md:"10",lg:"10",xl:"10"}},[n("v-text-field",{attrs:{placeholder:"Urgent Reason",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.UrgentReason,callback:function(e){t.$set(t.form,"UrgentReason",e)},expression:"form.UrgentReason"}})],1)],1):t._e()],1),t._v(" "),n("v-flex",{staticClass:"pa-2 mt-sm-n3 mt-md-0",attrs:{md2:"",sm12:""}},["Non Ready Stock"===t.form.ItemType?n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"mt-2",attrs:{cols:"4",sm:"3",md:"2",lg:"3",xl:"3"}},[n("label",[t._v("Is Urgent?")])]),t._v(" "),n("v-col",{attrs:{cols:"8",sm:"9",md:"4",lg:"3",xl:"3"}},[n("v-checkbox",{attrs:{value:"Yes",dense:"","hide-details":"auto"},model:{value:t.form.Is_Urgent,callback:function(e){t.$set(t.form,"Is_Urgent",e)},expression:"form.Is_Urgent"}})],1)],1):t._e()],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md5:"",sm12:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("Item Type")])]),t._v(" "),n("v-col",{staticClass:"pr-md-2",attrs:{cols:"8",sm:"9",md:"4",lg:"4",xl:"4"}},[n("v-select",{attrs:{items:t.ItemType,placeholder:"Item Type",solo:"",dense:"",clearable:"update"!==t.$route.query.status,"hide-details":"auto",readonly:"update"===t.$route.query.status||t.isReadOnly},model:{value:t.form.ItemType,callback:function(e){t.$set(t.form,"ItemType",e)},expression:"form.ItemType"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("No")])]),t._v(" "),n("v-col",{attrs:{cols:"8",sm:"9",md:"4",lg:"4",xl:"4"}},[n("v-text-field",{attrs:{readonly:"",placeholder:"NO",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.DocNum,callback:function(e){t.$set(t.form,"DocNum",e)},expression:"form.DocNum"}})],1)],1),t._v(" "),n("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("Request Date")])]),t._v(" "),n("v-col",{staticClass:"pr-md-2",attrs:{cols:"8",sm:"9",md:"4",lg:"4",xl:"4"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{placeholder:"Request Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.DocDate,callback:function(e){t.$set(t.form,"DocDate",e)},expression:"form.DocDate"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":""},on:{change:t.changeDate,input:function(e){t.menu=!1}},model:{value:t.form.DocDate,callback:function(e){t.$set(t.form,"DocDate",e)},expression:"form.DocDate"}})],1)],1),t._v(" "),n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("Required Date")])]),t._v(" "),n("v-col",{attrs:{cols:"8",sm:"9",md:"4",lg:"4",xl:"4"}},[n("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{placeholder:"Required Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.RequiredDate,callback:function(e){t.$set(t.form,"RequiredDate",e)},expression:"form.RequiredDate"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.form.RequiredDate,callback:function(e){t.$set(t.form,"RequiredDate",e)},expression:"form.RequiredDate"}})],1)],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("Approval Status")])]),t._v(" "),n("v-col",{staticClass:"pr-2",attrs:{cols:"8",sm:"9",md:"4",lg:"4",xl:"4"}},[n("span",[t._v(": "+t._s(t.form.AppStatus))])]),t._v(" "),n("v-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[n("label",[t._v("Last Approved By")])]),t._v(" "),n("v-col",{attrs:{cols:"8",sm:"9",md:"4",lg:"4",xl:"4"}},[n("span",[t._v(": "+t._s(t.form.LastApproved))])])],1)],1)],1)],1),t._v(" "),n("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[n("v-layout",{attrs:{wrap:""}})],1),t._v(" "),n("div",{staticClass:"scroll-container"},[n("LazyResvReservationDetails",{ref:"childDetails",attrs:{form:t.form,"is-data-set":t.isDataSet},on:{openDialog:t.openDialog,openDialogAsset:t.openDialogAsset,getData:t.getData,openDialogLastResv:t.openDialogLastResv,openDeleteRow:t.openDeleteRow,openAttachmentDetails:t.openAttachmentDetails,closeDialog:t.closeDialog,checkCount:t.checkCount}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-card-actions",{staticClass:"padding-15"},[n("v-tooltip",{staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"white--text",attrs:{small:"",disabled:t.isDisable,color:"green darken-1"},on:{click:function(e){return t.addLine()}}},"v-btn",o,!1),r),[n("v-icon",{attrs:{small:""}},[t._v("\n                      mdi-plus\n                    ")])],1)]}}])},[t._v(" "),n("span",[t._v("Add Line")])]),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"pa-2",attrs:{md10:""}},[n("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"1"}},[n("label",[t._v("Notes")])]),t._v(" "),n("v-col",{attrs:{cols:"11"}},[n("v-text-field",{attrs:{placeholder:"Notes",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.Memo,callback:function(e){t.$set(t.form,"Memo",e)},expression:"form.Memo"}})],1)],1)],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"white--text",attrs:{small:"",loading:t.submitLoad,elevation:"2",disabled:t.isDisable,color:"blue"},on:{click:function(e){return t.save("all",!1)}}},[n("v-icon",{attrs:{left:""}},[t._v("\n                  mdi-file-document\n                ")]),t._v("\n                "+t._s("add"===t.$route.query.status?"Save As Draft":"Update Draft")+"\n              ")],1),t._v(" "),"update"===t.$route.query.status?n("v-tooltip",{staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return["update"===t.$route.query.status?n("v-btn",t._g(t._b({staticClass:"white--text ml-1",attrs:{small:"",elevation:"3",disabled:t.isDisable,color:"success"},on:{click:function(e){t.dialogConfirm=!0}}},"v-btn",o,!1),r),[n("v-icon",{attrs:{small:""}},[t._v("\n                      mdi-check\n                    ")])],1):t._e()]}}],null,!1,2283376712)},[t._v(" "),n("span",[t._v("Submit For Approval")])]):t._e(),t._v(" "),n("v-tooltip",{staticStyle:{"margin-top":"4px","margin-left":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"white--text ml-1",attrs:{small:"",loading:t.submitLoad3,elevation:"4",disabled:t.isDisable,color:"red darken-1"},on:{click:function(e){return t.deleteAll()}}},"v-btn",o,!1),r),[n("v-icon",{attrs:{small:""}},[t._v("\n                      mdi-delete\n                    ")])],1)]}}])},[t._v(" "),n("span",[t._v("Delete All")])])],1)],1)],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogConfirm,callback:function(e){t.dialogConfirm=e},expression:"dialogConfirm"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n          Submit for approval?\n        ")]),t._v(" "),n("v-card-text",[t._v("\n          Are you sure you want to submit for approval?\n        ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogConfirm=!1}}},[t._v("\n            No\n          ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad3},on:{click:function(e){return t.save("all",!0)}}},[t._v("\n            Yes, Submit\n          ")])],1)],1)],1)],1),t._v(" "),n("LazySnackbar",{ref:"snackbar"}),t._v(" "),n("LazyResvItemMasterData",{ref:"itemsMaster",attrs:{form:t.form},on:{selectItems:t.selectItems}}),t._v(" "),n("LazyResvAssetMasterData",{ref:"assetsMaster",attrs:{form:t.form},on:{selectAssets:t.selectAssets}}),t._v(" "),n("LazyResvLastResv",{ref:"lastResv",attrs:{form:t.form}}),t._v(" "),n("LazyResvDialogDelete",{ref:"dialogDelete",attrs:{url:t.urlDelete},on:{showMessage:t.showMessage}}),t._v(" "),t.dialogLoading?n("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e(),t._v(" "),n("LazyAttachment",{ref:"attachment",on:{eventCountAttachment:t.eventCountAttachment}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAutocomplete:d.a,VBreadcrumbs:m.a,VBtn:h.a,VCard:v.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCheckbox:y.a,VCol:D.a,VDatePicker:_.a,VDialog:x.a,VDivider:I.a,VFlex:C.a,VForm:w.a,VIcon:S.a,VLayout:$.a,VListItemContent:O.a,VListItemSubtitle:O.b,VListItemTitle:O.c,VMenu:k.a,VRow:R.a,VSelect:j.a,VSpacer:T.a,VTextField:A.a,VToolbar:L.a,VTooltip:N.a})}}]);