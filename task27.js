// Сортировка classNames
// Вход - массив классов
// Выход - массив уникальных элементов, отсортированной по количеству использования

let classNames = [
    'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link',
    'link', 'link', 'link', 'link', 'link'
]

// output =

const sortClasses = (classNames) => {
    let objectCounter = {}
    classNames.forEach(className => {
        if (!objectCounter.hasOwnProperty(className)) {
            objectCounter[className] = 1
            return
        }
        objectCounter[className] += 1
    })
    let array = Object.entries(objectCounter)
    array = array.sort((a, b) => a[1] > b[1] ? -1 : 1)
    let arrayResult = array.reduce((acc, elem) => {
        acc.push(elem[0])
        return acc
    }, [])
    return arrayResult
}
console.log(sortClasses(classNames))