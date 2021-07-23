// e:\byteProgram\qingCity\qingcity\青城校园\pages\talkTime\biaoBai\biaoBai
Page({
  data: {
    currentIdx:0
  },
  onLoad: function (options) {

  },
  onReady:function(){
    // 隐藏返回主页面控件
    tt.hideHomeButton();
  },

  changeBar:function(e){

    console.log(e.currentTarget.dataset.idx)
    this.setData({
      currentIdx: e.currentTarget.dataset.idx
    })
  }

})