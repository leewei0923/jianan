/**
 * author: leewei
 * date: 2022.01.16
 * description: 快速排序 / quick sort
 * modify:
 */

const quickSort1 = (arr) =>{
    if(arr.length <= 1) return arr;

    let pivotIdx = Math.floor(arr.length / 2);

    let pivot = arr.splice(pivotIdx, 1)[0];

    const left = [];
    const right = [];

    for(let i =0; i < arr.length; i++) {
        if(pivot < arr[i]) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot,quickSort(right));
}


console.log(quickSort([2,3,4,5,1,5,6,7,8]))