const phoneDigitsMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    const combinations = []

    if (!digits.length) {
        return []
    }

    const possibleLetters = digits.split('').map(digit => phoneDigitsMap[digit])

    let temp = []
    for (let i = 0; i < possibleLetters[0].length; i++) {
        temp = possibleLetters[0][i]
        const bt = generateCombinations(temp, possibleLetters, 1)
        combinations.push(bt)
    }
    return combinations.flat(digits.length - 1)
};

const generateCombinations = (original, combinations, currentIndex) => {
    if (currentIndex === combinations.length) {
        return original
    }
    const results = []
    const tmp = []
    combinations[currentIndex].forEach(option => tmp.push(`${original}${option}`))
    tmp.forEach(result => {
        const bt = generateCombinations(result, combinations, currentIndex + 1)
        results.push(bt)
    })
    return results
}

const example = ''

console.log(letterCombinations(example))