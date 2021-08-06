const app = getApp()

const tuRequest = app.globalData.getInfo.request
Page({
  data: {
    info:''
  },
  onLoad: function (options) {

    // 网络请求数据
    let _that = this
    tuRequest('https://qc5i9s.fn.thelarkcloud.com/articlesShow',{
      tags: '20'
    }).then(res =>{
      console.log(res.data)
      _that.setData({
        info:res.data.info
      })
    })
  },

   // 写文章按钮

   add:function(){
    tt.navigateTo({
      url: '/pages/add/add?signIndex=2' 
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

})