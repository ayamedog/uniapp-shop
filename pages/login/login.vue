<template>
  <view class="login">
    <button class="cu-btn bg-white round shadow lg" @click="login">点击登录</button>
  </view>
</template>

<script>
export default {
  name: "login",
  data() {
    return {

    }
  },
  methods: {
    login() {
			// #ifdef MP-WEIXIN
				let userInfo = ''
				uni.getUserProfile({
				  desc: '我草你妈',
				  success: (res) => {
				    userInfo= res.userInfo
				    uni.setStorageSync('userInfo',userInfo)
				    uni.navigateBack({
				      delta: 1
				    })
				  }
				})
			// #endif
      // #ifndef MP-WEIXIN
      let userInfo1 = {
        avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epK9UEtYJwicCwGcej9bTuas3iaj05bK9ibpAiaia2YWiaeicjhicTzCY3RART4icdetIMbsdbDSDZyVbz2gMg/132",
        city: "Dezhou",
        country: "China",
        gender: 1,
        language: "zh_CN",
        nickName: "Futayo",
        province: "Shandong"
      }
      uni.setStorageSync('userInfo',userInfo1)
      uni.navigateBack({
        delta: 1
      })
			// #endif
    }
  }
}
</script>

<style lang="scss">
  page{
    background-color: $theme-color;
    height: 100%;
  }
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 100rpx;
    button{
      width: 60%;
    }
  }
</style>