const app = getApp()

const addGetStorage = app.globalData.getInfo.getStorage //获取本地存储
const InspireCloud = app.globalData.InspireCloud //引用定义在全局图片上传的函数
const subRequest = app.globalData.getInfo.request  //提交文章
const formatDate = app.globalData.getInfo.formatDate //时间格式化
Page({
  data: {

    addImgList: [],
    tagIndex: 0,
    tagRange: [["表白", "提问", "求助"], ["安利"], ["图图"]],
    signIndex: '', //用来区别这是哪一个
    // 用户头像,用户名
    addAvator: '',
    addUsername: '',

    // 内容
    curContent: '', // 用户输入的内容,失去焦点获得的内容
    subImgList: '' //提交的图片列表
  },
  onLoad: function (options) {
    // console.log(options) //测试一
    let _that = this
    let addSignIndex = options.signIndex
    // 改变signIndex
    _that.setData({
      signIndex: addSignIndex
    })

    // 获取本地信息
    addGetStorage('userInfo').then(res => {
      _that.setData({
        openid: res.data.userInfo[0].openid,
        unionid: res.data.userInfo[0].unionid,
        addAvator: res.data.userInfo[0].avatorUrl,
        addUsername: res.data.userInfo[0].nickname
      })
    })

  },
  // 获取照片
  getImg: function () {
    let _that = this
    tt.chooseImage({
      success: (res) => {
        console.log("图片获取", res)
        let imgList = _that.data.addImgList //
        for (let i of res.tempFilePaths) {
          imgList.push(i)
        }
        if (imgList.length <= 9) {
          this.setData({
            addImgList: imgList
          })
        }else{
          tt.showModal({
            title:'只能选择九张图片O',
            content:"请精挑细选出你喜欢的图片",
            success: (res) => {
              
            }
          });
        }

      }
    });
  },

  // 增加标签

  tagChange: function (e) {
    // console.log(e)
    this.setData({
      tagIndex: e.detail.value
    })

  },
  // 删除当前的图片
  deleteCurImg: function (e) {
    let _that = this
    console.log(e.currentTarget.dataset.index)
    let curImgIndex = e.currentTarget.dataset.index
    const imgList = this.data.addImgList

    tt.showModal({
      title: "删除图片",
      content: "确定删除?",
      success: (res) => {
        if (res.confirm) {
          imgList.splice(curImgIndex, 1)
          _that.setData({
            addImgList: imgList
          })

        }
      }
    });



  },


  // 获取内容失去焦点

  subBlur: function (e) {
    this.setData({
      curContent: e.detail.value
    })
  },
  // 提交按钮

  addSubmit: function () {
    const _that = this
    let subImgList = [] //图片暂时储存地址   

    async function upload() {
      // 图片上传
      const serviceId = 'qc5i9s'; // serviceId
      const inspirecloud = new InspireCloud({ serviceId });
      const fileUploadToken = '48bbb4c7-9a40-472e-b3a1-069aaf25187e'; // 客户端上传 token，

      // 调用小程序上传api

      let update = new Date();
      let curTime = update.getTime(); //获取当前时间戳

      for (let x in _that.data.addImgList) {
        const imgName = _that.data.openid + curTime + _that.data.signIndex + x + '.jpg'
        let file = {
          path: _that.data.addImgList[x]
        }
        await inspirecloud.file.upload(imgName, file, { token: fileUploadToken })
          .then((data) => {
            // 上传成功
            console.log("图片提交成功");
            subImgList.push(data.url)
          })
          .catch((error) => {
            // 调用失败，进行错误处理
            console.log(error)
          });

      }
      await torequest()
    }

    upload()

    function torequest() {
      let update = new Date();
      let curTime = update.getTime(); //获取当前时间戳
      let curTag = _that.data.signIndex + _that.data.tagIndex
      let curArtcleId = _that.data.openid + curTime
      let sudate = formatDate()

      // 提交内容

      subRequest('https://qc5i9s.fn.thelarkcloud.com/addArticle', {
        openid: _that.data.openid, //标识
        unionid: _that.data.unionid, //唯一标识
        content: _that.data.curContent, //提交的内容
        imgurl: subImgList, //提交图片地址
        tags: curTag,  //表示当前的标签
        article_id: curArtcleId, //唯一文章id
        recommend: 1,  //推荐指数
        subdate: sudate //提交的时间
      }).then(res => {
        console.log(res.data)
      })
    }

  }
})