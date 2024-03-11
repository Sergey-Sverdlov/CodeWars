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

const binarySearchRecursive = (array, item, start, end) => {
    let middle = Math.floor((start + end) / 2)
    if (item === array[middle])
        return middle
    if (item < array[middle]) {
        return binarySearchRecursive(array, item, start, middle - 1)
    }
    if (item > array[middle])
        return binarySearchRecursive(array, item, middle + 1, end)

}

const [position, count] = binarySearch(array, 14)
console.log(position, count)
let len = array.length
console.log(binarySearchRecursive(array, 14, 0, len))