const api = require("./api.js")

// 日期格式化

function formatDate() {
    let date = new Date();
    let year = date.getFullYear() //获取年份
    let month = date.getMonth() + 1 // 获取月
    let day = date.getDate()  //天

    let hour = date.getHours() //小时
    let minute = date.getMinutes() //分钟
    let second = date.getSeconds() //秒

    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 数字格式化

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

// 封装字节的request

function request(url, data = {}, method = 'POST') {
    return new Promise((resolve, reject) => {

        // 发送到目标服务器
        tt.request({
            url: url, // 目标服务器url
            data: data,
            method: method,
            header: {
                "content-type": "application/json"
            },
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err)
            }
        })
    })

}



// 检查当前会话是否过期

function checkSession() {
    return new Promise(function (resolve, reject) {
        tt.checkSession({
            success: () => {
                resolve(true)
            },
            fail: () => {
                reject(false)
            }
        });
    })
}


// 调用字节登录

function byteDanceLogin() {
    return new Promise(function (resolve, reject) {
        tt.login({
            force: true,
            success: (res) => {
                if (res.code) {
                    resolve(res.code)
                } else {
                    reject(err)
                }
            },

            fail: (err) => {
                reject(err)
            }
        });
    })
}


// 获取用户信息

function getUserInfo() {
    return new Promise(function (resolve, reject) {
        tt.getUserInfo({
            withCredentials: true,
            success: function (res) {
                if (res.detail.errMsg === 'getUserInfo:ok') {
                    resolve(res);
                } else {
                    reject(err)
                }
            },
            fail: function (err) {
                reject(err)
            }
        });
    })
}


//判断该页面是否需要登录

function radirect(url) {
    if (url) {
        tt.navigateTo({
            url: '' // 指定页面的url
        });
        return false;
    } else {
        tt.navigateTo({
            url: '' // 指定页面的url
        });
    }
}

// 展示错误信息

function showError(msg) {

    tt.showToast({
        title: msg, // 内容
    });

}

// 获取本地存储

function getStorage(keyData) {
    return new Promise((resolve, reject) => {
        tt.getStorage({
            key: keyData, // 缓存数据的key
            success: (res) => {
                resolve(res)
            },
            fail: (res) => {
                reject(res)
            }
        });
    })

}

// 轻服务上传

function uploadFile() {
    const serviceId = 'qc5i9s'; // serviceId
    const inspirecloud = new InspireCloud({ serviceId });
    const fileUploadToken = '48bbb4c7-9a40-472e-b3a1-069aaf25187e'; // 客户端上传 token，

    // 调用小程序上传api

    const update = new Date();
    const curTime = date.getTime(); //获取当前时间戳
    const imgName = curTime+'.jpg'

    tt.chooseImage({
        success: (res) => {
            // file 对象中的 path 必须为绝对路径
            const file = {
                path: res.tempFiles[0]
            };
            inspirecloud.file.upload(imgName, file, { token: fileUploadToken })
                .then((data) => {
                    // 上传成功
                    console.log(data.url);
                })
                .catch((error) => {
                    // 调用失败，进行错误处理
                });
        }
    });
}

module.exports = {
    formatDate,
    formatNumber,
    request,
    getUserInfo,
    byteDanceLogin,
    radirect,
    showError,
    checkSession,
    getStorage,
    
}