// Быстрая сортировка
// Сложность алгоритма O(log2n * n)

let arr = [
    23, 92, 13,  3, 73, 79, 46,  6, 33, 12,  9,
    55, 84, 51, 25, 53, 51,  7, 16,  0, 64, 53,
    86, 75, 68, 69, 23, 92, 98, 53, 42, 79, 87,
    96, 92, 42, 42, 48, 40, 79, 17, 93, 44, 93,
    38, 50, 61, 25, 48, 13
]


const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0, len = arr.length; i < len; i++) {
        if (i === pivotIndex) {
            continue
        }
        if (arr[i] < pivot)
            less.push(arr[i])
        else
            greater.push(arr[i])
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))