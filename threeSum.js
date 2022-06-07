//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//
// Notice that the solution set must not contain duplicate triplets.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        const tuple = findSum(nums, -nums[i], i)
        if (tuple?.length) {
            result.push(...tuple)
        }
    }
    return result
};

const findSum = (nums, target, index) => {
    if (index > nums.length - 3) {
        return
    }
    const result = []
    for (let i = index + 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] && i !== index + 1) {
            continue
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === nums[j - 1] && j !== i + 1) {
                continue
            }
            if (nums[i] + nums[j] === target) {
                result.push([-target, nums[i], nums[j]])
            }
        }
    }
    return result
}
const threeSum2= (nums) => {
    nums.sort((a, b) => a - b)
    const result = []
    for(let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let target = -nums[i]
        let left = i + 1;
        let right = nums.length -1
        while (left < right) {
            if (left > i + 1 && nums[left] === nums[left - 1]) {
                left++
                continue
            }
            if (nums[left] + nums[right] === target) {
                result.push([nums[i], nums[left], nums[right]])
                left++
                continue
            }
            if (nums[left] + nums[right] < target) {
                left++
                continue
            }
            right--
        }
    }
    return result
}

// const example = [-1,0,1,2,-1,-4]
// console.log(threeSum(example))


const example = [0, 0, 0, 0, 0, -1 ,1]
console.log(threeSum2(example))