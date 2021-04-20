<template>
  <view class="detail">
    <!--轮播图-->
    <swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true"
            :autoplay="true" interval="5000" duration="500">
      <swiper-item v-for="(item,index) in goods.pics" :key="item.pics_id" @click="previewImage(index)">
        <image :src="item.pics_mid" mode="widthFix"></image>
      </swiper-item>
    </swiper>
    <!--商品信息-->
    <view class="goods_price text-price">{{goods.goods_price}}</view>
    <view class="goods_name_row">
      <view class="goods_name">{{goods.goods_name}}</view>
      <view class="goods_collect" @click="collect">
        <view class="action">
          <view :class="!isCollect?'cuIcon-favor':'cuIcon-favorfill text-orange'"></view> 收藏
        </view>
      </view>
    </view>
    <!--商品详情-->
    <view class="goods_detail">
      <view class="cu-bar justify-center bg-white">
        <view class="action sub-title">
          <text class="text-xl text-bold text-red">商品详情</text>
          <text class="text-ABC text-red">details</text>
          <!-- last-child选择器-->
        </view>
      </view>
      <rich-text :nodes="goods.goods_introduce">
      </rich-text>
    </view>
    <!--底部操作条-->
    <view class="cu-bar bg-white tabbar border shop">
      <button class="action" open-type="contact">
        <view class="cuIcon-service text-green">
          <view class="cu-tag badge"></view>
        </view> 客服
      </button>
      <button class="action" open-type="share">
        <view class="action">
          <view class="cuIcon-share"></view> 分享
        </view>
      </button>
      <navigator url="../cart/cart" open-type="switchTab">
        <view class="action">
          <view class="cuIcon-cart">
            <view class="cu-tag badge" v-if="cartNum!==0">{{cartNum}}</view>
          </view>
          购物车
        </view>
      </navigator>
      <view class="btn-group">
        <button class="cu-btn bg-orange round shadow-blur" @click="cartAdd">加入购物车</button>
        <button class="cu-btn bg-red round shadow-blur">立 即 订 购</button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "goods_detail",
    data() {
      return {
        goods: [],
        goodsMain: [],
        goods_id: 0,
        swiperList: [],
        dotStyle: true,
        cartNum: 0,
        //商品是否被收藏
        isCollect: false
      }
    },
    onShow() {
      let pages = getCurrentPages();
      console.log(pages);
      let currentPage = pages[pages.length-1]
      let options = currentPage.options;

      this.goods_id = options.goods_id
      this.getGoodsDetail()
      let num = uni.getStorageSync("cart").length||0
      this.cartNum = num
    },

    methods: {
      async getGoodsDetail() {
        const res = await this.$request({
          url: '/goods/detail',
          data: {goods_id:this.goods_id}
        })
        console.log(res);
        //1 获取缓存中商品收藏的数组
        let collect = uni.getStorageSync("collect") || []
        console.log(collect);
        //2 判断当前商品是否收藏
        let isCollect = collect.some(v=>v.goods_id==this.goods_id)
        let goods ={
          goods_id: res.data.message.goods_id,
          pics:res.data.message.pics,
          goods_name:res.data.message.goods_name,
          goods_price:res.data.message.goods_price,
          goods_introduce:res.data.message.goods_introduce,
          num:0
        }
        this.goods = goods
        this.isCollect = isCollect
        this.goodsMain = res.data.message
      },
      //预览图片
      previewImage(index) {
        const urls = this.goods.pics.map(v=>v.pics_mid)
        uni.previewImage({
          current: urls[index],
          urls: urls
        })
      },
      //加入购物车
      cartAdd() {
        console.log('add');
        let cart = uni.getStorageSync("cart")||[]
        let index = cart.findIndex(v=>v.goods_id === this.goodsMain.goods_id);
        console.log(index);
        if(index===-1){
          //不存在 第一次添加
          this.goodsMain.num=1
          this.goodsMain.checked = true
          cart.push(this.goodsMain)
        }else {
          //已经存在购物车数据 执行num ++
          console.log(cart[index]);
          cart[index].num++
        }
        //把购物车数据重新添加到缓存中
        wx.setStorageSync("cart",cart)
        let num = uni.getStorageSync("cart").length||0
        this.cartNum = num
        uni.showToast({
          title:'加入购物车成功',
          icon: "success",
					mask:true
        })
      },
      //收藏切换
      collect() {
        let isCollect = false
        //1 获取缓存中的商品收藏数组
        let collect = uni.getStorageSync("collect") || []
        //2判断该商品是否被收藏过
        let index = collect.findIndex(v=>v.goods_id==this.goods_id)
        //3 当index!=-1 表示已经收藏过
        if(index!==-1) {
          //已经收藏过了 在数组中删除该商品
          collect.splice(index,1)
          isCollect=false
          uni.showToast({
            title: '取消收藏',
            icon: 'success'
          })
        }else {
          //没有收藏过
          collect.push(this.goodsMain)
          isCollect=true
          uni.showToast({
            title: '收藏成功',
            icon: 'success'
          })
        }
        //4 把数组存入到缓存中
        uni.setStorageSync("collect",collect)
        //5 修改data中的属性 isCollect
        this.isCollect = isCollect
      }
    }
  }
</script>

<style lang="scss">
.text-red{
  color: $theme-color;
}
.cu-bar{
  width: 100%;
}
.cu-bar.tabbar.shop .action {
  width: 110rpx;
}
.detail{
  swiper{
    height: 65vw;
    swiper-item{
      display: flex;
      justify-content: center;
      align-items: center;
      image{
        width: 60%;
      }
    }
  }
  .goods_price{
    padding: 15rpx;
    font-size: 32rpx;
    color: $text-color;
    font-weight: bold;
  }
  .goods_name_row{
    display: flex;
    margin-bottom: 20rpx;
    .goods_name{
      flex: 5;
      color: #000;
      font-size: 30rpx;
      padding: 0 10rpx;
      border-right: 1rpx solid #000;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp:2;
    }
    .goods_collect{
      display: flex;
      flex-direction: column;
      text-align: center;
      flex: 1;
      .cuIcon-favor{
        font-size: 40rpx;
      }
      .cuIcon-favorfill{
        font-size: 40rpx;
      }
    }
  }
}
.goods_detail{
  padding-bottom: 100upx;
}
.tabbar{
  position: fixed;
  bottom: 0;
}
</style>