// e:\byteProgram\qingCity\qingcity\青城校园\pages\talkTime\anLi\Anli
Page({
  data: {
    currentIdx:''
  },
  onLoad: function (options) {

  },
  // 获取当前点击的id
  changeBtn:function(e){
    // console.log(e.currentTarget.dataset.idx)
    this.setData({
      currentIdx:e.currentTarget.dataset.idx
    })
  },

  // 进入具体搜索细节
  getMore:function(e){
    console.log(e.detail.value)
    let searData = e.detail.value
    tt.navigateTo({
      url: '/pages/talkTime/anLi/search/search?'+'search='+searData // 指定页面的url
    });
  },
   // 写文章按钮

   add:function(){
    tt.navigateTo({
      url: '/pages/add/add?signIndex=1' 
    });
  }
})