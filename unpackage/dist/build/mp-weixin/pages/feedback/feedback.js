(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feedback/feedback"],{"13e5":function(t,e,n){"use strict";(function(t){n("00e6");i(n("66fd"));var e=i(n("ac62"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"1fc6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){n.e("components/tabs").then(function(){return resolve(n("528f"))}.bind(null,n)).catch(n.oe)},c={name:"feedback",components:{Tabs:i},data:function(){return{tabs:[{title:"体验问题",isActive:!0},{title:"商品、商家投诉",isActive:!1}],tips:[{title:"功能建议",isActive:!0},{title:"购买遇到问题",isActive:!1},{title:"性能问题",isActive:!1},{title:"其他",isActive:!1}],modalName:null,imgList:[],text:""}},methods:{changeActive:function(t){this.tabs.forEach((function(e,n){return e.isActive=n===t}))},changeTipsActive:function(t){this.tips.forEach((function(e,n){return e.isActive=n===t}))},ViewImage:function(e){t.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(e){var n=this;t.showModal({title:"提示",content:"确定要删除这张图片吗？",cancelText:"再想想",confirmText:"确定",success:function(t){t.confirm&&n.imgList.splice(e.currentTarget.dataset.index,1)}})},ChooseImage:function(){var e=this;t.chooseImage({count:8,sizeType:["original","compressed"],sourceType:["album"],success:function(t){0!=e.imgList.length?e.imgList=e.imgList.concat(t.tempFilePaths):e.imgList=t.tempFilePaths}})},submit:function(){this.text.trim()?t.navigateBack({delta:1}):t.showToast({title:"输入不合法"})}}};e.default=c}).call(this,n("543d")["default"])},"61ae":function(t,e,n){},"68d9":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var c=function(){var t=this,e=t.$createElement;t._self._c},a=[]},7976:function(t,e,n){"use strict";var i=n("61ae"),c=n.n(i);c.a},ac62:function(t,e,n){"use strict";n.r(e);var i=n("68d9"),c=n("ffcd");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("7976");var u,s=n("f0c5"),o=Object(s["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=o.exports},ffcd:function(t,e,n){"use strict";n.r(e);var i=n("1fc6"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a}},[["13e5","common/runtime","common/vendor"]]]);