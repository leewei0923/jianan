const app = getApp()

const dongRequest = app.globalData.getInfo.request //网络请求
const dongGetstroge = app.globalData.getInfo.getStorage

Page({
  data: {
    isShow: false,
    info: '',
    curIndex: ''

  },
  onLoad: function (options) {
    let _that = this
    dongGetstroge('userInfo').then(res => {
      console.log(res.data.userInfo[0].openid)

      dongRequest('https://qc5i9s.fn.thelarkcloud.com/personArticle', {
        openid: res.data.userInfo[0].openid
      }).then(res => {

        tt.stopPullDownRefresh(); //停止刷新

        _that.setData({
          info: res.data.info
        })
      }, err => {
        return false
      })
    }, err => {
      return false
    })


  },

  // 点击菜单

  clickMenu: function (e) {
    console.log(e)
    this.setData({
      isShow: true,
      curIndex: e.currentTarget.dataset.id
    })
  },

  // 编辑
  edit: function () {
    tt.showModal({
      title: '提示',
      content: '此功能正在升级中,敬请期待',
      success: (res) => {
        if (res.confirm === true) {
          tt.showToast({ title: '祝开开心心的', duration: 2000 });
        }
      }
    });
  },
  // 删除

  delete: function () {
    let _that = this
    tt.showModal({
      title: '确定要删除',
      content: '删除后不能恢复',
      success: (res) => {
        if (res.confirm === true) {
          dongRequest('https://qc5i9s.fn.thelarkcloud.com/personArticle', {
            option: 'del',
            article_id: _that.data.info[_that.data.curIndex].article_id
          }).then(res => {
            tt.startPullDownRefresh({
              success: res => {
                console.log(res)
              },
              fail: err => {
                console.log(err)
              }
            })
            tt.showToast({ title: '删除成功!' });
          }, err => {
            return false
          })

        }
      }
    });
  },
  // 分享
  share: function () {

  },

  // 取消

  cancel: function () {
    this.setData({
      isShow: false
    })
  },
  // 刷新
  onPullDownRefresh() {
    let _that = this
    dongGetstroge('userInfo').then(res => {
      console.log(res.data.userInfo[0].openid)

      dongRequest('https://qc5i9s.fn.thelarkcloud.com/personArticle', {
        openid: res.data.userInfo[0].openid
      }).then(res => {

        tt.stopPullDownRefresh(); //停止刷新

        _that.setData({
          info: res.data.info
        })
      }, err => {
        return false
      })
    }, err => {
      return false
    })
  },

})