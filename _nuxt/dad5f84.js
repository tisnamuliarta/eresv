(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{123:function(t,e,n){"use strict";var r={layout:"auth",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(436),n(65)),l=n(83),c=n.n(l),v=n(587),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"68e6a4f0",null);e.a=component.exports;c()(component,{VApp:v.a})},137:function(t,e,n){t.exports=n.p+"img/logo.01970f2.png"},272:function(t,e,n){"use strict";var r=n(2),o=n(379),l=n.n(o);r.a.use(l.a,{persistent:!0}),e.a=function(t,e){e("gates",r.a.prototype.$gates)}},273:function(t,e,n){"use strict";var r=n(2),o=n(380),l=n.n(o);r.a.mixin(l.a)},274:function(t,e,n){"use strict";n(28),n(39),n(46),n(289);e.a=function(t){var e=t.$axios,n=t.$config,r=n.baseApi;n.nodeEnv;e.defaults.baseURL=function(t){try{return Boolean(new URL(t))}catch(t){return!1}}?r:window.location.protocol+"//"+window.location.host+r}},275:function(t,e,n){"use strict";var r=n(387);n(2).a.use(r.a,{loadOptions:{apiKey:"ue4YZik2q8PeLA2F8Cuy"}})},276:function(t,e,n){"use strict";var r=n(2),o=n(311);n(571);e.a=function(t){var e=t.app;r.a.use(o.q,{vuetify:e.vuetify,iconsGroup:"mdi"})}},352:function(t,e,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("448e053e",content,!0,{sourceMap:!1})},354:function(t,e,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("433492b4",content,!0,{sourceMap:!1})},358:function(t,e,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("4cacd4c6",content,!0,{sourceMap:!1})},362:function(t,e,n){var content=n(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("783e9fd1",content,!0,{sourceMap:!1})},364:function(t,e,n){var content=n(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("eea061c0",content,!0,{sourceMap:!1})},382:function(t,e,n){"use strict";var r={data:function(){return{}}},o=(n(444),n(65)),l=n(83),c=n.n(l),v=n(587),d=n(588),m=n(589),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{staticClass:"bgAuth"},[e("v-main",[e("v-container",{attrs:{transition:"slide-x-transition",fluid:"","fill-height":""}},[e("router-view")],1)],1)],1)}),[],!1,null,"3c8b106c",null);e.a=component.exports;c()(component,{VApp:v.a,VContainer:d.a,VMain:m.a})},383:function(t,e,n){"use strict";var r=n(32),o=(n(93),{middleware:"auth",data:function(){return{clipped:!1,drawer:!1,fixed:!1,dark:void 0,items:[{icon:"mdi-home",title:"Welcome",icon_alt:"mdi-menu-down",children:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}]}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$auth.$storage.removeLocalStorage("app.default_name"),t.$router.push("/login");case 4:case"end":return e.stop()}}),e)})))()},changeDrawers:function(data){this.$refs.navDrawer.changeDrawer(data)}}}),l=(n(456),n(65)),c=n(83),v=n.n(c),d=n(587),m=n(593),f=n(590),h=n(108),_=n(588),x=n(580),w=n(132),k=n(261),V=n(262),$=n(178),y=n(33),C=n(150),L=n(589),S=n(591),I=n(283),N=n(110),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{staticClass:"v-bar--underline",attrs:{app:"",dense:"",color:t.dark?void 0:"white",flat:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{staticClass:"mt-1 ",attrs:{src:n(137),height:"30",alt:"E-KB"}})])],1),t._v(" "),r("v-spacer"),t._v(" "),r("span",{staticClass:"hidden-xs-only"},[t._v("Hi, "+t._s(t.$auth.user.data.user.name)+" ")]),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:"green lighten-2"},on:{click:t.logout}},[r("v-icon",[t._v("mdi-logout-variant")])],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("NuxtLink",{attrs:{to:{name:"index"}}},[r("img",{staticClass:"mt-1 ml-15",attrs:{src:n(137),height:"36",alt:"E-KB"}})]),t._v(" "),r("v-divider"),t._v(" "),r("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return r("v-list-group",{key:e.text,attrs:{"prepend-icon":e.icon_alt},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.children,(function(e,i){return r("v-list-item",{key:i,attrs:{link:"",to:e.to}},[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),t._v(" "),e.icon?r("v-list-item-icon",[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1):t._e()],1)}))],2)})),1)],1),t._v(" "),r("v-main",{staticClass:"grey lighten-4"},[r("v-container",{attrs:{fluid:""}},[r("Nuxt")],1)],1)],1)}),[],!1,null,"2228de4e",null);e.a=component.exports;v()(component,{VApp:d.a,VAppBar:m.a,VAppBarNavIcon:f.a,VBtn:h.a,VContainer:_.a,VDivider:x.a,VIcon:w.a,VList:k.a,VListGroup:V.a,VListItem:$.a,VListItemContent:y.a,VListItemIcon:C.a,VListItemTitle:y.c,VMain:L.a,VNavigationDrawer:S.a,VSpacer:I.a,VToolbarTitle:N.a})},384:function(t,e,n){"use strict";var r=n(32),o=(n(93),n(37),{middleware:"auth",data:function(){return{clipped:!1,drawer:!1,fixed:!1,dark:void 0,items:[],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},mounted:function(){},created:function(){this.menus(),this.rolePermission()},methods:{rolePermission:function(){var t=this;this.$axios.get("/api/auth/roles").then((function(e){t.$gates.setRoles(e.data)})),this.$axios.get("/api/auth/permissions").then((function(e){t.$gates.setPermissions(e.data)}))},getUserName:function(){if(this.$auth.loggedIn){return(this.$auth.user.name?this.$auth.user.name:this.$auth.user.username).substring(0,1)}return""},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$auth.$storage.removeLocalStorage("app.default_name"),t.$auth.$storage.removeLocalStorage("employee"),t.$auth.$storage.removeLocalStorage("country"),localStorage.removeItem("roles"),localStorage.removeItem("permissions");case 7:case"end":return e.stop()}}),e)})))()},menus:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,menu;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$auth.$storage.getLocalStorage("app.default_name"),e.next=3,t.$axios.get("/api/menus",{params:{appName:n}});case 3:menu=e.sent,t.items=menu.data.data.menus;case 5:case"end":return e.stop()}}),e)})))()},changeDrawers:function(data){this.$refs.navDrawer.changeDrawer(data)}}}),l=(n(499),n(65)),c=n(83),v=n.n(c),d=n(587),m=n(593),f=n(590),h=n(108),_=n(126),x=n(388),w=n(588),k=n(580),V=n(592),$=n(132),y=n(261),C=n(262),L=n(178),S=n(33),I=n(150),N=n(589),D=n(581),A=n(591),P=n(283),z=n(110),E=n(575),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{staticClass:"v-bar--underline",attrs:{app:"",dense:"",color:t.dark?void 0:"white",flat:"","clipped-left":""}},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{staticClass:"mt-1",attrs:{src:n(137),height:"30",alt:"E-KB"}})])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-0",attrs:{small:"",icon:""}},n),[r("v-icon",{attrs:{size:"25"}},[t._v("mdi-bell")])],1)]}}])},[t._v(" "),r("span",[t._v("Notifications")])]),t._v(" "),"Yes"===t.$auth.user.is_superuser?r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-2 ml-2",attrs:{small:"",icon:""},on:{click:function(e){return t.$router.push({path:"/list"})}}},n),[r("v-icon",{attrs:{size:"25"}},[t._v("mdi-view-list")])],1)]}}],null,!1,3062530172)},[t._v(" "),r("span",[t._v("List")])]):t._e(),t._v(" "),"HELP DESK"===t.$auth.$storage.getLocalStorage("app.default_name")?r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.push("/list")}}},[r("v-icon",[t._v("mdi-cog")])],1):t._e(),t._v(" "),r("v-menu",{attrs:{"offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"white--text",attrs:{"x-small":"",color:"green",depressed:"",fab:""}},n),[t._v("\n          "+t._s(t.getUserName())+"\n        ")])]}}])},[t._v(" "),r("v-card",[r("v-list",{attrs:{dense:"",nav:""}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$auth.user.name))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(t.$auth.user.position))])],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list",{attrs:{dense:"",nav:""}},[r("v-list-item",{on:{click:t.logout}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-login-variant")])],1),t._v(" "),r("v-list-item-title",[t._v("Sign out")])],1)],1)],1)],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("NuxtLink",{attrs:{to:{name:"index"}}},[r("img",{staticClass:"mt-1 ml-15",attrs:{src:n(137),height:"36",alt:"E-KB"}}),t._v(" "),r("v-divider")],1),t._v(" "),r("v-list",{attrs:{dense:"",nav:"",expand:""}},t._l(t.items,(function(e){return r("v-list-group",{key:e.menu,attrs:{"prepend-icon":e.icon,"append-icon":"mdi-menu-down"},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.menu)}})],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.children,(function(e,i){return r("v-list-item",{key:i,staticStyle:{"padding-left":"64px"},attrs:{link:"",to:e.route_name}},[r("v-list-item-title",{domProps:{textContent:t._s(e.menu)}}),t._v(" "),e.icon?r("v-list-item-icon",[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1):t._e()],1)}))],2)})),1)],1),t._v(" "),r("v-main",{staticClass:"grey lighten-4"},[r("v-container",{attrs:{fluid:""}},[r("Nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{color:"grey lighten-3",padless:""}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("\n      Copyright © "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v(" IMIP ERP ")])])],1)],1)}),[],!1,null,"362880bd",null);e.a=component.exports;v()(component,{VApp:d.a,VAppBar:m.a,VAppBarNavIcon:f.a,VBtn:h.a,VCard:_.a,VCol:x.a,VContainer:w.a,VDivider:k.a,VFooter:V.a,VIcon:$.a,VList:y.a,VListGroup:C.a,VListItem:L.a,VListItemContent:S.a,VListItemIcon:I.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VMain:N.a,VMenu:D.a,VNavigationDrawer:A.a,VSpacer:P.a,VToolbarTitle:z.a,VTooltip:E.a})},385:function(t,e,n){"use strict";var r=n(32),o=(n(37),n(93),n(363)),l={middleware:"auth",data:function(){return{clipped:!1,drawer:!1,fixed:!1,dark:void 0,items:[],eportalUrl:"https://eportal.imip.co.id",miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js",listApps:[]}},mounted:function(){},created:function(){this.checkSession(),this.menus(),this.rolePermission()},methods:{getApps:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$auth.$storage.getState("portalToken"),e.next=3,t.$axios.get("https://eportal.imip.co.id/backend/api/widget1",{headers:{Authorization:"Bearer ".concat(n)}});case 3:r=e.sent,t.listApps=r.data.app;case 5:case"end":return e.stop()}}),e)})))()},checkSession:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,v,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.a.load({monitoring:!1}),e.next=3,n;case 3:return r=e.sent,e.next=6,r.get();case 6:if(l=e.sent,c=l.visitorId,v=c,t.$auth.$storage.setState("sessions_key",v),console.log("https://eportal.imip.co.id:3001/eresv"),t.$auth.$storage.getState("sessions_key")){e.next=15;break}t.logout(),e.next=19;break;case 15:return e.next=17,t.$axios.get("/api/auth/session",{params:{sessions_key:v,base_url:"https://eportal.imip.co.id:3001/eresv"}});case 17:!0===(d=e.sent).data.status?(t.listApps=d.data.list_app,d.data.app||(window.location.href="https://eportal.imip.co.id")):t.logout();case 19:case"end":return e.stop()}}),e)})))()},rolePermission:function(){var t=this;this.$axios.get("/api/auth/roles").then((function(e){t.$gates.setRoles(e.data)})),this.$axios.get("/api/auth/permissions").then((function(e){t.$gates.setPermissions(e.data)}))},getUserName:function(){if(this.$auth.loggedIn){return(this.$auth.user.name?this.$auth.user.name:this.$auth.user.username).substring(0,1)}return""},selectApp:function(t){window.location.href=t},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$auth.$storage.removeState("sessions_key"),t.$auth.$storage.removeLocalStorage("app.default_name"),t.$auth.$storage.removeLocalStorage("employee"),t.$auth.$storage.removeLocalStorage("country"),localStorage.removeItem("roles"),localStorage.removeItem("permissions"),window.location.href="https://eportal.imip.co.id/logout?service=https://eportal.imip.co.id:3001/eresv",t.$router.push("/login");case 10:case"end":return e.stop()}}),e)})))()},menus:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,menu;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$auth.$storage.getLocalStorage("app.default_name"),e.next=3,t.$axios.get("/api/menus",{params:{appName:n}});case 3:menu=e.sent,t.items=menu.data.data.menus;case 5:case"end":return e.stop()}}),e)})))()},changeDrawers:function(data){this.$refs.navDrawer.changeDrawer(data)}}},c=(n(511),n(65)),v=n(83),d=n.n(v),m=n(587),f=n(593),h=n(590),_=n(108),x=n(126),w=n(388),k=n(588),V=n(580),$=n(592),y=n(132),C=n(261),L=n(262),S=n(178),I=n(33),N=n(150),D=n(589),A=n(581),P=n(591),z=n(283),E=n(110),T=n(575),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{staticClass:"v-bar--underline",attrs:{app:"",dense:"",color:t.dark?void 0:"white",flat:"","clipped-left":""}},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{staticClass:"mt-1",attrs:{src:n(137),height:"30",alt:"E-KB"}})])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-0",attrs:{small:"",icon:""}},n),[r("v-icon",{attrs:{size:"25"}},[t._v("mdi-bell")])],1)]}}])},[t._v(" "),r("span",[t._v("Notifications")])]),t._v(" "),"Yes"===t.$auth.user.is_superuser||"Y"===t.$auth.user.is_admin_subwh?r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-2 ml-2",attrs:{small:"",icon:""},on:{click:function(e){return t.$router.push({path:"/list"})}}},n),[r("v-icon",{attrs:{size:"25"}},[t._v("mdi-view-list")])],1)]}}],null,!1,3062530172)},[t._v(" "),r("span",[t._v("List")])]):t._e(),t._v(" "),"HELP DESK"===t.$auth.$storage.getLocalStorage("app.default_name")?r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.push("/list")}}},[r("v-icon",[t._v("mdi-cog")])],1):t._e(),t._v(" "),r("v-menu",{attrs:{"offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var menu=e.on,n=e.attrs;return[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g(t._b({staticClass:"white--text mr-2",attrs:{small:"",color:"green",depressed:"",icon:""}},"v-btn",n,!1),Object.assign({},o,menu)),[r("v-icon",[t._v("mdi-apps")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("List Apps")])])]}}])},[t._v(" "),r("v-card",[r("v-list",{attrs:{dense:"",nav:""}},t._l(t.listApps,(function(e,n){return r("v-list-item",{key:n,on:{click:function(n){return t.selectApp(e.app_url)}}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(e.app_icon))])],1),t._v(" "),r("v-list-item-title",[t._v(t._s(e.app_name))])],1)})),1)],1)],1),t._v(" "),r("v-menu",{attrs:{"offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"white--text",attrs:{"x-small":"",color:"green",depressed:"",fab:""}},n),[t._v("\n          "+t._s(t.getUserName())+"\n        ")])]}}])},[t._v(" "),r("v-card",[r("v-list",{attrs:{dense:"",nav:""}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$auth.user.name))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(t.$auth.user.position))])],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list",{attrs:{dense:"",nav:""}},[r("v-list-item",{on:{click:t.logout}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-login-variant")])],1),t._v(" "),r("v-list-item-title",[t._v("Sign out")])],1)],1)],1)],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("NuxtLink",{attrs:{to:{name:"index"}}},[r("img",{staticClass:"mt-1 ml-15",attrs:{src:n(137),height:"36",alt:"E-KB"}}),t._v(" "),r("v-divider")],1),t._v(" "),r("v-list",{attrs:{dense:"",nav:"",expand:""}},t._l(t.items,(function(e){return r("v-list-group",{key:e.menu,attrs:{"prepend-icon":e.icon,"append-icon":"mdi-menu-down"},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.menu)}})],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.children,(function(e,i){return r("v-list-item",{key:i,staticStyle:{"padding-left":"64px"},attrs:{link:"",to:e.route_name}},[r("v-list-item-title",{domProps:{textContent:t._s(e.menu)}}),t._v(" "),e.icon?r("v-list-item-icon",[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1):t._e()],1)}))],2)})),1)],1),t._v(" "),r("v-main",{staticClass:"grey lighten-4"},[r("v-container",{attrs:{fluid:""}},[r("Nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{color:"grey lighten-3",padless:""}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("\n      Copyright © "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v(" IMIP ERP ")])])],1)],1)}),[],!1,null,"2ebe1f18",null);e.a=component.exports;d()(component,{VApp:m.a,VAppBar:f.a,VAppBarNavIcon:h.a,VBtn:_.a,VCard:x.a,VCol:w.a,VContainer:k.a,VDivider:V.a,VFooter:$.a,VIcon:y.a,VList:C.a,VListGroup:L.a,VListItem:S.a,VListItemContent:I.a,VListItemIcon:N.a,VListItemSubtitle:I.b,VListItemTitle:I.c,VMain:D.a,VMenu:A.a,VNavigationDrawer:P.a,VSpacer:z.a,VToolbarTitle:E.a,VTooltip:T.a})},386:function(t,e,n){"use strict";var r={name:"DialogLayout",middleware:"auth",data:function(){return{dialog:!0,title:""}},created:function(){var t=this;this.$nuxt.$on("setTitle",(function(e){return t.setTitle(e)}))},methods:{setTitle:function(data){this.title=data},close:function(){this.$router.back()}}},o=n(65),l=n(83),c=n.n(l),v=n(587),d=n(108),m=n(126),f=n(52),h=n(588),_=n(284),x=n(580),w=n(132),k=n(283),V=n(110),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",persistent:"",transition:"dialog-top-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{tile:"",height:"100vh",width:"100vw"}},[n("v-card-title",[n("v-toolbar-title",[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-progress-pencil")])],1),t._v(" "),n("span",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",dark:"",color:"red"},on:{click:t.close}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"pl-0 pr-0"},[n("v-container",{attrs:{fluid:""}},[n("Nuxt")],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"mr-3",attrs:{color:"green darken-1",dark:"",small:""},on:{click:t.close}},[t._v("\n          Done\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:v.a,VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VContainer:h.a,VDialog:_.a,VDivider:x.a,VIcon:w.a,VSpacer:k.a,VToolbarTitle:V.a})},410:function(t,e,n){n(411),t.exports=n(412)},429:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;if(e.state.auth.loggedIn)return n("/")}},430:function(t,e,n){"use strict";n.r(e),e.default=function(t){t.store,t.redirect}},436:function(t,e,n){"use strict";n(352)},437:function(t,e,n){var r=n(19)(!1);r.push([t.i,"h1[data-v-68e6a4f0]{font-size:20px}",""]),t.exports=r},442:function(t,e,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("68ddf378",content,!0,{sourceMap:!1})},443:function(t,e,n){var r=n(19)(!1);r.push([t.i,".scroll-container{width:100%;height:360px;overflow:hidden}.scroll-container-dialog{width:100%;height:50vh;overflow:hidden}.filterHeader>input{background-color:#fff!important;width:100%}.filterHeader{border:1.5px solid #eee;height:10px;padding-bottom:7px}.scroll-container-mini{width:100%;height:200px;overflow:hidden}.v-text-field--filled.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot{min-height:24px!important}.v-text-field.v-text-field--solo.v-input--dense>.v-input__control{min-height:24px!important;font-size:12px!important}.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot{box-shadow:none!important;border:1px solid #8a8a8a!important}.v-text-field__details{display:flex;flex:1 0 auto;max-width:100%;min-height:1px!important;overflow:hidden}.v-text-field.v-text-field--solo .v-label{top:calc(50% - 9px);font-size:small!important}.v-text-field.v-input--dense:not(.v-text-field--outlined) input{padding:2px 0!important;font-size:12px!important}.ht_clone_top{z-index:7}.v-navigation-drawer--temporary{z-index:999!important}.v-menu__content.theme--light.menuable__content__active{z-index:800!important}.v-picker__body{z-index:799!important}.bg-green{background-color:#b3ec95}.bg-red{background-color:#e84f65}.bg-white{background-color:#f8f8f8}.bg-orange{background-color:#fdef9a}.btnToTenant{height:100%;background:#e6a23c}.btnDelete,.btnToTenant{width:99%;text-align:center;font:12px sans-serif;padding:5px;color:#fff}.btnDelete{background:#ff1230}.btnSPB{background:#ffca1a}.btnNPB,.btnSPB{width:99%;text-align:center;font:12px sans-serif;padding:5px;color:#fff}.btnNPB{background:#85ce61}.v-data-table__wrapper table tbody tr:hover{cursor:pointer}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{border-right:1px solid rgba(0,0,0,.12)!important}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.7rem!important;height:28px!important}.v-card__subtitle,.v-card__text{font-size:.775rem!important}.v-btn{text-transform:capitalize!important}.v-dialog>.v-card>.v-card__title{padding:5px 24px!important}tbody tr td .v-btn--icon.v-size--default{height:20px;width:20px}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td{padding:0 3px!important}.v-list-item{align-items:center;display:flex;flex:1 1 100%;letter-spacing:normal;min-height:30px!important;outline:none;padding:0 16px;position:relative;text-decoration:none}.v-icon.v-icon{font-size:20px!important}body{font-size:12px!important}.v-list-item__title{font-size:inherit!important}.v-toolbar__title{font-size:.9rem!important}.v-data-table>.v-data-table__wrapper>table>thead>tr>th{font-size:1em;padding:0 3px!important}.v-application .headline{font-size:1.3rem!important}.toolbar-content .v-toolbar__content{height:32px!important}.theme--light.v-card{color:#222!important}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:#222!important}.handsontable .htDimmed{color:#222!important}.v-text-field.v-text-field--solo.v-input--dense .v-input__append-outer,.v-text-field.v-text-field--solo.v-input--dense .v-input__prepend-outer{margin-top:2px!important}.v-data-table-header{background-color:#c8dff1}.dropzone{min-height:50px!important;padding:0!important}.disable-wrap{white-space:nowrap!important}.v-tab{text-transform:capitalize!important}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:#000!important}.v-data-table.simple-table.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table.simple-table.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{border-right:none!important}",""]),t.exports=r},444:function(t,e,n){"use strict";n(354)},445:function(t,e,n){var r=n(19)(!1);r.push([t.i,".bgAuth[data-v-3c8b106c]{background-color:#eee;background-repeat:no-repeat!important;background-size:cover!important}",""]),t.exports=r},456:function(t,e,n){"use strict";n(358)},457:function(t,e,n){var r=n(19)(!1);r.push([t.i,".v-toolbar--flat[data-v-2228de4e]{box-shadow:0 1px 0 0 rgb(0 0 0/20%),0 0 0 0 rgb(0 0 0/14%),0 0 0 0 rgb(0 0 0/12%)!important}",""]),t.exports=r},499:function(t,e,n){"use strict";n(362)},500:function(t,e,n){var r=n(19)(!1);r.push([t.i,".v-toolbar--flat[data-v-362880bd]{box-shadow:0 1px 0 0 rgb(0 0 0/20%),0 0 0 0 rgb(0 0 0/14%),0 0 0 0 rgb(0 0 0/12%)!important}",""]),t.exports=r},511:function(t,e,n){"use strict";n(364)},512:function(t,e,n){var r=n(19)(!1);r.push([t.i,".v-toolbar--flat[data-v-2ebe1f18]{box-shadow:0 1px 0 0 rgb(0 0 0/20%),0 0 0 0 rgb(0 0 0/14%),0 0 0 0 rgb(0 0 0/12%)!important}",""]),t.exports=r},515:function(t,e,n){"use strict";n.r(e),n.d(e,"getters",(function(){return r}));var r={user:function(t){return t.auth.user},isLoggedIn:function(t){return t.auth.loggedIn}}},537:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=537}},[[410,128,12,129]]]);