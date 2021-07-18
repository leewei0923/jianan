// pages/zuzhi/zuzhi.js
//引入本地的json数据
var jsonData = require("../../../../resources/qdc_zhao.js")
let app = getApp();

Page({
    data: {
      curIndex: 0,
      toView: '',
      showContent:'', //控制所有content是否启用
      currentClassId:'' //判断是哪一个批次

    },
    onLoad(options){
      console.log(options)
      // 设置当前导航栏传值获取到的值
      tt.setNavigationBarTitle({
        title: options.name // 导航栏标题
      });

      this.setData({
        //jsonData.dataList获取data文件中categoryData.js中定义的Json数据，并赋值给category
        category: jsonData.dataList,
        currentClassId: options.classification
      })
    },
    switchTab(e){
      console.log(e.target.dataset.id+","+e.target.dataset.index)
      //将获取到的item的id和数组的下表值设为当前的id和下标
      this.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    },
    showBtn:function(e){
      console.log(e)
      this.setData({
        showContent: !this.data.showContent
      })
    }  
})