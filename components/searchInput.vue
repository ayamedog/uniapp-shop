<template>
  <view class="cu-bar search bg-white">
    <navigator url="../../pages/search/search">
      <view class="search-form round">
        <text class="cuIcon-search"></text>
        <input :adjust-position="false" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
      </view>
    </navigator>
  </view>
</template>

<script>
	export default {
		name:"searchInput",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  .bg-white{
    background: $theme-color;
  }
  navigator{
    width: 100%;
  }
</style>
