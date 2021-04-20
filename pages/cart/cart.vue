<template>
  <view class="cart">
    <!--收货地址-->
    <view class="revice_address_row">
      <!--当收货地址不存在 按钮显示-->
      <view class="address_btn" v-if="!address.userName">
        <button class="cu-btn block lg round bg-red" @click="chooseAddress">
          <text class="cuIcon-add"></text> 添加收货地址</button>
      </view>
      <!--当收货地址存在 详细信息显示-->
      <view v-else class="user_info_row">
        <view class="user_info">
          <view>收货人：{{address.userName}}</view>
          <view>{{address.all}}</view>
        </view>
        <view class="user_phone">{{address.telNumber}}</view>
      </view>
    </view>
    <!--购物车内容-->
    <view class="cart_content" v-if="cart.length!==0">
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
          <!--复选框-->
          <checkbox-group class="cart_chk-wrap" @change="itemChange(item.goods_id)">
            <checkbox class='round red' :checked="item.checked" :class="item.checked?'checked':''"></checkbox>
          </checkbox-group>
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
                <button class="cu-btn bg-gray sm num_edit" @click="itemNumEdit" :data-id="item.goods_id" :data-operation="-1">-</button>
                <view class="goods_num">{{item.num}}</view>
                <button class="cu-btn bg-gray sm num_edit" @click="itemNumEdit" :data-id="item.goods_id" :data-operation="1">+</button>
              </view>
            </view>

          </view>
        </view>
      </view>
    </view>
    <!--购物车为空时-->
    <view class="cart_empty" v-else>
      <image mode="widthFix" src="../../static/icon/cartEmpty.png" class="cart_empty_img"></image>
      <view>购物车里空空如也~</view>
      <navigator url="../category/category" open-type="switchTab">
        <button class="cu-btn bg-cyan shadow">去逛逛</button>
      </navigator>

    </view>
    <!--底部工具栏-->
    <view class="footer_tool">
      <!--全选-->
      <view class="all_chk_warp">
        <checkbox-group @change="itemAllChecked">
          <checkbox class='checkbox red' :checked="allChecked" :class="allChecked?'checked':''"></checkbox><text>全选</text>
        </checkbox-group>

      </view>
      <!--总价格-->
      <view class="total_price_warp">
        <view class="total_price">
          合计：<text class="total_price_text text-price text-red">{{totalPrice}}</text>
        </view>
        <view>包含运费</view>
      </view>
      <!--结算-->
      <view class="order_pay_warp" @click="pay">
        结算({{totalNum}})
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
          <view class="action" @tap="hideModal2">
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
  name: "cart",
  data() {
    return {
      address: {},
      cart: [],
      allChecked: false,
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
    chooseAddress() {
      // #ifdef MP-WEIXIN
      uni.chooseAddress({
      	success: (res) => {
					console.log(res)
          uni.setStorageSync("address",res)
				}
      })
      //#endif

      // #ifndef MP-WEIXIN
      uni.navigateTo({
        url: '../address/address'
      })
      // #endif
    },
    //商品的选中
    itemChange(id) {
      //不能传入索引，因为数据是存在本地中的 删除商品可能会有问题
      //获取被修改的商品的id
      const goods_id=id
      //获取购物车数据
      let cart = this.cart
      //找到被修改的商品对象
      let index = cart.findIndex(v=>v.goods_id===goods_id)
      //选中状态取反
      cart[index].checked=!cart[index].checked
      this.setCart(cart)
    },
    //设置购物车状态同时 重新计算 底部工具栏的数据 全选 总价格 购买的数量。。。
    setCart(cart) {
      let allChecked = true
      //总价格和总数量
      let totalPrice = 0;
      let totalNum = 0;
      if(cart.length===0) {
        allChecked = false
      }else{
        cart.forEach(v=>{
          if(v.checked) {
            totalPrice+=v.num*v.goods_price
            totalNum+=v.num
          }else {
            allChecked = false
          }
        })
      }
      this.allChecked = allChecked
      this.totalPrice = totalPrice
      this.totalNum = totalNum
      uni.setStorageSync('cart',cart)
    },
    //商品的全选功能
    itemAllChecked() {
      //获取data中的数据
      let cart =this.cart,
          allChecked = this.allChecked;
      //修改值
      allChecked=!allChecked
      //循环修改cart数组中的商品选中状态
      cart.forEach(v=>v.checked=allChecked)
      //吧修改后的值填充会data或者缓存中
      this.setCart(cart)
    },
    //商品数量
    itemNumEdit(e) {
      const {operation,id} = e.currentTarget.dataset
      //获取购物车数组
      let cart = this.cart
      //找到需要修改的商品的索引
      const index = cart.findIndex(v=>v.goods_id===id)
      this.index = index
      //判断是否要执行删除
      if(cart[index].num===1&&operation===-1){
        this.showModal('DialogModal1')
        return
      }
      //进行修改数量
      cart[index].num+=operation
      // 设置回缓存和data中
      this.setCart(cart)
    },
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
    }
    ,
    hideModal2(e) {
      this.modalName = null
      return
    },
    //支付
    pay() {
      //1 判断收货地址是否存在

      if(!this.address.userName) {
        this.modalText='请选择收货地址'
        this.showModal('Modal')
        return
      }
      //2判断购物车内有没有商品
      if(this.totalNum===0){
        this.modalText='购物车里空空如也~'
        this.showModal('Modal')
        return
      }
      //3 跳转到支付页面
      uni.navigateTo({
        url: '/pages/pay/pay'
      })
    }
  },
  onLoad() {

  },
	onShow() {
		//获取缓存中是否有收货地址
    let address = uni.getStorageSync("address")
    //获取缓存中的购物车数据
    const cart =  uni.getStorageSync("cart")||[]
    //计算全选
    /*// const allChecked = cart.every(v=>v.checked)
    let allChecked = true
    //总价格和总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v=>{
      if(v.checked) {
        totalPrice+=v.num*v.goods_price
        totalNum+=v.num
      }else {
        allChecked = false
      }
    })*/
    this.setCart(cart)
    //地址相关
    if(address){
      address.all = ""
      address.all = address.provinceName+address.cityName+address.countyName+address.detailInfo
    }
    this.address = address
    this.cart = cart
  }
}
</script>

<style lang="scss">
page{
  padding-bottom: 90rpx;
  height: 100%;
}
.text-red{
  color: $text-color;
}
.bg-red{
  color: $theme-color;
}

.address_btn{
  display: flex;
  justify-content: center;
  .cu-btn{
    color: #fff;
    margin-top: 30rpx;
    width: 60%;
  }
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
      .cart_chk-wrap{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
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
            .num_edit{
              font-size: 34rpx;
            }
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

.cart_empty{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .cart_empty_img{
    width: 80%;
  }
  view{
    margin-bottom: 30rpx;
  }
}

.footer_tool{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90rpx;
  background: #fff;
  display: flex;
  border-top: 1px solid #ccc;
  .all_chk_warp{
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    checkbox-group{
      .checkbox{
        margin-right: 20rpx;
      }
    }
  }
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