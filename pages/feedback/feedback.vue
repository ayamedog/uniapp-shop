<template>
  <view class="feedback">
    <tabs :tabs="tabs" @changeActive="changeActive"></tabs>
    <view class="fb_main">
      <view class="fb_title">问题种类</view>
      <view class="fb_tips">
        <text class="cu-tag radius" :class="item.isActive?'bg-red':'bg-white'" v-for="(item,index) in tips" :key="index" @click="changeTipsActive(index)">{{item.title}}</text>
      </view>
    </view>
    <view class="fb_content">
      <!--多行输入文本框-->
      <view class="cu-form-group">
        <textarea maxlength="-1" :disabled="modalName!=null"  placeholder="请描述一下您的问题" v-model="text"></textarea>
      </view>
      <!--图片上传-->
      <view class="cu-bar bg-white margin-top">
        <view class="action">
          图片上传
        </view>
        <view class="action">
          {{imgList.length}}/8
        </view>
      </view>
      <view class="cu-form-group">
        <view class="grid col-4 grid-square flex-sub">
          <view class="solids" @tap="ChooseImage" v-if="imgList.length<8">
            <text class='cuIcon-cameraadd'></text>
          </view>
          <view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
            <image :src="imgList[index]" mode="aspectFill"></image>
            <view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
              <text class='cuIcon-close'></text>
            </view>
          </view>

        </view>
      </view>
    </view>
    <view class="form_btn_warp">
      <button class="cu-btn lg bg-red" @click="submit">
        <text class="cuIcon-check"></text>
        提交</button>
    </view>
  </view>
</template>

<script>
import Tabs from "../../components/tabs";
export default {
  name: "feedback",
  components: {Tabs},
  data() {
    return {
      tabs: [
        {title: '体验问题',isActive: true},
        {title: '商品、商家投诉',isActive: false},
      ],
      tips: [
        {title: '功能建议',isActive: true},
        {title: '购买遇到问题',isActive: false},
        {title: '性能问题',isActive: false},
        {title: '其他',isActive: false}
      ],
      modalName: null,
      imgList: [],
      text: ''
    }
  },
  methods: {
    changeActive(index) {
      this.tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
    },
    changeTipsActive(index) {
      this.tips.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
    },
    ViewImage(e) {
      uni.previewImage({
        urls: this.imgList,
        current: e.currentTarget.dataset.url
      });
    },
    DelImg(e) {
      uni.showModal({
        title: '提示',
        content: '确定要删除这张图片吗？',
        cancelText: '再想想',
        confirmText: '确定',
        success: res => {
          if (res.confirm) {
            this.imgList.splice(e.currentTarget.dataset.index, 1)
          }
        }
      })
    },
    ChooseImage() {
      uni.chooseImage({
        count: 8, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: (res) => {
          if (this.imgList.length != 0) {
            this.imgList = this.imgList.concat(res.tempFilePaths)
          } else {
            this.imgList = res.tempFilePaths
          }
        }
      });
    },
    submit() {
      if(!this.text.trim()) {
        uni.showToast({
          title: '输入不合法'
        })
        return
      }
      /*this.imgList.forEach((v,i)=>{
        uni.uploadFile({
          url: '',
          filePath: '',
          name: '',
          formData: {},
          success: (res) => {
            console.log(res);
          }
        })
      })*/
      uni.navigateBack({
        delta: 1
      })

    }
  }
}
</script>

<style lang="scss">
.bg-red{
  background-color: $theme-color;
}
page{
  background-color: #eee;
}
  .feedback{
   .fb_main{
     padding: 20rpx;
     color: #666;
     .fb_title{

     }
     .fb_tips{
       display: flex;
       flex-wrap: wrap;
       .cu-tag{
         width: 30%;
         height: 60rpx;
         margin: 10rpx;
       }
     }
   }
    .fb_content{
      .cu-form-group{
        textarea{
          height: 250rpx;
        }
      }
    }
    .form_btn_warp{
      display: flex;
      padding: 15rpx;
      justify-content: flex-end;
    }
  }
</style>