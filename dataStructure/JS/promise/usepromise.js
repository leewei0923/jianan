const promise = require("./promise")

let p1 = new Promise((resolve , reject) => {
    resolve(200)
})
console.log(promise)