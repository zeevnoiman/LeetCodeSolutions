var reverse = function(x) {
    var n = Math.abs(x);
    var reverseX = '';
    var isNegative = x < 0 ? true : false;
    while(n){
        var lastInX = n % 10;
        n = Math.trunc(n / 10);
        var lastInXString = lastInX.toString();
        var reverseX = reverseX + lastInXString;
    }

    if(reverseX > Math.pow(2, 31) -1 || -reverseX < Math.pow(-2, 31)){
        return 0;
    }
    if (isNegative)
        return -reverseX;
    else{
        return reverseX
    }    
};


console.log( reverse(-123) );
console.log( reverse(32323232342343) );