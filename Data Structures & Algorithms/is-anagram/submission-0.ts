class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let sArray = s.split('');
        let tArray = t.split('');
        sArray.sort((a,b) => (a.localeCompare(b)) );
        tArray.sort((a,b) => (a.localeCompare(b)) );

        return sArray.join('') == tArray.join('')
    }
}
