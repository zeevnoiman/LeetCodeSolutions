/**
 * @param {string} s
 * @return {string}
 */

// solution wth complexity of O(n^3)
// var longestPalindrome = function(s) {
//     let maxLengthPaly = ''
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i+1; j <= s.length; j++) {
//             if (isPaly(s.substring(i, j)) && maxLengthPaly.length < (j - i)) {
//                 maxLengthPaly = s.substring(i, j)
//             }
//         }
//     }
//     return maxLengthPaly
// };

// const isPaly = (str) => {
//     for (let i = 0, j = str.length-1; i < j; i++, j--) {
//         if (str[i] !== str[j]) {
//             return false
//         }
//     }
//     return true
// }


/**
 * @param {string} s
 * @return {string}
 */

//Solution O(n^2)
var longestPalindrome = function(s) {
    let longestPaly = ''
    for (let i = 0; i < s.length; i++) {
        const paly1 = checkIsPalyAroundCenter(i, s)
        const paly2 = checkIsPalyAroundCenter(i+0.5, s)

        if (paly1.length > paly2.length && paly1.length > longestPaly.length) {
            longestPaly = paly1
        }
        if (paly2.length > paly1.length && paly2.length > longestPaly.length) {
            longestPaly = paly2
        }
    }
    return longestPaly
};

const checkIsPalyAroundCenter = (center, s) => {
    let left = Math.floor(center)
    let right = Math.ceil(center)

    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--
        right++
    }
    left++
    right--
    return s.substring(left, right+1)
}


const example = 'abccbmba'

console.log(longestPalindrome(example))