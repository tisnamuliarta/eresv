(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{725:function(e,t,n){var content=n(758);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("5040c6ee",content,!0,{sourceMap:!1})},757:function(e,t,n){"use strict";n(725)},758:function(e,t,n){var r=n(19)(!1);r.push([e.i,".logo[data-v-11f516e6]{max-width:180px;margin:0 auto;text-align:center}",""]),e.exports=r},880:function(e,t,n){"use strict";n.r(t);var r=n(32),o=(n(93),n(44),n(75),n(28),n(39),n(46),n(290),n(56),n(364)),c={name:"LoginPage",layout:"auth",middleware:"guest",created:function(){this.cekSession()},methods:{cekSession:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,h,d,f,k,m,x,w,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$auth,e.$auth.$storage.setLocalStorage("app.default_name","E-RESERVATION"),e.$auth.$storage.removeState("sessions_key"),r=o.a.load({monitoring:!1}),t.next=6,r;case 6:return c=t.sent,t.next=9,c.get();case 9:return l=t.sent,h=l.visitorId,d=h,e.$auth.$storage.setState("sessions_key",d),e.$route.query.sessions_key?(d=e.$route.query.sessions_key,e.$router.replace("/")):e.$auth.$storage.getState("sessions_key")?"false"===(d=e.$auth.$storage.getState("sessions_key"))&&(window.location.href="http://192.168.234.94/login?service=http://192.168.234.94/eresv"):window.location.href="http://192.168.234.94/login?service=http://192.168.234.94/eresv",f="http://192.168.234.94/backend",k=function(e){try{return Boolean(new URL(e))}catch(e){return!1}},m="",console.log(k(f)),m=k(f)?f:window.location.protocol+"//"+window.location.host+"http://192.168.234.94/backend",t.prev=19,t.next=22,e.$axios.get(m+"/api/auth/session",{params:{sessions_key:d,base_url:"http://192.168.234.94/eresv"}});case 22:if(!(x=t.sent).data.data.session){t.next=34;break}return t.next=26,e.$axios.get(m+"/api/auth/me",{headers:{Authorization:"Bearer "+x.data.data.session.bearer_token}});case 26:if(!(w=t.sent).status){t.next=32;break}return t.next=30,n.loginWith("local",{data:{username:w.data.data.user.username,cherry_token:w.data.data.user.cherry_token,sessions_key:d,language:"en",app_name:"E-RESERVATION"}});case 30:(v=t.sent).data.token||e.$swal({type:"error",title:v.data.auth.MessageTitle,text:v.data.auth.Message});case 32:t.next=34;break;case 34:t.next=40;break;case 36:t.prev=36,t.t0=t.catch(19),e.$swal({type:"error",title:"Error",text:t.t0.response.data.message}),setTimeout((function(){}),300);case 40:case"end":return t.stop()}}),t,null,[[19,36]])})))()}}},l=(n(757),n(65)),h=n(83),d=n.n(h),f=n(590),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h5",{staticClass:"v-heading font-weight-medium text-center text-h5 text-sm-h6 my-5"},[e._v("\n    Redirecting...\n  ")])])}),[],!1,null,"11f516e6",null);t.default=component.exports;d()(component,{VContainer:f.a})}}]);