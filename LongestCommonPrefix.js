/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <=0){
        return '';
    }
    const lenghtOfWords = strs.map(word => 
                                word.length
                                )
    const minLength = lenghtOfWords.sort((a, b) => a - b)[0];

    var firstLettersSorted;
    var i = 0
    for(i; i < minLength; i++){
        const firstLetters = strs.map(word => word[i] )
        firstLettersSorted = firstLetters.sort()
        if(firstLettersSorted[0] != firstLettersSorted[firstLettersSorted.length - 1]){
            break;
        }
    }
    return strs[0].substring(0, i);
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["dog","dog","dogagaga"]));
console.log(longestCommonPrefix(["hahahaha","hahahaha","hahahaha"]));
console.log(longestCommonPrefix(["a","abc","abcdef"]));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["mannnn"]));
console.log(longestCommonPrefix(["mannnn", "", "mannnn"]));