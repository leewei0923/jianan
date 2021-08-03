// e:\byteProgram\qingCity\qingcity\青城校园\pages\talkTime\anLi\search\search
Page({
  data: {
    serValue:''
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      serValue:options.search
    })
  },
  cancel:function(){
    tt.navigateBack();
  }
})