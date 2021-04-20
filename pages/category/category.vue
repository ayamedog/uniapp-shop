<template>
	<view class="cates">
		<search-input></search-input>
    <view class="cates_container">
      <!--左侧菜单-->
      <scroll-view class="left_menu" scroll-y>
        <view class="menu_item" :class="curIndex===index?'active':''" v-for="(item,index) in leftMenuList" @click="handleItemTap(index)">
           {{item}}
        </view>
      </scroll-view>
      <!--右侧商品内容-->
      <scroll-view class="right_content" scroll-y :scroll-top="scrollTop" @scroll="scroll">
        <view class="goods_group" v-for="(item1,index1) in rightContent" :key="index1">
          <view class="goods_title">{{item1.cat_name}}</view>
          <view class="goods_list">
            <navigator v-for="(item2,index2) in item1.children" :key="item2.cat_id" :url="'/pages/goods_list/goods_list?cid='+item2.cat_id">
              <image :src="item2.cat_icon" mode="widthFix"></image>
              <view class="goods_name">{{item2.cat_name}}</view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
	</view>
</template>

<script>
	import SearchInput from "../../components/searchInput";
  export default {
    components: {SearchInput},
    data() {
			return {
			  //全部数据
        cates: [],
				//左侧菜单数据
        leftMenuList: [],
        //当前点击菜单的索引
        curIndex: 0,
        //右侧商品数据
        rightContent: [],
        scrollTop: -1,
        old: {
          scrollTop: 0
        }
			}
		},
		methods: {
			//获取分类数据
      /*async getCategory() {
        const res = await this.$request({url: '/categories'})
        console.log(res);
      }*/
      getCategory() {
        this.$request({url: '/categories'})
        .then(res => {
          this.cates = res.data.message
          //把接口数据存入到本地存储中
          uni.setStorageSync("cates",{time:Date.now(),data:this.cates})

          //左侧菜单数据
          let left = this.cates.map(v=>(v.cat_name))
          this.leftMenuList = left
          //右侧商品数据
          let right = this.cates[0].children
          this.rightContent = right
        })
      },
      handleItemTap(index) {
        this.curIndex = index
        //右侧商品数据
        let right = this.cates[index].children
        this.rightContent = right
        this.scrollTop = this.old.scrollTop
        this.$nextTick(function() {
          this.scrollTop = 0
        });
      },
      //滚动回顶部
      scroll: function(e) {
        this.old.scrollTop = e.detail.scrollTop
      }
		},
    onLoad() {
      /*
        1.先判断本地存储中有没有旧的数据
        2 没有旧数据 直接发送心情求
        3 有旧数据 同时 旧数据也没有过期 就使用本地存储的数据
      */

      //1 获取本地存储中的数据
      const Cates = uni.getStorageSync("cates");
      //2 判断
      //不存在 发送请求获取数据

      if (!Cates) {
        this.getCategory()
      }else {
        //有旧的数据 定义过期时间 5m
        if(Date.now()-Cates.time>1000*60*5){
          //重新发送请求
          console.log('重新发送');
          this.getCategory()
        }else {
          // 可以使用旧数据
          console.log('旧数据');
          this.cates=Cates.data
          //左侧菜单数据
          let left = this.cates.map(v=>(v.cat_name))
          this.leftMenuList = left
          //右侧商品数据
          let right = this.cates[0].children
          this.rightContent = right
        }
      }
    }
	}
</script>

<style lang="scss">
  page{
    height: 100%;
    background: #fff;
  }
  .cates{
    height: 100%;
    .cates_container{
      height: calc(100vh - 90rpx);
      display: flex;
      .left_menu{
        flex: 2;
        .menu_item{
          height: 80rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30rpx;
          box-sizing: border-box;
        }
        .active{
          color: $theme-color;
          border-left: 10rpx solid $theme-color;
        }
      }
      .right_content{
        flex: 5;
        .goods_group{
          .goods_title{
            height: 80rpx;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .goods_list{
            display: flex;
            flex-wrap: wrap;
            navigator{
              margin-bottom: 30rpx;
              width: 33.33%;
              text-align: center;
              image{
                width: 50%;
              }
              .goods_name{}
            }
          }
        }

      }
    }
  }
</style>
