const app = getApp()
const InspireCloud = app.globalData.InspireCloud //引用定义在全局的函数
const getStorage = app.globalData.getInfo.getStorage  //引用获取本地存储
const formatDate = app.globalData.getInfo.formatDate  //格式化时间
const getRequest = app.globalData.getInfo.request //网络请求

Page({
  data: {
    currentImg: '',
    gender: ['无','男', '女'],
    genderIdx: 0,
    myQian: '',
    myName: ''
  },
  onLoad: function (options) {
   
  },

  onReady:function(){
    const _that = this
    // 从本地获取头像文件
    getStorage('userInfo').then(res => {
      if (res.data.sign) {
        _that.setData({
          currentImg: res.data.userInfo[0].avatorUrl,
          myName:res.data.userInfo[0].nickname,
          myQian:res.data.userInfo[0].motto,
          genderIdx:res.data.userInfo[0].gender,
          birDate:res.data.userInfo[0].birday,
          openid:res.data.userInfo[0].openid,
          unionid:res.data.userInfo[0].unionid
        })
      }
    }, err => {
      return err
    })

    // 生日
    const NewDate = formatDate().split(" ")[0]

    this.setData({
      NewDate: NewDate
    });
  },

  // 从相册获取头像

  getImg: function () {

    const serviceId = 'qc5i9s'; // serviceId
    const inspirecloud = new InspireCloud({ serviceId });
    const fileUploadToken = '48bbb4c7-9a40-472e-b3a1-069aaf25187e'; // 客户端上传 token，

    // 调用小程序上传api

    const update = new Date();
    const curTime = update.getTime(); //获取当前时间戳
    const imgName = curTime + '.jpg'

    const _that = this
    tt.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res)

        const uploadFilePath = {
          path: res.tempFilePaths[0] //文件路径
        }

        inspirecloud.file.upload(imgName, uploadFilePath, { token: fileUploadToken })
          .then((data) => {
            // 上传成功
            console.log(data.url);
            _that.setData({
              currentImg: data.url
            })
          })
          .catch((error) => {
            // 调用失败，进行错误处理
            console.log(error)
          });
      },
      fail: (err) => {
        tt.showToast({ title: '你已经取消了', });
      }
    });
  },
  // 生日选择

  dateChange: function (e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    const NewDate = formatDate().split(" ")[0]

    this.setData({
      birDate: e.detail.value,
      NewDate: NewDate
    });
  },

  // 性别选择
  genderChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      genderIdx: e.detail.value
    })
  },

  // 保存按钮

  save: function (e) {
    console.log(this)
    let _that = this
    // 获取个人信息
    getRequest('https://qc5i9s.fn.thelarkcloud.com/infoEdit',{
      openid:_that.data.oenid,
      unionid:_that.data.unionid,
      avatorUrl:_that.data.currentImg,
      gender:_that.data.genderIdx,
      nickname:_that.data.myName,
      motto:_that.data.myQian,
      birday:_that.data.birDate
    }).then(res =>{
      console.log(res)
    })


  },
  // 签名和昵称

  getName: function (e) {

    this.setData({
      myName: e.detail.value
    })
  },
  // 当昵称失去焦点

  blurName: function (e) {
    this.setData({
      myName: e.detail.value
    })
  },
  // 当签名失去焦点的时候

  blurName: function (e) {
    this.setData({
      myName: e.detail.value
    })
  },
  getQian: function (e) {

    this.setData({
      myQian: e.detail.value
    })

  }
})