// Обмен валюты
// В массиве input информация о сумме операций, которые были в течение дня
// В лбъекте output ключ - название валюты, значение - массив из двух чисел(сумма
// всех операций покупки и сумма всех операций продажи)

const input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gbp', 'buy', 9000],
    ['eur', 'sell', 7000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 25000],
]

const calculateTransaction = (inputArray) => {
    let output = {}
    inputArray.forEach(elem => {
        if (!output.hasOwnProperty(elem[0])) {
            output[elem[0]] = [0, 0]
        }
        if (elem[1] === 'buy') {
            output[elem[0]][0] += elem[2]
        }
        if (elem[1] === 'sell') {
            output[elem[0]][1] += elem[2]
        }
    })
    return output
}

console.log(calculateTransaction(input))