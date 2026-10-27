class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const res = {};

        for (let s of strs) {
            let counter = new Array(26).fill(0);

            for (let c of s ) {
                counter[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1; 
            }
            const key = counter.join(',');

             if (!res[key]) {
                    res[key] = [];
                }

            res[key].push(s);
        }

        return Object.values(res);
    }
}
