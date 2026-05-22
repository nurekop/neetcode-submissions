class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let ms = new Map()
        let l = 0
        let res = 0

        for(let r = 0; r < s.length; r++ ) {
            if(ms.has(s[r])) {
                l = Math.max(ms.get(s[r]) + 1, l)
            }

            ms.set(s[r], r)
            res = Math.max(res, r - l + 1)
        }

        return res
    }
}
