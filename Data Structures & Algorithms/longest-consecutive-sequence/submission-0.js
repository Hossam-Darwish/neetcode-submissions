class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longestSequence = 0;
        let length = 0;

        for (let num of set) {
            if (!set.has(num - 1)) {
               length = 1;
               while (set.has(num + length)) {
                length++;

               }
               longestSequence = Math.max(longestSequence, length);
            }
            
        }
        return longestSequence;
    }
}
