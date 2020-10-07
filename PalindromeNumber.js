// var isPalindrome = function(x) {
//     var n = Math.abs(x);
//     var arrayOfDigits = [];
//     if(x < 0){
//         return false;
//     }
    
//     while(n){
//         var digit = n % 10;
//         n = Math.trunc(n / 10);
//         arrayOfDigits.push(digit);
//     }
//     var middleOfTheArray = Math.trunc(arrayOfDigits.length / 2);
//     var length = arrayOfDigits.length;

//     for (var i = 0; i < middleOfTheArray; i++){
//         if(arrayOfDigits[i] != arrayOfDigits[length - 1]){
//             return false
//         };

//         length = length - 1;
//     }
//     return true;
// };


//we reverse the second half of the number and compare it with the first half
var isPalindrome = function(x) {
    var n = Math.abs(x);
    
    if(x < 0 || (x % 10 == 0 && x != 0)){
        return false;
    }

    var reversedHalf = 0;
    while(n > reversedHalf){
        reversedHalf = (reversedHalf * 10) + (n % 10);
        n = Math.trunc(n / 10);
    }

    var reversedHalfOdd = Math.trunc(reversedHalf / 10);

    console.log(n, reversedHalf, reversedHalfOdd);
    var isPalindromeResponse = n == reversedHalfOdd || n == reversedHalf; 

    return isPalindromeResponse;
};


console.log(isPalindrome(10));
console.log(isPalindrome(1221));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));