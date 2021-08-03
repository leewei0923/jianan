// e:\byteProgram\qingCity\qingcity\青城校园\pages\talkTime\tuTu\tuTu
Page({
  data: {

  },
  onLoad: function (options) {

    // 隐藏主界面按钮
    tt.hideHomeButton();
  },

   // 写文章按钮

   add:function(){
    tt.navigateTo({
      url: '/pages/add/add?signIndex=2' 
    });
  }
})