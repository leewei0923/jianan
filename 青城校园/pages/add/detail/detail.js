// e:\byteProgram\qingCity\qingcity\青城校园\pages\add\detail\detail
Page({
  data: {
    avator: '',
    motto: '',
    nickname: '',
    usertime: '',
    content: '',
    userimage: '',
    tag: ''
  },
  onLoad: function (options) {
    console.log(options)
    let tagRange = [["表白", "提问", "求助"], ["安利"], ["图图"]]
    let { avator, motto, nickname, usertime, usercontent, userimage, tag } = options
    console.log(tag)
    avator = decodeURIComponent(avator)
    let tagIndex = tag.split('')[0]
    let signIndex = tag.split('')[1]
console.log(typeof userimage)
    this.setData({
      avator: avator,
      motto: motto,
      nickname: nickname,
      usertime: usertime,
      usercontent: usercontent,
      userimage: userimage.split(','),
      tag: tagRange[tagIndex][signIndex]
    })
  },
  onReady: function () {
    let tagRange = [["表白", "提问", "求助"], ["安利"], ["图图"]]


    this.setData({
      
    })
  }
})