class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if (!height.length) return 0

        let res = 0

        let l = 0
        let leftMax = height[l]

        let r = height.length - 1
        let rightMax = height[r]

        while(l < r) {
            if(leftMax < rightMax) {
                l++
                leftMax = Math.max(leftMax, height[l])
                res += Math.ceil(leftMax - height[l])
            } else {
                r--
                rightMax = Math.max(rightMax, height[r])
                res += Math.ceil(rightMax - height[r])
            }
        }

        return res
    }
}
