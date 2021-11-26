/**
 * author leewei
 * date 2021-11-25
 * task 手写ajax
 * @param {*} method 
 * @param {*} url 
 * @param {*} async 
 */

const ajax = (method, url, async) => {
    const xhr = new XMLHttpRequest();
    // 设置http请求
    xhr.open(method, url, async);
    // 设置状态
    xhr.onreadystatuschange = function() {
        if(this.readyState !== 4) return;

        if(this.status === 200) {
            return this.response;
        } else {
            console.error(this.statusText);
        }
    }

    xhr.onError = function () {
        console.error(this.errorText);
    }

    xhr.responseType = 'json';

    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();
}

