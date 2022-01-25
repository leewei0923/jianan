import java.util.ArrayList;
import java.util.HashMap;

class Solution {

    public static void main (String[] args) {
//        ArrayList<Integer> numList = new ArrayList<Integer>();
        int list[] = {0, 1};
        findMaxLength(list);
    }
    public static int findMaxLength(int[] nums) {
        int len = nums.length;

        int pre = 0;
        int res = 0;

        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        map.put(0, -1);

        for(int i = 0; i < len; i++) {

            pre += nums[i] == 0 ? -1 : 1;
            if(map.containsKey(pre)) {
                res = Math.max(res, i - map.get(pre));
            } else {
                map.put(pre, i);
            }
        }

        return res;
    }
}
