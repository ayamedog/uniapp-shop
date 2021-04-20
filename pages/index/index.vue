<template>
	<view class="content">
    <!--搜索组件-->
		<search-input></search-input>
    <!--轮播图-->
    <swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
            :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
            indicator-active-color="#0081ff">
      <swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''" @click="goGoodsDetail(item.goods_id)">
        <view class="swiper-item">
          <image :src="item.image_src" mode='aspectFill'></image>
          <!--<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>-->
        </view>
      </swiper-item>
    </swiper>
    <!--分类导航-->
    <view class="index_cate">
      <navigator v-for="(item,index) in cateList" :key="index" url="../category/category" open-type="switchTab">
        <image mode="widthFix" :src="item.image_src"></image>
      </navigator>
    </view>
    <!--楼层-->
    <view class="index_floor">
      <view class="floor_group" v-for="(item1,index) in floorList" :key="index">
        <!--标题-->
        <view class="floor_title">
          <image :src="item1.floor_title.image_src" mode="widthFix"></image>
        </view>
        <!--内容-->
        <view class="floor_list">
          <navigator v-for="(item2,index2) in item1.product_list" @click="goQuery(item2.navigator_url)">
            <image :src="item2.image_src" :mode="index2===0?'widthFix':'scaleToFill'"></image>
          </navigator>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
  import searchInput from "../../components/searchInput";
  import SearchInput from "../../components/searchInput";
	export default {
    components: {SearchInput},
    data() {
			return {
			  //轮播图数据
        cardCur: 0,
        swiperList: [],
        dotStyle: false,
        towerStart: 0,
        direction: '',
        //分类导航数据
        cateList: [],
        //楼层数据
        floorList: []
			}
		},
    onLoad() {
      // 初始化towerSwiper 传已有的数组名即可
      this.TowerSwiper('swiperList');
      this.getSwiper()
      this.getCateList()
      this.getFloorList()
    },
    methods: {
      //获取轮播图数据
      getSwiper() {
        this.$request({url:'/home/swiperdata'})
        .then(res => {
          this.swiperList = res.data.message
        })
      },
      //获取分类导航数据
      getCateList() {
        this.$request({url:'/home/catitems'})
        .then(res => {
          this.cateList = res.data.message
        })
      },
      //获取楼层数据
      getFloorList() {
        this.$request({url: '/home/floordata'})
        .then(res => {
          this.floorList = res.data.message
          console.log(res);
        })
      },
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
      },
      // towerSwiper
      // 初始化towerSwiper
      TowerSwiper(name) {
        let list = this[name];
        for (let i = 0; i < list.length; i++) {
          list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
          list[i].mLeft = i - parseInt(list.length / 2)
        }
        this.swiperList = list
      },

      // towerSwiper触摸开始
      TowerStart(e) {
        this.towerStart = e.touches[0].pageX
      },

      // towerSwiper计算方向
      TowerMove(e) {
        this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
      },

      // towerSwiper计算滚动
      TowerEnd(e) {
        let direction = this.direction;
        let list = this.swiperList;
        if (direction == 'right') {
          let mLeft = list[0].mLeft;
          let zIndex = list[0].zIndex;
          for (let i = 1; i < this.swiperList.length; i++) {
            this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
            this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
          }
          this.swiperList[list.length - 1].mLeft = mLeft;
          this.swiperList[list.length - 1].zIndex = zIndex;
        } else {
          let mLeft = list[list.length - 1].mLeft;
          let zIndex = list[list.length - 1].zIndex;
          for (let i = this.swiperList.length - 1; i > 0; i--) {
            this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
            this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
          }
          this.swiperList[0].mLeft = mLeft;
          this.swiperList[0].zIndex = zIndex;
        }
        this.direction = ""
        this.swiperList = this.swiperList
      },

      //点击轮播图跳转
      goGoodsDetail(id) {
        console.log(id);
        uni.navigateTo({
          url: '../goods_detail/goods_detail?goods_id='+id
        })
      },
      //点击楼层跳转
      goQuery(query) {
        console.log(query.slice(24));
        query = query.slice(24)
        uni.navigateTo({
          url: '../goods_list/goods_list?query='+query
        })
      }
    }
	}
</script>

<style>
	.content{
    width: 100%;
  }
  .tower-swiper .tower-item {
    transform: scale(calc(0.5 + var(--index) / 10));
    margin-left: calc(var(--left) * 100upx - 150upx);
    z-index: var(--index);
  }
  .index_cate{
    display: flex;
  }
  .index_cate navigator {
    flex: 1;
    padding: 20rpx;
  }
  .index_cate navigator image{
    width: 100%;
  }

/*  楼层*/
  .floor_title{
    padding: 10rpx 0;
  }
  .floor_title image{
    width: 100%;
  }
  .floor_list{
    overflow: hidden;
  }
  .floor_list navigator{
    float: left;
    width: 33.33%;
  }
  .floor_list navigator:nth-last-child(-n+4) {
    /* 原图的宽高 232 *386 */
    height: 27.72711207vw;
    border-left: 10rpx solid #fff;
  }
  .floor_list navigator:nth-child(2),
  .floor_list navigator:nth-child(3) {
    border-bottom: 10rpx solid #fff;
  }
  .floor_list navigator image {
    width: 100%;
    height: 100%;
  }
</style>
