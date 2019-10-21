Page({
  data:{
    markers:[],
    latitude: 39.989377, //经度
    longitude: 116.323711, //纬度
    scale: 18
  },
  onLoad(){
    wx.showLoading({
      title: '获取坐标中',
    });
    // 获得手机的GPS 
    wx.getLocation({
        type: 'gcj02',
        success: (res) =>{
          // console.log(res)
          let { longitude, latitude } = res;
          this.tocreateMarkers(longitude, latitude)
          // console.log(longitude, latitude);
          this.setData({
            longitude,
            latitude
          }, ()=>{
            wx.hideLoading()
          })
        }
    })
  },
  onReady(){
    // 地图上下文环境对象
    this.mapCtx = wx.createMapContext('myMap');
  },
  toScan(){
    return wx.scanCode({
      success: (res)=>{
        // console.log(res)
        wx.showModal({
          title: 'scan',
          content: JSON.stringify(res),
        })
      }
    })
  },
  toVisit(e){
    console.log(e)
  },
  toUser(){},
  toMsg(){},
  toReset(){
    // 当你使用地图来来去去的时候，再回到当初起点
    this.mapCtx.moveToLocation();
    this.setData({
      scale:18
    })
  },
  tocreateMarkers(longitude, latitude){
    let markers =[
      {
        "id":1,
        "iconPath":"/images/map-bicycle.png",
        "latitude":latitude,
        "longitude": longitude,
        "width":52.5,
        "height":30,
        "callout":{}
      }
    ]
    this.setData({
      markers
    })
  }
})