// export const request = (params) => {
//   return new Promise((resolve,reject) => {
//     uni.request({
//       ...params,
//       success:(result) => {
//         resolve(result)
//       },
//       fail:(err) => {
//         reject(err)
//       }
//     })
//   })
// }
const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1'
//发送请求的次数
let ajaxTimes = 0;
export const request = (options) => {
	ajaxTimes++
  //显示加载中的效果
	uni.showLoading({
		title:'加载中',
		mask:true,
		
	})
  return new Promise((resolve,reject) => {
    uni.request({
      url:BASE_URL+options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: (res)=> {
        resolve(res)
      },
      fail: (err) => {
        uni.showToast({
          title: '请求借口失败'
        })
        reject(err)
      },
			//不管失败还是成功都会执行complete
			complete() {
				ajaxTimes--
				if(ajaxTimes===0) {
					//关闭加载效果
					uni.hideLoading()
				}
			}
    })
  })
}