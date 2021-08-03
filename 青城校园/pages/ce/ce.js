// e:\byteProgram\qingCity\qingcity\青城校园\pages\ce\ce
Page({
  data: {
    boolBounce:1
  },
  onLoad: function (options) {

  },
  inputBind:function(e){
    console.log(e)
    console.log("键盘弹起高度",e.detail.height)
    
    this.setData({
      boolBounce:0
    })

    console.log(this.data)
  },
  // 失去焦点

  outBind:function(){
    this.setData({
      boolBounce:1
    })
  }
  
})
