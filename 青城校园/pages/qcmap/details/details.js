
const mapJson = require("../../../resources/qdc.js")
Page({
  data: {
    buildData:mapJson.map,
    img:{
      indicatorDots:true,
      autoplay:true,
      interval:5000,
      path:mapJson.map
    }
  },
  onLoad: function (options) {
    
    let that = this   
    this.setData({
      Dpid:options.pid,
      Dcid:options.cid
    })

    tt.hideHomeButton();
    
    tt.setNavigationBarTitle({
      title: that.data.buildData[options.pid].data[options.cid].name // 导航栏标题
    });
  },

  backHome:function(){
    tt.switchTab({
      url: '/pages/qcmap/qcmap' // 指定页面的url
    });
  }
})