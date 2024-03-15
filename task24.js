// Замыкание
// Карреляция
const Counter = () => {
    let value = 0
    return function () {
        value += 1
        return value
    }
}

const Closure = (a) => {
    return function (b) {
        return a + b
    }
}

let c = Counter()

console.log(Closure(5)(3))