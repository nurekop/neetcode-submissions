class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        const sortedS : string[] = s.split('').sort()
        const sortedT : string[] = t.split('').sort()

        if (sortedS.length !== sortedT.length) return false

        let found : number = 0

        for(let i = 0; i < sortedS.length; i++) {
            if (sortedS[i] === sortedT[i]) {
                found++
            }
        }

        return found === sortedS.length
    }
}
