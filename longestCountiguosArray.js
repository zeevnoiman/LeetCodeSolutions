const longestCountiguosArray = (arr) => {
    let maxLength = 1;
    for (let i= 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            const subArray = arr.slice(i, j + 1)
            const max =  Math.max(...subArray)
            const min = Math.min(...subArray)
            if (max - min === subArray.length - 1) {
                maxLength = subArray.length > maxLength ? subArray.length : maxLength
            }
        }
    }
    return maxLength
}

const example = [17, 12, 11, 13, 20, 21];

console.log(longestCountiguosArray(example))