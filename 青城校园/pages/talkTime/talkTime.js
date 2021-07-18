
Page({
  data: {
    show:false,
    lunbo:{
      indicatorDots: true,
      autoplay: true,
      interval: 6000,
      url:[
        "/images/img/indexImg/01.jpg",
        "/images/img/indexImg/02.jpg"
      ]
    }
  },
  onLoad: function (options) {

  },
  onReady:function(){
    let that = this;
    const query = tt.createSelectorQuery();
    query.select("#curr").boundingClientRect(function(res){
      console.log(res)
    })
    query.exec();
  },
  click:function(){
    let show = this.data.show
    this.setData({
      show:true
    })
  },

  bac:function(){
    console.log("success")
    let show = this.data.show
    this.setData({
      show:false
    })
  },

  onPageScroll(e){
    // console.log(e)
  }
})