/**
 * author: leewei
 * data: 2022.01.20
 * title: 2029. 石子游戏 IX / https://leetcode-cn.com/problems/stone-game-ix/
 * count: 1
 * status: non
 */

var stoneGameIX = function (stones) {
    const mod = [0, 0, 0];
    for(const x of stones) {
        mod[x % 3]++;
    }

    if(mod[0] % 2 == 0) {
        return mod[1] != 0 && mod[2] != 0;
    } else {
        return Math.abs(mod[1] - mod[2]) <= 2;
    }

};