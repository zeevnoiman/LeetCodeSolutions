const houseRobber = (arr) => {
    const results = new Array(arr.length).fill(0)
    if (arr.length < 3) {
        return Math.max(...arr)
    }
    results[0] = arr[0]
    results[1] = arr[1]

    let max = results[0]
    for (let i = 2; i < arr.length; i++) {
        results[i] = arr[i] + max
        max = Math.max(...results.slice(0, i))
    }

    return Math.max(...results)
}

const example = [1, 2, 10, 1, 1, 1, 1, 10]

console.log(houseRobber(example))
