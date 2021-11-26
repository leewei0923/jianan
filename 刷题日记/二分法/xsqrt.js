/**
 * author leewei
 * date 2021-11-25
 * task x 的平方根
 * @param {*} x 
 */

var mySqrt = function (x) {
  let l = 0;
  let r = x;
  let res = 0;
  while (l <= r) {
    let mid = ~~(l + (r - l) / 2);

    if (mid * mid <= x) {
      res = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return res;
};

console.log(mySqrt((x = 8)));
