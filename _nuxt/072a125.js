(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{120:function(t,e,n){"use strict";var r={layout:"auth",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(421),n(88)),l=n(107),c=n.n(l),d=n(572),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"68e6a4f0",null);e.a=component.exports;c()(component,{VApp:d.a})},189:function(t,e,n){t.exports=n.p+"img/logo.01970f2.png"},267:function(t,e,n){"use strict";var r=n(2),o=n(367),l=n.n(o);r.a.use(l.a,{persistent:!0}),e.a=function(t,e){e("gates",r.a.prototype.$gates)}},268:function(t,e,n){"use strict";var r=n(2),o=n(368),l=n.n(o);r.a.mixin(l.a)},269:function(t,e,n){"use strict";var r=n(2),o=n(299);n(554);e.a=function(t){var e=t.app;r.a.use(o.q,{vuetify:e.vuetify,iconsGroup:"mdi"})}},340:function(t,e,n){var content=n(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("f9336d00",content,!0,{sourceMap:!1})},342:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("6ba62368",content,!0,{sourceMap:!1})},348:function(t,e,n){var content=n(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("cab491f0",content,!0,{sourceMap:!1})},352:function(t,e,n){var content=n(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("b2dfac16",content,!0,{sourceMap:!1})},370:function(t,e,n){"use strict";var r={data:function(){return{}}},o=(n(429),n(88)),l=n(107),c=n.n(l),d=n(572),v=n(573),f=n(574),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{staticClass:"bgAuth"},[e("v-main",[e("v-container",{attrs:{transition:"slide-x-transition",fluid:"","fill-height":""}},[e("router-view")],1)],1)],1)}),[],!1,null,"3c8b106c",null);e.a=component.exports;c()(component,{VApp:d.a,VContainer:v.a,VMain:f.a})},371:function(t,e,n){"use strict";var r=n(35),o=(n(100),{middleware:"auth",data:function(){return{clipped:!1,drawer:!1,fixed:!1,dark:void 0,items:[{icon:"mdi-home",title:"Welcome",icon_alt:"mdi-menu-down",children:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}]}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$auth.$storage.removeLocalStorage("app.default_name"),t.$router.push("/login");case 4:case"end":return e.stop()}}),e)})))()},changeDrawers:function(data){this.$refs.navDrawer.changeDrawer(data)}}}),l=(n(441),n(88)),c=n(107),d=n.n(c),v=n(572),f=n(578),m=n(575),h=n(105),_=n(573),x=n(564),w=n(128),V=n(258),k=n(259),y=n(172),$=n(50),C=n(145),L=n(574),S=n(576),D=n(276),I=n(183),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{staticClass:"v-bar--underline",attrs:{app:"",dense:"",color:t.dark?void 0:"white",flat:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{staticClass:"mt-1 ",attrs:{src:n(189),height:"30",alt:"E-KB"}})])],1),t._v(" "),r("v-spacer"),t._v(" "),r("span",{staticClass:"hidden-xs-only"},[t._v("Hi, "+t._s(t.$auth.user.data.user.name)+" ")]),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:"green lighten-2"},on:{click:t.logout}},[r("v-icon",[t._v("mdi-logout-variant")])],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("NuxtLink",{attrs:{to:{name:"index"}}},[r("img",{staticClass:"mt-1 ml-15",attrs:{src:n(189),height:"36",alt:"E-KB"}})]),t._v(" "),r("v-divider"),t._v(" "),r("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return r("v-list-group",{key:e.text,attrs:{"prepend-icon":e.icon_alt},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.children,(function(e,i){return r("v-list-item",{key:i,attrs:{link:"",to:e.to}},[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),t._v(" "),e.icon?r("v-list-item-icon",[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1):t._e()],1)}))],2)})),1)],1),t._v(" "),r("v-main",{staticClass:"grey lighten-4"},[r("v-container",{attrs:{fluid:""}},[r("Nuxt")],1)],1)],1)}),[],!1,null,"2228de4e",null);e.a=component.exports;d()(component,{VApp:v.a,VAppBar:f.a,VAppBarNavIcon:m.a,VBtn:h.a,VContainer:_.a,VDivider:x.a,VIcon:w.a,VList:V.a,VListGroup:k.a,VListItem:y.a,VListItemContent:$.a,VListItemIcon:C.a,VListItemTitle:$.c,VMain:L.a,VNavigationDrawer:S.a,VSpacer:D.a,VToolbarTitle:I.a})},372:function(t,e,n){"use strict";var r=n(35),o=(n(100),{middleware:"auth",data:function(){return{clipped:!1,drawer:!1,fixed:!1,dark:void 0,items:[],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},mounted:function(){this.activateMultipleDraggableDialogs(),this.drawer="HELP DESK"===this.$auth.$storage.getLocalStorage("app.default_name")||this.drawer},created:function(){this.menus(),this.rolePermission()},methods:{rolePermission:function(){var t=this;this.$axios.get("/api/auth/roles").then((function(e){t.$gates.setRoles(e.data)})),this.$axios.get("/api/auth/permissions").then((function(e){t.$gates.setPermissions(e.data)}))},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$auth.$storage.removeLocalStorage("app.default_name"),t.$auth.$storage.removeLocalStorage("employee"),t.$auth.$storage.removeLocalStorage("country"),localStorage.removeItem("roles"),localStorage.removeItem("permissions");case 7:case"end":return e.stop()}}),e)})))()},menus:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,menu;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$auth.$storage.getLocalStorage("app.default_name"),e.next=3,t.$axios.get("/api/menus",{params:{appName:n}});case 3:menu=e.sent,t.items=menu.data.data.menus;case 5:case"end":return e.stop()}}),e)})))()},changeDrawers:function(data){this.$refs.navDrawer.changeDrawer(data)}}}),l=(n(484),n(88)),c=n(107),d=n.n(c),v=n(572),f=n(578),m=n(575),h=n(105),_=n(123),x=n(373),w=n(573),V=n(564),k=n(577),y=n(128),$=n(258),C=n(259),L=n(172),S=n(50),D=n(145),I=n(574),E=n(565),z=n(576),N=n(276),P=n(183),M=n(558),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{staticClass:"v-bar--underline",attrs:{app:"",dense:"",color:t.dark?void 0:"white",flat:"","clipped-left":""}},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{staticClass:"mt-1 ",attrs:{src:n(189),height:"30",alt:"E-KB"}})])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-0",attrs:{icon:""}},n),[r("v-icon",{attrs:{size:"25"}},[t._v("mdi-bell")])],1)]}}])},[t._v(" "),r("span",[t._v("Notifications")])]),t._v(" "),r("v-menu",{attrs:{"offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"white--text",attrs:{"x-small":"",color:"green",depressed:"",fab:""}},n),[t._v("\n          "+t._s(t.$auth.loggedIn?t.$auth.user.name.substring(0,1):"")+"\n        ")])]}}])},[t._v(" "),r("v-card",[r("v-list",{attrs:{dense:"",nav:""}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$auth.user.name))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(t.$auth.user.position))])],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list",{attrs:{dense:"",nav:""}},[r("v-list-item",{on:{click:t.logout}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-login-variant")])],1),t._v(" "),r("v-list-item-title",[t._v("Sign out")])],1)],1)],1)],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{app:"",clipped:"HELP DESK"===t.$auth.$storage.getLocalStorage("app.default_name"),temporary:"HELP DESK"!==t.$auth.$storage.getLocalStorage("app.default_name")},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},["HELP DESK"!==t.$auth.$storage.getLocalStorage("app.default_name")?r("NuxtLink",{attrs:{to:{name:"index"}}},[r("img",{staticClass:"mt-1 ml-15",attrs:{src:n(189),height:"36",alt:"E-KB"}}),t._v(" "),r("v-divider")],1):t._e(),t._v(" "),r("v-list",{attrs:{dense:"",nav:"",expand:""}},t._l(t.items,(function(e){return r("v-list-group",{key:e.menu,attrs:{"prepend-icon":e.icon,"append-icon":"mdi-menu-down"},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.menu)}})],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.children,(function(e,i){return r("v-list-item",{key:i,staticStyle:{"padding-left":"64px"},attrs:{link:"",to:e.route_name}},[r("v-list-item-title",{domProps:{textContent:t._s(e.menu)}}),t._v(" "),e.icon?r("v-list-item-icon",[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1):t._e()],1)}))],2)})),1)],1),t._v(" "),r("v-main",{staticClass:"grey lighten-4"},[r("v-container",{attrs:{fluid:""}},[r("Nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{color:"grey lighten-3",padless:""}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("\n      Copyright © "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v(" IMIP ERP ")])])],1)],1)}),[],!1,null,"0d57b034",null);e.a=component.exports;d()(component,{VApp:v.a,VAppBar:f.a,VAppBarNavIcon:m.a,VBtn:h.a,VCard:_.a,VCol:x.a,VContainer:w.a,VDivider:V.a,VFooter:k.a,VIcon:y.a,VList:$.a,VListGroup:C.a,VListItem:L.a,VListItemContent:S.a,VListItemIcon:D.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VMain:I.a,VMenu:E.a,VNavigationDrawer:z.a,VSpacer:N.a,VToolbarTitle:P.a,VTooltip:M.a})},395:function(t,e,n){n(396),t.exports=n(397)},414:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;if(e.state.auth.loggedIn)return n("/")}},415:function(t,e,n){"use strict";n.r(e),e.default=function(t){t.store,t.redirect}},421:function(t,e,n){"use strict";n(340)},422:function(t,e,n){var r=n(19)(!1);r.push([t.i,"h1[data-v-68e6a4f0]{font-size:20px}",""]),t.exports=r},427:function(t,e,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("d5573df6",content,!0,{sourceMap:!1})},428:function(t,e,n){var r=n(19)(!1);r.push([t.i,".scroll-container{width:100%;height:360px;overflow:hidden}.scroll-container-mini{width:100%;height:200px;overflow:hidden}.v-text-field--filled.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot{min-height:24px!important}.v-text-field.v-text-field--solo.v-input--dense>.v-input__control{min-height:24px!important;font-size:12px!important}.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot{box-shadow:none!important;border:1px solid #8a8a8a!important}.v-text-field__details{display:flex;flex:1 0 auto;max-width:100%;min-height:1px!important;overflow:hidden}.v-text-field.v-text-field--solo .v-label{top:calc(50% - 9px);font-size:small!important}.v-text-field.v-input--dense:not(.v-text-field--outlined) input{padding:2px 0!important;font-size:12px!important}.ht_clone_top{z-index:7}.v-navigation-drawer--temporary{z-index:999!important}.v-menu__content.theme--light.menuable__content__active{z-index:800!important}.v-picker__body{z-index:799!important}.bg-green{background-color:#b3ec95}.bg-red{background-color:#e84f65}.bg-white{background-color:#f8f8f8}.bg-orange{background-color:#fdef9a}.btnToTenant{height:100%;background:#e6a23c}.btnDelete,.btnToTenant{width:99%;text-align:center;font:12px sans-serif;padding:5px;color:#fff}.btnDelete{background:#ff1230}.btnSPB{background:#ffca1a}.btnNPB,.btnSPB{width:99%;text-align:center;font:12px sans-serif;padding:5px;color:#fff}.btnNPB{background:#85ce61}.v-data-table__wrapper table tbody tr:hover{cursor:pointer}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{border-right:1px solid rgba(0,0,0,.12)!important}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.7rem!important;height:28px!important}.v-card__subtitle,.v-card__text{font-size:.775rem!important}.v-btn{text-transform:capitalize!important}.v-dialog>.v-card>.v-card__title{padding:5px 24px!important}tbody tr td .v-btn--icon.v-size--default{height:20px;width:20px}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td{padding:0 3px!important}.v-list-item{align-items:center;display:flex;flex:1 1 100%;letter-spacing:normal;min-height:30px!important;outline:none;padding:0 16px;position:relative;text-decoration:none}.v-icon.v-icon{font-size:20px!important}body{font-size:12px!important}.v-list-item__title{font-size:inherit!important}.v-toolbar__title{font-size:.9rem!important}.v-data-table>.v-data-table__wrapper>table>thead>tr>th{font-size:1em;padding:0 3px!important}.v-application .headline{font-size:1.3rem!important}.toolbar-content .v-toolbar__content{height:32px!important}.theme--light.v-card{color:#222!important}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:#222!important}.handsontable .htDimmed{color:#222!important}.v-text-field.v-text-field--solo.v-input--dense .v-input__append-outer,.v-text-field.v-text-field--solo.v-input--dense .v-input__prepend-outer{margin-top:2px!important}.v-data-table-header{background-color:#c8dff1}.dropzone{min-height:50px!important;padding:0!important}.disable-wrap{white-space:nowrap!important}",""]),t.exports=r},429:function(t,e,n){"use strict";n(342)},430:function(t,e,n){var r=n(19)(!1);r.push([t.i,".bgAuth[data-v-3c8b106c]{background-color:#eee;background-repeat:no-repeat!important;background-size:cover!important}",""]),t.exports=r},441:function(t,e,n){"use strict";n(348)},442:function(t,e,n){var r=n(19)(!1);r.push([t.i,".v-toolbar--flat[data-v-2228de4e]{box-shadow:0 1px 0 0 rgb(0 0 0/20%),0 0 0 0 rgb(0 0 0/14%),0 0 0 0 rgb(0 0 0/12%)!important}",""]),t.exports=r},484:function(t,e,n){"use strict";n(352)},485:function(t,e,n){var r=n(19)(!1);r.push([t.i,".v-toolbar--flat[data-v-0d57b034]{box-shadow:0 1px 0 0 rgb(0 0 0/20%),0 0 0 0 rgb(0 0 0/14%),0 0 0 0 rgb(0 0 0/12%)!important}",""]),t.exports=r},496:function(t,e,n){"use strict";n.r(e),n.d(e,"getters",(function(){return r}));var r={user:function(t){return t.auth.user},isLoggedIn:function(t){return t.auth.loggedIn}}},518:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=518}},[[395,99,9,100]]]);