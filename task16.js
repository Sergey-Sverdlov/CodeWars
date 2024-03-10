// Сортировка выбором
// Сложность алгоритма O(n ** 2)
let arr = [
    23, 92, 13,  3, 73, 79, 46,  6, 33, 12,  9,
    55, 84, 51, 25, 53, 51,  7, 16,  0, 64, 53,
    86, 75, 68, 69, 23, 92, 98, 53, 42, 79, 87,
    96, 92, 42, 42, 48, 40, 79, 17, 93, 44, 93,
    38, 50, 61, 25, 48, 13
]


const selectionSort = (array) => {
    for (let i = 0, len = array.length; i < len; i++) {
        let indexMin = i
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
        }
        [array[i], array[indexMin]] = [array[indexMin], array[i]]
    }
    return array
}

console.log(selectionSort(arr))