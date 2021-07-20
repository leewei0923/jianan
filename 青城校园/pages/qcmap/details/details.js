
const mapJson = require("../../../resources/qdc.js")
const testJson = require("../../../resources/testData.js")

Page({
  data: {
    buildData: mapJson.map,//获取qdc中map数据
    img: {                 //对轮播图定义
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      path: mapJson.map
    },
    messageData: testJson.message,
    messageSign: '',
    c_idIndex: ''
  },
  onLoad: function (options) {

    let that = this
    this.setData({
      Dpid: options.pid,
      Dcid: options.cid,
      messageSign: options.pid + options.cid
    })

    tt.hideHomeButton(); //隐藏标题栏的返回主页面的按键

    tt.setNavigationBarTitle({
      title: that.data.buildData[options.pid].data[options.cid].name // 导航栏标题
    });
  },

  onReady: function () {
    // 新创建一个索引,不用完全按照原来的格式输出数据,只要testData数据中包含当前索引的值就行
    let deCid = 0;
    if (testJson.message[this.data.Dpid].mod_data) {
      for (let i = 0; i < testJson.message[this.data.Dpid].mod_data.length; i++) {

        if (testJson.message[this.data.Dpid].mod_data[i].c_id == this.data.messageSign) {
          deCid = i
        }

      }
    } else {
      deCid = this.data.Dcid

    }
    this.setData({
      c_idIndex: deCid
    })
  },
  backHome: function () {
    tt.switchTab({
      url: '/pages/qcmap/qcmap' // 指定页面的url
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
            url: 'https://qcvjrw.fn.thelarkcloud.com/hello', // 目标服务器url
            data:{
              liuyan:liu
            },
            header:{
              "content-type": "application/json",
            },
            method: "POST",
            success: (res) => {
              console.log(res)
            },
            fail:(res) =>{
              console.log("失败"+res)
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
  inputVal:function(e){
    console.log(e)
  }
  
})

