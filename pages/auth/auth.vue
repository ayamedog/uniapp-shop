<template>
  <view class="cu-bar btn-group">
    <button class="cu-btn bg-green shadow-blur round lg" open-type="getUserInfo" @getuserinfo="getUserInfo">
      获取授权
    </button>
  </view>
</template>

<script>
export default {
  name: "auth",
  data() {
    return {

    }
  },
  methods: {
    async getUserInfo(e) {
      // console.log(e);
      //1 获取用户信息
      const {encryptedData,rawData,iv,signature} = e.detail
      //2 获取小程序登陆成功后的code
      // let code =''
      // uni.login({
      //   provider: 'weixin',
      //   success: function (res) {
      //     console.log(res);
      //   }
      // });
      /*uni.getUserProfile({
        desc: '获取用户信息',
        success:(res) => {
          console.log(res);
        }
      })*/
      // const loginParams = {encryptedData,rawData,iv,signature,code}
      //3 发送请求获取用户的token值
      // const res = await this.$request({
      //   url: '/users/wxlogin',
      //   data: loginParams,
      //   methods: "post"
      // })
      // console.log(res);
      //4 设置token
      let token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo'
      uni.setStorageSync('token',token)
      uni.navigateBack({
        delta: 1
      })
    },
  }
}
</script>

<style lang="scss">
  .lg{
    width: 80%;
  }
</style>