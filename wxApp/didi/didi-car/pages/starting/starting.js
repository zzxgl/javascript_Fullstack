var QQMapWX = require('../../libs/qqmap/wx-jssdk.js')
var qqmapsdk = new QQMapWX({
  key: 'DHNBZ-2ZLKK-T7IJJ-AXSQW-WX5L6-A6FJZ'
})
Page({
  data: {
    bluraddress: 116.403119,
    longitude: 39.908847,
    scale: 16,
    address: '',
    bluraddress: ''
  },
  onLoad: function(options) {
    wx.getLocation({
      type: "gcj02",
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
        // https://lbs.qq.com/qqmap_wx_jssdk/?client=tim&ADUIN=291701005&ADSESSION=1575090306&ADTAG=CLIENT.QQ.5603_.0&ADPUBNO=26933
        // 
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
          },
          success: (res) => {
            console.log(res);
            // app.globalData.location = location
            this.setData({
              address: res.result.address,
              bluraddress: res.result.formatted_addresses.recommend
            });
          }
        })
      }
    })
  },
  bindregionchange (e) {
    console.log(e)
    // 经纬度换了 lat lng 
    //下面的address 改为换后的
    // 得到新的地址？ mapCtx 
    var that = this
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.latitude, res.longitude)
        qqmapsdk.reverseGeocoder({
          location: {
            latitude:res.latitude,
            longitude:res.longitude
          },
          success: function(res) {
            that.setData({
              address:res.result.address,
              bluraddress: res.result.formatted_addresses.recommend
            })
          }
        })
      }
    })
  },
  onReady: function() {
    this.mapCtx = wx.createMapContext('didMap')
    this.movetoPosition()
  },
  movetoPosition: function(){
    this.mapCtx.moveToLocation()
  }
})