(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{282:function(t,e,r){"use strict";var n=r(209);e.a=n.a},426:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return h}));var n=r(444),o=r(1),l=Object(o.j)("v-card__actions"),c=Object(o.j)("v-card__subtitle"),d=Object(o.j)("v-card__text"),h=Object(o.j)("v-card__title");n.a},430:function(t,e,r){"use strict";var n=r(439),o=r(440);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},434:function(t,e,r){"use strict";var n=r(4),o=r(451).start;n({target:"String",proto:!0,forced:r(452)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},439:function(t,e,r){"use strict";var n=r(4),o=r(16),l=r(118),c=r(41),d=r(284),h=r(283),f=r(153),v=r(23),m=r(10),_=r(201),x=r(86),y=r(204);t.exports=function(t,e,r){var k=-1!==t.indexOf("Map"),I=-1!==t.indexOf("Weak"),S=k?"set":"add",w=o[t],O=w&&w.prototype,D=w,C={},$=function(t){var e=O[t];c(O,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(I&&!v(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return I&&!v(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(I&&!v(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(l(t,"function"!=typeof w||!(I||O.forEach&&!m((function(){(new w).entries().next()})))))D=r.getConstructor(e,t,k,S),d.enable();else if(l(t,!0)){var j=new D,F=j[S](I?{}:-0,1)!=j,P=m((function(){j.has(1)})),V=_((function(t){new w(t)})),T=!I&&m((function(){for(var t=new w,e=5;e--;)t[S](e,e);return!t.has(-0)}));V||((D=e((function(e,r){f(e,D,t);var n=y(new w,e,D);return null!=r&&h(r,n[S],{that:n,AS_ENTRIES:k}),n}))).prototype=O,O.constructor=D),(P||T)&&($("delete"),$("has"),k&&$("get")),(T||F)&&$(S),I&&O.clear&&delete O.clear}return C[t]=D,n({global:!0,forced:D!=w},C),x(D,t),I||r.setStrong(D,t,k),D}},440:function(t,e,r){"use strict";var n=r(39).f,o=r(80),l=r(200),c=r(85),d=r(153),h=r(283),f=r(202),v=r(203),m=r(34),_=r(284).fastKey,x=r(63),y=x.set,k=x.getterFor;t.exports={getConstructor:function(t,e,r,f){var v=t((function(t,n){d(t,v,e),y(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),m||(t.size=0),null!=n&&h(n,t[f],{that:t,AS_ENTRIES:r})})),x=k(e),I=function(t,e,r){var n,o,l=x(t),c=S(t,e);return c?c.value=r:(l.last=c={index:o=_(e,!0),key:e,value:r,previous:n=l.last,next:void 0,removed:!1},l.first||(l.first=c),n&&(n.next=c),m?l.size++:t.size++,"F"!==o&&(l.index[o]=c)),t},S=function(t,e){var r,n=x(t),o=_(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return l(v.prototype,{clear:function(){for(var t=x(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,m?t.size=0:this.size=0},delete:function(t){var e=this,r=x(e),n=S(e,t);if(n){var o=n.next,l=n.previous;delete r.index[n.index],n.removed=!0,l&&(l.next=o),o&&(o.previous=l),r.first==n&&(r.first=o),r.last==n&&(r.last=l),m?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=x(this),n=c(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!S(this,t)}}),l(v.prototype,r?{get:function(t){var e=S(this,t);return e&&e.value},set:function(t,e){return I(this,0===t?0:t,e)}}:{add:function(t){return I(this,t=0===t?0:t,t)}}),m&&n(v.prototype,"size",{get:function(){return x(this).size}}),v},setStrong:function(t,e,r){var n=e+" Iterator",o=k(e),l=k(n);f(t,e,(function(t,e){y(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=l(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),v(e)}}},444:function(t,e,r){"use strict";r(9),r(5),r(7),r(14),r(8),r(15);var n=r(2),o=(r(25),r(206),r(450),r(213)),l=r(486),c=r(82),d=r(11);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},450:function(t,e,r){var content=r(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("e23b7040",content,!0,{sourceMap:!1})},451:function(t,e,r){var n=r(35),o=r(27),l=r(212),c=r(42),d=Math.ceil,h=function(t){return function(e,r,h){var f,v,m=o(c(e)),_=m.length,x=void 0===h?" ":o(h),y=n(r);return y<=_||""==x?m:(f=y-_,(v=l.call(x,d(f/x.length))).length>f&&(v=v.slice(0,f)),t?m+v:v+m)}};t.exports={start:h(!1),end:h(!0)}},452:function(t,e,r){var n=r(73);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},453:function(t,e,r){var n=r(12)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},474:function(t,e,r){"use strict";r(196);var n=r(197);e.a=Object(n.a)("flex")},481:function(t,e,r){"use strict";var n=r(2),o=(r(47),r(57),r(207),r(7),r(8),r(56),r(115),r(9),r(5),r(14),r(15),r(11)),l=r(87),c=r(119);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},482:function(t,e,r){var content=r(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("50788f08",content,!0,{sourceMap:!1})},483:function(t,e,r){var n=r(12)(!1);n.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=n},511:function(t,e,r){"use strict";r(9),r(5),r(14),r(8),r(15);var n=r(2),o=(r(58),r(7),r(60),r(115),r(47),r(57),r(482),r(504)),l=r(506),c=r(78),d=r(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=f(f({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,r){return r.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return v}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var r=Object(d.s)(e,t.itemText),text=null!=r?String(r):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},v),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var r=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){r.internalSearch&&(1===t.length||r.autoSelectFirst)&&(r.$refs.menu.getTiles(),r.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.y.backspace&&t!==d.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var r=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===r){var n=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[n]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=r}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,r=e.value;e.value&&this.activateMenu(),this.internalSearch=r,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.y.home,d.y.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,r;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],o=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",o),null==(r=t.clipboardData)||r.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},522:function(t,e,r){"use strict";r.r(e);r(19),r(37),r(434),r(56),r(8);var n={name:"FormFlight",props:{formTitle:{type:String,default:""},alias:{type:String,default:""},itemYesNo:{type:Array,default:function(){return[]}},itemBilling:{type:Array,default:function(){return[]}},airport:{type:Array,default:function(){return[]}},employee:{type:Array,default:function(){return[]}}},data:function(){return{dialog:!1,loading:!1,submitLoad:!1,menu3:"",menu2:"",menu1:"",url:"",httpMethod:"get",form:{},attachment:"",defaultForm:{},entries:this.$auth.$storage.getState("employee"),isLoading:!1,model:null,model2:null,search:null,disabled:!0,checkInput:!1,leaveLists:[],dataAirport:this.$auth.$storage.getLocalStorage("airport"),resvFor:this.$auth.$storage.getLocalStorage("resvFor"),travelPurpose:this.$auth.$storage.getLocalStorage("travelPurpose"),costCover:this.$auth.$storage.getLocalStorage("costCover")}},methods:{changeFieldDetail:function(){this.$refs.childDetails.insertRow(0,this.form.total_seat)},checkItracc:function(t){return this.$gates.hasAnyRole("Superuser|I-Tracc")},changeSelect:function(){"Karyawan"===this.form.for_self&&(this.disabled=!1)},getDataEmployee:function(){var t=this;this.isLoading=!0,this.$axios.get("/api/master/employees",{params:{alias:this.alias}}).then((function(e){t.entries=e.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(){return t.isLoading=!1}))},changeData:function(){this.form.user_name=this.model.Name,this.form.id_card=this.model.Nik,this.form.occupation=this.model.JobPosition,this.form.company=this.model.Company,this.form.address=this.model.AlamatKTP,this.form.department=this.model.Department,this.form.no_hp=this.model.MobilePhone,this.form.work_location=this.model.WorkLocation,this.form.email=this.model.OfficeEmailAddress,this.disabled=!1},changeDataLeave:function(){this.form.leave_from_to=this.model2.date_from_to,this.form.reference_number=this.model2.DocumentReferenceNumber},setLeaveList:function(data){this.leaveLists=data},setForm:function(form,t,e,r){var n=this;if(this.httpMethod=t,this.disabled=!0,this.form=Object.assign({},form),"post"===t){this.form.for_self=e;var o=new Date,dd=String(o.getDate()).padStart(2,"0"),l=String(o.getMonth()+1).padStart(2,"0"),c=o.getFullYear();o=c+"-"+l+"-"+dd,this.form.paper_date=o,this.$refs.childDetails.setDataToDetails([]),this.$refs.childDetails.setDataToHttpMethod(t)}else this.$refs.childDetails.setDataToDetails(r),this.$refs.childDetails.setDataToHttpMethod(t),this.$gates.hasAnyRole("I-Tracc")&&(this.checkInput=!1),setTimeout((function(){n.form=Object.assign({},form),n.form.for_self=e}),300)},close:function(){this.$emit("close")},selectFile:function(){this.attachment=this.$refs.files.files},save:function(){var t=this,e={},details=this.$refs.childDetails.getDetailSourceData();details.forEach((function(r,n){t.$refs.childDetails.checkEmptyRow(n)||(e[n]=r)})),this.$emit("save",{form:this.form,defaultForm:this.defaultForm,details:details})}}},o=r(52),l=r(71),c=r.n(l),d=r(511),h=r(209),f=r(444),v=r(426),m=r(536),_=r(474),x=r(481),y=r(487),k=r(33),I=r(651),S=r(504),w=r(424),O=r(506),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.formTitle)}})]),t._v(" "),r("v-card-text",[r("v-form",[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md3:"",xs12:""}},[r("label",[t._v("Reservation No")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Reservation No",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.paper_no,callback:function(e){t.$set(t.form,"paper_no",e)},expression:"form.paper_no"}})],1),t._v(" "),"post"===t.httpMethod?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{xs12:"",md3:""}},[r("label",[t._v("Requester")]),t._v(" "),r("v-autocomplete",{attrs:{items:t.entries,loading:t.isLoading,"item-text":"Name","item-value":"Nik","hide-no-data":"","hide-selected":"",label:"Requester",solo:"",dense:"","hide-details":"auto","return-object":""},on:{change:t.changeData},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(n.Name)}}),t._v(" "),r("v-list-item-subtitle",{domProps:{textContent:t._s(n.Nik)}})],1)]}}],null,!1,2545025527),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1):t._e(),t._v(" "),"patch"===t.httpMethod?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md3:"",xs12:""}},[r("label",[t._v("Requester")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Requester",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.user_name,callback:function(e){t.$set(t.form,"user_name",e)},expression:"form.user_name"}})],1):t._e(),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Company")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Company",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Company")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Company ID",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.id_card,callback:function(e){t.$set(t.form,"id_card",e)},expression:"form.id_card"}})],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Position")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Position",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.occupation,callback:function(e){t.$set(t.form,"occupation",e)},expression:"form.occupation"}})],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Mobile No")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Mobile No",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.no_hp,callback:function(e){t.$set(t.form,"no_hp",e)},expression:"form.no_hp"}})],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Email")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Email",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Reservation For")]),t._v(" "),r("v-select",{attrs:{items:t.resvFor,readonly:t.disabled,label:"Reservation For",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.resv_for,callback:function(e){t.$set(t.form,"resv_for",e)},expression:"form.resv_for"}})],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",sm12:"",xs12:""}},[r("label",[t._v("Travel Purpose")]),t._v(" "),r("v-select",{attrs:{items:t.travelPurpose,readonly:t.disabled,label:"Travel Purpose",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.travel_purpose,callback:function(e){t.$set(t.form,"travel_purpose",e)},expression:"form.travel_purpose"}})],1),t._v(" "),"Others Purpose"===t.form.travel_purpose?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",sm12:"",xs12:""}},[r("label",[t._v("Other Purpose Reason")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Other Purpose Reason",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.reason_purpose,callback:function(e){t.$set(t.form,"reason_purpose",e)},expression:"form.reason_purpose"}})],1):t._e(),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",sm12:"",xs12:""}},[r("label",[t._v("Flight Cost Cover")]),t._v(" "),r("v-select",{attrs:{items:t.costCover,readonly:t.disabled,label:"Flight Cost Cover",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.cost_cover,callback:function(e){t.$set(t.form,"cost_cover",e)},expression:"form.cost_cover"}})],1),t._v(" "),"patch"===t.httpMethod?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Flight Origin")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Flight Origin",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.flight_origin,callback:function(e){t.$set(t.form,"flight_origin",e)},expression:"form.flight_origin"}})],1):t._e(),t._v(" "),"patch"===t.httpMethod?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Flight Destination")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Flight Destination",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.flight_destination,callback:function(e){t.$set(t.form,"flight_destination",e)},expression:"form.flight_destination"}})],1):t._e(),t._v(" "),"post"===t.httpMethod?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Flight Origin")]),t._v(" "),r("v-select",{attrs:{items:t.dataAirport,readonly:t.disabled,label:"Flight Origin",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.flight_origin,callback:function(e){t.$set(t.form,"flight_origin",e)},expression:"form.flight_origin"}})],1):t._e(),t._v(" "),"post"===t.httpMethod?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Flight Destination")]),t._v(" "),r("v-select",{attrs:{items:t.dataAirport,readonly:t.disabled,label:"Flight Destination",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.flight_destination,callback:function(e){t.$set(t.form,"flight_destination",e)},expression:"form.flight_destination"}})],1):t._e(),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md6:"",xs12:"",md2:""}},[r("label",[t._v("Request Date")]),t._v(" "),r("v-menu",{ref:"menu1",attrs:{readonly:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-text-field",t._g(t._b({attrs:{label:"Request Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.request_date,callback:function(e){t.$set(t.form,"request_date",e)},expression:"form.request_date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),r("v-date-picker",{attrs:{"no-title":"",readonly:t.disabled},on:{input:function(e){t.menu1=!1}},model:{value:t.form.request_date,callback:function(e){t.$set(t.form,"request_date",e)},expression:"form.request_date"}})],1)],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",sm12:"",xs12:""}},[r("label",[t._v("Total Seat")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Total Seat",solo:"",dense:"","hide-details":"auto"},on:{change:function(e){return t.changeFieldDetail()},mouseup:function(e){return t.changeFieldDetail()}},model:{value:t.form.total_seat,callback:function(e){t.$set(t.form,"total_seat",e)},expression:"form.total_seat"}})],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Reservation Date")]),t._v(" "),r("v-menu",{ref:"menu2",attrs:{readonly:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-text-field",t._g(t._b({attrs:{label:"Reservation Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),r("v-date-picker",{attrs:{readonly:t.disabled,"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}})],1)],1),t._v(" "),r("div",{staticClass:"scroll-container-mini"},[r("LazyPaperFlightReservation",{ref:"childDetails"})],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md6:"",xs12:""}},[r("label",[t._v("Notes")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Notes",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.notes,callback:function(e){t.$set(t.form,"notes",e)},expression:"form.notes"}})],1),t._v(" "),t.checkItracc()?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{xs12:""}},[r("span",{staticClass:"text-subtitle-2"},[t._v("I-Tracc Seat Reservation Request Acceptance Process")])]):t._e(),t._v(" "),t.checkItracc()?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",sm12:"",xs12:""}},[r("label",[t._v("Seat available")]),t._v(" "),r("v-text-field",{attrs:{label:"Seat available",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.seat_available,callback:function(e){t.$set(t.form,"seat_available",e)},expression:"form.seat_available"}})],1):t._e(),t._v(" "),t.checkItracc()?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",sm12:"",xs12:""}},[r("label",[t._v("Total Assigned")]),t._v(" "),r("v-text-field",{attrs:{label:"Total Assigned",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.total_assigned,callback:function(e){t.$set(t.form,"total_assigned",e)},expression:"form.total_assigned"}})],1):t._e(),t._v(" "),t.checkItracc()?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",sm12:"",xs12:""}},[r("label",[t._v("Flight No")]),t._v(" "),r("v-text-field",{attrs:{readonly:!t.$gates.hasAnyRole("Superuser|I-Tracc"),label:"Flight No",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.flight_no,callback:function(e){t.$set(t.form,"flight_no",e)},expression:"form.flight_no"}})],1):t._e(),t._v(" "),t.checkItracc()?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Flight Origin Approve")]),t._v(" "),r("v-select",{attrs:{items:t.dataAirport,label:"Flight Origin Approve",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.flight_origin_approve,callback:function(e){t.$set(t.form,"flight_origin_approve",e)},expression:"form.flight_origin_approve"}})],1):t._e(),t._v(" "),t.checkItracc()?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Flight Destination Approve")]),t._v(" "),r("v-select",{attrs:{items:t.dataAirport,label:"Flight Destination Approve",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.flight_destination_approve,callback:function(e){t.$set(t.form,"flight_destination_approve",e)},expression:"form.flight_destination_approve"}})],1):t._e(),t._v(" "),t.checkItracc()?r("v-flex",{staticClass:"pl-1 pr-1",attrs:{md6:"",xs12:"",md2:""}},[r("label",[t._v("Flight Date")]),t._v(" "),r("v-menu",{ref:"menu3",attrs:{readonly:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-text-field",t._g(t._b({attrs:{label:"Flight Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.flight_date_approve,callback:function(e){t.$set(t.form,"flight_date_approve",e)},expression:"form.flight_date_approve"}},"v-text-field",o,!1),n))]}}],null,!1,1778584896),model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[t._v(" "),r("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu3=!1}},model:{value:t.form.flight_date_approve,callback:function(e){t.$set(t.form,"flight_date_approve",e)},expression:"form.flight_date_approve"}})],1)],1):t._e()],1)],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"orange darken-1 white--text",small:""},on:{click:function(e){return t.$emit("openAttachment",t.form)}}},[t._v("\n      Upload Attachment\n    ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){return t.close()}}},[t._v("\n      Close\n    ")]),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",readonly:t.checkInput,loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n      Save\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAutocomplete:d.a,VBtn:h.a,VCard:f.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VDatePicker:m.a,VFlex:_.a,VForm:x.a,VLayout:y.a,VListItemContent:k.a,VListItemSubtitle:k.b,VListItemTitle:k.c,VMenu:I.a,VSelect:S.a,VSpacer:w.a,VTextField:O.a})}}]);