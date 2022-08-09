(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{652:function(e,t,n){"use strict";n.r(t);n(28);var o={name:"DialogPermission",data:function(){return{loadingPermission:!1,dialogPermission:!1,dialogTitle:"",role:"",userRole:[],form:{},canAddData:!1,type:""}},mounted:function(){this.getPermissionList()},methods:{getPermissionList:function(){var e=this;this.$axios.get("/api/master/permissions").then((function(t){e.$auth.$storage.setLocalStorage("permission_list",JSON.stringify(t.data.data.simple))}))},openDialogPermission:function(e,title){this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},e),this.canAddData=!0,this.getPermissionUser(e),this.type="user"},getPermissionUser:function(e){var t=this;this.userRole=null,this.$axios.get("/api/master/users/permission",{params:{form:e}}).then((function(e){t.$refs.childDetails.setDataToDetails(e.data.data.rows)})).finally((function(e){t.loadingPermission=!1}))},closeDialogPermission:function(){this.dialogPermission=!1,this.userRole=[],this.canAddData=!1},openRolePermissions:function(e,title,t){var n=this;this.type=t,this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},e);var o="";"user"===t?o="/api/master/users/roles":(this.canAddData=!0,o="/api/master/permission-role"),this.$axios.get(o,{params:{form:this.form}}).then((function(e){"user"===t?(n.userRole=e.data.data.rows,n.changeTab(n.userRole[0])):(n.$refs.childDetails.setDataToDetails(e.data.data.rows),n.loadingPermission=!1)}))},changeTab:function(e){var t=this;this.loadingPermission=!0,this.$axios.get("/api/master/permission-role",{params:{form:e}}).then((function(e){t.$refs.childDetails.setDataToDetails(e.data.data.rows)})).finally((function(e){t.loadingPermission=!1}))},getRolePermissionUser:function(e){var t=this;this.$axios.get("/api/master/users/role-permission",{params:{item:e}}).then((function(e){t.$refs.childDetails.setDataToDetails(e.data.data.rows)})).finally((function(e){t.loadingPermission=!1}))},getPermissionRole:function(e){var t=this;this.$axios.get("/api/master/permission-role",{params:{form:this.form}}).then((function(e){t.$refs.childDetails.setDataToDetails(e.data.data.rows)})).finally((function(e){t.loadingPermission=!1}))},saveRolePermission:function(){var e=this;this.loadingPermission=!0;var details=this.$refs.childDetails.getAddData(),t="";t="user"===this.type?"/api/master/users/permission":"/api/master/permission-role",this.$axios.post(t,{details:details,form:this.form}).then((function(t){e.$swal({icon:"success",title:"Success",text:t.data.message}),"user"===e.type?e.getPermissionUser(e.form):e.getPermissionRole(e.form)})).catch((function(t){e.$swal({icon:"error",title:"Error",text:t.response.data.message})})).finally((function(t){e.loadingPermission=!1}))}}},r=n(65),l=n(83),c=n.n(l),d=n(108),m=n(126),h=n(52),f=n(283),v=n(132),P=n(282),D=n(575),_=n(576),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:"","max-width":"1000px"},model:{value:e.dialogPermission,callback:function(t){e.dialogPermission=t},expression:"dialogPermission"}},[n("v-card",{attrs:{loading:e.loadingPermission}},[n("v-card-title",[n("span",{staticClass:"font-weight-medium"},[e._v("\n          "+e._s(e.dialogTitle)+"\n        ")])]),e._v(" "),n("v-card-text",[e.userRole?n("v-tabs",{attrs:{centered:"","slider-color":"green"},model:{value:e.role,callback:function(t){e.role=t},expression:"role"}},e._l(e.userRole,(function(t,o){return n("v-tab",{key:o,attrs:{href:"#tab-"+o},on:{change:function(n){return e.changeTab(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])})),1):e._e(),e._v(" "),n("div",{staticClass:"scroll-container"},[n("LazyMasterPermissionList",{ref:"childDetails"})],1)],1),e._v(" "),n("v-card-actions",[e.canAddData?n("v-btn",{staticClass:"white--text",attrs:{"x-small":"",color:"orange darken-1"},on:{click:function(t){return e.$refs.childDetails.addLine()}}},[n("v-icon",{attrs:{"x-small":""}},[e._v("\n          mdi-plus\n        ")])],1):e._e(),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",dark:"",small:""},on:{click:e.closeDialogPermission}},[e._v("\n        close\n      ")]),e._v(" "),e.canAddData?n("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:e.loadingPermission},on:{click:function(t){return e.saveRolePermission()}}},[e._v("\n        Save\n      ")]):e._e()],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDialog:f.a,VIcon:v.a,VSpacer:P.a,VTab:D.a,VTabs:_.a})}}]);