const app = getApp()

const anRequest = app.globalData.getInfo.request  //网络请求

Page({
  data: {
    currentIdx: 0,
    info: ''
  },
  onLoad: function (options) {
    // 网络请求数据
    let _that = this
    anRequest('https://qc5i9s.fn.thelarkcloud.com/articlesShow', {
      tags:'10',
      recommend:1
    }).then(res => {
      _that.setData({
        info: res.data.info
      })
    })
  },
  // 获取当前点击的id
  changeBtn: function (e) {

    console.log()
    // console.log(e.currentTarget.dataset.idx)
    this.setData({
      currentIdx: e.currentTarget.dataset.idx
    })

    // 网络请求数据
    let _that = this
    
    console.log("推荐标识",e.currentTarget.dataset.recommend)
    let reoData =Number(e.currentTarget.dataset.recommend) 

    // console.log("第二个",this.data.curReoData.reoData.recommend)
    anRequest('https://qc5i9s.fn.thelarkcloud.com/articlesShow', {
      tags:'10',
      recommend:reoData
    }).then(res => {
      console.log(res.data)
      _that.setData({
        info: res.data.info
      })
    })

  },

  // 进入具体搜索细节
  getMore: function (e) {
    console.log(e.detail.value)
    let searData = e.detail.value
    tt.navigateTo({
      url: '/pages/talkTime/anLi/search/search?' + 'search=' + searData // 指定页面的url
    });
  },
  // 写文章按钮

  add: function () {
    tt.navigateTo({
      url: '/pages/add/add?signIndex=1'
    });
  }

  // 点击进入细节


})