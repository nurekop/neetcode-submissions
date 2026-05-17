class Solution {
    checkAlphaNumeric(c: string): boolean {
        return (
            (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            (c >= '0' && c <= '9')
        );
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let newS = ''

        for (let c of s) {
            if (this.checkAlphaNumeric(c)) {
                newS += c.toLowerCase();
            }
        }

        return newS === newS.split('').reverse().join('')
    }
}
