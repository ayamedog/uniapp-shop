(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_detail/goods_detail"],{3994:function(t,o,e){"use strict";e.r(o);var n=e("80b7"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(o,t,(function(){return n[t]}))}(a);o["default"]=s.a},6992:function(t,o,e){"use strict";var n=e("8437"),s=e.n(n);s.a},"731b":function(t,o,e){"use strict";(function(t){e("00e6");n(e("66fd"));var o=n(e("770c"));function n(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("543d")["createPage"])},"770c":function(t,o,e){"use strict";e.r(o);var n=e("9841"),s=e("3994");for(var a in s)"default"!==a&&function(t){e.d(o,t,(function(){return s[t]}))}(a);e("6992");var i,c=e("f0c5"),r=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);o["default"]=r.exports},"80b7":function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=s(e("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,o,e,n,s,a,i){try{var c=t[a](i),r=c.value}catch(d){return void e(d)}c.done?o(r):Promise.resolve(r).then(n,s)}function i(t){return function(){var o=this,e=arguments;return new Promise((function(n,s){var i=t.apply(o,e);function c(t){a(i,n,s,c,r,"next",t)}function r(t){a(i,n,s,c,r,"throw",t)}c(void 0)}))}}var c={name:"goods_detail",data:function(){return{goods:[],goodsMain:[],goods_id:0,swiperList:[],dotStyle:!0,cartNum:0,isCollect:!1}},onShow:function(){var o=getCurrentPages();console.log(o);var e=o[o.length-1],n=e.options;this.goods_id=n.goods_id,this.getGoodsDetail();var s=t.getStorageSync("cart").length||0;this.cartNum=s},methods:{getGoodsDetail:function(){var o=this;return i(n.default.mark((function e(){var s,a,i,c;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.$request({url:"/goods/detail",data:{goods_id:o.goods_id}});case 2:s=e.sent,console.log(s),a=t.getStorageSync("collect")||[],console.log(a),i=a.some((function(t){return t.goods_id==o.goods_id})),c={goods_id:s.data.message.goods_id,pics:s.data.message.pics,goods_name:s.data.message.goods_name,goods_price:s.data.message.goods_price,goods_introduce:s.data.message.goods_introduce,num:0},o.goods=c,o.isCollect=i,o.goodsMain=s.data.message;case 11:case"end":return e.stop()}}),e)})))()},previewImage:function(o){var e=this.goods.pics.map((function(t){return t.pics_mid}));t.previewImage({current:e[o],urls:e})},cartAdd:function(){var o=this;console.log("add");var e=t.getStorageSync("cart")||[],n=e.findIndex((function(t){return t.goods_id===o.goodsMain.goods_id}));console.log(n),-1===n?(this.goodsMain.num=1,this.goodsMain.checked=!0,e.push(this.goodsMain)):(console.log(e[n]),e[n].num++),wx.setStorageSync("cart",e);var s=t.getStorageSync("cart").length||0;this.cartNum=s,t.showToast({title:"加入购物车成功",icon:"success",mask:!0})},collect:function(){var o=this,e=!1,n=t.getStorageSync("collect")||[],s=n.findIndex((function(t){return t.goods_id==o.goods_id}));-1!==s?(n.splice(s,1),e=!1,t.showToast({title:"取消收藏",icon:"success"})):(n.push(this.goodsMain),e=!0,t.showToast({title:"收藏成功",icon:"success"})),t.setStorageSync("collect",n),this.isCollect=e}}};o.default=c}).call(this,e("543d")["default"])},8437:function(t,o,e){},9841:function(t,o,e){"use strict";var n;e.d(o,"b",(function(){return s})),e.d(o,"c",(function(){return a})),e.d(o,"a",(function(){return n}));var s=function(){var t=this,o=t.$createElement;t._self._c},a=[]}},[["731b","common/runtime","common/vendor"]]]);