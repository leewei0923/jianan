const app = getApp()

const talkGetStorage = app.globalData.getInfo.getStorage //加载本地数据
const talkRequest = app.globalData.getInfo.request //从网络请求数据
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
      ],
      info: '',
      tagIndex: 0,
      tagRange: [["表白", "提问", "求助"], ["安利"], ["图图"]],
      signIndex: '',
      dianzanImg2: '/images/icons/article_dianzan1.png'//点击点赞按钮后的样子

    },
    // 悬浮菜单


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

    let _that = this
    // 请求加载文章
    tt.showLoading({title: '加载中...',});
    talkRequest('https://qc5i9s.fn.thelarkcloud.com/articlesSho w').then(res => {
      console.log(res.data.info)
      tt.hideLoading();
      _that.setData({
        info: res.data.info
      })
    }, err => {
      console.log(err)
    })
  },
  click: function () {
    let show = this.data.show
    this.setData({
      show: true
    })
  },
  slide: function (e) {
    console.log(e)
    // let le = e.detail.scrollLeft 
    if (e.detail.scrollLeft > 375) {
      this.setData({
        isRight: true,
        toView: 'mine'
      })
    }
  },
  toRight: function (e) {
    tt.navigateTo({
      url: '/pages/talkTime/mine/personInfo/personInfo'
    });
  },
  toDetail: function (e) {
    // index 
    let curIndex = e.currentTarget.dataset.id
    console.log(curIndex)
    let avator = this.data.info.user[curIndex].avatorUrl //头像
    let nickname = this.data.info.user[curIndex].nickname //昵称
    let motto = this.data.info.user[curIndex].motto //个性签名
    let str = '2020.08.21 12:20'
    let usertime = str.split(' ')[1]  //时间
    let userimage = this.data.info.articleDeatil[curIndex].imgurl  //图片
    let usercontent = this.data.info.articleDeatil[curIndex].content  //内容
    let tag = this.data.info.articleDeatil[curIndex].tags  //标签


    tt.navigateTo({
      url: '/pages/add/detail/detail?' + 'avator=' + encodeURIComponent(avator) + '&nickname=' + nickname + '&motto=' + motto + '&usertime=' + usertime + '&userimage=' + userimage + '&usercontent=' + usercontent + '&tag=' + tag // 指定页面的url
    });
  },
  // 预览图片
  preView: function (e) {
    let curimgIndex = e.currentTarget.dataset.id //获取当前图片的标识
    console.log(e.currentTarget.dataset.id)

    let curInglist = this.data.info.articleDeatil[curimgIndex].imgurl

    tt.previewImage({
      urls: curInglist, // 图片地址列表
      success: (res) => {
        console.log("成功预览");
      },
      fail: (err) => {
        console.log("错误原因", err)
      }
    });
  },

  // 点赞按钮

  dianzan: function () {
    
  },
  // 下拉刷新
  onPullDownRefresh(options) {
    let _that = this
    talkRequest('https://qc5i9s.fn.thelarkcloud.com/articlesShow').then(res => {
      console.log(res.data.info)
      // tt.hideLoading(); //隐藏加载
      tt.stopPullDownRefresh(); //停止刷新
      _that.setData({ 
        info: res.data.info
      })
    }, err => {
      console.log(err)
    })
    
  },

})