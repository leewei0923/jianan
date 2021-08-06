const api = require("./config/api.js")
const getInfo = require("./config/getInfo.js")
const InspireCloud = require("./libs/inspirecloud-mp.min.js")
const qdc = require("./resources/qdc.js")

App({
  onLaunch: function () {
    tt.getNetworkType({
      success: (res) => {
        if(res.networkType !== 'wifi'){
          tt.showToast({
            title: '注意你的流量哦', // 内容
            duration:2000
          });
        }
      }
    });
  },
  globalData:{
    api:api, //提交/接收数据的接口
    getInfo:getInfo, //封装的函数
    InspireCloud:InspireCloud, //上传的sdk
    qdc:qdc       //本地存储的数据
  }
})
