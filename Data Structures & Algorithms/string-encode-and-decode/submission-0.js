class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const result = [];

        for (let s of strs ) {
            result.push(String(s.length),'#', s);
        }
        return result.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];

        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#'){
                j++;
            }
            let length = parseInt(str.substring(i,j), 10);
            i = j+1;
            j = i + length;
            result.push(str.substring(i,j));

            i = j;
        }

        return result;


    }
}
