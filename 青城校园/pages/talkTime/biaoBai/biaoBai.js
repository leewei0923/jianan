const app = getApp()

const biaoRequest = app.globalData.getInfo.request //网络请求

Page({
  data: {
    currentIdx:0,
    info:''
  },
  onLoad: function (options) {
    let _that = this
    biaoRequest('https://qc5i9s.fn.thelarkcloud.com/articlesShow',{
      tags: '0'+ _that.data.currentIdx
    }).then(res =>{
      _that.setData({
        info:res.data.info  
      })
    })
  },
  onReady:function(){
    // 隐藏返回主页面控件
    
  },

  changeBar:function(e){

    // 显示当前页面
    this.setData({
      currentIdx: e.currentTarget.dataset.idx
    })

    // 网络请求数据
    let _that = this
    biaoRequest('https://qc5i9s.fn.thelarkcloud.com/articlesShow',{
      tags: '0'+ _that.data.currentIdx
    }).then(res =>{
    
      _that.setData({
        info:res.data.info  
      })
    })
  },

  // 写文章按钮

  add:function(){
    tt.navigateTo({
      url: '/pages/add/add?signIndex=0' 
    });
  },

  // 点击进入细节

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
  
})