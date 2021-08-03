const api = require("./config/api.js")
const getInfo = require("./config/getInfo.js")
const InspireCloud = require("./libs/inspirecloud-mp.min.js")

App({
  onLaunch: function () {

  },
  globalData:{
    api:api, //提交/接收数据的接口
    getInfo:getInfo, //封装的函数
    InspireCloud:InspireCloud //上传的sdk
  }
})
