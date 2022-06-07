const twoSum = (nums, target) => {
    nums = nums.sort((a, b) => a - b);
    let left = 0
    let right = nums.length - 1

    const result = []
    while(left < right) {
        if (left > 0 && nums[left] === nums[left -1]) {
            left++;
            continue
        }

        if (nums[left] + nums[right] === target) {
            result.push([nums[left], nums[right]])
            left++
            continue
        }
        if (nums[left] + nums[right] < target) {
            left++
            continue
        }
        right--
    }

    return result
}

const example = [-1,0,1,2,-1,-4]

console.log(twoSum(example, 1))