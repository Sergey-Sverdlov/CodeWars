"use strict"
let input1 = [[1, 3], [2, 6], [4, 10], [15, 18]]
let input2 = [[1, 4], [4, 5]]
let input3 = [[11, 12], [2, 3], [5,7], [1, 4], [8, 10], [6, 8]]
const merge = (intervals) => {
    const intervalsSort = intervals.sort((a, b) => a[0] > b[0] ? 1 : -1)
    for (let i = 0; i < intervalsSort.length - 1; i++) {
        if (intervalsSort[i][1] >= intervalsSort[i + 1][1]) {
            intervalsSort.splice(i + 1, 1)
            i += 1
        }
        if (intervalsSort[i][1] >= intervalsSort[i + 1][0]) {
            intervalsSort[i][1] = intervalsSort[i + 1][1]
            intervalsSort.splice(i+1, 1)
            i -= 1
        }
    }
    return intervalsSort
}

console.log(merge(input1))
console.log(merge(input2))
console.log(merge(input3))

// объединение интервалов