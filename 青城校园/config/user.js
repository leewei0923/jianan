/*
time: 2021.07.27
author: weiwei

调用登录 获取用户信息 loginByteDance
判断是否登录 checkLogin

*/

const api = require("./api.js")
const util = require("./getInfo.js")  //调用登录等

/*
* 调用登录
*/
 
function loginByteDance(){
    let code = null

    return new Promise(function (resolve,reject){
        return util.login().then((res) => {
            code = res.code;
            return util.getUserInfo();
        }).then((userInfo) => {

        })
    })
}