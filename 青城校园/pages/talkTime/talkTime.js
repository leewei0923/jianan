
Page({
  data: {
    show: false,
    lunbo: {
      indicatorDots: false,
      autoplay: true,
      interval: 6000,
      url: [
        "https://qi.7miaoyu.com/qicng.jpg",
        "https://qi.7miaoyu.com/qicng1.jpg"
      ]
    }
  },
  onLoad: function (options) {
    // 设置标题顶部颜色为黑色
    tt.setNavigationBarColor({
      frontColor: "#000000",
      backgroundColor: "#ff0000",
    })

    // 加载自定义字体
    

  },
  onReady: function () {

  },
  click: function () {
    let show = this.data.show
    this.setData({
      show: true
    })
  },

})