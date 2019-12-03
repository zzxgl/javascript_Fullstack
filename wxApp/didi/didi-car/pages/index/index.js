Page({
  data: {
    navData: [],
    currentTab:0,
    navScrollLeft:500,
    address:'范家新村',
    destination:'万达',
    isLoading: true
  },
  onLoad () {
    // 同步阻塞执行
    var w = wx.getSystemInfoSync().windowWidth
    this.setData({
      windowWidth: w
    })
    this.requestCart()

  },
  // 代码的封装性 一个请求 一个函数
  requestCart() {
    wx.request({
      url: 'http://localhost:3000/indexPage',
      success: (res) => {
        // console.log(this)
        // console.log(res.data)
        // console.log(res);
        const navData = res.data.navData;
        const imgUrls = res.data.imgUrls;
        // const cost = res.data.data.cost
        // console.log(navData)
        this.setData({
          navData,
          imgUrls,
          // cost
        })
      }
    })
  },
  switchNav (event) {
    console.log(event)
    // event.currentTarget.dataset.name
    const cur = event.currentTarget.dataset.current
    let text = this.data.navData
    var singleNavWidth = this.data.windowWidth/6
    this.setData({
      // cart,
      currentTab: cur,
      navScrollLeft: (cur-1)*singleNavWidth
    })
  }
})
