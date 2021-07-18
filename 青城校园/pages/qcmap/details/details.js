
const mapJson = require("../../../resources/qdc.js")
const testJson = require("../../../resources/testData.js")

Page({
  data: {
    buildData:mapJson.map,//获取qdc中map数据
    img:{                 //对轮播图定义
      indicatorDots:true,
      autoplay:true,
      interval:5000,
      path:mapJson.map
    },
    messageData:testJson.message,
    messageSign:''
  },
  onLoad: function (options) {
    
    let that = this   
    this.setData({
      Dpid:options.pid,
      Dcid:options.cid,
      messageSign:options.pid+options.cid
    })

    tt.hideHomeButton();
    
    tt.setNavigationBarTitle({
      title: that.data.buildData[options.pid].data[options.cid].name // 导航栏标题
    });
  },
  
  onReady:function(){
    console.log(this.data.Dpid)
  },
  backHome:function(){
    tt.switchTab({
      url: '/pages/qcmap/qcmap' // 指定页面的url
    });
  }
})

