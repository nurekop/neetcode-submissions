class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        let longets = 0

        for(const n of nums) {
            if (!numSet.has(n-1)) {
                let length = 0

                while (numSet.has(n + length)) {
                    length += 1
                }

                longets = Math.max(length, longets)
            }
        }

        return longets
    }
}
