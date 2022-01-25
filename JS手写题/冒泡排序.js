/**
 * author: leewei
 * date: 2022.01.16
 * description: 冒泡排序 / bubble sort
 * modify:
 */


const times = [];
const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
      for(let j = 0; j < nums.length - i; j++) {
        if(nums[j] < nums[j + 1]) {
           let tem = nums[j];
           nums[j] = nums[j + 1];
           nums[j + 1] = tem;
        }

        times.push(1);
      }
  }

  return nums;
};
console.log(bubbleSort([2,4,1,6,3,4,7]));
console.log(`执行的次数为:${times.length}`);