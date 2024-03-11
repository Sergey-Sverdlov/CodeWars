// Факториал числа
const factorial = (n) => {
    if (n === 1)
        return 1
    return n * factorial(n - 1)
}


// Получение числа Фиббоначи

const fib = (n) => {
    return fibbonachi(n, 1, 1, 2)
}

const fibbonachi = (n, a, b, count) => {
    if (n === count) {
        return b
    }
    [a, b] = [b, a + b]
    return fibbonachi(n, a, b, ++count)
}

console.log(factorial(5))

console.log(fib(8))