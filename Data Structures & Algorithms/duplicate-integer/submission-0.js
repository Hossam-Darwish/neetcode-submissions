class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let noDublicate = new Set(nums);
        if (nums.length !== noDublicate.size) {
            return true
        } else {
            return false
        }
    }
}

let s = new Solution();
s.hasDuplicate([1,2,3]);
