// Кеширование функций

const cashFunction = (fn) => {
    let cash = {}
    return function (n) {
        if (cash.hasOwnProperty(n)) {
            console.log("Взято из кеша")
            return cash[n]
        }
        cash[n] = fn(n)
        console.log("Подсчет функции")
        return cash[n]
    }
}

function factorial(n) {
    let result = 1
    while (n !== 1) {
        result *= n
        n -= 1
    }
    return result
}

const cashFactorial = cashFunction(factorial)
console.log(cashFactorial(5))
console.log(cashFactorial(5))