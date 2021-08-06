Component({
  properties: {
    avator: {
      type: String,
      value: '头像'
    },
    username: {
      type: String,
      value: '昵称'
    },
    usermotto: {
      type: String,
      value: '个性签名'
    },
    usertime: {
      type: String,
      value: '时间'
    },
    usercontent: {
      type: String,
      value: '内容'
    },
    userimage: {
      type: Array,
      value: ''
    },
    tag: {
      type: String,
      value: ''
    },
    dianzanImg: {
      type: String,
      value: '/images/icons/article_dianzan1.png'
    }
  },
  data: {
    curCountn: 0
  },
  ready: function () {
    let tagRange = [["表白", "提问", "求助"], ["安利"], ["图图"]]

    let tagIndex = this.data.tag.split('')[0]
    let signIndex = this.data.tag.split('')[1]
    this.setData({
      tag: tagRange[tagIndex][signIndex]
    })
  },
  methods: {
    onTap: function (e) {
      this.triggerEvent('click', { e })
    },
    prePhoto: function (e) {
      this.triggerEvent('pre', { e })
    },
    // 点赞
    dianzan: function (e) {
      this.triggerEvent('dian', { e })
      let count = this.data.curCountn
      count++

      if (count % 2 === 0) {
        this.setData({
          dianzanImg: '/images/icons/article_dianzan2.png',
          curCountn: count
        })
      }else{
        this.setData({
          dianzanImg: '/images/icons/article_dianzan1.png',
          curCountn: count
        })
      }

    }
  },
});