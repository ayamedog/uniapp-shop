(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{"32ed":function(t,n,r){var e=r("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 主题颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.text-red[data-v-678d61b4]{color:#1cbbb4}.nav[data-v-678d61b4]{margin-bottom:%?100?%}',""]),t.exports=n},"495e":function(t,n,r){"use strict";r.r(n);var e=r("d125"),a=r.n(e);for(var s in e)"default"!==s&&function(t){r.d(n,t,(function(){return e[t]}))}(s);n["default"]=a.a},5320:function(t,n,r){var e=r("32ed");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=r("4f06").default;a("5ff8d778",e,!0,{sourceMap:!1,shadowMode:!1})},"660b":function(t,n,r){"use strict";var e;r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return s})),r.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-uni-view",{staticClass:"order"},[r("v-uni-view",{staticClass:"nav"},[r("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[r("v-uni-view",{staticClass:"flex text-center"},t._l(t.navList,(function(n,e){return r("v-uni-view",{key:e,staticClass:"cu-item flex-sub",class:e==t.TabCur?"text-red cur":"",attrs:{"data-id":e},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(n.name))])})),1)],1)],1),r("v-uni-view",{staticClass:"text-center"},[t._v("这里空空如也~")])],1)},s=[]},"702a":function(t,n,r){"use strict";r.r(n);var e=r("660b"),a=r("495e");for(var s in a)"default"!==s&&function(t){r.d(n,t,(function(){return a[t]}))}(s);r("826d");var i,c=r("f0c5"),u=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"678d61b4",null,!1,e["a"],i);n["default"]=u.exports},"826d":function(t,n,r){"use strict";var e=r("5320"),a=r.n(e);a.a},d125:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"order",data:function(){return{TabCur:0,scrollLeft:0,navList:[{name:"全部订单"},{name:"待付款"},{name:"待收货"},{name:"退款/退货"}]}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}},onLoad:function(t){console.log(t),this.TabCur=t.type-1}};n.default=e}}]);