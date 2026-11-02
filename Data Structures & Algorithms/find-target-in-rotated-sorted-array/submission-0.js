class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        let pivot = 0;

        while (l < r) {
            let m = l + Math.floor((r - l)/2);
             if (nums[m] > nums[r]) {
                l = m + 1;
             } else {
                r = m;
             }
             pivot = l;
        }

        l = 0;
        r = nums.length - 1;

        
        if (target >= nums[pivot] && target <= nums[r]) {
            l = pivot;
        } else {
            r = pivot - 1;
        }

        while ( l <= r) {
            let m = Math.floor((l + r) / 2);
            if (nums[m] === target) {
                return m;
            }
            else if (nums[m] < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return -1;
    }
}
