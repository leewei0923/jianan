const app = getApp()
const getInfoRequest = app.globalData.getInfo.request
const getStorage = app.globalData.getInfo.getStorage
Page({
  data: {
    // 设置
    mine_setting: [
      {
        id: 0,
        url: '/pages/talkTime/mine/dongtai/dongtai',
        img: '/images/talkTime/icon/mine_dongtai.png',
        name: '我的动态',
      },
      {
        id: 1,
        url: '/pages/talkTime/mine/setting/setting',
        img: '/images/talkTime/icon/mine_setting.png',
        name: '个人设置',
      },
      {
        id: 2,
        url: '/pages/talkTime/mine/about/about',
        img: '/images/talkTime/icon/mine_about.png',
        name: '关于我们',
      },
      {
        id: 3,
        url: '/pages/talkTime/mine/callback/callback',
        img: '/images/talkTime/icon/mine_callback.png',
        name: '意见反馈',
      }
    ],
    isGet: false,
    avatorUrl: '',
    nickName: '',
  },
  onLoad: function (options) {
    let _that = this
    // 先从服务器加载
    // 先进行比对
    // 获取封装的获取本地数据的接口
    getStorage('userInfo').then(res => {
      console.dir(res) //测试1
      if (res.errMsg == "getStorage:ok") {
        // 从服务器加载数据

        getInfoRequest('https://qc5i9s.fn.thelarkcloud.com/personInfo', {
          openid:res.data.userInfo[0].openid,
          unionid:res.data.userInfo[0].unionid
        }).then(res => {
          console.log(res)
          tt.setStorage({
            key: 'userInfo', // 缓存数据的key
            data: res.data, // 要缓存的数据
            success: (res) => {
              console.log("成功")
            }
          });
        })

      }
    },err => {
      return err
    })

  },

  onReady: function () {
    var _that = this

    // 获取封装的获取本地数据的接口
    getStorage('userInfo').then(res => {
      console.log('ready',res) //测试1
      if (res.data.sign) {
        _that.setData({
          avatorUrl: res.data.userInfo[0].avatorUrl,
          nickName: res.data.userInfo[0].nickname,
          gender: res.data.userInfo[0].gender,
          motto: res.data.userInfo[0].motto,
          isGet: true
        },err=>{
          return err
        })
      }
    })


  },

  loginBtn: function () { //点击登录按钮
    let _that = this
    // 进行登录
    tt.login({
      success: (res) => {
        console.log("登录", res)
        const lres = res  //将login里面的数据保存起来,放进getuserInfo中
        tt.getUserInfo({
          success(res) {
            console.log("获取信息", res);
            // 请求数据，存储数据
            let session = getInfoRequest('https://qc5i9s.fn.thelarkcloud.com/login', {
              sign: 'wei',
              code: lres.code,
              anonymousCode: lres.anonymousCode,
              avatorurl: res.userInfo.avatarUrl, //头像
              nickname: res.userInfo.nickName, //昵称
              gender: res.userInfo.gender, // 性别
              motto: res.userInfo.motto, //个性签名
              birday: res.userInfo.birday //生日
            })
              .then(data => {
                console.log(data)
                tt.setStorage({
                  key: 'userInfo', // 缓存数据的key
                  data: data.data, // 要缓存的数据
                  success: (res) => {
                    console.log("%c成功", "color:red;font-size:30px;")
                  }
                });
              })
            // 传递数据
            _that.setData({
              avatorUrl: res.userInfo.avatarUrl,
              nickName: res.userInfo.nickName,
              gender: res.userInfo.gender,
              isGet: true
            })
          },
          fail(res) {
            console.log(`getUserInfo 调用失败`);
          },
        });
      },
      fail: (err) => {
        console.log("失败", err)
      }
    });


  }
})