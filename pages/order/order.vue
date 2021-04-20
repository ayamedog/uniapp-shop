<template>
  <view class="order">
    <view class="nav">
      <scroll-view scroll-x class="bg-white nav">
        <view class="flex text-center">
          <view class="cu-item flex-sub" :class="index==TabCur?'text-red cur':''" v-for="(item,index) in navList" :key="index" @tap="tabSelect" :data-id="index">
            {{item.name}}
          </view>
        </view>
      </scroll-view>
    </view>
    <view class="text-center">
      这里空空如也~
    </view>
  </view>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      TabCur: 0,
      scrollLeft: 0,
      navList: [
        { name: '全部订单'},
        { name: '待付款'},
        { name: '待收货'},
        { name: '退款/退货'}
      ]
    }
  },
  methods: {
    tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
    }
  },
  onLoad(options) {
    console.log(options);
    this.TabCur = options.type-1
  }
}
</script>

<style lang="scss">
  .text-red{
    color: $theme-color;
  }
  .nav{
    margin-bottom: 100rpx;
  }
</style>