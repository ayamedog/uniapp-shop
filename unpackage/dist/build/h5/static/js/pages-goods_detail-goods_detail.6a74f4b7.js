(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods_detail-goods_detail"],{"011d":function(t,e,n){"use strict";var r=n("4ea4");n("c740"),n("d81d"),n("45fc"),n("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=r(n("1da1")),i={name:"goods_detail",data:function(){return{goods:[],goodsMain:[],goods_id:0,swiperList:[],dotStyle:!0,cartNum:0,isCollect:!1}},onShow:function(){var t=getCurrentPages();console.log(t);var e=t[t.length-1],n=e.options;this.goods_id=n.goods_id,this.getGoodsDetail();var r=uni.getStorageSync("cart").length||0;this.cartNum=r},methods:{getGoodsDetail:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request({url:"/goods/detail",data:{goods_id:t.goods_id}});case 2:n=e.sent,console.log(n),r=uni.getStorageSync("collect")||[],console.log(r),o=r.some((function(e){return e.goods_id==t.goods_id})),i={goods_id:n.data.message.goods_id,pics:n.data.message.pics,goods_name:n.data.message.goods_name,goods_price:n.data.message.goods_price,goods_introduce:n.data.message.goods_introduce,num:0},t.goods=i,t.isCollect=o,t.goodsMain=n.data.message;case 11:case"end":return e.stop()}}),e)})))()},previewImage:function(t){var e=this.goods.pics.map((function(t){return t.pics_mid}));uni.previewImage({current:e[t],urls:e})},cartAdd:function(){var t=this;console.log("add");var e=uni.getStorageSync("cart")||[],n=e.findIndex((function(e){return e.goods_id===t.goodsMain.goods_id}));console.log(n),-1===n?(this.goodsMain.num=1,this.goodsMain.checked=!0,e.push(this.goodsMain)):(console.log(e[n]),e[n].num++),wx.setStorageSync("cart",e);var r=uni.getStorageSync("cart").length||0;this.cartNum=r,uni.showToast({title:"加入购物车成功",icon:"success",mask:!0})},collect:function(){var t=this,e=!1,n=uni.getStorageSync("collect")||[],r=n.findIndex((function(e){return e.goods_id==t.goods_id}));-1!==r?(n.splice(r,1),e=!1,uni.showToast({title:"取消收藏",icon:"success"})):(n.push(this.goodsMain),e=!0,uni.showToast({title:"收藏成功",icon:"success"})),uni.setStorageSync("collect",n),this.isCollect=e}}};e.default=i},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,c,"next",t)}function c(t){r(a,o,i,s,c,"throw",t)}s(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},3994:function(t,e,n){"use strict";n.r(e);var r=n("011d"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"770c":function(t,e,n){"use strict";n.r(e);var r=n("d27b"),o=n("3994");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("7cc0");var a,s=n("f0c5"),c=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"55a67a02",null,!1,r["a"],a);e["default"]=c.exports},"7cc0":function(t,e,n){"use strict";var r=n("e57d"),o=n.n(r);o.a},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var d="suspendedStart",f="suspendedYield",h="executing",v="completed",g={},p={};p[a]=function(){return this};var w=Object.getPrototypeOf,y=w&&w(w(P([])));y&&y!==r&&o.call(y,a)&&(p=y);var m=C.prototype=x.prototype=Object.create(p);k.prototype=m.constructor=C,C.constructor=k,C[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[s]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,n,r){var o=new E(b(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function b(t,e,n,r){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new N(r||[]);return i._invoke=S(t,n,a),i}function _(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function k(){}function C(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(n,r,i,a){var s=_(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,a)}))}a(s.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function S(t,e,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return M()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=_(t,e,n);if("normal"===c.type){if(r=n.done?v:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=_(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:M}}function M(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},ba87:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 主题颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.text-red[data-v-55a67a02]{color:#1cbbb4}.cu-bar[data-v-55a67a02]{width:100%}.cu-bar.tabbar.shop .action[data-v-55a67a02]{width:%?110?%}.detail uni-swiper[data-v-55a67a02]{height:65vw}.detail uni-swiper uni-swiper-item[data-v-55a67a02]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.detail uni-swiper uni-swiper-item uni-image[data-v-55a67a02]{width:60%}.detail .goods_price[data-v-55a67a02]{padding:%?15?%;font-size:%?32?%;color:#eb4450;font-weight:700}.detail .goods_name_row[data-v-55a67a02]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%}.detail .goods_name_row .goods_name[data-v-55a67a02]{-webkit-box-flex:5;-webkit-flex:5;flex:5;color:#000;font-size:%?30?%;padding:0 %?10?%;border-right:%?1?% solid #000;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2}.detail .goods_name_row .goods_collect[data-v-55a67a02]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.detail .goods_name_row .goods_collect .cuIcon-favor[data-v-55a67a02]{font-size:%?40?%}.detail .goods_name_row .goods_collect .cuIcon-favorfill[data-v-55a67a02]{font-size:%?40?%}.goods_detail[data-v-55a67a02]{padding-bottom:%?100?%}.tabbar[data-v-55a67a02]{position:fixed;bottom:0}',""]),t.exports=e},d27b:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"detail"},[n("v-uni-swiper",{staticClass:"screen-swiper square-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.goods.pics,(function(e,r){return n("v-uni-swiper-item",{key:e.pics_id,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage(r)}}},[n("v-uni-image",{attrs:{src:e.pics_mid,mode:"widthFix"}})],1)})),1),n("v-uni-view",{staticClass:"goods_price text-price"},[t._v(t._s(t.goods.goods_price))]),n("v-uni-view",{staticClass:"goods_name_row"},[n("v-uni-view",{staticClass:"goods_name"},[t._v(t._s(t.goods.goods_name))]),n("v-uni-view",{staticClass:"goods_collect",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collect.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{class:t.isCollect?"cuIcon-favorfill text-orange":"cuIcon-favor"}),t._v("收藏")],1)],1)],1),n("v-uni-view",{staticClass:"goods_detail"},[n("v-uni-view",{staticClass:"cu-bar justify-center bg-white"},[n("v-uni-view",{staticClass:"action sub-title"},[n("v-uni-text",{staticClass:"text-xl text-bold text-red"},[t._v("商品详情")]),n("v-uni-text",{staticClass:"text-ABC text-red"},[t._v("details")])],1)],1),n("v-uni-rich-text",{attrs:{nodes:t.goods.goods_introduce}})],1),n("v-uni-view",{staticClass:"cu-bar bg-white tabbar border shop"},[n("v-uni-button",{staticClass:"action",attrs:{"open-type":"contact"}},[n("v-uni-view",{staticClass:"cuIcon-service text-green"},[n("v-uni-view",{staticClass:"cu-tag badge"})],1),t._v("客服")],1),n("v-uni-button",{staticClass:"action",attrs:{"open-type":"share"}},[n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"cuIcon-share"}),t._v("分享")],1)],1),n("v-uni-navigator",{attrs:{url:"../cart/cart","open-type":"switchTab"}},[n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"cuIcon-cart"},[0!==t.cartNum?n("v-uni-view",{staticClass:"cu-tag badge"},[t._v(t._s(t.cartNum))]):t._e()],1),t._v("购物车")],1)],1),n("v-uni-view",{staticClass:"btn-group"},[n("v-uni-button",{staticClass:"cu-btn bg-orange round shadow-blur",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cartAdd.apply(void 0,arguments)}}},[t._v("加入购物车")]),n("v-uni-button",{staticClass:"cu-btn bg-red round shadow-blur"},[t._v("立 即 订 购")])],1)],1)],1)},i=[]},e57d:function(t,e,n){var r=n("ba87");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("32c9b1ea",r,!0,{sourceMap:!1,shadowMode:!1})}}]);