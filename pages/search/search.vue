<template>
  <view class="search">
    <view class="search_row">
      <view class="cu-bar bg-red search">
        <view class="search-form radius">
          <text class="cuIcon-search"></text>
          <input :adjust-position="false" type="text" placeholder="搜索商品" confirm-type="search"
          v-model="keyword"
          >
        </view>
        <view class="action" @click="cancel" v-if="keyword">
          <text class="cuIcon-close"></text>
          <text>取消</text>
        </view>
      </view>
    </view>
    <view class="search_content">
      <view class="cu-list menu">
          <view class="cu-item" v-for="(item,index) in searchResult" :key="item.goods_id" @click="navigatorTo(item.goods_id)">
            <view class="content">
              <text class="text-grey">{{item.goods_name}}</text>
            </view>
          </view>
      </view>
    </view>
  </view>
</template>

<script>
var timer = ""
export default {
  name: "search",
  data() {
    return {
      keyword: '',
      searchResult: []
    }
  },
  methods: {
    async search() {
      const res = await this.$request({
        url: '/goods/qsearch',
        data: {
          query: this.keyword
        }
      })
      console.log(res);
      this.searchResult = res.data.message
    },
    cancel() {
      this.keyword=""
      this.searchResult = []
    },
    navigatorTo(id) {
      uni.navigateTo({
        url: "/pages/goods_detail/goods_detail?goods_id="+id
      })
    }
  },
  watch: {keyword() {
      //1 检测输入框的值合法性
      if(!this.keyword.trim()){
        //输入的值不合法
        return;
      }
      clearTimeout(timer)
      timer = setTimeout(() => {
        //3准备发送请求获取数据
        this.search()
      },300)
    }
  }
}
</script>

<style lang="scss">
.bg-red{
  background-color: $theme-color;
}
page{
  padding-top: 100rpx;
}
.search_row{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
}
.search_content{
  .cu-list{
    .cu-item{
      .content{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .text-grey{

        }
      }
    }
  }
}
</style>