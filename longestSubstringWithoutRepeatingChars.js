/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const arr = s.split("")
    let letters = []
    let maxCount = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        const index = letters.findIndex((char) => char === arr[i])
        if (index !== -1) {
            i = i - letters.length + index + 1
            count = 0
            maxCount = maxCount < letters.length ? letters.length : maxCount
            letters = []
        }
        count++
        letters.push(arr[i])
    }

    maxCount = maxCount < count ? count : maxCount
    return maxCount
};

const example = "abcvbp"

console.log(lengthOfLongestSubstring(example))
