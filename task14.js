// алгоритм линейного поиска
// Сложность алгоритма O(n)
const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]

const linearSearch = (array, item) => {
    for (let i = 0, len = array.length; i < len; i++) {
        if (array[i] === item)
            return i
    }
    return null
}

console.log(linearSearch(array, 8))