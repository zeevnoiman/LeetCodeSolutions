
const groupAnagrams = (strs) => {
    const response = {}
    strs.forEach(word => {
        const wordSorted = word.split("").sort().join("")
        if (response[wordSorted]) {
            response[wordSorted].push(word)
        } else {
            response[wordSorted] = [word]
        }
    })
    return Object.values(response)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat", "tab"]))