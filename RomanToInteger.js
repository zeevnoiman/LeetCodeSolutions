const ROMAN_NUMBERS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

var romanToInt = function(s) {
    var result = 0;
    var lastDigitComputed = false;
    const arrayOfRomans = s.split("");
    const arrayOfNumbers = arrayOfRomans.map(roman => ROMAN_NUMBERS[roman]);

    for (let index = 0; index < arrayOfNumbers.length - 1; index++){
        if (arrayOfNumbers[index] >= arrayOfNumbers[index+1]){
            result += arrayOfNumbers[index];
        }
        else {
            result += (arrayOfNumbers[index+1] - arrayOfNumbers[index])
            if(index == arrayOfNumbers.length-2){
                lastDigitComputed = true;
            }
            index++;
        }
    }
    if(lastDigitComputed == false){
        result += arrayOfNumbers[arrayOfNumbers.length-1];
    }
    return result;

};


console.log( romanToInt('XI') );
console.log( romanToInt('XIII') );
console.log( romanToInt('CI') );
console.log( romanToInt('IX') );
console.log( romanToInt('MCIX') );
console.log( romanToInt('MCMXCIV') );
console.log( romanToInt('MDCXCV') );