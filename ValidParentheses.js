/**
 * @param {string} s
 * @return {boolean}
 */

var openSigns = ['(', '{', '['];
var closeSigns = [')', '}', ']'];

var isValid = function(s) {
    var stack = [];
    
    for (var i = 0; i < s.length; i++){
        if (openSigns.indexOf(s[i]) >= 0){
            stack.push(s[i])
        } else {
            var sign = stack.pop()
            if (s[i] != closeSigns[openSigns.indexOf(sign)]) {
                return false;
            }
        } 
    }
    if (stack.length > 0) return false;
    return true;
};


console.log(isValid('['))
console.log(isValid('[(('))
console.log(isValid('(]'))
console.log(isValid('[({()})]'))
console.log(isValid('[](){()})]'))
console.log(isValid('[[](){()}()()]'))