/**
 * @param {string[]} strs
 * @return {string}
 */


// var longestCommonPrefix = function(strs) {
//     if (strs.length <=0){
//         return '';
//     }
//     const lenghtOfWords = strs.map(word => 
//                                 word.length
//                                 )
//     const minLength = lenghtOfWords.sort((a, b) => a - b)[0];
    
//     console.log(minLength);

//     var firstLettersSorted;
//     var i = 0
//     for(i; i < minLength; i++){
//         const firstLetters = strs.map(word => word[i] )
//         firstLettersSorted = firstLetters.sort()
//         if(firstLettersSorted[0] != firstLettersSorted[firstLettersSorted.length - 1]){
//             break;
//         }
//     }
//     return strs[0].substring(0, i);
// };


//Recursive Algorithm
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return "";
    }

    if (strs.length == 1){
        return strs[0];
    }

    const firstWord = strs[0];
    const secondWord = strs[1];
    const minLength = firstWord.length < secondWord.length ? firstWord.length : secondWord.length;
    
    var i = 0
    for( i ; i < minLength; i++){
        if(firstWord[i]!=secondWord[i]) break;
    }

    const commonWord = firstWord.substring(0, i)
    strs.splice(0,2,commonWord);
    
    return longestCommonPrefix(strs)
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["dog","dog","dogagaga"]));
console.log(longestCommonPrefix(["hahahaha","hahahaha","hahahaha"]));
console.log(longestCommonPrefix(["a","abc","abcdef"]));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["mannnn"]));
console.log(longestCommonPrefix(["mannnn", "", "mannnn"]));