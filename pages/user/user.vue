<template>
  <view class="user">
    <view class="user_img_warp">
      <image class="user_bg" :src="userInfo.avatarUrl"></image>
      <view class="user_info">
        <view class="user_icon cu-avatar xl round bg-red"
        :style='"background-image: url("+userInfo.avatarUrl+")"'
        ></view>
        <view class="user_name">{{userInfo.nickName}}</view>
      </view>
    </view>
    <view class="user_content">
      <view class="user_main">
        <!--历史足迹-->
        <view class="history_warp">
          <navigator>
            <view class="his_num">0</view>
            <view class="his_name">收藏的店铺</view>
          </navigator>
          <navigator url="../collect/collect">
            <view class="his_num">{{collectNum}}</view>
            <view class="his_name">收藏的商品</view>
          </navigator>
          <navigator>
            <view class="his_num">0</view>
            <view class="his_name">关注的商品</view>
          </navigator>
          <navigator>
            <view class="his_num">0</view>
            <view class="his_name">我的足迹</view>
          </navigator>
        </view>
        <!--我的订单-->
        <view class="orders_warp">
          <view class="orders_title cu-bar bg-white">
            <view class="action">
              <text>我的订单</text>
            </view>
          </view>
          <view class="orders-content">
            <view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
                <view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
                  <navigator :url="'../order/order?type='+item.type">
                  <view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
                    <view class="cu-tag badge" v-if="item.badge!=0">
                      <block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
                    </view>
                  </view>
                  <text>{{item.name}}</text>
                  </navigator>
                </view>
            </view>
          </view>
        </view>
        <!--收货地址管理-->

        <!--应用信息相关的-->
        <!--<view class="app_info_warp">
          <view class="app_info_item app_info_contact">
            <text>联系客服</text>
            <text>16600202744</text>
          </view>
          <navigator class="app_info_item" url="../feedback/feedback">意见反馈</navigator>
          <view class="app_info_item">关于我们</view>
        </view>-->
        <!--推荐-->
        <!--<view class="recommend_warp">把应用推荐给其他人</view>-->
        <view class="cu-list menu">
          <view class="cu-item arrow margin-bottom">
            <view class="content">
              <text class="cuIcon-homefill text-grey"></text>
              <text class="text-grey">收货地址管理</text>
            </view>
          </view>
          <button class="cu-item arrow" open-type="contact" id="kefu">
            <view class="content">
              <text class="cuIcon-servicefill text-grey"></text>
              <text class="text-grey">联系客服</text>
            </view>
          </button>
          <view class="cu-item arrow" @click="navigator">
            <view class="content">
              <text class="cuIcon-markfill text-grey"></text>
              <text class="text-grey">意见反馈</text>
            </view>
          </view>
          <view class="cu-item arrow">
            <view class="content">
              <text class="cuIcon-group_fill text-grey"></text>
              <text class="text-grey">关于我们</text>
            </view>
          </view>
          <button class="cu-item arrow margin-top" open-type="share" id="shareApp">
            <view class="content">
              <text class="cuIcon-forwardfill text-grey"></text>
              <text class="text-grey">分享应用</text>
            </view>
          </button>
          <view class="logout margin-top">
            <button class="cu-btn round lg bg-cyan" @click="logout">退出登录</button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      userInfo: {},
      cuIconList: [{
        cuIcon: 'form',
        color: 'red',
        badge: 0,
        name: '全部订单',
        type: 1
      }, {
        cuIcon: 'pay',
        color: 'orange',
        badge: 0,
        name: '待付款',
        type: 2
      }, {
        cuIcon: 'deliver',
        color: 'yellow',
        badge: 0,
        name: '待收货',
        type: 3
      }, {
        cuIcon: 'refund',
        color: 'olive',
        badge: 0,
        name: '退款/退货',
        type: 4
      }],
      gridCol: 4,
      gridBorder: false,
      collectNum: 0
    }
  },
  onShow() {
    const userInfo = uni.getStorageSync('userInfo')
    const collect = uni.getStorageSync("collect") || []
    if(!userInfo) {
      uni.navigateTo({
        url: '/pages/login/login'
      })
      return
    }
    this.collectNum = collect.length
    this.userInfo = userInfo
  },
  methods: {
    navigator() {
			uni.navigateTo({
				url:"../feedback/feedback"
			})
    },
    logout() {
      uni.clearStorageSync('userInfo')
      uni.switchTab({
        url: '../index/index'
      })
    }
  },
	onShareAppMessage(res) {
    console.log(res);
    return {
      title: '分享应用',
      path: 'pages/user/user'
    }
  }
}
</script>

<style lang="scss">
button{
  text-align: left;
}
page{
  background-color: #edece8;
}
  .user{
    .user_img_warp{
      position: relative;
      .user_bg{
        height: 50vh;
        width: 100%;
        filter: blur(10rpx);
      }
      .user_info{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 30%;
        text-align: center;
        .user_icon{
          background-size: cover;
          margin-bottom: 20rpx;
        }
        .user_name{
          color: #fff;
        }
      }
    }
    .user_content{
      position: relative;
      .user_main{
        color: #666;
        position: absolute;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
        top: -80rpx;
        .history_warp{
          background-color: #fff;
          display: flex;
          navigator{
            flex: 1;
            text-align: center;
            padding: 10rpx 0;
            .his_num{
              color: $theme-color;
            }
          }
        }
        .orders_warp{
          .orders_title{
            margin-top: 20rpx;
            min-height: 80rpx;
            border-bottom: 1rpx solid #ccc;
          }
          .no-border{
            padding: 0;
          }
        }
        .address_warp{
          margin-top: 30rpx;
          background-color: #fff;
          padding: 20rpx;
        }
        /*.app_info_warp{
          margin-top: 30rpx;
          background-color: #fff;
          .app_info_item{
            padding: 20rpx;
          }
          .app_info_contact{
            display: flex;
            justify-content: space-between;
          }
        }
        .recommend_warp{
          margin-top: 30rpx;
          background-color: #fff;
          padding: 20rpx;
          margin-bottom: 30rpx;
        }*/
        .cu-list{
          margin-bottom: 30rpx;
         // #ifdef H5
				  padding-bottom: var(--window-bottom);
				 // #endif
          .logout{
            display: flex;
            justify-content: center;
            button{
              width: 60%;
            }
          }
        }
      }
    }
  }
</style>