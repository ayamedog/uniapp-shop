(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"00f9":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".content[data-v-2b3de32a]{width:100%}.tower-swiper .tower-item[data-v-2b3de32a]{-webkit-transform:scale(calc(.5 + var(--index) / 10));transform:scale(calc(.5 + var(--index) / 10));margin-left:calc(var(--left) * %?100?% - %?150?%);z-index:var(--index)}.index_cate[data-v-2b3de32a]{display:-webkit-box;display:-webkit-flex;display:flex}.index_cate uni-navigator[data-v-2b3de32a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?20?%}.index_cate uni-navigator uni-image[data-v-2b3de32a]{width:100%}\n  /*  楼层*/.floor_title[data-v-2b3de32a]{padding:%?10?% 0}.floor_title uni-image[data-v-2b3de32a]{width:100%}.floor_list[data-v-2b3de32a]{overflow:hidden}.floor_list uni-navigator[data-v-2b3de32a]{float:left;width:33.33%}.floor_list uni-navigator[data-v-2b3de32a]:nth-last-child(-n+4){\n    /* 原图的宽高 232 *386 */height:27.72711207vw;border-left:%?10?% solid #fff}.floor_list uni-navigator[data-v-2b3de32a]:nth-child(2),\n  .floor_list uni-navigator[data-v-2b3de32a]:nth-child(3){border-bottom:%?10?% solid #fff}.floor_list uni-navigator uni-image[data-v-2b3de32a]{width:100%;height:100%}",""]),t.exports=i},"0fd8":function(t,i,e){var n=e("780f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("6732c045",n,!0,{sourceMap:!1,shadowMode:!1})},"3c22":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"cu-bar search bg-white"},[e("v-uni-navigator",{attrs:{url:"../../pages/search/search"}},[e("v-uni-view",{staticClass:"search-form round"},[e("v-uni-text",{staticClass:"cuIcon-search"}),e("v-uni-input",{attrs:{"adjust-position":!1,type:"text",placeholder:"搜索图片、文章、视频","confirm-type":"search"}})],1)],1)],1)},a=[]},"68f8":function(t,i,e){"use strict";var n=e("4ea4");e("fb6a"),e("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e("fc55")),a={components:{SearchInput:r.default},data:function(){return{cardCur:0,swiperList:[],dotStyle:!1,towerStart:0,direction:"",cateList:[],floorList:[]}},onLoad:function(){this.TowerSwiper("swiperList"),this.getSwiper(),this.getCateList(),this.getFloorList()},methods:{getSwiper:function(){var t=this;this.$request({url:"/home/swiperdata"}).then((function(i){t.swiperList=i.data.message}))},getCateList:function(){var t=this;this.$request({url:"/home/catitems"}).then((function(i){t.cateList=i.data.message}))},getFloorList:function(){var t=this;this.$request({url:"/home/floordata"}).then((function(i){t.floorList=i.data.message,console.log(i)}))},cardSwiper:function(t){this.cardCur=t.detail.current},TowerSwiper:function(t){for(var i=this[t],e=0;e<i.length;e++)i[e].zIndex=parseInt(i.length/2)+1-Math.abs(e-parseInt(i.length/2)),i[e].mLeft=e-parseInt(i.length/2);this.swiperList=i},TowerStart:function(t){this.towerStart=t.touches[0].pageX},TowerMove:function(t){this.direction=t.touches[0].pageX-this.towerStart>0?"right":"left"},TowerEnd:function(t){var i=this.direction,e=this.swiperList;if("right"==i){for(var n=e[0].mLeft,r=e[0].zIndex,a=1;a<this.swiperList.length;a++)this.swiperList[a-1].mLeft=this.swiperList[a].mLeft,this.swiperList[a-1].zIndex=this.swiperList[a].zIndex;this.swiperList[e.length-1].mLeft=n,this.swiperList[e.length-1].zIndex=r}else{for(var s=e[e.length-1].mLeft,o=e[e.length-1].zIndex,c=this.swiperList.length-1;c>0;c--)this.swiperList[c].mLeft=this.swiperList[c-1].mLeft,this.swiperList[c].zIndex=this.swiperList[c-1].zIndex;this.swiperList[0].mLeft=s,this.swiperList[0].zIndex=o}this.direction="",this.swiperList=this.swiperList},goGoodsDetail:function(t){console.log(t),uni.navigateTo({url:"../goods_detail/goods_detail?goods_id="+t})},goQuery:function(t){console.log(t.slice(24)),t=t.slice(24),uni.navigateTo({url:"../goods_list/goods_list?query="+t})}}};i.default=a},"6ba2":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"searchInput",data:function(){return{}}};i.default=n},"780f":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 主题颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bg-white[data-v-3498ba9c]{background:#1cbbb4}uni-navigator[data-v-3498ba9c]{width:100%}',""]),t.exports=i},"900d":function(t,i,e){"use strict";var n=e("0fd8"),r=e.n(n);r.a},9739:function(t,i,e){"use strict";e.r(i);var n=e("d34a"),r=e("cf42");for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);e("ce88");var s,o=e("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"2b3de32a",null,!1,n["a"],s);i["default"]=c.exports},"9e5f":function(t,i,e){"use strict";e.r(i);var n=e("6ba2"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=r.a},b63c:function(t,i,e){var n=e("00f9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("10a2431c",n,!0,{sourceMap:!1,shadowMode:!1})},ce88:function(t,i,e){"use strict";var n=e("b63c"),r=e.n(n);r.a},cf42:function(t,i,e){"use strict";e.r(i);var n=e("68f8"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=r.a},d34a:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("search-input"),e("v-uni-swiper",{staticClass:"card-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500","indicator-color":"#8799a3","indicator-active-color":"#0081ff"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.cardSwiper.apply(void 0,arguments)}}},t._l(t.swiperList,(function(i,n){return e("v-uni-swiper-item",{key:n,class:t.cardCur==n?"cur":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goGoodsDetail(i.goods_id)}}},[e("v-uni-view",{staticClass:"swiper-item"},[e("v-uni-image",{attrs:{src:i.image_src,mode:"aspectFill"}})],1)],1)})),1),e("v-uni-view",{staticClass:"index_cate"},t._l(t.cateList,(function(t,i){return e("v-uni-navigator",{key:i,attrs:{url:"../category/category","open-type":"switchTab"}},[e("v-uni-image",{attrs:{mode:"widthFix",src:t.image_src}})],1)})),1),e("v-uni-view",{staticClass:"index_floor"},t._l(t.floorList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"floor_group"},[e("v-uni-view",{staticClass:"floor_title"},[e("v-uni-image",{attrs:{src:i.floor_title.image_src,mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"floor_list"},t._l(i.product_list,(function(i,n){return e("v-uni-navigator",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goQuery(i.navigator_url)}}},[e("v-uni-image",{attrs:{src:i.image_src,mode:0===n?"widthFix":"scaleToFill"}})],1)})),1)],1)})),1)],1)},a=[]},fc55:function(t,i,e){"use strict";e.r(i);var n=e("3c22"),r=e("9e5f");for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);e("900d");var s,o=e("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"3498ba9c",null,!1,n["a"],s);i["default"]=c.exports}}]);