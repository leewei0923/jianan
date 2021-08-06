const app = getApp()

const news = app.globalData.qdc.news

Page({
  data: {
    currentIdx:'',
    newsCon:news.content,
    isArray:false //判断是否为array,另种形式
  },
  onLoad: function (options) {
    let {nid} = options  //传来的数据idx
    
    this.setData({
      currentIdx:nid
    })
  },
  onReady:function(){
    let _that = this

    let currentIdx = _that.data.currentIdx

    if(news[currentIdx].content instanceof Array){
      // _that.data.newsCon === news[currentIdx].content
      
      _that.setData({
        newsCon:news[currentIdx].content,
        isArray:true
      })
    }

    tt.setNavigationBarTitle({
      title: news[currentIdx].title // 导航栏标题
    });
  },
  // 打开pdf文件
  openPDF:function(){
    tt.downloadFile({
      // 仅为示例 url，并非真实地址
      url: "https://qi.7miaoyu.com/kaixue.pdf",
      success: function (res) {
        const filePath = res.tempFilePath;
        tt.openDocument({
          filePath: filePath,
          success: function (res) {
            // console.log("打开文档成功");
          },
          fail: err=>{
            return false
          }
        });
      },
    });
  },

  // 预览图片

  preview:function(){
    let strRep = /([\"|']?)([^\"'>]+.(jpg|JPG|jpeg|JPEG|gif|GIF|png|PNG))([\"|']?)/
    let urlList = []
    for(let x of this.data.newsCon){
       let imgurl
       if(strRep.test(x.html)){
        imgurl = x.html.match(strRep)[2]
        console.dir(x.html.match(strRep))
        urlList.push(imgurl)
       }

       console.log(urlList)
       
    }
    
    tt.previewImage({
      urls: urlList, // 图片地址列表
      fail:err =>{
        console.log(err)
      }
      });
  }
})