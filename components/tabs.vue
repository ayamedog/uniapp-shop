<template>
  <view class="tabs">
    <scroll-view scroll-x class="bg-white nav text-center">
      <view class="flex text-center">
        <view class="cu-item flex-sub"
              v-for="(item,index) in tabs" :key="index"
              :class="item.isActive?'text-red cur':''" @click="tabSelect(index)">
          <text v-if="item.icon" :class="item.icon || ''"></text> {{item.title}}
        </view>
        <!--<view class="cu-item flex-sub" :class="1==TabCur?'text-red cur':''" @tap="tabSelect" data-id="1">
          <text class="cuIcon-upstage"></text> 销量
        </view>
        <view class="cu-item flex-sub" :class="2==TabCur?'text-red cur':''" @tap="tabSelect" data-id="2">
          <text class="cuIcon-recharge"></text> 价格
        </view>-->
      </view>
    </scroll-view>
    <view class="tabs-content">
      <slot></slot>
    </view>
  </view>


</template>

<script>
  export default {
    name: "tabs",
    props: {
      tabs: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        TabCur: 0
      }
    },
    methods: {
      tabSelect(index) {
        this.$emit('changeActive',index)
      }
    },
  }
</script>

<style lang="scss">
  .text-red{
    color: $theme-color;
  }
</style>