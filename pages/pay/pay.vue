<template>
  <view class="cart">
    <!--收货地址-->
    <view class="revice_address_row">
      <view class="user_info_row">
        <view class="user_info">
          <view>收货人：{{address.userName}}</view>
          <view>{{address.all}}</view>
        </view>
        <view class="user_phone">{{address.telNumber}}</view>
      </view>
    </view>
    <!--购物车内容-->
    <view class="cart_content">
      <view class="cart_title">
        <view class="cu-bar justify-center bg-white">
          <view class="action sub-title">
            <text class="text-xl text-bold text-red">购物车</text>
            <text class="bg-red" style="width:2rem"></text>
            <!-- last-child选择器-->
          </view>
        </view>
      </view>
      <view class="cart_main">
        <view class="cart_item" v-for="(item,index) in cart" :key="item.goods_id">
          <!--商品图片-->
          <navigator class="cart_img_warp">
            <image mode="widthFix" :src="item.goods_small_logo || 'https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg'"></image>
          </navigator>
          <!--商品信息-->
          <view class="cart_info_warp">
            <view class="goods_name">{{item.goods_name}}</view>
            <view class="goods_price_warp">
              <view class="goods_price text-price text-red">{{item.goods_price}}</view>
              <view class="cart_num_tool">
                <view class="goods_num">X{{item.num}}</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!--底部工具栏-->
    <view class="footer_tool">
      <!--总价格-->
      <view class="total_price_warp">
        <view class="total_price">
          合计：<text class="total_price_text text-price text-red">{{totalPrice}}</text>
        </view>
        <view>包含运费</view>
      </view>
      <!--结算-->
      <view class="order_pay_warp" @click="orderPay">
        支付({{totalNum}})
      </view>
    </view>

    <!--模态框-->
    <view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
      <view class="cu-dialog">
        <view class="cu-bar bg-white justify-end">
          <view class="content">提示</view>
        </view>
        <view class="padding-xl">
          是否确定删除购物车商品
        </view>
        <view class="cu-bar bg-white justify-end">
          <view class="action">
            <button class="cu-btn line-green text-green" @tap="hideModal" :data-bool="false">取消</button>
            <button class="cu-btn bg-green margin-left" @tap="hideModal" :data-bool="true">确定</button>
          </view>
        </view>
      </view>
    </view>

    <view class="cu-modal" :class="modalName=='Modal'?'show':''">
      <view class="cu-dialog">
        <view class="cu-bar bg-white justify-end">
          <view class="content">提示</view>
          <view class="action">
            <text class="cuIcon-close text-red"></text>
          </view>
        </view>
        <view class="padding-xl">
          {{ modalText }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "pay",
  data() {
    return {
      address: {},
      cart: [],
      totalPrice: 0,
      totalNum: 0,
      //模态框
      CustomBar: this.CustomBar,
      modalName: null,
      modalText: '',
      index: 0
    }
  },
  methods: {
    //模态框显示和隐藏
    showModal(name) {
      this.modalName = name
    },
    hideModal(e) {
      this.modalName = null
      if(e.currentTarget.dataset.bool){
        this.cart.splice(this.index,1)
        this.setCart(this.cart)
      }
    },
    //支付
    async orderPay() {
      //1 判断缓存中有没有token
      const token = uni.getStorageSync("token")
      //2 判断
      if(!token) {
        uni.navigateTo({
          url: '/pages/auth/auth'
        })
        return
      }
      //3 创建订单
      //准备请求头参数
      const header = {Authorization:token}
      //准备请求体参数
      const order_price = this.totalPrice+''
      const consignee_addr = this.address.all+''
      const cart = this.cart
      let goods = []
      cart.forEach(v=>goods.push({
          goods_id:v.goods_id,
          goods_number:v.num,
          goods_price:v.goods_price
        })
      )
      const orderParams = {order_price,consignee_addr,goods}
      //4 准备发送请求 创建订单  获取订单编号
      const res = await this.$request({
        url: '/my/orders/create',
        method: 'post',
        data: orderParams,
        header: header
      })
      console.log(res);
    }
  },
  onLoad() {

  },
  onShow() {
    //获取缓存中是否有收货地址
    let address = uni.getStorageSync("address")
    //获取缓存中的购物车数据
    let cart =  uni.getStorageSync("cart")||[]
    cart = cart.filter(v=>v.checked)
    //地址相关
    if(address){
      address.all = ""
      address.all = address.provinceName+address.cityName+address.countyName+address.detailInfo
    }
    //总价格和总数量
    let totalPrice = 0;
    let totalNum = 0;
      cart.forEach(v=>{
        totalPrice+=v.num*v.goods_price
        totalNum+=v.num
      })
    this.address = address
    this.cart = cart
    this.totalPrice = totalPrice
    this.totalNum = totalNum
  }
}
</script>

<style lang="scss">
page{
  padding-bottom: 90rpx;
}
.text-red{
  color: $text-color;
}
.user_info_row{
  display: flex;
  padding: 20rpx;
  .user_info{
    flex: 5;
  }
  .user_phone{
    flex: 3;
    text-align: right;
  }
}

.cart_content{
  .cart_main{
    .cart_item{
      display: flex;
      padding: 10rpx;
      border-bottom: 1rpx solid #ccc;
      .cart_img_warp{
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        image{
          width: 80%;
        }
      }
      .cart_info_warp{
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .goods_name{
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp:2;
          color: #666;
        }
        .goods_price_warp{
          display: flex;
          justify-content: space-between;
          .goods_price{
            font-size: 34rpx;
          }
          .cart_num_tool{
            display: flex;
            .goods_num{
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 20rpx;
            }
          }
        }

      }
    }
  }
}


.footer_tool{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90rpx;
  background: #fff;
  display: flex;
  border-top: 1px solid #ccc;
  .total_price_warp{
    flex: 5;
    padding-right: 15rpx;
    text-align: right;
    .total_price{
      .total_price_text{
        font-size: 34rpx;
        font-weight: 600;
      }
    }
  }
  .order_pay_warp{
    flex: 3;
    background-color: $theme-color;
    color: #fff;
    font-size: 32rpx;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>