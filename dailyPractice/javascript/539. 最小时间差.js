/**
 * author: leewei
 * data: 2022.01.18
 * title: 539. 最小时间差 / https://leetcode-cn.com/problems/minimum-time-difference/
 * count: 1
 * status: ok
 */

var findMinDifference = function (timePoints) {
  let timeBox = [];
  for (const x of timePoints) {
    timeBox.push(transform(x));
  }
  timeBox.sort((a, b) => a - b);
  let mininDifference = 2000;
  for (let i = 0; i < timeBox.length - 1; i++) {
      if (timeBox[i + 1] - timeBox[i] < mininDifference) {
        mininDifference = timeBox[i + 1] - timeBox[i];
      }
  }
//   console.log(timeBox);
  return Math.min(mininDifference, timeBox[0] + 1440 - timeBox[timeBox.length - 1]);

  function transform(time) {
    if (time == "00:00") return 1440;
    const timeSplit = time.split(":");
    return timeSplit[0] * 60 + Number(timeSplit[1]);
  }
}; 

// console.log(findMinDifference(["23:59", "00:00"]));

console.log(findMinDifference(["00:00", "23:59", "00:00"]));

// console.log(findMinDifference(["05:31", "22:08", "00:35"]));