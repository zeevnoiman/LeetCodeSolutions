//Good runtime but in high memory usage
var twoSum = function(nums, target) { 
    const numsOriginal = nums.map(num => num);
    nums.sort(function(a, b) {
         return a - b;
    })    
    var importantIndexes = [];
    for(var firstIndex = 0; firstIndex < nums.length; firstIndex++){
        for(var secondIndex = firstIndex + 1; secondIndex < nums.length; secondIndex++){
            if(nums[firstIndex] + nums[secondIndex] == target){
                importantIndexes =  [firstIndex, secondIndex];
                break;
            }
        }
        if (importantIndexes.length > 0){
            break;
        }
    }
    const responseIndexes = numsOriginal.map((num, index) => {
        if(num == nums[importantIndexes[0]] || num == nums[importantIndexes[1]]){
            return index;
        }
    }).filter(num => num != undefined)
    return responseIndexes;
};

//low memory usage but in bad run time
var twoSum = function(nums, target) { 
    var importantIndexes = [];
    for(var firstIndex = 0; firstIndex < nums.length; firstIndex++){
        for(var secondIndex = firstIndex + 1; secondIndex < nums.length; secondIndex++){
            if(nums[firstIndex] + nums[secondIndex] == target){
                importantIndexes =  [firstIndex, secondIndex];
                break;
            }
        }
        if (importantIndexes.length > 0){
            break;
        }
    }
    return importantIndexes;
};

//hash table - best run time, high memory usage
var twoSum = function(nums, target) {
    var map = {};
    nums.map((num, index) => map[num] = index );
    console.log(map); 
    var importantIndexes = [];
    for(var firstIndex = 0; firstIndex < nums.length; firstIndex++){
        const completionNumber = target - nums[firstIndex];
        if(map[completionNumber]){
            if(firstIndex !=map[completionNumber]){
                importantIndexes =  [firstIndex, map[completionNumber]];
                break;
            }
        }
        if (importantIndexes.length > 0){
            break;
        }
    }
    return importantIndexes;
};
const nums = [1,3,4,2];

const response = twoSum(nums, 6);

console.log(response);