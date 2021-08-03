
const mapJson = require("../../../resources/qdc.js")
// const testJson = require("../../../resources/testData.js")
// const api = require("../../../config/api.js")
const getInfo = require("../../../config/getInfo")

Page({
  data: {
    buildData: mapJson.map,//获取qdc中map数据
    img: {                 //对轮播图定义
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      path: mapJson.map
    },
    messageData: '', //testJson.message,
    boolIdx: ''// 判断有无数据时候的显示
  },
  onLoad: function (options) {

    let that = this
    // 用户登录
    // const date = new Date()
    let subTime = getInfo.formatDate()

    this.setData({
      Dpid: options.pid,
      Dcid: options.cid,
      messageSign: options.pid + options.cid,
      subTime: subTime
    })



    tt.setNavigationBarTitle({
      title: that.data.buildData[options.pid].data[options.cid].name // 导航栏标题
    });



  },

  onReady: function () {

    var that = this

    // 加载数据
    tt.request({
      url: "https://qc5i9s.fn.thelarkcloud.com/liuyanshow",
      data: {
        mod_id: this.data.Dpid,
        c_id: this.data.Dcid,
      },
      header: {
        "content-type": "application/json",
      },
      method: "POST",
      responseType: "text",
      success(res) {
        console.log(res.data.result);

        that.setData({
          messageData: res.data.result
        })

        console.log(that.data.messageData)
      },
      fail(res) {
        console.log("调用失败", res.errMsg);
      },
    });


    

  },
  formSubmit: function (e) {

    tt.showModal({
      title: "提交留言吗?",
      content: "提交留言后，会进行审核,审核完成后，会在该页面展示出来，欢迎留言！",
      success: (res) => {
        if (res.confirm) {
          console.log(e.detail.value.liuyan)
          let liu = e.detail.value.liuyan
          tt.request({
            url: 'https://qc5i9s.fn.thelarkcloud.com/liuyan', // 目标服务器url
            data: {
              mod_id: this.data.Dpid,
              c_id: this.data.Dcid,
              content: liu,
              id: this.data.c_idIndex,
              time: this.data.subTime,
              name: '会飞的鱼',
              avator: 'https://pic.baike.soso.com/ugc/baikepic2/4103/cut-20210512112209-986303945_jpg_960_1200_128421.jpg/0'

            },
            header: {
              "content-type": "application/json",
            },
            method: "POST",
            success: (res) => {
              console.log(res)
            },
            fail: (res) => {
              console.log("失败" + res)
            }
          });
        } else if (res.cancel) {
          console.log("取消")
        }
      },
      fail: (res) => {
        console.log(res)
      }
    });
  },
  // 当输入框失去焦点后输出值
  inputVal: function (e) {
    console.log(e)
  },
 

})

