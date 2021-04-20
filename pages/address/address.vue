<template>
  <view class="address">
    <view class="address-choose">
      <pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion">
        <view class="cu-form-group">
          <view class="title">城市</view>
          <input placeholder="城市" name="input" v-model="regionName">
        </view>
      </pick-regions>
      <view class="cu-form-group align-start">
        <view class="title">详细地址</view>
        <textarea maxlength="-1" placeholder="请输入详细地址" v-model="addressAll.detailInfo"></textarea>
      </view>
      <view class="cu-form-group">
        <view class="title">联系人</view>
        <input placeholder="请输入联系人" name="input" v-model="addressAll.userName">
      </view>
      <view class="cu-form-group">
        <view class="title">手机号码</view>
        <input placeholder="请输入手机号码" name="input" v-model="addressAll.telNumber">
        <view class="cu-capsule radius">
          <view class='cu-tag bg-cyan'>
            +86
          </view>
          <view class="cu-tag line-cyan">
            中国大陆
          </view>
        </view>
      </view>
    </view>
   <view class="submit margin-top">
     <button class="cu-btn bg-cyan lg round" @click="setAddress">确认</button>
   </view>
  </view>
</template>

<script>
import pickRegions from '@/components/pick-regions/pick-regions.vue'
export default {
  components:{ pickRegions },
  data(){
    return {
      region:[],
      addressAll: {
        provinceName: '',
        cityName: '',
        countyName: '',
        detailInfo: '',
        userName: '',
        telNumber: ''
      },
      defaultRegion:['广东省','广州市','番禺区'],
      defaultRegionCode:'440113'
    }
  },
  computed:{
    regionName(){
      // 转为字符串
      return this.region.map(item=>item.name).join('')
    }
  },
  methods:{
    // 获取选择的地区
    handleGetRegion(region){
      this.region = region
      this.addressAll.provinceName = this.region[0].name
      this.addressAll.cityName = this.region[1].name
      this.addressAll.countyName = this.region[2].name
    },
    //提交地址
    setAddress() {
      let address = this.addressAll
      for (let addressKey in address) {
        if(address[addressKey] === "") {
          uni.showToast({
            title: '请输入完整信息'
          })
          return
        }
      }
      uni.setStorageSync("address",this.addressAll)
      uni.switchTab({
       url: '../cart/cart'
     })
    }
  }
}
</script>

<style lang="scss">
  .address{
    justify-content: center;
    .submit{
      display: flex;
      justify-content: center;
      button {
        width: 60%;
      }
    }
  }
</style>