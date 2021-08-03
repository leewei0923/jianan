const ApiRootUrl = 'https://qc5i9s.fn.thelarkcloud.com'

module.exports = {
    // talkTime/mine/personInfo
    personInfo:ApiRootUrl+'/personInfo', //个人信息查询
    login: ApiRootUrl+'/login',  //用户登录
    infoEdit: ApiRootUrl+'/Edit', //用户信息修改
    // qcmap/detail/liuyan
    subLiuYan:ApiRootUrl+'/liuyan' ,   // 地图留言界面的提交接口
    liuyanshow:ApiRootUrl +'/liuyanshow', //地图的留言展示接口

    // add
    addArticle:ApiRootUrl + '/addArticle' //提交文章内容的接口
}