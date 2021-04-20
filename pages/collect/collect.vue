<template>
  <view class="collect">
    <tabs :tabs="tabList" @changeActive="changeActive"></tabs>
    <view class="tags">
      <view class="cu-tag radius bg-red" :class="item.isActive?'bg-red':'bg-white'" v-for="(item,index) in tagsList" @click="changeTagsActive(index)">{{item.title}}</view>
    </view>
    <view class="collect_content" v-if="collect.length!==0">
      <view class="first_tab">
        <navigator class="goods_item" v-for="(item,index) in collect" :key="item.goods_id" :url="'../goods_detail/goods_detail?goods_id='+item.goods_id">
          <!--左侧图片-->
          <view class="goods_img_warp">
            <image mode="widthFix" :src="item.goods_small_logo || 'https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg'"></image>
          </view>
          <!--右侧商品信息-->
          <view class="goods_info_warp">
            <view class="goods_name">{{item.goods_name}}</view>
            <view class="goods_price text-price text-red">{{item.goods_price}}</view>
          </view>
        </navigator>
      </view>
    </view>
    <view class="empty" v-else>
      <view>还没有收藏任何商品，快去收藏吧</view>
      <view>
        <navigator url="../category/category" open-type="switchTab">
          <button class="cu-btn bg-red shadow">去逛逛</button>
        </navigator>
      </view>
    </view>

  </view>
</template>

<script>
import Tabs from "../../components/tabs";
export default {
  name: "collect",
  components: {Tabs},
  data() {
    return{
      tabList: [
        {title: '商品收藏',isActive: true},
        {title: '品牌收藏',isActive: false},
        {title: '店铺收藏',isActive: false},
        {title: '浏览足迹',isActive: false}
      ],
      tagsList: [
        {title: '全部',isActive: true},
        {title: '正在热卖',isActive: false},
        {title: '即将上线',isActive: false}
      ],
      collect: []
    }
  },
  methods: {
    changeActive(index) {
      this.tabList.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
    },
    changeTagsActive(index){
      this.tagsList.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
    }
  },
  onShow() {
    const collect = uni.getStorageSync("collect") || []
    this.collect = collect
  }
}
</script>

<style lang="scss">
  page{
    background-color: #f3f4f6;
  }
  .tags{
    padding: 15rpx;
  }
  .empty{
    margin-top: 200rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    .cu-btn{
      margin-top: 50rpx;
    }
  }
  .collect_content{
    background-color: #fff;
    .first_tab{
      .goods_item{
        display: flex;
        border-bottom: 1px solid #ccc;
        .goods_img_warp{
          flex: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          image{
            width: 70%;
          }
        }
        .goods_info_warp{
          flex: 3;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .goods_name{
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:2;
          }
          .goods_price{
            font-size: 32rpx;
            color: $theme-color;
          }
        }
      }
    }
  }
</style>