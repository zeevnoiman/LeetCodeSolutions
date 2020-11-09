// //bruteForce
// var maxArea = function(height) {
//     var maxWater = 0;
//     for (var i = 0; i<height.length; i++){
//         for (var j=0; j<height.length; j++){
//            var water = (j - i) * Math.min(height[i], height[j])
//            if(water > maxWater){
//                maxWater = water
//            }
//         }
//     }
//     return maxWater;
// };

var maxArea = function(height) {
    var i = 0;
    var j = height.length -1;

    var maxWater = 0;
    while(i < j){
        var smallerWaterIndex = height[i] < height[j] ? i : j;
        var waterArea = (j - i) * height[smallerWaterIndex];
        if(waterArea > maxWater){
            maxWater = waterArea;
        }
        height[i] < height[j] ? i++ : j--;
    }

    return maxWater;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))
console.log(maxArea([4,3,2,1,4]))
console.log(maxArea([1,2,1]))