const app = getApp();
const buildJson = require('../../resources/qdc.js')

Page({
  data: {
    buildData: buildJson.map,
    windowWidth: "",
    isSelectorType: 0,
    map: {
      longitude: 120.505359,
      latitude: 36.306415
    },
    curCountName:"",
    curCount:""

  },
  onLoad: function (options) {

 
    // 获取到系统信息
    tt.getSystemInfo({
      success: (res) => {
        if (res.brand === "devtool") {
          
          this.setData({
            longitude: 120.511717,
            latitude: 36.312636
          })
        }
      }
    });
  },
  
  changePage: function (e) {

    this.setData({
      isSelectorType: e.target.id
      })
  },
  // 获取标记点地图的下标
  markertap:function(e){
    console.log(e)
  },

  // 设置返回是去的同样的路径


})
