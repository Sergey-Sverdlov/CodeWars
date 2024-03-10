//алгоритм бинарного поиска
// Сложность алгоритма O(log2n)
const array = [1, 2, 5, 9, 11, 14, 18 ,21]
const binarySearch = (array, item) => {
    let count = 0
    let start = 0
    let end = array.length
    let middle;
    let found = false
    let position = -1
    while (found === false && start <= end) {
        count += 1
        middle = Math.floor((start + end) / 2)
        if (array[middle] === item) {
            found = true
            position = middle
            return [position, count]
        }
        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return [position, -1]
}

const [position, count] = binarySearch(array, 2)
console.log(position, count)