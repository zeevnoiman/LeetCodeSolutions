//bruteForce
var maxArea = function(height) {
    var maxWater = 0;
    for (var i = 0; i<height.length; i++){
        for (var j=0; j<height.length; j++){
           var water = (j - i) * Math.min(height[i], height[j])
           if(water > maxWater){
               maxWater = water
           }
        }
    }
    return maxWater;
};

var maxArea = function(height) {
    var newHeight = new Array(10);
    for (var i = 0; i<height.length; i++){
        newHeight[height[i]] = []
    }
    return maxWater;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))
console.log(maxArea([4,3,2,1,4]))
console.log(maxArea([1,2,1]))