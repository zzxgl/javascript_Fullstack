//index.js
//获取应用实例
const app = getApp()
const articleList = require('./articleList.js')
Page({
  data: {
    articleList: articleList.data
    },
    gotoDetail: function(){
      wx.navigateTo({
        url: '../detail/index',
      })
    },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // requestArticle() {
  //   wx.request({
  //     url: 'http://static.zhaoboy.com/ikcamp-mock/list.json',
  //     success: (res) => {
  //       console.log(res.data)
  //   }
  //   })
  // },
  onLoad: function() {
    // this.requestArticle()
  }
})