<template>
  <view class="list">
    <search-input></search-input>
    <tabs :tabs="tabs" @changeActive="changeActive">
      <block v-if="tabs[0].isActive">
        <view class="first_tab">
          <navigator class="goods_item" v-for="(item,index) in goods" :key="item.goods_id" :url="'../goods_detail/goods_detail?goods_id='+item.goods_id">
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
      </block>
      <block v-else-if="tabs[1].isActive">1</block>
      <block v-else-if="tabs[2].isActive">2</block>
    </tabs>
  </view>
</template>

<script>
import SearchInput from "../../components/searchInput";
import Tabs from "../../components/tabs";
export default {
  name: "goods_list",
  components: {Tabs, SearchInput},
  data() {
    return {
      tabs: [
        {
          title: '综合',
          icon: 'cuIcon-apps',
          isActive: true
        },
        {
          title: '销量',
          icon: 'cuIcon-upstage',
          isActive: false
        },
        {
          title: '价格',
          icon: 'cuIcon-recharge',
          isActive: false
        },
      ],
      QueryParams: {
        query: '',
        cid: '',
        pagenum: 1,
        pagesize: 10
      },
      goods: [],
      totalPages:0
    }
  },
  methods: {
    changeActive(index) {
      this.tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
    },
    //获取商品列表数据
    async getGoodsList() {
      const res = await this.$request({
        url: '/goods/search',
        data:this.QueryParams
      })
      console.log(res);
      this.goods = [...this.goods,...res.data.message.goods]
      //总条数
      this.totalPages = Math.ceil(res.data.message.total / this.QueryParams.pagesize)
      //关闭下拉刷新的窗口
      uni.stopPullDownRefresh()
    }
  },
  onLoad(options) {
    console.log(options);
    this.QueryParams.cid = options.cid || ''
    this.QueryParams.query = options.query || ''
    this.getGoodsList()
  },
  //滚动条触底事件
	onReachBottom() {
		//判断还有没有下一页数据
    if(this.QueryParams.pagenum >= this.totalPages) {
      //没有下一页数据
      uni.showToast({title: '已经到底了'})
    }else {
      this.QueryParams.pagenum++
      this.getGoodsList()
    }
	},
	//下拉刷新事件
	onPullDownRefresh() {
    this.goods = []
    this.QueryParams.pagenum = 1
    this.getGoodsList()
  }
}
</script>

<style lang="scss">
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
          color: $text-color;
        }
      }
    }
  }
</style>