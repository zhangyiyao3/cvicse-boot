(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-340e0b2c"],{"01a8":function(e,t,n){"use strict";var i=n("2ef0"),a={name:"d2-layout-header-aside-menu-sub",components:{"d2-layout-header-aside-menu-item":n("73eb").a},props:{menu:{type:Object,required:!1,default:function(){}}},data:function(){return{uniqueId:Object(i.uniqueId)("d2-menu-empty-")}}},u=n("2877"),s=Object(u.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-submenu",{attrs:{index:e.menu.path||e.uniqueId}},[n("template",{slot:"title"},[e.menu.icon?n("i",{class:"fa fa-"+e.menu.icon}):e._e(),void 0===e.menu.icon&!e.menu.iconSvg?n("i",{staticClass:"fa fa-folder-o"}):e._e(),e.menu.iconSvg?n("d2-icon-svg",{attrs:{name:e.menu.iconSvg}}):e._e(),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.menu.title))])],1),e._l(e.menu.children,function(e,t){return[void 0===e.children?n("d2-layout-header-aside-menu-item",{key:t,attrs:{menu:e}}):n("d2-layout-header-aside-menu-sub",{key:t,attrs:{menu:e}})]})],2)},[],!1,null,null,null);s.options.__file="index.vue";t.a=s.exports},"73eb":function(e,t,n){"use strict";var i=n("2ef0"),a={name:"d2-layout-header-aside-menu-item",props:{menu:{type:Object,required:!1,default:function(){}}},data:function(){return{uniqueId:Object(i.uniqueId)("d2-menu-empty-")}}},u=n("2877"),s=Object(u.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu-item",{attrs:{index:e.menu.path||e.uniqueId}},[e.menu.icon?n("i",{class:"fa fa-"+e.menu.icon}):e._e(),void 0===e.menu.icon&!e.menu.iconSvg?n("i",{staticClass:"fa fa-file-o"}):e._e(),e.menu.iconSvg?n("d2-icon-svg",{attrs:{name:e.menu.iconSvg}}):e._e(),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.menu.title||"未命名菜单"))])],1)},[],!1,null,null,null);s.options.__file="index.vue";t.a=s.exports},b55f:function(e,t,n){"use strict";var i=n("c276");t.a={methods:{handleMenuSelect:function(e,t){/^d2-menu-empty-\d+$/.test(e)||void 0===e?this.$message.warning("临时菜单"):/^https:\/\/|http:\/\//.test(e)?i.a.open(e):this.$router.push({path:e})}}}},f6d6:function(e,t,n){"use strict";n.r(t);var i=n("be94"),a=n("2f62"),u=n("b55f"),s=n("73eb"),o=n("01a8"),l=n("1fba"),d={name:"d2-layout-header-aside-menu-side",mixins:[u.a],components:{"d2-layout-header-aside-menu-item":s.a,"d2-layout-header-aside-menu-sub":o.a},data:function(){return{active:"",asideHeight:300,BS:null}},computed:Object(i.a)({},Object(a.e)("d2admin/menu",["aside","asideCollapse"])),watch:{asideCollapse:function(e){var t=this;this.scrollDestroy(),setTimeout(function(){t.scrollInit()},500)},$route:{handler:function(e){var t=this,n=e.fullPath;this.active=n,this.$nextTick(function(){0<t.aside.length&&t.$refs.menu&&(t.$refs.menu.activeIndex=n)})},immediate:!0}},mounted:function(){this.scrollInit()},beforeDestroy:function(){this.scrollDestroy()},methods:{scrollInit:function(){this.BS=new l.a(this.$el,{mouseWheel:!0})},scrollDestroy:function(){try{this.BS.destroy()}catch(e){delete this.BS,this.BS=null}}}},c=n("2877"),r=Object(c.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d2-layout-header-aside-menu-side"},[n("el-menu",{ref:"menu",attrs:{collapse:e.asideCollapse,"unique-opened":!0,"default-active":e.active},on:{select:e.handleMenuSelect}},[e._l(e.aside,function(e,t){return[void 0===e.children?n("d2-layout-header-aside-menu-item",{key:t,attrs:{menu:e}}):n("d2-layout-header-aside-menu-sub",{key:t,attrs:{menu:e}})]})],2),0!==e.aside.length||e.asideCollapse?e._e():n("div",{staticClass:"d2-layout-header-aside-menu-empty",attrs:{flex:"dir:top main:center cross:center"}},[n("d2-icon",{attrs:{name:"inbox"}}),n("span",[e._v("没有侧栏菜单")])],1)],1)},[],!1,null,null,null);r.options.__file="index.vue";t.default=r.exports}}]);