// Сортировка пузырьком
// Сложность алгоритма O(n * n)

let arr = [
    23, 92, 13,  3, 73, 79, 46,  6, 33, 12,  9,
    55, 84, 51, 25, 53, 51,  7, 16,  0, 64, 53,
    86, 75, 68, 69, 23, 92, 98, 53, 42, 79, 87,
    96, 92, 42, 42, 48, 40, 79, 17, 93, 44, 93,
    38, 50, 61, 25, 48, 13
]


const sortArray = (arr) => {
    for (let i = 0, len = arr.length; i < len; i++)
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    return arr
}

console.log(sortArray(arr))