// e:\byteProgram\qingCity\qingcity\青城校园\pages\talkTime\biaoBai\biaoBai
Page({
  data: {
    currentIdx:0
  },
  onLoad: function (options) {

  },
  onReady:function(){
    // 隐藏返回主页面控件
    
  },

  changeBar:function(e){

    console.log(e.currentTarget.dataset.idx)
    this.setData({
      currentIdx: e.currentTarget.dataset.idx
    })
  },

  // 写文章按钮

  add:function(){
    tt.navigateTo({
      url: '/pages/add/add?signIndex=0' 
    });
  }
})