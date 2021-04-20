<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
  @import "./colorui/icon.css";
  @import "./colorui/main.css";
  @import "./colorui/animation.css";
	page{
		font-size: 28rpx;
    background: #fff;
	}
  image{
    width: 100%;
  }
</style>
