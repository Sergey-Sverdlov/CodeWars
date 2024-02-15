function moveZeros(arr) {
    const countZero = arr.filter(x => x === 0).length
    const resultArray = arr.filter(elem => elem !== 0)
    resultArray.push(...new Array(countZero).fill(0, 0))
    return resultArray
}

// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]