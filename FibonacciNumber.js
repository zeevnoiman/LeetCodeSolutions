var fib = function(N) {
    if (N <= 1){
        return N
    }
    
    var index = 2;
    var resultn_2 = 0;
    var resultn_1 = 1;
    var resultn;

    while (index <= N){
        resultn = resultn_1 + resultn_2;
        resultn_2 = resultn_1;
        resultn_1 = resultn;
        index++
    }

    return resultn
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));