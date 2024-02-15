function hasTwoCubeSums(n) {
    if (n === 0)
        return true
    let findA = -1
    let findB = -1
    let obj = []

    for (let i = 0; i < +Math.pow(n, 1 / 3) + 1; i++) {
        for (let j = i; j < +Math.pow(n, 1 / 3) + 1; j++) {
            let a = i
            let b = j
            if (a ** 3 + b ** 3 === n) {
                findA = a
                findB = b
                obj.push({
                    a: findA,
                    b: findB
                })
            }
        }
    }
    return obj.length >= 2
}

// Create a function
//
// hasTwoCubeSums(n)
// which checks if a given number n can be written as the sum of two cubes in two different ways: n = a³+b³ = c³+d³. All the numbers a, b, c and d should be different and greater than 0.
//
// E.g. 1729 = 9³+10³ = 1³+12³.
//
// hasTwoCubeSums(1729); // true
// hasTwoCubeSums(42);   // false