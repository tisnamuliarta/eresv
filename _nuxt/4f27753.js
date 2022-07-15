(window.webpackJsonp=window.webpackJsonp||[]).push([[81,19],{599:function(t,e,o){"use strict";o.r(e);var n={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},r=o(81),l=o(89),c=o.n(l),d=o(106),m=o(123),f=o(54),v=o(578),h=o(279),_=o(569),x=o(130),y=o(278),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[o("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",{staticClass:"pl-0 pr-0"},[o("v-container",{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VContainer:v.a,VDialog:h.a,VDivider:_.a,VIcon:x.a,VSpacer:y.a})},718:function(t,e,o){var content=o(810);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("3f1f083a",content,!0,{sourceMap:!1})},809:function(t,e,o){"use strict";o(718)},810:function(t,e,o){var n=o(19)(!1);n.push([t.i,".upload-block{border:2px dashed #adadad;padding:30px;border-radius:15px;margin-bottom:20px}",""]),t.exports=n},918:function(t,e,o){"use strict";o.r(e);o(55);var n=o(306),r=o(675),l=o.n(r),c=(o(676),{name:"FormTask",components:{TiptapVuetify:n.p,Dropzone:l.a},props:{formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,submitLoad:!1,dialogLoading:!1,show:!1,formTitle:"",menu:"",menu1:"",buttonTitle:"",maxWidth:"550px",itemComments:[{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}],itemApproval:[{id:"0",title:"Pending"},{id:"1",title:"Approved"}],form:{id:null,department:null,sub_category:{title:null},title:null,description:null,color:null,backgroundImage:{name:"",originalName:"",downloadURL:"",uuid:""}},options:{url:"/backendcore/api/attachment",timeout:9e9,thumbnailWidth:50,thumbnailHeight:50,addRemoveLinks:!0,dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getLocalStorage("_token.local")}},fileToUpload:{},statusProcessing:"insert",itemSubCategoy:[],itemEmployee:[],itemMilestone:[],itemPriority:[],extensions:[n.g,n.a,n.o,n.j,n.l,n.m,[n.f,{options:{levels:[1,2,3]}}],n.b,n.e],extensions2:[n.g,n.l,n.m,[n.f,{options:{levels:[1,2,3]}}],n.b,n.e]}},mounted:function(){this.getPriority(),this.getEmployee()},methods:{getMilestone:function(){var t=this;this.$axios.get("/api/master/task-section",{params:{department:this.form.department}}).then((function(e){t.itemMilestone=e.data.data.simple}))},getPriority:function(){var t=this;this.$axios.get("/api/master/task-priority",{params:{department:this.form.department}}).then((function(e){t.itemPriority=e.data.data.rows}))},getEmployee:function(){var t=this;this.$axios.get("/api/master/related-employees",{params:{department:this.form.department}}).then((function(e){t.itemEmployee=e.data.rows}))},sendingParams:function(t,e,o){o.append("source_id",this.form.task_temp_id),o.append("type","tasks")},handleError:function(t,e,o){this.$swal({type:"error",title:"Oops...",text:e.message})},reloadAttachment:function(t,e){},selectSubCategory:function(){var t=this,e=this.form.department;this.$axios.get("/api/master/department-sub-category/1",{params:{category:e}}).then((function(e){t.$auth.$storage.setState("subCategory",e.data.data),t.itemSubCategoy=t.$auth.$storage.getState("subCategory")}))},returnData:function(data){"Sub category"===data.type?this.itemSubCategoy=data.rows:"Priority"===data.type&&(this.itemPriority=data.rows)},newData:function(form){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.formTitle="News Ticket",this.form=Object.assign({},form),this.maxWidth="550px",this.buttonTitle="Save"},editItem:function(t){this.form=Object.assign({},t),this.form.assignees=JSON.parse(t.assignees),this.$refs.dialogForm.openDialog(),this.selectSubCategory(),this.getMilestone(),this.statusProcessing="update",this.formTitle="Update Ticket",this.maxWidth="800px",this.buttonTitle="Update"},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},save:function(){var form=this.form,t=this.statusProcessing,data={form:form,status:t};"insert"===t?this.store("post","/api/tasks/task",data):"update"===t&&this.store("put","/api/tasks/task/"+this.form.id,data)},store:function(t,e,data){var o=this,n=this;n.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){o.submitLoad=!1,o.$refs.dialogForm.closeDialog(),o.$emit("getDataFromApi")})).catch((function(t){o.$swal({type:"error",title:"Error",text:t.response.data.message}),n.submitLoad=!1}))}}}),d=(o(809),o(81)),m=o(89),f=o.n(m),v=o(605),h=o(106),_=o(381),x=o(378),y=o(856),k=o(853),C=o(570),$=o(380),D=o(601),S=o(695),w=o(186),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("DialogForm",{ref:"dialogForm",attrs:{"max-width":t.maxWidth,"dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-row",{attrs:{dense:""}},[o("v-col",{attrs:{cols:"12",md:"insert"===t.statusProcessing?"12":"7"}},[o("v-row",{attrs:{dense:""}},["update"===t.statusProcessing?o("v-col",{staticClass:"pa-1 mb-1",attrs:{cols:"12",md:"8"}},[o("v-select",{attrs:{items:t.itemApproval,"item-text":"title","item-value":"id",label:"Approval",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.approve,callback:function(e){t.$set(t.form,"approve",e)},expression:"form.approve"}})],1):t._e(),t._v(" "),"update"===t.statusProcessing?o("v-col",{staticClass:"pa-1 mb-1",attrs:{cols:"12",md:"4"}},[o("v-checkbox",{attrs:{label:"Completed","hide-details":""},model:{value:t.form.complete,callback:function(e){t.$set(t.form,"complete",e)},expression:"form.complete"}})],1):t._e(),t._v(" "),o("v-col",{staticClass:"pa-1 mb-1",attrs:{cols:"12"}},[o("v-autocomplete",{attrs:{items:t.$auth.$storage.getLocalStorage("departments"),label:"Department",placeholder:"Department",outlined:"",dense:"","hide-details":"auto"},on:{change:function(e){return t.selectSubCategory()}},model:{value:t.form.department,callback:function(e){t.$set(t.form,"department",e)},expression:"form.department"}})],1),t._v(" "),o("v-col",{staticClass:"pa-1 mb-1",attrs:{cols:"12"}},[o("v-autocomplete",{attrs:{items:t.itemSubCategoy,label:"Sub category",placeholder:"Sub category",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.sub_category.title,callback:function(e){t.$set(t.form.sub_category,"title",e)},expression:"form.sub_category.title"}})],1),t._v(" "),o("v-col",{staticClass:"pa-1 mb-1",attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Title",placeholder:"Title",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),"update"===t.statusProcessing?o("v-col",{staticClass:"pa-1 mb-1",attrs:{cols:"12"}},[o("v-select",{attrs:{items:t.itemMilestone,"item-value":"id","item-text":"title",label:"Milestone",placeholder:"Milestone",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.section_id,callback:function(e){t.$set(t.form,"section_id",e)},expression:"form.section_id"}})],1):t._e(),t._v(" "),o("v-col",{staticClass:"pa-1 mb-1",attrs:{cols:"12",md:"6"}},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"Start Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",clearable:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}})],1)],1),t._v(" "),o("v-col",{staticClass:"pa-1 mb-1",attrs:{cols:"12",md:"6"}},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"Due Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",clearable:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.due_date,callback:function(e){t.$set(t.form,"due_date",e)},expression:"form.due_date"}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.form.due_date,callback:function(e){t.$set(t.form,"due_date",e)},expression:"form.due_date"}})],1)],1),t._v(" "),"update"===t.statusProcessing?o("v-col",{staticClass:"pa-1 mb-1",attrs:{cols:"12"}},[o("v-select",{attrs:{items:t.itemPriority,label:"Priority","item-value":"id","item-text":"title",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.priority_id,callback:function(e){t.$set(t.form,"priority_id",e)},expression:"form.priority_id"}})],1):t._e(),t._v(" "),"update"===t.statusProcessing?o("v-col",{staticClass:"pa-1 mb-1",attrs:{cols:"12"}},[o("v-autocomplete",{attrs:{items:t.itemEmployee,label:"Assignees","item-text":"name","item-value":"nik","deletable-chips":"","small-chips":"",multiple:"",placeholder:"Assignees",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.assignees,callback:function(e){t.$set(t.form,"assignees",e)},expression:"form.assignees"}})],1):t._e(),t._v(" "),t.show?o("v-col",{staticClass:"pa-1 mb-1",attrs:{sm12:"",md6:""}},[o("v-color-picker",{attrs:{"dot-size":"25","hide-inputs":"","swatches-max-height":"100"},model:{value:t.form.color,callback:function(e){t.$set(t.form,"color",e)},expression:"form.color"}})],1):t._e(),t._v(" "),o("v-col",{staticClass:"pa-1 mb-1",attrs:{sm12:"",md6:""}},[o("span",[t._v("Attachment")]),t._v(" "),o("dropzone",{ref:"attachment",attrs:{id:"attachment",options:t.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(e,o,n){return t.sendingParams(e,o,n)},"vdropzone-success":function(e,o){return t.reloadAttachment(e,o)},"vdropzone-error":function(e,o,n){return t.handleError(e,o,n)}}})],1),t._v(" "),o("v-col",{staticClass:"pa-1 mb-1",attrs:{cols:"12"}},[o("span",[t._v("Description")]),t._v(" "),o("client-only",{scopedSlots:t._u([{key:"placeholder",fn:function(){return[t._v(" Loading... ")]},proxy:!0}])},[o("tiptap-vuetify",{attrs:{extensions:t.extensions},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1)],1),t._v(" "),"update"===t.statusProcessing?o("v-col",{attrs:{cols:"12",md:"5"}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-simple-table",{staticClass:"simple-table",attrs:{elevation:"0",dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("Name")])])]),t._v(" "),o("tbody",t._l(t.itemComments,(function(e){return o("tr",{key:e.name},[o("td",[t._v(t._s(e.name))])])})),0)]},proxy:!0}],null,!1,3557314632)})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("span",[t._v("Description")]),t._v(" "),o("client-only",{scopedSlots:t._u([{key:"placeholder",fn:function(){return[t._v(" Loading... ")]},proxy:!0}],null,!1,669632662)},[o("tiptap-vuetify",{attrs:{extensions:t.extensions2},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad,elevation:"0"},on:{click:function(e){return t.save()}}},[t._v("\n                Comment\n              ")])],1)],1)],1):t._e()],1)]},proxy:!0},{key:"saveData",fn:function(){return[o("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n        "+t._s(t.buttonTitle)+"\n      ")])]},proxy:!0}])}),t._v(" "),t.dialogLoading?o("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e(),t._v(" "),o("LazyFormMaster",{ref:"formMaster",on:{returnData:t.returnData}})],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{DialogForm:o(599).default}),f()(component,{VAutocomplete:v.a,VBtn:h.a,VCheckbox:_.a,VCol:x.a,VColorPicker:y.a,VDatePicker:k.a,VMenu:C.a,VRow:$.a,VSelect:D.a,VSimpleTable:S.a,VTextField:w.a})}}]);